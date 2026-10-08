import React, { useState, useEffect, useRef } from "react";
import { X, Send, Loader2, Mail } from "lucide-react";
import nerdImage from "../assets/nerd.png";
import thumbsupImage from "../assets/thumbsup.png";

function TypewriterText({ text, className, onComplete }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        if (onComplete) onComplete();
      }
    }, 55);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className={className}>
      {displayed}
      {displayed.length < text.length && (
        <span className="animate-cursor">|</span>
      )}
    </span>
  );
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [hasStartedSequence, setHasStartedSequence] = useState(false);
  const [isFinalDone, setIsFinalDone] = useState(false);

  const getDeviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) return "Tablet";
    if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) return "Phone";
    return "PC/Laptop";
  };

  const getBrowserInfo = () => {
    const ua = navigator.userAgent;
    let browser = "unknown";
    let version = "";
    if (ua.includes("Firefox/")) {
      browser = "firefox";
      version = ua.split("Firefox/")[1].split(" ")[0];
    } else if (ua.includes("Edg/")) {
      browser = "edge";
      version = ua.split("Edg/")[1].split(" ")[0];
    } else if (ua.includes("Chrome/")) {
      browser = "chrome";
      version = ua.split("Chrome/")[1].split(" ")[0];
    } else if (ua.includes("Safari/")) {
      browser = "safari";
      version = ua.split("Version/")[1]?.split(" ")[0] || "";
    }
    version = version.split(".")[0];
    const lang = navigator.language ? navigator.language.toLowerCase() : "en-us";
    return { browser, version, lang };
  };

  const getTimeGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return "morning";
    if (hour >= 12 && hour < 18) return "afternoon";
    return "evening";
  };

  const runSequence = async () => {
    setHasStartedSequence(true);
    setIsTyping(true);

    const delay = (ms) => new Promise(res => setTimeout(res, ms));
    const setSingleMessage = (text) => {
      setMessages([{ id: Date.now() + Math.random(), sender: "ai", text }]);
    };

    let ipData = {
      ip: "Unknown",
      city: "Unknown",
      region: "Unknown",
      country: "Unknown",
      lat: "Unknown",
      lon: "Unknown",
      isp: "your ISP"
    };

    try {
      const res = await fetch("https://ipapi.co/json/");
      if (res.ok) {
        const data = await res.json();
        ipData = {
          ip: data.ip || "Unknown",
          city: data.city || "Unknown",
          region: data.region || "Unknown",
          country: data.country_name || "Unknown",
          lat: data.latitude || "Unknown",
          lon: data.longitude || "Unknown",
          isp: data.org ? data.org.toLowerCase() : "your ISP"
        };
      }
    } catch (e) {
      console.error("Failed to fetch IP data");
    }

    await delay(3500);
    setIsTyping(false);

    setSingleMessage("before i answer...");
    await delay(4000);
    setSingleMessage("here is what your browser already shared the moment you opened this site");
    await delay(5000);
    setSingleMessage(`you are currently in ${ipData.region}, ${ipData.country}`);
    await delay(5000);
    setSingleMessage(`your IP address is ${ipData.ip}`);
    await delay(5000);
    setSingleMessage(`your ISP routing coordinates are ${ipData.lat}, ${ipData.lon}`);
    await delay(5000);
    setSingleMessage(`you are connected through ${ipData.isp}`);
    await delay(5000);
    const device = getDeviceType();
    setSingleMessage(`you are on a ${device.toLowerCase()}`);
    await delay(5000);
    const browserInfo = getBrowserInfo();
    setSingleMessage(`you are browsing with ${browserInfo.browser} ${browserInfo.version} set to ${browserInfo.lang}`);
    await delay(5500);
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const currentTime = new Date().toLocaleTimeString();
    setSingleMessage(`timezone: ${timeZone} | current time: ${currentTime}`);
    await delay(5000);
    setSingleMessage("none of this needed your permission");
    await delay(5000);
    setSingleMessage("your browser shares it with every website you open, automatically");
    await delay(5000);
    setSingleMessage("so be mindful of what you click, and who you trust online");
    await delay(5500);
    setSingleMessage("__QUESTION__");
  };

  const handleMailClick = () => {
    setMessages([{ id: Date.now(), sender: "ai", text: "__FINAL__" }]);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim() || hasStartedSequence) return;
    setMessages([]);
    setInputMessage("");
    runSequence();
  };

  const toggleAssistant = () => {
    if (isOpen) {
      setIsOpen(false);
      setMessages([]);
      setHasStartedSequence(false);
      setInputMessage("");
      setIsTyping(false);
      setIsFinalDone(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={toggleAssistant}
          className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-gray-900 dark:text-white shadow-xl hover:bg-white/20 transition-all font-mono text-sm flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Ask me anything
        </button>
      </div>

      {/* Full Screen Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-white/70 dark:bg-black/95 backdrop-blur-xl animate-fade-in">
          
          <button 
            onClick={toggleAssistant}
            className="absolute top-8 right-8 p-2 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <X size={32} strokeWidth={1} />
          </button>

          <div className="w-full max-w-4xl flex flex-col h-full justify-center items-center">
            
            <div className="flex-1 w-full flex items-center justify-center">
              
              {!hasStartedSequence && messages.length === 0 && (
                <div className="text-4xl sm:text-6xl font-mono text-gray-900 dark:text-white opacity-50 text-center w-full">
                  what do you want to ask?
                </div>
              )}

              {isTyping && (
                <div className="font-mono text-2xl sm:text-4xl text-gray-400 flex items-center justify-center gap-4 animate-fade-in w-full">
                  <Loader2 className="w-8 h-8 animate-spin" /> thinking...
                </div>
              )}

              {!isTyping && messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className="animate-fade-in text-center max-w-4xl leading-relaxed w-full"
                >
                  {msg.text === "__QUESTION__" ? (
                    <div className="flex flex-col items-center gap-6">
                      <span className="font-mono text-2xl sm:text-4xl text-gray-900 dark:text-white">as for your question, tap this</span>
                      <button
                        onClick={handleMailClick}
                        className="p-4 rounded-full border-2 border-gray-300 dark:border-gray-600 hover:border-gray-900 dark:hover:border-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all group"
                        aria-label="Open answer"
                      >
                        <Mail size={32} className="text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
                      </button>
                      <img 
                        src={nerdImage}
                        alt="Nerd Emoji" 
                        className="w-64 sm:w-96 object-contain drop-shadow-lg -mt-8 sm:-mt-16 -translate-x-2 sm:-translate-x-4 dark:hidden pointer-events-none"
                      />
                    </div>
                  ) : msg.text === "__FINAL__" ? (
                    <div className="flex flex-col items-center">
                      <TypewriterText 
                        text={`i don't want to waste tokens on that, have a nice ${getTimeGreeting()} :)`}
                        className="font-mono text-2xl sm:text-4xl text-gray-900 dark:text-white"
                        onComplete={() => setIsFinalDone(true)}
                      />
                      {isFinalDone && (
                        <img
                          src={thumbsupImage}
                          alt="Thumbs up"
                          className="w-64 sm:w-96 object-contain drop-shadow-lg -mt-6 sm:-mt-10 animate-fade-in dark:hidden"
                        />
                      )}
                    </div>
                  ) : (
                    <span className="font-mono text-2xl sm:text-4xl text-gray-900 dark:text-white">
                      {msg.text}
                    </span>
                  )}
                </div>
              ))}
              
            </div>

            {!hasStartedSequence && (
              <form 
                onSubmit={handleSendMessage}
                className="relative w-full max-w-2xl mt-auto border-b border-gray-300 dark:border-gray-700 pb-4 mb-8"
              >
                <input
                  type="text"
                  autoFocus
                  placeholder="Type here and press enter..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  className="w-full bg-transparent text-xl sm:text-3xl font-mono text-gray-900 dark:text-white py-4 outline-none placeholder:text-gray-400/50 text-center"
                />
                <button
                  type="submit"
                  disabled={!inputMessage.trim()}
                  className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-black dark:hover:text-white disabled:opacity-0 transition-all"
                >
                  <Send size={24} />
                </button>
              </form>
            )}

          </div>
        </div>
      )}
    </>
  );
}

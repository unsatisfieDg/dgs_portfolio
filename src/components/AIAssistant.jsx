import React, { useState, useRef, useEffect } from "react";
import { 
  MessageSquare, 
  X, 
  Send, 
  Bot, 
  User, 
  ChevronDown
} from "lucide-react";

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "ai",
      text: "Hello. I'm Danie's Assistant. How can I assist you with Danie's portfolio, background, or projects today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const chatEndRef = useRef(null);

  const quickQuestions = [
    "What is Danie's education?",
    "What technologies does Danie use?",
    "Show me Danie's featured projects",
    "How can I contact Danie?"
  ];

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const generateKnowledgeResponse = (query) => {
    const q = query.toLowerCase();

    if (q.includes("education") || q.includes("degree") || q.includes("university") || q.includes("school") || q.includes("diploma")) {
      return "🎓 **Education Details:**\n\nDanie holds a **Bachelor of Science in Information Technology** from the **University of Northern Philippines** (Graduated 2025).\n\nHe has also earned industry certifications in AI Fundamentals (IBM), AWS Generative AI, and Software Engineering.";
    }

    if (q.includes("tech") || q.includes("skill") || q.includes("stack") || q.includes("tool") || q.includes("language")) {
      return "💻 **Tech Stack & Tools:**\n\n- **Frontend:** React, React Native, Vue.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Vite\n- **Backend:** Node.js, Python, PHP\n- **Databases:** MySQL, SQLite\n- **Dev Tools:** Git, GitHub, VS Code, Antigravity IDE, Claude Code, Figma, Blender";
    }

    if (q.includes("project") || q.includes("work") || q.includes("app") || q.includes("portfolio")) {
      return "🚀 **Featured Projects:**\n\n1. **Coffee Shop Reservation System** — Fullstack reservation web app with table booking, user auth & admin panel (PHP, MySQL, JS, HTML/CSS).\n2. **Owen** — Interactive software application.\n\nYou can explore all repositories on Danie's GitHub!";
    }

    if (q.includes("contact") || q.includes("email") || q.includes("hire") || q.includes("reach") || q.includes("location")) {
      return "📬 **Contact & Location:**\n\n- **Email:** sapdaandg02@gmail.com\n- **GitHub:** github.com/unsatisfieDg\n- **Location:** Philippines\n- **Status:** Open to fullstack software engineering & web development opportunities!";
    }

    if (q.includes("who") || q.includes("danie") || q.includes("about") || q.includes("bio")) {
      return "👨‍💻 **About Danie Glenn Sapdaan Jr.:**\n\nDanie is a Full-Stack Web Developer. He designs and builds user-friendly web applications, intuitive interfaces, and software systems using modern tools.";
    }

    if (q.includes("hi") || q.includes("hello") || q.includes("hey") || q.includes("greetings")) {
      return "Hello. How can I help you explore Danie's work or contact information?";
    }

    return `Danie is a Full-Stack Developer proficient in React, Node.js, PHP, MySQL, and modern web tools. You can reach out directly via email at **sapdaandg02@gmail.com** or visit his GitHub at **github.com/unsatisfieDg**.`;
  };

  const handleSendMessage = (textToSend) => {
    const query = textToSend || inputMessage;
    if (!query.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage("");
    setIsTyping(true);

    setTimeout(() => {
      const aiReplyText = generateKnowledgeResponse(query);
      const aiMsg = {
        id: Date.now() + 1,
        sender: "ai",
        text: aiReplyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      
      {/* Slide-Up Monochrome Chat Window */}
      {isOpen && (
        <div className="pointer-events-auto mb-4 w-[90vw] sm:w-96 h-[490px] max-h-[80vh] bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-scale-up">
          
          {/* Header - Dark Grey */}
          <div className="bg-gray-900 text-white dark:bg-gray-900 dark:text-white p-4 flex items-center justify-between shrink-0 border-b border-gray-800/80">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gray-800/90 border border-gray-700/80 flex items-center justify-center text-white">
                <Bot size={20} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-sm leading-tight text-white">Danie&apos;s Assistant</h3>
                  <span className="bg-gray-800 text-gray-300 text-[10px] font-mono px-1.5 py-0.5 rounded uppercase border border-gray-700">
                    ONLINE
                  </span>
                </div>
                <p className="text-[11px] text-gray-400 mt-0.5">
                  Portfolio Knowledge Engine
                </p>
              </div>
            </div>

            <button 
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
              aria-label="Close Chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs sm:text-sm bg-gray-50/50 dark:bg-gray-950/50">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex gap-2.5 ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
              >
                {/* Avatar */}
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                  msg.sender === "user" 
                    ? "bg-gray-800 text-white dark:bg-gray-800 dark:text-white" 
                    : "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700"
                }`}>
                  {msg.sender === "user" ? <User size={14} /> : <Bot size={14} />}
                </div>

                {/* Message Bubble */}
                <div className={`max-w-[82%] rounded-xl p-3 shadow-xs ${
                  msg.sender === "user"
                    ? "bg-gray-800 text-white dark:bg-gray-800 dark:text-white rounded-tr-none font-medium"
                    : "bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-800 rounded-tl-none"
                }`}>
                  <div className="whitespace-pre-wrap leading-relaxed">
                    {msg.text}
                  </div>
                  <span className={`text-[10px] block mt-1.5 text-right font-mono ${
                    msg.sender === "user" ? "text-gray-300 dark:text-gray-600" : "text-gray-400 dark:text-gray-500"
                  }`}>
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-2.5 items-center text-gray-500">
                <div className="w-7 h-7 rounded-lg bg-gray-200 dark:bg-gray-800 flex items-center justify-center shrink-0 border border-gray-300 dark:border-gray-700">
                  <Bot size={14} className="text-gray-700 dark:text-gray-300" />
                </div>
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-3.5 py-2 rounded-xl rounded-tl-none flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-gray-600 dark:bg-gray-400 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-gray-600 dark:bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-gray-600 dark:bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Suggested Question Pills - Minimal B&W */}
          {messages.length < 5 && (
            <div className="px-3 py-2 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-900 shrink-0">
              <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                {quickQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(q)}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-800 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all whitespace-nowrap shrink-0"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Footer */}
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
            className="p-3 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 flex items-center gap-2 shrink-0"
          >
            <input
              type="text"
              placeholder="Type a message..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              className="flex-1 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim() || isTyping}
              className="p-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-white dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-xs active:scale-95 shrink-0"
              aria-label="Send Message"
            >
              <Send size={16} />
            </button>
          </form>

        </div>
      )}

      {/* Floating Action Button (Dark Grey Pill) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 border border-gray-700/80 font-semibold text-xs sm:text-sm tracking-tight"
        aria-label="Ask me anything"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
        <span>{isOpen ? "Close Assistant" : "Ask me anything"}</span>
        {isOpen ? (
          <ChevronDown size={16} className="transition-transform duration-200" />
        ) : (
          <MessageSquare size={16} className="transition-transform duration-200 group-hover:scale-110" />
        )}
      </button>

    </div>
  );
}

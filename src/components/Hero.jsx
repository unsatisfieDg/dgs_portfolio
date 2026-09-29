import React, { useState } from "react";
import { Download, MapPin, Mail } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const [isTapped, setIsTapped] = useState(false);

  const handleTap = () => {
    setIsTapped(prev => !prev);
    // Reset hover state to prevent conflicts
    setIsHovered(false);
  };
  
  // Show alternate image if either tapped or hovered
  // But prioritize tap state on mobile
  const showAlternateImage = isTapped || isHovered;

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const handleEmailClick = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=sapdaandg02@gmail.com&su=Hello%20Danie!&body=Hi%20Danie,%20I%20saw%20your%20portfolio%20and...`;
    const mailtoUrl = `mailto:sapdaandg02@gmail.com?subject=Hello%20Danie!&body=Hi%20Danie,%20I%20saw%20your%20portfolio%20and...`;

    const newWindow = window.open(gmailUrl, "_blank");
    if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
      window.location.href = mailtoUrl;
    }
  };

  return (
    <section className="relative min-h-screen flex items-start md:items-center justify-center text-center md:text-left px-4 sm:px-8 pt-20 sm:pt-24 md:pt-0">
      {/* Content Container */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 sm:gap-10 md:gap-14">
        
        {/* Profile Image */}
        <div
          className="relative w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 flex-shrink-0 cursor-pointer rounded-2xl overflow-hidden shadow-lg transition-all duration-300 active:scale-95 touch-target select-none touch-manipulation"
          onMouseEnter={() => !isTapped && setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onPointerDown={handleTap}
          role="button"
          tabIndex={0}
          aria-label="Tap to toggle profile photo"
        >
          <img
            src={`${import.meta.env.BASE_URL}profile.jpg`}
            alt="Danie Glenn Sapdaan Jr."
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 pointer-events-none ${
              showAlternateImage ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <img
            src={`${import.meta.env.BASE_URL}profile-hover.jpg`}
            alt="Danie Glenn Sapdaan Jr. - Alternate"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 pointer-events-none ${
              showAlternateImage ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 space-y-2 sm:space-y-3 md:space-y-5 animate-fadeIn">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Danie Glenn Sapdaan Jr.
          </h1>

          <div className="flex items-center justify-center md:justify-start gap-1.5 sm:gap-2 text-gray-600 dark:text-gray-400">
            <MapPin size={16} className="sm:w-[18px] sm:h-[18px]" />
            <span className="text-xs sm:text-sm md:text-lg">Ilocos Sur, Philippines</span>
          </div>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300">
            Software Engineer | Front End Developer | AI Integration Specialist
          </p>

          {/* Dark Mode Toggle - Below subtitle (Mobile only) */}
          <div className="md:hidden flex justify-center md:justify-start pt-1">
            <DarkModeToggle />
          </div>

          {/* Buttons - Stacked on mobile, side by side on desktop */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4 mt-4 sm:mt-6">
            <a
              href={`${import.meta.env.BASE_URL}Danie Glenn Sapdaan Jr. - Resume.pdf`}
              download="Danie_Glenn_Sapdaan_Jr_Resume.pdf"
              className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 font-medium text-xs sm:text-sm md:text-base"
            >
              <Download size={16} className="sm:w-[18px] sm:h-[18px]" />
              Download Resume
            </a>

            <button
              onClick={handleEmailClick}
              className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 font-medium text-xs sm:text-sm md:text-base"
            >
              <Mail size={16} className="sm:w-[18px] sm:h-[18px]" />
              Send Email
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors cursor-pointer group"
      >
        <div className="relative w-7 h-11 border-2 border-gray-600 dark:border-gray-400 group-hover:border-gray-900 dark:group-hover:border-gray-100 rounded-full transition-colors">
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1.5 h-2.5 bg-gray-600 dark:bg-gray-400 group-hover:bg-gray-900 dark:group-hover:bg-gray-100 rounded-full animate-scroll-wheel"></div>
        </div>
      </button>

      {/* Animations */}
      <style>{`
        @keyframes scroll-wheel {
          0% {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateX(-50%) translateY(12px);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-scroll-wheel {
          animation: scroll-wheel 1.5s ease-in-out infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-out;
        }
      `}</style>
    </section>
  );
}
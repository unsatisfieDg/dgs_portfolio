import React, { useState, useEffect } from "react";
import { Moon, Sun } from 'lucide-react';

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved preference or system preference
    const savedMode = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedMode === 'true' || (!savedMode && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = (event) => {
    const isDark = !darkMode;

    const applyTheme = () => {
      setDarkMode(isDark);
      if (isDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('darkMode', 'true');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('darkMode', 'false');
      }
    };

    // Circular View Transition API (Bryll Lim style expanding circle from click)
    if (document.startViewTransition) {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = event.clientX || (rect.left + rect.width / 2);
      const y = event.clientY || (rect.top + rect.height / 2);
      
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      const transition = document.startViewTransition(() => {
        applyTheme();
      });

      transition.ready.then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`
            ]
          },
          {
            duration: 600,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
            pseudoElement: '::view-transition-new(root)'
          }
        );
      });
    } else {
      applyTheme();
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`relative inline-flex items-center h-7 w-12 sm:h-8 sm:w-14 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
        darkMode ? 'bg-blue-600' : 'bg-gray-300'
      }`}
      aria-label="Toggle dark mode"
    >
      {/* Toggle Circle Knob */}
      <span
        className={`inline-block h-5 w-5 sm:h-6 sm:w-6 transform rounded-full bg-white shadow-lg transition-transform duration-300 flex items-center justify-center ${
          darkMode ? 'translate-x-6 sm:translate-x-7' : 'translate-x-1'
        }`}
      >
        {darkMode ? (
          <Moon size={12} className="text-blue-600 sm:w-[14px] sm:h-[14px]" />
        ) : (
          <Sun size={12} className="text-yellow-500 sm:w-[14px] sm:h-[14px]" />
        )}
      </span>
    </button>
  );
}
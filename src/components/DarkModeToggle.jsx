import React, { useState, useEffect } from "react";
import { Moon, Sun } from 'lucide-react';

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
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

    // Circular View Transition API (Bryll Lim style expand effect)
    if (document.startViewTransition) {
      const x = event.clientX ?? window.innerWidth / 2;
      const y = event.clientY ?? window.innerHeight / 2;
      
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      const transition = document.startViewTransition(() => {
        applyTheme();
      });

      transition.ready.then(() => {
        const clipPath = [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`
        ];

        document.documentElement.animate(
          {
            clipPath: isDark ? clipPath : [...clipPath].reverse()
          },
          {
            duration: 550,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
            pseudoElement: isDark
              ? '::view-transition-new(root)'
              : '::view-transition-old(root)'
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
      className={`relative inline-flex items-center h-8 w-14 sm:h-9 sm:w-16 rounded-full p-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-md ${
        darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-gray-200 border border-gray-300'
      }`}
      aria-label="Toggle dark mode"
    >
      {/* Background Icons */}
      <div className="absolute inset-0 flex justify-between items-center px-2 pointer-events-none">
        <Sun size={13} className="text-amber-500" />
        <Moon size={13} className="text-blue-400" />
      </div>

      {/* Sliding Knob */}
      <span
        className={`relative inline-block h-6 w-6 sm:h-7 sm:w-7 transform rounded-full bg-white dark:bg-gray-900 shadow-md transition-transform duration-300 flex items-center justify-center z-10 ${
          darkMode ? 'translate-x-6 sm:translate-x-7' : 'translate-x-0'
        }`}
      >
        {darkMode ? (
          <Moon size={14} className="text-blue-400" />
        ) : (
          <Sun size={14} className="text-amber-500" />
        )}
      </span>
    </button>
  );
}
import React from "react";

export default function MarqueeTicker() {
  const items = [
    "DANIE GLENN SAPDAAN JR.",
    "SOFTWARE ENGINEER",
    "FRONT END DEVELOPER",
    "AI INTEGRATION SPECIALIST",
    "REACT NATIVE & EXPO",
    "BSIT GRADUATE 2025",
    "FULL STACK SOLUTIONS",
    "CLEAN CODE & UI/UX"
  ];

  return (
    <div className="w-full py-5 sm:py-7 border-y border-gray-200 dark:border-gray-800/80 bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm overflow-hidden select-none">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {[...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-8 shrink-0">
            <span className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-gray-400/70 dark:text-gray-600/70 hover:text-gray-900 dark:hover:text-white transition-colors cursor-default">
              {text}
            </span>
            <span className="w-2 h-2 rounded-full bg-blue-500/50"></span>
          </div>
        ))}
      </div>
    </div>
  );
}

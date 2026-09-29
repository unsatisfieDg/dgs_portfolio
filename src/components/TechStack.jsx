import React, { useState } from "react";
import { 
  Code2, 
  Server, 
  Database, 
  Wrench, 
  Search, 
  Sparkles, 
  X, 
  CheckCircle2
} from "lucide-react";

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [selectedTech, setSelectedTech] = useState(null);

  // Exact tech stack from Danie's original portfolio (Photo 1)
  const allTech = [
    // Frontend
    {
      name: "HTML5",
      category: "frontend",
      categoryName: "Frontend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      glowColor: "rgba(227, 79, 38, 0.35)",
      borderColor: "group-hover:border-orange-500/50",
      level: "Advanced",
      years: "3+ Years",
      desc: "Semantic HTML structure, accessibility standards (WCAG), SEO metadata optimization & web standards."
    },
    {
      name: "CSS3",
      category: "frontend",
      categoryName: "Frontend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      glowColor: "rgba(21, 114, 182, 0.35)",
      borderColor: "group-hover:border-blue-500/50",
      level: "Advanced",
      years: "3+ Years",
      desc: "Advanced layout math (Flexbox, CSS Grid), keyframe animations, glassmorphism effects & custom styling."
    },
    {
      name: "JavaScript",
      category: "frontend",
      categoryName: "Frontend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      glowColor: "rgba(247, 223, 30, 0.35)",
      borderColor: "group-hover:border-yellow-400/50",
      level: "Advanced",
      years: "3+ Years",
      desc: "Core web language — ES6+, async/await, DOM manipulation, functional programming & Web APIs."
    },
    {
      name: "Vue.js",
      category: "frontend",
      categoryName: "Frontend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      glowColor: "rgba(79, 192, 141, 0.35)",
      borderColor: "group-hover:border-emerald-500/50",
      level: "Proficient",
      years: "1+ Year",
      desc: "Progressive JavaScript framework for building clean reactive user interfaces and single-page apps."
    },
    {
      name: "React Native",
      category: "frontend",
      categoryName: "Frontend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      glowColor: "rgba(97, 218, 251, 0.35)",
      borderColor: "group-hover:border-cyan-500/50",
      level: "Proficient",
      years: "1+ Year",
      desc: "Cross-platform mobile application development framework using React components."
    },
    {
      name: "Tailwind CSS",
      category: "frontend",
      categoryName: "Frontend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      glowColor: "rgba(56, 189, 248, 0.35)",
      borderColor: "group-hover:border-sky-400/50",
      level: "Advanced",
      years: "2+ Years",
      desc: "Utility-first CSS framework for crafting responsive, modern, dark-mode ready user interfaces."
    },
    {
      name: "Vite",
      category: "frontend",
      categoryName: "Frontend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg",
      glowColor: "rgba(100, 108, 255, 0.35)",
      borderColor: "group-hover:border-indigo-500/50",
      level: "Advanced",
      years: "2+ Years",
      desc: "Next-generation frontend tooling providing lightning-fast HMR and optimized production bundling."
    },

    // Backend
    {
      name: "Node.js",
      category: "backend",
      categoryName: "Backend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      glowColor: "rgba(51, 153, 51, 0.35)",
      borderColor: "group-hover:border-green-500/50",
      level: "Advanced",
      years: "2+ Years",
      desc: "Asynchronous event-driven JavaScript runtime environment for backend development and APIs."
    },
    {
      name: "Python",
      category: "backend",
      categoryName: "Backend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      glowColor: "rgba(55, 118, 171, 0.35)",
      borderColor: "group-hover:border-blue-600/50",
      level: "Proficient",
      years: "2+ Years",
      desc: "Scripting, algorithm implementation, data processing, backend automation, and software logic."
    },
    {
      name: "PHP",
      category: "backend",
      categoryName: "Backend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      glowColor: "rgba(119, 123, 180, 0.35)",
      borderColor: "group-hover:border-indigo-400/50",
      level: "Proficient",
      years: "2+ Years",
      desc: "Server-side web scripting language powering dynamic database-driven web applications."
    },

    // Databases
    {
      name: "MySQL",
      category: "databases",
      categoryName: "Databases",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      glowColor: "rgba(68, 121, 161, 0.35)",
      borderColor: "group-hover:border-blue-500/50",
      level: "Advanced",
      years: "2+ Years",
      desc: "Relational database management system (RDBMS) for structured data storage, queries & schema design."
    },
    {
      name: "SQLite",
      category: "databases",
      categoryName: "Databases",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
      glowColor: "rgba(0, 59, 87, 0.35)",
      borderColor: "group-hover:border-sky-700/50",
      level: "Advanced",
      years: "2+ Years",
      desc: "Self-contained, serverless relational database engine used for embedded & local storage."
    },

    // DevTools & Infrastructure
    {
      name: "Git",
      category: "devtools",
      categoryName: "Dev Tools",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      glowColor: "rgba(240, 80, 50, 0.35)",
      borderColor: "group-hover:border-orange-600/50",
      level: "Advanced",
      years: "3+ Years",
      desc: "Distributed version control system for tracking source code changes, merging, and branching."
    },
    {
      name: "GitHub",
      category: "devtools",
      categoryName: "Dev Tools",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      darkInvert: true,
      glowColor: "rgba(110, 84, 148, 0.35)",
      borderColor: "group-hover:border-purple-500/50",
      level: "Advanced",
      years: "3+ Years",
      desc: "Cloud repository platform for code hosting, version control, collaboration & project workflow."
    },
    {
      name: "VS Code",
      category: "devtools",
      categoryName: "Dev Tools",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      glowColor: "rgba(0, 122, 204, 0.35)",
      borderColor: "group-hover:border-blue-500/50",
      level: "Advanced",
      years: "3+ Years",
      desc: "Primary IDE customized with debugging tools, extensions & productivity shortcuts."
    },
    {
      name: "Figma",
      category: "devtools",
      categoryName: "Dev Tools",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      glowColor: "rgba(242, 78, 30, 0.35)",
      borderColor: "group-hover:border-pink-500/50",
      level: "Proficient",
      years: "2+ Years",
      desc: "Collaborative interface design tool for crafting UI wireframes, high-fidelity mockups, and prototypes."
    },
    {
      name: "Blender",
      category: "devtools",
      categoryName: "Dev Tools",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg",
      glowColor: "rgba(234, 125, 30, 0.35)",
      borderColor: "group-hover:border-orange-500/50",
      level: "Proficient",
      years: "1+ Year",
      desc: "3D computer graphics software toolset used for creating 3D models and visual assets."
    },
    {
      name: "Antigravity IDE",
      category: "devtools",
      categoryName: "Dev Tools",
      logo: `${import.meta.env.BASE_URL}antigravity.svg`,
      glowColor: "rgba(99, 102, 241, 0.4)",
      borderColor: "group-hover:border-indigo-500/50",
      desc: "Advanced agentic AI coding environment engineered by Google DeepMind for pair programming, fullstack development & system automation."
    },
    {
      name: "Claude Code",
      category: "devtools",
      categoryName: "Dev Tools",
      logo: `${import.meta.env.BASE_URL}claude-code.svg`,
      glowColor: "rgba(217, 119, 6, 0.4)",
      borderColor: "group-hover:border-amber-500/50",
      desc: "Agentic AI coding tool for terminal workflows, autonomous refactoring, codebase search & rapid development."
    },
    {
      name: "Discord",
      category: "devtools",
      categoryName: "Dev Tools",
      logo: "https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png",
      glowColor: "rgba(88, 101, 242, 0.35)",
      borderColor: "group-hover:border-indigo-500/50",
      desc: "Developer community collaboration, server integration & real-time team communication."
    }
  ];

  // Categories list without "All Skills"
  const categories = [
    { id: "frontend", label: "Frontend", icon: Code2, count: allTech.filter(t => t.category === "frontend").length },
    { id: "backend", label: "Backend", icon: Server, count: allTech.filter(t => t.category === "backend").length },
    { id: "databases", label: "Databases", icon: Database, count: allTech.filter(t => t.category === "databases").length },
    { id: "devtools", label: "Dev Tools", icon: Wrench, count: allTech.filter(t => t.category === "devtools").length }
  ];

  const filteredTech = allTech.filter((tech) => tech.category === activeCategory);

  const outerOrbit = allTech.filter(t => t.category === "frontend" || t.category === "backend");
  const innerOrbit = allTech.filter(t => t.category === "devtools" || t.category === "databases");

  return (
    <div className="space-y-6">
      {/* Top Banner Card (Toolkit Orbital Showcase) */}
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-7 shadow-sm overflow-hidden relative group hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="relative z-10 flex items-center justify-between gap-6">
          {/* Left Text */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-3">
              <Sparkles size={13} className="animate-pulse" />
              <span>TOOLKIT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white tracking-tight">
              Tech Stack &amp; Tools
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
              I design and develop user-friendly web applications, intuitive UIs, and software applications with these modern tools.
            </p>

            {/* Quick stats pills */}
            <div className="flex flex-wrap gap-2.5 mt-4">
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200/80 dark:border-gray-700/80">
                ⚡ 20 Core Technologies
              </span>
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200/80 dark:border-gray-700/80">
                🎨 Frontend &amp; Backend
              </span>
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200/80 dark:border-gray-700/80">
                🛠️ Modern Developer Tools
              </span>
            </div>
          </div>

          {/* Right side - Orbital animation cut by half (Desktop) */}
          <div className="hidden lg:block relative flex-shrink-0 overflow-hidden" style={{ width: '220px', height: '280px' }}>
            <div className="absolute -right-28 top-1/2 -translate-y-1/2 w-72 h-72">
              {outerOrbit.map((tech, index) => (
                <div
                  key={tech.name}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    animation: `orbit 25s linear infinite`,
                    animationDelay: `${-(index / outerOrbit.length) * 25}s`,
                  }}
                >
                  <div className="p-2 rounded-xl bg-white dark:bg-gray-800 shadow-md border border-gray-100 dark:border-gray-700 hover:scale-125 transition-transform duration-300 cursor-pointer" title={tech.name}>
                    <img src={tech.logo} alt={tech.name} className={`w-7 h-7 object-contain ${tech.darkInvert ? 'dark:invert' : ''}`} />
                  </div>
                </div>
              ))}

              {innerOrbit.map((tech, index) => (
                <div
                  key={tech.name}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    animation: `innerOrbit 15s linear infinite`,
                    animationDelay: `${-(index / innerOrbit.length) * 15}s`,
                  }}
                >
                  <div className="p-1.5 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 hover:scale-125 transition-transform duration-300 cursor-pointer" title={tech.name}>
                    <img src={tech.logo} alt={tech.name} className={`w-5 h-5 object-contain ${tech.darkInvert ? 'dark:invert' : ''}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Controls Bar: Category Tabs */}
      <div className="flex items-center justify-between gap-4">
        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none w-full">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-md shadow-gray-900/10 scale-[1.02]"
                    : "bg-white/80 dark:bg-gray-900/80 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/80 border border-gray-200/80 dark:border-gray-800"
                }`}
              >
                <Icon size={14} className={isActive ? "text-blue-400 dark:text-blue-600" : "text-gray-400"} />
                <span>{cat.label}</span>
                <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                  isActive
                    ? "bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tech Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5 sm:gap-4">
        {filteredTech.map((tech) => (
          <div
            key={tech.name}
            onClick={() => setSelectedTech(tech)}
            className={`group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-xl p-4 border border-gray-200/80 dark:border-gray-800/80 cursor-pointer transition-all duration-300 hover:-translate-y-1.5 ${tech.borderColor} hover:shadow-xl`}
            style={{
              boxShadow: "0 2px 10px -2px rgba(0, 0, 0, 0.03)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 12px 28px -8px ${tech.glowColor}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 2px 10px -2px rgba(0, 0, 0, 0.03)";
            }}
          >
            {/* Card Content: Icon, Title & Category */}
            <div>
              <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-gray-800/90 border border-gray-100 dark:border-gray-700/80 flex items-center justify-center p-2.5 mb-3.5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className={`w-full h-full object-contain filter drop-shadow-sm ${tech.darkInvert ? 'dark:invert' : ''}`}
                  loading="lazy"
                />
              </div>

              <h3 className="font-bold text-sm text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {tech.name}
              </h3>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">
                {tech.categoryName}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Tech Detail Interactive Modal */}
      {selectedTech && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={() => setSelectedTech(null)}>
          <div 
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 max-w-md w-full p-6 shadow-2xl relative animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedTech(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <X size={18} />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex items-center justify-center p-3 shadow-inner">
                <img src={selectedTech.logo} alt={selectedTech.name} className={`w-full h-full object-contain ${selectedTech.darkInvert ? 'dark:invert' : ''}`} />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  {selectedTech.categoryName}
                </span>
                <h3 className="text-xl font-black text-gray-900 dark:text-white">
                  {selectedTech.name}
                </h3>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-3 border-t border-gray-100 dark:border-gray-800 pt-4">
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {selectedTech.desc}
              </p>

              <div className="bg-gray-50 dark:bg-gray-800/60 rounded-xl p-3 border border-gray-100 dark:border-gray-800 text-xs text-gray-600 dark:text-gray-400 space-y-1.5">
                <span className="font-bold text-gray-900 dark:text-white block">Key Highlights &amp; Use Cases:</span>
                <ul className="list-disc list-inside space-y-1">
                  <li>Integrated across Danie's web &amp; mobile projects</li>
                  <li>Clean code standards &amp; optimal execution speed</li>
                  <li>Continuous learning &amp; best practice adoption</li>
                </ul>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSelectedTech(null)}
                className="px-5 py-2 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold text-xs hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CSS Animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes orbit {
          0% { transform: translate(-50%, -50%) rotate(0deg) translateX(130px) rotate(0deg); opacity: 0.8; }
          50% { opacity: 1; }
          100% { transform: translate(-50%, -50%) rotate(360deg) translateX(130px) rotate(-360deg); opacity: 0.8; }
        }
        @keyframes innerOrbit {
          0% { transform: translate(-50%, -50%) rotate(0deg) translateX(75px) rotate(0deg); opacity: 0.8; }
          50% { opacity: 1; }
          100% { transform: translate(-50%, -50%) rotate(-360deg) translateX(75px) rotate(360deg); opacity: 0.8; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in { animation: fadeIn 0.2s ease-out forwards; }
        .animate-scale-up { animation: scaleUp 0.2s ease-out forwards; }
        `
      }} />
    </div>
  );
}

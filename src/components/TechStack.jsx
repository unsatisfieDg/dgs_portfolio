import React from "react";

export default function TechStack() {
  const techStack = {
    frontend: [
      { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
      { name: 'React Native', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Vite', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg' },
    ],
    backend: [
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'SQLite', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' },
    ],
    devtools: [
      { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'Blender', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg' },
      { name: 'Discord', logo: 'https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png' },
    ]
  };

  const outerOrbit = [...techStack.frontend, ...techStack.backend];
  const innerOrbit = [...techStack.devtools];

  return (
    <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-7 shadow-sm overflow-hidden relative">
      {/* Content Container */}
      <div className="relative z-10 flex items-start justify-between gap-6 sm:gap-8">
        {/* Left Side - Text */}
        <div className="max-w-md">
          <div className="mb-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Toolkit</span>
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white tracking-tight flex items-center gap-2">
              Tech Stack &amp; Tools
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
            I design and develop user-friendly web applications, intuitive UIs, and software applications with these modern tools.
          </p>
        </div>

        {/* Desktop View - Orbital Animation */}
        <div className="hidden lg:block relative flex-shrink-0 overflow-hidden" style={{ width: '240px', height: '280px' }}>
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
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-10 h-10 drop-shadow-xl hover:scale-125 transition-transform"
                  title={tech.name}
                />
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
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-8 h-8 drop-shadow-lg hover:scale-125 transition-transform"
                  title={tech.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile View - Orbital Animation */}
      <div className="lg:hidden relative h-64 mt-4 overflow-hidden">
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-56 h-56">
          {outerOrbit.map((tech, index) => (
            <div
              key={tech.name}
              className="absolute top-1/2 left-1/2"
              style={{
                animation: `orbitMobile 25s linear infinite`,
                animationDelay: `${-(index / outerOrbit.length) * 25}s`,
              }}
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="w-8 h-8 drop-shadow-md"
                title={tech.name}
              />
            </div>
          ))}

          {innerOrbit.map((tech, index) => (
            <div
              key={tech.name}
              className="absolute top-1/2 left-1/2"
              style={{
                animation: `innerOrbitMobile 15s linear infinite`,
                animationDelay: `${-(index / innerOrbit.length) * 15}s`,
              }}
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="w-6 h-6 drop-shadow-sm"
                title={tech.name}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Orbit Animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes orbit {
          0% { transform: translate(-50%, -50%) rotate(0deg) translateX(130px) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(-50%, -50%) rotate(360deg) translateX(130px) rotate(-360deg); opacity: 0; }
        }
        @keyframes innerOrbit {
          0% { transform: translate(-50%, -50%) rotate(0deg) translateX(70px) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(-50%, -50%) rotate(-360deg) translateX(70px) rotate(360deg); opacity: 0; }
        }
        @keyframes orbitMobile {
          0% { transform: translate(-50%, -50%) rotate(0deg) translateX(96px) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg) translateX(96px) rotate(-360deg); }
        }
        @keyframes innerOrbitMobile {
          0% { transform: translate(-50%, -50%) rotate(0deg) translateX(56px) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(-360deg) translateX(56px) rotate(360deg); }
        }
        `
      }} />
    </div>
  );
}
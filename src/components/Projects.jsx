import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, FolderGit2, ArrowRight } from 'lucide-react';

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      name: "Owen",
      type: "Mobile App",
      description: "A premium nutrition tracker with the 'Owen' AI Assistant. Features include Midnight Teal dark mode, real-time macro tracking, barcode scanning, and a 9,000+ item offline SQLite database.",
      url: "github.com/unsatisfieDg/Owen",
      tags: ["React Native", "Expo", "SQLite", "AI Assistant"],
      image: `${import.meta.env.BASE_URL}owen_icon.png`,
      color: "#0f766e" // Midnight Teal
    },
    {
      name: "Coffee Shop Reservation",
      type: "Web App",
      description: "A full-stack reservation system for a coffee shop with secure user accounts, interactive table booking, and responsive UI. Built to demonstrate solid backend architecture and database management.",
      url: "github.com/unsatisfieDg/Coffee-Shop-Reservation-Website-First-Full-Stack-project-as-a-student-",
      tags: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
      image: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800&q=80"
    }
  ];

  const displayedProjects = projects.slice(0, 2);

  return (
    <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-7 shadow-sm">
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100 dark:border-gray-800/80">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400">
            <FolderGit2 size={20} />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Featured</span>
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white tracking-tight">
              Selected Projects
            </h2>
          </div>
        </div>

        <Link 
          to="/projects"
          className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          <span>View All</span>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-5">
        {displayedProjects.map((project, index) => (
          <div 
            key={index}
            className="relative group overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-950 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
            style={{ minHeight: "220px" }}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Background Image / Color */}
            <div 
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
              style={{ 
                backgroundColor: project.color || '#111827',
                backgroundImage: `url(${project.image})`,
                backgroundSize: project.name === 'Owen' ? '32%' : 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                filter: project.name === 'Owen' ? 'brightness(0.7)' : 'brightness(0.35)'
              }}
            />
            
            {/* Dark gradient mask */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-transparent" />
            
            {/* Numbering badge (RyHar inspired) */}
            <div className="absolute top-3.5 right-3.5 z-10 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono font-bold text-white/90 tracking-wider">
              {String(index + 1).padStart(2, "0")}
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col justify-between p-5 z-10">
              {/* Type pill */}
              <div>
                <span className="inline-flex items-center px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 rounded-lg border border-blue-500/30 backdrop-blur-sm">
                  {project.type}
                </span>
              </div>
              
              {/* Bottom Details */}
              <div className="space-y-2.5 pt-6">
                <h3 className="text-lg sm:text-xl font-black text-white tracking-tight group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-xs sm:text-sm text-gray-300/90 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-2 py-0.5 text-[10px] font-semibold bg-white/10 text-gray-200 rounded-md border border-white/10 backdrop-blur-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project link */}
                <div className="pt-2 flex items-center justify-between">
                  <a
                    href={`https://${project.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-blue-400 transition-colors group/btn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>View Repository</span>
                    <ExternalLink size={13} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
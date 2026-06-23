import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      name: "Owen",
      type: "Mobile App",
      description: "A premium nutrition tracker with the 'Owen' AI Assistant. Features include Midnight Teal dark mode, real-time macro tracking, barcode scanning, and a 9,000+ item offline SQLite database.",
      url: "github.com/unsatisfieDg/Owen",
      tags: ["React Native", "Expo", "SQLite", "AI Assistant"],
      image: "/dgs_portfolio/owen_icon.png",
      color: "#0f766e" // Midnight Teal
    },
    {
      name: "Coffee Shop Reservation",
      type: "Web App",
      description: "A full-stack reservation system for a coffee shop. It includes secure user accounts, a table booking feature, and a responsive design. Built as my first full-stack project to practice backend logic and database management.",
      url: "github.com/unsatisfieDg/Coffee-Shop-Reservation-Website-First-Full-Stack-project-as-a-student-",
      tags: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
      image: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800&q=80"
    }
  ];

  const displayedProjects = projects.slice(0, 2);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          Projects
        </h2>

        <Link 
          to="/projects"
          className="text-xs sm:text-sm text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 cursor-pointer transition-colors"
        >
          View All
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:gap-4">
        {displayedProjects.map((project, index) => (
          <div 
            key={index}
            className="relative group overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-900 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg cursor-pointer"
            style={{ minHeight: "180px" }}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Background Image/Color */}
            <div 
              className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
              style={{ 
                backgroundColor: project.color || '#111827',
                backgroundImage: `url(${project.image})`,
                backgroundSize: project.name === 'Owen' ? '40%' : 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                filter: project.name === 'Owen' ? 'brightness(0.8)' : 'brightness(0.4)'
              }}
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            
            {/* Content - Landscape Layout */}
            <div className="relative h-full flex flex-col justify-between p-3">
              {/* Top Section - Label */}
              <div>
                <span className="inline-block px-2 py-0.5 text-[10px] font-medium bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">
                  {project.type}
                </span>
              </div>
              
              {/* Bottom Section - Title */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-tight">
                  {project.name}
                </h3>
                
                {/* Tech Stack Tags and Button - Show on Hover */}
                <div className={`transition-all duration-300 ${
                  hoveredProject === index 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}>
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="px-2 py-0.5 text-[10px] font-medium bg-gray-800/80 text-gray-200 rounded border border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* View Project Button */}
                  <a
                    href={`https://${project.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] bg-white/10 hover:bg-white/20 text-white rounded border border-white/20 transition-colors backdrop-blur-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Project
                    <ExternalLink size={12} />
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
import React from "react";
import { User, MapPin, GraduationCap, Mail, Sparkles, Code2, Globe } from "lucide-react";

export default function About() {
  const details = [
    { icon: <GraduationCap size={16} className="text-blue-500" />, label: "Education", value: "BS in Information Technology (2025)" },
    { icon: <Globe size={16} className="text-teal-500" />, label: "University", value: "University of Northern Philippines" },
    { icon: <MapPin size={16} className="text-rose-500" />, label: "Location", value: "Ilocos Sur, Philippines" },
    { icon: <Code2 size={16} className="text-indigo-500" />, label: "Primary Focus", value: "Software Engineering & AI Integration" },
    { icon: <Mail size={16} className="text-amber-500" />, label: "Contact", value: "sapdaandg02@gmail.com" },
    { icon: <Sparkles size={16} className="text-emerald-500" />, label: "Status", value: "Open for Opportunities" },
  ];

  return (
    <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all">
      <div className="flex items-center gap-2.5 mb-5 pb-4 border-b border-gray-100 dark:border-gray-800/80">
        <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400">
          <User size={20} />
        </div>
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Discover</span>
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white tracking-tight">
            About Me
          </h2>
        </div>
      </div>

      <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300 space-y-4 leading-relaxed font-normal">
        <p>
          I&apos;m a software developer passionate about building meaningful digital solutions. 
          As a dedicated Information Technology graduate from the University of Northern Philippines, I bring hands-on experience in IT support, 
          web development, and software programming, with core proficiency in JavaScript, React Native, and Python.
        </p>
       
        <p>
          With project experience across full-stack systems and application design, 
          I am continually exploring emerging technologies—including AI integration and modern frameworks—to 
          elevate how users interact with software. I pair technical agility with proactive problem-solving 
          and team-oriented execution to build applications that deliver genuine impact.
        </p>
      </div>

      {/* Personal Details Grid (RyHar-inspired aesthetic) */}
      <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800/80">
        <h3 className="text-xs uppercase tracking-widest font-bold text-gray-400 dark:text-gray-500 mb-4">
          Quick Details
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {details.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-3 rounded-xl bg-gray-50/80 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 transition-colors hover:bg-blue-50/50 dark:hover:bg-gray-800"
            >
              <div className="mt-0.5 shrink-0">{item.icon}</div>
              <div className="min-w-0">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                  {item.label}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200 truncate block">
                  {item.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
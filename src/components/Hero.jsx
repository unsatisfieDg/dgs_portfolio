import React, { useState, useEffect, useMemo } from "react";
import { Download, MapPin, Mail, Github, Sparkles, GraduationCap, Code2, Cpu } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const [isTapped, setIsTapped] = useState(false);

  // Typewriter effect states
  const [roleIndex, setRoleIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = useMemo(() => [
    "Software Engineer",
    "Front End Developer",
    "AI Integration Specialist",
    "Full Stack Developer"
  ], []);

  useEffect(() => {
    const currentRole = roles[roleIndex % roles.length];

    const timer = setTimeout(() => {
      if (!isDeleting && subIndex < currentRole.length) {
        setSubIndex(prev => prev + 1);
      } else if (isDeleting && subIndex > 0) {
        setSubIndex(prev => prev - 1);
      } else if (!isDeleting && subIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1200);
      } else if (isDeleting && subIndex === 0) {
        setIsDeleting(false);
        setRoleIndex(prev => (prev + 1) % roles.length);
      }
    }, isDeleting ? 45 : 95);

    return () => clearTimeout(timer);
  }, [subIndex, isDeleting, roleIndex, roles]);

  const handleTap = () => {
    setIsTapped(prev => !prev);
    setIsHovered(false);
  };
  
  const showAlternateImage = isTapped || isHovered;

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight * 0.95,
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
    <section className="relative min-h-[92vh] w-full flex items-center justify-center px-4 sm:px-6 md:px-12 py-16 md:py-24 overflow-hidden">
      {/* Ambient background glow for width & atmosphere */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-teal-500/10 dark:bg-teal-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Main Content Container - 7XL width for full canvas utilization */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Info & Typography */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-300 tracking-wide uppercase">
              Available for Opportunities
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 dark:text-white tracking-tighter leading-[1.08]">
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-400 dark:from-white dark:via-gray-300 dark:to-gray-500">
                Danie Glenn
              </span>
            </h1>

            {/* Typewriter role line */}
            <div className="h-9 sm:h-11 flex items-center justify-center lg:justify-start">
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 tracking-tight">
                {roles[roleIndex % roles.length].substring(0, subIndex)}
              </span>
              <span className="animate-cursor text-gray-500 dark:text-gray-400 text-2xl sm:text-3xl font-light ml-0.5">
                |
              </span>
            </div>
          </div>

          {/* Location & Intro */}
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm sm:text-base font-medium">
            <MapPin size={18} className="text-blue-600 dark:text-blue-400 flex-shrink-0" />
            <span>Ilocos Sur, Philippines</span>
          </div>

          <p className="max-w-xl text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed font-normal">
            Software developer passionate about engineering meaningful digital experiences, high-performance web applications, and intuitive AI-integrated solutions.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto pt-2">
            <a
              href={`${import.meta.env.BASE_URL}Danie Glenn Sapdaan Jr. - Resume.pdf`}
              download="Danie_Glenn_Sapdaan_Jr_Resume.pdf"
              className="w-full sm:w-auto px-7 py-3.5 bg-gray-900 hover:bg-black dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
              Download Resume
            </a>

            <button
              onClick={handleEmailClick}
              className="w-full sm:w-auto px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <Mail size={18} />
              Send Email
            </button>
          </div>

          {/* Mobile Dark Mode Toggle */}
          <div className="lg:hidden pt-2">
            <DarkModeToggle />
          </div>

          {/* Connect Section (RyHar inspired clean bordered icon row) */}
          <div className="pt-6 border-t border-gray-200 dark:border-gray-800/80 w-full max-w-lg">
            <span className="text-xs uppercase tracking-widest font-bold text-gray-400 dark:text-gray-500 mb-3 block">
              Connect
            </span>
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <a
                href="https://github.com/unsatisfieDg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/60 text-gray-700 dark:text-gray-300 hover:text-white hover:bg-gray-900 dark:hover:bg-white dark:hover:text-gray-900 hover:border-transparent transition-all duration-300 shadow-sm hover:scale-105"
              >
                <Github size={20} />
              </a>

              <button
                onClick={handleEmailClick}
                aria-label="Send Email"
                className="p-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/60 text-gray-700 dark:text-gray-300 hover:text-white hover:bg-blue-600 dark:hover:bg-blue-600 dark:hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:scale-105 cursor-pointer"
              >
                <Mail size={20} />
              </button>

              <div className="px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/60 text-gray-600 dark:text-gray-400 text-xs font-semibold flex items-center gap-2 shadow-sm">
                <Sparkles size={14} className="text-amber-500" />
                <span>BSIT &apos;25 Graduate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Profile Image + Floating Badges */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative mt-6 lg:mt-0">
          
          {/* Glow backdrop behind photo */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-teal-500/20 to-indigo-500/20 rounded-full scale-125 blur-3xl opacity-70 pointer-events-none"></div>

          {/* Profile Card Container with interactive hover/tap dual photo */}
          <div className="relative z-10 p-3 bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 rounded-3xl shadow-2xl backdrop-blur-sm">
            <div
              className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden cursor-pointer select-none touch-manipulation group"
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
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 pointer-events-none group-hover:scale-105 ${
                  showAlternateImage ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}
              />
              <img
                src={`${import.meta.env.BASE_URL}profile-hover.jpg`}
                alt="Danie Glenn Sapdaan Jr. - Alternate"
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 pointer-events-none group-hover:scale-105 ${
                  showAlternateImage ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              />

              {/* Photo corner hint */}
              <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-[10px] text-white/90 font-medium pointer-events-none">
                {showAlternateImage ? "Alternate" : "Hover / Tap"}
              </div>
            </div>
          </div>

          {/* Floating Badges (RyHar-inspired floating information cards) */}
          <div className="hidden sm:block absolute -top-4 -left-6 md:-left-10 z-20 floating">
            <div className="flex items-center gap-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border border-gray-200 dark:border-gray-700/80 p-3 pr-5 rounded-2xl shadow-xl hover:-translate-y-1 transition-transform">
              <div className="bg-blue-600 text-white p-2 rounded-xl shadow-sm">
                <GraduationCap size={20} />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-gray-900 dark:text-white whitespace-nowrap">BSIT Graduate &apos;25</p>
                <p className="text-[10px] font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap">Univ. of Northern Philippines</p>
              </div>
            </div>
          </div>

          <div className="hidden sm:block absolute -bottom-6 -left-6 md:-left-8 z-20 floating-delayed">
            <div className="flex items-center gap-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border border-gray-200 dark:border-gray-700/80 p-3 pr-5 rounded-2xl shadow-xl hover:-translate-y-1 transition-transform">
              <div className="bg-teal-600 text-white p-2 rounded-xl shadow-sm">
                <Code2 size={20} />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-gray-900 dark:text-white whitespace-nowrap">Front End &amp; Mobile</p>
                <p className="text-[10px] font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap">React Native • JS • Python</p>
              </div>
            </div>
          </div>

          <div className="hidden sm:block absolute -bottom-2 -right-4 md:-right-8 z-20 floating">
            <div className="flex items-center gap-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border border-gray-200 dark:border-gray-700/80 p-3 pr-5 rounded-2xl shadow-xl hover:-translate-y-1 transition-transform">
              <div className="bg-indigo-600 text-white p-2 rounded-xl shadow-sm">
                <Cpu size={20} />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-gray-900 dark:text-white whitespace-nowrap">AI Integration</p>
                <p className="text-[10px] font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap">IBM &amp; AWS Certified</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={scrollToContent}
        aria-label="Scroll down"
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer group"
      >
        <span className="text-[10px] uppercase tracking-widest font-semibold opacity-70 group-hover:opacity-100 transition-opacity">
          Scroll
        </span>
        <div className="w-5 h-9 border-2 border-gray-400 dark:border-gray-600 group-hover:border-blue-500 rounded-full flex justify-center pt-1.5 transition-colors">
          <div className="w-1 h-2 bg-gray-500 dark:bg-gray-400 group-hover:bg-blue-500 rounded-full animate-bounce"></div>
        </div>
      </button>
    </section>
  );
}
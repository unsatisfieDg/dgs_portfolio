import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Hero from '../components/Hero';
import About from '../components/About';
import TechStack from '../components/TechStack';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Footer from '../components/Footer';
import DarkModeToggle from '../components/DarkModeToggle';
import AIAssistant from '../components/AIAssistant';
import { Briefcase, BookOpen, Sparkles } from 'lucide-react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ensure top scroll on mount or page refresh
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    const navEntry = performance.getEntriesByType('navigation')[0];
    const isReload = navEntry && navEntry.type === 'reload';

    if (isReload) {
      if (window.location.hash) {
        window.history.replaceState(null, null, window.location.pathname);
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      return;
    }

    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, []);

  // Handle hash navigation
  useEffect(() => {
    const navEntry = performance.getEntriesByType('navigation')[0];
    const isReload = navEntry && navEntry.type === 'reload';
    if (isReload) return;

    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -120;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'instant' });
      }
    }
  }, [location]);

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
          } else {
            entry.target.classList.remove('fade-in-visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    document.querySelectorAll('.fade-in-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50/70 dark:bg-gray-950 transition-colors overflow-x-hidden text-gray-900 dark:text-gray-100">
      
      {/* Dark Mode Toggle - Fixed on desktop only */}
      <div className="hidden lg:block fixed top-6 right-6 z-50">
        <DarkModeToggle />
      </div>

      {/* Hero Section */}
      <div
        className="relative z-10 w-full"
        style={{
          transform: `translateY(${scrollY * 0.25}px)`,
          opacity: Math.max(0, 1 - scrollY / 700)
        }}
      >
        <Hero />
      </div>

      {/* Main Content - max-w-7xl canvas */}
      <main className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-start">
          
          {/* Left Column (Span 7) - About, Tech Stack, Certifications */}
          <div className="lg:col-span-7 space-y-8 md:space-y-10">
            <div className="fade-in-scroll">
              <About />
            </div>

            {/* Mobile/Tablet Experience Section */}
            <div className="lg:hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-7 shadow-sm fade-in-scroll">
              <div className="flex items-center gap-2.5 mb-5 pb-4 border-b border-gray-100 dark:border-gray-800/80">
                <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400">
                  <Briefcase size={20} />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Milestones</span>
                  <h2 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white tracking-tight">
                    Education &amp; Experience
                  </h2>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2.5 h-2.5 bg-blue-600 rounded-full mt-2 ring-4 ring-blue-100 dark:ring-blue-950 shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h3 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white">
                          Bachelor of Science in Information Technology
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                          University of Northern Philippines
                        </p>
                      </div>
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 shrink-0">
                        2025
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-2.5 h-2.5 bg-teal-600 rounded-full mt-2 ring-4 ring-teal-100 dark:ring-teal-950 shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h3 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white">
                          First Code Written
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                          Hello World!
                        </p>
                      </div>
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 shrink-0">
                        2018
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="fade-in-scroll">
              <TechStack />
            </div>

            {/* Desktop Outside World */}
            <div className="hidden lg:block bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-7 shadow-sm fade-in-scroll">
              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-gray-100 dark:border-gray-800/80">
                <div className="p-2 rounded-xl bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400">
                  <BookOpen size={20} />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">Interests</span>
                  <h2 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white tracking-tight">
                    Outside the Terminal
                  </h2>
                </div>
              </div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300 space-y-3 leading-relaxed">
                <p>
                  When I&apos;m not writing code, I enjoy exploring emerging technologies, learning about AI ethics, 
                  and staying curious about the next frontiers in software development.
                </p>
                <p>
                  Outside of tech, I love traveling, reading, working out, binge-watching series, 
                  and playing competitive games.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (Span 5) - Experience & Projects Sidebar */}
          <div className="lg:col-span-5 space-y-8 md:space-y-10">
            {/* Desktop Experience Section */}
            <div className="hidden lg:block bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-7 shadow-sm fade-in-scroll">
              <div className="flex items-center gap-2.5 mb-5 pb-4 border-b border-gray-100 dark:border-gray-800/80">
                <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400">
                  <Briefcase size={20} />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Milestones</span>
                  <h2 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white tracking-tight">
                    Education &amp; Experience
                  </h2>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2.5 h-2.5 bg-blue-600 rounded-full mt-2 ring-4 ring-blue-100 dark:ring-blue-950 shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h3 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white">
                          Bachelor of Science in Information Technology
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                          University of Northern Philippines
                        </p>
                      </div>
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 shrink-0">
                        2025
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-2.5 h-2.5 bg-teal-600 rounded-full mt-2 ring-4 ring-teal-100 dark:ring-teal-950 shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h3 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white">
                          First Code Written
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                          Hello World!
                        </p>
                      </div>
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 shrink-0">
                        2018
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div id="projects" className="fade-in-scroll">
              <Projects />
            </div>
            
            <div id="certifications" className="fade-in-scroll">
              <Certifications />
            </div>
          </div>
        </div>

        {/* Mobile Outside World Section */}
        <div className="lg:hidden mt-8">
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-7 shadow-sm fade-in-scroll">
            <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-gray-100 dark:border-gray-800/80">
              <div className="p-2 rounded-xl bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400">
                <BookOpen size={20} />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">Interests</span>
                <h2 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white tracking-tight">
                  Outside the Terminal
                </h2>
              </div>
            </div>
            <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300 space-y-3 leading-relaxed">
              <p>
                When I&apos;m not writing code, I enjoy exploring emerging technologies, learning about AI ethics, 
                and staying curious about the future of software development.
              </p>
              <p>
                Outside of tech, I love traveling, reading, working out, binge-watching series, 
                and playing competitive games.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Sticky AI Assistant */}
      <AIAssistant />

      <style>{`
        .fade-in-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), 
                      transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .fade-in-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}

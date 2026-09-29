import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Hero from '../components/Hero';
import About from '../components/About';
import TechStack from '../components/TechStack';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Footer from '../components/Footer';
import DarkModeToggle from '../components/DarkModeToggle';

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
        // Instant scroll to section without animation
        const yOffset = -200; // Show content above the section
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'instant' });
      }
    }
  }, [location]);

  // Intersection Observer for fade-in animations (bidirectional)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
          } else {
            // Remove class when scrolling back up past the element
            entry.target.classList.remove('fade-in-visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -100px 0px' }
    );

    // Observe all elements with fade-in-scroll class
    document.querySelectorAll('.fade-in-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors overflow-x-hidden">
      {/* Hero Section - Parallax Effect - FULL SCREEN */}

      {/* Dark Mode Toggle - Fixed on desktop only */}
      <div className="hidden md:block fixed top-6 right-6 z-50">
        <DarkModeToggle />
      </div>

      {/* Hero Section - Parallax Effect - FULL SCREEN */}
      <div
        className="min-h-screen flex items-center justify-center relative z-10"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          opacity: 1 - scrollY / 500
        }}
      >
        <Hero />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <div className="fade-in-scroll">
              <About />
            </div>
            
            {/* Experience Section - Shows on Mobile/Tablet only */}
            <div className="lg:hidden bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 sm:p-6 fade-in-scroll">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span>💼</span> Experience
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-900 dark:bg-gray-100 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-4">
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white">Bachelor of Science in Information Technology</h3>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">University of Northern Philippines</p>
                      </div>
                      <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 flex-shrink-0 whitespace-nowrap">2025</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-900 dark:bg-gray-100 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-4">
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white">First Code</h3>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Hello World!</p>
                      </div>
                      <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 flex-shrink-0 whitespace-nowrap">2018</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="fade-in-scroll">
              <TechStack />
            </div>
            
            <div id="certifications" className="fade-in-scroll">
              <Certifications />
            </div>
            
            {/* Outside World Section - Shows on Desktop only */}
            <div className="hidden lg:block bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 sm:p-6 fade-in-scroll">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span>📖</span> Outside World
              </h2>
              <div className="text-sm sm:text-base text-gray-700 dark:text-gray-300 space-y-3">
                <p>
                  When I'm not writing code, I enjoy exploring emerging technologies, learning about AI ethics, 
                  and staying curious about the future of software development.
                </p>
                <p>
                  Outside of tech, I love traveling, reading, working out, binge-watching series, 
                  and playing competitive games.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            {/* Experience Section - Shows on Desktop only */}
            <div className="hidden lg:block bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 sm:p-6 fade-in-scroll">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span>💼</span> Experience
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-900 dark:bg-gray-100 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-4">
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white">Bachelor of Science in Information Technology</h3>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">University of Northern Philippines</p>
                      </div>
                      <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 flex-shrink-0 whitespace-nowrap">2025</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-900 dark:bg-gray-100 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-4">
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white">First Code</h3>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Hello World!</p>
                      </div>
                      <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 flex-shrink-0 whitespace-nowrap">2018</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div id="projects" className="fade-in-scroll">
              <Projects />
            </div>

            
          </div>
        </div>
      </div>
      
      {/* Outside World Section - Shows on Mobile/Tablet only (at the bottom) */}
      <div className="lg:hidden max-w-5xl mx-auto px-4 sm:px-6 pb-6 sm:pb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 sm:p-6 fade-in-scroll">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <span>📖</span> Outside World
          </h2>
          <div className="text-sm sm:text-base text-gray-700 dark:text-gray-300 space-y-3">
            <p>
               When I'm not writing code, I enjoy exploring emerging technologies, learning about AI ethics, 
               and staying curious about the future of software development.
            </p>
            <p>
              Outside of tech, I love traveling, reading, working out, binge-watching series, 
              and playing competitive games.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      <style>{`
        .fade-in-scroll {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), 
                      transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .fade-in-visible {
          opacity: 1;
          transform: translateY(0);
        }


        /* Add staggered delay for items within the same section */
        .fade-in-scroll:nth-child(1) {
          transition-delay: 0s;
        }
        .fade-in-scroll:nth-child(2) {
          transition-delay: 0.1s;
        }
        .fade-in-scroll:nth-child(3) {
          transition-delay: 0.2s;
        }
        .fade-in-scroll:nth-child(4) {
          transition-delay: 0.3s;
        }
      `}</style>
    </div>
  );
}


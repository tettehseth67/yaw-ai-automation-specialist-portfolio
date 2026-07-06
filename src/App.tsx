/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeView from "./components/HomeView";
import AboutView from "./components/AboutView";
import ServicesView from "./components/ServicesView";
import CaseStudiesView from "./components/CaseStudiesView";
import ContactView from "./components/ContactView";
import AppsView from "./components/AppsView";
import { Sparkles, ArrowUp, Calendar, Zap } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useToast } from "./components/Toast";
import SkeletonLoader from "./components/SkeletonLoader";

export default function App() {
  const { showToast } = useToast();
  const [currentTab, setCurrentTabState] = useState<string>("home");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      return saved === "dark";
    }
    return true; // Default to dark mode by default
  });
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  // Set up custom tab change handler with matching skeleton loader sequence
  const setCurrentTab = (tab: string) => {
    if (tab === currentTab) return;
    setIsLoading(true);
    setCurrentTabState(tab);
    window.scrollTo({ top: 0, behavior: "instant" as any });
    
    // Simulate natural perceived load latency
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  };

  // Sync theme with document class list
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  // Sync with OS preferences if user hasn't set an explicit preference
  useEffect(() => {
    if (localStorage.getItem("theme")) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      setDarkMode(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle back to top button
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }

      // Calculate scroll progress percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Call once initially to compute value
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentTab, isLoading]); // Re-register/calculate when tab or loading states change, since body heights adjust

  const toggleDarkMode = () => {
    const nextMode = !darkMode;
    setDarkMode(nextMode);
    localStorage.setItem("theme", nextMode ? "dark" : "light");
    showToast(
      nextMode ? "Dark Theme Enabled" : "Light Theme Enabled",
      "info",
      nextMode 
        ? "Sleek, low-light workspace theme applied." 
        : "Clean, high-contrast light theme applied.",
      3000
    );
  };

  const renderActiveView = () => {
    switch (currentTab) {
      case "home":
        return (
          <HomeView 
            setCurrentTab={setCurrentTab} 
            darkMode={darkMode} 
            toggleDarkMode={toggleDarkMode} 
          />
        );
      case "about":
        return <AboutView setCurrentTab={setCurrentTab} />;
      case "services":
        return <ServicesView setCurrentTab={setCurrentTab} />;
      case "cases":
        return <CaseStudiesView setCurrentTab={setCurrentTab} />;
      case "contact":
        return <ContactView />;
      case "apps":
        return <AppsView />;
      default:
        return <HomeView setCurrentTab={setCurrentTab} />;
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A] text-gray-900 dark:text-white font-sans transition-colors duration-300 flex flex-col justify-between selection:bg-blue-600 selection:text-white">
      {/* Scroll Progress Bar (tracks how far down user has read the page) */}
      {!isLoading && (
        <div className="fixed top-0 left-0 w-full h-1 z-[100] pointer-events-none bg-transparent">
          <div 
            className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 transition-all duration-75 ease-out shadow-sm shadow-blue-500/30"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      )}

      <div>
        {/* Navigation Header */}
        <Navbar 
          currentTab={currentTab} 
          setCurrentTab={setCurrentTab} 
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode} 
        />

        {/* Content View Body with Transition */}
        <main className="relative">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="skeleton"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <SkeletonLoader viewType={currentTab} />
              </motion.div>
            ) : (
              <motion.div
                key={currentTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
              >
                {renderActiveView()}
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>

      {/* Footer component */}
      <Footer setCurrentTab={setCurrentTab} />

      {/* Floating Action / Scroll To Top and Direct Scheduler Shortcut */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
        {/* Back to top bubble */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={handleScrollToTop}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-700 dark:text-gray-200 shadow-lg hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
              title="Scroll to top"
              aria-label="Scroll to top button"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Quick booking strategy call button (Conversion Booster) */}
        <button
          onClick={() => {
            setCurrentTab("contact");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="group flex h-12 items-center space-x-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-4 text-xs font-bold text-white shadow-xl shadow-blue-500/20 hover:scale-105 active:scale-95 transition-all duration-200"
          title="Quick Book strategy Call"
        >
          <Calendar className="h-4.5 w-4.5" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-out whitespace-nowrap">
            Book 30-Min Strategy Call
          </span>
          <span className="font-extrabold">&rarr;</span>
        </button>
      </div>
    </div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Menu, X, Sun, Moon, ArrowRight } from "lucide-react";
import Logo from "./Logo";

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ currentTab, setCurrentTab, darkMode, toggleDarkMode }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "cases", label: "Case Studies" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact & Booking" }
  ];

  const handleNavClick = (tabId: string) => {
    setCurrentTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/60 dark:border-gray-850/60 bg-white/80 dark:bg-[#0A0A0A]/80 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div 
            className="flex cursor-pointer items-center space-x-3.5 group" 
            onClick={() => handleNavClick("home")}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-950 text-white shadow-md shadow-blue-500/10 border border-zinc-800 transition-transform group-hover:scale-105 duration-200">
              <Logo iconOnly size="sm" className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xl font-black tracking-tight text-gray-900 dark:text-white flex items-center">
                Yaw<span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent font-black">.ai</span>
              </span>
              <p className="text-[9px] font-black tracking-[0.15em] text-gray-500 dark:text-gray-400 uppercase font-mono">
                AI AUTOMATION
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                    isActive
                      ? "text-blue-600 dark:text-cyan-400"
                      : "text-gray-600 hover:text-gray-950 dark:text-gray-300 dark:hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 -z-10 rounded-lg bg-blue-50 dark:bg-zinc-900"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action Area */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 dark:border-zinc-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-900 transition-colors relative overflow-hidden cursor-pointer"
              aria-label="Toggle visual theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={darkMode ? "dark" : "light"}
                  initial={{ y: 15, opacity: 0, rotate: -40 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: -15, opacity: 0, rotate: 40 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="flex items-center justify-center"
                >
                  {darkMode ? (
                    <Sun className="h-5 w-5 text-amber-400" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </motion.div>
              </AnimatePresence>
            </button>

            {/* Quick Consultation Call Button */}
            <button
              onClick={() => handleNavClick("contact")}
              className="group flex items-center space-x-1.5 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-blue-500/10 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Free Strategy Session</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center space-x-2 md:hidden">
            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleDarkMode}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 dark:border-zinc-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-900 transition-colors relative overflow-hidden cursor-pointer"
              aria-label="Toggle visual theme mobile"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={darkMode ? "dark" : "light"}
                  initial={{ y: 12, opacity: 0, rotate: -40 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: -12, opacity: 0, rotate: 40 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="flex items-center justify-center"
                >
                  {darkMode ? (
                    <Sun className="h-4.5 w-4.5 text-amber-400" />
                  ) : (
                    <Moon className="h-4.5 w-4.5" />
                  )}
                </motion.div>
              </AnimatePresence>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 dark:border-zinc-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-900 transition-colors"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0A0A0A] md:hidden overflow-hidden"
          >
            <div className="space-y-1 px-4 py-3">
              {navItems.map((item) => {
                const isActive = currentTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`block w-full rounded-lg px-4 py-2.5 text-left text-base font-semibold transition-colors ${
                      isActive
                        ? "bg-blue-50 text-blue-600 dark:bg-zinc-900 dark:text-cyan-400"
                        : "text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-zinc-900"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <div className="pt-2 border-t border-gray-100 dark:border-zinc-900">
                <button
                  onClick={() => handleNavClick("contact")}
                  className="flex w-full items-center justify-center space-x-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-700 transition-all duration-200"
                >
                  <span>Book Free Strategy Call</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

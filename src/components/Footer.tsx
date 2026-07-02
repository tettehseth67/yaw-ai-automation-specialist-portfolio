/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Sparkles, Linkedin, Twitter, Github, Mail, Send, Check } from "lucide-react";
import Logo from "./Logo";

interface FooterProps {
  setCurrentTab: (tab: string) => void;
}

export default function Footer({ setCurrentTab }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const handleNavClick = (tabId: string) => {
    setCurrentTab(tabId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-50 dark:bg-[#0A0A0A] border-t border-gray-200 dark:border-zinc-900 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 pb-12 border-b border-gray-200 dark:border-zinc-900">
          {/* Brand Column */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => handleNavClick("home")}>
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-950 text-white border border-zinc-850 transition-transform group-hover:scale-105 duration-200">
                <Logo iconOnly size="sm" className="w-7 h-7" />
              </div>
              <span className="text-lg font-black tracking-tight text-gray-900 dark:text-white">
                Yaw<span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent font-black">.ai</span>
              </span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
              We engineer custom autonomous systems, connect SaaS platforms, and deploy AI-driven processes that save thousands of hours and multiply organizational output.
            </p>
            <div className="flex space-x-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 hover:border-blue-400 dark:hover:border-cyan-500 transition-colors"
                title="Yaw on LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-500 dark:text-gray-400 hover:text-blue-400 dark:hover:text-cyan-400 hover:border-blue-300 dark:hover:border-cyan-500 transition-colors"
                title="Yaw on Twitter/X"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-500 dark:text-gray-400 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
                title="Yaw on GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="mailto:yaw@example.ai"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-500 dark:text-gray-400 hover:text-red-500 hover:border-red-400 transition-colors"
                title="Email Yaw"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Column */}
          <div>
            <h3 className="text-xs font-bold tracking-wider text-gray-900 dark:text-zinc-200 uppercase mb-4">
              Explore
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNavClick("home")} className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("services")} className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                  Services List
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("cases")} className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                  Case Studies & ROI
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("about")} className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                  About Yaw
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("contact")} className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                  Booking & Contacts
                </button>
              </li>
            </ul>
          </div>

          {/* Core Focuses Column */}
          <div>
            <h3 className="text-xs font-bold tracking-wider text-gray-900 dark:text-zinc-200 uppercase mb-4">
              Core Expertise
            </h3>
            <ul className="space-y-2 text-xs text-gray-500 dark:text-gray-400">
              <li>AI Workflow Automations</li>
              <li>Custom Enterprise Chatbots</li>
              <li>SaaS Integration Middleware</li>
              <li>Lead Scoring Engines</li>
              <li>Outbound Enrichment Pipelines</li>
              <li>Autonomous Support Agents</li>
            </ul>
          </div>

          {/* Newsletter / Insights Column */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold tracking-wider text-gray-900 dark:text-zinc-200 uppercase">
              Join AI Automator Digest
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
              Every two weeks, get 3 actionable templates, workflow blueprints, and automation ideas that save hours of work.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
              <div className="relative flex items-center">
                <input
                  type="email"
                  required
                  placeholder="Enter work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-3 py-2 text-xs text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="absolute right-1 flex h-7 w-7 items-center justify-center rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  aria-label="Submit email address"
                >
                  {subscribed ? <Check className="h-3.5 w-3.5" /> : <Send className="h-3.5 w-3.5" />}
                </button>
              </div>
              {subscribed && (
                <p className="text-[10px] text-green-600 dark:text-green-400 font-semibold">
                  Excellent! You are on the digest list.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-[11px] text-gray-400 dark:text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Yaw.ai. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <span className="hover:text-blue-500 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-blue-500 cursor-pointer">Terms of Service</span>
            <span className="hover:text-blue-500 cursor-pointer">Security Framework</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

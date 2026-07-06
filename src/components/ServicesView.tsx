/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Cpu, 
  Bot, 
  Database, 
  Target, 
  MessageSquareHeart, 
  TrendingUp, 
  Link, 
  Lightbulb, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  ChevronDown,
  Wrench,
  Gauge
} from "lucide-react";
import { SERVICES } from "../data";

interface ServicesViewProps {
  setCurrentTab: (tab: string) => void;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ServicesView({ setCurrentTab }: ServicesViewProps) {
  const [expandedService, setExpandedService] = useState<string | null>("ai-workflow-automation");

  const getIcon = (iconName: string, className: string = "h-5 w-5") => {
    switch (iconName) {
      case "Cpu": return <Cpu className={className} />;
      case "Bot": return <Bot className={className} />;
      case "Database": return <Database className={className} />;
      case "Target": return <Target className={className} />;
      case "MessageSquareHeart": return <MessageSquareHeart className={className} />;
      case "TrendingUp": return <TrendingUp className={className} />;
      case "Link": return <Link className={className} />;
      case "Lightbulb": return <Lightbulb className={className} />;
      default: return <Cpu className={className} />;
    }
  };

  const handleBookClick = () => {
    setCurrentTab("contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="space-y-24 pb-16 pt-8">
      {/* 1. HEADER HERO */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        variants={fadeInUp}
        className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6"
      >
        <div className="inline-flex items-center space-x-2 rounded-full border border-blue-200/80 dark:border-zinc-800 bg-blue-50/50 dark:bg-zinc-900/40 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-cyan-400">
          <Wrench className="h-3.5 w-3.5" />
          <span>8 Production-Grade Work Capabilities</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 dark:text-white tracking-tight leading-tight">
          Reliable AI Automations Built for{" "}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
            Your Exact Stack
          </span>
        </h1>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          We don't use ready-made rigid software. We examine your custom files, manual processes, and SaaS APIs to construct permanent automated solutions.
        </p>
      </motion.section>

      {/* 2. SERVICES LIST WITH EXPANDED ACCORDIONS */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-6"
      >
        {SERVICES.map((service) => {
          const isExpanded = expandedService === service.id;
          return (
            <motion.div
              variants={fadeInUp}
              key={service.id}
              className={`rounded-2xl border bg-white dark:bg-zinc-900 overflow-hidden transition-all duration-350 ${
                isExpanded
                  ? "border-blue-500 shadow-xl shadow-blue-500/[0.01] ring-1 ring-blue-500/10"
                  : "border-gray-200/80 dark:border-zinc-800 hover:border-gray-300 dark:hover:border-zinc-700"
              }`}
            >
              {/* Header block (Clickable to toggle) */}
              <button
                onClick={() => setExpandedService(isExpanded ? null : service.id)}
                className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors duration-250 ${
                    isExpanded 
                      ? "bg-blue-600 text-white" 
                      : "bg-blue-500/10 text-blue-600 dark:text-cyan-400"
                  }`}>
                    {getIcon(service.iconName, "h-5.5 w-5.5")}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-400 dark:text-gray-500 line-clamp-1 mt-0.5">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 shrink-0">
                  <span className="hidden sm:inline-block rounded-full bg-green-50 dark:bg-green-950/20 px-3 py-1 text-[10px] font-bold text-green-700 dark:text-green-400">
                    ROI: {service.roi}
                  </span>
                  <div className={`rounded-lg p-1.5 hover:bg-gray-100 dark:hover:bg-zinc-850 transition-colors ${
                    isExpanded ? "rotate-180" : ""
                  }`}>
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  </div>
                </div>
              </button>

              {/* Collapsible Content */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-100 dark:border-zinc-850"
                  >
                    <div className="p-6 sm:p-8 bg-gray-50/50 dark:bg-zinc-950/20 space-y-6">
                      {/* Full description */}
                      <div className="space-y-2">
                        <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                          SERVICE OVERVIEW & MECHANICS
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                          {service.fullDesc}
                        </p>
                      </div>

                      {/* Benefits & Technologies Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                        {/* Core Benefits */}
                        <div className="space-y-3">
                          <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                            MEASURED ADVANTAGES
                          </p>
                          <ul className="space-y-2">
                            {service.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-start space-x-2 text-xs">
                                <CheckCircle2 className="h-4.5 w-4.5 text-green-500 shrink-0 mt-0.5" />
                                <span className="text-gray-700 dark:text-gray-300 leading-normal">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tech Used */}
                        <div className="space-y-3">
                          <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                            SUPPORTED PLATFORMS & TOOLING
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {service.technologies.map((tech, index) => (
                              <span
                                key={index}
                                className="rounded-md bg-white dark:bg-zinc-900 border border-gray-200/60 dark:border-zinc-800 px-2.5 py-1 text-xs font-semibold text-gray-700 dark:text-gray-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Accordion Footer CTA */}
                      <div className="pt-6 border-t border-gray-100 dark:border-zinc-850 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center space-x-2">
                          <Gauge className="h-4 w-4 text-green-500" />
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            Guaranteed: <strong className="text-gray-700 dark:text-gray-200">{service.roi}</strong>
                          </span>
                        </div>
                        <button
                          onClick={handleBookClick}
                          className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 text-xs font-bold transition-all shadow-md hover:-translate-y-0.5"
                        >
                          <span>Request {service.title} Call</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.section>

      {/* 3. TRUST FRAMEWORK & OUTCOMES */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="rounded-3xl border border-gray-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 sm:p-12 text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-950 dark:text-white tracking-tight">
              Don't See Your Exact Integration Target?
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              We frequently build custom API integrations, private web scrapers, and middleware bridges for proprietary internal databases, legacy ERPs, and closed software platforms. If it has an API, we can automate it.
            </p>
          </div>
          <div className="pt-2">
            <button
              onClick={handleBookClick}
              className="inline-flex items-center space-x-2 rounded-xl bg-gray-900 dark:bg-zinc-800 hover:bg-gray-800 dark:hover:bg-zinc-700 text-white px-6 py-3 text-sm font-bold transition-colors"
            >
              <span>Ask About Custom Integrations</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

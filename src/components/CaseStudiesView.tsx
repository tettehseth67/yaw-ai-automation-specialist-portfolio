/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  FileText, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Cpu, 
  Check, 
  Sparkles,
  BarChart3,
  ExternalLink
} from "lucide-react";
import { CASE_STUDIES } from "../data";

interface CaseStudiesViewProps {
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

export default function CaseStudiesView({ setCurrentTab }: CaseStudiesViewProps) {
  const [activeCaseId, setActiveCaseId] = useState<string>("aura-vibe-ecommerce");

  const handleBookClick = () => {
    setCurrentTab("contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="space-y-24 pb-16 pt-8">
      {/* 1. HEADER SECTION */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        variants={fadeInUp}
        className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6"
      >
        <div className="inline-flex items-center space-x-2 rounded-full border border-blue-200/80 dark:border-zinc-800 bg-blue-50/50 dark:bg-zinc-900/40 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-cyan-400">
          <BarChart3 className="h-3.5 w-3.5" />
          <span>Real, Measurable Financial ROI</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 dark:text-white tracking-tight leading-tight">
          How Businesses Scaled with{" "}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
            Autonomous Logic
          </span>
        </h1>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          We focus entirely on performance. Explore the challenges, exact architecture, and audited results of our key client projects.
        </p>
      </motion.section>

      {/* 2. MAIN NAV AND DETAILED CASES GRID */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Navigation selectors */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest pl-2">
              SELECT STUDY
            </p>
            {CASE_STUDIES.map((study) => {
              const isActive = activeCaseId === study.id;
              return (
                <button
                  key={study.id}
                  onClick={() => setActiveCaseId(study.id)}
                  className={`w-full text-left rounded-2xl p-4 border transition-all duration-200 flex flex-col justify-between ${
                    isActive
                      ? "border-blue-500 bg-blue-50/40 dark:bg-zinc-900/80 shadow-md shadow-blue-500/[0.01]"
                      : "border-gray-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-950/20 hover:bg-gray-50 dark:hover:bg-zinc-900/40"
                  }`}
                >
                  <span className={`text-[9px] font-bold uppercase tracking-wider ${
                    isActive ? "text-blue-600 dark:text-cyan-400" : "text-gray-400"
                  }`}>
                    {study.category}
                  </span>
                  <span className={`text-xs font-extrabold mt-1 leading-snug ${
                    isActive ? "text-gray-950 dark:text-white" : "text-gray-700 dark:text-gray-300"
                  }`}>
                    {study.client}
                  </span>
                  <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-gray-100 dark:border-zinc-850 w-full text-[10px]">
                    <span className="text-gray-400 dark:text-gray-500">Outcome:</span>
                    <span className="font-bold text-green-600">{study.metricValue} Improvement</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Deep Detail Area */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {CASE_STUDIES.map((study) => {
                if (study.id !== activeCaseId) return null;
                return (
                  <motion.div
                    key={study.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-3xl border border-gray-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden shadow-lg"
                  >
                    {/* Header highlight */}
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 sm:p-8 space-y-4">
                      <span className="inline-flex rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider">
                        {study.category}
                      </span>
                      <h2 className="text-lg sm:text-2xl font-black leading-snug text-white">
                        {study.title}
                      </h2>
                      <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-blue-100">
                        <p>Client: <strong className="text-white">{study.client}</strong></p>
                        <p>&bull;</p>
                        <p>Primary Metric: <strong className="text-white">{study.metricValue}</strong></p>
                      </div>
                    </div>

                    {/* Problem vs Solution Split */}
                    <div className="p-6 sm:p-8 space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b border-gray-100 dark:border-zinc-850">
                        {/* Challenge */}
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2 text-red-500">
                            <AlertTriangle className="h-4.5 w-4.5" />
                            <h3 className="text-xs font-bold uppercase tracking-wider">The Friction & Obstacle</h3>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                            {study.challenge}
                          </p>
                        </div>

                        {/* Solution */}
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2 text-green-600 dark:text-green-500">
                            <CheckCircle2 className="h-4.5 w-4.5" />
                            <h3 className="text-xs font-bold uppercase tracking-wider">The Automated Solution</h3>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                            {study.solution}
                          </p>
                        </div>
                      </div>

                      {/* Measurable Results Check list */}
                      <div className="space-y-4">
                        <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                          AUDITED DELIVERED OUTCOMES
                        </h3>
                        <div className="space-y-3">
                          {study.results.map((result, index) => (
                            <div key={index} className="flex items-start space-x-3 text-xs sm:text-sm">
                              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-green-50 dark:bg-green-950/40 text-green-600 font-bold mt-0.5">
                                <Check className="h-3.5 w-3.5" />
                              </span>
                              <span className="text-gray-800 dark:text-gray-200 leading-relaxed font-medium">
                                {result}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Before / After Slider block */}
                      <div className="rounded-2xl bg-gray-50 dark:bg-zinc-950/40 border border-gray-150 dark:border-zinc-850 p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1 text-center sm:text-left border-b sm:border-b-0 sm:border-r border-gray-150 dark:border-zinc-800 pb-3 sm:pb-0 sm:pr-4">
                          <span className="text-[10px] font-bold text-red-500 uppercase tracking-wider block">
                            BEFORE AUTONOMATION
                          </span>
                          <p className="text-sm font-extrabold text-gray-800 dark:text-zinc-200">
                            {study.beforeAfter.before}
                          </p>
                        </div>
                        <div className="space-y-1 text-center sm:text-left sm:pl-4">
                          <span className="text-[10px] font-bold text-green-600 uppercase tracking-wider block">
                            AFTER AUTONOMATION
                          </span>
                          <p className="text-sm font-extrabold text-gray-800 dark:text-zinc-200">
                            {study.beforeAfter.after}
                          </p>
                        </div>
                      </div>

                      {/* Technical Platform list */}
                      <div className="pt-4 border-t border-gray-100 dark:border-zinc-850 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="space-y-2 w-full sm:w-auto">
                          <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                            INTEGRATION BLUEPRINT STACK
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {study.tools.map((tool, index) => (
                              <span
                                key={index}
                                className="rounded-md bg-gray-100 dark:bg-zinc-950 border border-gray-200/60 dark:border-zinc-800 px-2.5 py-1 text-xs font-semibold text-gray-700 dark:text-gray-300"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* ROi Callout */}
                        <div className="rounded-xl bg-green-500/10 text-green-600 border border-green-500/20 px-4 py-3 text-center sm:text-right shrink-0 w-full sm:w-auto">
                          <span className="text-[9px] font-bold uppercase tracking-wider block">
                            VERIFIED CLIENT ROI
                          </span>
                          <span className="text-xs font-extrabold leading-snug">
                            {study.roi}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 3. ROI STRATEGY CALLOUT CARD */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 h-40 w-40 rounded-full bg-white/5 blur-3xl" />
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
              Ready to Formulate Your ROI Success Strategy?
            </h2>
            <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
              We focus entirely on performance. Let's do a complete diagnostics evaluation of your operational bottlenecks and formulate a high-ROI blueprint.
            </p>
          </div>
          <div className="pt-2 relative z-10">
            <button
              onClick={handleBookClick}
              className="inline-flex items-center space-x-2 rounded-xl bg-white text-blue-700 hover:bg-gray-100 px-6 py-3.5 text-xs font-bold transition-transform hover:-translate-y-0.5 shadow-md"
            >
              <span>Book Your Strategy Discovery Session</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

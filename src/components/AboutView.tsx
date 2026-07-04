/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  Workflow,
  ShieldCheck,
  Zap,
  ArrowRight,
  ChevronRight,
  Cpu,
  Code,
  GitMerge,
  Compass,
  Award,
  BookOpen,
} from "lucide-react";
import { TECHNOLOGIES, PROCESS_STEPS } from "../data";

interface AboutViewProps {
  setCurrentTab: (tab: string) => void;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function AboutView({ setCurrentTab }: AboutViewProps) {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [selectedTechCategory, setSelectedTechCategory] =
    useState<string>("all");

  const filteredTech =
    selectedTechCategory === "all"
      ? TECHNOLOGIES
      : TECHNOLOGIES.filter((t) => t.category === selectedTechCategory);

  const getTechCategoryLabel = (category: string) => {
    switch (category) {
      case "ai":
        return "Artificial Intelligence";
      case "automation":
        return "Workflow Orchestration";
      case "integration":
        return "Lead Gen & Data";
      case "database":
        return "Data & Vectors";
      default:
        return category;
    }
  };

  const handleBookClick = () => {
    setCurrentTab("contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="space-y-24 pb-16 pt-8">
      {/* 1. YAW'S STORY & PROFILE */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Bio */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-3xl overflow-hidden border border-gray-200/80 dark:border-zinc-800 p-2 bg-white dark:bg-zinc-900 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-cyan-500/10" />
              <img
                src="/images/yaw-profile-photo.png"
                alt="Yaw - AI Automation Specialist"
                className="h-full w-full object-cover rounded-2xl contrast-105"
                referrerPolicy="no-referrer"
              />
              {/* Overlay Tag */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md rounded-2xl p-4 border border-gray-100 dark:border-zinc-800 shadow-md">
                <p className="text-xs font-bold text-gray-900 dark:text-white leading-none">
                  Yaw
                </p>
                <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-1">
                  Founder & Lead Automation Architect
                </p>
                <div className="flex items-center space-x-1 mt-2">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  <span className="text-[9px] font-bold text-green-700 dark:text-green-400">
                    Consulting Slots Open (July)
                  </span>
                </div>
              </div>
            </div>

            {/* Credential Indicators */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-[340px] mt-6">
              <div className="rounded-xl border border-gray-150 dark:border-zinc-850 p-3 bg-gray-50/50 dark:bg-zinc-950/20 text-center">
                <Award className="h-5 w-5 mx-auto text-blue-600 mb-1" />
                <span className="text-[10px] font-bold text-gray-800 dark:text-zinc-200 block">
                  Zapier Certified
                </span>
                <span className="text-[9px] text-gray-400">
                  Global Elite Tier
                </span>
              </div>
              <div className="rounded-xl border border-gray-150 dark:border-zinc-850 p-3 bg-gray-50/50 dark:bg-zinc-950/20 text-center">
                <Workflow className="h-5 w-5 mx-auto text-cyan-500 mb-1" />
                <span className="text-[10px] font-bold text-gray-800 dark:text-zinc-200 block">
                  Make Partner
                </span>
                <span className="text-[9px] text-gray-400">
                  Platinum Engineering
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 rounded-full border border-blue-200/80 dark:border-zinc-800 bg-blue-50/50 dark:bg-zinc-900/40 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-cyan-400">
              <BookOpen className="h-3.5 w-3.5" />
              <span>Behind the Blueprint</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-gray-950 dark:text-white tracking-tight leading-tight">
              Meet{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Yaw
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-semibold">
              I'm Yaw, an AI Automation Specialist with over 2 years of
              experience helping businesses streamline operations, automate
              repetitive tasks, and unlock new levels of productivity through
              intelligent automation.
            </p>

            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              I work with businesses that want to save time, reduce manual
              workload, and scale more efficiently by implementing AI-powered
              systems and automated workflows. My expertise includes workflow
              automation, AI agents, business process optimization, CRM
              automation, lead generation systems, and custom integrations that
              connect the tools businesses rely on every day.
            </p>

            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Using technologies such as Make, Zapier, Python, OpenAI,
              LangChain, and other modern automation platforms, I design
              solutions that eliminate bottlenecks, improve operational
              efficiency, and create seamless digital experiences. Whether it's
              automating customer interactions, simplifying internal processes,
              or building AI-driven business solutions, I focus on delivering
              measurable results that drive growth.
            </p>

            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              My approach combines technical expertise with a deep understanding
              of business operations. I don't just build automations—I create
              systems that help organizations operate smarter, respond faster,
              and scale sustainably.
            </p>

            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              As AI continues to transform the way businesses work, my mission
              is to help companies leverage automation strategically, allowing
              teams to focus on high-value work while technology handles
              repetitive processes behind the scenes.
            </p>

            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              If you're looking to save time, increase efficiency, and harness
              the power of AI to grow your business, I'd love to help turn your
              vision into reality.
            </p>

            {/* Mission Panel */}
            <div className="rounded-2xl border-l-4 border-blue-600 bg-blue-50/30 dark:bg-zinc-900/40 p-4 space-y-2">
              <p className="text-xs font-extrabold text-blue-700 dark:text-cyan-400 uppercase tracking-widest">
                THE MISSION
              </p>
              <p className="text-xs sm:text-sm font-medium text-gray-800 dark:text-zinc-200 italic leading-relaxed">
                "We design automation architectures to erase cognitive drudgery.
                Our systems work flawlessly in the background, enabling human
                creativity and scaling organization throughput 24/7."
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 2. CORE WORK METHODOLOGY & PROCESS TIMELINE */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12"
      >
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-gray-950 dark:text-white tracking-tight">
            How We Partner: The Blueprint Framework
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            A battle-tested, 5-stage implementation workflow designed to
            minimize disruption, assure complete security, and deliver fast
            business returns.
          </p>
        </div>

        {/* Timeline Horizontal / Vertical */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Navigation: Steps selectors */}
          <div className="lg:col-span-4 space-y-2.5">
            {PROCESS_STEPS.map((step) => {
              const isActive = activeStep === step.step;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStep(step.step)}
                  className={`w-full text-left rounded-xl p-3 border transition-all duration-200 flex items-center justify-between ${
                    isActive
                      ? "border-blue-500 bg-blue-50/60 dark:bg-zinc-900/80 shadow-sm"
                      : "border-gray-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-950/20 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-lg text-xs font-bold ${
                        isActive
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 dark:bg-zinc-850 text-gray-500"
                      }`}
                    >
                      0{step.step}
                    </span>
                    <span
                      className={`text-xs font-bold ${isActive ? "text-blue-600 dark:text-cyan-400" : "text-gray-700 dark:text-gray-300"}`}
                    >
                      {step.title}
                    </span>
                  </div>
                  <ChevronRight
                    className={`h-4 w-4 transition-transform ${isActive ? "translate-x-1 text-blue-600" : "text-gray-400"}`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Box: Selected Step details */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {PROCESS_STEPS.map((step) => {
                if (step.step !== activeStep) return null;
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                    className="rounded-2xl border border-gray-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-8 space-y-6 shadow-md"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-100 dark:border-zinc-800 gap-2">
                      <div>
                        <span className="text-[10px] font-bold tracking-widest text-blue-600 dark:text-cyan-400 uppercase">
                          STAGE 0{step.step} WORKFLOW
                        </span>
                        <h3 className="text-xl font-bold text-gray-950 dark:text-white mt-1">
                          {step.title}
                        </h3>
                      </div>
                      <span className="rounded-full bg-blue-50 dark:bg-zinc-800 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-cyan-400 border border-blue-100 dark:border-zinc-700 inline-block self-start sm:self-center">
                        {step.duration}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Deliverables checklist */}
                    <div className="space-y-3">
                      <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                        KEY DELIVERABLES
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {step.deliverables.map((del, i) => (
                          <div
                            key={i}
                            className="flex items-start space-x-2 text-xs"
                          >
                            <ShieldCheck className="h-4.5 w-4.5 text-green-500 shrink-0 mt-0.5" />
                            <span className="text-gray-700 dark:text-gray-300 font-medium leading-tight">
                              {del}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </motion.section>

      {/* 3. TECHNOLOGY STACK SHOWCASE */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-black text-gray-950 dark:text-white tracking-tight">
              Curated Enterprise Stack
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              We engineer custom automations on top of industry-leading, secure
              infrastructure. Select a category below to filter our core
              toolkit.
            </p>
          </div>

          {/* Filter Pill List */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "All Tech" },
              { id: "ai", label: "AI Engines" },
              { id: "automation", label: "Orchestration" },
              { id: "integration", label: "Lead Gen" },
              { id: "database", label: "Vectors" },
            ].map((pill) => (
              <button
                key={pill.id}
                onClick={() => setSelectedTechCategory(pill.id)}
                className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                  selectedTechCategory === pill.id
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/10"
                    : "bg-gray-100 text-gray-600 dark:bg-zinc-800/80 dark:text-gray-300 hover:bg-gray-200"
                }`}
              >
                {pill.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredTech.map((tech) => (
              <motion.div
                key={tech.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="rounded-xl border border-gray-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-900 dark:text-white">
                      {tech.name}
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400 px-2 py-0.5 rounded-md bg-blue-50 dark:bg-zinc-950">
                      {tech.category}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.section>

      {/* 4. WHY PARTNER WITH YAW? */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="rounded-3xl border border-gray-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center space-x-2 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Yaw's Partnership Standard</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-950 dark:text-white tracking-tight leading-tight">
              An Elite Engineering Standard. No Junior Hand-offs.
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              When you hire traditional agencies, you often map details with a
              senior consultant, only for the actual coding to be handed down to
              junior developers.
            </p>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              By partnering with me, you work directly with a senior developer.
              Every API payload structure, system guardrail, and prompt pipeline
              is structured by an expert, ensuring total reliability and
              security.
            </p>
            <div className="pt-2">
              <button
                onClick={handleBookClick}
                className="group inline-flex items-center space-x-1 text-xs font-bold text-blue-600 dark:text-cyan-400 hover:underline"
              >
                <span>Book direct developer strategy call</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "No Tech Lock-in",
                desc: "You retain 100% ownership of all Make.com blueprints, code scripts, and vector logs built for your brand.",
              },
              {
                title: "Zero Silent Failures",
                desc: "Every system includes direct Slack/email notification logs when APIs or models throw unexpected errors.",
              },
              {
                title: "Enterprise Security",
                desc: "Customer data is encrypted at rest and in transit. Your corporate details are never used for public model training.",
              },
              {
                title: "Continuous Calibration",
                desc: "We provide thorough hand-off recordings, training documentation, and initial maintenance support.",
              },
            ].map((box, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-150 dark:border-zinc-850 p-4 bg-gray-50/40 dark:bg-zinc-950/20 space-y-1.5"
              >
                <span className="font-extrabold text-xs text-gray-900 dark:text-white block">
                  {box.title}
                </span>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  {box.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}

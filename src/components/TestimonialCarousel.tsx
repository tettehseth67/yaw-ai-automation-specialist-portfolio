/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowLeft, 
  ArrowRight, 
  Play, 
  Pause, 
  Star, 
  Quote, 
  Sparkles, 
  TrendingUp, 
  CheckCircle2,
  Building2,
  UserCheck
} from "lucide-react";
import { Testimonial } from "../types";

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1); // 1 = next, -1 = prev
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const AUTO_PLAY_INTERVAL = 6000; // 6 seconds
  const TICK_INTERVAL = 50; // Update progress bar every 50ms

  // Reset progress & trigger next testimonial
  const handleNext = () => {
    setDirection(1);
    setProgress(0);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setProgress(0);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleSelect = (index: number) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setProgress(0);
    setActiveIndex(index);
  };

  // Manage auto-play progress bar and slide advancement
  useEffect(() => {
    if (isPlaying) {
      progressIntervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            handleNext();
            return 0;
          }
          return prev + (TICK_INTERVAL / AUTO_PLAY_INTERVAL) * 100;
        });
      }, TICK_INTERVAL);
    }

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [isPlaying, activeIndex]);

  // Pause on hover
  const handleMouseEnter = () => setIsPlaying(false);
  const handleMouseLeave = () => setIsPlaying(true);

  const activeTestimonial = testimonials[activeIndex];

  // Slide animation variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.97,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 350, damping: 30 },
        opacity: { duration: 0.25 },
        scale: { duration: 0.25 }
      }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.97,
      transition: {
        x: { type: "spring" as const, stiffness: 350, damping: 30 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 }
      }
    })
  };

  return (
    <div id="testimonial-carousel-widget" className="w-full space-y-8">
      {/* 1. Main Interactive Carousel Area */}
      <div 
        className="relative overflow-hidden rounded-3xl border border-gray-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Sleek Progress Timer Line */}
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gray-100 dark:bg-zinc-800 z-10">
          <div 
            className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 transition-all duration-75 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Ambient background decoration */}
        <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-blue-500/5 blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-cyan-500/5 blur-3xl -z-10" />

        {/* Framing Grid Layout */}
        <div className="relative min-h-[420px] sm:min-h-[340px] md:min-h-[300px] flex items-stretch">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 p-6 sm:p-10 md:p-12 items-center"
            >
              {/* LEFT SIDE: Big beautiful quotation and client story */}
              <div className="md:col-span-7 space-y-6 relative">
                {/* Massive quote graphic */}
                <Quote className="absolute -top-6 -left-4 h-16 w-16 text-blue-500/10 dark:text-blue-400/5 -z-10 pointer-events-none" />
                
                {/* 5-Star rating indicator */}
                <div className="flex space-x-1 text-amber-400">
                  {[...Array(activeTestimonial.rating || 5)].map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 fill-current" />
                  ))}
                </div>

                {/* Actual quote quote */}
                <blockquote className="text-sm sm:text-base md:text-lg font-medium text-gray-900 dark:text-white leading-relaxed italic">
                  "{activeTestimonial.text}"
                </blockquote>

                {/* High impact metrics tag */}
                <div className="inline-flex items-center space-x-2.5 rounded-2xl bg-green-50/80 dark:bg-green-950/30 border border-green-200/50 dark:border-green-900/30 px-3.5 py-2 text-xs font-bold text-green-700 dark:text-green-400">
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  <span>Audited ROI Outcome: <strong>{activeTestimonial.metrics}</strong></span>
                </div>
              </div>

              {/* RIGHT SIDE: Profile card containing business details */}
              <div className="md:col-span-5 bg-gray-50 dark:bg-zinc-950/40 border border-gray-150 dark:border-zinc-850 rounded-2xl p-6 space-y-5 flex flex-col justify-between">
                <div className="space-y-4">
                  <span className="inline-flex items-center space-x-1.5 rounded-full bg-blue-50 dark:bg-zinc-900 border border-blue-100 dark:border-zinc-800 px-2.5 py-1 text-[10px] font-bold text-blue-700 dark:text-cyan-400 uppercase tracking-wider">
                    <UserCheck className="h-3 w-3" />
                    <span>Verified Client Partner</span>
                  </span>

                  <div className="space-y-1">
                    <h4 className="text-base font-black text-gray-950 dark:text-white leading-tight">
                      {activeTestimonial.name}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                      {activeTestimonial.role}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-150 dark:border-zinc-850/80 space-y-3">
                  <div className="flex items-center space-x-2 text-xs">
                    <Building2 className="h-4 w-4 text-gray-400 shrink-0" />
                    <span className="text-gray-400 dark:text-gray-500">Company:</span>
                    <strong className="text-gray-700 dark:text-gray-200 font-bold">
                      {activeTestimonial.company}
                    </strong>
                  </div>

                  <div className="flex items-center space-x-2 text-xs text-blue-600 dark:text-cyan-400 font-bold bg-blue-500/5 dark:bg-cyan-500/5 rounded-xl px-3 py-2 w-full">
                    <TrendingUp className="h-4 w-4 shrink-0" />
                    <span>Operational Throughput Maximized</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* 2. Interactive Navigation Bar (Prev, Next, Play/Pause, Indicators) */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-2">
        {/* Navigation Indicators / Thumbnail Jumps */}
        <div className="flex items-center space-x-2 order-2 sm:order-1">
          {testimonials.map((t, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={t.id}
                onClick={() => handleSelect(idx)}
                className={`group flex items-center space-x-2 text-left rounded-xl px-3.5 py-2.5 border transition-all ${
                  isActive
                    ? "border-blue-600 bg-blue-50/50 dark:bg-zinc-900/80 text-blue-700 dark:text-cyan-400 font-bold ring-1 ring-blue-500/20"
                    : "border-gray-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:bg-gray-50 dark:hover:bg-zinc-900/40 text-gray-500 dark:text-gray-400"
                }`}
                title={`Jump to ${t.name}`}
              >
                <span className={`h-2 w-2 rounded-full transition-all ${
                  isActive ? "bg-blue-600 dark:bg-cyan-400 scale-125" : "bg-gray-300 dark:bg-zinc-700 group-hover:bg-gray-400"
                }`} />
                <span className="text-[10px] font-bold uppercase tracking-wider hidden sm:inline">
                  {t.company.split(" ")[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Directional Arrows & Play State Controls */}
        <div className="flex items-center space-x-3 order-1 sm:order-2">
          {/* Pause / Play Trigger */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors shadow-sm"
            title={isPlaying ? "Pause Slideshow" : "Resume Slideshow"}
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 fill-current" />}
          </button>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors shadow-sm"
            title="Previous Testimonial"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors shadow-sm"
            title="Next Testimonial"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

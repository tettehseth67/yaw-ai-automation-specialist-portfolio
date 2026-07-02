/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

interface SkeletonLoaderProps {
  viewType: string; // "home" | "about" | "services" | "cases" | "contact"
}

export default function SkeletonLoader({ viewType }: SkeletonLoaderProps) {
  const [progress, setProgress] = useState(0);

  // Subtle progress bar simulation
  useEffect(() => {
    setProgress(15);
    const timer1 = setTimeout(() => setProgress(45), 100);
    const timer2 = setTimeout(() => setProgress(75), 250);
    const timer3 = setTimeout(() => setProgress(90), 400);
    const timer4 = setTimeout(() => setProgress(100), 550);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  const renderHomeSkeleton = () => (
    <div className="space-y-16 py-12">
      {/* Hero Section Skeleton */}
      <div className="mx-auto max-w-5xl px-4 text-center space-y-6">
        <div className="mx-auto h-6 w-48 animate-pulse rounded-full bg-gray-200 dark:bg-zinc-800" />
        <div className="mx-auto h-12 w-3/4 max-w-2xl animate-pulse rounded-2xl bg-gray-200 dark:bg-zinc-800" />
        <div className="mx-auto h-6 w-1/2 max-w-lg animate-pulse rounded-xl bg-gray-200 dark:bg-zinc-800" />
        <div className="flex justify-center space-x-4 pt-4">
          <div className="h-12 w-40 animate-pulse rounded-full bg-gray-200 dark:bg-zinc-800" />
          <div className="h-12 w-40 animate-pulse rounded-full bg-gray-200 dark:bg-zinc-800" />
        </div>
      </div>

      {/* Grid Cards Skeleton */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-3xl border border-gray-100 dark:border-zinc-900 bg-white dark:bg-zinc-900 p-6 space-y-4 shadow-sm">
              <div className="h-12 w-12 animate-pulse rounded-2xl bg-gray-100 dark:bg-zinc-800" />
              <div className="h-6 w-3/4 animate-pulse rounded-lg bg-gray-200 dark:bg-zinc-800" />
              <div className="space-y-2">
                <div className="h-4 w-full animate-pulse rounded-md bg-gray-100 dark:bg-zinc-855" />
                <div className="h-4 w-5/6 animate-pulse rounded-md bg-gray-100 dark:bg-zinc-855" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAboutSkeleton = () => (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column photo frame */}
        <div className="lg:col-span-5 flex flex-col items-center space-y-6">
          <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-3xl animate-pulse bg-gray-200 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 p-2 shadow-xl" />
          <div className="grid grid-cols-2 gap-4 w-full max-w-[340px]">
            <div className="h-16 animate-pulse rounded-xl bg-gray-100 dark:bg-zinc-900" />
            <div className="h-16 animate-pulse rounded-xl bg-gray-100 dark:bg-zinc-900" />
          </div>
        </div>

        {/* Right column narrative */}
        <div className="lg:col-span-7 space-y-6">
          <div className="h-6 w-36 animate-pulse rounded-full bg-gray-200 dark:bg-zinc-800" />
          <div className="h-10 w-2/3 animate-pulse rounded-xl bg-gray-200 dark:bg-zinc-800" />
          <div className="space-y-3 pt-4">
            <div className="h-4 w-full animate-pulse rounded-md bg-gray-100 dark:bg-zinc-850" />
            <div className="h-4 w-full animate-pulse rounded-md bg-gray-100 dark:bg-zinc-850" />
            <div className="h-4 w-5/6 animate-pulse rounded-md bg-gray-100 dark:bg-zinc-850" />
            <div className="h-4 w-4/5 animate-pulse rounded-md bg-gray-100 dark:bg-zinc-850" />
          </div>
          <div className="space-y-3 pt-4">
            <div className="h-4 w-full animate-pulse rounded-md bg-gray-100 dark:bg-zinc-850" />
            <div className="h-4 w-11/12 animate-pulse rounded-md bg-gray-100 dark:bg-zinc-850" />
          </div>
        </div>
      </div>
    </div>
  );

  const renderServicesSkeleton = () => (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="mx-auto h-6 w-36 animate-pulse rounded-full bg-gray-200 dark:bg-zinc-800" />
        <div className="mx-auto h-10 w-2/3 animate-pulse rounded-xl bg-gray-200 dark:bg-zinc-800" />
        <div className="mx-auto h-4 w-1/2 animate-pulse rounded-md bg-gray-100 dark:bg-zinc-800" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="rounded-3xl border border-gray-100 dark:border-zinc-900 bg-white dark:bg-zinc-900 p-6 space-y-4 shadow-sm">
            <div className="flex justify-between items-start">
              <div className="h-12 w-12 animate-pulse rounded-xl bg-gray-100 dark:bg-zinc-800" />
              <div className="h-6 w-12 animate-pulse rounded-lg bg-gray-150 dark:bg-zinc-850" />
            </div>
            <div className="h-6 w-3/4 animate-pulse rounded-lg bg-gray-200 dark:bg-zinc-800" />
            <div className="space-y-2">
              <div className="h-4 w-full animate-pulse rounded-md bg-gray-100 dark:bg-zinc-850" />
              <div className="h-4 w-5/6 animate-pulse rounded-md bg-gray-100 dark:bg-zinc-850" />
            </div>
            <div className="pt-4 flex justify-between">
              <div className="h-8 w-24 animate-pulse rounded-lg bg-gray-100 dark:bg-zinc-800" />
              <div className="h-8 w-16 animate-pulse rounded-lg bg-gray-100 dark:bg-zinc-800" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCasesSkeleton = () => (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="mx-auto h-6 w-40 animate-pulse rounded-full bg-gray-200 dark:bg-zinc-800" />
        <div className="mx-auto h-10 w-2/3 animate-pulse rounded-xl bg-gray-200 dark:bg-zinc-800" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[1, 2].map((i) => (
          <div key={i} className="rounded-3xl border border-gray-150 dark:border-zinc-900 bg-white dark:bg-zinc-900 overflow-hidden shadow-md space-y-6 p-6">
            <div className="h-48 w-full animate-pulse rounded-2xl bg-gray-200 dark:bg-zinc-850" />
            <div className="space-y-4">
              <div className="flex space-x-2">
                <div className="h-6 w-20 animate-pulse rounded-full bg-gray-100 dark:bg-zinc-800" />
                <div className="h-6 w-24 animate-pulse rounded-full bg-gray-100 dark:bg-zinc-800" />
              </div>
              <div className="h-7 w-3/4 animate-pulse rounded-lg bg-gray-200 dark:bg-zinc-800" />
              <div className="space-y-2">
                <div className="h-4 w-full animate-pulse rounded-md bg-gray-100 dark:bg-zinc-850" />
                <div className="h-4 w-5/6 animate-pulse rounded-md bg-gray-100 dark:bg-zinc-850" />
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100 dark:border-zinc-850">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="space-y-1 text-center">
                    <div className="h-6 w-12 mx-auto animate-pulse rounded-md bg-gray-200 dark:bg-zinc-800" />
                    <div className="h-3.5 w-16 mx-auto animate-pulse rounded-md bg-gray-100 dark:bg-zinc-850" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContactSkeleton = () => (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <div className="mx-auto h-6 w-44 animate-pulse rounded-full bg-gray-200 dark:bg-zinc-800" />
        <div className="mx-auto h-10 w-3/4 animate-pulse rounded-xl bg-gray-200 dark:bg-zinc-800" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left widget skeleton */}
        <div className="lg:col-span-6 rounded-3xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-8 space-y-6">
          <div className="space-y-2 pb-4 border-b border-gray-100 dark:border-zinc-800">
            <div className="h-4 w-32 animate-pulse rounded-md bg-gray-200 dark:bg-zinc-850" />
            <div className="h-6 w-3/4 animate-pulse rounded-md bg-gray-200 dark:bg-zinc-850" />
          </div>
          <div className="space-y-4">
            <div className="h-4 w-24 animate-pulse rounded-md bg-gray-150 dark:bg-zinc-800" />
            <div className="grid grid-cols-5 gap-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-16 animate-pulse rounded-xl bg-gray-100 dark:bg-zinc-850" />
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="h-4 w-32 animate-pulse rounded-md bg-gray-150 dark:bg-zinc-800" />
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-10 animate-pulse rounded-xl bg-gray-100 dark:bg-zinc-850" />
              ))}
            </div>
          </div>
          <div className="h-12 w-full animate-pulse rounded-full bg-gray-200 dark:bg-zinc-800" />
        </div>

        {/* Right form skeleton */}
        <div className="lg:col-span-6 rounded-3xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-8 space-y-6">
          <div className="space-y-2 pb-4 border-b border-gray-100 dark:border-zinc-800">
            <div className="h-4 w-28 animate-pulse rounded-md bg-gray-200 dark:bg-zinc-850" />
            <div className="h-6 w-2/3 animate-pulse rounded-md bg-gray-200 dark:bg-zinc-850" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="h-12 animate-pulse rounded-xl bg-gray-100 dark:bg-zinc-850" />
            <div className="h-12 animate-pulse rounded-xl bg-gray-100 dark:bg-zinc-850" />
          </div>
          <div className="h-12 animate-pulse rounded-xl bg-gray-100 dark:bg-zinc-850" />
          <div className="h-24 animate-pulse rounded-xl bg-gray-100 dark:bg-zinc-850" />
          <div className="h-12 w-full animate-pulse rounded-xl bg-gray-200 dark:bg-zinc-800" />
        </div>
      </div>
    </div>
  );

  const renderLoaderContent = () => {
    switch (viewType) {
      case "home":
        return renderHomeSkeleton();
      case "about":
        return renderAboutSkeleton();
      case "services":
        return renderServicesSkeleton();
      case "cases":
        return renderCasesSkeleton();
      case "contact":
        return renderContactSkeleton();
      default:
        return renderHomeSkeleton();
    }
  };

  return (
    <div className="relative w-full min-h-[60vh] flex flex-col justify-start">
      {/* Top progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-gray-100 dark:bg-zinc-900">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 shadow-lg shadow-blue-500/50"
          style={{ width: `${progress}%` }}
          transition={{ ease: "easeInOut" }}
        />
      </div>

      {/* Shimmer/Pulse container */}
      <div className="w-full">
        {renderLoaderContent()}
      </div>
    </div>
  );
}

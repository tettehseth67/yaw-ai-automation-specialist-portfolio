/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  lightModeTheme?: "dark" | "light" | "auto";
}

export default function Logo({ 
  className = "", 
  iconOnly = false, 
  size = "md",
  lightModeTheme = "auto"
}: LogoProps) {
  // Determine pixel sizes based on prop
  const sizeMap = {
    sm: { width: 40, height: 40 },
    md: { width: 56, height: 56 },
    lg: { width: 120, height: 120 },
    xl: { width: 280, height: 280 }
  };

  const selectedSize = sizeMap[size];

  // If icon only is true, we just render the monogram.
  // If iconOnly is false, we render the full brand block.
  if (iconOnly) {
    return (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`inline-block ${className}`}
        style={{ maxWidth: selectedSize.width, maxHeight: selectedSize.height }}
      >
        <defs>
          <linearGradient id="logoBlueCyan" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2563EB" /> {/* blue-600 */}
            <stop offset="50%" stopColor="#4F46E5" /> {/* indigo-600 */}
            <stop offset="100%" stopColor="#06B6D4" /> {/* cyan-500 */}
          </linearGradient>
          <linearGradient id="glowGrd" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Monogram Monolith */}
        {/* Left leg of 'Y' / 'YA' */}
        <path
          d="M15 25 L45 25 L30 50 Z"
          fill="url(#logoBlueCyan)"
          opacity="0.85"
        />
        
        {/* Main 'Y' slash from top-left to bottom-right */}
        <path
          d="M18 25 L58 85 L46 85 L10 25 Z"
          fill="url(#logoBlueCyan)"
        />

        {/* Diagonal crossover for 'YA' left leg */}
        <path
          d="M58 25 L28 85 L39 85 L66 25 Z"
          fill="url(#logoBlueCyan)"
        />

        {/* Right side of 'A' */}
        <path
          d="M51 45 L74 85 L63 85 L44 52 Z"
          fill="url(#logoBlueCyan)"
        />

        {/* Circuit Track 1 (Top) */}
        <path
          d="M56 46 L70 46 L78 38 L86 38"
          stroke="url(#logoBlueCyan)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="88" cy="38" r="3.5" fill="#06B6D4" stroke="url(#logoBlueCyan)" strokeWidth="1.5" />

        {/* Circuit Track 2 (Middle) */}
        <path
          d="M52 56 L64 56 L72 49 L82 49"
          stroke="url(#logoBlueCyan)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="84" cy="49" r="3.5" fill="#06B6D4" stroke="url(#logoBlueCyan)" strokeWidth="1.5" />

        {/* Circuit Track 3 (Bottom) */}
        <path
          d="M48 66 L60 66 L68 60 L80 60"
          stroke="url(#logoBlueCyan)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="82" cy="60" r="3.5" fill="#06B6D4" stroke="url(#logoBlueCyan)" strokeWidth="1.5" />
      </svg>
    );
  }

  // Full brand block version
  return (
    <div className={`flex flex-col items-center justify-center text-center p-4 bg-zinc-950 rounded-3xl border border-zinc-800 shadow-2xl ${className}`} style={{ maxWidth: selectedSize.width === 40 ? "100%" : selectedSize.width * 1.5 }}>
      {/* Icon Monogram inside a glow container */}
      <div className="relative mb-4 flex items-center justify-center">
        <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-xl" />
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10"
        >
          <defs>
            <linearGradient id="logoBlueCyanFull" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="50%" stopColor="#4F46E5" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>

          {/* Left leg of 'Y' */}
          <path
            d="M20 25 L48 25 L34 48 Z"
            fill="url(#logoBlueCyanFull)"
            opacity="0.85"
          />
          
          {/* Main 'Y' slash */}
          <path
            d="M23 25 L61 82 L50 82 L15 25 Z"
            fill="url(#logoBlueCyanFull)"
          />

          {/* Crossover left leg of 'A' */}
          <path
            d="M60 25 L30 82 L41 82 L68 25 Z"
            fill="url(#logoBlueCyanFull)"
          />

          {/* Right side leg of 'A' */}
          <path
            d="M53 44 L75 82 L64 82 L46 51 Z"
            fill="url(#logoBlueCyanFull)"
          />

          {/* Circuit Track 1 (Top) */}
          <path
            d="M58 43 L71 43 L78 35 L87 35"
            stroke="url(#logoBlueCyanFull)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="89" cy="35" r="3" fill="#06B6D4" stroke="url(#logoBlueCyanFull)" strokeWidth="1.2" />

          {/* Circuit Track 2 (Middle) */}
          <path
            d="M54 52 L65 52 L72 45 L82 45"
            stroke="url(#logoBlueCyanFull)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="84" cy="45" r="3" fill="#06B6D4" stroke="url(#logoBlueCyanFull)" strokeWidth="1.2" />

          {/* Circuit Track 3 (Bottom) */}
          <path
            d="M50 61 L61 61 L68 54 L78 54"
            stroke="url(#logoBlueCyanFull)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="80" cy="54" r="3" fill="#06B6D4" stroke="url(#logoBlueCyanFull)" strokeWidth="1.2" />
        </svg>
      </div>

      {/* YAW Typography with the glowing crossbar */}
      <div className="flex items-center justify-center space-x-2.5 mb-1.5">
        {/* letter Y */}
        <span className="text-3xl font-extrabold tracking-tight text-white font-sans">Y</span>
        
        {/* letter A with custom glowing blue triangle inside */}
        <div className="relative flex flex-col items-center">
          <span className="text-3xl font-extrabold tracking-tight text-white font-sans">A</span>
          {/* Glowing Inner Triangle Crossbar */}
          <div className="absolute bottom-[4px] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[8px] border-b-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
        </div>

        {/* letter W */}
        <span className="text-3xl font-extrabold tracking-tight text-white font-sans">W</span>
      </div>

      {/* Subtitle: AI AUTOMATION SPECIALIST */}
      <div className="text-[9px] font-black uppercase tracking-[0.22em] text-zinc-350 mb-4 font-mono">
        AI AUTOMATION <span className="text-cyan-400">SPECIALIST</span>
      </div>

      {/* Divider Accent and Core Motto */}
      <div className="flex items-center justify-center space-x-2 w-full px-2">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-blue-500/80" />
        <span className="text-[8px] font-extrabold uppercase tracking-widest text-cyan-400 font-mono whitespace-nowrap">
          AUTOMATE. OPTIMIZE. SCALE.
        </span>
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-blue-500/80" />
      </div>
    </div>
  );
}

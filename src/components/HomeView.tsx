/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Users, 
  Megaphone, 
  ShoppingCart, 
  UserCheck, 
  Rocket, 
  Zap, 
  ArrowRight, 
  Check, 
  Clock, 
  Database, 
  Bot, 
  Mail, 
  Calendar, 
  Workflow, 
  TrendingUp, 
  ShieldCheck, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Phone, 
  FileText, 
  MessageSquare, 
  CheckCircle2, 
  Loader2, 
  Globe,
  Inbox,
  Award,
  Sun,
  Moon
} from "lucide-react";
import { useToast } from "./Toast";

interface HomeViewProps {
  setCurrentTab: (tab: string) => void;
  darkMode?: boolean;
  toggleDarkMode?: () => void;
}

// Custom Counter component to animate business results
function AnimatedCounter({ value, suffix = "", label, duration = 1200 }: { value: number; suffix?: string; label: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMiliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [hasStarted, value, duration]);

  return (
    <div ref={elementRef} className="p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-zinc-800 flex flex-col items-center justify-center text-center shadow-md hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-900/50 transition-all">
      <p className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent tracking-tight font-sans">
        {hasStarted ? count : 0}{suffix}
      </p>
      <p className="mt-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
        {label}
      </p>
    </div>
  );
}

const whoIHelpData = [
  {
    icon: Users,
    title: "Small Businesses",
    description: "Eliminate tedious manual tasks, manage follow-ups automatically, and free up valuable time to focus purely on customer acquisition.",
    metric: "Reclaim 10+ hours/wk"
  },
  {
    icon: Megaphone,
    title: "Marketing Agencies",
    description: "Automate client onboarding, lead intake scoring, data synchronization, and unified cross-channel report generation.",
    metric: "Reduce onboarding friction"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Stores",
    description: "Sync Shopify inventory, automate return processing workflows, and resolve support queries via trained AI agents.",
    metric: "24/7 WISMO query answers"
  },
  {
    icon: UserCheck,
    title: "Consultants & Coaches",
    description: "Automate lead qualification, schedule meetings cleanly, trigger personalized email nurtures, and structure client onboarding documents.",
    metric: "Scale without adding staff"
  },
  {
    icon: Rocket,
    title: "Startups",
    description: "Establish scalable API-first infrastructure, automate sales funnels, and design data integrations to grow without hiring overhead.",
    metric: "Build highly lean ops"
  }
];

const whatIAutomateData = [
  {
    icon: Rocket,
    title: "Lead Generation",
    description: "Automate client search, validate email lists, scrape open job opportunities, and build hyper-personalized outbound hooks.",
    bullet1: "Clay, Smartlead, & Instantly setups",
    bullet2: "High response pitch formulas",
    actionText: "Automate Lead Gen"
  },
  {
    icon: Database,
    title: "CRM Automation",
    description: "Synchronize your sales pipelines instantly. Connect forms, automate pipeline transitions, enrich deal logs, and score incoming contacts.",
    bullet1: "HubSpot, Salesforce, & Pipedrive",
    bullet2: "Automated clean data logging",
    actionText: "Streamline CRM"
  },
  {
    icon: Bot,
    title: "Customer Support",
    description: "Integrate context-aware AI support agents trained on your business wikis. Auto-resolve common tickets and route complex cases.",
    bullet1: "Intercom & Zendesk integrations",
    bullet2: "Fast WISMO ticket resolution",
    actionText: "Deploy AI Chatbots"
  },
  {
    icon: Calendar,
    title: "Appointment Scheduling",
    description: "Connect scheduling software, qualify prospects before they select times, sync calendar slots, and automate reminder sequences.",
    bullet1: "Pre-booking qualification filters",
    bullet2: "Cancel / Reschedule automations",
    actionText: "Build Booking flows"
  },
  {
    icon: Mail,
    title: "Email Follow-Ups",
    description: "Orchestrate automated, multi-stage nurturing sequences based on prospect behavior, forms, page visits, or demo outcomes.",
    bullet1: "Non-responder triggers",
    bullet2: "High-converting follow-up copy",
    actionText: "Set Up Follow-Ups"
  },
  {
    icon: Workflow,
    title: "Internal Business Workflows",
    description: "Build custom API bridges to link your file directories, databases, task boards, and internal team Slack alerts together.",
    bullet1: "Make.com & Zapier advanced flows",
    bullet2: "Automatic Slack notification bots",
    actionText: "Design Workflows"
  }
];

const caseStudiesData = [
  {
    num: "01",
    tag: "Marketing Agency",
    title: "Manual Onboarding & Reporting",
    problem: "Manual onboarding forms, slow client communication, and tedious spreadsheet aggregation for monthly campaigns.",
    solution: "Developed automated intake forms connected directly to CRM, auto-created slack channels, and built scheduled AI reporting scripts.",
    outcomes: [
      { value: "90%", label: "Admin Reduction", color: "text-blue-600" },
      { value: "40+ hrs", label: "Saved Monthly", color: "text-indigo-600" }
    ]
  },
  {
    num: "02",
    tag: "E-Commerce Store",
    title: "Slow Customer Support Response",
    problem: "Massive surges in repetitive order queries (WISMO queries) caused delayed response times and high customer friction.",
    solution: "Deployed a multi-app AI chatbot linked directly with Shopify and DHL APIs to automatically resolve order status and returns.",
    outcomes: [
      { value: "24/7", label: "Auto Support", color: "text-emerald-600" },
      { value: "Instant", label: "Response times", color: "text-indigo-600" }
    ]
  },
  {
    num: "03",
    tag: "Consulting Business",
    title: "High Rate of Missed Leads",
    problem: "Inbound queries from webinars and social channels sat inside system boxes without follow-up, resulting in lost deals.",
    solution: "Built automated lead intake scraping, scored intent via AI, and immediately scheduled tailored follow-up sequences.",
    outcomes: [
      { value: "3.2x", label: "Lead Conversion", color: "text-blue-600" },
      { value: "< 5m", label: "Follow-Up speed", color: "text-indigo-600" }
    ]
  }
];

export default function HomeView({ setCurrentTab, darkMode = true, toggleDarkMode }: HomeViewProps) {
  const { showToast } = useToast();
  
  // States for interactive Calendly scheduler
  const [selectedDate, setSelectedDate] = useState<number | null>(14);
  const [selectedTime, setSelectedTime] = useState<string | null>("10:00 AM");
  const [bookingStep, setBookingStep] = useState<"datetime" | "details" | "success">("datetime");
  const [bookingName, setBookingName] = useState("");
  const [bookingEmail, setBookingEmail] = useState("");
  const [bookingCompany, setBookingCompany] = useState("");
  const [isBookingSubmitting, setIsBookingSubmitting] = useState(false);
  
  // Contact Form States
  const [contactName, setContactName] = useState("");
  const [contactCompany, setContactCompany] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactChallenges, setContactChallenges] = useState("");
  const [isContactSubmitting, setIsContactSubmitting] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // Testimonials Carousel States
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const testimonials = [
    {
      name: "Marcus Sterling",
      role: "CEO & Co-Founder",
      company: "AuraVibe Essentials",
      image: "https://picsum.photos/seed/marcus/120/120",
      text: "Yaw is a visionary. He restructured our entire customer support architecture in under 3 weeks. Wisconsin holiday sales surges used to be our biggest operations nightmare; now, we sleep soundly while the AI handles 92% of queries instantly.",
      metrics: "Saved $11.2k/month & raised CSAT by 28%",
      rating: 5
    },
    {
      name: "Sarah Jenkins",
      role: "VP of Operations",
      company: "ScalePath Media",
      image: "https://picsum.photos/seed/jenkins/120/120",
      text: "Our sales representatives were bogged down in outbound research. Yaw built an outbound machine that finds high-value leads, enriches them with custom hooks, and queues automated multi-channel sequences. Booking rates literally quadrupled.",
      metrics: "4.8% meeting booking rate & $140k pipeline added",
      rating: 5
    },
    {
      name: "Julian Vance",
      role: "Managing Partner",
      company: "Vanguard Property Group",
      image: "https://picsum.photos/seed/julian/120/120",
      text: "We were highly skeptical about AI's capacity to parse complex commercial lease documents, but Yaw's custom extraction pipeline exceeded our highest expectations. What used to take days of tedious manual review now takes 12 minutes flat.",
      metrics: "Deal evaluation speed cut by 98% with zero errors",
      rating: 5
    }
  ];

  const handleNextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Submit Handler for custom Calendly-style Booking
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingName || !bookingEmail) {
      showToast("Required Fields Missing", "error", "Please provide your name and email to book the strategy session.", 3000);
      return;
    }
    
    setIsBookingSubmitting(true);
    setTimeout(() => {
      setIsBookingSubmitting(false);
      setBookingStep("success");
      showToast(
        "AI Strategy Session Reserved!",
        "success",
        `Confirmed for July ${selectedDate}, 2026 at ${selectedTime}. Zoom calendar invitation transmitted to ${bookingEmail}.`,
        5000
      );
    }, 1500);
  };

  // Submit Handler for main Contact Form
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail) {
      showToast("Name and Email Required", "error", "Please complete your name and email to receive your audit roadmap.", 3000);
      return;
    }

    setIsContactSubmitting(true);
    setTimeout(() => {
      setIsContactSubmitting(false);
      setContactSubmitted(true);
      showToast(
        "Audit Roadmap Request Transmitted!",
        "success",
        `Thank you, ${contactName}! Yaw will evaluate your current challenges and follow up via ${contactEmail} within 24 hours.`,
        6000
      );
    }, 1500);
  };

  return (
    <div className="bg-slate-50 dark:bg-[#0A0A0A] text-slate-900 dark:text-gray-100 selection:bg-blue-600 selection:text-white min-h-screen transition-colors duration-300">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28 border-b border-slate-200 dark:border-zinc-900 bg-white dark:bg-[#0A0A0A] transition-colors duration-300" id="hero-section">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -z-10 h-[350px] w-[500px] rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-[100px]" />
        <div className="absolute top-1/3 left-1/4 -z-10 h-[250px] w-[350px] rounded-full bg-cyan-500/5 dark:bg-cyan-500/10 blur-[80px]" />
        
        {/* Futuristic grid background overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-45 dark:opacity-25 pointer-events-none" />
 
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero Left: Message & Value Proposition */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Premium Badge */}
              <div className="inline-flex items-center space-x-2 rounded-full border border-blue-100 dark:border-blue-900/30 bg-blue-50/60 dark:bg-blue-950/20 px-3.5 py-1.5 text-xs font-semibold text-blue-700 dark:text-blue-400 shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400 animate-pulse" />
                <span className="tracking-wide">AI-Driven Business Architecture & Workflow Scaling</span>
              </div>
 
              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-slate-950 dark:text-white">
                Save 10+ Hours Every Week With{" "}
                <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 dark:from-blue-400 dark:via-blue-500 dark:to-cyan-400 bg-clip-text text-transparent">
                  AI Automation
                </span>
              </h1>
 
              {/* Subheadline */}
              <p className="mx-auto lg:mx-0 max-w-2xl text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                I help small businesses automate lead generation, customer support, follow-ups, reporting, and internal workflows using AI-powered systems.
              </p>

              {/* Theme quick switcher inside Hero */}
              {toggleDarkMode && (
                <div className="flex items-center justify-center lg:justify-start space-x-3 text-xs bg-slate-100/80 dark:bg-zinc-900/50 p-2 rounded-xl border border-slate-200/80 dark:border-zinc-800/80 w-fit mx-auto lg:mx-0">
                  <span className="font-bold text-slate-500 dark:text-slate-400 pl-1.5 flex items-center">
                    <Sparkles className="h-3.5 w-3.5 mr-1.5 text-blue-500" /> Interactive Theme Switcher:
                  </span>
                  <div className="flex rounded-lg bg-white dark:bg-[#0A0A0A] p-0.5 border border-slate-200 dark:border-zinc-800 shadow-sm">
                    <button
                      type="button"
                      onClick={() => !darkMode && toggleDarkMode()}
                      className={`flex items-center space-x-1 px-3 py-1.5 rounded-md font-bold transition-all text-xs cursor-pointer ${
                        darkMode 
                          ? "bg-zinc-850 text-cyan-400" 
                          : "text-slate-500 hover:text-slate-900"
                      }`}
                    >
                      <Moon className="h-3 w-3" />
                      <span>Dark</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => darkMode && toggleDarkMode()}
                      className={`flex items-center space-x-1 px-3 py-1.5 rounded-md font-bold transition-all text-xs cursor-pointer ${
                        !darkMode 
                          ? "bg-slate-100 text-blue-700" 
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      <Sun className="h-3 w-3 text-amber-500" />
                      <span>Light</span>
                    </button>
                  </div>
                </div>
              )}
 
              {/* Calls To Action */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <button
                  onClick={() => scrollToSection("booking-session")}
                  className="group flex w-full sm:w-auto items-center justify-center space-x-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Get Free AI Automation Audit</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => scrollToSection("case-studies")}
                  className="flex w-full sm:w-auto items-center justify-center space-x-2 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-7 py-4 text-sm font-bold text-slate-700 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-zinc-800 hover:border-slate-300 dark:hover:border-zinc-700 shadow-sm hover:shadow transition-all cursor-pointer"
                >
                  <span>View Success Stories</span>
                </button>
              </div>
 
              {/* Trust Indicators Directly Below Hero */}
              <div className="pt-8 border-t border-slate-200 dark:border-zinc-900">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center lg:text-left">
                  <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    <Check className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    <span>24/7 Automated Operations</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    <Check className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    <span>AI-Powered Workflows</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    <Check className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    <span>Faster Response Times</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    <Check className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    <span>Reduced Manual Work</span>
                  </div>
                </div>
              </div>
 
            </div>
 
            {/* Hero Right Visuals - High End UI Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[400px] sm:max-w-[440px] aspect-square rounded-3xl p-[1px] bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 shadow-2xl">
                {/* Background Ambient Radial */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-cyan-500/5 rounded-3xl blur-md" />
                
                {/* Visual Glassmorphic Frame Card */}
                <div className="h-full w-full rounded-3xl bg-white dark:bg-[#111827] p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative border border-slate-200 dark:border-zinc-800 shadow-xl transition-colors duration-300">
                  
                  {/* Glass Card Header */}
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-zinc-800/80 pb-4">
                    <div className="flex items-center space-x-3">
                      <div className="relative h-10 w-10 rounded-full bg-slate-100 dark:bg-zinc-800 p-[2px] border border-slate-200 dark:border-zinc-700 shadow-sm">
                        <div className="h-full w-full rounded-full bg-white dark:bg-zinc-900 overflow-hidden flex items-center justify-center font-black text-xs text-blue-600 dark:text-blue-400">
                          YAW
                        </div>
                        <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border border-white dark:border-zinc-900 bg-green-500" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white">Yaw</h4>
                        <span className="text-[9px] font-medium text-slate-500 dark:text-slate-400">AI Automation Specialist</span>
                      </div>
                    </div>

                    {/* Interactive Widget Theme Switcher inside Mockup */}
                    {toggleDarkMode && (
                      <button
                        type="button"
                        onClick={toggleDarkMode}
                        className="flex h-7 w-12 items-center rounded-full bg-slate-100 dark:bg-zinc-800 p-0.5 border border-slate-200 dark:border-zinc-700/80 transition-colors relative cursor-pointer"
                        title="Toggle theme mode"
                      >
                        <motion.div
                          className="h-5 w-5 rounded-full bg-white dark:bg-zinc-900 shadow-md flex items-center justify-center border border-slate-200/50 dark:border-zinc-750"
                          animate={{ x: darkMode ? 20 : 0 }}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        >
                          {darkMode ? (
                            <Moon className="h-3 w-3 text-cyan-400" />
                          ) : (
                            <Sun className="h-3 w-3 text-amber-500" />
                          )}
                        </motion.div>
                      </button>
                    )}

                    {/* Default static Badge if no toggleDarkMode */}
                    {!toggleDarkMode && (
                      <div className="rounded-full bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30 px-2.5 py-1 text-[9px] font-bold text-blue-700 dark:text-blue-400 flex items-center space-x-1">
                        <Zap className="h-2.5 w-2.5 text-blue-600 fill-current animate-pulse" />
                        <span>Ready to Scale</span>
                      </div>
                    )}
                  </div>
 
                  {/* Operational flow visualization */}
                  <div className="my-6 space-y-4">
                    <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-3.5 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-red-600">
                          <Clock className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-[11px] font-bold text-slate-800">Repetitive Data Entry</p>
                          <p className="text-[9px] text-slate-500">Lead scoring & manual CRM sync</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-red-600 dark:text-red-400 font-bold">10 hrs / wk</span>
                    </div>
 
                    <div className="flex items-center justify-center">
                      <div className="h-5 w-[2px] bg-dashed border-l border-slate-200 dark:border-zinc-800" />
                    </div>
 
                    <div className="rounded-xl border border-blue-100 dark:border-blue-900/30 bg-blue-50/50 dark:bg-blue-950/20 p-3.5 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                          <Zap className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <p className="text-[11px] font-bold text-slate-800 dark:text-slate-200">AI Automation Pipeline</p>
                          <p className="text-[9px] text-blue-600 dark:text-blue-400">Trigger &rarr; AI Parser &rarr; Auto CRM</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-2 py-0.5 rounded font-bold">Instant</span>
                    </div>
                  </div>
 
                  {/* Business Outcome banner */}
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-4 text-white shadow-lg">
                    <p className="text-[9px] font-bold tracking-wider text-blue-100 uppercase">
                      AVERAGE TEAM OUTCOME
                    </p>
                    <div className="flex items-baseline justify-between mt-1">
                      <h3 className="text-xl font-extrabold tracking-tight">
                        -10+ hrs<span className="text-xs font-normal text-blue-100">/week</span>
                      </h3>
                      <span className="text-[9px] font-bold bg-white/20 px-2 py-0.5 rounded-full uppercase">
                        Saves Work
                      </span>
                    </div>
                  </div>
 
                </div>
              </div>
            </div>
 
          </div>
        </div>
      </section>
 
      {/* ================= SECTION 1 — WHO I HELP ================= */}
      <section className="py-20 md:py-24 border-b border-slate-200 dark:border-zinc-900 bg-white dark:bg-[#0A0A0A] transition-colors duration-300" id="who-i-help">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center space-y-4 max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center space-x-1.5 rounded-full border border-blue-100 dark:border-blue-900/30 bg-blue-50 dark:bg-blue-950/20 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-400">
              <span>Client Profiles</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Who I Help
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              I deliver high-performance, tailored automation pipelines engineered to streamline operations and unlock scalability across business models.
            </p>
          </motion.div>
 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {whoIHelpData.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  className="rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-[#111827] p-6 hover:border-blue-300 dark:hover:border-blue-900/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group shadow-md"
                >
                  <div className="space-y-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 dark:group-hover:bg-blue-500 group-hover:text-white transition-all">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="pt-6 mt-4 border-t border-slate-100 dark:border-zinc-800/80 flex items-center text-[11px] font-bold text-blue-600 dark:text-blue-400">
                    <span>{item.metric}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
 
        </div>
      </section>
      {/* ================= SECTION 2 — WHAT I AUTOMATE ================= */}
      <section className="py-20 md:py-24 border-b border-slate-200 dark:border-zinc-900 bg-white dark:bg-[#0A0A0A] transition-colors duration-300" id="what-i-automate">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center space-y-4 max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center space-x-1.5 rounded-full border border-blue-100 dark:border-blue-900/30 bg-blue-50 dark:bg-blue-950/20 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-400">
              <span>Core Specializations</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              What I Automate
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Bespoke automation development configured to eliminate friction points. We build stable, integrated assets for these key departments.
            </p>
          </motion.div>
 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatIAutomateData.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  className="rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-[#111827] p-6 space-y-5 hover:border-blue-300 dark:hover:border-blue-900/40 hover:shadow-xl transition-all flex flex-col justify-between shadow-md"
                >
                  <div className="space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.title}</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="space-y-1 text-xs text-slate-500 dark:text-slate-400">
                      <p className="flex items-center text-[11px]"><Check className="h-3 w-3 text-blue-600 dark:text-blue-400 mr-1.5" /> {item.bullet1}</p>
                      <p className="flex items-center text-[11px]"><Check className="h-3 w-3 text-blue-600 dark:text-blue-400 mr-1.5" /> {item.bullet2}</p>
                    </div>
                  </div>
                  <button onClick={() => scrollToSection("booking-session")} className="mt-4 w-full flex items-center justify-center space-x-1.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900 hover:bg-slate-100 dark:hover:bg-zinc-800 py-2.5 text-xs font-bold text-slate-700 dark:text-slate-300 transition-all cursor-pointer">
                    <span>{item.actionText}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </motion.div>
              );
            })}
          </div>
 
        </div>
      </section>
 
      {/* ================= SECTION 3 — BUSINESS RESULTS ================= */}
      <section className="py-20 bg-slate-50 dark:bg-[#0A0A0A] border-b border-slate-200 dark:border-zinc-900 transition-colors duration-300" id="business-results">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-1.5 rounded-full border border-blue-100 dark:border-blue-900/30 bg-blue-50 dark:bg-blue-950/20 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-400">
              <span>Key Metrics</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Business Results
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Measurable improvements delivered through custom-tailored automation platforms and cognitive AI models.
            </p>
          </div>
 
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatedCounter value={40} suffix="+" label="Hours Saved Weekly" />
            <AnimatedCounter value={80} suffix="%" label="Reduction in Manual Tasks" />
            
            {/* 24/7 Operations Specially Highlighted with Glowing Pulse */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-zinc-800 flex flex-col items-center justify-center text-center shadow-md relative overflow-hidden group hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-900/50 transition-all">
              <div className="absolute top-2 right-2 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </div>
              <p className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent tracking-tight font-sans">
                24/7
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Automated Operations
              </p>
            </div>
 
            <AnimatedCounter value={3} suffix="x" label="Faster Support Response" />
          </div>
 
        </div>
      </section>
      <section className="py-20 md:py-24 border-b border-slate-200 dark:border-zinc-900 bg-white dark:bg-[#0A0A0A] transition-colors duration-300" id="case-studies">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center space-y-4 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center space-x-1.5 rounded-full border border-blue-100 dark:border-blue-900/30 bg-blue-50 dark:bg-blue-950/20 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-400">
              <span>Success Metrics</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Realistic Case Studies
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Forensic analysis of systems built to eliminate overhead and drive client conversion.
            </p>
          </motion.div>
 
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudiesData.map((item, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  className="rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-[#111827] overflow-hidden flex flex-col justify-between group hover:border-blue-300 dark:hover:border-blue-900/40 hover:shadow-2xl transition-all shadow-md"
                >
                  <div className="p-6 space-y-5">
                    <div className="flex justify-between items-center pb-3 border-b border-slate-100 dark:border-zinc-800/80">
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest font-mono">// CASE {item.num}</span>
                      <span className="rounded-full bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30 px-2.5 py-0.5 text-[9px] font-bold text-blue-700 dark:text-blue-400">{item.tag}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</h3>
                    
                    <div className="space-y-3.5 pt-2">
                      <div className="border-l-2 border-red-500/50 pl-3">
                        <p className="text-[10px] font-bold text-red-600 dark:text-red-400 uppercase tracking-wider">The Problem</p>
                        <p className="text-xs text-slate-600 dark:text-slate-400">{item.problem}</p>
                      </div>
                      <div className="border-l-2 border-emerald-500/50 pl-3">
                        <p className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">The Solution</p>
                        <p className="text-xs text-slate-600 dark:text-slate-400">{item.solution}</p>
                      </div>
                    </div>
                  </div>
 
                  <div className="p-6 bg-slate-50/50 dark:bg-zinc-950/30 border-t border-slate-100 dark:border-zinc-800/85 space-y-4">
                    <p className="text-[9px] font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase">QUANTIFIABLE OUTCOMES</p>
                    <div className="grid grid-cols-2 gap-4">
                      {item.outcomes.map((outcome, oIdx) => (
                        <div key={oIdx} className="p-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-slate-100/80 dark:border-zinc-800/80 text-center">
                          <p className={`text-xl font-black ${outcome.color}`}>{outcome.value}</p>
                          <p className="text-[9px] text-slate-500 dark:text-slate-400 font-bold uppercase mt-0.5">{outcome.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
 
        </div>
      </section>
 
      {/* ================= SECTION 5 — HOW IT WORKS ================= */}
      <section className="py-20 md:py-24 border-b border-slate-200 dark:border-zinc-900 bg-slate-50/50 dark:bg-[#0A0A0A]/50 transition-colors duration-300" id="how-it-works">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-1.5 rounded-full border border-blue-100 dark:border-blue-900/30 bg-blue-50 dark:bg-blue-950/20 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-400">
              <span>Roadmap to Scale</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Simple 4-Step Process
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              How we audit, map, construct, and scale custom-engineered AI systems tailored to your business rules.
            </p>
          </div>
 
          {/* Timeline Layout */}
          <div className="relative mx-auto max-w-4xl">
            {/* Center Timeline Line (Desktop) */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#3B82F6] via-[#06B6D4] to-slate-200 dark:to-zinc-800" />
 
            <div className="space-y-12 relative">
              
              {/* Step 1 */}
              <div className="relative flex flex-col md:flex-row items-start md:justify-between group">
                {/* Desktop Left content */}
                <div className="hidden md:block w-5/12 text-right pr-8">
                  <span className="text-xs font-bold text-[#06B6D4] tracking-wider uppercase font-mono">STEP 01 // ANALYSIS</span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">Free Automation Audit</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                    We deep dive into your current manual routines, examine your current software setup, and identify the top 3 processes costing you the most hours.
                  </p>
                </div>
                
                {/* Badge Number Indicator */}
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white dark:bg-zinc-900 border-2 border-blue-600 dark:border-blue-500 text-xs font-black text-blue-700 dark:text-blue-400 z-10 shadow-lg group-hover:scale-110 transition-transform">
                  1
                </div>
 
                {/* Mobile & Desktop Right content */}
                <div className="pl-12 md:pl-8 md:w-5/12 space-y-1">
                  <span className="block md:hidden text-xs font-bold text-[#06B6D4] tracking-wider uppercase font-mono">STEP 01 // ANALYSIS</span>
                  <h3 className="block md:hidden text-lg font-bold text-slate-900 dark:text-white">Free Automation Audit</h3>
                  <p className="block md:hidden text-xs text-slate-600 dark:text-slate-400 mt-2">
                    We deep dive into your current manual routines, examine your current software setup, and identify the top 3 processes costing you the most hours.
                  </p>
                  
                  <div className="rounded-xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-zinc-800 p-3.5 space-y-1.5 shadow-md">
                    <p className="text-[10px] font-bold text-blue-700 dark:text-blue-400 uppercase tracking-widest">Deliverables</p>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 flex items-center"><Check className="h-3 w-3 text-green-500 mr-1.5" /> Process Friction Audit Report</p>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 flex items-center"><Check className="h-3 w-3 text-green-500 mr-1.5" /> Opportunity Map Blueprint</p>
                  </div>
                </div>
              </div>
 
              {/* Step 2 */}
              <div className="relative flex flex-col md:flex-row items-start md:justify-between group">
                {/* Left content (Desktop details) */}
                <div className="pl-12 md:pl-0 md:w-5/12 md:text-right md:pr-8 space-y-1">
                  <span className="block text-xs font-bold text-blue-700 dark:text-blue-400 tracking-wider uppercase font-mono">STEP 02 // ARCHITECTURE</span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">Strategy & Roadmap</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                    We map out the exact data schemas, API connections, fallback mechanisms, and prompt structures. We design the flow logic to guarantee complete security.
                  </p>
                  
                  <div className="rounded-xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-zinc-800 p-3.5 space-y-1.5 shadow-md md:text-left inline-block w-full text-left">
                    <p className="text-[10px] font-bold text-blue-700 dark:text-blue-400 uppercase tracking-widest">Deliverables</p>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 flex items-center"><Check className="h-3 w-3 text-green-500 mr-1.5" /> Technical System Flowcharts</p>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 flex items-center"><Check className="h-3 w-3 text-green-500 mr-1.5" /> Secure Prompt Schemas</p>
                  </div>
                </div>
 
                {/* Badge Number Indicator */}
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white dark:bg-zinc-900 border-2 border-blue-600 dark:border-blue-500 text-xs font-black text-blue-700 dark:text-blue-400 z-10 shadow-lg group-hover:scale-110 transition-transform">
                  2
                </div>
 
                {/* Empty slot (Desktop Right) */}
                <div className="hidden md:block w-5/12" />
              </div>
 
              {/* Step 3 */}
              <div className="relative flex flex-col md:flex-row items-start md:justify-between group">
                {/* Desktop Left content */}
                <div className="hidden md:block w-5/12 text-right pr-8">
                  <span className="text-xs font-bold text-[#06B6D4] tracking-wider uppercase font-mono">STEP 03 // INTEGRATION</span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">Build & Launch</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                    We write the custom scripts, build Make/Zapier blueprints, connect database vectors, and train the AI models. We construct the automated bridges inside private sandbox environments.
                  </p>
                </div>
                
                {/* Badge Number Indicator */}
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white dark:bg-zinc-900 border-2 border-blue-600 dark:border-blue-500 text-xs font-black text-blue-700 dark:text-blue-400 z-10 shadow-lg group-hover:scale-110 transition-transform">
                  3
                </div>
 
                {/* Mobile & Desktop Right content */}
                <div className="pl-12 md:pl-8 md:w-5/12 space-y-1">
                  <span className="block md:hidden text-xs font-bold text-[#06B6D4] tracking-wider uppercase font-mono">STEP 03 // INTEGRATION</span>
                  <h3 className="block md:hidden text-lg font-bold text-slate-900 dark:text-white">Build & Launch</h3>
                  <p className="block md:hidden text-xs text-slate-600 dark:text-slate-400 mt-2">
                    We write the custom scripts, build Make/Zapier blueprints, connect database vectors, and train the AI models. We construct the automated bridges inside private sandbox environments.
                  </p>
                  
                  <div className="rounded-xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-zinc-800 p-3.5 space-y-1.5 shadow-md">
                    <p className="text-[10px] font-bold text-blue-700 dark:text-blue-400 uppercase tracking-widest">Deliverables</p>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 flex items-center"><Check className="h-3 w-3 text-green-500 mr-1.5" /> Custom APIs & Connections</p>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 flex items-center"><Check className="h-3 w-3 text-green-500 mr-1.5" /> Configured Sandbox Run</p>
                  </div>
                </div>
              </div>
 
              {/* Step 4 */}
              <div className="relative flex flex-col md:flex-row items-start md:justify-between group">
                {/* Left content (Desktop details) */}
                <div className="pl-12 md:pl-0 md:w-5/12 md:text-right md:pr-8 space-y-1">
                  <span className="block text-xs font-bold text-blue-700 dark:text-blue-400 tracking-wider uppercase font-mono">STEP 04 // MAINTENANCE</span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">Optimize & Scale</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                    We subject the system to severe edge-case stress tests. We tune AI guardrails, verify formatting outputs, and build automatic Slack/email exception warnings.
                  </p>
                  
                  <div className="rounded-xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-zinc-800 p-3.5 space-y-1.5 shadow-md md:text-left inline-block w-full text-left">
                    <p className="text-[10px] font-bold text-blue-700 dark:text-blue-400 uppercase tracking-widest">Deliverables</p>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 flex items-center"><Check className="h-3 w-3 text-green-500 mr-1.5" /> Edge-case Stress Verification Logs</p>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 flex items-center"><Check className="h-3 w-3 text-green-500 mr-1.5" /> AI Guardrail Tuning Blueprint</p>
                  </div>
                </div>
 
                {/* Badge Number Indicator */}
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white dark:bg-zinc-900 border-2 border-blue-600 dark:border-blue-500 text-xs font-black text-blue-700 dark:text-blue-400 z-10 shadow-lg group-hover:scale-110 transition-transform">
                  4
                </div>
 
                {/* Empty slot (Desktop Right) */}
                <div className="hidden md:block w-5/12" />
              </div>
 
            </div>
          </div>
 
        </div>
      </section>
 
      {/* ================= SECTION 6 — TESTIMONIALS ================= */}
      <section className="py-20 md:py-24 border-b border-slate-200 dark:border-zinc-900 bg-white dark:bg-[#0A0A0A] transition-colors duration-300" id="testimonials">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-1.5 rounded-full border border-blue-100 dark:border-blue-900/30 bg-blue-50 dark:bg-blue-950/20 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-400">
              <span>Client Endorsements</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Testimonials
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Direct feedback from business owners and operational partners who scaled operations with Yaw.
            </p>
          </div>
 
          {/* Testimonials Carousel */}
          <div className="relative rounded-2xl border border-slate-200 bg-white p-8 md:p-12 shadow-xl overflow-hidden max-w-4xl mx-auto">
            
            {/* Ambient Blur */}
            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-blue-500/5 blur-2xl" />
 
            <div className="relative min-h-[180px] flex flex-col justify-between space-y-6">
              
              {/* Stars & Text */}
              <div className="space-y-4">
                <div className="flex space-x-1">
                  {[...Array(testimonials[testimonialIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm md:text-base italic text-slate-800 leading-relaxed">
                  "{testimonials[testimonialIndex].text}"
                </p>
              </div>
 
              {/* Client Info & Outcome */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t border-slate-100 dark:border-zinc-800/80">
                <div className="flex items-center space-x-3">
                  <img 
                    src={testimonials[testimonialIndex].image} 
                    alt={testimonials[testimonialIndex].name} 
                    className="h-10 w-10 rounded-full object-cover border border-slate-200 dark:border-zinc-700"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">{testimonials[testimonialIndex].name}</h4>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400">{testimonials[testimonialIndex].role}, {testimonials[testimonialIndex].company}</span>
                  </div>
                </div>
 
                <div className="rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30 px-3.5 py-1.5 text-xs text-blue-700 dark:text-blue-400 font-semibold">
                  <span className="text-slate-500 dark:text-slate-400">Result:</span> {testimonials[testimonialIndex].metrics}
                </div>
              </div>
 
            </div>
 
            {/* Left & Right Controls */}
            <div className="absolute right-8 top-8 flex space-x-2 z-10">
              <button 
                onClick={handlePrevTestimonial}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900 hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
                title="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button 
                onClick={handleNextTestimonial}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900 hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
                title="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
 
          </div>
 
        </div>
      </section>
 
      {/* ================= SECTION 7 — FREE AI AUTOMATION AUDIT ================= */}
      <section className="py-20 md:py-24 border-b border-slate-200 dark:border-zinc-900 bg-gradient-to-r from-blue-50/50 via-indigo-50/20 to-white dark:from-zinc-950/10 dark:via-indigo-950/5 dark:to-[#0A0A0A] transition-colors duration-300" id="free-audit">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-[#111827] p-8 md:p-16 relative overflow-hidden shadow-xl max-w-5xl mx-auto">
            
            {/* Diagonal glow light strip */}
            <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-blue-500/5 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-cyan-500/5 blur-3xl" />
 
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left Column Description */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center space-x-1.5 rounded-full border border-blue-100 dark:border-blue-900/30 bg-blue-50 dark:bg-blue-950/20 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-400">
                  <Award className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                  <span>Complimentary Evaluation</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                  Discover How Much Time AI Can Save Your Business
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Submit your workflow parameters to receive a customized automation proposal outlining bottlenecks, tool integrations, and concrete ROI opportunities.
                </p>
 
                {/* Audit Checklist Items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-center space-x-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                    <CheckCircle2 className="h-4.5 w-4.5 text-blue-600 dark:text-blue-400" />
                    <span>✓ Workflow Analysis</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                    <CheckCircle2 className="h-4.5 w-4.5 text-blue-600 dark:text-blue-400" />
                    <span>✓ Automation Opportunities</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                    <CheckCircle2 className="h-4.5 w-4.5 text-blue-600 dark:text-blue-400" />
                    <span>✓ AI Recommendations</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                    <CheckCircle2 className="h-4.5 w-4.5 text-blue-600 dark:text-blue-400" />
                    <span>✓ Implementation Roadmap</span>
                  </div>
                </div>
              </div>
 
              {/* Right Column Action */}
              <div className="lg:col-span-5 flex justify-center">
                <button
                  onClick={() => scrollToSection("booking-session")}
                  className="group flex flex-col items-center justify-center p-6 w-full max-w-[320px] rounded-2xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-blue-300 dark:hover:border-blue-900/50 shadow-md text-center transition-all cursor-pointer"
                >
                  <Calendar className="h-10 w-10 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform mb-3" />
                  <span className="text-sm font-bold text-slate-900 dark:text-white mb-1">Book My Free Audit</span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">Reserve a 1-on-1 Strategy Session</span>
                  <div className="mt-4 inline-flex items-center space-x-1.5 rounded-lg bg-blue-600 px-4 py-2 text-xs font-bold text-white shadow group-hover:bg-blue-700 transition-colors">
                    <span>Lock In Slots</span>
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </button>
              </div>
 
            </div>
 
          </div>
        </div>
      </section>

      {/* ================= SECTION 8 — BOOKING SECTION ================= */}
      <section className="py-20 md:py-24 border-b border-slate-200 dark:border-zinc-900 bg-white dark:bg-[#0A0A0A] transition-colors duration-300" id="booking-session">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-1.5 rounded-full border border-blue-100 dark:border-blue-900/30 bg-blue-50 dark:bg-blue-950/20 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-400">
              <span>Live Reservation</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Schedule Your Free Strategy Session
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Let's identify automation opportunities inside your business.
            </p>
          </div>

          {/* Interactive Calendly Mockup Component */}
          <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-[#111827] overflow-hidden shadow-xl grid grid-cols-1 md:grid-cols-12">
            
            {/* Left side parameters */}
            <div className="md:col-span-5 p-6 sm:p-8 bg-slate-50 dark:bg-zinc-900/40 border-b md:border-b-0 md:border-r border-slate-200 dark:border-zinc-800 space-y-6">
              <div className="space-y-2">
                <div className="h-8.5 w-8.5 rounded-full bg-blue-50 dark:bg-blue-950/40 overflow-hidden flex items-center justify-center font-black text-xs text-blue-700 dark:text-blue-400 border border-blue-100 dark:border-blue-900/30">
                  Y
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-bold">Yaw</p>
                <h3 className="text-lg font-black text-slate-900 dark:text-white leading-snug">30-Min AI & Process Automation Audit</h3>
              </div>

              <div className="space-y-3 pt-4 text-xs text-slate-600 dark:text-slate-300">
                <p className="flex items-center"><Clock className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" /> 30 Minutes</p>
                <p className="flex items-center"><VideoIcon className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" /> Zoom Conference Video</p>
                <p className="flex items-center"><Globe className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" /> Web-conferencing timezone synced</p>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-zinc-800 text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                We will run a forensic audit of your top manual workflows, highlight quick-wins, estimate licensing charges, and outline a complete automation blueprint.
              </div>
            </div>

            {/* Right side interactive Calendar & Time choices */}
            <div className="md:col-span-7 p-6 sm:p-8">
              
              <AnimatePresence mode="wait">
                {bookingStep === "datetime" && (
                  <motion.div
                    key="datetime"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-3">1. Select Date (July 2026)</h4>
                      {/* Simple Responsive Calendar Row Mockup */}
                      <div className="grid grid-cols-7 gap-1.5 text-center text-xs">
                        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                          <span key={i} className="text-slate-500 dark:text-slate-400 font-bold py-1">{d}</span>
                        ))}
                        {/* Empty spacing for July start offset */}
                        {[...Array(3)].map((_, i) => (
                          <span key={i} className="py-2 text-slate-300 dark:text-zinc-700 select-none"></span>
                        ))}
                        {[13, 14, 15, 16, 17, 20, 21, 22, 23, 24].map((day) => {
                          const isSelected = selectedDate === day;
                          return (
                            <button
                              key={day}
                              onClick={() => setSelectedDate(day)}
                              className={`py-2 rounded-lg font-bold transition-all relative cursor-pointer ${
                                isSelected 
                                  ? "bg-blue-600 text-white" 
                                  : "bg-slate-50 dark:bg-zinc-900/60 hover:bg-slate-100 dark:hover:bg-zinc-800 border border-slate-200 dark:border-zinc-800 text-slate-800 dark:text-slate-200"
                              }`}
                            >
                              <span>{day}</span>
                              <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full ${isSelected ? "bg-white" : "bg-cyan-500"}`} />
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {selectedDate && (
                      <div className="pt-4 border-t border-slate-200 dark:border-zinc-800 animate-fadeIn">
                        <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-3">2. Select Time (Zoom Video)</h4>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          {["9:00 AM", "10:30 AM", "1:30 PM", "3:00 PM"].map((time) => {
                            const isTimeSelected = selectedTime === time;
                            return (
                              <button
                                key={time}
                                onClick={() => setSelectedTime(time)}
                                className={`py-2.5 rounded-lg font-bold transition-all border cursor-pointer ${
                                  isTimeSelected 
                                    ? "bg-[#06B6D4] text-white border-[#06B6D4]" 
                                    : "bg-slate-50 dark:bg-zinc-900/60 hover:bg-slate-100 dark:hover:bg-zinc-800 border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-slate-300"
                                }`}
                              >
                                {time}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    <button
                      disabled={!selectedDate || !selectedTime}
                      onClick={() => setBookingStep("details")}
                      className="w-full mt-4 flex items-center justify-center space-x-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white py-3.5 text-xs font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      <span>Continue & Confirm Details</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </motion.div>
                )}

                {bookingStep === "details" && (
                  <motion.form
                    key="details"
                    onSubmit={handleBookingSubmit}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div className="pb-3 border-b border-slate-200 dark:border-zinc-800">
                      <p className="text-xs text-cyan-600 dark:text-cyan-400 font-bold">Selected Session:</p>
                      <p className="text-xs text-slate-900 dark:text-white font-bold mt-1">July {selectedDate}, 2026 at {selectedTime} (Zoom Conference Call)</p>
                      <button 
                        type="button" 
                        onClick={() => setBookingStep("datetime")} 
                        className="text-[10px] text-blue-600 dark:text-blue-400 hover:underline mt-1 cursor-pointer"
                      >
                        &larr; Modify date & time
                      </button>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase mb-1">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          value={bookingName}
                          onChange={(e) => setBookingName(e.target.value)}
                          placeholder="Jane Doe"
                          className="w-full text-xs rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-3 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase mb-1">Your Email Address *</label>
                        <div className="relative">
                          <input
                            type="email"
                            required
                            value={bookingEmail}
                            onChange={(e) => setBookingEmail(e.target.value)}
                            placeholder="jane@company.com"
                            className={`w-full text-xs rounded-xl border p-3 pr-10 focus:outline-none transition-colors ${
                              bookingEmail === ""
                                ? "border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-slate-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-500"
                                : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(bookingEmail)
                                ? "border-green-500 bg-white dark:bg-zinc-950 text-slate-900 dark:text-white focus:border-green-500 focus:ring-1 focus:ring-green-500"
                                : "border-rose-500 bg-white dark:bg-zinc-950 text-slate-900 dark:text-white focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                            }`}
                          />
                          {bookingEmail !== "" && (
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
                              {/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(bookingEmail) ? (
                                <CheckCircle2 className="h-4.5 w-4.5 text-green-500 animate-fadeIn" />
                              ) : (
                                <span className="text-rose-500 text-xs font-bold animate-fadeIn">!</span>
                              )}
                            </div>
                          )}
                        </div>
                        {bookingEmail !== "" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(bookingEmail) && (
                          <p className="mt-1 text-[10px] text-rose-500 font-semibold animate-fadeIn">
                            Please enter a valid email address.
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase mb-1">Company Name</label>
                        <input
                          type="text"
                          value={bookingCompany}
                          onChange={(e) => setBookingCompany(e.target.value)}
                          placeholder="Acme Agency"
                          className="w-full text-xs rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-3 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isBookingSubmitting}
                      className="w-full inline-flex items-center justify-center space-x-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white py-3.5 text-xs font-bold transition-all cursor-pointer"
                    >
                      {isBookingSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin text-white" />
                          <span>Reserving Slot...</span>
                        </>
                      ) : (
                        <>
                          <span>Lock Strategy Audit Call</span>
                          <Check className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}

                {bookingStep === "success" && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8 space-y-4"
                  >
                    <div className="mx-auto h-12 w-12 rounded-full bg-green-50 dark:bg-green-950/20 text-green-600 dark:text-green-400 flex items-center justify-center">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Your AI Audit Session is Confirmed!</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                      Confirmed for <strong>July {selectedDate}, 2026 at {selectedTime}</strong>. We sent a calendar invitation and preparatory questionnaire to <strong>{bookingEmail}</strong>.
                    </p>
                    <div className="pt-4">
                      <button
                        onClick={() => {
                          setBookingStep("datetime");
                          setBookingName("");
                          setBookingEmail("");
                          setBookingCompany("");
                        }}
                        className="inline-flex items-center space-x-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                      >
                        <span>Schedule another session</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </section>

      {/* ================= SECTION 9 — CONTACT ================= */}
      <section className="py-20 md:py-24 border-b border-slate-200 dark:border-zinc-900 bg-white dark:bg-[#0A0A0A] transition-colors duration-300" id="contact-form">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
            
            {/* Contact Info (CRO reinforcement) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center space-x-1.5 rounded-full border border-blue-100 dark:border-blue-900/30 bg-blue-50 dark:bg-blue-950/20 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-400">
                <span>Inbound Routing</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                Request Your AI Automation Assessment
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Describe the repetitive processes, CRM silos, or customer support backlogs inside your firm. Yaw will run a custom structural evaluation and draft an implementation blueprint within 24 hours.
              </p>
 
              <div className="space-y-4 pt-4 text-xs text-slate-600 dark:text-slate-300 border-t border-slate-200 dark:border-zinc-800">
                <div className="flex items-center space-x-3">
                  <div className="h-9 w-9 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <Mail className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 dark:text-slate-200 text-[11px]">Direct Support Email</p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400">yaw@automation.ai</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-9 w-9 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <Phone className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 dark:text-slate-200 text-[11px]">Enterprise Call Hub</p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400">+1 (555) 234-AIOP</p>
                  </div>
                </div>
              </div>
            </div>
 
            {/* Premium Form Fields */}
            <div className="lg:col-span-7 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-slate-50/50 dark:bg-[#111827]/40 p-6 sm:p-8 shadow-xl relative">
              
              <AnimatePresence mode="wait">
                {!contactSubmitted ? (
                  <motion.form 
                    key="form"
                    onSubmit={handleContactSubmit}
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase mb-1">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          placeholder="John Smith"
                          className="w-full text-xs rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-3 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase mb-1">Company Name</label>
                        <input
                          type="text"
                          value={contactCompany}
                          onChange={(e) => setContactCompany(e.target.value)}
                          placeholder="Acme Corp"
                          className="w-full text-xs rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-3 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase mb-1">Email Address *</label>
                        <div className="relative">
                          <input
                            type="email"
                            required
                            value={contactEmail}
                            onChange={(e) => setContactEmail(e.target.value)}
                            placeholder="john@acme.com"
                            className={`w-full text-xs rounded-xl border p-3 pr-10 focus:outline-none transition-colors ${
                              contactEmail === ""
                                ? "border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-slate-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-500"
                                : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail)
                                ? "border-green-500 bg-white dark:bg-zinc-950 text-slate-900 dark:text-white focus:border-green-500 focus:ring-1 focus:ring-green-500"
                                : "border-rose-500 bg-white dark:bg-zinc-950 text-slate-900 dark:text-white focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                            }`}
                          />
                          {contactEmail !== "" && (
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
                              {/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail) ? (
                                <CheckCircle2 className="h-4.5 w-4.5 text-green-500 animate-fadeIn" />
                              ) : (
                                <span className="text-rose-500 text-xs font-bold animate-fadeIn">!</span>
                              )}
                            </div>
                          )}
                        </div>
                        {contactEmail !== "" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail) && (
                          <p className="mt-1 text-[10px] text-rose-500 font-semibold animate-fadeIn">
                            Please enter a valid email address.
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase mb-1">Phone Number</label>
                        <input
                          type="tel"
                          value={contactPhone}
                          onChange={(e) => setContactPhone(e.target.value)}
                          placeholder="+1 (555) 000-0000"
                          className="w-full text-xs rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-3 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase mb-1">Current Challenges *</label>
                      <textarea
                        required
                        value={contactChallenges}
                        onChange={(e) => setContactChallenges(e.target.value)}
                        placeholder="Please describe which tasks currently take up most of your team's time..."
                        rows={4}
                        className="w-full text-xs rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-3 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isContactSubmitting}
                      className="w-full inline-flex items-center justify-center space-x-2 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:text-slate-500 text-white py-3.5 text-xs font-bold transition-all shadow-md cursor-pointer animate-fadeIn"
                    >
                      {isContactSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin text-white" />
                          <span>Preparing Assessment Request...</span>
                        </>
                      ) : (
                        <>
                          <span>Get My Automation Audit</span>
                          <Check className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10 space-y-4 animate-fadeIn"
                  >
                    <div className="mx-auto h-12 w-12 rounded-full bg-green-50 dark:bg-green-950/20 text-green-600 dark:text-green-400 flex items-center justify-center">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-black text-slate-900 dark:text-white">Friction Analysis Triggered!</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong>{contactName}</strong>. Yaw is running a structural evaluation of the parameters submitted. Your customized assessment proposal will be transmitted to <strong>{contactEmail}</strong> within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setContactSubmitted(false);
                        setContactName("");
                        setContactEmail("");
                        setContactCompany("");
                        setContactPhone("");
                        setContactChallenges("");
                      }}
                      className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                    >
                      &larr; Submit another inquiry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

// Simple video placeholder icon
function VideoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 8-6 4 6 4V8Z" />
      <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
    </svg>
  );
}

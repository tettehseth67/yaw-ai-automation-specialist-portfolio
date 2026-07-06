/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Mail, 
  Linkedin, 
  Twitter, 
  Github, 
  Sparkles, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  HelpCircle, 
  ChevronDown,
  ArrowRight,
  ShieldAlert,
  Send,
  Zap,
  Check,
  Loader2
} from "lucide-react";
import { FAQS } from "../data";
import { useToast } from "./Toast";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any } 
  }
};

export default function ContactView() {
  const { showToast } = useToast();

  // Contact Form States
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "ai-workflow-automation",
    scale: "under-10k",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [isBookingLoading, setIsBookingLoading] = useState(false);
  const [isSubmittingLoading, setIsSubmittingLoading] = useState(false);


  // Custom Interactive Calendar Widget States
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookedMeeting, setBookedMeeting] = useState(false);

  // FAQ Accordion category filter
  const [faqCategory, setFaqCategory] = useState<string>("all");
  const [expandedFaq, setExpandedFaq] = useState<string | null>("q1");

  // Mock Calendar values
  const upcomingDates = [
    { dayName: "Mon", dayNum: "30", month: "Jun", fullDate: "2026-06-30" },
    { dayName: "Tue", dayNum: "01", month: "Jul", fullDate: "2026-07-01" },
    { dayName: "Wed", dayNum: "02", month: "Jul", fullDate: "2026-07-02" },
    { dayName: "Thu", dayNum: "03", month: "Jul", fullDate: "2026-07-03" },
    { dayName: "Fri", dayNum: "04", month: "Jul", fullDate: "2026-07-04" }
  ];

  const timeslots = [
    "09:30 AM",
    "11:00 AM",
    "01:30 PM",
    "03:00 PM",
    "04:30 PM"
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setIsSubmittingLoading(true);
      
      // Simulate transmitting to database/Make webhook async task
      setTimeout(() => {
        setIsSubmittingLoading(false);
        setSubmitted(true);
        showToast(
          "Inquiry Transmitted Successfully!",
          "success",
          `Thank you, ${formData.name}! Your details have been transmitted and Yaw will reply to ${formData.email} within 24 hours.`,
          6000
        );
      }, 1200);
    }
  };

  const handleBookMeeting = () => {
    if (selectedDate && selectedTime) {
      setIsBookingLoading(true);
      
      // Simulate scheduler api reservation
      setTimeout(() => {
        setIsBookingLoading(false);
        setBookedMeeting(true);
        showToast(
          "Diagnostic Session Reserved!",
          "success",
          `Your slot is locked for ${selectedDate} at ${selectedTime}. Zoom calendar details sent to your email.`,
          6000
        );
      }, 1200);
    }
  };

  const filteredFaqs = faqCategory === "all"
    ? FAQS
    : FAQS.filter(f => f.category.toLowerCase() === faqCategory.toLowerCase());

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
          <Calendar className="h-3.5 w-3.5" />
          <span>Launch Your AI Automation Pilot</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 dark:text-white tracking-tight leading-tight">
          Let's Engineer Your{" "}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
            Automated Future
          </span>
        </h1>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Book a 30-minute direct developer call to audit your friction points, or submit your project details below to receive a custom design roadmap.
        </p>
      </motion.section>

      {/* 2. SPLIT INTERACTIVE BOOKING & INQUIRY FORM */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: INTERACTIVE SCHEDULER WIDGET */}
          <div className="lg:col-span-6 rounded-3xl border border-gray-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-8 space-y-6 shadow-lg">
            <div className="space-y-1 pb-4 border-b border-gray-100 dark:border-zinc-850">
              <span className="text-[10px] font-bold text-blue-600 dark:text-cyan-400 uppercase tracking-widest block">
                DIRECT STRATEGY SCHEDULER
              </span>
              <h3 className="text-lg font-bold text-gray-950 dark:text-white">
                Book a 30-Min Diagnostic Session
              </h3>
              <p className="text-xs text-gray-400 dark:text-gray-500">
                1-on-1 Zoom session with Yaw to outline process opportunities.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {!bookedMeeting ? (
                <motion.div
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  {/* Select Date */}
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest block">
                      1. SELECT DATE
                    </label>
                    <div className="grid grid-cols-5 gap-2">
                      {upcomingDates.map((date) => {
                        const isSelected = selectedDate === date.fullDate;
                        return (
                          <button
                            key={date.fullDate}
                            onClick={() => setSelectedDate(date.fullDate)}
                            className={`rounded-xl border p-2 text-center transition-all ${
                              isSelected
                                ? "border-blue-600 bg-blue-50 dark:bg-zinc-800 text-blue-700 dark:text-cyan-400 font-bold"
                                : "border-gray-150 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:bg-gray-50"
                            }`}
                          >
                            <span className="text-[10px] text-gray-400 block uppercase font-semibold">
                              {date.dayName}
                            </span>
                            <span className="text-sm font-extrabold block my-0.5">
                              {date.dayNum}
                            </span>
                            <span className="text-[9px] text-gray-400 block">
                              {date.month}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Select Time */}
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest block">
                      2. AVAILABLE TIME (UTC -07:00)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {timeslots.map((time) => {
                        const isSelected = selectedTime === time;
                        return (
                          <button
                            key={time}
                            disabled={!selectedDate}
                            onClick={() => setSelectedTime(time)}
                            className={`rounded-xl border p-2.5 text-center text-xs font-semibold transition-all ${
                              !selectedDate
                                ? "border-gray-100 bg-gray-50 text-gray-300 cursor-not-allowed opacity-50 dark:border-zinc-900 dark:bg-zinc-950/40"
                                : isSelected
                                ? "border-blue-600 bg-blue-50 dark:bg-zinc-800 text-blue-700 dark:text-cyan-400 font-bold"
                                : "border-gray-150 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:bg-gray-50"
                            }`}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Confirmation Info */}
                  <div className="rounded-2xl bg-gray-50 dark:bg-zinc-950/40 border border-gray-150 dark:border-zinc-850 p-4 space-y-2 text-xs">
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                      <Clock className="h-4 w-4 shrink-0 text-blue-600" />
                      <span>Duration: <strong>30 Minutes</strong></span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-green-500" />
                      <span>Topic: <strong>Process Audit & Tech Assessment</strong></span>
                    </div>
                  </div>

                  {/* Trigger Button */}
                  <button
                    disabled={!selectedDate || !selectedTime || isBookingLoading}
                    onClick={handleBookMeeting}
                    className="w-full inline-flex items-center justify-center space-x-2 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed dark:disabled:bg-zinc-800 text-white py-3 text-sm font-bold transition-all shadow-md cursor-pointer"
                  >
                    {isBookingLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin text-white" />
                        <span>Reserving Slot...</span>
                      </>
                    ) : (
                      <>
                        <span>Secure Booking Slot</span>
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6 text-center py-8"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-50 dark:bg-green-950/40 text-green-600 border border-green-200 dark:border-green-900">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-base font-bold text-gray-900 dark:text-white">
                      Diagnostic Session Reserved!
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 max-w-sm mx-auto leading-relaxed">
                      Your strategy slot is locked for <strong className="text-gray-700 dark:text-gray-200">{selectedDate}</strong> at <strong className="text-gray-700 dark:text-gray-200">{selectedTime}</strong> (Pacific Time). A calendar invitation and Zoom Link have been transmitted to your email.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setBookedMeeting(false);
                      setSelectedDate(null);
                      setSelectedTime(null);
                    }}
                    className="text-xs font-semibold text-blue-600 dark:text-cyan-400 hover:underline"
                  >
                    Change appointment or book another time
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT COLUMN: LEAD CAPTURE INQUIRY FORM */}
          <div className="lg:col-span-6 rounded-3xl border border-gray-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-8 space-y-6 shadow-lg">
            <div className="space-y-1 pb-4 border-b border-gray-100 dark:border-zinc-850">
              <span className="text-[10px] font-bold text-blue-600 dark:text-cyan-400 uppercase tracking-widest block">
                ROADMAP SPECIFICATION REQUEST
              </span>
              <h3 className="text-lg font-bold text-gray-950 dark:text-white">
                Submit Your Project Details
              </h3>
              <p className="text-xs text-gray-400 dark:text-gray-500">
                Receive an actionable tech-feasibility analysis within 24 hours.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  onSubmit={handleFormSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="name-input" className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                        Your Name *
                      </label>
                      <input
                        id="name-input"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Yaw Boateng"
                        className="w-full rounded-xl border border-gray-150 dark:border-zinc-850 bg-white dark:bg-zinc-950 px-3.5 py-2.5 text-xs text-gray-900 dark:text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="email-input" className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                        Work Email *
                      </label>
                      <div className="relative">
                        <input
                          id="email-input"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="yaw@example.ai"
                          className={`w-full rounded-xl border px-3.5 py-2.5 pr-10 text-xs text-gray-900 dark:text-white bg-white dark:bg-zinc-950 focus:outline-none transition-colors ${
                            formData.email === ""
                              ? "border-gray-150 dark:border-zinc-850 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                              : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
                              ? "border-green-500 dark:border-green-500/60 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                              : "border-rose-500 dark:border-rose-500/60 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                          }`}
                        />
                        {formData.email !== "" && (
                          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
                            {/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? (
                              <CheckCircle2 className="h-4 w-4 text-green-500 animate-fadeIn" />
                            ) : (
                              <span className="text-rose-500 text-xs font-bold animate-fadeIn">!</span>
                            )}
                          </div>
                        )}
                      </div>
                      {formData.email !== "" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && (
                        <p className="mt-1 text-[10px] text-rose-500 dark:text-rose-400 font-semibold animate-fadeIn">
                          Please enter a valid email address.
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Company */}
                    <div className="space-y-1.5">
                      <label htmlFor="company-input" className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                        Company Name
                      </label>
                      <input
                        id="company-input"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="AuraVibe Essentials"
                        className="w-full rounded-xl border border-gray-150 dark:border-zinc-850 bg-white dark:bg-zinc-950 px-3.5 py-2.5 text-xs text-gray-900 dark:text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>

                    {/* Service Target */}
                    <div className="space-y-1.5">
                      <label htmlFor="service-select" className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                        Core System Target
                      </label>
                      <select
                        id="service-select"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full rounded-xl border border-gray-150 dark:border-zinc-850 bg-white dark:bg-zinc-950 px-3.5 py-2.5 text-xs text-gray-900 dark:text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      >
                        <option value="ai-workflow-automation">AI Workflow Automation</option>
                        <option value="ai-agents-chatbots">AI Agents & Chatbots</option>
                        <option value="crm-automation">CRM Automation</option>
                        <option value="lead-generation-systems">Lead Gen Pipeline</option>
                        <option value="customer-support-automation">Support Automation</option>
                        <option value="custom-integrations">Custom API Integration</option>
                        <option value="ai-consulting">Strategic Consulting</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Budget Scale */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                      Estimated Monthly Budget / Project Scale
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: "under-10k", label: "< $5,000" },
                        { id: "medium", label: "$5,000 - $15k" },
                        { id: "enterprise", label: "$15k+" }
                      ].map((item) => {
                        const isSelected = formData.scale === item.id;
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, scale: item.id })}
                            className={`rounded-xl border py-2.5 text-center text-xs font-semibold transition-all ${
                              isSelected
                                ? "border-blue-600 bg-blue-50 dark:bg-zinc-850 text-blue-700 dark:text-cyan-400 font-bold"
                                : "border-gray-150 dark:border-zinc-850 bg-white dark:bg-zinc-950 hover:bg-gray-50"
                            }`}
                          >
                            {item.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Description Box */}
                  <div className="space-y-1.5">
                    <label htmlFor="message-textarea" className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                      Core Manual Bottleneck & Stack Description
                    </label>
                    <textarea
                      id="message-textarea"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe the core repetitive tasks. (e.g. Our team spends 15 hours syncing Shopify with DHL and emailing tracking codes.)"
                      className="w-full rounded-xl border border-gray-150 dark:border-zinc-850 bg-white dark:bg-zinc-950 px-3.5 py-2.5 text-xs text-gray-900 dark:text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  {/* Trigger Button */}
                  <button
                    type="submit"
                    disabled={isSubmittingLoading}
                    className="w-full inline-flex items-center justify-center space-x-2 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed dark:disabled:bg-zinc-800 text-white py-3 text-sm font-bold transition-all shadow-md cursor-pointer"
                  >
                    {isSubmittingLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin text-white" />
                        <span>Transmitting Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Transmit Roadmap Request</span>
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6 text-center py-8"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-50 dark:bg-green-950/40 text-green-600 border border-green-200 dark:border-green-900">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-base font-bold text-gray-900 dark:text-white">
                      Roadmap Details Captured!
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 max-w-sm mx-auto leading-relaxed">
                      Thank you, <strong className="text-gray-700 dark:text-gray-200">{formData.name}</strong>. Yaw will analyze your description concerning <strong className="text-gray-700 dark:text-gray-200">{formData.service}</strong> and draft a formal tech-feasibility proposal to <strong className="text-gray-700 dark:text-gray-200">{formData.email}</strong> shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        company: "",
                        service: "ai-workflow-automation",
                        scale: "under-10k",
                        message: ""
                      });
                    }}
                    className="text-xs font-semibold text-blue-600 dark:text-cyan-400 hover:underline"
                  >
                    Submit another inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </motion.section>

      {/* 3. CORE FAQS SECTION (ACCORDION CATEGORIZED) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12"
      >
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-950 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
            Learn more about standard service logistics, security safeguards, performance ROI, and integration support options.
          </p>
        </div>

        {/* FAQ Filter selectors */}
        <div className="flex flex-wrap justify-center gap-2">
          {[
            { id: "all", label: "All Questions" },
            { id: "automation", label: "Automation" },
            { id: "process", label: "Process & Timeline" },
            { id: "security", label: "Data Security" },
            { id: "support", label: "Fail-safes & Support" }
          ].map((pill) => (
            <button
              key={pill.id}
              onClick={() => {
                setFaqCategory(pill.id);
                setExpandedFaq(null);
              }}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                faqCategory === pill.id
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/10"
                  : "bg-gray-150 text-gray-600 dark:bg-zinc-800 dark:text-gray-300 hover:bg-gray-200"
              }`}
            >
              {pill.label}
            </button>
          ))}
        </div>

        {/* Dynamic Accordions */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isExpanded = expandedFaq === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border bg-white dark:bg-zinc-900 overflow-hidden transition-all duration-300 ${
                  isExpanded
                    ? "border-blue-500 shadow-md ring-1 ring-blue-500/5"
                    : "border-gray-200/80 dark:border-zinc-800 hover:border-gray-350"
                }`}
              >
                <button
                  onClick={() => setExpandedFaq(isExpanded ? null : faq.id)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white leading-tight">
                    {faq.question}
                  </span>
                  <div className={`rounded-lg p-1.5 transition-transform shrink-0 ${isExpanded ? "rotate-180" : ""}`}>
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="border-t border-gray-100 dark:border-zinc-850"
                    >
                      <div className="p-5 text-xs sm:text-sm text-gray-600 dark:text-gray-300 bg-gray-50/50 dark:bg-zinc-950/20 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </motion.section>
    </div>
  );
}

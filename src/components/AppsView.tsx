/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  TrendingUp, 
  Cpu, 
  Bot, 
  Workflow, 
  Clock, 
  Database, 
  Play, 
  RotateCcw, 
  Send, 
  Settings, 
  ArrowRight, 
  ShieldCheck, 
  Mail, 
  CheckCircle2, 
  ChevronRight, 
  Calculator, 
  FileText, 
  Check, 
  Terminal, 
  FileCode,
  Layers,
  AlertCircle
} from "lucide-react";
import { useToast } from "./Toast";

export default function AppsView() {
  const { showToast } = useToast();
  const [activeApp, setActiveApp] = useState<"chatbot" | "roi" | "builder">("chatbot");

  // ==========================================
  // 1. AI CHATBOT SIMULATOR STATES
  // ==========================================
  const [chatbotIndustry, setChatbotIndustry] = useState<"ecommerce" | "realestate" | "marketing">("ecommerce");
  const [chatMessage, setChatMessage] = useState("");
  const [chatLogs, setChatLogs] = useState<{ sender: "user" | "bot"; text: string; time: string }[]>([
    {
      sender: "bot",
      text: "Hello! I am your custom-trained AI Sales & Support Agent. Ask me anything about our orders, bookings, or processes!",
      time: "10:00 AM"
    }
  ]);
  const [backendTrace, setBackendTrace] = useState<string[]>([
    "System initialized with Custom Prompt context.",
    "Awaiting user message in sandbox queue..."
  ]);
  const [isBotResponding, setIsBotResponding] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  // Auto scroll chat to bottom
  useEffect(() => {
    if (chatBottomRef.current) {
      chatBottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatLogs]);

  // Handle Chatbot Industry Preset Switch
  useEffect(() => {
    let welcomeText = "";
    let trace: string[] = [];
    if (chatbotIndustry === "ecommerce") {
      welcomeText = "Hello! I'm AuraVibe's AI Agent. If you have any shipping, order status, or refund inquiries, please provide your Order ID (e.g., #5482)!";
      trace = [
        "🔄 Context Switched: E-Commerce Store",
        "📂 Mock Database Mounted: Shopify API Active",
        "📂 Mock DHL Shipping Sync: Active",
        "🤖 Injected System Prompt: 'You are Marcus, AuraVibe support lead...'"
      ];
    } else if (chatbotIndustry === "realestate") {
      welcomeText = "Welcome to Vanguard Realty AI. I can search our commercial real estate portfolio, check pricing, or schedule virtual property walk-throughs!";
      trace = [
        "🔄 Context Switched: Commercial Real Estate",
        "📂 Vector Database Mounted: 180+ Property Catalog Loaded",
        "🤖 Injected System Prompt: 'You are Vanguard Property Assistant...'"
      ];
    } else if (chatbotIndustry === "marketing") {
      welcomeText = "Hi! I am the ScalePath Agency onboarding agent. I can score your business leads, outline monthly campaigns, or book a strategy call!";
      trace = [
        "🔄 Context Switched: Marketing Agency Onboarding",
        "📂 CRM Mounted: HubSpot Lead Capture Node",
        "🤖 Injected System Prompt: 'You are the ScalePath client intake agent...'"
      ];
    }

    setChatLogs([
      {
        sender: "bot",
        text: welcomeText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    setBackendTrace(trace);
  }, [chatbotIndustry]);

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsg = chatMessage.trim();
    
    // Append User Message
    setChatLogs(prev => [...prev, { sender: "user", text: userMsg, time: timestamp }]);
    setChatMessage("");
    setIsBotResponding(true);

    // Append trace logs
    setBackendTrace(prev => [
      ...prev,
      `📩 [${timestamp}] Inbound user prompt received: "${userMsg}"`,
      `🔍 [${timestamp}] Running intent classification algorithm...`
    ]);

    // Simulated multi-step AI Agent thoughts
    setTimeout(() => {
      let botResponse = "";
      let newTraces: string[] = [];

      if (chatbotIndustry === "ecommerce") {
        if (userMsg.toLowerCase().includes("#5482") || userMsg.toLowerCase().includes("order")) {
          newTraces = [
            `🔑 Intent classified: WISMO (Where is my order)`,
            `🌐 Fetching from Shopify API: Requesting order #5482 details...`,
            `✅ Order Found: status = 'Shipped', carrier = 'DHL Express', ETA = '2 days'`,
            `💬 Context sent to Gemini: compiling human-like shipment update...`
          ];
          botResponse = "I have successfully retrieved your order #5482! It was shipped via DHL Express on July 3rd and is currently in transit. The scheduled delivery date is Wednesday, July 8th, by 3:00 PM. No signature is required!";
        } else if (userMsg.toLowerCase().includes("refund") || userMsg.toLowerCase().includes("return")) {
          newTraces = [
            `🔑 Intent classified: Return/Refund Request`,
            `🧠 Checking return policy conditions (within 30 days = true)`,
            `✅ Automated Action: Drafted RMA label #RMA-9021`,
            `💬 Gemini outputting return instructions...`
          ];
          botResponse = "I can certainly assist with your return! Based on our records, your purchase is within our 30-day window. I have automatically drafted a prepaid DHL return label for you. Would you like me to email it to your account?";
        } else {
          newTraces = [
            `🔑 Intent classified: General Query`,
            `🤖 Searching local knowledge base vectors...`,
            `💬 Generating responsive output via model...`
          ];
          botResponse = "Thanks for asking! I'm here to help with any shipping, order tracking, returns, or product inquiries. If you have an Order ID, go ahead and share it!";
        }
      } else if (chatbotIndustry === "realestate") {
        if (userMsg.toLowerCase().includes("listings") || userMsg.toLowerCase().includes("properties") || userMsg.toLowerCase().includes("commercial")) {
          newTraces = [
            `🔑 Intent classified: Property Search`,
            `🗄️ Querying Vector Database: 'commercial warehouse retail spaces'`,
            `🔍 Retrieved 2 highly relevant listings: Vanguard Plaza (98% match), Crestview Logistics (95% match)`,
            `💬 Creating custom presentation cards via Gemini...`
          ];
          botResponse = "I found 2 premium commercial properties that match your profile:\n\n1. **Vanguard Plaza**: A 15,000 sq ft retail hub with high visibility, priced at $28/sq ft.\n2. **Crestview Logistics**: A state-of-the-art 35,000 sq ft distribution warehouse located right off Interstate 90.\n\nWhich of these would you like to receive the full prospectus brochure for?";
        } else if (userMsg.toLowerCase().includes("price") || userMsg.toLowerCase().includes("cost")) {
          newTraces = [
            `🔑 Intent classified: Price Inquiry`,
            `📚 Fetching valuation logs for current catalog`,
            `💬 Formulating financial summary...`
          ];
          botResponse = "Our commercial lease terms range from $18/sq ft to $45/sq ft, depending on location density and custom tenant improvement allowances. We also support customized triple-net lease (NNN) structuring. Would you like a 10-minute briefing call with Julian?";
        } else {
          newTraces = [
            `🔑 Intent classified: General Real Estate Query`,
            `🧠 Checking Vanguard Property FAQ corpus...`,
            `💬 Formatting response...`
          ];
          botResponse = "I'm the Vanguard Property assistant. I can fetch listing specifications, verify zoning ordinances, analyze rent roll statistics, or connect you with Julian's calendar!";
        }
      } else if (chatbotIndustry === "marketing") {
        if (userMsg.toLowerCase().includes("onboard") || userMsg.toLowerCase().includes("start")) {
          newTraces = [
            `🔑 Intent classified: New Client Intake`,
            `💾 Action: Creating client folder in Google Drive`,
            `💾 Action: Triggering HubSpot deal pipeline state change &rarr; 'Onboarding'`,
            `💬 Compiling client portal activation details...`
          ];
          botResponse = "Perfect! Let's kickstart your ScalePath campaign. I have automatically provisioned your private Google Drive folder and drafted an onboarding questionnaire. Please use the secure portal link below to fill out your brand guidelines, and we'll schedule our kickoff call immediately!";
        } else if (userMsg.toLowerCase().includes("lead") || userMsg.toLowerCase().includes("campaign")) {
          newTraces = [
            `🔑 Intent classified: Lead Enrichment Request`,
            `🌐 Scraping domain directories: pulling context...`,
            `✅ Score Calculated: 9.2/10 (High Priority Outbound)`,
            `💬 Outlining campaign strategy...`
          ];
          botResponse = "For lead generation campaigns, our automated engine will pull leads from Clay, personalize the icebreaker triggers based on their latest news, and launch them inside Instantly. On average, our outbound clients achieve a 4x increase in meeting bookings within 45 days!";
        } else {
          newTraces = [
            `🔑 Intent classified: General Marketing Agency Inquiry`,
            `🤖 Pulling agency capability index...`,
            `💬 Sending helpful answer...`
          ];
          botResponse = "I am the ScalePath support agent. I'm here to help you automate lead intake, build outbound prospecting pipelines, trigger HubSpot CRM updates, or set up client reporting templates!";
        }
      }

      setChatLogs(prev => [...prev, { sender: "bot", text: botResponse, time: timestamp }]);
      setBackendTrace(prev => [...prev, ...newTraces, `✅ Response dispatched safely.`]);
      setIsBotResponding(false);
    }, 1400);
  };


  // ==========================================
  // 2. ROI SAVINGS CALCULATOR STATES
  // ==========================================
  const [teamSize, setTeamSize] = useState(8);
  const [manualHours, setManualHours] = useState(12);
  const [hourlyWage, setHourlyWage] = useState(35);

  const calculatedMonthlySavedHours = teamSize * manualHours * 4.3; // 4.3 weeks per month
  const calculatedMonthlyDollarsSaved = calculatedMonthlySavedHours * hourlyWage;
  const calculatedAnnualDollarsSaved = calculatedMonthlyDollarsSaved * 12;
  const paybackDays = 14; // Constant realistic setup speed

  // State to trigger Custom Proposal Generation
  const [showProposal, setShowProposal] = useState(false);
  const [proposalOutput, setProposalOutput] = useState("");

  const handleGenerateProposal = () => {
    setShowProposal(true);
    setProposalOutput(
      `=======================================================\n` +
      `       AI AUTOMATION BLUEPRINT & PROPOSAL FOR YAW.AI   \n` +
      `=======================================================\n` +
      `Prepared for: Customized Sandbox Enterprise\n` +
      `Date: July 6, 2026\n\n` +
      `1. METRIC DIAGNOSTIC:\n` +
      `-------------------------------------------------------\n` +
      `- Active Team Size: ${teamSize} employees\n` +
      `- Weekly Manual Labor / Employee: ${manualHours} hours\n` +
      `- Estimated Blended Wage: $${hourlyWage}/hour\n` +
      `- Total Operational Leakage: ${calculatedMonthlySavedHours.toFixed(0)} hours / month\n` +
      `- Annual Cost Friction: $${calculatedAnnualDollarsSaved.toLocaleString("en-US", { maximumFractionDigits: 0 })}\n\n` +
      `2. PROPOSED AUTOMATION PIPELINE:\n` +
      `-------------------------------------------------------\n` +
      `- Module A: Autonomous Lead Intake & Vector Routing (Make.com)\n` +
      `- Module B: Automated Document Parsing & Extraction (Document AI)\n` +
      `- Module C: 24/7 Context-Aware Customer Triage Bot\n\n` +
      `3. ESTIMATED ROI & IMPACT:\n` +
      `-------------------------------------------------------\n` +
      `- Monthly Savings: $${calculatedMonthlyDollarsSaved.toLocaleString("en-US", { maximumFractionDigits: 0 })}\n` +
      `- Monthly Time Reclaimed: ${calculatedMonthlySavedHours.toFixed(0)} hours\n` +
      `- Breakeven Setup Period: ${paybackDays} days flat\n\n` +
      `=======================================================\n` +
      `Contact Yaw (yaw@example.ai) to schedule your custom implementation.`
    );
    showToast("Proposal Built Successfully", "success", "Your tailored automation strategy outline has been compiled.", 3000);
  };


  // ==========================================
  // 3. WORKFLOW BUILDER STATES
  // ==========================================
  const [wfTrigger, setWfTrigger] = useState<string>("shopify");
  const [wfActions, setWfActions] = useState<string[]>(["gemini", "hubspot", "slack"]);
  const [wfStatus, setWfStatus] = useState<"idle" | "running" | "completed">("idle");
  const [wfLogs, setWfLogs] = useState<string[]>([]);
  const [currentNodeIndex, setCurrentNodeIndex] = useState<number>(-1);

  const availableTriggers = [
    { id: "shopify", label: "Shopify New Order Trigger", icon: Database, color: "border-purple-500 text-purple-600 dark:text-purple-400" },
    { id: "form", label: "Inbound Onboarding Form", icon: FileText, color: "border-blue-500 text-blue-600 dark:text-blue-400" },
    { id: "webhook", label: "Custom API Webhook Received", icon: Cpu, color: "border-amber-500 text-amber-600 dark:text-amber-400" }
  ];

  const availableActions = [
    { id: "gemini", label: "Gemini Metadata Parsing", icon: Sparkles, desc: "Extract values autonomously" },
    { id: "hubspot", label: "HubSpot Pipeline Sync", icon: Layers, desc: "Update deals in CRM" },
    { id: "slack", label: "Slack Instant Team Notification", icon: Mail, desc: "Send structured channel alerts" },
    { id: "gmail", label: "Gmail Personalized Outreach Draft", icon: Bot, desc: "Create individualized draft copy" }
  ];

  const toggleWfAction = (actionId: string) => {
    if (wfStatus === "running") return;
    if (wfActions.includes(actionId)) {
      if (wfActions.length === 1) {
        showToast("Minimum 1 Action Needed", "error", "Every workflow pipeline requires at least one execution block.", 2500);
        return;
      }
      setWfActions(prev => prev.filter(a => a !== actionId));
    } else {
      setWfActions(prev => [...prev, actionId]);
    }
  };

  const handleRunWorkflow = () => {
    if (wfStatus === "running") return;
    setWfStatus("running");
    setWfLogs([]);
    setCurrentNodeIndex(0);

    const logs: string[] = [];
    const triggerLabel = availableTriggers.find(t => t.id === wfTrigger)?.label || "Trigger";

    // Step-by-step logs with delay to simulate pipeline running
    const appendLog = (msg: string, delay: number) => {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          setWfLogs(prev => [...prev, msg]);
          resolve();
        }, delay);
      });
    };

    const runSequence = async () => {
      await appendLog(`[10:15:00] ⚡ PIPELINE TRIGGERED: ${triggerLabel}`, 400);
      await appendLog(`[10:15:01] 📂 Parsing raw JSON request package parameters...`, 600);
      
      for (let i = 0; i < wfActions.length; i++) {
        setCurrentNodeIndex(i + 1); // Highlight active action block
        const actionId = wfActions[i];
        if (actionId === "gemini") {
          await appendLog(`[10:15:03] 🤖 calling Google Gemini API...`, 800);
          await appendLog(`[10:15:04] ✅ Gemini extracted: classification = 'High Value', tags = ['Enriched', 'Urgent']`, 400);
        } else if (actionId === "hubspot") {
          await appendLog(`[10:15:06] 🗄️ Querying CRM database tokens via OAuth security...`, 700);
          await appendLog(`[10:15:07] ✅ HubSpot Record created successfully (Status Code: 201 Created)`, 400);
        } else if (actionId === "slack") {
          await appendLog(`[10:15:09] 💬 Transmitting live channel message to #ops-alerts...`, 600);
          await appendLog(`[10:15:10] 📱 Slack Notification Transmitted safely`, 300);
        } else if (actionId === "gmail") {
          await appendLog(`[10:15:12] 📧 Invoking Gmail outreach integration...`, 800);
          await appendLog(`[10:15:13] ✅ Personalized draft email stored successfully in Sales Outbox`, 400);
        }
      }

      setCurrentNodeIndex(wfActions.length + 1);
      await appendLog(`[10:15:15] 🎉 WORKFLOW SUCCESS: All automated tasks completed in 15.2s.`, 600);
      setWfStatus("completed");
      showToast("Simulation Completed!", "success", "Visual workflow built, data synchronized, and trace logs parsed.", 4000);
    };

    runSequence();
  };

  const handleResetWorkflow = () => {
    setWfStatus("idle");
    setWfLogs([]);
    setCurrentNodeIndex(-1);
  };


  return (
    <div className="bg-slate-50 dark:bg-[#0A0A0A] text-slate-900 dark:text-gray-100 min-h-screen py-10 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* ================= HEADER OVERVIEW ================= */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 rounded-full border border-blue-200 dark:border-zinc-800 bg-blue-50/50 dark:bg-zinc-900/40 px-3.5 py-1.5 text-xs font-bold text-blue-700 dark:text-cyan-400">
            <Cpu className="h-4 w-4 animate-spin text-blue-500" />
            <span>Interactive Sandbox Workspace</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 dark:text-white tracking-tight leading-none">
            Live AI & Automation{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
              Playground
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Click, configure, and play with Yaw's core production-grade services. See live trace logs, operational speed tests, and simulated backend AI decision trees.
          </p>
        </div>

        {/* ================= APPS TAB SWITCHER ================= */}
        <div className="flex justify-center">
          <div className="flex rounded-2xl bg-white dark:bg-[#111827] p-1.5 border border-slate-200 dark:border-zinc-800 shadow-md">
            <button
              onClick={() => { if (wfStatus !== "running") setActiveApp("chatbot"); }}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                activeApp === "chatbot"
                  ? "bg-blue-600 text-white shadow"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white"
              } ${wfStatus === "running" ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <Bot className="h-4 w-4" />
              <span>AI Support Chatbot</span>
            </button>
            <button
              onClick={() => { if (wfStatus !== "running") setActiveApp("roi"); }}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                activeApp === "roi"
                  ? "bg-blue-600 text-white shadow"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white"
              } ${wfStatus === "running" ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <Calculator className="h-4 w-4" />
              <span>ROI Savings Calculator</span>
            </button>
            <button
              onClick={() => { if (wfStatus !== "running") setActiveApp("builder"); }}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                activeApp === "builder"
                  ? "bg-blue-600 text-white shadow"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white"
              } ${wfStatus === "running" ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <Workflow className="h-4 w-4" />
              <span>Interactive Workflow Builder</span>
            </button>
          </div>
        </div>

        {/* ================= MAIN CONTAINER SCREEN ================= */}
        <div className="mx-auto max-w-6xl">
          <AnimatePresence mode="wait">
            
            {/* 1. APP: AI CHATBOT PORTAL */}
            {activeApp === "chatbot" && (
              <motion.div
                key="chatbot-app"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8"
              >
                {/* Left Side: Custom Chat Workspace */}
                <div id="chatbot-playground-card" className="lg:col-span-7 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-zinc-800 shadow-xl overflow-hidden flex flex-col justify-between h-[580px]">
                  {/* Chat Header controls */}
                  <div className="bg-slate-50 dark:bg-zinc-900 px-6 py-4 border-b border-slate-200 dark:border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-xl bg-blue-100 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-50 dark:border-blue-900/30">
                        <Bot className="h-5.5 w-5.5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-slate-900 dark:text-white">Live Chatbot Simulator</h4>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 flex items-center">
                          <span className="h-2 w-2 rounded-full bg-green-500 mr-1.5 animate-pulse" /> Context-Aware Pipeline
                        </span>
                      </div>
                    </div>

                    {/* Industry Selector switches */}
                    <div className="flex bg-white dark:bg-[#0A0A0A] p-1 border border-slate-200 dark:border-zinc-850 rounded-xl">
                      {(["ecommerce", "realestate", "marketing"] as const).map((industry) => (
                        <button
                          key={industry}
                          onClick={() => setChatbotIndustry(industry)}
                          className={`px-3 py-1.5 rounded-lg text-[10px] font-bold capitalize transition-all cursor-pointer ${
                            chatbotIndustry === industry
                              ? "bg-blue-600 text-white"
                              : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white"
                          }`}
                        >
                          {industry === "ecommerce" ? "E-com" : industry === "realestate" ? "Property" : "Agency"}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Chat message space */}
                  <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-slate-50/20 max-h-[420px]">
                    {chatLogs.map((log, idx) => {
                      const isBot = log.sender === "bot";
                      return (
                        <div
                          key={idx}
                          className={`flex ${isBot ? "justify-start" : "justify-end"} items-end space-x-2 animate-fadeIn`}
                        >
                          {isBot && (
                            <div className="h-7 w-7 rounded-lg bg-blue-100 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center text-[10px] border border-blue-50 dark:border-blue-900/30 shrink-0">
                              🤖
                            </div>
                          )}
                          <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-xs leading-relaxed shadow-sm ${
                            isBot
                              ? "bg-white dark:bg-zinc-800 text-slate-800 dark:text-gray-200 border border-slate-150 dark:border-zinc-700/60 rounded-bl-none"
                              : "bg-blue-600 text-white rounded-br-none"
                          }`}>
                            <p className="whitespace-pre-line font-medium">{log.text}</p>
                            <span className={`block text-[8px] text-right mt-1.5 font-bold ${isBot ? "text-slate-400" : "text-blue-200"}`}>
                              {log.time}
                            </span>
                          </div>
                        </div>
                      );
                    })}

                    {isBotResponding && (
                      <div className="flex justify-start items-center space-x-2">
                        <div className="h-7 w-7 rounded-lg bg-blue-100 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center text-[10px] border border-blue-50 dark:border-blue-900/30 shrink-0">
                          🤖
                        </div>
                        <div className="rounded-2xl bg-white dark:bg-zinc-800 border border-slate-150 dark:border-zinc-700/60 px-4 py-3 text-xs text-slate-500 dark:text-slate-400 rounded-bl-none flex items-center space-x-1.5 shadow-sm">
                          <span className="h-2 w-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                          <span className="h-2 w-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                          <span className="h-2 w-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                        </div>
                      </div>
                    )}
                    <div ref={chatBottomRef} />
                  </div>

                  {/* Input form */}
                  <form onSubmit={handleSendChat} className="p-4 border-t border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900 flex space-x-2">
                    <input
                      type="text"
                      value={chatMessage}
                      disabled={isBotResponding}
                      onChange={(e) => setChatMessage(e.target.value)}
                      placeholder={
                        chatbotIndustry === "ecommerce"
                          ? "Type 'Where is my order #5482?' or 'refund'..."
                          : chatbotIndustry === "realestate"
                          ? "Type 'show commercial listings' or 'leasing price'..."
                          : "Type 'how to onboard new client' or 'lead enrichment'..."
                      }
                      className="flex-1 bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-850 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-blue-500 disabled:opacity-50"
                    />
                    <button
                      type="submit"
                      disabled={isBotResponding || !chatMessage.trim()}
                      className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shadow-md"
                      title="Send message"
                    >
                      <Send className="h-4.5 w-4.5" />
                    </button>
                  </form>
                </div>

                {/* Right Side: Backend AI Trace Output Logging */}
                <div className="lg:col-span-5 rounded-3xl bg-slate-900 border border-zinc-800 shadow-xl overflow-hidden flex flex-col justify-between h-[580px] text-zinc-300">
                  <div className="px-5 py-4 bg-zinc-950/80 border-b border-zinc-800/80 flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <Terminal className="h-4.5 w-4.5 text-emerald-400" />
                      <span className="text-[11px] font-bold tracking-widest font-mono text-zinc-100 uppercase">Yaw.ai Agent Trace Logs</span>
                    </div>
                    <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[8px] font-mono text-emerald-400 border border-emerald-500/20 uppercase">
                      Live Output
                    </span>
                  </div>

                  <div className="flex-1 p-5 overflow-y-auto space-y-3 font-mono text-[10px] leading-relaxed bg-zinc-950/40 select-text">
                    {backendTrace.map((trace, idx) => {
                      const isHighlight = trace.includes("Context Switched") || trace.includes("Intent classified") || trace.includes("SUCCESS") || trace.includes("dispatched");
                      return (
                        <div key={idx} className={`${isHighlight ? "text-emerald-400 font-bold" : "text-zinc-400"}`}>
                          &gt; {trace}
                        </div>
                      );
                    })}
                  </div>

                  <div className="px-5 py-4 bg-zinc-950/50 border-t border-zinc-800/60 space-y-2 text-[10px] text-zinc-500">
                    <div className="flex items-center space-x-1.5">
                      <ShieldCheck className="h-3.5 w-3.5 text-blue-500" />
                      <span className="font-bold text-zinc-400">Security Safeguard active:</span>
                    </div>
                    <p className="leading-normal">
                      Proprietary business files are isolated in vector clusters. No conversation metrics are passed back to public training pipelines.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 2. APP: ROI CALCULATOR */}
            {activeApp === "roi" && (
              <motion.div
                key="roi-app"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                {/* Left Side: Parameters Sliders */}
                <div id="calculator-playground-card" className="lg:col-span-7 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-zinc-800 p-6 sm:p-8 shadow-xl space-y-6">
                  <div className="flex items-center space-x-3.5 pb-4 border-b border-slate-100 dark:border-zinc-800">
                    <div className="h-10 w-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-50 dark:border-blue-900/30">
                      <Calculator className="h-5.5 w-5.5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-black text-slate-900 dark:text-white">Configure Your Team's Manual Load</h3>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400">Adjust the sliders below to calculate hours lost and potential savings</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* Slider 1: Team Size */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-bold">
                        <span className="text-slate-700 dark:text-gray-300">Active Team Size (doing admin tasks)</span>
                        <span className="text-blue-600 dark:text-cyan-400">{teamSize} Employees</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="50"
                        value={teamSize}
                        onChange={(e) => { setTeamSize(parseInt(e.target.value)); setShowProposal(false); }}
                        className="w-full h-1.5 rounded-lg bg-slate-100 dark:bg-zinc-800 accent-blue-600 cursor-pointer"
                      />
                      <div className="flex justify-between text-[9px] text-slate-400 font-bold">
                        <span>1 Employee</span>
                        <span>50 Employees</span>
                      </div>
                    </div>

                    {/* Slider 2: Weekly Hours / Employee */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-bold">
                        <span className="text-slate-700 dark:text-gray-300">Weekly Manual Labor per Employee</span>
                        <span className="text-blue-600 dark:text-cyan-400">{manualHours} Hours / week</span>
                      </div>
                      <input
                        type="range"
                        min="2"
                        max="40"
                        value={manualHours}
                        onChange={(e) => { setManualHours(parseInt(e.target.value)); setShowProposal(false); }}
                        className="w-full h-1.5 rounded-lg bg-slate-100 dark:bg-zinc-800 accent-blue-600 cursor-pointer"
                      />
                      <div className="flex justify-between text-[9px] text-slate-400 font-bold">
                        <span>2 Hours / wk</span>
                        <span>40 Hours / wk</span>
                      </div>
                    </div>

                    {/* Slider 3: Hourly wage */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-bold">
                        <span className="text-slate-700 dark:text-gray-300">Blended Employee Labor Rate</span>
                        <span className="text-blue-600 dark:text-cyan-400">${hourlyWage} / hour</span>
                      </div>
                      <input
                        type="range"
                        min="15"
                        max="150"
                        value={hourlyWage}
                        onChange={(e) => { setHourlyWage(parseInt(e.target.value)); setShowProposal(false); }}
                        className="w-full h-1.5 rounded-lg bg-slate-100 dark:bg-zinc-800 accent-blue-600 cursor-pointer"
                      />
                      <div className="flex justify-between text-[9px] text-slate-400 font-bold">
                        <span>$15 / hr</span>
                        <span>$150 / hr</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center space-x-2 text-[10px] text-slate-500 leading-normal">
                      <ShieldCheck className="h-4.5 w-4.5 text-blue-500 shrink-0" />
                      <span>Estimates based on audited partner operational summaries.</span>
                    </div>
                    <button
                      onClick={handleGenerateProposal}
                      className="group inline-flex items-center space-x-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 text-xs font-bold shadow-md transition-colors cursor-pointer"
                    >
                      <span>Build Customized Proposal</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Right Side: ROI Outcome visualization */}
                <div className="lg:col-span-5 space-y-6">
                  {/* Big Number stats Card */}
                  <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 sm:p-8 shadow-xl space-y-6">
                    <div>
                      <p className="text-[10px] font-bold tracking-wider text-blue-100 uppercase">Projected Annual Cost Leakage Saved</p>
                      <h2 className="text-3xl sm:text-4xl font-black tracking-tight mt-1">
                        ${calculatedAnnualDollarsSaved.toLocaleString("en-US", { maximumFractionDigits: 0 })}
                      </h2>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                      <div>
                        <p className="text-[9px] font-bold text-blue-100 uppercase">Monthly Hours Saved</p>
                        <p className="text-xl font-bold mt-0.5">{calculatedMonthlySavedHours.toFixed(0)} Hours</p>
                      </div>
                      <div>
                        <p className="text-[9px] font-bold text-blue-100 uppercase">Monthly Cash Reclaimed</p>
                        <p className="text-xl font-bold mt-0.5">${calculatedMonthlyDollarsSaved.toLocaleString("en-US", { maximumFractionDigits: 0 })}</p>
                      </div>
                    </div>

                    <div className="p-3 bg-white/10 rounded-xl flex items-center justify-between text-xs font-semibold">
                      <span>Development & Implementation SLA:</span>
                      <span className="bg-emerald-500 px-2.5 py-0.5 rounded text-[10px] font-bold">14 Days</span>
                    </div>
                  </div>

                  {/* Dynamic Graphic Bar Visualizer */}
                  <div className="rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-zinc-800 p-6 shadow-xl space-y-4">
                    <h4 className="text-xs font-bold text-slate-800 dark:text-gray-200 uppercase tracking-wider">Before vs After AI Automation</h4>
                    
                    <div className="space-y-3.5 pt-2">
                      {/* Before bar */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-[10px] font-bold text-slate-500">
                          <span>Traditional Manual Expense (Monthly)</span>
                          <span className="text-rose-500 font-mono">${calculatedMonthlyDollarsSaved.toLocaleString("en-US", { maximumFractionDigits: 0 })}</span>
                        </div>
                        <div className="h-4 w-full bg-slate-100 dark:bg-zinc-800 rounded-md overflow-hidden relative">
                          <motion.div 
                            className="h-full bg-rose-500"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 0.5 }}
                          />
                        </div>
                      </div>

                      {/* After bar */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-[10px] font-bold text-slate-500">
                          <span>AI Automated Platform Expense (Monthly)</span>
                          <span className="text-emerald-500 font-mono">${(calculatedMonthlyDollarsSaved * 0.15).toLocaleString("en-US", { maximumFractionDigits: 0 })}</span>
                        </div>
                        <div className="h-4 w-full bg-slate-100 dark:bg-zinc-800 rounded-md overflow-hidden relative">
                          <motion.div 
                            className="h-full bg-emerald-500"
                            initial={{ width: 0 }}
                            animate={{ width: "15%" }}
                            transition={{ duration: 0.5 }}
                          />
                        </div>
                      </div>
                    </div>

                    <p className="text-[9px] text-slate-400 dark:text-slate-500 leading-normal pt-2">
                      * After automation costs represent estimated SaaS subscription fees (e.g. Make.com, OpenAI API volume keys) running at a nominal 15% rate of traditional human labor schedules.
                    </p>
                  </div>
                </div>

                {/* Optional Proposal Blueprint View */}
                {showProposal && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="lg:col-span-12 rounded-3xl bg-zinc-950 border border-zinc-800 p-6 shadow-xl font-mono text-xs text-zinc-300 space-y-4"
                  >
                    <div className="flex justify-between items-center pb-3 border-b border-zinc-800">
                      <div className="flex items-center space-x-2 text-blue-400">
                        <FileCode className="h-4.5 w-4.5" />
                        <span className="font-bold uppercase tracking-wider text-[10px]">Proposal Blueprint Output</span>
                      </div>
                      <span className="text-[10px] text-zinc-500">Press Cmd+C to copy</span>
                    </div>
                    <pre className="overflow-x-auto text-[10px] leading-relaxed whitespace-pre font-bold p-3 bg-zinc-900 rounded-xl border border-zinc-800 text-emerald-400 select-all">
                      {proposalOutput}
                    </pre>
                  </motion.div>
                )}

              </motion.div>
            )}

            {/* 3. APP: WORKFLOW BLUEPRINT BUILDER */}
            {activeApp === "builder" && (
              <motion.div
                key="builder-app"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                {/* Left Side: Drag/Select Parameters */}
                <div id="workflow-playground-card" className="lg:col-span-7 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-zinc-800 p-6 sm:p-8 shadow-xl space-y-6">
                  <div className="flex items-center space-x-3.5 pb-4 border-b border-slate-100 dark:border-zinc-800">
                    <div className="h-10 w-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-50 dark:border-blue-900/30">
                      <Workflow className="h-5.5 w-5.5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-black text-slate-900 dark:text-white">Assemble Custom Automated Pipelines</h3>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400">Select a Trigger, map Action stages, and run sandbox execution</p>
                    </div>
                  </div>

                  {/* Trigger selectors */}
                  <div className="space-y-2.5">
                    <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">1. Select Outbound Trigger Channel</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {availableTriggers.map((trig) => {
                        const Icon = trig.icon;
                        const isSelected = wfTrigger === trig.id;
                        return (
                          <button
                            key={trig.id}
                            disabled={wfStatus === "running"}
                            onClick={() => { setWfTrigger(trig.id); handleResetWorkflow(); }}
                            className={`p-3.5 rounded-xl border text-left transition-all flex items-center space-x-2.5 cursor-pointer disabled:opacity-50 ${
                              isSelected
                                ? "border-blue-600 bg-blue-50/40 dark:bg-blue-950/20 ring-1 ring-blue-500/25"
                                : "border-slate-200 dark:border-zinc-800 hover:border-slate-300 dark:hover:border-zinc-700 bg-slate-50/50 dark:bg-zinc-900/30"
                            }`}
                          >
                            <div className={`p-1.5 rounded-lg border bg-white dark:bg-zinc-950 ${trig.color} shrink-0`}>
                              <Icon className="h-4.5 w-4.5" />
                            </div>
                            <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200 leading-tight">
                              {trig.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Action stages map selectors */}
                  <div className="space-y-2.5">
                    <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">2. Chain Downstream AI/API Actions</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {availableActions.map((act) => {
                        const Icon = act.icon;
                        const isSelected = wfActions.includes(act.id);
                        return (
                          <button
                            key={act.id}
                            disabled={wfStatus === "running"}
                            onClick={() => { toggleWfAction(act.id); handleResetWorkflow(); }}
                            className={`p-3.5 rounded-xl border text-left transition-all flex items-center space-x-3 cursor-pointer disabled:opacity-50 ${
                              isSelected
                                ? "border-blue-600 bg-blue-50/40 dark:bg-blue-950/20 ring-1 ring-blue-500/25"
                                : "border-slate-200 dark:border-zinc-800 hover:border-slate-300 dark:hover:border-zinc-700 bg-slate-50/50 dark:bg-zinc-900/30"
                            }`}
                          >
                            <div className={`p-1.5 rounded-lg bg-white dark:bg-zinc-950 border shrink-0 ${isSelected ? "text-blue-600 border-blue-500/30" : "text-slate-400 border-slate-200 dark:border-zinc-800"}`}>
                              <Icon className="h-4.5 w-4.5" />
                            </div>
                            <div>
                              <p className="text-[10px] font-bold text-slate-800 dark:text-slate-200 leading-tight">{act.label}</p>
                              <p className="text-[8px] text-slate-400 dark:text-slate-500 font-bold mt-0.5 uppercase tracking-wide">{act.desc}</p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center space-x-2 text-[10px] text-slate-500">
                      <Settings className="h-4 w-4 animate-spin text-blue-500" />
                      <span>Configure your flow nodes above then click execute</span>
                    </div>

                    <div className="flex space-x-2">
                      <button
                        onClick={handleResetWorkflow}
                        disabled={wfStatus === "running" || wfStatus === "idle"}
                        className="p-3 rounded-xl border border-slate-200 dark:border-zinc-800 hover:bg-slate-50 dark:hover:bg-zinc-800 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer disabled:opacity-50"
                        title="Reset Workflow"
                      >
                        <RotateCcw className="h-4 w-4" />
                      </button>
                      <button
                        onClick={handleRunWorkflow}
                        disabled={wfStatus === "running"}
                        className="group flex items-center space-x-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 text-xs font-bold shadow-md transition-colors cursor-pointer disabled:opacity-50"
                      >
                        <Play className="h-4 w-4 fill-current" />
                        <span>Execute Staged Workflow</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Side: Visual Canvas flow animation & Logs */}
                <div className="lg:col-span-5 space-y-6">
                  {/* Canvas block showing active node progress */}
                  <div className="rounded-3xl bg-slate-900 border border-zinc-800 p-6 shadow-xl text-white relative overflow-hidden flex flex-col justify-between h-[250px]">
                    <h4 className="text-[10px] font-bold tracking-widest font-mono text-zinc-400 uppercase">Interactive Connection Canvas</h4>
                    
                    {/* Visual Canvas Node Flow graph */}
                    <div className="my-auto flex items-center justify-between relative px-2">
                      {/* Connection running timeline progress background wire */}
                      <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-[2px] bg-zinc-800" />
                      
                      {wfStatus === "running" && (
                        <motion.div
                          className="absolute h-1.5 w-1.5 bg-cyan-400 rounded-full blur-[1px] shadow-lg shadow-cyan-400"
                          animate={{ 
                            left: ["10%", "90%"],
                          }}
                          transition={{ 
                            duration: 2.2, 
                            repeat: Infinity, 
                            ease: "linear"
                          }}
                        />
                      )}

                      {/* Node Trigger */}
                      <div className={`relative h-11 w-11 rounded-xl flex items-center justify-center border-2 bg-slate-950 z-10 transition-all ${
                        currentNodeIndex === 0 
                          ? "border-amber-400 shadow-lg shadow-amber-400/20 scale-110" 
                          : "border-zinc-700"
                      }`}>
                        <Database className="h-5.5 w-5.5 text-amber-500" />
                        <span className="absolute -bottom-5 text-[8px] font-bold font-mono tracking-wider uppercase text-zinc-500 text-center w-max">Trigger</span>
                      </div>

                      {/* Connection arrows mapped */}
                      {wfActions.map((actId, idx) => {
                        const isCurrent = currentNodeIndex === idx + 1;
                        let iconNode = "🤖";
                        if (actId === "hubspot") iconNode = "🗄️";
                        if (actId === "slack") iconNode = "💬";
                        if (actId === "gmail") iconNode = "📧";

                        return (
                          <div
                            key={actId}
                            className={`relative h-11 w-11 rounded-xl flex items-center justify-center border-2 bg-slate-950 z-10 transition-all ${
                              isCurrent
                                ? "border-blue-500 shadow-lg shadow-blue-500/30 scale-110"
                                : "border-zinc-700"
                            }`}
                          >
                            <span className="text-sm">{iconNode}</span>
                            <span className="absolute -bottom-5 text-[8px] font-bold font-mono tracking-wider uppercase text-zinc-500 text-center w-max">Stage {idx + 1}</span>
                          </div>
                        );
                      })}

                      {/* Node Endpoint */}
                      <div className={`relative h-11 w-11 rounded-xl flex items-center justify-center border-2 bg-slate-950 z-10 transition-all ${
                        currentNodeIndex === wfActions.length + 1
                          ? "border-emerald-500 shadow-lg shadow-emerald-500/20 scale-110"
                          : "border-zinc-700"
                      }`}>
                        <CheckCircle2 className={`h-5.5 w-5.5 ${currentNodeIndex === wfActions.length + 1 ? "text-emerald-400" : "text-zinc-600"}`} />
                        <span className="absolute -bottom-5 text-[8px] font-bold font-mono tracking-wider uppercase text-zinc-500 text-center w-max">Success</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 text-[9px] text-zinc-500 font-semibold font-mono">
                      <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping shrink-0" />
                      <span>Pipeline execution visualizer loaded</span>
                    </div>
                  </div>

                  {/* Terminal Console Logs */}
                  <div className="rounded-3xl bg-zinc-950 border border-zinc-800 p-5 shadow-xl h-[280px] flex flex-col justify-between text-zinc-300">
                    <div className="flex items-center space-x-2 pb-2.5 border-b border-zinc-800">
                      <Terminal className="h-4 w-4 text-cyan-400 animate-pulse" />
                      <span className="text-[10px] font-bold tracking-widest font-mono text-zinc-100 uppercase">Execution Console Logs</span>
                    </div>

                    <div className="flex-1 overflow-y-auto space-y-1.5 pt-4 text-[9px] font-mono leading-relaxed max-h-[180px] text-zinc-400 select-text">
                      {wfLogs.length === 0 ? (
                        <div className="text-zinc-600 italic">Awaiting pipeline execution in connection queue... Click 'Execute Staged Workflow'.</div>
                      ) : (
                        wfLogs.map((log, idx) => {
                          const isSuccess = log.includes("SUCCESS") || log.includes("safely");
                          const isTrigger = log.includes("TRIGGERED");
                          return (
                            <div key={idx} className={isSuccess ? "text-emerald-400 font-bold" : isTrigger ? "text-amber-400 font-bold" : ""}>
                              {log}
                            </div>
                          );
                        })
                      )}
                    </div>

                    <div className="text-[8px] text-zinc-600 font-bold uppercase tracking-wider text-right pt-2 border-t border-zinc-900">
                      Yaw.ai Sandbox Connection Layer v1.02
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}

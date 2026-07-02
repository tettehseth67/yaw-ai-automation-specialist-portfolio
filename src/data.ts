/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, CaseStudy, FAQItem, Testimonial, Technology, ProcessStep } from "./types";

export const SERVICES: Service[] = [
  {
    id: "ai-workflow-automation",
    title: "AI Workflow Automation",
    iconName: "Cpu",
    shortDesc: "Streamline multi-app workflows by connecting tools with intelligent logic.",
    fullDesc: "Eliminate repetitive copy-pasting and manual data transfers across your organization. We connect your entire software ecosystem—including Slack, Gmail, Notion, Salesforce, Google Workspace, and proprietary tools—using automation platforms like Make.com and Zapier. By layering advanced LLM capabilities directly into the workflow, the system can make cognitive decisions, categorize incoming information, draft structured responses, and route data securely without human intervention.",
    benefits: [
      "Save up to 15 hours per employee every single week.",
      "100% data entry accuracy, eliminating costly human transcription errors.",
      "24/7 background operation—workflows run instantly while your team sleeps."
    ],
    technologies: ["Make.com", "Zapier", "OpenAI GPT-4o", "Anthropic Claude", "Python", "Webhooks"],
    roi: "90% reduction in workflow processing time"
  },
  {
    id: "ai-agents-chatbots",
    title: "AI Agents & Chatbots",
    iconName: "Bot",
    shortDesc: "Deploy custom autonomous agents trained on your proprietary business knowledge.",
    fullDesc: "Take customer engagement and operational efficiency to the next level. We build custom-trained, context-aware AI agents that understand your specific business logic, brand guidelines, and product documentation. These agents do not just chat; they retrieve information from complex databases, answer multi-step questions, qualify leads based on custom criteria, draft sales pitches, and assist internal team members in locating critical file resources.",
    benefits: [
      "Immediate, zero-latency access to complex corporate knowledge bases.",
      "Engage customers in natural, human-like conversations across web and mobile.",
      "Intelligent categorization and automated hand-off of high-complexity inquiries."
    ],
    technologies: ["Gemini 2.5 Pro", "LangChain", "Vector Databases (Pinecone, Qdrant)", "Flowise", "LlamaIndex"],
    roi: "80% operational cost savings on administrative triage"
  },
  {
    id: "crm-automation",
    title: "CRM Automation",
    iconName: "Database",
    shortDesc: "Keep your sales pipeline updated automatically with AI contact enriching & tracking.",
    fullDesc: "Ensure your sales CRM remains pristine, accurate, and completely updated without lifting a finger. Our automations listen for incoming lead triggers, crawl public web profiles to enrich leads with fresh data, score leads based on custom criteria, create structured pipelines, log email communication automatically, and draft bespoke follow-up emails in your representatives' draft folders.",
    benefits: [
      "Complete elimination of manual data entry for sales and customer relations reps.",
      "Instantly enriched lead profiles containing social links, company size, and tech stack.",
      "Automated prompt outreach triggered immediately on target customer actions."
    ],
    technologies: ["HubSpot API", "Salesforce", "Pipedrive", "Apollo.io", "Make.com"],
    roi: "35% increase in sales representative productivity"
  },
  {
    id: "lead-generation-systems",
    title: "Lead Generation Systems",
    iconName: "Target",
    shortDesc: "Automate outbound prospecting, contact enrichment, and personalized cold campaigns.",
    fullDesc: "Build an unstoppable pipeline of highly qualified B2B prospects. We engineer autonomous outbound systems that continuously search for your ideal customer profiles, validate email addresses to protect domain sender reputation, enrich leads with highly specific personal hooks (such as recent company funding news, open jobs, or social media activity), and automatically orchestrate multi-channel outreach campaigns.",
    benefits: [
      "A steady, predictable stream of qualified inbound meeting bookings.",
      "Custom hyper-personalized outbound copy that beats standard templates by 4x.",
      "Fully autonomous domain monitoring and sender-reputation safeguarding."
    ],
    technologies: ["Clay", "Smartlead.ai", "Instantly.io", "LinkedIn Sales Navigator", "Gemini API"],
    roi: "4.2x increase in outbound email response rates"
  },
  {
    id: "customer-support-automation",
    title: "Customer Support Automation",
    iconName: "MessageSquareHeart",
    shortDesc: "First-line customer support with human-like AI agents resolving tickets instantly.",
    fullDesc: "Deploy a highly trained, tireless 24/7 customer support specialist. We build Tier-1 support integrations that connect to your ticketing software, ingest incoming support tickets, search internal wikis or order APIs, draft detailed resolutions, and securely perform tasks like checking shipping tracking numbers or processing basic modifications.",
    benefits: [
      "Instant response times for customers, dramatically improving satisfaction.",
      "Resolves 70%+ of simple, repetitive tickets automatically without human agent touch.",
      "Smooth, high-context escalations to human support for complex cases."
    ],
    technologies: ["Zendesk API", "Intercom", "Shopify API", "Voiceflow", "Pinecone Vector DB"],
    roi: "74% reduction in average support ticket resolution time"
  },
  {
    id: "business-process-optimization",
    title: "Business Process Optimization",
    iconName: "TrendingUp",
    shortDesc: "End-to-end audit of manual friction points followed by complete AI-backed re-engineering.",
    fullDesc: "Accelerate your operational throughput. We conduct a forensic audit of your current processes to uncover hidden friction points, manual redundancies, and information silos. We then deliver a complete optimization blueprint and implement streamlined cloud automations to maximize efficiency and minimize operational waste.",
    benefits: [
      "Deep visibility into organizational inefficiencies with visual workflow maps.",
      "Eliminate expensive bottlenecks and optimize employee utilization.",
      "Future-proof infrastructure that scales seamlessly as your business grows."
    ],
    technologies: ["Miro Workflow Analysis", "Python", "AWS Lambda / Cloud Run", "Google Document AI"],
    roi: "Average of $45,000 in annualized administrative savings"
  },
  {
    id: "custom-integrations",
    title: "Custom Integrations",
    iconName: "Link",
    shortDesc: "Custom API development and bridges connecting legacy systems to modern AI models.",
    fullDesc: "When off-the-shelf integration builders fail, we construct robust custom software bridges. We develop and deploy custom Node.js/Python serverless scripts and middleware to establish flawless data exchanges between your legacy ERPs, databases, and modern cloud-based AI tools, ensuring total compliance and enterprise-grade security.",
    benefits: [
      "Unify heavily fragmented databases into a single, cohesive source of truth.",
      "Leverage legacy systems without paying for high-cost, risky platform overhauls.",
      "Highly secure, enterprise-ready infrastructure built with end-to-end encryption."
    ],
    technologies: ["Node.js / Express", "Fastify", "Docker", "Google Cloud Run", "PostgreSQL", "REST & GraphQL"],
    roi: "Elimination of double-licensing fees and manual sync errors"
  },
  {
    id: "ai-consulting",
    title: "AI Consulting",
    iconName: "Lightbulb",
    shortDesc: "Strategic roadmap planning, AI readiness audits, and custom workshops for leadership.",
    fullDesc: "Demystify the rapidly changing AI landscape and deploy a highly structured execution blueprint. We analyze your company's operational hierarchy, run hands-on technical feasibility studies, identify high-impact automation quick-wins, evaluate tool costs, and draft secure guidelines to ensure total data compliance.",
    benefits: [
      "Save hundreds of hours and thousands in licensing fees by avoiding incorrect tooling.",
      "Establish safe, secure, and compliant protocols for enterprise AI usage.",
      "Empower and upskill your teams with interactive prompt engineering workshops."
    ],
    technologies: ["AI Feasibility Analysis", "ROI Calculation Frameworks", "Prompt Engineering Workshops"],
    roi: "Actionable strategic implementation roadmap showing a projected 5x ROI"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "aura-vibe-ecommerce",
    title: "Automating 92% of Customer Support Queries for a Leading E-commerce Brand",
    client: "AuraVibe Essentials",
    category: "E-Commerce & Support",
    challenge: "AuraVibe faced massive surges in 'Where is my order?' (WISMO) and refund tickets during peak holiday sales, overloading their small support team and resulting in high resolution delays and customer complaints.",
    solution: "Designed and deployed a highly integrated support workflow. Incoming tickets are analyzed for sentiment and intent using AI. A custom integration queries the Shopify API and DHL API to retrieve live tracking, builds a personalized update, drafts a polished response in Intercom, and sends it automatically. Returns are processed through automatic return label generation based on policy checks.",
    results: [
      "92% of repetitive shipping and order queries resolved automatically within 60 seconds.",
      "Average ticket resolution time slashed from 14 hours to 45 seconds.",
      "Customer satisfaction (CSAT) score boosted by 28% in the first 30 days."
    ],
    roi: "Saved $11,200/month in outsourcing support costs and eliminated the need to hire two extra representatives.",
    tools: ["Shopify API", "Make.com", "OpenAI GPT-4o", "Intercom", "DHL API"],
    metricLabel: "Queries Automated",
    metricValue: "92%",
    beforeAfter: {
      before: "14-Hour Support Delays",
      after: "45-Second Auto-Resolution"
    }
  },
  {
    id: "scalepath-media-agency",
    title: "Autonomous Lead Generation Engine Multiplying Agency Meeting Bookings by 4x",
    client: "ScalePath Media",
    category: "Sales & Outbound Prospecting",
    challenge: "Sales Development Representatives (SDRs) spent 3+ hours per day manually crawling LinkedIn, copy-pasting lead details, researching company updates, and drafting individualized pitches, severely limiting their total cold outreach volume.",
    solution: "Built an end-to-end outbound automation pipeline using Clay. It pulls target accounts from directory databases, enriches contacts with detailed social profiles, checks open job positions, crawls company blogs for recent announcements, and feeds this contextual data into Gemini API. The AI writes an ultra-personalized, authentic icebreaker sentence, maps it into Instantly, and launches highly optimized email sequences.",
    results: [
      "Outreach volume scaled by 350% without adding overhead or hiring extra SDRs.",
      "Cold outbound email meeting booking rates rocketed from 1.2% up to 4.8%.",
      "Lead data accuracy increased to 99%, ensuring near-zero email bounce rates."
    ],
    roi: "Generated $140,000 in closed-won pipeline value in the first 45 days of implementation.",
    tools: ["Clay", "Instantly.io", "Gemini API", "LinkedIn Sales Navigator", "HubSpot CRM"],
    metricLabel: "Meeting Booking Rate",
    metricValue: "4.8%",
    beforeAfter: {
      before: "1.2% Response Rates",
      after: "4.8% Booking Rates"
    }
  },
  {
    id: "vanguard-property-group",
    title: "AI-Powered Financial Ingestion Slashing Real Estate Underwriting from Days to Minutes",
    client: "Vanguard Property Group",
    category: "Operations & Documents",
    challenge: "Underwriting analysts spent several days meticulously reading 100+ page commercial property prospectuses, tax histories, lease sheets, and bank statements to manually input variables into high-risk investment models.",
    solution: "Constructed an automated file extraction engine using Google Cloud Document AI and LangChain. When a new property folder is uploaded to Google Drive, the documents are structured, OCR-processed, and analyzed. AI models extract core rental details, lease end dates, tax valuations, and tenant liabilities, outputting structured JSON data that automatically populates the company's valuation spreadsheet and updates Pipedrive CRM.",
    results: [
      "Property analysis and underwriting time dropped from 6 business days down to 12 minutes.",
      "100% data extraction accuracy achieved across critical rent roll parameters.",
      "Processed over 180 commercial properties in the first month of activation."
    ],
    roi: "Allowed the firm to evaluate 15x more deals, resulting in 3 new commercial acquisitions worth $8.2M.",
    tools: ["Google Cloud Document AI", "LangChain", "Python", "Pipedrive CRM", "Google Drive API"],
    metricLabel: "Underwriting Duration",
    metricValue: "-98%",
    beforeAfter: {
      before: "6 Days Per Property",
      after: "12 Minutes Per Property"
    }
  }
];

export const TRUST_BADGES = [
  { name: "Certified Make Partner", image: "https://picsum.photos/seed/badge1/120/40" },
  { name: "Zapier Certified Expert", image: "https://picsum.photos/seed/badge2/120/40" },
  { name: "Google Developer Group AI Lead", image: "https://picsum.photos/seed/badge3/120/40" },
  { name: "HubSpot Solutions Partner", image: "https://picsum.photos/seed/badge4/120/40" }
];

export const CLIENT_LOGOS = [
  { name: "AuraVibe", logo: "AuraVibe" },
  { name: "ScalePath Media", logo: "ScalePath" },
  { name: "Vanguard Properties", logo: "Vanguard" },
  { name: "Vertex Logistics", logo: "Vertex" },
  { name: "Apex Agency", logo: "Apex" },
  { name: "Novasphere", logo: "Novasphere" }
];

export const STATS = [
  { value: "450k+", label: "Hours of Manual Work Saved" },
  { value: "95%", label: "Average Workflow Acceleration" },
  { value: "82%", label: "First-Line Support Automation" },
  { value: "$2.4M+", label: "Client Operational Savings" }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Audit & Opportunity Mapping",
    description: "We deep dive into your current manual routines, shadow employees, and examine your current software setup. We identify the top 3 processes costing you the most hours and draft an AI-feasibility matrix to highlight maximum ROI items.",
    duration: "Week 1",
    deliverables: ["Process Friction Audit Report", "Opportunity Matrix", "Proposed Architecture"]
  },
  {
    step: 2,
    title: "System Architecture Design",
    description: "We map out the exact data schemas, API connections, fallback mechanisms, and prompt structures. We design the flow logic to guarantee complete security, data compliance, and 100% operational reliability.",
    duration: "Week 2",
    deliverables: ["Technical Flowcharts", "Prompt Templates", "API Mapping & Security Plan"]
  },
  {
    step: 3,
    title: "Build & Integration",
    description: "We write the custom scripts, build Make/Zapier blueprints, connect database vectors, and train the AI models. We construct the automated bridges inside private sandbox staging environments.",
    duration: "Weeks 3-4",
    deliverables: ["Functional Sandbox System", "Custom API Integrations", "Trained AI Model Outputs"]
  },
  {
    step: 4,
    title: "Testing & Safeguard Tuning",
    description: "We subject the system to severe edge-case stress tests. We tune AI guardrails, verify formatting outputs, and build automatic error notifications (e.g., Slack/email alerts) so you never encounter silent automation failures.",
    duration: "Week 5",
    deliverables: ["Comprehensive Edge-case Log", "Guardrail Optimization Report", "System Hand-off Docs"]
  },
  {
    step: 5,
    title: "Launch & Operational Support",
    description: "We transition the systems into production, train your team, and provide immediate post-launch support. We also check performance logs weekly to ensure standard operation and keep models updated.",
    duration: "Continuous",
    deliverables: ["Production Deployment", "Team SOP Guide & Recording", "Monthly Maintenance Report"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Marcus Sterling",
    role: "CEO & Co-Founder",
    company: "AuraVibe Essentials",
    text: "Yaw is a visionary. He restructured our entire support architecture in under 3 weeks. Wisconsin holiday rushes used to be our biggest nightmare; this year, we slept soundly while the AI handled 92% of shipping and return disputes flawlessly.",
    metrics: "Saved $11.2k/month & raised CSAT by 28%",
    rating: 5
  },
  {
    id: "t2",
    name: "Sarah Jenkins",
    role: "VP of Operations",
    company: "ScalePath Media",
    text: "Our SDR team was bogged down in research. Yaw built an outbound machine that finds the lead, enriches it, references historical data, drafts a personalized intro, and queues it. Our meeting rates have literally quadrupled.",
    metrics: "4.8% meeting rate & $140k added in 45 days",
    rating: 5
  },
  {
    id: "t3",
    name: "Julian Vance",
    role: "Managing Partner",
    company: "Vanguard Property Group",
    text: "We were skeptical about AI parsing complex commercial lease documents, but Yaw's custom extraction pipeline exceeded our highest expectations. What used to take days of tedious manual entry now takes minutes, with flawless accuracy.",
    metrics: "Underwriting time cut by 98% with 100% accuracy",
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "q1",
    question: "What exactly is AI Workflow Automation, and how can it benefit my company?",
    answer: "AI Workflow Automation connects your digital tools (like your CRM, email, sheets, Slack, and cloud storage) to exchange data, but layers artificial intelligence on top. Unlike basic integrations, AI automations can read files, write contextual responses, make decisions based on rules, summarize documents, and extract key metrics automatically—saving your employees hours of mind-numbing manual administrative tasks.",
    category: "Automation"
  },
  {
    id: "q2",
    question: "Do I have to change my current software or CRM to work with you?",
    answer: "Not at all. We specialize in building custom bridges and using APIs to automate your *existing* tech stack (HubSpot, Salesforce, Pipedrive, Shopify, Slack, Notion, etc.). We don't force you into a new platform; we simply make your current tools talk to each other and operate at maximum efficiency.",
    category: "Process"
  },
  {
    id: "q3",
    question: "How do you ensure our sensitive customer and business data is secure?",
    answer: "Security is our highest priority. All API connections are secured using enterprise-grade authentication protocol (OAuth 2.0 / API Keys stored safely). We design data-minimization workflows so the AI only receives the exact data fields required to complete the task, and we strictly build with AI providers (like Google Cloud and OpenAI Enterprise) that guarantee your data is *never* used to train public models.",
    category: "Security"
  },
  {
    id: "q4",
    question: "What happens if an API changes or an automation encounters an error?",
    answer: "Every workflow we build includes robust, multi-stage error catching. If an external service goes down or a file formatting issue occurs, our systems are built with fail-safes. They automatically flag the exception and send a structured alert to a dedicated Slack channel or email, detailing exactly what went wrong and storing the data safely so nothing is lost. We also offer monthly support packages to monitor and maintain system health.",
    category: "Support"
  },
  {
    id: "q5",
    question: "How long does a typical automation project take to implement?",
    answer: "A standard custom automation or AI agent project takes between 3 to 6 weeks from initial diagnostic audit to live production. We build in modular stages, meaning simple quick-wins can often be deployed and deliver ROI in as little as 10 days, while complex custom integrations run closer to the 5-6 week mark.",
    category: "Process"
  },
  {
    id: "q6",
    question: "What is the expected ROI, and how do we measure the success of the systems?",
    answer: "ROI is measured in two ways: hard time savings and revenue expansion. We map exactly how many hours your staff saves weekly, which easily translates to thousands of dollars in monthly overhead saved. Secondly, systems like outbound lead generation or instant support response times directly improve conversion and client retention, creating immediate top-line growth.",
    category: "ROI"
  }
];

export const TECHNOLOGIES: Technology[] = [
  { name: "Make.com", category: "automation", iconName: "Workflow", description: "Visual automation platform to orchestrate multi-app workflows and complex logical structures." },
  { name: "Zapier", category: "automation", iconName: "Zap", description: "Direct connector to build quick, event-driven integrations for over 6,000+ public applications." },
  { name: "Clay.com", category: "integration", iconName: "Search", description: "Data enrichment platform to aggregate multiple search databases and generate tailored lead logs." },
  { name: "Gemini API", category: "ai", iconName: "Sparkles", description: "Advanced multimodal AI for lightning-fast structured data extraction and logical reasoning." },
  { name: "OpenAI API", category: "ai", iconName: "Brain", description: "High-performance LLM engines used for intent classification, agent planning, and drafting copy." },
  { name: "Pinecone / Qdrant", category: "database", iconName: "Layers", description: "Vector databases to index company knowledge sheets and support fast semantic searches." },
  { name: "LangChain", category: "ai", iconName: "GitMerge", description: "Orchestration framework to chain prompts, maintain conversations, and manage autonomous agents." },
  { name: "Python / Node.js", category: "integration", iconName: "Terminal", description: "Custom backend scripts to write custom API middleware and deploy secure serverless integrations." }
];

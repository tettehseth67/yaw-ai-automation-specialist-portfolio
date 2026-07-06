# Yaw — AI Automation Specialist Portfolio

Welcome to the professional portfolio of **Yaw**, an AI Automation Specialist with over 2 years of experience helping businesses streamline operations, automate repetitive tasks, and unlock new levels of productivity.

This application is a highly responsive, high-performance, single-page application (SPA) built using **React 18+**, **TypeScript**, **Vite**, and **Tailwind CSS**. It is fully designed to showcase Yaw's expertise in Make, Zapier, Python, OpenAI, LangChain, and other modern automation ecosystems.

---

## 🎨 Website Design & Visual Identity

The website is crafted around **architectural clarity, professional typography, and user-centric flows**. It avoids gratuitous noise and prioritizes content density, elegant spacing, and smooth interactive details.

### 1. Typography Selection
- **Primary Headers**: Styled with extra-bold modern tracking-tight headings (`font-sans tracking-tight`) that communicate confidence and high-tech elegance.
- **Accents & Subtitles**: Utilizes high-contrast colored gradients to draw attention to critical keyterms (such as "Complex AI", "Operational Waste", or "Intelligent Systems").
- **Body Text**: Uses a clean, legible, high-contrast dark charcoal text on light backgrounds (and warm white on dark backgrounds) with ample line-height (`leading-relaxed`) to prevent reader fatigue.

### 2. Double-Theme Space (Light & Dark)
The website comes with a highly polished dual-theme mechanism:
- **Light Theme (Default)**: A clean, inviting, high-contrast light layout designed for maximum professional readability during daytime environments.
- **Dark Theme (Dark Mode)**: A sleek, low-light workspace theme featuring deep slate backgrounds, custom deep grays, and glowing borders.
- **Micro-interactions**: The theme toggler triggers a beautiful rotating transition for the Sun/Moon icons powered by `motion` and prompts a clean custom toast notification displaying the applied theme detail.
- **Persistence & Syncing**: State is persistent across reloads using browser `localStorage` and automatically syncs with system/OS-level preference queries (`prefers-color-scheme`) on initial load.

### 3. Modular Screen Layout
The application utilizes a single-screen layout with an dynamic tab-routing architecture to allow instant, zero-latency transitions.
- **Navbar**: High-fidelity header component with logo animations, active tab highlighting, custom CTA consultation triggers, and the theme toggle control.
- **Home View**: Interactive main hero section complete with dynamic metrics, specialized service cards, and an on-screen interactive consultation prompt.
- **About View**: Shows Yaw's brand-new professional bio detailing his specialized background, mission statement, and key operational methodologies.
- **Services View**: A clear breakdown of core offerings (e.g., Workflow Automation, AI Agents, CRM Optimization, Lead Generation Systems).
- **Case Studies View**: Interactive, visual cards displaying quantitative outcomes and metrics from past successful enterprise automation workflows.
- **Contact View**: A clean, streamlined communication terminal incorporating interactive inputs and feedback indicators.
- **Footer**: Unified navigation links and social connection hubs.

---

## 💻 Tech Stack & Architecture

- **Frontend Library**: React 18
- **Language**: TypeScript (fully typed interfaces, type-safe enum variables, and strict properties)
- **Bundler**: Vite (supercharged, fast building, and zero-HMR flicker configuration)
- **Styling**: Tailwind CSS (fully customized classes, utility variables, and standard utility styling)
- **Animations**: `motion` (used for spring-based component transitions, fading modals, sliding menus, and staggered load-ins)
- **Iconography**: `lucide-react` (comprehensive vector icon set)

---

## 🗄️ Database Design (Conceptual & Future-Proof)

Currently, the application is structured as a **static, offline-first client-side application** to optimize load times, security, and portability. However, the system is designed to seamlessly scale into a full-stack architecture.

Below are the complete schema proposals for both **Relational SQL (Drizzle ORM / PostgreSQL)** and **NoSQL (Cloud Firestore)** to support future database deployments.

### 1. Relational SQL Schema Proposal (PostgreSQL)
For enterprise scalability, structured relational schemas are excellent for tracking bookings, inquiries, and client relationships.

```typescript
// Proposed PostgreSQL Database Schema via Drizzle ORM
import { pgTable, uuid, text, timestamp, varchar, integer } from 'drizzle-orm/pg-core';

// Users / Clients Table
export const clients = pgTable('clients', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).unique().notNull(),
  company: varchar('company', { length: 255 }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Consultation Bookings Table
export const bookings = pgTable('bookings', {
  id: uuid('id').defaultRandom().primaryKey(),
  clientId: uuid('client_id').references(() => clients.id, { onDelete: 'cascade' }),
  serviceType: varchar('service_type', { length: 100 }).notNull(),
  details: text('details').notNull(),
  status: varchar('status', { length: 50 }).default('pending').notNull(), // pending, confirmed, completed, cancelled
  scheduledAt: timestamp('scheduled_at'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Contact Inquiries Table
export const inquiries = pgTable('inquiries', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  subject: varchar('subject', { length: 255 }).notNull(),
  message: text('message').notNull(),
  isResolved: integer('is_resolved').default(0).notNull(), // 0 for false, 1 for true
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
```

### 2. NoSQL Document Database Proposal (Firebase Firestore)
Firestore is an excellent option for real-time applications and rapid deployment.

```
/collections
  /clients
    {clientId} (Document)
      ├── name: "Jane Doe"
      ├── email: "jane@company.com"
      ├── company: "Acme Corp"
      └── createdAt: timestamp

  /bookings
    {bookingId} (Document)
      ├── clientId: "client_uuid_reference"
      ├── serviceType: "AI Agent Development"
      ├── details: "Automate customer support with a custom LLM agent integrated with Make."
      ├── status: "pending"
      ├── scheduledAt: timestamp
      └── createdAt: timestamp

  /inquiries
    {inquiryId} (Document)
      ├── name: "John Smith"
      ├── email: "john@tech.io"
      ├── subject: "Make custom integration request"
      ├── message: "Looking to connect our custom internal Python CRM tool with Slack."
      ├── isResolved: false
      └── createdAt: timestamp
```

---

## 🚀 Getting Started

To run this application locally, ensure you have **Node.js** (v18 or higher) installed.

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
The dev server will boot instantly, and you can access the interactive preview on [http://localhost:3000](http://localhost:3000).

### 3. Build for Production
```bash
npm run build
```
The production bundle will be fully optimized, minified, and outputted into the `/dist` folder.

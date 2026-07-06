/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  iconName: string; // Used to dynamically map Lucide icons
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  technologies: string[];
  roi: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  challenge: string;
  solution: string;
  results: string[];
  roi: string;
  tools: string[];
  metricLabel: string;
  metricValue: string;
  beforeAfter: {
    before: string;
    after: string;
  };
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  metrics: string;
  rating: number;
}

export interface Technology {
  name: string;
  category: "ai" | "automation" | "integration" | "database";
  iconName: string;
  description: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  duration: string;
  deliverables: string[];
}

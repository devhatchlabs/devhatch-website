import {
  Bot,
  Phone,
  MessageCircle,
  Workflow,
  Target,
  GitBranch,
  Headphones,
  Lightbulb,
  Code2,
  Layers,
  Settings2,
  FileSearch,
  Megaphone,
  Building2,
  Stethoscope,
  Scale,
  Users,
  Rocket,
  ShoppingCart,
  Briefcase,
  Calculator,
  HeartPulse,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

// Full list of 12 services
export const allServices: Service[] = [
  {
    icon: Bot,
    title: "AI Chatbots",
    description:
      "Custom AI chatbots that handle customer queries, qualify leads, answer FAQs, and provide support around the clock.",
  },
  {
    icon: Phone,
    title: "AI Calling Agents",
    description:
      "Automated voice agents that call leads, qualify prospects, and book appointments directly onto your calendar.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Automation",
    description:
      "Automated WhatsApp messaging for lead follow-up, customer support, reminders, and re-engagement at scale.",
  },
  {
    icon: GitBranch,
    title: "CRM Automation",
    description:
      "Automate lead capture, pipeline updates, follow-up sequences, and reporting inside the CRM you already use.",
  },
  {
    icon: Target,
    title: "Lead Generation Systems",
    description:
      "AI-powered systems that identify, enrich, and qualify targeted prospect lists for predictable pipeline growth.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "End-to-end automation of repetitive business processes, connecting your tools into one seamless system.",
  },
  {
    icon: Headphones,
    title: "AI-Powered Customer Support",
    description:
      "Intelligent support systems that triage inquiries, route tickets, and resolve common issues instantly.",
  },
  {
    icon: Lightbulb,
    title: "AI Consulting",
    description:
      "Strategic consulting to identify high-impact AI opportunities and build a practical adoption roadmap.",
  },
  {
    icon: Code2,
    title: "Custom Web Development",
    description:
      "Full-stack web applications, dashboards, and client portals built on a modern MERN stack foundation.",
  },
  {
    icon: Layers,
    title: "SaaS Development",
    description:
      "End-to-end SaaS builds, from architecture and payment integration to deployment and ongoing support.",
  },
  {
    icon: Settings2,
    title: "Business Process Automation",
    description:
      "We identify inefficient manual processes across your business and automate them for lasting time savings.",
  },
  {
    icon: FileSearch,
    title: "Intelligent Document Processing",
    description:
      "AI-powered extraction of data from PDFs, invoices, and forms, turned into clean, structured records.",
  },
];

// Top 6 shown on homepage
export const featuredServices: Service[] = allServices.slice(0, 6);

export type Industry = {
  icon: LucideIcon;
  name: string;
};

export const industries: Industry[] = [
  { icon: Megaphone, name: "Marketing Agencies" },
  { icon: Building2, name: "Real Estate Agencies" },
  { icon: Stethoscope, name: "Dental Clinics" },
  { icon: Scale, name: "Law Firms" },
  { icon: Users, name: "Coaches & Consultants" },
  { icon: Rocket, name: "SaaS Startups" },
  { icon: ShoppingCart, name: "E-commerce Brands" },
  { icon: Briefcase, name: "Recruitment Agencies" },
  { icon: Calculator, name: "Accounting Firms" },
  { icon: HeartPulse, name: "Healthcare Practices" },
];

export type TeamMember = {
  name: string;
  role: string;
  focus: string;
  initials: string;
};

export const team: TeamMember[] = [
  {
    name: "Saim Iftikhar",
    role: "Founder & CEO",
    focus: "Strategy, client consultations, proposal creation, sales leadership, technical oversight",
    initials: "SI",
  },
  {
    name: "Sara Manzoor",
    role: "Chief Operating Officer",
    focus: "Operations, team coordination, performance monitoring, internal systems",
    initials: "SM",
  },
  {
    name: "Areeba Qandeel",
    role: "Business Development Executive",
    focus: "Lead generation, outreach, CRM management, team guidance",
    initials: "AQ",
  },
  {
    name: "Malik Saad Ahmed",
    role: "AI Engineering Intern",
    focus: "AI development, prompt engineering, automation, technical solutions",
    initials: "MS",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "DevHatch rebuilt our entire lead intake process. What used to take our team three hours a day now runs itself, and our response time dropped from hours to under a minute.",
    name: "Daniel Carter",
    role: "Managing Partner",
    company: "Carter & Wells Law Group",
    rating: 5,
  },
  {
    quote:
      "The AI calling agent books more qualified appointments than two of our SDRs combined. It paid for itself within the first three weeks of going live.",
    name: "Priya Nandakumar",
    role: "Head of Growth",
    company: "Northbeam Realty",
    rating: 5,
  },
  {
    quote:
      "We came to DevHatch for a chatbot and left with a fully automated operation, CRM, WhatsApp follow-ups, and a support system that just works. Genuinely impressive team.",
    name: "Marcus Webb",
    role: "Founder",
    company: "Webb Dental Studio",
    rating: 5,
  },
];

export const process = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "We learn how your business actually runs, where time is lost, and where AI can create the most measurable impact.",
  },
  {
    step: "02",
    title: "Audit & Analysis",
    description:
      "Our team maps your workflows, tools, and data to design a solution architecture built around your real operations.",
  },
  {
    step: "03",
    title: "Solution Delivered",
    description:
      "We build, test, and deploy your system, then hand over a working solution your team can run with from day one.",
  },
];

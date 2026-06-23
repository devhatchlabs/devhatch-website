"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Database,
  Globe,
  Layers,
  MessageSquare,
  Search,
  Smartphone,
  Sparkles,
  Terminal,
  User,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

type MainService = {
  id: string;
  number: string;
  title: string;
  label: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  steps: string[];
  outcomes: string[];
  footer: string;
};

type AdditionalService = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const mainServices: MainService[] = [
  {
    id: "chatbots",
    number: "01",
    title: "AI Chatbots",
    label: "Customer Conversations",
    tagline: "Always available. Always helpful.",
    description:
      "Custom AI chatbots for websites, WhatsApp, and support channels that answer questions, qualify leads, and guide customers forward.",
    icon: MessageSquare,
    steps: ["Customer Query", "AI Assistant", "Helpful Reply"],
    outcomes: [
      "24/7 customer support",
      "Lead capture and qualification",
      "Website and WhatsApp workflows",
    ],
    footer: "Support · Leads · Follow-ups",
  },
  {
    id: "agentic-ai",
    number: "02",
    title: "Agentic AI Systems",
    label: "Autonomous Workflows",
    tagline: "AI that reasons, plans, and takes action.",
    description:
      "Intelligent AI agents that understand goals, use connected tools, make decisions, and complete multi-step business tasks.",
    icon: Cpu,
    steps: ["Business Goal", "AI Agent + Tools", "Task Completed"],
    outcomes: [
      "Multi-step task execution",
      "Tool and API integrations",
      "Smarter operational workflows",
    ],
    footer: "Agents · Tools · Execution",
  },
  {
    id: "rag",
    number: "03",
    title: "RAG Applications",
    label: "Private Knowledge AI",
    tagline: "Your documents, made useful instantly.",
    description:
      "Secure AI systems that retrieve useful information from documents, PDFs, policies, and knowledge bases to give accurate answers.",
    icon: Database,
    steps: ["Your Documents", "Knowledge Search", "Accurate Answer"],
    outcomes: [
      "Document question answering",
      "Private knowledge-base chatbots",
      "LLM and vector database integration",
    ],
    footer: "Documents · Search · Answers",
  },
  {
    id: "automation",
    number: "04",
    title: "AI Automation",
    label: "Workflow Automation",
    tagline: "Turn repetitive work into background work.",
    description:
      "Automate lead handling, CRM updates, reporting, follow-ups, and recurring business operations with practical workflows.",
    icon: Zap,
    steps: ["New Trigger", "Smart Workflow", "Action Completed"],
    outcomes: [
      "CRM and lead automation",
      "Automated follow-ups",
      "Connected business tools",
    ],
    footer: "CRM · Workflows · Integrations",
  },
  {
    id: "software",
    number: "05",
    title: "Custom Software",
    label: "Business Software",
    tagline: "Systems built around your real workflow.",
    description:
      "Custom dashboards, portals, internal tools, and scalable software designed around your team, process, and business goals.",
    icon: Terminal,
    steps: ["Business Need", "Custom Build", "Live System"],
    outcomes: [
      "Internal business systems",
      "Client portals and dashboards",
      "Scalable custom workflows",
    ],
    footer: "Dashboards · Portals · Systems",
  },
];

const additionalServices: AdditionalService[] = [
  {
    title: "Web Applications",
    description:
      "Modern web apps, dashboards, client portals, and internal business platforms.",
    icon: Layers,
  },
  {
    title: "Full-Stack Applications",
    description:
      "Complete frontend, backend, database, authentication, API, and admin dashboard systems.",
    icon: Terminal,
  },
  {
    title: "SaaS Product Development",
    description:
      "Scalable subscription platforms, multi-user SaaS products, customer portals, and digital tools.",
    icon: Cpu,
  },
  {
    title: "Mobile App Development",
    description:
      "Mobile-first applications for Android and iOS with clean user experiences and connected backend systems.",
    icon: Smartphone,
  },
  {
    title: "Business Websites",
    description:
      "Professional websites and landing pages designed to explain your offer and convert visitors.",
    icon: Globe,
  },
  {
    title: "AI Calling Agents",
    description:
      "AI voice workflows for lead qualification, appointment booking, follow-ups, and customer calls.",
    icon: MessageSquare,
  },
  {
    title: "WhatsApp Automation",
    description:
      "Automated WhatsApp replies, support flows, lead capture, reminders, and follow-ups.",
    icon: MessageSquare,
  },
  {
    title: "CRM Automation",
    description:
      "Lead routing, CRM updates, follow-ups, and cleaner sales operations with less manual work.",
    icon: Database,
  },
  {
    title: "Lead Generation Systems",
    description:
      "Systems that capture, qualify, organize, and route leads from websites and campaigns.",
    icon: Users,
  },
  {
    title: "SEO & Search Visibility",
    description:
      "Technical SEO, content structure, and website improvements that help people find you.",
    icon: Search,
  },
  {
    title: "Personal Branding",
    description:
      "Founder positioning, content direction, and a stronger professional online presence.",
    icon: User,
  },
];

export default function ServicesPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) =>
        currentIndex === mainServices.length - 1 ? 0 : currentIndex + 1,
      );
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const activeService = mainServices[activeIndex];
  const ActiveIcon = activeService.icon;

  return (
    <main className="relative min-h-screen overflow-hidden bg-white pb-20 pt-24 sm:pt-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_48%_at_50%_-10%,rgba(23,105,255,0.09),transparent_66%)]" />

      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(23,105,255,0.14)_1px,transparent_1px)] [background-size:22px_22px]" />

      <div className="pointer-events-none absolute -right-28 top-28 h-72 w-72 rounded-full bg-[#14C8E8]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-28 top-[52%] h-72 w-72 rounded-full bg-[#6D4AFF]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-5 flex items-center gap-2 text-xs font-medium text-[#61708A]">
          <Link href="/" className="transition hover:text-[#1769FF]">
            Home
          </Link>
          <span>›</span>
          <span className="text-[#061A45]">Services</span>
        </div>

        <section className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="max-w-[560px]">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#D9E6FA] bg-[#EEF5FF] px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#1769FF]"
            >
              <Sparkles className="h-3.5 w-3.5" />
              What We Build
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-[#061A45] sm:text-5xl lg:text-[56px]"
            >
              <span className="block">AI, software & growth</span>
              <span className="block">systems that move</span>
              <span className="block bg-gradient-to-r from-[#1769FF] via-[#159FE8] to-[#6D4AFF] bg-clip-text text-transparent">
                businesses forward.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="mt-5 max-w-xl text-base leading-relaxed text-[#61708A] sm:text-lg"
            >
              DevHatch Labs builds practical AI systems, custom software,
              automation workflows, digital products, SEO foundations, and
              stronger online authority for growing businesses.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="mt-7 grid grid-cols-2 gap-2 sm:grid-cols-3"
            >
              {mainServices.map((service, index) => {
                const Icon = service.icon;
                const isActive = activeIndex === index;

                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`flex items-center gap-2 rounded-xl border px-3 py-2.5 text-left text-xs font-semibold transition-all ${
                      isActive
                        ? "border-[#1769FF] bg-[#1769FF] text-white shadow-[0_10px_22px_rgba(23,105,255,0.22)]"
                        : "border-[#D9E6FA] bg-white text-[#61708A] hover:border-[#1769FF]/40 hover:bg-[#EEF5FF] hover:text-[#1769FF]"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5 shrink-0" strokeWidth={2} />
                    <span className="truncate">{service.title}</span>
                  </button>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
            >
              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#1769FF] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#0A55D6] hover:shadow-[0_12px_24px_rgba(23,105,255,0.25)]"
              >
                Discuss Your Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="relative w-full max-w-[560px] lg:ml-auto lg:mt-2"
          >
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-[#1769FF]/10 via-[#14C8E8]/10 to-[#6D4AFF]/10 blur-2xl" />

            <div className="overflow-hidden rounded-2xl border border-[#D9E6FA] bg-white shadow-[0_18px_40px_rgba(23,105,255,0.12)]">
              <div className="flex items-center justify-between border-b border-[#D9E6FA] bg-[#F8FBFF] px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

                  <span className="ml-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#8A9AB5]">
                    DevHatch Core
                  </span>
                </div>

                <motion.div
                  animate={{ rotate: [0, 12, -12, 0] }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Sparkles className="h-5 w-5 text-[#1769FF]" />
                </motion.div>
              </div>

              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.26 }}
                  className="p-5 sm:p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="inline-flex rounded-full bg-gradient-to-r from-[#1769FF] to-[#6D4AFF] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
                        {activeService.label}
                      </span>

                      <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#061A45]">
                        {activeService.title}
                      </h2>

                      <p className="mt-1 text-sm font-semibold italic text-[#1769FF]">
                        {activeService.tagline}
                      </p>
                    </div>

                    <motion.div
                      animate={{ scale: [1, 1.08, 1] }}
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#1769FF]/10 text-[#1769FF]"
                    >
                      <ActiveIcon className="h-5 w-5" strokeWidth={2} />
                    </motion.div>
                  </div>

                  <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#61708A]">
                    {activeService.description}
                  </p>

                  <div className="mt-5 overflow-hidden rounded-xl border border-[#D9E6FA] bg-[#F8FBFF]">
                    <div className="grid grid-cols-3 divide-x divide-[#D9E6FA]">
                      {activeService.steps.map((step, index) => (
                        <div
                          key={`${activeService.id}-${step}`}
                          className="px-2 py-4 text-center sm:px-3"
                        >
                          <span className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-white text-[10px] font-bold text-[#1769FF] shadow-sm">
                            0{index + 1}
                          </span>

                          <p className="mt-2 text-[10px] font-bold leading-snug text-[#061A45] sm:text-xs">
                            {step}
                          </p>

                          <motion.span
                            animate={{ opacity: [0.25, 1, 0.25] }}
                            transition={{
                              duration: 1.5,
                              delay: index * 0.22,
                              repeat: Infinity,
                            }}
                            className="mx-auto mt-2 block h-1 w-8 rounded-full bg-[#1769FF]/35"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 flex flex-col gap-3 border-t border-[#D9E6FA] pt-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-2 text-xs text-[#61708A]">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#1769FF]" />
                      <span>{activeService.outcomes[0]}</span>
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#1769FF] transition hover:gap-3"
                    >
                      Discuss this service
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center justify-between border-t border-[#D9E6FA] bg-[#F8FBFF] px-5 py-3">
                <div className="flex items-center gap-1.5">
                  {mainServices.map((service, index) => (
                    <button
                      key={service.id}
                      type="button"
                      aria-label={`Show ${service.title}`}
                      onClick={() => setActiveIndex(index)}
                      className={`h-2 rounded-full transition-all ${
                        activeIndex === index
                          ? "w-6 bg-[#1769FF]"
                          : "w-2 bg-[#D9E6FA] hover:bg-[#159FE8]"
                      }`}
                    />
                  ))}
                </div>

                <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#8A9AB5]">
                  {activeService.number} / {mainServices.length}
                </span>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mt-16 border-t border-[#D9E6FA] pt-10">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#1769FF]">
                Specialized Services
              </p>

              <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#061A45] sm:text-3xl">
                More systems for growth, visibility, and operations.
              </h2>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#1769FF] transition hover:gap-3"
            >
              Ask about a service
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {additionalServices.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group rounded-2xl border border-[#D9E6FA] bg-white p-5 shadow-[0_8px_20px_rgba(23,105,255,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#1769FF]/40 hover:shadow-[0_14px_30px_rgba(23,105,255,0.10)]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF5FF] text-[#1769FF] transition duration-300 group-hover:scale-110 group-hover:bg-[#1769FF] group-hover:text-white">
                    <Icon className="h-4.5 w-4.5" strokeWidth={1.9} />
                  </div>

                  <h3 className="mt-4 text-sm font-bold text-[#061A45]">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-[#61708A]">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-16 rounded-3xl bg-gradient-to-br from-[#061A45] via-[#0A2D70] to-[#1769FF] px-6 py-9 text-center shadow-[0_20px_46px_rgba(23,105,255,0.20)] sm:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#14C8E8]">
            Start with the right system
          </p>

          <h2 className="mx-auto mt-3 max-w-2xl text-2xl font-bold text-white sm:text-3xl">
            Have an idea, workflow, website, or personal brand you want to grow?
          </h2>

          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#1769FF] transition hover:-translate-y-0.5 hover:bg-[#EEF5FF]"
          >
            Start a Conversation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </div>
    </main>
  );
}
"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Database,
  Globe,
  GraduationCap,
  Layers,
  MessageSquare,
  Search,
  Smartphone,
  Sparkles,
  Terminal,
  User,
  Users,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

type CoreService = {
  id: string;
  title: string;
  label: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  steps: string[];
  outcomes: string[];
  footer: string;
};

type Capability = {
  title: string;
  icon: LucideIcon;
};

const coreServices: CoreService[] = [
  {
    id: "chatbots",
    title: "AI Chatbots",
    label: "Customer Conversations",
    tagline: "Always available. Always helpful.",
    description:
      "AI chatbots for websites and support channels that answer questions, qualify leads, and guide customers forward.",
    icon: MessageSquare,
    steps: ["Customer Query", "AI Assistant", "Helpful Reply"],
    outcomes: [
      "24/7 customer support",
      "Lead qualification",
      "Website support flows",
    ],
    footer: "Support · Leads · Follow-ups",
  },
  {
    id: "agentic-ai",
    title: "Agentic AI Systems",
    label: "Autonomous Workflows",
    tagline: "AI that reasons, plans, and takes action.",
    description:
      "AI agents that understand business goals, use connected tools, make decisions, and complete multi-step tasks.",
    icon: Cpu,
    steps: ["Business Goal", "AI Agent + Tools", "Task Completed"],
    outcomes: [
      "Multi-step task execution",
      "Tool and API integrations",
      "Smarter operations",
    ],
    footer: "Agents · Tools · Execution",
  },
  {
    id: "rag",
    title: "RAG Applications",
    label: "Private Knowledge AI",
    tagline: "Your documents, made useful instantly.",
    description:
      "Secure AI systems that retrieve relevant information from documents, PDFs, policies, and knowledge bases.",
    icon: Database,
    steps: ["Your Documents", "Knowledge Search", "Accurate Answer"],
    outcomes: [
      "Document question answering",
      "Private knowledge bases",
      "LLM integration",
    ],
    footer: "Documents · Search · Answers",
  },
  {
    id: "automation",
    title: "AI Automation",
    label: "Workflow Automation",
    tagline: "Turn repetitive work into background work.",
    description:
      "Automated workflows for lead handling, CRM updates, client follow-ups, reporting, and recurring operations.",
    icon: Zap,
    steps: ["New Trigger", "Smart Workflow", "Action Completed"],
    outcomes: [
      "CRM and lead automation",
      "Automated follow-ups",
      "Connected tools",
    ],
    footer: "CRM · Workflows · Integrations",
  },
  {
    id: "software",
    title: "Custom Software",
    label: "Business Software",
    tagline: "Systems built around your real workflow.",
    description:
      "Custom dashboards, portals, internal tools, and scalable business software designed around your team and process.",
    icon: Terminal,
    steps: ["Business Need", "Custom Build", "Live System"],
    outcomes: [
      "Internal systems",
      "Client portals",
      "Scalable workflows",
    ],
    footer: "Dashboards · Portals · Systems",
  },
];

const additionalCapabilities: Capability[] = [
  {
    title: "Web Applications",
    icon: Layers,
  },
  {
    title: "Full-Stack Apps",
    icon: Terminal,
  },
  {
    title: "SaaS Platforms",
    icon: Cpu,
  },
  {
    title: "Mobile Apps",
    icon: Smartphone,
  },
  {
    title: "Business Websites",
    icon: Globe,
  },
  {
    title: "Portfolio Websites",
    icon: Globe,
  },
  {
    title: "FYP Development",
    icon: GraduationCap,
  },
  {
    title: "AI Calling Agents",
    icon: MessageSquare,
  },
  {
    title: "CRM & Lead Systems",
    icon: Users,
  },
  {
    title: "SEO & Search Visibility",
    icon: Search,
  },
  {
    title: "Personal Branding",
    icon: User,
  },
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) =>
        currentIndex === coreServices.length - 1 ? 0 : currentIndex + 1,
      );
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const activeService = coreServices[activeIndex];
  const ActiveIcon = activeService.icon;

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_50%_at_50%_-10%,rgba(23,105,255,0.10),transparent_64%)]" />

      <div className="pointer-events-none absolute -left-28 top-[45%] h-72 w-72 rounded-full bg-[#6D4AFF]/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-28 top-10 h-72 w-72 rounded-full bg-[#14C8E8]/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:gap-14">
          <div className="max-w-[500px]">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D9E6FA] bg-[#EEF5FF] px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#1769FF]">
              <Sparkles className="h-3.5 w-3.5" />
              What We Build
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-[#061A45] sm:text-5xl">
              AI systems and software
              <br />
              that actually{" "}
              <span className="bg-gradient-to-r from-[#1769FF] via-[#159FE8] to-[#6D4AFF] bg-clip-text text-transparent">
                ship.
              </span>
            </h2>

            <p className="mt-5 text-base leading-relaxed text-[#61708A] sm:text-lg">
              We build focused systems that solve real business problems — from
              customer conversations and automation to custom software and
              AI-powered knowledge tools.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {coreServices.map((service, index) => {
                const Icon = service.icon;
                const isActive = index === activeIndex;

                return (
                  <button
                    key={service.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveIndex(index)}
                    className={`flex items-center gap-2 rounded-xl border px-3 py-2.5 text-left text-xs font-semibold transition-all duration-300 ${
                      isActive
                        ? "border-[#1769FF] bg-[#1769FF] text-white hover:-translate-y-1 hover:border-[#159FE8] hover:shadow-[0_7px_0_rgba(104,157,255,0.32),0_18px_32px_rgba(23,105,255,0.22)]"
                        : "border-[#D9E6FA] bg-white text-[#61708A] hover:-translate-y-1 hover:border-[#1769FF]/70 hover:bg-[#EEF5FF] hover:text-[#1769FF] hover:shadow-[0_7px_0_rgba(134,173,255,0.22),0_18px_30px_rgba(23,105,255,0.12)]"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5 shrink-0" strokeWidth={2} />

                    <span className="truncate">{service.title}</span>
                  </button>
                );
              })}
            </div>

            <Link
              href="/services"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#1769FF] transition-all duration-300 hover:gap-3 hover:text-[#159FE8]"
            >
              Explore all services
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 16 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-[620px] lg:ml-auto"
          >
            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-[#1769FF]/10 via-[#14C8E8]/10 to-[#6D4AFF]/10 blur-2xl" />

            <div className="group overflow-hidden rounded-2xl border border-[#D9E6FA] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#1769FF]/75 hover:shadow-[0_11px_0_rgba(128,171,255,0.26),0_28px_52px_rgba(23,105,255,0.18)]">
              <div className="flex items-center justify-between border-b border-[#D9E6FA] bg-[#F8FBFF] px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

                  <span className="ml-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#8A9AB5]">
                    DevHatch Systems
                  </span>
                </div>

                <motion.div
                  animate={{ rotate: [0, 12, -12, 0] }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="transition-transform duration-300 group-hover:scale-110"
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

                      <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#061A45]">
                        {activeService.title}
                      </h3>

                      <p className="mt-1 text-sm font-semibold italic text-[#1769FF]">
                        {activeService.tagline}
                      </p>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#1769FF]/10 text-[#1769FF] transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#1769FF] group-hover:text-white group-hover:shadow-[0_6px_0_rgba(111,160,255,0.28),0_14px_24px_rgba(23,105,255,0.20)]">
                      <ActiveIcon className="h-5 w-5" strokeWidth={2} />
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-[#61708A]">
                    {activeService.description}
                  </p>

                  <div className="mt-5 overflow-hidden rounded-xl border border-[#D9E6FA] bg-[#F8FBFF] transition-all duration-300 group-hover:border-[#1769FF]/45 group-hover:bg-white group-hover:shadow-[0_6px_0_rgba(156,188,255,0.16),0_16px_28px_rgba(23,105,255,0.08)]">
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
                      href="/services"
                      className="group/link inline-flex items-center gap-2 text-xs font-bold text-[#1769FF] transition-all duration-300 hover:gap-3 hover:text-[#159FE8]"
                    >
                      View service
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center justify-between border-t border-[#D9E6FA] bg-[#F8FBFF] px-5 py-3">
                <div className="flex items-center gap-1.5">
                  {coreServices.map((service, index) => (
                    <button
                      key={service.id}
                      type="button"
                      aria-label={`Show ${service.title}`}
                      onClick={() => setActiveIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        activeIndex === index
                          ? "w-6 bg-[#1769FF]"
                          : "w-2 bg-[#D9E6FA] hover:bg-[#159FE8]"
                      }`}
                    />
                  ))}
                </div>

                <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#8A9AB5]">
                  Auto rotating
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-14 border-t border-[#D9E6FA] pt-8">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#1769FF]">
                More Capabilities
              </p>

              <h3 className="mt-2 text-2xl font-bold tracking-tight text-[#061A45] sm:text-3xl">
                More ways DevHatch helps businesses grow.
              </h3>
            </div>

            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-sm font-bold text-[#1769FF] transition-all duration-300 hover:gap-3 hover:text-[#159FE8]"
            >
              View all services
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {additionalCapabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <Link
                  key={capability.title}
                  href="/services"
                  className="group inline-flex items-center gap-2 rounded-xl border border-[#D9E6FA] bg-white px-3.5 py-2.5 text-xs font-semibold text-[#61708A] transition-all duration-300 hover:-translate-y-1 hover:border-[#1769FF]/70 hover:bg-[#EEF5FF] hover:text-[#1769FF] hover:shadow-[0_6px_0_rgba(140,177,255,0.20),0_16px_28px_rgba(23,105,255,0.10)]"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#EEF5FF] text-[#1769FF] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-[#1769FF] group-hover:text-white group-hover:shadow-[0_4px_0_rgba(124,170,255,0.22),0_10px_18px_rgba(23,105,255,0.14)]">
                    <Icon className="h-3.5 w-3.5" strokeWidth={2} />
                  </span>

                  {capability.title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
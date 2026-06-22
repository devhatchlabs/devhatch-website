"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  Bot,
  ChevronDown,
  Cloud,
  Code,
  Database,
  PlayCircle,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (index: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: index * 0.12,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const domains = [
  {
    icon: Bot,
    title: "AI Chatbots",
    tagline: "Conversational AI for your business",
    description:
      "Build intelligent chat experiences for customer support, lead qualification, FAQs, and guided website conversations.",
    gradient: "from-[#1769FF] to-[#159FE8]",
    glow: "rgba(23, 105, 255, 0.14)",
    capability: "Support · Lead qualification · FAQs",
  },
  {
    icon: Code,
    title: "Custom Software",
    tagline: "Systems built around your workflow",
    description:
      "Create scalable web applications, dashboards, portals, and internal tools designed around the way your business operates.",
    gradient: "from-[#6D4AFF] to-[#159FE8]",
    glow: "rgba(109, 74, 255, 0.14)",
    capability: "Web apps · Dashboards · Integrations",
  },
  {
    icon: Database,
    title: "RAG Systems",
    tagline: "Knowledge systems grounded in your data",
    description:
      "Turn approved documents, FAQs, policies, and internal knowledge into searchable AI-powered answers for your team or customers.",
    gradient: "from-[#14C8E8] to-[#1769FF]",
    glow: "rgba(20, 200, 232, 0.14)",
    capability: "Documents · Search · Knowledge retrieval",
  },
  {
    icon: Cloud,
    title: "AI Automation",
    tagline: "Workflows that reduce repetitive work",
    description:
      "Connect your tools, automate recurring tasks, route information, and build reliable workflows that help teams move faster.",
    gradient: "from-[#8B5CF6] to-[#6D4AFF]",
    glow: "rgba(139, 92, 246, 0.14)",
    capability: "Workflows · Data routing · Operations",
  },
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeDomain = domains[activeIndex];

  return (
    <section className="relative isolate flex min-h-[calc(100vh-5rem)] items-center overflow-hidden bg-white pb-20 pt-28">
      {/* Soft white-theme background glow */}
      <div className="pointer-events-none absolute inset-0 -z-30 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(23,105,255,0.08),transparent_60%)]" />

      <div className="pointer-events-none absolute -left-24 -top-24 -z-20 h-80 w-80 rounded-full bg-[#1769FF]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-20 -z-20 h-96 w-96 rounded-full bg-[#14C8E8]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 -z-20 h-72 w-72 rounded-full bg-[#6D4AFF]/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left content */}
          <div className="lg:col-span-5">
            <motion.span
              animate="show"
              custom={0}
              initial="hidden"
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-[#D9E6FA] bg-[#EEF5FF] px-4 py-1.5 text-xs font-semibold text-[#1769FF]"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#159FE8] opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#1769FF]" />
              </span>
              AI systems built for the way you work
            </motion.span>

            <motion.h1
              animate="show"
              custom={1}
              initial="hidden"
              variants={fadeUp}
              className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-[#061A45] sm:text-5xl lg:text-[3.35rem]"
            >
              Build smarter systems.
              <br />
              <span className="bg-gradient-to-r from-[#1769FF] via-[#159FE8] to-[#6D4AFF] bg-clip-text text-transparent">
                Scale faster.
              </span>
            </motion.h1>

            <motion.p
              animate="show"
              custom={2}
              initial="hidden"
              variants={fadeUp}
              className="mt-5 max-w-xl text-base leading-relaxed text-[#61708A] sm:text-lg"
            >
              DevHatch Labs designs AI agents, chatbots, RAG systems, automation
              workflows, and custom software that help ambitious teams move
              faster with confidence.
            </motion.p>

            <motion.div
              animate="show"
              custom={3}
              initial="hidden"
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1769FF] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(23,105,255,0.28)] transition-all hover:-translate-y-0.5 hover:bg-[#159FE8] hover:shadow-[0_14px_40px_rgba(23,105,255,0.35)]"
              >
                Book a Discovery Call
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D9E6FA] bg-white px-6 py-3 text-sm font-semibold text-[#061A45] transition-all hover:-translate-y-0.5 hover:border-[#1769FF] hover:bg-[#EEF5FF]"
              >
                <PlayCircle className="h-4 w-4" />
                Explore Our Services
              </Link>
            </motion.div>

            <motion.p
              animate="show"
              custom={4}
              initial="hidden"
              variants={fadeUp}
              className="mt-8 text-xs font-medium tracking-wide text-[#61708A]"
            >
              AI Chatbots · Agentic Systems · RAG · Automation · Custom Software
            </motion.p>
          </div>

          {/* Right interactive system card */}
          <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-12 lg:col-span-7">
            {/* Service selector */}
            <div className="flex gap-2 overflow-x-auto pb-2 md:col-span-4 md:flex-col md:overflow-visible md:pb-0">
              {domains.map((domain, index) => {
                const Icon = domain.icon;
                const isActive = activeIndex === index;

                return (
                  <button
                    key={domain.title}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                    className={`relative flex min-w-[155px] items-center gap-3 rounded-xl border p-3 text-left transition-all duration-300 md:min-w-0 ${
                      isActive
                        ? "border-[#1769FF]/30 bg-white shadow-[0_4px_20px_rgba(23,105,255,0.10)]"
                        : "border-transparent bg-transparent hover:bg-[#EEF5FF]"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTabIndicator"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                        className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-[#1769FF]/5 to-transparent"
                      />
                    )}

                    <div
                      className={`rounded-lg bg-gradient-to-br p-2 text-white transition-transform ${
                        domain.gradient
                      } ${isActive ? "scale-110" : "opacity-80"}`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>

                    <span
                      className={`text-xs font-semibold transition-colors md:text-sm ${
                        isActive ? "text-[#1769FF]" : "text-[#61708A]"
                      }`}
                    >
                      {domain.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Main dashboard card */}
            <div className="md:col-span-8">
              <motion.div
                layout
                className="relative min-h-[350px] overflow-hidden rounded-2xl border border-[#D9E6FA] bg-white p-6 shadow-[0_20px_60px_-24px_rgba(23,105,255,0.22)]"
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-70 transition-all duration-700"
                  style={{
                    background: `radial-gradient(circle at 82% 18%, ${activeDomain.glow}, transparent 58%)`,
                  }}
                />

                {/* Browser-style header */}
                <div className="relative mb-6 flex items-center justify-between border-b border-[#D9E6FA] pb-4">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

                    <span className="ml-2 text-[10px] font-mono uppercase tracking-wider text-[#61708A]/70">
                      DevHatch Core
                    </span>
                  </div>

                  <Sparkles className="h-4 w-4 animate-pulse text-[#1769FF]" />
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.32, ease: "easeOut" }}
                    className="relative flex min-h-[260px] flex-col justify-between"
                  >
                    <div>
                      <span
                        className={`inline-block rounded-md bg-gradient-to-r px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-white ${activeDomain.gradient}`}
                      >
                        Active Module
                      </span>

                      <h2 className="mt-4 flex items-center gap-2 text-2xl font-bold text-[#061A45]">
                        {activeDomain.title}
                      </h2>

                      <p className="mt-1 text-sm font-medium italic text-[#1769FF]">
                        {activeDomain.tagline}
                      </p>

                      <p className="mt-5 max-w-md text-sm leading-relaxed text-[#61708A]">
                        {activeDomain.description}
                      </p>
                    </div>

                    <div className="mt-8 flex flex-col gap-3 border-t border-[#D9E6FA] pt-4 sm:flex-row sm:items-center sm:justify-between">
                      <span className="text-[11px] font-mono text-[#61708A]">
                        {activeDomain.capability}
                      </span>

                      <Link
                        href="/services"
                        className="group inline-flex items-center gap-1.5 text-xs font-semibold text-[#1769FF] transition-all hover:gap-2.5"
                      >
                        Explore Services
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="pointer-events-none absolute bottom-3 right-4 select-none text-[9px] font-mono text-[#61708A]/30">
                  [SYS_REF: 0{activeIndex + 1}]
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[#61708A]/40"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </div>
    </section>
  );
}
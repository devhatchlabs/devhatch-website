"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Cpu,
  Database,
  Layers,
  MessageSquare,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";

const featuredServices = [
  {
    title: "AI Chatbots",
    description:
      "Custom AI chatbots that handle customer queries, lead qualification, FAQs, and support around the clock.",
    icon: MessageSquare,
  },
  {
    title: "Agentic AI Systems",
    description:
      "Intelligent AI agents designed to reason through tasks, use approved tools, and support complex business workflows.",
    icon: Cpu,
  },
  {
    title: "RAG Applications",
    description:
      "Knowledge systems that connect approved company documents, policies, and FAQs to reliable AI-powered answers.",
    icon: Database,
  },
  {
    title: "AI Automation",
    description:
      "Practical workflow automation that connects tools, reduces repetitive work, and helps teams move faster.",
    icon: Zap,
  },
  {
    title: "Custom Software",
    description:
      "Tailored software, internal tools, dashboards, and systems built around the way your business operates.",
    icon: Terminal,
  },
  {
    title: "Web Applications",
    description:
      "Modern web applications, business websites, admin dashboards, client portals, and product MVPs.",
    icon: Layers,
  },
];

const cardTransition = {
  duration: 0.55,
  ease: [0.16, 1, 0.3, 1] as const,
};

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-[#F6F9FF] py-20 md:py-28">
      {/* Soft background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#1769FF]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#6D4AFF]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={cardTransition}
            className="inline-flex items-center gap-2 rounded-full border border-[#D9E6FA] bg-white px-4 py-1.5 text-xs font-semibold text-[#1769FF] shadow-sm"
          >
            <Sparkles className="h-3.5 w-3.5" />
            What We Build
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ ...cardTransition, delay: 0.08 }}
            className="mt-5 text-3xl font-bold tracking-tight text-[#061A45] sm:text-4xl"
          >
            AI and software systems built around{" "}
            <span className="bg-gradient-to-r from-[#1769FF] via-[#159FE8] to-[#6D4AFF] bg-clip-text text-transparent">
              real business work.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ ...cardTransition, delay: 0.16 }}
            className="mt-4 text-base leading-relaxed text-[#61708A]"
          >
            From customer conversations to internal operations, DevHatch Labs
            builds focused systems that reduce repetitive work and create room
            for growth.
          </motion.p>
        </div>

        {/* Services */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  ...cardTransition,
                  delay: Math.min(index * 0.07, 0.35),
                }}
                className="group flex min-h-[320px] flex-col justify-between rounded-2xl border border-[#D9E6FA] bg-white p-7 shadow-[0_10px_35px_rgba(23,105,255,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1769FF]/35 hover:shadow-[0_20px_45px_rgba(23,105,255,0.13)]"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF5FF] text-[#1769FF] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#1769FF] group-hover:text-white">
                    <Icon className="h-5 w-5 transition-transform duration-300 group-hover:rotate-6" />
                  </div>

                  <h3 className="mt-6 text-lg font-bold tracking-tight text-[#061A45]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#61708A]">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 border-t border-[#D9E6FA] pt-4">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1769FF] transition-all duration-300 hover:gap-2.5 hover:text-[#6D4AFF]"
                  >
                    Explore service
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-[#1769FF]/20 bg-white px-5 py-2.5 text-sm font-semibold text-[#1769FF] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#1769FF] hover:bg-[#EEF5FF]"
          >
            Explore all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
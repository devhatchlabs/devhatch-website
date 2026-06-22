"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  Briefcase,
  Building2,
  Calculator,
  Calendar,
  HeartPulse,
  Home,
  Mail,
  Rocket,
  Scale,
  ShoppingBag,
  Sparkles,
  Stethoscope,
  Users,
  Users2,
} from "lucide-react";

const industries = [
  { name: "Marketing Agencies", icon: Building2 },
  { name: "Real Estate", icon: Home },
  { name: "Dental Clinics", icon: Stethoscope },
  { name: "Law Firms", icon: Scale },
  { name: "Coaches & Consultants", icon: Briefcase },
  { name: "SaaS Startups", icon: Rocket },
  { name: "E-commerce Brands", icon: ShoppingBag },
  { name: "Recruitment Agencies", icon: Users },
  { name: "Accounting Firms", icon: Calculator },
  { name: "Healthcare Practices", icon: HeartPulse },
];

const collaborationPoints = [
  "AI strategy and system design",
  "Workflow automation",
  "Custom platforms and integrations",
  "Long-term product improvement",
];

const itemTransition = {
  duration: 0.5,
  ease: [0.16, 1, 0.3, 1] as const,
};

export default function IndustriesSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      {/* Soft light-theme glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(23,105,255,0.06),transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-12 -z-10 h-72 w-72 rounded-full bg-[#14C8E8]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-20 -z-10 h-80 w-80 rounded-full bg-[#6D4AFF]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={itemTransition}
            className="inline-flex items-center gap-2 rounded-full border border-[#D9E6FA] bg-[#EEF5FF] px-4 py-1.5 text-xs font-semibold text-[#1769FF]"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Who We Work With
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ ...itemTransition, delay: 0.08 }}
            className="mt-5 text-3xl font-bold tracking-tight text-[#061A45] sm:text-4xl"
          >
            Built for teams that move{" "}
            <span className="bg-gradient-to-r from-[#1769FF] via-[#159FE8] to-[#6D4AFF] bg-clip-text text-transparent">
              fast and decide fast.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ ...itemTransition, delay: 0.16 }}
            className="mt-4 text-base leading-relaxed text-[#61708A]"
          >
            DevHatch Labs helps founder-led teams and growing businesses design
            practical AI systems, automate repetitive work, and build software
            that supports real operations.
          </motion.p>
        </div>

        {/* Industry cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
        >
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <motion.article
                key={industry.name}
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  ...itemTransition,
                  delay: Math.min(index * 0.05, 0.3),
                }}
                className="group flex min-h-[142px] flex-col items-center justify-center gap-3 rounded-2xl border border-[#D9E6FA] bg-white px-4 py-6 text-center shadow-[0_8px_28px_rgba(23,105,255,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#1769FF]/35 hover:shadow-[0_16px_35px_rgba(23,105,255,0.12)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF5FF] text-[#1769FF] transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#1769FF] group-hover:to-[#6D4AFF] group-hover:text-white">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </div>

                <p className="text-xs font-semibold leading-snug tracking-wide text-[#061A45]">
                  {industry.name}
                </p>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Collaboration section */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ ...itemTransition, delay: 0.1 }}
          className="mt-20 overflow-hidden rounded-3xl border border-[#D9E6FA] bg-gradient-to-br from-white via-[#F8FBFF] to-[#EEF5FF] p-8 shadow-[0_18px_50px_rgba(23,105,255,0.06)] sm:p-10"
        >
          <div className="grid items-center gap-12 lg:grid-cols-5">
            {/* Left */}
            <div className="lg:col-span-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#D9E6FA] bg-white px-3 py-1 text-xs font-semibold text-[#1769FF] shadow-sm">
                <Users2 className="h-3.5 w-3.5" />
                Collaboration Model
              </span>

              <h3 className="mt-5 text-2xl font-bold tracking-tight text-[#061A45] sm:text-3xl">
                Build systems that fit{" "}
                <span className="bg-gradient-to-r from-[#1769FF] to-[#6D4AFF] bg-clip-text text-transparent">
                  how you actually work.
                </span>
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-[#61708A]">
                We work directly with founders and teams to understand the
                workflow first, then build the right AI, automation, or
                software solution around it.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#1769FF] px-5 py-2.5 text-xs font-semibold text-white shadow-[0_8px_22px_rgba(23,105,255,0.25)] transition-all hover:-translate-y-0.5 hover:bg-[#159FE8]"
                >
                  <Mail className="h-3.5 w-3.5" />
                  Start a Conversation
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-[#D9E6FA] bg-white px-5 py-2.5 text-xs font-semibold text-[#061A45] transition-all hover:-translate-y-0.5 hover:border-[#1769FF] hover:bg-[#EEF5FF]"
                >
                  <Calendar className="h-3.5 w-3.5" />
                  Book a Discovery Call
                </Link>
              </div>
            </div>

            {/* Right orbit-style collaboration graphic */}
            <div className="flex justify-center lg:col-span-3">
              <div className="relative flex h-72 w-72 items-center justify-center sm:h-80 sm:w-80">
                {/* Background glow */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(23,105,255,0.12),transparent_65%)]"
                />

                {/* Orbit rings */}
                <div className="absolute inset-4 rounded-full border border-dashed border-[#1769FF]/25" />
                <div className="absolute inset-12 rounded-full border border-[#14C8E8]/25" />
                <div className="absolute inset-20 rounded-full border border-[#6D4AFF]/20" />

                {/* Points around the orbit */}
                {collaborationPoints.map((point, index) => {
                  const positions = [
                    "left-1/2 top-4 -translate-x-1/2",
                    "right-0 top-1/2 -translate-y-1/2",
                    "bottom-4 left-1/2 -translate-x-1/2",
                    "left-0 top-1/2 -translate-y-1/2",
                  ];

                  return (
                    <motion.div
                      key={point}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.2 + index * 0.08,
                        duration: 0.45,
                      }}
                      className={`absolute z-10 ${positions[index]}`}
                    >
                      <div className="flex w-28 items-center gap-2 rounded-xl border border-[#D9E6FA] bg-white px-3 py-2 shadow-[0_8px_18px_rgba(23,105,255,0.08)] sm:w-32">
                        <span className="h-2 w-2 shrink-0 rounded-full bg-[#1769FF]" />
                        <span className="text-[9px] font-semibold leading-tight text-[#061A45] sm:text-[10px]">
                          {point}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}

                {/* Center */}
                <div className="relative z-20 flex h-20 w-20 items-center justify-center rounded-full border border-[#D9E6FA] bg-white p-1.5 shadow-[0_16px_35px_rgba(23,105,255,0.16)]">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-[#1769FF] via-[#159FE8] to-[#6D4AFF] text-white">
                    <Users2 className="h-7 w-7" />
                  </div>
                </div>

                <span className="absolute bottom-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#61708A]">
                  DevHatch Labs
                </span>
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#1769FF] transition-all hover:gap-3 hover:text-[#6D4AFF]"
          >
            Discuss your industry or workflow
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
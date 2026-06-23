"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  MessageSquare,
  Rocket,
  Sparkles,
} from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "We start by understanding your business, current workflow, challenges, and the outcome you want to achieve.",
    icon: MessageSquare,
    iconColor: "text-[#1769FF]",
    iconHoverColor: "group-hover:text-[#1769FF]",
  },
  {
    step: "02",
    title: "Build & Iterate",
    description:
      "We design and build the right AI, automation, or software system, then refine it through focused feedback.",
    icon: Code2,
    iconColor: "text-[#6D4AFF]",
    iconHoverColor: "group-hover:text-[#6D4AFF]",
  },
  {
    step: "03",
    title: "Deploy & Scale",
    description:
      "We launch the system, support your team, and help you improve it as your business and requirements grow.",
    icon: Rocket,
    iconColor: "text-[#159FE8]",
    iconHoverColor: "group-hover:text-[#159FE8]",
  },
];

const transition = {
  duration: 0.55,
  ease: [0.16, 1, 0.3, 1] as const,
};

export default function HowItWorksSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-20 md:pt-10 md:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_65%_55%_at_50%_-10%,rgba(23,105,255,0.07),transparent_60%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-0 -z-10 h-72 w-72 rounded-full bg-[#14C8E8]/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-12 -z-10 h-72 w-72 rounded-full bg-[#6D4AFF]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={transition}
            className="inline-flex items-center gap-2 rounded-full border border-[#D9E6FA] bg-[#EEF5FF] px-4 py-1.5 text-xs font-semibold text-[#1769FF]"
          >
            <Sparkles className="h-3.5 w-3.5" />
            The Process
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ ...transition, delay: 0.08 }}
            className="mt-5 text-3xl font-bold tracking-tight text-[#061A45] sm:text-4xl"
          >
            From first conversation to{" "}
            <span className="bg-gradient-to-r from-[#1769FF] via-[#159FE8] to-[#6D4AFF] bg-clip-text text-transparent">
              a working system.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ ...transition, delay: 0.16 }}
            className="mt-4 text-base leading-relaxed text-[#61708A]"
          >
            A focused, practical path from understanding your workflow to
            delivering an AI, automation, or software system your team can use.
          </motion.p>
        </div>

        <div className="relative mx-auto mt-12 max-w-6xl md:mt-14">
          <div
            aria-hidden="true"
            className="absolute left-[16.66%] right-[16.66%] top-10 hidden h-px bg-gradient-to-r from-transparent via-[#D9E6FA] to-transparent md:block"
          />

          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    ...transition,
                    delay: index * 0.1,
                  }}
                  className="group relative flex flex-col items-center text-center"
                >
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-[#D9E6FA] bg-white shadow-[0_10px_28px_rgba(23,105,255,0.08)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#1769FF]/40 group-hover:shadow-[0_16px_35px_rgba(23,105,255,0.16)]">
                    <Icon
                      className={`h-6 w-6 transition-transform duration-300 group-hover:scale-110 ${step.iconColor} ${step.iconHoverColor}`}
                      strokeWidth={1.8}
                    />

                    <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full border border-[#D9E6FA] bg-[#EEF5FF] text-[10px] font-mono font-bold text-[#1769FF] shadow-sm">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-bold tracking-tight text-[#061A45]">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#61708A]">
                    {step.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={transition}
          className="mt-12 text-center md:mt-14"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#1769FF] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_26px_rgba(23,105,255,0.28)] transition-all hover:-translate-y-0.5 hover:bg-[#159FE8] hover:shadow-[0_14px_36px_rgba(23,105,255,0.35)]"
          >
            Start Your Project
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
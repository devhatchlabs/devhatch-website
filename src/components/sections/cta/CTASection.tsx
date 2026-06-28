"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CalendarClock, Sparkles } from "lucide-react";
import Link from "next/link";

const CALENDLY_URL = "https://calendly.com/saimiftikhar-work/30min";

const transition = {
  duration: 0.55,
  ease: [0.16, 1, 0.3, 1] as const,
};

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(23,105,255,0.06),transparent_60%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-0 -z-10 h-72 w-72 rounded-full bg-[#1769FF]/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 -z-10 h-72 w-72 rounded-full bg-[#6D4AFF]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={transition}
          className="group relative overflow-hidden rounded-3xl border border-[#D9E6FA] bg-gradient-to-br from-white via-[#F8FBFF] to-[#EEF5FF] px-6 py-10 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#1769FF]/70 hover:shadow-[0_10px_0_rgba(128,171,255,0.24),0_26px_52px_rgba(23,105,255,0.17)] sm:px-10 sm:py-12"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#1769FF]/10 blur-3xl transition-all duration-500 group-hover:bg-[#1769FF]/15"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-[#6D4AFF]/10 blur-3xl transition-all duration-500 group-hover:bg-[#6D4AFF]/15"
          />

          <div className="relative">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: 0.08 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#D9E6FA] bg-white px-4 py-1.5 text-xs font-semibold text-[#1769FF] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-[#1769FF]/45 group-hover:shadow-[0_6px_0_rgba(156,188,255,0.16),0_14px_24px_rgba(23,105,255,0.09)]"
            >
              <CalendarClock className="h-3.5 w-3.5 transition-transform duration-300 group-hover:scale-110" />
              Let&apos;s build something useful
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: 0.16 }}
              className="mx-auto mt-5 max-w-2xl text-3xl font-bold tracking-tight text-[#061A45] sm:text-4xl"
            >
              Ready to{" "}
              <span className="bg-gradient-to-r from-[#1769FF] via-[#159FE8] to-[#6D4AFF] bg-clip-text text-transparent">
                build smarter?
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: 0.24 }}
              className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#61708A]"
            >
              Let&apos;s discuss the AI system, workflow, website, software, or
              growth strategy that can move your business forward.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: 0.32 }}
              className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group/button inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#1769FF] bg-[#1769FF] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#159FE8] hover:bg-[#159FE8] hover:shadow-[0_8px_0_rgba(108,176,255,0.30),0_18px_34px_rgba(23,105,255,0.28)] sm:w-auto"
              >
                Book a Discovery Call
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5" />
              </a>

              <Link
                href="/services"
                className="group/button inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#D9E6FA] bg-white px-7 py-3.5 text-sm font-semibold text-[#061A45] transition-all duration-300 hover:-translate-y-1 hover:border-[#1769FF]/70 hover:bg-[#EEF5FF] hover:text-[#1769FF] hover:shadow-[0_7px_0_rgba(137,177,255,0.20),0_18px_30px_rgba(23,105,255,0.12)] sm:w-auto"
              >
                <Sparkles className="h-4 w-4 text-[#1769FF] transition-transform duration-300 group-hover/button:scale-110" />
                Explore Services
              </Link>
            </motion.div>

            <p className="mt-4 text-xs font-medium text-[#61708A]/75 transition-colors duration-300 group-hover:text-[#61708A]">
              Discovery call · Practical advice · No obligation
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
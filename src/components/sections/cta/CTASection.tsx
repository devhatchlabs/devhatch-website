"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, CalendarClock, Sparkles } from "lucide-react";

const transition = {
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1] as const,
};

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      {/* Soft background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(23,105,255,0.06),transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-0 -z-10 h-80 w-80 rounded-full bg-[#1769FF]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 -z-10 h-80 w-80 rounded-full bg-[#6D4AFF]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={transition}
          className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-[#D9E6FA] bg-gradient-to-br from-white via-[#F8FBFF] to-[#EEF5FF] px-6 py-14 text-center shadow-[0_20px_55px_rgba(23,105,255,0.09)] sm:px-12 sm:py-16"
        >
          {/* Inside card glows */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#1769FF]/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-[#6D4AFF]/10 blur-3xl"
          />

          <div className="relative">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: 0.08 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#D9E6FA] bg-white px-4 py-1.5 text-xs font-semibold text-[#1769FF] shadow-sm"
            >
              <CalendarClock className="h-3.5 w-3.5" />
              Let&apos;s build something useful
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: 0.16 }}
              className="mx-auto mt-6 max-w-2xl text-3xl font-bold tracking-tight text-[#061A45] sm:text-4xl"
            >
              Ready to{" "}
              <span className="bg-gradient-to-r from-[#1769FF] via-[#159FE8] to-[#6D4AFF] bg-clip-text text-transparent">
                automate
              </span>{" "}
              your business?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: 0.24 }}
              className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#61708A]"
            >
              Let&apos;s discuss the workflow, product, or AI system that can
              help your team save time, improve operations, and scale with
              confidence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: 0.32 }}
              className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link
                href="/contact"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1769FF] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(23,105,255,0.30)] transition-all hover:-translate-y-0.5 hover:bg-[#159FE8] hover:shadow-[0_16px_38px_rgba(23,105,255,0.38)] sm:w-auto"
              >
                Book a Discovery Call
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/services"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#D9E6FA] bg-white px-7 py-3.5 text-sm font-semibold text-[#061A45] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#1769FF] hover:bg-[#EEF5FF] sm:w-auto"
              >
                <Sparkles className="h-4 w-4 text-[#1769FF] transition-transform duration-200 group-hover:scale-110" />
                Explore Services
              </Link>
            </motion.div>

            <p className="mt-5 text-xs font-medium text-[#61708A]/75">
              Discovery call · Practical advice · No obligation
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe2,
  Layers,
  Rocket,
  Workflow,
} from "lucide-react";
import Link from "next/link";

const stats = [
  {
    value: "40+",
    label: "Projects Delivered",
    description: "AI systems, websites, automation, and custom software.",
    icon: Rocket,
  },
  {
    value: "8+",
    label: "Industries Supported",
    description: "Solutions shaped around real business workflows.",
    icon: Layers,
  },
  {
    value: "24/7",
    label: "Automation Ready",
    description: "Systems designed to keep work moving around the clock.",
    icon: Workflow,
  },
  {
    value: "Global",
    label: "Remote-First Delivery",
    description: "Built for founders, teams, and businesses anywhere.",
    icon: Globe2,
  },
];

const deliverySteps = ["Discover", "Design", "Build", "Launch"];

export default function ImpactSection() {
  return (
    <section className="relative overflow-hidden bg-[#F8FBFF] py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,rgba(23,105,255,0.10),transparent_70%)]" />

      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#6D4AFF]/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-24 top-8 h-72 w-72 rounded-full bg-[#14C8E8]/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-xs font-bold uppercase tracking-[0.16em] text-[#1769FF]"
            >
              Built for practical delivery
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="mt-3 text-3xl font-bold tracking-tight text-[#061A45] sm:text-4xl"
            >
              Built to deliver.
              <span className="bg-gradient-to-r from-[#1769FF] via-[#159FE8] to-[#6D4AFF] bg-clip-text text-transparent">
                {" "}
                Designed to scale.
              </span>
            </motion.h2>

            <p className="mt-4 text-base leading-relaxed text-[#61708A]">
              From strategy and design to development, automation, and launch,
              DevHatch Labs helps turn ideas into useful working systems.
            </p>
          </div>

          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-sm font-bold text-[#1769FF] transition-all duration-300 hover:gap-3 hover:text-[#159FE8]"
          >
            Explore our work
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.article
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group rounded-2xl border border-[#D9E6FA] bg-white p-5 transition-all duration-300 hover:-translate-y-2 hover:border-[#1769FF]/75 hover:shadow-[0_10px_0_rgba(122,164,255,0.24),0_24px_44px_rgba(23,105,255,0.15)]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF5FF] text-[#1769FF] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:scale-110 group-hover:bg-[#1769FF] group-hover:text-white group-hover:shadow-[0_5px_0_rgba(115,163,255,0.25),0_12px_22px_rgba(23,105,255,0.18)]">
                    <Icon className="h-5 w-5" strokeWidth={1.9} />
                  </div>

                  <span className="text-2xl font-bold tracking-tight text-[#061A45] transition-colors duration-300 group-hover:text-[#1769FF]">
                    {stat.value}
                  </span>
                </div>

                <h3 className="mt-5 text-sm font-bold text-[#061A45] transition-colors duration-300 group-hover:text-[#1769FF]">
                  {stat.label}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-[#61708A]">
                  {stat.description}
                </p>

                <span className="mt-5 block h-px w-0 bg-gradient-to-r from-[#1769FF] via-[#159FE8] to-[#6D4AFF] transition-all duration-300 group-hover:w-16" />
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="group mt-8 rounded-2xl border border-[#D9E6FA] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#1769FF]/75 hover:shadow-[0_10px_0_rgba(122,164,255,0.22),0_24px_44px_rgba(23,105,255,0.14)] sm:p-6"
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#1769FF]">
                From idea to launch
              </p>

              <p className="mt-2 text-sm text-[#61708A]">
                A focused delivery process for building useful systems without
                unnecessary complexity.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {deliverySteps.map((step, index) => (
                <div key={step} className="flex items-center gap-2">
                  <div className="rounded-full border border-[#D9E6FA] bg-[#F8FBFF] px-3 py-2 text-xs font-bold text-[#061A45] transition-all duration-300 group-hover:border-[#B8D2FF] group-hover:bg-[#EEF5FF] group-hover:shadow-[0_4px_0_rgba(168,197,255,0.18),0_10px_18px_rgba(23,105,255,0.08)]">
                    <span className="mr-1.5 text-[#1769FF]">
                      0{index + 1}
                    </span>
                    {step}
                  </div>

                  {index !== deliverySteps.length - 1 && (
                    <ArrowRight className="h-3.5 w-3.5 text-[#1769FF]/50 transition-transform duration-300 group-hover:translate-x-0.5" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
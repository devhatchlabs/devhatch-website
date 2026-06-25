"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CALENDLY_URL } from "@/lib/constants";
import {
  ArrowUpRight,
  Bot,
  ChevronDown,
  Code2,
  MessageSquare,
  PlayCircle,
  Search,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

type EngineNode = {
  id: string;
  title: string;
  services: string;
  description: string;
  icon: LucideIcon;
  angle: number;
  color: string;
  activeColor: string;
};

const engineNodes: EngineNode[] = [
  {
    id: "attract",
    title: "Attract",
    services: "Websites · SEO · Branding",
    description:
      "Build visibility, trust, and a stronger digital presence before the first conversation.",
    icon: Search,
    angle: 0,
    color: "text-[#1769FF]",
    activeColor: "border-[#1769FF] bg-[#1769FF] text-white",
  },
  {
    id: "engage",
    title: "Engage",
    services: "Chatbots · WhatsApp · Voice",
    description:
      "Turn customer attention into useful conversations, qualified leads, and faster support.",
    icon: MessageSquare,
    angle: 90,
    color: "text-[#159FE8]",
    activeColor: "border-[#159FE8] bg-[#159FE8] text-white",
  },
  {
    id: "automate",
    title: "Automate",
    services: "CRM · Leads · Workflows",
    description:
      "Remove repetitive work with connected systems for sales, operations, and follow-ups.",
    icon: Workflow,
    angle: 180,
    color: "text-[#6D4AFF]",
    activeColor: "border-[#6D4AFF] bg-[#6D4AFF] text-white",
  },
  {
    id: "build",
    title: "Build",
    services: "Software · SaaS · Apps",
    description:
      "Create custom products, dashboards, portals, and scalable systems around your workflow.",
    icon: Code2,
    angle: 270,
    color: "text-[#1769FF]",
    activeColor: "border-[#1769FF] bg-[#1769FF] text-white",
  },
];

export default function HeroSection() {
  const [activeNodeId, setActiveNodeId] = useState("attract");

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveNodeId((currentNodeId) => {
        const currentIndex = engineNodes.findIndex(
          (node) => node.id === currentNodeId,
        );

        const nextIndex =
          currentIndex === engineNodes.length - 1 ? 0 : currentIndex + 1;

        return engineNodes[nextIndex].id;
      });
    }, 3600);

    return () => window.clearInterval(timer);
  }, []);

  const activeNode =
    engineNodes.find((node) => node.id === activeNodeId) ?? engineNodes[0];

  return (
    <section className="relative isolate overflow-hidden bg-white pb-20 pt-28 sm:pb-24 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 -z-30 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(23,105,255,0.08),transparent_62%)]" />

      <div className="pointer-events-none absolute -left-24 -top-24 -z-20 h-80 w-80 rounded-full bg-[#1769FF]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-16 -z-20 h-96 w-96 rounded-full bg-[#14C8E8]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-[35%] -z-20 h-72 w-72 rounded-full bg-[#6D4AFF]/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D9E6FA] bg-[#EEF5FF] px-4 py-1.5 text-xs font-semibold text-[#1769FF]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#159FE8] opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#1769FF]" />
              </span>
              AI systems built for the way you work
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-[#061A45] sm:text-5xl lg:text-[3.35rem]">
              Build smarter systems.
              <br />
              <span className="bg-gradient-to-r from-[#1769FF] via-[#159FE8] to-[#6D4AFF] bg-clip-text text-transparent">
                Scale faster.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#61708A] sm:text-lg">
              DevHatch Labs connects visibility, customer engagement,
              automation, and custom technology into practical systems that help
              ambitious teams move faster with confidence.
            </p>
<div className="mt-8">
  <div className="flex flex-wrap items-center gap-4">
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1769FF] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(23,105,255,0.28)] transition-all hover:-translate-y-0.5 hover:bg-[#159FE8] hover:shadow-[0_14px_40px_rgba(23,105,255,0.35)]"
    >
      Book a Discovery Call
      <ArrowUpRight className="h-4 w-4" />
    </a>

    <Link
      href="/services"
      className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D9E6FA] bg-white px-6 py-3 text-sm font-semibold text-[#061A45] transition-all hover:-translate-y-0.5 hover:border-[#1769FF] hover:bg-[#EEF5FF]"
    >
      <PlayCircle className="h-4 w-4" />
      Explore Our Services
    </Link>
  </div>

  <Link
    href="/join-us"
    className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#1769FF] transition-colors hover:text-[#159FE8]"
  >
    <span className="font-normal text-[#61708A]">
      Looking to build with us?
    </span>

    Join our team
    <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
  </Link>
</div>

            <p className="mt-8 text-xs font-medium tracking-wide text-[#61708A]">
              AI Systems · SaaS & Apps · Automation · SEO · Personal Branding
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="relative mx-auto w-full max-w-[500px]">
              <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-gradient-to-br from-[#1769FF]/10 via-[#14C8E8]/10 to-[#6D4AFF]/10 blur-3xl" />

              <div className="relative aspect-square w-full">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 34,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-[12%] rounded-full border border-dashed border-[#1769FF]/25"
                />

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 48,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-[24%] rounded-full border border-[#14C8E8]/25"
                />

                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.18, 0.35, 0.18],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-1/2 top-1/2 h-[42%] w-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1769FF]/30"
                />

                <svg
                  viewBox="0 0 100 100"
                  className="pointer-events-none absolute inset-0 h-full w-full"
                  aria-hidden="true"
                >
                  <line
                    x1="50"
                    y1="50"
                    x2="23"
                    y2="23"
                    stroke="#1769FF"
                    strokeOpacity="0.25"
                    strokeWidth="0.45"
                  />
                  <line
                    x1="50"
                    y1="50"
                    x2="77"
                    y2="23"
                    stroke="#14C8E8"
                    strokeOpacity="0.25"
                    strokeWidth="0.45"
                  />
                  <line
                    x1="50"
                    y1="50"
                    x2="23"
                    y2="77"
                    stroke="#6D4AFF"
                    strokeOpacity="0.25"
                    strokeWidth="0.45"
                  />
                  <line
                    x1="50"
                    y1="50"
                    x2="77"
                    y2="77"
                    stroke="#1769FF"
                    strokeOpacity="0.25"
                    strokeWidth="0.45"
                  />

                  <circle cx="32" cy="32" r="1.25" fill="#1769FF" />
                  <circle cx="68" cy="32" r="1.25" fill="#14C8E8" />
                  <circle cx="32" cy="68" r="1.25" fill="#6D4AFF" />
                  <circle cx="68" cy="68" r="1.25" fill="#1769FF" />
                </svg>

                {engineNodes.map((node) => {
                  const Icon = node.icon;
                  const isActive = activeNode.id === node.id;

                  return (
                    <motion.div
                      key={node.id}
                      initial={{ rotate: node.angle }}
                      animate={{ rotate: node.angle + 360 }}
                      transition={{
                        duration: 26,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-[12%]"
                    >
                      <div className="absolute left-1/2 top-0">
                        <div className="-translate-x-1/2 -translate-y-1/2">
                          <motion.button
                            type="button"
                            initial={{ rotate: -node.angle }}
                            animate={{
                              rotate: -node.angle - 360,
                              y: [0, -5, 0],
                            }}
                            transition={{
                              rotate: {
                                duration: 26,
                                repeat: Infinity,
                                ease: "linear",
                              },
                              y: {
                                duration: 2.8,
                                repeat: Infinity,
                                ease: "easeInOut",
                              },
                            }}
                            whileHover={{ scale: 1.07 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => setActiveNodeId(node.id)}
                            className={`w-[118px] rounded-2xl border p-3 text-left shadow-[0_10px_26px_rgba(23,105,255,0.12)] transition sm:w-[138px] sm:p-3.5 ${
                              isActive
                                ? node.activeColor
                                : "border-[#D9E6FA] bg-white text-[#061A45] hover:border-[#1769FF]/45"
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <span
                                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${
                                  isActive
                                    ? "bg-white/20 text-white"
                                    : `bg-[#EEF5FF] ${node.color}`
                                }`}
                              >
                                <Icon className="h-4 w-4" strokeWidth={2} />
                              </span>

                              <span className="min-w-0">
                                <span className="block text-xs font-bold">
                                  {node.title}
                                </span>

                                <span
                                  className={`mt-0.5 block text-[9px] font-medium leading-snug ${
                                    isActive
                                      ? "text-white/80"
                                      : "text-[#61708A]"
                                  }`}
                                >
                                  {node.services}
                                </span>
                              </span>
                            </div>
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}

                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-1/2 top-1/2 z-30 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#1769FF]/30 bg-white p-2 shadow-[0_18px_42px_rgba(23,105,255,0.24)] sm:h-28 sm:w-28"
                >
                  <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-gradient-to-br from-[#061A45] via-[#1769FF] to-[#159FE8] text-center text-white">
                    <Bot className="h-6 w-6" />
                    <span className="mt-1 text-[9px] font-bold tracking-[0.14em]">
                      DEVHATCH
                    </span>
                    <span className="text-[8px] font-medium text-white/70">
                      CORE
                    </span>
                  </div>
                </motion.div>
              </div>

              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mx-auto mt-3 max-w-sm text-center"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#1769FF]">
                  Active System Layer · {activeNode.title}
                </p>

                <p className="mt-1 text-xs leading-relaxed text-[#61708A]">
                  {activeNode.description}
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[#61708A]/40"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  MessageSquare,
  Network,
  Database,
  Workflow,
  BrainCircuit,
  Eye,
  FileText,
  BarChart3,
  Code2,
  Globe,
  Rocket,
  Plug,
  Compass,
  Layers,
  GitBranch,
  Gauge,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const trustLine =
  "AI Chatbots · Agentic Systems · RAG · Automation · Custom Software";

type ServiceItem = { icon: LucideIcon; label: string };
type ServiceGroup = { name: string; items: [ServiceItem, ServiceItem, ServiceItem, ServiceItem] };

const groups: ServiceGroup[] = [
  {
    name: "AI Systems",
    items: [
      { icon: MessageSquare, label: "AI Chatbots" },
      { icon: Network, label: "Agentic AI Systems" },
      { icon: Database, label: "RAG Knowledge Systems" },
      { icon: Workflow, label: "AI Automation" },
    ],
  },
  {
    name: "Data & Applied AI",
    items: [
      { icon: BrainCircuit, label: "Machine Learning Solutions" },
      { icon: Eye, label: "Computer Vision" },
      { icon: FileText, label: "Intelligent Document Processing" },
      { icon: BarChart3, label: "Data Processing & Analytics" },
    ],
  },
  {
    name: "Software & Product",
    items: [
      { icon: Code2, label: "Custom Software" },
      { icon: Globe, label: "Web Applications" },
      { icon: Rocket, label: "SaaS & MVP Development" },
      { icon: Plug, label: "API & System Integrations" },
    ],
  },
  {
    name: "Strategy & Scale",
    items: [
      { icon: Compass, label: "AI Consulting & Discovery" },
      { icon: Layers, label: "Workflow & Solution Design" },
      { icon: GitBranch, label: "Deployment & Integration" },
      { icon: Gauge, label: "Optimization & Support" },
    ],
  },
];

// Category view — shown immediately on load, and again permanently at the end.
// One representative icon per category, paired with the category name itself.
const finalSatellites: [ServiceItem, ServiceItem, ServiceItem, ServiceItem] = [
  { icon: groups[0].items[0].icon, label: groups[0].name },
  { icon: groups[1].items[0].icon, label: groups[1].name },
  { icon: groups[2].items[0].icon, label: groups[2].name },
  { icon: groups[3].items[0].icon, label: groups[3].name },
];

const satellitePositions = [
  "left-1/2 top-0 -translate-x-1/2",
  "right-0 top-1/2 -translate-y-1/2",
  "left-1/2 bottom-0 -translate-x-1/2",
  "left-0 top-1/2 -translate-y-1/2",
];

const INTRO_MS = 1500;
const GROUP_MS = 3500;

export function HeroSection() {
  // phase 0 = immediate category labels shown on first load ("Core Engine" + 4 categories)
  // phase 1-4 = groups[phase - 1] cycling through individual services
  // phase 5 = final settled state — same content as phase 0, permanent, no further change
  const [phase, setPhase] = React.useState(0);
  const [ringSpun, setRingSpun] = React.useState(false);

  React.useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      // Reduced-motion users land directly on the final static state —
      // no sequence, no ring spin. Deferred via setTimeout(0) rather than
      // called synchronously in the effect body.
      const t = setTimeout(() => {
        setPhase(5);
        setRingSpun(true);
      }, 0);
      return () => clearTimeout(t);
    }

    const timers: ReturnType<typeof setTimeout>[] = [];

    timers.push(setTimeout(() => setRingSpun(true), 50));
    timers.push(setTimeout(() => setPhase(1), INTRO_MS));
    timers.push(setTimeout(() => setPhase(2), INTRO_MS + GROUP_MS));
    timers.push(setTimeout(() => setPhase(3), INTRO_MS + GROUP_MS * 2));
    timers.push(setTimeout(() => setPhase(4), INTRO_MS + GROUP_MS * 3));
    timers.push(setTimeout(() => setPhase(5), INTRO_MS + GROUP_MS * 4));

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  const currentGroup = phase >= 1 && phase <= 4 ? groups[phase - 1] : null;
  const centerLabel = currentGroup ? currentGroup.name : "Core Engine";

  function getSatellite(index: number): ServiceItem {
    if (currentGroup) return currentGroup.items[index];
    return finalSatellites[index]; // phase 0 (immediate) and phase 5 (final) — same content
  }

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Mesh glow — three soft blurred blobs (blue / cyan / violet), low opacity */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-4rem] h-[26rem] w-[26rem] rounded-full bg-brand-blue/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-20 right-1/4 h-72 w-72 rounded-full bg-cyan/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-violet/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="flex flex-col gap-16 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* ---------------- Left: copy ---------------- */}
          <div>
            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-soft-blue px-4 py-1.5 text-xs font-semibold text-brand-blue">
              <span className="size-1.5 rounded-full bg-electric-blue" />
              AI systems built for the way you work
            </span>

            {/* Heading */}
            <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-navy md:text-5xl lg:text-6xl">
              Build smarter systems.{" "}
              <span className="bg-gradient-to-r from-brand-blue to-violet bg-clip-text text-transparent">
                Scale faster.
              </span>
            </h1>

            {/* Supporting text */}
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              DevHatch Labs designs AI agents, chatbots, RAG systems, automation
              workflows, and custom software that help ambitious teams move
              faster with confidence.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Book a Discovery Call <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>

            {/* Trust line */}
            <p className="mt-8 text-xs font-medium tracking-wide text-muted-foreground">
              {trustLine}
            </p>
          </div>

          {/* ---------------- Right: abstract AI services orbit ---------------- */}
          <div className="relative">
            {/* Layered background card — implies a stacked interface, peeking out behind the main panel */}
            <div
              aria-hidden="true"
              className="absolute inset-0 hidden -translate-y-3 translate-x-3 rotate-2 rounded-3xl border border-border bg-soft-blue/50 sm:block"
            />

            {/* Main panel */}
            <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-white to-ice p-8 shadow-soft-lg">
              {/* Small understated glowing brand-mark detail — hexagon echo of the DevHatch mark */}
              <div
                aria-hidden="true"
                className="absolute right-6 top-6 h-3.5 w-3.5 animate-breathe shadow-glow-blue"
              >
                <svg viewBox="0 0 100 100" className="h-full w-full">
                  <polygon points="25,4 75,4 96,50 75,96 25,96 4,50" fill="#1769FF" />
                </svg>
              </div>

              <div className="relative mx-auto aspect-square w-full max-w-xs sm:max-w-sm lg:max-w-md">
                {/* Ambient floating glow layer */}
                <div className="absolute inset-0 animate-float-slow rounded-full bg-gradient-to-br from-soft-blue via-white to-soft-violet opacity-70 blur-2xl" />

                {/* Decorative orbit ring — spins once at the start, then settles permanently.
                    The marker dot is a child of this same rotating element, so it visibly
                    travels one full lap around the ring as the ring itself rotates. */}
                <div
                  aria-hidden="true"
                  className="absolute inset-[6%] rounded-full border-2 border-dashed border-brand-blue/25"
                  style={{
                    transform: `rotate(${ringSpun ? 360 : 0}deg)`,
                    transition: "transform 2400ms cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <span className="absolute left-1/2 top-0 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric-blue shadow-glow-blue" />
                </div>

                {/* Connecting lines (cardinal, fixed — never rotate, so satellites stay aligned) */}
                <div className="absolute left-1/2 top-[15%] h-[21%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-brand-blue/50 to-transparent" />
                <div className="absolute right-[15%] top-1/2 h-px w-[21%] -translate-y-1/2 bg-gradient-to-l from-transparent via-cyan/50 to-transparent" />
                <div className="absolute bottom-[15%] left-1/2 h-[21%] w-px -translate-x-1/2 bg-gradient-to-t from-transparent via-brand-blue/50 to-transparent" />
                <div className="absolute left-[15%] top-1/2 h-px w-[21%] -translate-y-1/2 bg-gradient-to-r from-transparent via-violet/50 to-transparent" />

                {/* Center node — hexagonal Core Engine / current group name */}
                <div className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                  <div className="relative flex h-20 w-20 animate-breathe items-center justify-center drop-shadow-lg">
                    <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
                      <defs>
                        <linearGradient id="coreHexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#061A45" />
                          <stop offset="100%" stopColor="#1769FF" />
                        </linearGradient>
                      </defs>
                      <polygon
                        points="25,4 75,4 96,50 75,96 25,96 4,50"
                        fill="url(#coreHexGradient)"
                      />
                    </svg>
                    <Sparkles className="relative size-7 text-white" />
                  </div>
                  <span
                    key={centerLabel}
                    className="animate-fade-rise mt-2 whitespace-nowrap text-[11px] font-semibold text-navy"
                  >
                    {centerLabel}
                  </span>
                </div>

                {/* Satellite nodes — content swaps per phase, position never moves */}
                {satellitePositions.map((position, i) => {
                  const content = getSatellite(i);
                  return (
                    <div key={i} className={`absolute z-10 ${position}`}>
                      <div
                        key={`${phase}-${i}`}
                        className="animate-fade-rise relative flex items-center gap-2 whitespace-nowrap rounded-2xl border border-border bg-white px-3 py-2.5 shadow-soft"
                      >
                        {i === 1 && (
                          <span
                            aria-hidden="true"
                            className="absolute -right-1 -top-1 size-2.5 rounded-full bg-magenta ring-2 ring-white"
                          />
                        )}
                        <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                          <content.icon className="size-3.5" />
                        </span>
                        <span className="max-w-[7.5rem] truncate text-[11px] font-semibold text-navy">
                          {content.label}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
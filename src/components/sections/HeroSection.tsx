"use client";

import * as React from "react";
import Link from "next/link";
import { CALENDLY_URL } from "@/lib/constants";
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
// Order matches satellite render order: [top, right, bottom, left]
type Quad = [ServiceItem, ServiceItem, ServiceItem, ServiceItem];

// Index 0 = category overview, indices 1-4 = the four service groups in order.
const orbitFrames: Quad[] = [
  // 0 — Category overview
  [
    { icon: Network, label: "AI Systems" },
    { icon: BrainCircuit, label: "Data & Applied AI" },
    { icon: Code2, label: "Software & Product" },
    { icon: Compass, label: "Strategy & Scale" },
  ],
  // 1 — AI Systems
  [
    { icon: MessageSquare, label: "AI Chatbots" },
    { icon: Network, label: "Agentic AI Systems" },
    { icon: Database, label: "RAG Knowledge Systems" },
    { icon: Workflow, label: "AI Automation" },
  ],
  // 2 — Data & Applied AI
  [
    { icon: BrainCircuit, label: "Machine Learning" },
    { icon: Eye, label: "Computer Vision" },
    { icon: FileText, label: "Intelligent Document Processing" },
    { icon: BarChart3, label: "Data Processing & Analytics" },
  ],
  // 3 — Software & Product
  [
    { icon: Code2, label: "Custom Software" },
    { icon: Globe, label: "Web Applications" },
    { icon: Rocket, label: "SaaS & MVP Development" },
    { icon: Plug, label: "API & System Integrations" },
  ],
  // 4 — Strategy & Scale
  [
    { icon: Compass, label: "AI Consulting & Discovery" },
    { icon: Layers, label: "Workflow & Solution Design" },
    { icon: GitBranch, label: "Deployment & Integration" },
    { icon: Gauge, label: "Optimization & Support" },
  ],
];

const satellitePositions = [
  "left-1/2 top-0 -translate-x-1/2", // top
  "right-0 top-1/2 -translate-y-1/2", // right
  "left-1/2 bottom-0 -translate-x-1/2", // bottom
  "left-0 top-1/2 -translate-y-1/2", // left
];

const COLLAPSE_MS = 600;
const FRAME_HOLD = [2700, 3900, 3900, 3900, 3900]; // ms per frame, index-matched to orbitFrames

export function HeroSection() {
  const [frame, setFrame] = React.useState(0);
  const [linesCollapsed, setLinesCollapsed] = React.useState(false);
  const [markerRotation, setMarkerRotation] = React.useState(0);

  React.useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Reduced-motion users get only the static category overview — no
    // timers are ever created, so there's nothing to clean up either.
    if (prefersReduced) {
      return;
    }

    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    function runFrame(index: number) {
      if (cancelled) return;

      // Begin collapse: lines pull toward center, marker advances clockwise.
      setLinesCollapsed(true);
      setMarkerRotation((r) => r + 72);

      timeoutId = setTimeout(() => {
        if (cancelled) return;

        // Expand: new content settles in, lines extend back out.
        setFrame(index);
        setLinesCollapsed(false);

        const remainingHold = FRAME_HOLD[index] - COLLAPSE_MS;
        timeoutId = setTimeout(() => {
          if (cancelled) return;
          const next = (index + 1) % orbitFrames.length;
          runFrame(next);
        }, remainingHold);
      }, COLLAPSE_MS);
    }

    // Initial frame (category overview) is already the default state —
    // useState(0) / useState(false) — so nothing needs setting here.
    // Just schedule the first transition into frame 1.
    timeoutId = setTimeout(() => {
      if (cancelled) return;
      runFrame(1);
    }, FRAME_HOLD[0]);

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, []);

  const current = orbitFrames[frame];
  const lineTransform = (axis: "X" | "Y") =>
    `translate${axis}(-50%) scale${axis === "X" ? "Y" : "X"}(${linesCollapsed ? 0.1 : 1})`;

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
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      Book a Discovery Call
      <ArrowRight className="size-4" />
    </a>
  </Button>

  <Button asChild variant="outline" size="lg">
    <Link href="/services">
      Explore Our Services
      <ArrowRight className="size-4" />
    </Link>
  </Button>
</div>

{/* Careers link */}
<div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
  <span>Looking to build with us?</span>

  <Link
    href="/join-us"
    className="group inline-flex items-center gap-1 font-semibold text-brand-blue transition-colors hover:text-electric-blue"
  >
    Join our team
    <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
  </Link>
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

                {/* Decorative orbit ring + traveling marker dot. The dot is a child
                    of this same rotating element, so it visibly sweeps clockwise
                    around the ring as the marker advances each transition. The
                    dashed pattern drifts slowly along with it — never the labels. */}
                <div
                  aria-hidden="true"
                  className="absolute inset-[6%] rounded-full border-2 border-dashed border-brand-blue/25"
                  style={{
                    transform: `rotate(${markerRotation}deg)`,
                    transition: "transform 1200ms cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <span className="absolute left-1/2 top-0 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric-blue shadow-glow-blue" />
                </div>

                {/* Connecting lines (cardinal) — pull toward center then expand back
                    out on every transition, signaling the active group changing.
                    Positions never move, so satellites always stay aligned. */}
                <div
                  aria-hidden="true"
                  className="absolute left-1/2 top-[15%] h-[21%] w-px bg-gradient-to-b from-transparent via-brand-blue/50 to-transparent"
                  style={{ transform: lineTransform("X"), transition: "transform 600ms ease-in-out" }}
                />
                <div
                  aria-hidden="true"
                  className="absolute right-[15%] top-1/2 h-px w-[21%] bg-gradient-to-l from-transparent via-cyan/50 to-transparent"
                  style={{ transform: lineTransform("Y"), transition: "transform 600ms ease-in-out" }}
                />
                <div
                  aria-hidden="true"
                  className="absolute bottom-[15%] left-1/2 h-[21%] w-px bg-gradient-to-t from-transparent via-brand-blue/50 to-transparent"
                  style={{ transform: lineTransform("X"), transition: "transform 600ms ease-in-out" }}
                />
                <div
                  aria-hidden="true"
                  className="absolute left-[15%] top-1/2 h-px w-[21%] bg-gradient-to-r from-transparent via-violet/50 to-transparent"
                  style={{ transform: lineTransform("Y"), transition: "transform 600ms ease-in-out" }}
                />

                {/* Center node — always "Core Engine", never changes */}
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
                  <span className="mt-2 whitespace-nowrap text-[11px] font-semibold text-navy">
                    Core Engine
                  </span>
                </div>

                {/* Satellite nodes — content swaps per frame, position never moves */}
                {satellitePositions.map((position, i) => {
                  const item = current[i];
                  return (
                    <div key={i} className={`absolute z-10 ${position}`}>
                      <div
                        key={`${frame}-${i}`}
                        className="animate-fade-rise relative flex items-center gap-2 whitespace-nowrap rounded-2xl border border-border bg-white px-3 py-2.5 shadow-soft"
                      >
                        {i === 1 && (
                          <span
                            aria-hidden="true"
                            className="absolute -right-1 -top-1 size-2.5 rounded-full bg-magenta ring-2 ring-white"
                          />
                        )}
                        <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                          <item.icon className="size-3.5" />
                        </span>
                        <span className="max-w-[7.5rem] truncate text-[11px] font-semibold text-navy">
                          {item.label}
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
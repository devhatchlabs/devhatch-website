"use client";

import * as React from "react";
import { Search, Layers, Hammer, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Understand goals, users, and bottlenecks.",
    icon: Search,
  },
  {
    number: "02",
    title: "Design",
    description: "Map the right AI or software solution.",
    icon: Layers,
  },
  {
    number: "03",
    title: "Build",
    description: "Develop, test, and integrate.",
    icon: Hammer,
  },
  {
    number: "04",
    title: "Scale",
    description: "Improve, automate, and support growth.",
    icon: TrendingUp,
  },
];

export function HowWeWorkSection() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-py bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-brand-blue">
          How We Work
        </p>
        <h2 className="max-w-xl text-3xl font-bold tracking-tight text-navy md:text-4xl">
          From idea to intelligent system.
        </h2>

        <div ref={containerRef} className="relative mt-14">
          {/* Horizontal connector line — desktop only */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-brand-blue via-cyan to-violet md:block"
          />

          <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className={`relative flex gap-4 transition-all duration-700 ease-out md:flex-col md:items-center md:text-center ${
                    visible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: visible ? `${i * 120}ms` : "0ms" }}
                >
                  {/* Vertical connector — mobile only */}
                  {i < steps.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="absolute left-7 top-14 h-[calc(100%+1.5rem)] w-px bg-gradient-to-b from-brand-blue/40 to-transparent md:hidden"
                    />
                  )}

                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-brand-blue bg-white shadow-soft">
                    <Icon className="size-5 text-brand-blue" />
                  </div>

                  <div>
                    <span className="font-mono text-xs font-semibold tracking-widest text-cyan">
                      STEP {step.number}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold text-navy">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-[15rem] text-sm leading-relaxed text-muted-foreground md:mx-auto">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
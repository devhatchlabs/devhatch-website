"use client";

import {
  motion,
  useAnimation,
  useReducedMotion,
} from "framer-motion";
import { Quote, Sparkles, Star } from "lucide-react";
import { useCallback, useEffect } from "react";

// TEMPORARY DEMO TESTIMONIALS.
// Replace with approved real client feedback before publishing.
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "Growth Marketing Agency",
    focus: "Lead Automation",
    quote:
      "DevHatch Labs helped us structure and automate our inbound lead workflow. The system made lead handling clearer, faster, and much easier for our team to manage.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "CTO",
    company: "SaaS Startup",
    focus: "RAG Application",
    quote:
      "The RAG system gave our team a more practical way to use internal knowledge. Our documentation and support information became easier to search, access, and work with.",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "Founder",
    company: "Real Estate Group",
    focus: "Agentic AI Workflow",
    quote:
      "DevHatch designed a focused follow-up workflow for our business. It helped us create a more consistent process for leads, conversations, and appointment management.",
    rating: 5,
  },
  {
    name: "Amara Okafor",
    role: "Operations Director",
    company: "Logistics Company",
    focus: "Business Automation",
    quote:
      "We needed a better way to manage repetitive operational work. The automation workflow reduced manual effort and gave our team a much clearer process to follow.",
    rating: 5,
  },
];

const transition = {
  duration: 0.55,
  ease: [0.16, 1, 0.3, 1] as const,
};

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

export default function TestimonialsSection() {
  const marqueeControls = useAnimation();
  const shouldReduceMotion = useReducedMotion();

  const marqueeItems = [...testimonials, ...testimonials];

  const startMarquee = useCallback(() => {
    if (shouldReduceMotion) {
      marqueeControls.set({ x: "0%" });
      return;
    }

    marqueeControls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: 50,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  }, [marqueeControls, shouldReduceMotion]);

  useEffect(() => {
    startMarquee();

    return () => {
      marqueeControls.stop();
    };
  }, [marqueeControls, startMarquee]);

  return (
    <section className="relative overflow-hidden bg-[#F6F9FF] py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(23,105,255,0.09),transparent_62%)]" />

      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-[#6D4AFF]/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-[#14C8E8]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={transition}
            className="inline-flex items-center gap-2 rounded-full border border-[#D9E6FA] bg-white px-4 py-1.5 text-xs font-bold text-[#1769FF] shadow-sm"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Client Feedback
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ...transition, delay: 0.08 }}
            className="mt-5 text-3xl font-bold tracking-tight text-[#061A45] sm:text-4xl"
          >
            Built with teams that value{" "}
            <span className="bg-gradient-to-r from-[#1769FF] via-[#159FE8] to-[#6D4AFF] bg-clip-text text-transparent">
              clarity and results.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ...transition, delay: 0.16 }}
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#61708A]"
          >
            We build practical AI systems, automation workflows, and software
            that help teams remove repetitive work and operate with confidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ...transition, delay: 0.24 }}
            className="mt-7 flex flex-wrap justify-center gap-2.5"
          >
            <span className="rounded-full border border-[#D9E6FA] bg-white px-3.5 py-2 text-xs font-semibold text-[#61708A]">
              Practical systems
            </span>

            <span className="rounded-full border border-[#D9E6FA] bg-white px-3.5 py-2 text-xs font-semibold text-[#61708A]">
              Clear workflows
            </span>

            <span className="rounded-full border border-[#D9E6FA] bg-white px-3.5 py-2 text-xs font-semibold text-[#61708A]">
              Focused delivery
            </span>
          </motion.div>
        </div>
      </div>

      <div className="relative mt-12 overflow-hidden sm:mt-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#F6F9FF] to-transparent sm:w-28" />

        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#F6F9FF] to-transparent sm:w-28" />

        <motion.div
          animate={marqueeControls}
          onMouseEnter={() => marqueeControls.stop()}
          onMouseLeave={startMarquee}
          className="flex w-max gap-5 px-3 sm:gap-6 sm:px-4"
        >
          {marqueeItems.map((testimonial, index) => {
            const isDuplicate = index >= testimonials.length;

            return (
              <article
                key={`${testimonial.name}-${index}`}
                aria-hidden={isDuplicate}
                className="group relative flex min-h-[320px] w-[310px] shrink-0 flex-col justify-between overflow-hidden rounded-2xl border border-[#D9E6FA] bg-white p-6 shadow-[0_10px_30px_rgba(23,105,255,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#1769FF]/45 hover:shadow-[0_18px_42px_rgba(23,105,255,0.14)] sm:min-h-[335px] sm:w-[405px] sm:p-7"
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#1769FF]/5 blur-2xl transition group-hover:bg-[#1769FF]/10" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div
                        className="flex gap-1"
                        aria-label={`${testimonial.rating} out of 5 stars`}
                      >
                        {Array.from({ length: testimonial.rating }).map(
                          (_, starIndex) => (
                            <Star
                              key={starIndex}
                              className="h-3.5 w-3.5 fill-[#1769FF] text-[#1769FF]"
                            />
                          ),
                        )}
                      </div>

                      <span className="mt-3 inline-flex rounded-full border border-[#D9E6FA] bg-[#EEF5FF] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[#1769FF]">
                        {testimonial.focus}
                      </span>
                    </div>

                    <Quote className="h-7 w-7 rotate-180 text-[#1769FF]/20" />
                  </div>

                  <p className="mt-5 text-sm leading-7 text-[#061A45]">
                    “{testimonial.quote}”
                  </p>
                </div>

                <div className="relative mt-7 flex items-center gap-3 border-t border-[#D9E6FA] pt-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#1769FF] via-[#159FE8] to-[#6D4AFF] text-xs font-bold text-white shadow-[0_7px_18px_rgba(23,105,255,0.24)]">
                    {getInitials(testimonial.name)}
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-[#061A45]">
                      {testimonial.name}
                    </p>

                    <p className="mt-0.5 truncate text-xs text-[#61708A]">
                      {testimonial.role}
                      <span className="mx-1.5 text-[#61708A]/50">•</span>
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </motion.div>
      </div>

      <p className="relative mx-auto mt-6 max-w-7xl px-6 text-center text-xs text-[#61708A]/75">
        Hover over the reviews to pause the animation.
      </p>
    </section>
  );
}
"use client";

import { motion, useAnimation, useReducedMotion } from "framer-motion";
import { Quote, Sparkles, Star } from "lucide-react";
import { useEffect } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "Growth Marketing Agency",
    quote:
      "Humne DevHatch Labs ke sath apna inbound lead qualification flow automate kiya. System ab 24/7 chal raha hai aur hum pehle se 3x zyada leads handle kar rahe hain bina team ka size barhaye. Internal bottlenecks bilkul khatam ho chuke hain.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "CTO",
    company: "SaaS Startup",
    quote:
      "Inka custom RAG integration kamaal ka hai. Humare internal Slack aur documentation ko LLM se connect karne ke baad, customer support tickets direct 60% drop ho gaye. Sab se best cheez data privacy aur instant response time hai.",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "Founder",
    company: "Real Estate Group",
    quote:
      "Hum cold outreach aur follow-ups par bohot time waste kar rahe the. DevHatch ke Agentic AI workflows setup karne ke baad hamara appointment booking rate seedha 20% se jump kar ke 80% par chala gaya hai. It's literally printing money.",
    rating: 5,
  },
  {
    name: "Amara Okafor",
    role: "Operations Director",
    company: "Logistics Sync",
    quote:
      "Manual data entry aur invoice matching hamara bohot time leti thi. Inho ne AI agents ke zariye pura ERP automation workflow design kiya jis se hamara monthly processing time 40 ghante se kam ho kar sirf 15 minutes reh gaya.",
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

  const startMarquee = () => {
    if (shouldReduceMotion) {
      marqueeControls.set({ x: "0%" });
      return;
    }

    marqueeControls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: 46,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  };

  useEffect(() => {
    startMarquee();
  }, [shouldReduceMotion]);

  return (
    <section className="relative overflow-hidden bg-[#F6F9FF] py-20 md:py-28">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(23,105,255,0.07),transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-20 -z-10 h-80 w-80 rounded-full bg-[#1769FF]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 -z-10 h-80 w-80 rounded-full bg-[#6D4AFF]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={transition}
            className="inline-flex items-center gap-2 rounded-full border border-[#D9E6FA] bg-white px-4 py-1.5 text-xs font-semibold text-[#1769FF] shadow-sm"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Client Results
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ ...transition, delay: 0.08 }}
            className="mt-5 text-3xl font-bold tracking-tight text-[#061A45] sm:text-4xl"
          >
            Trusted by teams who{" "}
            <span className="bg-gradient-to-r from-[#1769FF] via-[#159FE8] to-[#6D4AFF] bg-clip-text text-transparent">
              measure what matters.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ ...transition, delay: 0.16 }}
            className="mt-4 text-base leading-relaxed text-[#61708A]"
          >
            Practical AI systems, clear workflows, and focused engineering for
            businesses ready to scale intelligently.
          </motion.p>
        </div>
      </div>

      {/* Testimonial marquee */}
      <div className="relative mt-14 overflow-hidden md:mt-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#F6F9FF] to-transparent sm:w-28"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#F6F9FF] to-transparent sm:w-28"
        />

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
                className="flex w-[320px] shrink-0 flex-col justify-between rounded-2xl border border-[#D9E6FA] bg-white p-6 shadow-[0_10px_35px_rgba(23,105,255,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#1769FF]/35 hover:shadow-[0_18px_40px_rgba(23,105,255,0.14)] sm:w-[410px] sm:p-8"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
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

                    <Quote className="h-6 w-6 rotate-180 text-[#1769FF]/20" />
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-[#061A45]">
                    “{testimonial.quote}”
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-3 border-t border-[#D9E6FA] pt-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#1769FF] to-[#6D4AFF] text-xs font-bold text-white shadow-[0_6px_18px_rgba(23,105,255,0.22)]">
                    {getInitials(testimonial.name)}
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-[#061A45]">
                      {testimonial.name}
                    </p>
                    <p className="truncate text-xs text-[#61708A]">
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
    </section>
  );
}
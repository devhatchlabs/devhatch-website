"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Code2,
  Database,
  Eye,
  HeartHandshake,
  Lightbulb,
  Rocket,
  Sparkles,
  Target,
  Users,
  Workflow,
} from "lucide-react";

const team = [
  {
    name: "Saim Iftikhar",
    role: "Founder & CEO",
    initials: "SI",
    image: "/images/team/saim.png",
    focus:
  "Strategy, AI systems direction, client consultations, sales leadership, and technical oversight.",
skills: ["AI Systems Strategy", "RAG & LLM Integration", "Product Development"],
featured: true,
  },
  {
    name: "Sara Manzoor",
    role: "Chief Operating Officer",
    initials: "SM",
    image: "/images/team/sara.png",
    focus:
      "Operations, team coordination, performance monitoring, and internal systems.",
    skills: ["Operations", "Delivery", "Team Coordination"],
    featured: false,
  },
  {
    name: "Aribah Qandeel",
    role: "Business Development Executive",
    initials: "AQ",
    image: "/images/team/aribah.png",
    focus:
      "Lead generation, outreach, CRM management, relationship building, and client communication.",
    skills: ["Lead Generation", "Outreach", "CRM"],
    featured: false,
  },
  {
    name: "Malik Saad Ahmed",
    role: "AI Engineering Intern",
    initials: "MS",
    image: "/images/team/saad.png",
    focus:
      "AI development, prompt engineering, automation workflows, and technical solutions.",
    skills: ["AI Development", "Automation", "Prompt Engineering"],
    featured: false,
  },
];

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "Build practical AI solutions that create measurable business impact.",
    gradient: "from-[#1769FF] to-[#159FE8]",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "Lead AI adoption through practical, scalable, and affordable implementations.",
    gradient: "from-[#6D4AFF] to-[#159FE8]",
  },
  {
    icon: HeartHandshake,
    title: "Our Promise",
    description:
      "No bloated proposals or vague roadmaps, just working systems built around your business.",
    gradient: "from-[#14C8E8] to-[#1769FF]",
  },
];

const capabilities = [
  {
    icon: Database,
    title: "RAG Knowledge Systems",
    description:
      "AI knowledge systems that use approved documents, FAQs, and internal information to generate useful answers.",
    tags: ["Knowledge Search", "Documents", "LLM Integration"],
  },
  {
    icon: Workflow,
    title: "Agentic AI Systems",
    description:
      "Intelligent AI agents designed to reason through structured tasks and support repeatable business workflows.",
    tags: ["AI Agents", "Automation", "Tool Use"],
  },
  {
    icon: Code2,
    title: "Custom Software",
    description:
      "Modern web applications, dashboards, integrations, and internal systems built around your real requirements.",
    tags: ["Web Apps", "Dashboards", "Integrations"],
  },
];

const principles = [
  {
    icon: Users,
    title: "Start with the problem",
    description:
      "We understand the business workflow before choosing the technology.",
  },
  {
    icon: Code2,
    title: "Build with focus",
    description:
      "We create systems that fit real teams, processes, and goals.",
  },
  {
    icon: Sparkles,
    title: "Improve through use",
    description:
      "We refine the solution using feedback from the people who use it.",
  },
];

const values = [
  {
    title: "Ownership",
    description:
      "We take responsibility for the work, the result, and the improvements that follow.",
  },
  {
    title: "Professionalism",
    description:
      "We communicate clearly, respect timelines, and represent DevHatch Labs with excellence.",
  },
  {
    title: "Continuous Learning",
    description:
      "AI evolves quickly, so we remain curious and improve our craft continuously.",
  },
];

function TeamPhoto({
  name,
  image,
  initials,
  featured = false,
}: {
  name: string;
  image: string;
  initials: string;
  featured?: boolean;
}) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-2xl border border-[#D9E6FA] bg-gradient-to-br from-[#1769FF] via-[#159FE8] to-[#6D4AFF] shadow-[0_12px_28px_rgba(23,105,255,0.18)] ${
        featured ? "h-24 w-24" : "h-16 w-16"
      }`}
    >
      <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white">
        {initials}
      </span>

      {!imageFailed && (
        <Image
          src={image}
          alt={`${name} — DevHatch Labs`}
          fill
          sizes={featured ? "96px" : "64px"}
          className="object-cover"
          onError={() => setImageFailed(true)}
        />
      )}
    </div>
  );
}

function GalleryPhoto({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-[#D9E6FA] bg-[#EEF5FF] shadow-[0_12px_28px_rgba(23,105,255,0.10)] ${className}`}
    >
      {!imageFailed ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 90vw, 420px"
          className="object-cover transition-transform duration-500 hover:scale-105"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#1769FF] via-[#159FE8] to-[#6D4AFF] p-4 text-center text-xs font-semibold text-white">
          DevHatch Labs
        </div>
      )}
    </div>
  );
}

function FounderGallery() {
  const slides = [
    {
      src: "/images/founder/journey-01.png",
      alt: "Saim Iftikhar recognized as an ambassador at an event",
    },
    {
      src: "/images/founder/journey-02.png",
      alt: "Saim Iftikhar presenting recognition at an event",
    },
    {
      src: "/images/founder/journey-03.png",
      alt: "Saim Iftikhar working on a laptop during an event",
    },
    {
      src: "/images/founder/journey-04.png",
      alt: "Saim Iftikhar taking part in a DevFest learning session",
    },
    {
      src: "/images/founder/journey-05.png",
      alt: "DevHatch Labs workshop and conference environment",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
      setImageFailed(false);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  const previousSlide = () => {
    setActiveSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1,
    );
    setImageFailed(false);
  };

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
    setImageFailed(false);
  };

  const currentSlide = slides[activeSlide];

  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="relative h-[300px] overflow-hidden rounded-3xl border border-[#D9E6FA] bg-[#EEF5FF] shadow-[0_18px_40px_rgba(23,105,255,0.14)] sm:h-[370px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.src}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="absolute inset-0"
          >
            {!imageFailed ? (
              <Image
                src={currentSlide.src}
                alt={currentSlide.alt}
                fill
                priority={activeSlide === 0}
                sizes="(max-width: 1024px) 90vw, 450px"
                className="object-cover"
                onError={() => setImageFailed(true)}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#1769FF] via-[#159FE8] to-[#6D4AFF] p-8 text-center text-sm font-semibold text-white">
                Image not found: {currentSlide.src}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#061A45]/75 to-transparent" />

        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/75">
              Founder Journey
            </p>

            <p className="mt-1 text-sm font-bold text-white">
              Building through learning, community, and execution.
            </p>
          </div>

          <span className="shrink-0 rounded-full bg-white/20 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
            {activeSlide + 1} / {slides.length}
          </span>
        </div>

        <button
          type="button"
          onClick={previousSlide}
          aria-label="Show previous founder photo"
          className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-[#061A45]/45 text-lg font-bold text-white backdrop-blur-sm transition hover:bg-[#1769FF]"
        >
          ←
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Show next founder photo"
          className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-[#061A45]/45 text-lg font-bold text-white backdrop-blur-sm transition hover:bg-[#1769FF]"
        >
          →
        </button>
      </div>

      <div className="mt-5 flex justify-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Show founder photo ${index + 1}`}
            onClick={() => {
              setActiveSlide(index);
              setImageFailed(false);
            }}
            className={`h-2.5 rounded-full transition-all ${
              activeSlide === index
                ? "w-7 bg-[#1769FF]"
                : "w-2.5 bg-[#D9E6FA] hover:bg-[#159FE8]"
            }`}
          />
        ))}
      </div>

      <p className="mt-4 text-center text-xs font-semibold text-[#1769FF]">
        Building practical AI systems
      </p>
    </div>
  );
}

export default function AboutPage() {
  const founder = team.find((member) => member.featured);
  const otherTeamMembers = team.filter((member) => !member.featured);

  return (
    <main className="relative overflow-hidden bg-white pb-24 pt-28 md:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_82%_60%_at_50%_-10%,rgba(23,105,255,0.08),transparent_62%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 -top-16 -z-10 h-80 w-80 rounded-full bg-[#1769FF]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-28 -z-10 h-80 w-80 rounded-full bg-[#6D4AFF]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <section className="grid gap-10 border-b border-[#D9E6FA] pb-16 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D9E6FA] bg-[#EEF5FF] px-4 py-1.5 text-xs font-semibold text-[#1769FF]">
              <Sparkles className="h-3.5 w-3.5" />
              About DevHatch Labs
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-[#061A45] sm:text-5xl lg:text-6xl">
              A small team, built to move at{" "}
              <span className="bg-gradient-to-r from-[#1769FF] via-[#159FE8] to-[#6D4AFF] bg-clip-text text-transparent">
                founder speed.
              </span>
            </h1>
          </div>

          <div className="lg:col-span-5">
            <p className="text-base leading-relaxed text-[#61708A] sm:text-lg">
              DevHatch Labs is an AI-powered technology company helping
              startups, agencies, and growing businesses automate operations,
              improve customer engagement, and scale through intelligent
              software.
            </p>
          </div>
        </section>

        <section className="border-b border-[#D9E6FA] py-16 md:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#61708A]">
            What We Stand For
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <motion.article
                  key={pillar.title}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-2xl border border-[#D9E6FA] bg-white p-7 shadow-[0_10px_35px_rgba(23,105,255,0.05)]"
                >
                  <div
                    className={`inline-flex rounded-xl bg-gradient-to-br ${pillar.gradient} p-3 text-white shadow-[0_8px_18px_rgba(23,105,255,0.20)]`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <h2 className="mt-5 text-lg font-bold text-[#061A45]">
                    {pillar.title}
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-[#61708A]">
                    {pillar.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="border-b border-[#D9E6FA] py-16 md:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#61708A]">
              Core Capabilities
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#061A45] sm:text-4xl">
              Practical systems, built for{" "}
              <span className="bg-gradient-to-r from-[#1769FF] to-[#6D4AFF] bg-clip-text text-transparent">
                real operations.
              </span>
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <motion.article
                  key={capability.title}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-2xl border border-[#D9E6FA] bg-white p-6 shadow-[0_10px_35px_rgba(23,105,255,0.05)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF5FF] text-[#1769FF]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-[#061A45]">
                    {capability.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#61708A]">
                    {capability.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2 border-t border-[#D9E6FA] pt-4">
                    {capability.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-[#EEF5FF] px-2.5 py-1 text-[10px] font-semibold text-[#61708A]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="border-b border-[#D9E6FA] py-16 md:py-20">
          <div className="grid gap-8 rounded-3xl border border-[#D9E6FA] bg-gradient-to-br from-[#F8FBFF] via-white to-[#EEF5FF] p-7 shadow-[0_18px_48px_rgba(23,105,255,0.07)] lg:grid-cols-[0.85fr_1.5fr] lg:items-center lg:p-10">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#D9E6FA] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#1769FF]">
                <Lightbulb className="h-3.5 w-3.5" />
                How We Think
              </span>

              <h2 className="mt-5 text-2xl font-bold tracking-tight text-[#061A45] sm:text-3xl">
                Practical AI. Built around{" "}
                <span className="bg-gradient-to-r from-[#1769FF] to-[#6D4AFF] bg-clip-text text-transparent">
                  your business.
                </span>
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-[#61708A]">
                We begin with the business problem, build a focused system
                around real workflows, and improve it based on feedback from
                the people who use it.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {principles.map((principle) => {
                const Icon = principle.icon;

                return (
                  <article
                    key={principle.title}
                    className="rounded-2xl border border-[#D9E6FA] bg-white p-5 shadow-sm"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF5FF] text-[#1769FF]">
                      <Icon className="h-4 w-4" />
                    </div>

                    <h3 className="mt-4 text-sm font-bold text-[#061A45]">
                      {principle.title}
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed text-[#61708A]">
                      {principle.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {founder && (
          <section className="border-b border-[#D9E6FA] py-16 md:py-20">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#D9E6FA] bg-[#EEF5FF] px-4 py-1.5 text-xs font-semibold text-[#1769FF]">
                  <Rocket className="h-3.5 w-3.5" />
                  Founder Spotlight
                </span>

                <div className="mt-7 flex items-start gap-5">
                  <TeamPhoto
                    name={founder.name}
                    image={founder.image}
                    initials={founder.initials}
                    featured
                  />

                  <div>
                    <h2 className="text-3xl font-bold tracking-tight text-[#061A45]">
                      {founder.name}
                    </h2>

                    <p className="mt-1 text-sm font-semibold text-[#1769FF]">
                      {founder.role}
                    </p>
                  </div>
                </div>

                <p className="mt-7 max-w-xl text-base leading-relaxed text-[#61708A]">
                  Saim Iftikhar leads DevHatch Labs with a focus on practical
                  AI systems, RAG applications, automation workflows, and
                  custom software that solve real business problems.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {founder.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-[#EEF5FF] px-3 py-1.5 text-xs font-semibold text-[#61708A]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#1769FF] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(23,105,255,0.28)] transition-all hover:-translate-y-0.5 hover:bg-[#159FE8]"
                >
                  Work with DevHatch Labs
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>

              <FounderGallery />
            </div>
          </section>
        )}

        <section className="border-b border-[#D9E6FA] py-16 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D9E6FA] bg-white px-4 py-1.5 text-xs font-semibold text-[#1769FF] shadow-sm">
              <Users className="h-3.5 w-3.5" />
              The Team
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#061A45] sm:text-4xl">
              Work directly with the people{" "}
              <span className="bg-gradient-to-r from-[#1769FF] to-[#6D4AFF] bg-clip-text text-transparent">
                building your system.
              </span>
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {otherTeamMembers.map((member) => (
              <motion.article
                key={member.name}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl border border-[#D9E6FA] bg-white p-6 shadow-[0_10px_32px_rgba(23,105,255,0.05)]"
              >
                <TeamPhoto
                  name={member.name}
                  image={member.image}
                  initials={member.initials}
                />

                <h3 className="mt-5 text-base font-bold text-[#061A45]">
                  {member.name}
                </h3>

                <p className="mt-1 text-sm font-semibold text-[#1769FF]">
                  {member.role}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-[#61708A]">
                  {member.focus}
                </p>

                <div className="mt-5 flex flex-wrap gap-2 border-t border-[#D9E6FA] pt-4">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-[#EEF5FF] px-2.5 py-1 text-[10px] font-semibold text-[#61708A]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="py-16 md:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#61708A]">
            Company Philosophy
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#061A45] sm:text-4xl">
            How we build our company.
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-2xl border border-[#D9E6FA] bg-[#F8FBFF] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#1769FF]/30 hover:bg-white"
              >
                <h3 className="text-sm font-bold text-[#1769FF]">
                  {value.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-[#61708A]">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="pb-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#D9E6FA] bg-[#EEF5FF] px-4 py-1.5 text-xs font-semibold text-[#1769FF]">
            <Sparkles className="h-3.5 w-3.5" />
            Let&apos;s build something useful
          </span>

          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold tracking-tight text-[#061A45] sm:text-4xl">
            Have an idea worth{" "}
            <span className="bg-gradient-to-r from-[#1769FF] via-[#159FE8] to-[#6D4AFF] bg-clip-text text-transparent">
              building?
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#61708A]">
            Let&apos;s discuss the workflow, product, or AI system that can
            move your business forward.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#1769FF] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(23,105,255,0.30)] transition-all hover:-translate-y-0.5 hover:bg-[#159FE8]"
            >
              Book a Discovery Call
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D9E6FA] bg-white px-7 py-3.5 text-sm font-semibold text-[#061A45] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#1769FF] hover:bg-[#EEF5FF]"
            >
              Explore Our Services
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
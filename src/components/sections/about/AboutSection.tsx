"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  HeartHandshake,
  Mail,
  Sparkles,
  Target,
  Users,
  Eye,
} from "lucide-react";
import { useState } from "react";

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "Build practical AI solutions that create measurable business impact.",
    iconClass: "from-[#1769FF] to-[#159FE8]",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "Lead AI adoption through practical, scalable, and affordable implementations.",
    iconClass: "from-[#6D4AFF] to-[#159FE8]",
  },
  {
    icon: HeartHandshake,
    title: "Our Promise",
    description:
      "No bloated proposals or vague roadmaps, just working systems built around your business.",
    iconClass: "from-[#14C8E8] to-[#1769FF]",
  },
];

const teamMembers = [
  {
    name: "Saim Iftikhar",
    role: "Founder & CEO",
    focus: "Strategy, AI direction, client relationships, and technical oversight.",
    initials: "SI",
    image: "/images/team/saim.png",
    featured: true,
  },
  {
    name: "Sara Manzoor",
    role: "Chief Operating Officer",
    focus: "Operations, team coordination, performance monitoring, and internal systems.",
    initials: "SM",
    image: "/images/team/sara.png",
  },
  {
    name: "Ariba Qandeel",
    role: "Business Development Executive",
    focus: "Lead generation, outreach, CRM management, and client communication.",
    initials: "AQ",
    image: "/images/team/aribah.png",
  },
  {
    name: "Malik Saad Ahmed",
    role: "AI Engineering Intern",
    focus: "AI development, prompt engineering, automation, and technical solutions.",
    initials: "MS",
    image: "/images/team/saad.png",
  },
];

const workingPrinciples = [
  {
    icon: Users,
    title: "Direct collaboration",
    description:
      "You work directly with the people thinking through and building the system.",
  },
  {
    icon: Code2,
    title: "Focused execution",
    description:
      "We start with the business problem, then build the technology around it.",
  },
  {
    icon: Sparkles,
    title: "Practical AI",
    description:
      "We prioritize systems your team can actually use, improve, and scale.",
  },
];

const transition = {
  duration: 0.55,
  ease: [0.16, 1, 0.3, 1] as const,
};

function TeamAvatar({
  name,
  initials,
  image,
}: {
  name: string;
  initials: string;
  image: string;
}) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-[#D9E6FA] bg-gradient-to-br from-[#1769FF] to-[#6D4AFF] text-xl font-bold text-white shadow-[0_10px_24px_rgba(23,105,255,0.18)]">
      <span aria-hidden="true">{initials}</span>

      {!imageFailed && (
        <img
          src={image}
          alt={name}
          onError={() => setImageFailed(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
    </div>
  );
}

export default function AboutSection() {
  const founder = teamMembers.find((member) => member.featured);
  const team = teamMembers.filter((member) => !member.featured);

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_58%_at_50%_-10%,rgba(23,105,255,0.07),transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-16 -z-10 h-80 w-80 rounded-full bg-[#14C8E8]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 -z-10 h-80 w-80 rounded-full bg-[#6D4AFF]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={transition}
            className="inline-flex items-center gap-2 rounded-full border border-[#D9E6FA] bg-[#EEF5FF] px-4 py-1.5 text-xs font-semibold text-[#1769FF]"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Inside DevHatch Labs
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ ...transition, delay: 0.08 }}
            className="mt-5 text-3xl font-bold tracking-tight text-[#061A45] sm:text-4xl lg:text-5xl"
          >
            A focused team, built to move at{" "}
            <span className="bg-gradient-to-r from-[#1769FF] via-[#159FE8] to-[#6D4AFF] bg-clip-text text-transparent">
              founder speed.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ ...transition, delay: 0.16 }}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#61708A] sm:text-lg"
          >
            DevHatch Labs is an AI-powered technology company helping startups,
            agencies, and growing businesses automate operations, improve
            customer engagement, and scale through intelligent software.
          </motion.p>
        </div>

        {/* Mission / Vision / Promise */}
        <div className="mt-14 grid gap-5 sm:grid-cols-3 md:mt-20">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  ...transition,
                  delay: index * 0.08,
                }}
                className="group relative overflow-hidden rounded-2xl border border-[#D9E6FA] bg-white p-7 shadow-[0_10px_35px_rgba(23,105,255,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1769FF]/35 hover:shadow-[0_20px_44px_rgba(23,105,255,0.13)]"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#1769FF]/0 via-[#159FE8]/0 to-[#6D4AFF]/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                <div
                  className={`relative inline-flex rounded-xl bg-gradient-to-br ${pillar.iconClass} p-3 text-white shadow-[0_8px_18px_rgba(23,105,255,0.2)]`}
                >
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="relative mt-5 text-lg font-bold tracking-tight text-[#061A45]">
                  {pillar.title}
                </h3>

                <p className="relative mt-3 text-sm leading-relaxed text-[#61708A]">
                  {pillar.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* How we work */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={transition}
          className="mt-16 rounded-3xl border border-[#D9E6FA] bg-gradient-to-br from-[#F8FBFF] via-white to-[#EEF5FF] p-7 shadow-[0_18px_50px_rgba(23,105,255,0.07)] md:mt-20 md:p-10"
        >
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.6fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#D9E6FA] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#1769FF] shadow-sm">
                <Code2 className="h-3.5 w-3.5" />
                How We Think
              </span>

              <h3 className="mt-5 text-2xl font-bold tracking-tight text-[#061A45] sm:text-3xl">
                Practical AI, built around{" "}
                <span className="bg-gradient-to-r from-[#1769FF] to-[#6D4AFF] bg-clip-text text-transparent">
                  your business.
                </span>
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-[#61708A]">
                We keep the work focused: understand what is slowing your team
                down, build the right system, then improve it based on real
                usage and feedback.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {workingPrinciples.map((principle, index) => {
                const Icon = principle.icon;

                return (
                  <motion.div
                    key={principle.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      ...transition,
                      delay: 0.12 + index * 0.08,
                    }}
                    className="rounded-2xl border border-[#D9E6FA] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#1769FF]/30"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF5FF] text-[#1769FF]">
                      <Icon className="h-4.5 w-4.5" />
                    </div>

                    <h4 className="mt-4 text-sm font-bold text-[#061A45]">
                      {principle.title}
                    </h4>

                    <p className="mt-2 text-xs leading-relaxed text-[#61708A]">
                      {principle.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Founder */}
        {founder && (
          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={transition}
            className="mt-16 overflow-hidden rounded-3xl border border-[#D9E6FA] bg-white p-7 shadow-[0_18px_50px_rgba(23,105,255,0.08)] md:mt-20 md:p-10"
          >
            <div className="grid gap-8 lg:grid-cols-[auto_1fr_auto] lg:items-center">
              <TeamAvatar
                name={founder.name}
                initials={founder.initials}
                image={founder.image}
              />

              <div>
                <span className="inline-flex rounded-full bg-[#EEF5FF] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#1769FF]">
                  Founder Spotlight
                </span>

                <h3 className="mt-4 text-2xl font-bold tracking-tight text-[#061A45]">
                  {founder.name}
                </h3>

                <p className="mt-1 text-sm font-semibold text-[#1769FF]">
                  {founder.role}
                </p>

                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#61708A]">
                  Saim Iftikhar leads DevHatch Labs with a focus on practical AI
                  systems, RAG applications, automation workflows, and custom
                  software that solve real business problems.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1769FF] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(23,105,255,0.25)] transition-all hover:-translate-y-0.5 hover:bg-[#159FE8]"
              >
                Get in touch
                <Mail className="h-4 w-4" />
              </Link>
            </div>
          </motion.article>
        )}

        {/* Team */}
        <div className="mt-16 md:mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D9E6FA] bg-white px-4 py-1.5 text-xs font-semibold text-[#1769FF] shadow-sm">
              <Users className="h-3.5 w-3.5" />
              The Team
            </span>

            <h3 className="mt-4 text-2xl font-bold tracking-tight text-[#061A45] sm:text-3xl">
              Work directly with the people{" "}
              <span className="bg-gradient-to-r from-[#1769FF] to-[#6D4AFF] bg-clip-text text-transparent">
                building your system.
              </span>
            </h3>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {team.map((member, index) => (
              <motion.article
                key={member.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  ...transition,
                  delay: index * 0.08,
                }}
                className="group rounded-2xl border border-[#D9E6FA] bg-white p-6 shadow-[0_10px_30px_rgba(23,105,255,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1769FF]/35 hover:shadow-[0_20px_42px_rgba(23,105,255,0.12)]"
              >
                <TeamAvatar
                  name={member.name}
                  initials={member.initials}
                  image={member.image}
                />

                <h4 className="mt-5 text-base font-bold tracking-tight text-[#061A45]">
                  {member.name}
                </h4>

                <p className="mt-1 text-sm font-semibold text-[#1769FF]">
                  {member.role}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-[#61708A]">
                  {member.focus}
                </p>
              </motion.article>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={transition}
          className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl border border-[#D9E6FA] bg-gradient-to-r from-[#EEF5FF] via-white to-[#F6F2FF] p-8 text-center shadow-[0_16px_44px_rgba(23,105,255,0.07)] md:mt-20 md:flex-row md:p-10 md:text-left"
        >
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-[#061A45]">
              Have an idea worth building?
            </h3>

            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#61708A]">
              Let&apos;s discuss the workflow, product, or AI system that can
              move your business forward.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#1769FF] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_26px_rgba(23,105,255,0.28)] transition-all hover:-translate-y-0.5 hover:bg-[#159FE8]"
          >
            Book a Discovery Call
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
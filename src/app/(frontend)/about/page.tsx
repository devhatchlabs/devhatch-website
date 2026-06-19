import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, ChevronRight, ExternalLink,
  Target, Lightbulb, Shield, Handshake,
  BookOpen, GraduationCap, TrendingUp,
  Rocket, Eye, Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "About | DevHatch Labs",
  description:
    "DevHatch Labs is an early-stage AI startup building chatbots, automation systems, and full-stack products. Meet the team behind it.",
};

const values = [
  {
    icon: Target,
    title: "Outcomes over features",
    description:
      "We scope every project around what changes for the client when it ships — not a list of things we built. If it doesn't move a number, we question whether it should be in scope.",
  },
  {
    icon: Shield,
    title: "Honest over impressive",
    description:
      "We'll tell you when AI isn't the right solution. We'd rather walk away from a project than oversell a tool that won't deliver. Our reputation is worth more than any single contract.",
  },
  {
    icon: Lightbulb,
    title: "Engineered, not assembled",
    description:
      "We build systems from the right primitives for the problem — not whichever template is trending. Every architecture decision has a reason we can explain in plain English.",
  },
  {
    icon: Handshake,
    title: "Partner, not vendor",
    description:
      "You get direct access to the people writing the code, not an account manager relaying messages. We move like a co-founder on your project, not a contractor on a ticket queue.",
  },
];

const milestones = [
  {
    date: "Late 2025",
    title: "DevHatch Labs founded",
    detail: "Saim and Sara formalized the partnership: 50/50 revenue split, shared brand identity, and a single goal — build AI products that actually ship.",
  },
  {
    date: "Early 2026",
    title: "Brand, infrastructure, and team",
    detail: "Domain purchased, all business emails set up, full platform presence across LinkedIn, GitHub, Fiverr, Upwork, and WhatsApp Business. Areeba (BD) and Malik (AI Engineering) joined.",
  },
  {
    date: "2026",
    title: "First portfolio project shipped",
    detail: "Pizza Palace AI Chatbot — LangChain + Groq backend confirmed working, React frontend built, deployed as a live demo embedded on the homepage.",
  },
  {
    date: "Now",
    title: "First client conversations active",
    detail: "Discussions underway with Tech Aur Code Solutions (AI partnership), FLozenAI (collaboration), and a potential computer vision warehouse project.",
  },
  {
    date: "Next",
    title: "Phase 2 — Retainer clients",
    detail: "First paying clients, case studies on the Work page, and the client portal in development.",
  },
];

const team = [
  {
    initials: "SI",
    name: "Saim Iftikhar",
    title: "Founder & CEO",
    bio: "AI & Web Engineer with a focus on building production AI systems using LangChain, Groq, and the MERN stack. President of the BIIT AI Society — organized university seminars on AI tools and trends for students. Doing Business Development at DevRolin while building DevHatch.",
    credentials: [
      { icon: GraduationCap, text: "President, BIIT AI Society" },
      { icon: BookOpen, text: "Hunarmand Punjab Full Stack Program" },
      { icon: TrendingUp, text: "BD Intern, DevRolin" },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/DevSaimX" },
      { label: "LinkedIn", href: "https://linkedin.com/in/saim-iftikhar-a4ab6334b" },
    ],
  },
  {
    initials: "SM",
    name: "Sara Manzoor",
    title: "COO",
    bio: "Full-stack developer specializing in React, Tailwind, Bootstrap, Flask, and MySQL. Handles operations, business development, and client management at DevHatch. Built the chatbot frontend rated 9.5/10 for UI quality.",
    credentials: [
      { icon: Eye, text: "React · Flask · MySQL · Tailwind" },
      { icon: Heart, text: "Operations & Client Management" },
      { icon: Rocket, text: "Co-architect of DevHatch's brand" },
    ],
    links: [],
  },
  {
    initials: "AQ",
    name: "Areeba Qandeel",
    title: "Business Development Executive",
    bio: "Leads outbound sales — LinkedIn and email outreach, lead qualification, discovery call booking, and CRM management. Commission-based with full-time BD focus.",
    credentials: [
      { icon: Target, text: "Lead generation & outreach" },
      { icon: Handshake, text: "Discovery call booking & CRM" },
      { icon: TrendingUp, text: "Commission-based, growth-focused" },
    ],
    links: [],
  },
  {
    initials: "SH",
    name: "Sana Hameed",
    title: "Business Development Intern",
    bio: "Supports the BD pipeline with lead research, prospect data collection, and CRM updates. Learning the full outbound sales process from inside a growing AI startup.",
    credentials: [
      { icon: BookOpen, text: "Lead research & data collection" },
      { icon: Eye, text: "CRM updates & pipeline support" },
    ],
    links: [],
  },
  {
    initials: "MS",
    name: "Malik Saad Ahmed",
    title: "AI Engineering Intern",
    bio: "AI development, prompt engineering, and automation support. Working directly on live DevHatch projects to build a serious AI engineering portfolio.",
    credentials: [
      { icon: Lightbulb, text: "AI Development & Prompt Engineering" },
      { icon: Rocket, text: "Automation support" },
    ],
    links: [],
  },
];

const phases = [
  { phase: "01", label: "Now", title: "Freelance & Portfolio", detail: "First clients via Fiverr, Upwork, and direct outreach. Every project adds a real case study." },
  { phase: "02", label: "Next", title: "Retainer Clients", detail: "Monthly retainer relationships with 3–5 businesses. Predictable revenue, deeper partnerships." },
  { phase: "03", label: "Future", title: "SaaS Products", detail: "Our own AI-powered SaaS products built on insights from client work." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(37,99,235,0.12) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div aria-hidden className="pointer-events-none absolute -top-32 right-1/3 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mb-6 flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="size-3" />
            <span className="text-foreground">About</span>
          </div>
          <p className="mb-4 font-mono text-xs font-medium uppercase tracking-widest text-primary">About Us</p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            We build AI systems.<br /><span className="text-primary">We ship them.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            DevHatch Labs is an early-stage AI startup. Small team, senior output, zero hand-waving about "the future of AI" — just working systems delivered on time.
          </p>
        </div>
      </section>

      {/* Origin + Values */}
      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="mb-4 font-mono text-xs font-medium uppercase tracking-widest text-primary">Why DevHatch Exists</p>
              <h2 className="text-3xl font-bold tracking-tight">Built from inside the problem</h2>
              <div className="mt-6 flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground">
                <p>Most businesses know AI could help them, but the path from "I've heard about ChatGPT" to "I have a working system in my workflow" is full of agencies that overpromise, developers who disappear after MVP, and tools that require a full-time engineer to maintain.</p>
                <p>We started DevHatch to be the answer to that gap — a small, technical team that can take a business from "we have a problem" to "we have a working AI system" in weeks, not quarters.</p>
                <p>We're early-stage. We won't pretend otherwise. But that means you get the founders writing your code, not a junior contractor two layers removed from the people who took your call.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.title} className="rounded-xl border border-border bg-card p-5">
                    <div className="mb-3 flex size-8 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="size-4 text-primary" />
                    </div>
                    <h3 className="text-sm font-semibold">{v.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{v.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-secondary/30 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-primary">The Team</p>
          <h2 className="max-w-xl text-3xl font-bold tracking-tight md:text-4xl">The people you&apos;re actually working with</h2>
          <p className="mt-4 max-w-xl text-muted-foreground">No anonymous "team of experts." Real names, real roles, real credentials.</p>

          {/* Founders */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {team.slice(0, 2).map((member) => (
              <div key={member.name} className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-start gap-4">
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary/10 font-mono text-base font-bold text-primary">{member.initials}</div>
                  <div className="flex-1">
                    <p className="font-semibold">{member.name}</p>
                    <p className="font-mono text-xs text-primary">{member.title}</p>
                    <Badge variant="outline" className="mt-1 font-mono text-xs">Founding Team</Badge>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
                <ul className="mt-4 flex flex-col gap-2">
                  {member.credentials.map((c) => {
                    const Icon = c.icon;
                    return (
                      <li key={c.text} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Icon className="size-3.5 shrink-0 text-primary" />{c.text}
                      </li>
                    );
                  })}
                </ul>
                {member.links.length > 0 && (
                  <div className="mt-4 flex items-center gap-4">
                    {member.links.map((link) => (
                      <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 font-mono text-xs text-muted-foreground hover:text-foreground">
                        {link.label} <ExternalLink className="size-3" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Rest of team */}
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {team.slice(2).map((member) => (
              <div key={member.name} className="rounded-xl border border-border bg-card p-5">
                <div className="mb-3 flex size-10 items-center justify-center rounded-full bg-primary/10 font-mono text-sm font-bold text-primary">{member.initials}</div>
                <p className="font-semibold">{member.name}</p>
                <p className="mt-0.5 font-mono text-xs text-primary">{member.title}</p>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{member.bio}</p>
                <ul className="mt-3 flex flex-col gap-1.5">
                  {member.credentials.map((c) => {
                    const Icon = c.icon;
                    return (
                      <li key={c.text} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Icon className="size-3 shrink-0 text-primary" />{c.text}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BIIT AI Society */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <div className="border-b border-border bg-secondary/50 px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10">
                  <GraduationCap className="size-4 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">BIIT AI Society</p>
                  <p className="font-mono text-xs text-muted-foreground">BIIT University · Saim Iftikhar, President</p>
                </div>
              </div>
            </div>
            <div className="grid gap-6 p-6 md:grid-cols-2">
              <div>
                <h3 className="mb-3 text-lg font-semibold">Community before company</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">Before DevHatch, Saim was organizing AI seminars and workshops at BIIT University — bringing real tools, real workflows, and honest career guidance to students navigating an AI-saturated job market.</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Most recent event: "AI in 2026: Tools, Trends & How Students Can Win" — a full seminar with a custom landing page, 21-slide presentation deck, and live demos.</p>
              </div>
              <div>
                <h3 className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">Why this matters to you as a client</h3>
                <ul className="flex flex-col gap-3">
                  {[
                    "Saim teaches AI tools — he knows what works vs. what's hype",
                    "Running a society means running operations, events, and teams — not just writing code",
                    "Community credibility is accountability — a bad product is public",
                    "Direct pipeline to emerging AI talent for future team growth",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <ChevronRight className="mt-0.5 size-3.5 shrink-0 text-primary" />{point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phases + Timeline */}
      <section className="bg-secondary/30 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-primary">Where We&apos;re Going</p>
          <h2 className="max-w-xl text-3xl font-bold tracking-tight md:text-4xl">Three phases. We&apos;re in phase one.</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {phases.map((phase) => (
              <div key={phase.phase} className="relative rounded-xl border border-border bg-card p-6">
                {phase.label === "Now" && (
                  <div className="absolute right-4 top-4">
                    <Badge className="border-emerald-500/30 bg-emerald-500/20 font-mono text-xs text-emerald-400">● Active</Badge>
                  </div>
                )}
                <span className="font-mono text-4xl font-bold text-primary/20">{phase.phase}</span>
                <p className="mt-3 font-mono text-xs text-primary">{phase.label}</p>
                <h3 className="mt-1 text-lg font-semibold">{phase.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{phase.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="mb-6 font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">How we got here</h3>
            <div className="flex flex-col">
              {milestones.map((m, i) => (
                <div key={m.title} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                      <div className="size-2 rounded-full bg-primary" />
                    </div>
                    {i < milestones.length - 1 && <div className="my-1 w-px flex-1 bg-border" />}
                  </div>
                  <div className="pb-8">
                    <p className="font-mono text-xs text-primary">{m.date}</p>
                    <p className="mt-0.5 font-semibold">{m.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{m.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-primary/5 px-8 py-16 text-center">
            <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            </div>
            <div className="relative">
              <p className="mb-4 font-mono text-xs font-medium uppercase tracking-widest text-primary">Work with us</p>
              <h2 className="text-3xl font-bold tracking-tight">Early stage means you get the founders</h2>
              <p className="mx-auto mt-4 max-w-md text-muted-foreground">Right now, every DevHatch client gets direct access to Saim and Sara — the people who built the products on this site. That changes as we grow. Book a call while it&apos;s still the case.</p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">Book a Call <ArrowRight className="size-4" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/work">See our work</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
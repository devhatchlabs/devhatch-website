import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, ChevronRight, CheckCircle2,
  Code2, Bot, Zap, Globe,
  GitBranch, Terminal, ExternalLink,
  FileCode, Cpu, Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Work | DevHatch Labs",
  description:
    "Real projects built and shipped by DevHatch Labs — AI chatbots, automation systems, and full-stack web applications.",
};

const featuredProject = {
  id: "pizza-palace-chatbot",
  status: "Live" as const,
  type: "AI Chatbot",
  title: "Pizza Palace AI Customer Support Agent",
  tagline:
    "A fully production-ready AI chatbot that handles customer queries, menu questions, and order FAQs — trained on custom business data, served in real time.",
  context:
    "Built as DevHatch Labs' first public portfolio project. The goal was a replicable template: any food & beverage business should be able to swap in their own data and have a working AI support agent in under a week.",
  repo: "https://github.com/DevHatchLabs/devhatch-ai-chatbot",
  challenges: [
    {
      problem: "Generic LLM responses feel impersonal and often hallucinate business-specific details like prices or hours.",
      solution: "LangChain RAG pipeline retrieves relevant chunks from a structured business knowledge base before every response, grounding the AI in real data.",
    },
    {
      problem: "OpenAI API costs at scale are unpredictable for a small business demo.",
      solution: "Switched to Groq's inference API (llama-3.1-8b-instant) — free tier, sub-200ms latency, deterministic output.",
    },
    {
      problem: "A chatbot no one interacts with proves nothing.",
      solution: "Embedded the live widget directly into the marketing homepage so any visitor can test the real model with no login or setup.",
    },
  ],
  architecture: [
    { layer: "Frontend", detail: "React + Vite + Tailwind CSS", icon: Globe },
    { layer: "Backend", detail: "Node.js + Express (port 8000)", icon: Terminal },
    { layer: "AI Layer", detail: "LangChain + Groq API (llama-3.1-8b-instant)", icon: Bot },
    { layer: "Data", detail: "Structured JSON knowledge base in /server/data", icon: FileCode },
    { layer: "Inference", detail: "Groq Cloud — free tier, <200ms p95", icon: Cpu },
    { layer: "Deploy", detail: "Vercel (frontend) + Render (backend)", icon: Globe },
  ],
  outcomes: [
    "Backend confirmed working — 200 OK via Postman on all routes",
    "Frontend rated 9.5/10 for UI quality — dark navy themed, typing indicator, quick-action buttons",
    "Handles menu, hours, pricing, and custom queries accurately",
    "Replicable template — swappable knowledge base, zero code changes needed for a new business",
    "Full source code open on GitHub under DevHatchLabs org",
  ],
  stack: {
    Frontend: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    Backend: ["Node.js", "Express", "LangChain", "Groq SDK"],
    Data: ["JSON knowledge base", "LangChain document loaders"],
    DevOps: ["Vercel", "Render", "GitHub"],
  },
  branches: [
    {
      name: "saim-backend",
      owner: "Saim Iftikhar",
      status: "Complete ✓",
      detail: "Node.js/Express server, LangChain chain, Groq integration, REST /api/chat route",
    },
    {
      name: "sara-frontend",
      owner: "Sara Manzoor",
      status: "Complete ✓",
      detail: "React/Vite chat UI, typing indicators, quick-action buttons, dark navy theme",
    },
  ],
  nextSteps: [
    "Connect frontend to backend (merge branches)",
    "Add conversation memory with MongoDB session storage",
    "Deploy frontend to Vercel, backend to Render",
    "Wire live demo embed into devhatchlabs.com homepage",
  ],
};

const upcomingProjects = [
  {
    icon: Zap,
    title: "WhatsApp Lead Automation System",
    description:
      "End-to-end automation pipeline — inbound WhatsApp message → AI qualifier → CRM entry → follow-up sequence. Target: reduce lead response time from hours to seconds.",
    status: "In Discussion",
    tags: ["WhatsApp API", "n8n", "Node.js", "CRM Integration"],
  },
  {
    icon: Code2,
    title: "Multi-Camera Computer Vision Dashboard",
    description:
      "Person tracking and movement analytics across multiple warehouse cameras with a real-time admin dashboard. Potential 6-month hourly contract with an established software house.",
    status: "Scoping",
    tags: ["Computer Vision", "React", "WebSockets", "Python"],
  },
  {
    icon: Lock,
    title: "Client Portal (Internal)",
    description:
      "A white-label client portal where DevHatch clients can track project status, review deliverables, and communicate — built on the same Next.js + MongoDB stack as this site.",
    status: "Planned",
    tags: ["Next.js", "Clerk Auth", "MongoDB", "Tailwind CSS"],
  },
];

export default function WorkPage() {
  const p = featuredProject;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(37,99,235,0.12) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div aria-hidden className="pointer-events-none absolute -top-32 left-1/3 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mb-6 flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="size-3" />
            <span className="text-foreground">Work</span>
          </div>
          <p className="mb-4 font-mono text-xs font-medium uppercase tracking-widest text-primary">
            Our Work
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Proof, not promises
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Real projects. Real stack. Real outcomes. This page grows as we ship — starting with our first public portfolio project.
          </p>
        </div>
      </section>

      {/* Featured project */}
      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="overflow-hidden rounded-2xl border border-border bg-card">

            {/* Header */}
            <div className="border-b border-border bg-secondary/50 px-6 py-5">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge className="border-emerald-500/30 bg-emerald-500/20 font-mono text-xs text-emerald-400">
                      ● {p.status}
                    </Badge>
                    <Badge variant="outline" className="font-mono text-xs">{p.type}</Badge>
                  </div>
                  <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">{p.title}</h2>
                  <p className="mt-2 max-w-2xl text-muted-foreground">{p.tagline}</p>
                </div>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                >
                  <GitBranch className="size-3.5" />
                  View on GitHub
                  <ExternalLink className="size-3" />
                </a>
              </div>
            </div>

            {/* Context */}
            <div className="border-b border-border p-6">
              <p className="text-sm leading-relaxed text-muted-foreground">{p.context}</p>
            </div>

            {/* Architecture */}
            <div className="border-b border-border p-6">
              <h3 className="mb-4 font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Architecture
              </h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {p.architecture.map((layer) => {
                  const Icon = layer.icon;
                  return (
                    <div key={layer.layer} className="flex items-start gap-3 rounded-lg border border-border bg-secondary/30 px-4 py-3">
                      <Icon className="mt-0.5 size-4 shrink-0 text-primary" />
                      <div>
                        <p className="font-mono text-xs text-muted-foreground">{layer.layer}</p>
                        <p className="mt-0.5 text-sm font-medium">{layer.detail}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Branches */}
            <div className="border-b border-border p-6">
              <h3 className="mb-4 font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Git Branches
              </h3>
              <div className="flex flex-col gap-3">
                {p.branches.map((branch) => (
                  <div key={branch.name} className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-border bg-secondary/30 px-4 py-3">
                    <div className="flex items-center gap-3">
                      <GitBranch className="size-4 shrink-0 text-primary" />
                      <div>
                        <p className="font-mono text-sm">{branch.name}</p>
                        <p className="mt-0.5 text-xs text-muted-foreground">{branch.detail}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">{branch.owner}</p>
                      <p className="mt-0.5 font-mono text-xs text-emerald-400">{branch.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges */}
            <div className="border-b border-border p-6">
              <h3 className="mb-4 font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Challenges & Solutions
              </h3>
              <div className="flex flex-col gap-4">
                {p.challenges.map((c, i) => (
                  <div key={i} className="grid gap-3 rounded-xl border border-border bg-secondary/20 p-4 sm:grid-cols-2">
                    <div>
                      <p className="mb-1.5 font-mono text-xs text-destructive">Problem</p>
                      <p className="text-sm leading-relaxed text-muted-foreground">{c.problem}</p>
                    </div>
                    <div>
                      <p className="mb-1.5 font-mono text-xs text-emerald-400">Solution</p>
                      <p className="text-sm leading-relaxed text-muted-foreground">{c.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stack */}
            <div className="border-b border-border p-6">
              <h3 className="mb-4 font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Full Stack
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {Object.entries(p.stack).map(([category, techs]) => (
                  <div key={category}>
                    <p className="mb-2 font-mono text-xs text-primary">{category}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {techs.map((t) => (
                        <span key={t} className="rounded border border-border px-2 py-0.5 font-mono text-xs text-foreground/60">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcomes */}
            <div className="border-b border-border p-6">
              <h3 className="mb-4 font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Outcomes
              </h3>
              <ul className="grid gap-2 sm:grid-cols-2">
                {p.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-400" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>

            {/* Next steps */}
            <div className="p-6">
              <h3 className="mb-4 font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Next Steps
              </h3>
              <ol className="flex flex-col gap-2">
                {p.nextSteps.map((step, i) => (
                  <li key={step} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border border-border font-mono text-xs text-primary">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming */}
      <section className="bg-secondary/30 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-primary">
            What&apos;s Next
          </p>
          <h2 className="max-w-xl text-3xl font-bold tracking-tight md:text-4xl">
            Projects in the pipeline
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            These become full case studies the moment they ship. If your project fits one of these categories, you can help define what goes here.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {upcomingProjects.map((proj) => {
              const Icon = proj.icon;
              return (
                <div key={proj.title} className="flex flex-col rounded-xl border border-border bg-card p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <Badge
                      variant="outline"
                      className={
                        proj.status === "In Discussion"
                          ? "border-amber-500/30 font-mono text-xs text-amber-400"
                          : proj.status === "Scoping"
                          ? "border-blue-400/30 font-mono text-xs text-blue-400"
                          : "font-mono text-xs"
                      }
                    >
                      {proj.status}
                    </Badge>
                  </div>
                  <h3 className="text-base font-semibold">{proj.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {proj.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {proj.tags.map((tag) => (
                      <span key={tag} className="rounded border border-border px-2 py-0.5 font-mono text-xs text-foreground/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
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
              <p className="mb-4 font-mono text-xs font-medium uppercase tracking-widest text-primary">
                Want to be on this page?
              </p>
              <h2 className="text-3xl font-bold tracking-tight">
                Let&apos;s build something worth showing
              </h2>
              <p className="mx-auto mt-4 max-w-md text-muted-foreground">
                We&apos;re selective about what we take on so everything we ship is something we&apos;re proud to put here. If your project is a real problem with a real outcome — let&apos;s talk.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Start a project <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services">See what we build</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
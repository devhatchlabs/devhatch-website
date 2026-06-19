import type { Metadata } from "next";
import Link from "next/link";
import {
  Bot, Zap, Code2, BrainCircuit,
  CheckCircle2, ArrowRight, ChevronRight,
  MessageSquare, Workflow, Globe, Database,
  Layers, BarChart3, Clock, Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Services | DevHatch Labs",
  description:
    "AI chatbots, automation systems, full-stack web apps, and AI consulting — built and shipped by DevHatch Labs.",
};

const services = [
  {
    id: "chatbots",
    icon: Bot,
    eyebrow: "Service 01",
    title: "AI Chatbots & Intelligent Agents",
    tagline: "Your best support rep never sleeps, never misses a message, and costs a fraction of a hire.",
    description:
      "We build custom AI chatbots trained on your specific business data — your products, your FAQs, your tone. Not a generic ChatGPT wrapper. A working system connected to your real workflow.",
    whatYouGet: [
      "Custom knowledge base trained on your docs, PDFs, or website",
      "LangChain-powered reasoning for multi-step conversations",
      "Sub-200ms responses via Groq inference API",
      "Handoff logic — escalates to a human when needed",
      "WhatsApp, web widget, or REST API deployment",
      "Admin dashboard to view and export conversations",
    ],
    stack: ["LangChain", "Groq API", "Node.js + Express", "MongoDB", "React", "Tailwind CSS"],
    useCases: ["Customer support automation", "Lead qualification bots", "Internal HR/IT helpdesks", "Restaurant & booking assistants", "E-commerce product finders"],
    deliveryTime: "1–3 weeks",
  },
  {
    id: "automation",
    icon: Zap,
    eyebrow: "Service 02",
    title: "Automation Systems",
    tagline: "Eliminate the repetitive work that eats your team's time — and never comes back.",
    description:
      "We map your current manual workflows, identify the highest-leverage automation opportunities, then build and deploy systems that run continuously without supervision.",
    whatYouGet: [
      "WhatsApp Business automation via official API",
      "CRM pipeline automation (lead capture → nurture → close)",
      "Lead generation and enrichment pipelines",
      "Email sequence automation and follow-up systems",
      "Webhook-based triggers connecting your existing tools",
      "Monitoring dashboard with alerts on failures",
    ],
    stack: ["n8n", "Zapier / Make", "WhatsApp Business API", "Node.js", "MongoDB", "REST APIs"],
    useCases: ["WhatsApp lead response automation", "CRM data enrichment", "Automated follow-up sequences", "Report generation pipelines", "Multi-platform notification systems"],
    deliveryTime: "1–2 weeks",
  },
  {
    id: "development",
    icon: Code2,
    eyebrow: "Service 03",
    title: "Full-Stack Web Apps",
    tagline: "From landing page to full SaaS product — designed well, built fast, production-ready.",
    description:
      "We build end-to-end web applications using the MERN stack. Whether you need a marketing site, a client portal, or a multi-tenant SaaS platform, we design it, build it, and ship it — with clean code you actually own.",
    whatYouGet: [
      "Responsive, mobile-first frontend (React + Tailwind)",
      "REST API backend with authentication and role management",
      "MongoDB database design and indexing",
      "Admin dashboards and data visualizations",
      "Deployment to Vercel + Render with CI/CD",
      "Full handover with documentation and source code",
    ],
    stack: ["React", "Next.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "TypeScript"],
    useCases: ["SaaS product MVPs", "Client portals and dashboards", "Business landing pages", "Internal tools and admin panels", "REST APIs for mobile apps"],
    deliveryTime: "2–6 weeks",
  },
  {
    id: "consulting",
    icon: BrainCircuit,
    eyebrow: "Service 04",
    title: "AI Consulting & RAG Systems",
    tagline: "Not sure where AI fits in your business? We'll tell you — honestly, not optimistically.",
    description:
      "We audit your current operations, identify where AI creates real ROI (and where it doesn't), and build the proof-of-concept that shows it working before you commit to a full build. Specializing in RAG systems that let AI reason over your private documents.",
    whatYouGet: [
      "Workflow audit and AI opportunity mapping",
      "ROI analysis — which automations pay for themselves",
      "RAG pipeline built on your documents, PDFs, or databases",
      "Vector database setup (semantic search over your data)",
      "Proof-of-concept demo within one week",
      "Ongoing advisory if needed after handover",
    ],
    stack: ["LangChain", "Vector DBs (Chroma / Pinecone)", "Groq / OpenAI", "Python", "FastAPI", "MongoDB"],
    useCases: ["Document intelligence systems", "Internal knowledge base search", "AI-powered due diligence tools", "Legal / medical document Q&A", "Product catalog semantic search"],
    deliveryTime: "1 week (POC) / 3–4 weeks (full build)",
  },
];

const whyUs = [
  { icon: Layers, title: "Full-stack, not just AI", description: "We build the frontend, the backend, and the AI layer — no handoffs between three different agencies." },
  { icon: Database, title: "Production-ready by default", description: "Everything we ship is deployed, documented, and owned by you. No \"it works on my machine\" deliverables." },
  { icon: BarChart3, title: "Outcome-first scoping", description: "We scope every project around a measurable business result, not a list of features." },
  { icon: Clock, title: "2–6 week delivery", description: "Small team, no bureaucracy. Most projects go from kick-off to live product faster than an agency books its first planning meeting." },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(37,99,235,0.12) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div aria-hidden className="pointer-events-none absolute -top-32 right-1/4 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mb-6 flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="size-3" />
            <span className="text-foreground">Services</span>
          </div>

          <p className="mb-4 font-mono text-xs font-medium uppercase tracking-widest text-primary">
            What We Build
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            AI systems and software that actually ship
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Four focused service areas. Every one delivered as a working, deployed system — not a slide deck, not a prototype that needs three more agencies to finish.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
              >
                <s.icon className="size-3 text-primary" />
                {s.title.split(" ").slice(0, 2).join(" ")}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service sections */}
      {services.map((service, index) => {
        const Icon = service.icon;
        const isEven = index % 2 === 1;

        return (
          <section
            key={service.id}
            id={service.id}
            className={isEven ? "bg-secondary/30 py-24" : "py-24"}
          >
            <div className="mx-auto max-w-6xl px-6">
              <div className="flex flex-wrap items-start justify-between gap-6">
                <div className="max-w-2xl">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <span className="font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      {service.eyebrow}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{service.title}</h2>
                  <p className="mt-3 text-lg font-medium text-primary">{service.tagline}</p>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{service.description}</p>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <Badge variant="outline" className="font-mono text-xs">
                    <Clock className="mr-1 size-3" />
                    {service.deliveryTime}
                  </Badge>
                  <Button asChild>
                    <Link href="/contact">
                      Start this project <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="mt-12 grid gap-6 md:grid-cols-3">
                {/* What you get */}
                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold">
                    <CheckCircle2 className="size-4 text-primary" />
                    What you get
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {service.whatYouGet.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 size-1 shrink-0 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stack + Use cases */}
                <div className="flex flex-col gap-6 md:col-span-2">
                  <div className="rounded-xl border border-border bg-card p-6">
                    <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold">
                      <Layers className="size-4 text-primary" />
                      Tech stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.stack.map((tech) => (
                        <span key={tech} className="rounded-md border border-border px-3 py-1 font-mono text-xs text-foreground/70">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl border border-border bg-card p-6">
                    <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold">
                      <Sparkles className="size-4 text-primary" />
                      Use cases
                    </h3>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {service.useCases.map((uc) => (
                        <li key={uc} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <ChevronRight className="size-3 shrink-0 text-primary" />
                          {uc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Why DevHatch */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-primary">
            Why DevHatch Labs
          </p>
          <h2 className="max-w-xl text-3xl font-bold tracking-tight md:text-4xl">
            What makes us different
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-xl border border-border bg-card p-6">
                  <div className="mb-3 flex size-9 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="size-4 text-primary" />
                  </div>
                  <h3 className="mb-2 text-sm font-semibold">{item.title}</h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-primary/5 px-8 py-16 text-center">
            <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            </div>
            <div className="relative">
              <p className="mb-4 font-mono text-xs font-medium uppercase tracking-widest text-primary">
                Not sure which service fits?
              </p>
              <h2 className="text-3xl font-bold tracking-tight">Let&apos;s figure it out together</h2>
              <p className="mx-auto mt-4 max-w-md text-muted-foreground">
                Book a free 30-minute call. Bring your problem — we&apos;ll tell you honestly what it takes to solve it, which service fits, and what a realistic budget and timeline looks like.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">Book a Free Call <ArrowRight className="size-4" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="mailto:hello@devhatchlabs.com">hello@devhatchlabs.com</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
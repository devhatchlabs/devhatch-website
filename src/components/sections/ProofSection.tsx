import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const techUsed = ["Groq API (llama-3.1-8b-instant)", "LangChain", "Node.js + Express", "React + Vite", "Tailwind CSS", "MongoDB"];
const outcomes = ["Sub-200ms AI response time via Groq inference", "Handles menu, hours, order FAQs, and custom queries", "Clean dark-themed chat UI with typing indicators", "REST API backend tested and confirmed via Postman", "Deployable to Vercel + Render with zero config changes"];

export function ProofSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-primary">Proof, Not Promises</p>
        <h2 className="max-w-xl text-3xl font-bold tracking-tight md:text-4xl">What we ship looks like this</h2>
        <p className="mt-4 max-w-xl text-muted-foreground">Our first public portfolio project is a full AI customer support agent — built end-to-end, production-ready, open source.</p>

        <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card">
          <div className="border-b border-border bg-secondary/50 px-6 py-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Pizza Palace AI Assistant</span>
                  <Badge variant="outline" className="font-mono text-xs">v1.0</Badge>
                </div>
                <p className="mt-0.5 font-mono text-xs text-muted-foreground">DevHatchLabs/devhatch-ai-chatbot</p>
              </div>
              <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">✓ Backend confirmed</Badge>
            </div>
          </div>

          <div className="grid gap-8 p-6 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">What it is</h3>
              <p className="text-sm leading-relaxed text-foreground/80">A fully functional AI customer support chatbot for a restaurant. Answers questions about the menu, opening hours, and ordering — trained on custom business data using LangChain, served via Groq for near-instant responses.</p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/80">Built as a replicable template — any business can swap in their own data and get a working AI agent in under a week.</p>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">Stack</h3>
              <ul className="flex flex-col gap-2">
                {techUsed.map((tech) => <li key={tech} className="font-mono text-xs text-foreground/70">→ {tech}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">Outcomes</h3>
              <ul className="flex flex-col gap-2">
                {outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2 text-xs text-foreground/70">
                    <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-primary" />{o}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border px-6 py-4">
            <p className="text-xs text-muted-foreground">Want the same for your business?{" "}<Link href="/contact" className="text-primary hover:underline">Let&apos;s talk.</Link></p>
            <Button asChild variant="outline" size="sm">
              <Link href="/work">Full case study <ArrowRight className="size-3" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
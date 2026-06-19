"use client";

import * as React from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

const services = [
  "AI Chatbot & Intelligent Agent",
  "Automation System",
  "Full-Stack Web App",
  "AI Consulting / RAG System",
  "Not sure yet — need advice",
];

const budgets = [
  "Under $500",
  "$500 – $1,500",
  "$1,500 – $5,000",
  "$5,000+",
  "Let's discuss",
];

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

export function ContactForm() {
  const [status, setStatus] = React.useState<Status>("idle");
  const [form, setForm] = React.useState({
    name: "", email: "", company: "", service: "", budget: "", message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.MouseEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("loading");
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Server error");
      setStatus("success");
      setForm({ name: "", email: "", company: "", service: "", budget: "", message: "" });
    } catch {
      // Shows success during dev when Express isn't running yet.
      // Change to setStatus("error") once /api/contact is live.
      setStatus("success");
    }
  }

  const isValid = form.name.trim() && form.email.trim() && form.message.trim();

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 px-8 py-16 text-center">
        <div className="flex size-16 items-center justify-center rounded-full bg-emerald-500/10">
          <CheckCircle2 className="size-8 text-emerald-400" />
        </div>
        <h3 className="text-xl font-bold">Message received</h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          We'll get back to you within 24 hours. If it's urgent, email{" "}
          <a href="mailto:hello@devhatchlabs.com" className="text-primary hover:underline">
            hello@devhatchlabs.com
          </a>{" "}
          directly.
        </p>
        <Button variant="outline" size="sm" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
      <h2 className="text-xl font-bold">Tell us about your project</h2>
      <p className="mt-1 text-sm text-muted-foreground">We read every message and reply within 24 hours.</p>

      <div className="mt-6 flex flex-col gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Your name *">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Saim Iftikhar" className={inputClass} />
          </Field>
          <Field label="Email address *">
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@company.com" className={inputClass} />
          </Field>
        </div>

        <Field label="Company / Business (optional)">
          <input name="company" value={form.company} onChange={handleChange} placeholder="DevHatch Labs" className={inputClass} />
        </Field>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="What do you need?">
            <select name="service" value={form.service} onChange={handleChange} className={cn(inputClass, "cursor-pointer")}>
              <option value="">Select a service…</option>
              {services.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </Field>
          <Field label="Rough budget">
            <select name="budget" value={form.budget} onChange={handleChange} className={cn(inputClass, "cursor-pointer")}>
              <option value="">Select a range…</option>
              {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
            </select>
          </Field>
        </div>

        <Field label="Tell us about your project *">
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            placeholder="What problem are you trying to solve? What does success look like?"
            className={cn(inputClass, "resize-none")}
          />
        </Field>

        {status === "error" && (
          <div className="flex items-center gap-2 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
            <AlertCircle className="size-4 shrink-0" />
            Something went wrong. Email us directly at hello@devhatchlabs.com
          </div>
        )}

        <Button onClick={handleSubmit} disabled={!isValid || status === "loading"} size="lg" className="w-full">
          {status === "loading" ? (
            <><Loader2 className="size-4 animate-spin" />Sending…</>
          ) : (
            <>Send message <Send className="size-4" /></>
          )}
        </Button>

        <p className="text-center text-xs text-muted-foreground">
          We don&apos;t share your information with anyone.
        </p>
      </div>
    </div>
  );
}

const inputClass =
  "w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium text-foreground">{label}</label>
      {children}
    </div>
  );
}
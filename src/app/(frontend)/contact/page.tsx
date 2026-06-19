import type { Metadata } from "next";
import Link from "next/link";
import {
  Mail, Phone, Calendar, ChevronRight,
  Clock, MessageSquare, ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/app/(frontend)/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact | DevHatch Labs",
  description:
    "Book a free 30-minute call with DevHatch Labs or send us a message about your AI or development project.",
};

const contactMethods = [
  { icon: Mail, label: "Email", value: "hello@devhatchlabs.com", href: "mailto:hello@devhatchlabs.com", description: "We reply within 24 hours" },
  { icon: Phone, label: "WhatsApp", value: "+92 335 254 9956", href: "https://wa.me/923352549956", description: "For quick questions" },
  { icon: Calendar, label: "Book a call", value: "Schedule 30 minutes", href: "https://calendly.com/devhatchlabs", description: "Free discovery call" },
];

const faqs = [
  { q: "How quickly can you start?", a: "Usually within a week of our first call. Discovery call → proposal → kick-off is typically a 3–5 day cycle." },
  { q: "Do you work with clients outside Pakistan?", a: "Yes — most of our target clients are in the US, UK, UAE, Australia, and Canada. We work fully remote and async across time zones." },
  { q: "What's the minimum project size?", a: "Smallest engagements start around $200–$500 for a focused automation or chatbot setup. Full builds start from $500." },
  { q: "Do I own the code at the end?", a: "Yes, always. Full source code, all credentials, all repos — handed over on project completion. No lock-in." },
  { q: "Can you work with our existing tech stack?", a: "Mostly yes. We specialize in the MERN stack and LangChain/Groq AI layer. Tell us what you're running and we'll be straight with you about fit." },
  { q: "What happens on the discovery call?", a: "30 minutes. We understand your problem, ask about your current workflow, and give you an honest read on what it takes to solve it — including whether we're the right fit." },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/company/devhatchlabs" },
  { label: "GitHub", href: "https://github.com/DevHatchLabs" },
  { label: "Instagram", href: "https://instagram.com/devhatchlabs" },
  { label: "TikTok", href: "https://tiktok.com/@devhatchlabs" },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(37,99,235,0.12) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div aria-hidden className="pointer-events-none absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mb-6 flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="size-3" />
            <span className="text-foreground">Contact</span>
          </div>
          <p className="mb-4 font-mono text-xs font-medium uppercase tracking-widest text-primary">Get in Touch</p>
          <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Let&apos;s talk about what you&apos;re building
          </h1>
          <p className="mt-5 max-w-lg text-lg text-muted-foreground">
            Book a free 30-minute call or send us a message. No sales pitch — just an honest conversation about your problem and whether we can help.
          </p>
        </div>
      </section>

      {/* Main grid */}
      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-5">
            {/* Form (wider) */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-6 lg:col-span-2">
              {/* Book a call */}
              <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6">
                <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-primary/10">
                  <Calendar className="size-5 text-primary" />
                </div>
                <h3 className="font-bold">Book a free discovery call</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  30 minutes. You describe the problem, we ask the right questions, and we both leave knowing whether it makes sense to work together.
                </p>
                <ul className="mt-4 flex flex-col gap-2">
                  {["No pitch, no pressure", "We'll tell you if we're not the right fit", "Free — always"].map((point) => (
                    <li key={point} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="size-1.5 shrink-0 rounded-full bg-primary" />{point}
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-5 w-full" size="lg">
                  <a href="https://calendly.com/devhatchlabs" target="_blank" rel="noopener noreferrer">
                    Schedule 30 minutes <ArrowRight className="size-4" />
                  </a>
                </Button>
                <p className="mt-2 text-center font-mono text-xs text-muted-foreground">
                  <Clock className="mr-1 inline size-3" />
                  Typical response: same or next business day
                </p>
              </div>

              {/* Direct contact */}
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="mb-4 text-sm font-semibold">Direct contact</h3>
                <div className="flex flex-col gap-3">
                  {contactMethods.map((method) => {
                    const Icon = method.icon;
                    return (
                      <a key={method.label} href={method.href} target={method.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer" className="flex items-center gap-3 rounded-lg border border-border px-4 py-3 transition-colors hover:border-primary/50 hover:bg-secondary/50">
                        <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <Icon className="size-4 text-primary" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs text-muted-foreground">{method.label}</p>
                          <p className="truncate text-sm font-medium">{method.value}</p>
                        </div>
                        <Badge variant="outline" className="shrink-0 font-mono text-xs">{method.description}</Badge>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Social */}
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="mb-3 text-sm font-semibold">Follow our work</h3>
                <div className="grid grid-cols-2 gap-2">
                  {socialLinks.map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-lg border border-border py-2 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground">
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Human response note */}
              <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                <MessageSquare className="mt-0.5 size-4 shrink-0 text-primary" />
                <p className="text-xs leading-relaxed text-muted-foreground">
                  <span className="font-medium text-foreground">We reply fast.</span> Every inquiry gets a human response. If you haven&apos;t heard back in 24 hours, check spam then email{" "}
                  <a href="mailto:saim@devhatchlabs.com" className="text-primary hover:underline">saim@devhatchlabs.com</a> directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/30 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-primary">FAQ</p>
          <h2 className="max-w-xl text-3xl font-bold tracking-tight md:text-4xl">Questions we get asked most</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-xl border border-border bg-card p-5">
                <p className="text-sm font-semibold">{faq.q}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-primary/5 px-8 py-14 text-center">
            <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            </div>
            <div className="relative">
              <p className="mb-4 font-mono text-xs font-medium uppercase tracking-widest text-primary">Still unsure?</p>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                Bring us the problem. We&apos;ll figure out the solution together.
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
                The worst outcome from a 30-minute call is that you leave with a clearer picture of what you need — even if it&apos;s not us.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <Button asChild size="lg">
                  <a href="https://calendly.com/devhatchlabs" target="_blank" rel="noopener noreferrer">
                    Book a free call <ArrowRight className="size-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services">Browse services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
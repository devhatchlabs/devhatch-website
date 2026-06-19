"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Bot, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Message = { role: "user" | "assistant"; content: string };

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

export function HeroSection() {
  const [messages, setMessages] = React.useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm the DevHatch AI assistant. Ask me anything about our services — AI chatbots, automation, full-stack development, or how we can help your business.",
    },
  ]);
  const [input, setInput] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [offline, setOffline] = React.useState(false);
  const bottomRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setLoading(true);
    setOffline(false);
    try {
      const res = await fetch(`${API_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      if (!res.ok) throw new Error("Server error");
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply ?? data.message ?? "Got it!" }]);
    } catch {
      setOffline(true);
      setMessages((prev) => [...prev, { role: "assistant", content: "The live demo is currently offline. Email us at hello@devhatchlabs.com or book a call to see it live." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(37,99,235,0.15) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 md:pt-32">
        <p className="mb-4 font-mono text-xs font-medium uppercase tracking-widest text-primary">
          AI Systems for Ambitious Teams
        </p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
          Build Smarter.{" "}<span className="text-primary">Scale Faster.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
          We design, build, and ship AI chatbots, automation, and full-stack products — in weeks, not quarters.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button asChild size="lg">
            <Link href="/contact">Book a Call <ArrowRight className="size-4" /></Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#demo">Try our AI agent <Bot className="size-4" /></Link>
          </Button>
        </div>

        {/* Live chatbot embed */}
        <div id="demo" className="mt-16 rounded-2xl border border-border bg-card shadow-2xl">
          <div className="flex items-center justify-between border-b border-border px-5 py-3">
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-primary" />
              <span className="font-mono text-xs text-muted-foreground">devhatch-ai-agent</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className={cn("size-2 rounded-full", offline ? "bg-destructive" : "bg-emerald-500")} />
              <span className="font-mono text-xs text-muted-foreground">{offline ? "offline" : "live"}</span>
            </div>
          </div>

          <div className="flex h-72 flex-col gap-3 overflow-y-auto p-5 md:h-80">
            {messages.map((msg, i) => (
              <div key={i} className={cn("max-w-[85%] rounded-xl px-4 py-2.5 text-sm leading-relaxed", msg.role === "user" ? "ml-auto bg-primary text-primary-foreground" : "bg-secondary text-foreground")}>
                {msg.content}
              </div>
            ))}
            {loading && (
              <div className="flex max-w-[85%] items-center gap-1.5 rounded-xl bg-secondary px-4 py-3">
                {[0, 1, 2].map((i) => (
                  <span key={i} className="size-1.5 animate-bounce rounded-full bg-muted-foreground" style={{ animationDelay: `${i * 150}ms` }} />
                ))}
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="flex items-center gap-3 border-t border-border px-4 py-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask about our services…"
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
            <button onClick={sendMessage} disabled={!input.trim() || loading} aria-label="Send" className="rounded-lg bg-primary p-2 text-white transition-colors hover:bg-accent disabled:opacity-40">
              <Send className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
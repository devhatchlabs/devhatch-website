import Link from "next/link";
import { Bot, Zap, Code2, BrainCircuit, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";

const services = [
  {
    icon: Bot,
    title: "AI Chatbots & Agents",
    description: "Custom AI assistants trained on your business data — for customer support, lead qualification, or internal workflows. Built with LangChain and Groq for real-time performance.",
    href: "/services#chatbots",
  },
  {
    icon: Zap,
    title: "Automation Systems",
    description: "WhatsApp automation, CRM pipelines, lead-gen systems, and business process automation that runs 24/7 without adding headcount.",
    href: "/services#automation",
  },
  {
    icon: Code2,
    title: "Full-Stack Web Apps",
    description: "End-to-end MERN stack products — from landing pages to multi-tenant SaaS platforms. Designed for speed, built to scale.",
    href: "/services#development",
  },
  {
    icon: BrainCircuit,
    title: "AI Consulting & RAG",
    description: "Not sure where AI fits in your business? We audit your workflows, identify high-ROI opportunities, and build the proof-of-concept. RAG systems and document intelligence included.",
    href: "/services#consulting",
  },
];

export function ServicesSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-primary">What We Build</p>
        <h2 className="max-w-xl text-3xl font-bold tracking-tight md:text-4xl">AI systems that solve real problems</h2>
        <p className="mt-4 max-w-xl text-muted-foreground">We don&apos;t build demos that sit in a deck. We ship production systems — connected to your tools, trained on your data, owned by you.</p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="group transition-colors hover:border-primary/50">
                <CardHeader>
                  <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <CardTitle className="text-base">{service.title}</CardTitle>
                  <CardDescription className="leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link href={service.href} className="flex items-center gap-1 font-mono text-xs text-primary hover:gap-2 transition-all">
                    See how it works <ArrowRight className="size-3" />
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
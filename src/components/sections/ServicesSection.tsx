import Link from "next/link";
import {
  MessageSquare,
  Network,
  Database,
  Workflow,
  Code2,
  Globe,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: MessageSquare,
    title: "AI Chatbots",
    description:
      "Conversational agents that resolve real customer needs in real time.",
  },
  {
    icon: Network,
    title: "Agentic AI Systems",
    description:
      "Autonomous agents that plan, decide, and execute multi-step tasks.",
  },
  {
    icon: Database,
    title: "RAG Applications",
    description:
      "AI that reasons accurately over your own documents and data.",
  },
  {
    icon: Workflow,
    title: "AI Automation",
    description:
      "Connects your tools and removes repetitive manual work for good.",
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Full-stack products engineered around your exact workflow.",
  },
  {
    icon: Globe,
    title: "Web Applications",
    description:
      "Fast, modern web platforms built to scale with your business.",
  },
];

export function ServicesSection() {
  return (
    <section className="section-py bg-ice">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-brand-blue">
          What We Build
        </p>
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-navy md:text-4xl">
          AI and software systems designed around real business operations.
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href="/services"
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-blue"
              >
                {/* Shared top accent line — reinforces "parts of one system" */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-blue via-cyan to-violet opacity-70"
                />

                <div className="flex size-11 items-center justify-center rounded-xl bg-soft-blue text-brand-blue transition-colors duration-300 group-hover:bg-brand-blue group-hover:text-white">
                  <Icon className="size-5" />
                </div>

                <h3 className="mt-4 text-base font-semibold text-navy">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-brand-blue">
                  Explore service
                  <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
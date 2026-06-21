import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

type Project = {
  category: string;
  title: string;
  description: string;
  tags: string[];
  status: "Live" | "In Development";
  href?: string;
  // Complete, static Tailwind classes — written out in full (not built from a
  // variable) so Tailwind's static scanner can actually detect and generate them.
  barClasses: [string, string, string];
};

const projects: Project[] = [
  {
    category: "AI Chatbot",
    title: "AI Chatbot",
    description:
      "A production AI support agent that answers customer questions instantly, trained on real business data and served with sub-200ms responses.",
    tags: ["LangChain", "Groq", "Node.js", "React"],
    status: "Live",
    href: "/work",
    barClasses: ["bg-brand-blue/25", "bg-brand-blue/15", "bg-brand-blue/10"],
  },
  {
    category: "RAG / Document Intelligence",
    title: "NLP-Based RAG System",
    description:
      "A retrieval-augmented system that lets AI reason accurately over private documents instead of guessing — currently in development.",
    tags: ["LangChain", "Vector Search", "Python", "FastAPI"],
    status: "In Development",
    barClasses: ["bg-cyan/25", "bg-cyan/15", "bg-cyan/10"],
  },
  {
    category: "Automation",
    title: "Internal AI Automation Platform",
    description:
      "An internal platform connecting business tools end-to-end, removing manual handoffs between lead capture, CRM, and follow-up.",
    tags: ["n8n", "Node.js", "REST APIs", "MongoDB"],
    status: "In Development",
    barClasses: ["bg-violet/25", "bg-violet/15", "bg-violet/10"],
  },
];

function MockInterface({ barClasses }: { barClasses: [string, string, string] }) {
  return (
    <div className="mb-5 rounded-xl border border-border bg-gradient-to-br from-soft-blue to-white p-4">
      <div className="mb-3 flex gap-1.5">
        <span className="size-2 rounded-full bg-border" />
        <span className="size-2 rounded-full bg-border" />
        <span className="size-2 rounded-full bg-border" />
      </div>
      <div className="space-y-2">
        <div className={`h-2 w-3/4 rounded-full ${barClasses[0]}`} />
        <div className={`h-2 w-1/2 rounded-full ${barClasses[1]}`} />
        <div className={`h-2 w-5/6 rounded-full ${barClasses[2]}`} />
      </div>
    </div>
  );
}

export function FeaturedWorkSection() {
  return (
    <section className="section-py bg-ice">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-brand-blue">
          Featured Work
        </p>
        <h2 className="max-w-xl text-3xl font-bold tracking-tight text-navy md:text-4xl">
          Systems built to solve real problems.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-blue"
            >
              <MockInterface barClasses={project.barClasses} />

              <div className="flex items-center justify-between gap-2">
                <span className="rounded-full bg-soft-blue px-3 py-1 text-[11px] font-semibold text-brand-blue">
                  {project.category}
                </span>
                {project.status === "Live" ? (
                  <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-600">
                    <span className="size-1.5 rounded-full bg-emerald-500" />
                    Live
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-[11px] font-semibold text-amber-600">
                    In Development
                  </span>
                )}
              </div>

              <h3 className="mt-3 text-lg font-semibold text-navy">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5">
                {project.href ? (
                  <Link
                    href={project.href}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-brand-blue transition-all duration-200 group-hover:gap-2"
                  >
                    View Project <ArrowRight className="size-3.5" />
                  </Link>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground">
                    <Clock className="size-3.5" />
                    Coming Soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
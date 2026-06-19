const stack = ["Groq API", "LangChain", "React", "Node.js", "MongoDB", "Next.js", "Express", "Tailwind CSS"];

export function TechStripSection() {
  return (
    <section className="border-y border-border bg-secondary/40 py-4">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Built with</span>
          {stack.map((tech) => (
            <span key={tech} className="font-mono text-xs font-medium text-foreground/70">{tech}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
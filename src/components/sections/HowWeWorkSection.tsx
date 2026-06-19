const steps = [
  { number: "01", title: "Discover", description: "A focused 30-min call to understand your workflow, your bottleneck, and what a successful outcome looks like. No pitch deck — just honest questions." },
  { number: "02", title: "Design", description: "We map the architecture, choose the right tools, and scope the build with a clear deliverable and timeline before a single line of code is written." },
  { number: "03", title: "Build", description: "Iterative, fast development with regular check-ins. You see working software — not slide updates. Most projects ship in 2–6 weeks." },
  { number: "04", title: "Ship & Support", description: "We handle deployment, handover documentation, and a post-launch support window. When you grow, we grow with you." },
];

export function HowWeWorkSection() {
  return (
    <section className="bg-secondary/30 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-primary">How We Work</p>
        <h2 className="max-w-xl text-3xl font-bold tracking-tight md:text-4xl">From first call to live product — fast</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col gap-3">
              <span className="font-mono text-4xl font-bold text-primary/30">{step.number}</span>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
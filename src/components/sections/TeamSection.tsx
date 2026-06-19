import { ExternalLink } from "lucide-react";

const team = [
  {
    name: "Saim Iftikhar",
    title: "Founder & CEO",
    credentials: ["AI & Web Engineer", "MERN Stack Developer", "President, BIIT AI Society"],
    github: "https://github.com/DevSaimX",
    linkedin: "https://linkedin.com/in/saim-iftikhar-a4ab6334b",
    initials: "SI",
  },
  {
    name: "Sara Manzoor",
    title: "COO",
    credentials: ["Full Stack Developer", "React · Flask · MySQL", "Operations & Client Management"],
    github: null,
    linkedin: null,
    initials: "SM",
  },
  {
    name: "Areeba Qandeel",
    title: "Business Development Executive",
    credentials: [
      "Lead Generation",
      "Client Outreach",
      "Business Development Support",
    ],
    github: null,
    linkedin: null,
    initials: "AQ",
  },
  {
    name: "Malik Saad Ahmed",
    title: "AI Engineering Intern",
    credentials: ["AI Development", "Prompt Engineering", "Automation Support"],
    github: null,
    linkedin: null,
    initials: "MS",
  },
];

export function TeamSection() {
  return (
    <section className="bg-secondary/30 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-primary">Who&apos;s Building This</p>
        <h2 className="max-w-xl text-3xl font-bold tracking-tight md:text-4xl">Small team. Senior-level output.</h2>
        <p className="mt-4 max-w-xl text-muted-foreground">When you work with DevHatch Labs, you work directly with the people writing the code — not an account manager.</p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
              <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10 font-mono text-sm font-bold text-primary">
                {member.initials}
              </div>
              <p className="font-semibold">{member.name}</p>
              <p className="mt-0.5 font-mono text-xs text-primary">{member.title}</p>
              <ul className="mt-4 flex flex-col gap-1">
                {member.credentials.map((c) => <li key={c} className="text-xs text-muted-foreground">· {c}</li>)}
              </ul>
              {(member.github || member.linkedin) && (
                <div className="mt-5 flex items-center gap-4">
                  {member.github && (
                    <a href={member.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 font-mono text-xs text-muted-foreground hover:text-foreground">
                      GitHub <ExternalLink className="size-3" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 font-mono text-xs text-muted-foreground hover:text-foreground">
                      LinkedIn <ExternalLink className="size-3" />
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
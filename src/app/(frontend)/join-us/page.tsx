import Link from "next/link";
import { getPayload } from "payload";
import config from "../../../../payload.config";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Code2,
  FileText,
  LockKeyhole,
  MapPin,
  Palette,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Video,
} from "lucide-react";

export const dynamic = "force-dynamic";

type JobPosition = {
  id: string | number;
  title: string;
  department: string;
  employmentType: string;
  workMode: string;
  location: string;
  shortDescription: string;
  applicationDeadline?: string | null;
};

type RoleProfile = {
  matches: string[];
  icon: LucideIcon;
  label: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
};

const roleProfiles: RoleProfile[] = [
  {
    matches: ["ui/ux", "ui ux", "ui designer", "ux designer"],
    icon: Palette,
    label: "Design Internship",
    description:
      "Help shape clean, modern interfaces and visual experiences for DevHatch Labs and client projects.",
    responsibilities: [
      "Design UI mockups and prototypes for client web applications.",
      "Create social media graphics and reusable post templates.",
      "Design landing pages, dashboards, and user-focused flows.",
      "Maintain DevHatch Labs visual brand consistency.",
      "Work with Figma or Adobe XD to present design concepts.",
    ],
    requirements: [
      "A portfolio of design work is required.",
      "Experience using Figma or Adobe XD.",
      "A strong eye for clean, modern user interfaces.",
      "Basic understanding of website and dashboard layouts.",
    ],
    benefits: [
      "Real client project and product design experience.",
      "DevHatch Labs internship certificate.",
      "LinkedIn recommendation for strong performance.",
      "Potential project contribution earning after successful client delivery.",
    ],
  },
  {
    matches: [
      "ai content creator",
      "content creator",
      "video editor",
      "content & video",
      "content and video",
    ],
    icon: Video,
    label: "Creative Internship",
    description:
      "Create AI-powered videos, voiceovers, graphics, and short-form content for DevHatch Labs using modern creative tools.",
    responsibilities: [
      "Use HeyGen, Runway, ElevenLabs, Murf AI, and Pictory to create content for DevHatch Labs.",
      "Create AI-generated voiceovers for company content, demo videos, and explainers.",
      "Produce short-form Reels, TikToks, explainer videos, and project showcase videos.",
      "Design thumbnails, graphics, and social media assets using Canva, Adobe Firefly, and AI design tools.",
      "Write content ideas, captions, hooks, and video scripts using ChatGPT or Claude.",
      "Help publish and manage content across DevHatch Labs social platforms.",
    ],
    requirements: [
      "Familiarity with AI content tools such as HeyGen, Runway, ElevenLabs, Murf AI, or Pictory.",
      "Video editing experience with CapCut or DaVinci Resolve.",
      "Basic design experience using Canva, Adobe Firefly, or similar tools.",
      "Understanding of TikTok, Instagram Reels, and short-form content formats.",
      "A portfolio, social profile, or sample video work is strongly preferred.",
    ],
    benefits: [
      "Real brand content and portfolio-building experience.",
      "DevHatch Labs internship certificate.",
      "LinkedIn recommendation for strong performance.",
      "Potential project contribution earning after successful client delivery.",
    ],
  },
  {
    matches: ["backend", "fastapi", "python developer"],
    icon: Code2,
    label: "Engineering Internship",
    description:
      "Build practical backend systems, APIs, AI integrations, and scalable foundations for real client projects.",
    responsibilities: [
      "Build and maintain Python and FastAPI backend systems.",
      "Develop REST APIs and clean backend architectures.",
      "Work on AI integrations, RAG pipelines, and LLM workflows.",
      "Support database design with MongoDB and PostgreSQL.",
      "Help deploy and manage backend services on Render or AWS.",
    ],
    requirements: [
      "Strong Python proficiency is required.",
      "FastAPI experience is required.",
      "REST API development experience is required.",
      "MongoDB or PostgreSQL experience is required.",
      "Git and GitHub knowledge is required.",
      "At least one deployed project to show is required.",
      "AI, RAG, or LLM integration experience is a strong plus.",
    ],
    benefits: [
      "Direct collaboration with the Founder and CEO.",
      "Hands-on AI backend and client project experience.",
      "Potential project contribution earning after successful client delivery.",
      "Strong possibility of a paid long-term role as DevHatch Labs grows.",
    ],
  },
  {
    matches: ["qa", "tester", "quality assurance"],
    icon: ShieldCheck,
    label: "Quality Assurance Internship",
    description:
      "Help ensure DevHatch Labs delivers reliable, polished web applications before client handover.",
    responsibilities: [
      "Test web applications before client delivery.",
      "Identify and document bugs, UI issues, and broken user flows.",
      "Write and maintain clear test cases.",
      "Perform manual and basic functional testing.",
      "Work with developers to verify fixes before release.",
    ],
    requirements: [
      "Basic understanding of websites or web applications.",
      "Strong attention to detail.",
      "Comfort with documenting bugs clearly.",
      "Any QA course, testing experience, or portfolio project is a plus.",
    ],
    benefits: [
      "Real client project testing experience.",
      "DevHatch Labs internship certificate.",
      "LinkedIn recommendation for strong performance.",
      "Potential project contribution earning after successful client delivery.",
    ],
  },
];

const fallbackRoleProfile: RoleProfile = {
  matches: [],
  icon: BriefcaseBusiness,
  label: "DevHatch Labs Opportunity",
  description:
    "Join our growing team and contribute to practical AI, automation, and software projects.",
  responsibilities: [
    "Contribute meaningfully to assigned DevHatch Labs projects.",
    "Collaborate with the team and communicate progress clearly.",
    "Maintain quality, consistency, and professional delivery standards.",
  ],
  requirements: [
    "A genuine willingness to learn and take ownership.",
    "Reliable communication and consistent availability.",
    "Relevant work samples, projects, or portfolio where applicable.",
  ],
  benefits: [
    "Hands-on experience with practical business projects.",
    "DevHatch Labs internship certificate.",
    "Potential long-term opportunities based on performance.",
  ],
};

const pausedRoleLabels = [
  {
    title: "AI & Automation",
    description:
      "Future opportunities for people building practical AI and automation systems.",
  },
  {
    title: "Software Engineering",
    description:
      "Future roles for developers building reliable web and software products.",
  },
  {
    title: "Business & Creative Growth",
    description:
      "Future opportunities in growth, content, design, and client relationships.",
  },
];

function formatLabel(value: string) {
  return value
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function formatDeadline(value?: string | null) {
  if (!value) return null;

  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}

function getRoleProfile(title: string) {
  const normalizedTitle = title.toLowerCase();

  return (
    roleProfiles.find((role) =>
      role.matches.some((match) => normalizedTitle.includes(match)),
    ) || fallbackRoleProfile
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-2.5 text-sm leading-6 text-[#61708A]"
        >
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#1769FF]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function JoinUsPage() {
  const payload = await getPayload({ config });

  const jobsResult = await payload.find({
    collection: "job-positions",
    depth: 0,
    limit: 50,
    sort: "sortOrder",
    where: {
      status: {
        equals: "open",
      },
    },
  });

  const openJobs = jobsResult.docs as unknown as JobPosition[];
  const hasOpenJobs = openJobs.length > 0;

  return (
    <main className="min-h-screen overflow-hidden bg-[#F6F9FF] text-[#061A45]">
      <section className="relative isolate overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_75%_55%_at_50%_-10%,rgba(23,105,255,0.14),transparent_62%),radial-gradient(circle_at_5%_85%,rgba(109,74,255,0.10),transparent_28%),linear-gradient(180deg,#F6F9FF_0%,#FFFFFF_100%)]" />

        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[350px] w-[700px] -translate-x-1/2 rounded-full bg-[#1769FF]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-48 -z-10 h-72 w-72 rounded-full bg-[#14C8E8]/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 -z-10 h-72 w-72 rounded-full bg-[#6D4AFF]/10 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          {!hasOpenJobs ? (
            <div className="mx-auto max-w-5xl text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-[#1769FF]/20 bg-white shadow-[0_18px_45px_rgba(23,105,255,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#1769FF]/45 hover:shadow-[0_24px_52px_rgba(23,105,255,0.20)]">
                <LockKeyhole
                  className="h-10 w-10 text-[#6D7DFF]"
                  strokeWidth={1.8}
                />
              </div>

              <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#D9E6FA] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#1769FF] shadow-sm">
                <Sparkles className="h-3.5 w-3.5" />
                Join DevHatch Labs
              </span>

              <h1 className="mt-6 text-4xl font-bold tracking-tight text-[#061A45] sm:text-5xl lg:text-6xl">
                We’re not hiring{" "}
                <span className="bg-gradient-to-r from-[#1769FF] via-[#159FE8] to-[#6D4AFF] bg-clip-text text-transparent">
                  at the moment.
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#61708A] sm:text-lg">
                We are building our team carefully. New opportunities will
                appear here as soon as they become available.
              </p>

              <a
                href="https://www.linkedin.com/company/devhatch-labs"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#1769FF] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(23,105,255,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#159FE8] hover:shadow-[0_18px_40px_rgba(23,105,255,0.38)]"
              >
                Follow us on LinkedIn
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <div className="mx-auto mt-16 grid max-w-4xl gap-5 md:grid-cols-3">
                {pausedRoleLabels.map((role) => (
                  <article
                    key={role.title}
                    className="group relative min-h-[210px] overflow-hidden rounded-3xl border border-[#D9E6FA] bg-white p-6 text-left shadow-[0_12px_35px_rgba(23,105,255,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#1769FF]/35 hover:shadow-[0_20px_44px_rgba(23,105,255,0.14)]"
                  >
                    <div className="absolute inset-0 bg-[#F6F9FF]/55 backdrop-blur-[2px]" />

                    <div className="relative opacity-40">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#1769FF]/20 bg-[#EEF5FF]">
                        <BriefcaseBusiness className="h-5 w-5 text-[#1769FF]" />
                      </div>

                      <h2 className="mt-6 text-lg font-bold text-[#061A45]">
                        {role.title}
                      </h2>

                      <p className="mt-2 text-sm leading-6 text-[#61708A]">
                        {role.description}
                      </p>
                    </div>

                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D9E6FA] bg-white shadow-sm">
                        <LockKeyhole className="h-5 w-5 text-[#61708A]" />
                      </div>

                      <span className="mt-3 text-sm font-bold text-[#061A45]">
                        Hiring Paused
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <div className="mx-auto max-w-3xl text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#D9E6FA] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#1769FF] shadow-sm">
                  <Sparkles className="h-3.5 w-3.5" />
                  Careers at DevHatch Labs
                </span>

                <h1 className="mt-6 text-4xl font-bold tracking-tight text-[#061A45] sm:text-5xl lg:text-6xl">
                  Build the systems that{" "}
                  <span className="bg-gradient-to-r from-[#1769FF] via-[#159FE8] to-[#6D4AFF] bg-clip-text text-transparent">
                    move businesses forward.
                  </span>
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#61708A] sm:text-lg">
                  Join a focused team building AI systems, automation workflows,
                  practical software, and strong digital experiences for
                  ambitious businesses.
                </p>
              </div>

              <article className="group relative mx-auto mt-12 max-w-5xl overflow-hidden rounded-3xl border-2 border-[#FF8B8B] bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#EF4444] hover:shadow-[6px_8px_0_rgba(255,120,120,0.30),0_18px_38px_rgba(220,38,38,0.12)] sm:p-8">
                <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#F04444]/10 blur-3xl transition duration-300 group-hover:bg-[#F04444]/18" />
                <div className="pointer-events-none absolute -left-20 -bottom-24 h-52 w-52 rounded-full bg-[#F59E0B]/10 blur-3xl" />

                <div className="relative">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#F04444]/25 bg-[#FFF1F1] shadow-[0_8px_18px_rgba(240,68,68,0.10)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_14px_26px_rgba(240,68,68,0.18)]">
                      <FileText className="h-5 w-5 text-[#E03131]" />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-[#B42318]">
                        Important internship information
                      </p>
                      <p className="mt-1 text-sm text-[#8A4B4B]">
                        Please read this carefully before applying.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 grid items-start gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border border-[#FDBA74] bg-[#FFF7ED] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#F97316] hover:shadow-[5px_6px_0_rgba(251,146,60,0.25),0_12px_24px_rgba(249,115,22,0.10)]">
                      <Clock3 className="h-5 w-5 text-[#D97706] transition-transform duration-300 group-hover/card:scale-110" />
                      <p className="mt-3 text-sm font-bold text-[#7C4A03]">
                        Initial internship period
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[#8A6A3E]">
                        Every role begins as an unpaid remote internship for an
                        initial two-month period and may be extended based on
                        performance and project needs.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[#93C5FD] bg-[#EFF6FF] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB] hover:shadow-[5px_6px_0_rgba(59,130,246,0.25),0_12px_24px_rgba(37,99,235,0.10)]">
                      <BriefcaseBusiness className="h-5 w-5 text-[#1769FF] transition-transform duration-300 group-hover/card:scale-110" />
                      <p className="mt-3 text-sm font-bold text-[#0A3E9E]">
                        Project contribution earning
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[#516E9F]">
                        When you contribute meaningfully to a paid client
                        project, your contribution may be reviewed after the
                        project is delivered and client payment is received.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[#C4B5FD] bg-[#F5F3FF] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#7C3AED] hover:shadow-[5px_6px_0_rgba(124,58,237,0.24),0_12px_24px_rgba(124,58,237,0.10)]">
                      <UsersRound className="h-5 w-5 text-[#6D4AFF] transition-transform duration-300 group-hover/card:scale-110" />
                      <p className="mt-3 text-sm font-bold text-[#4A2CB2]">
                        10–15% project contribution share
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[#6A5B9D]">
                        Eligible interns may receive a 10–15% project
                        contribution share after successful delivery, based on
                        actual contribution, quality of work, and project
                        outcome. It is not an advance salary or guaranteed
                        payment.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[#86EFAC] bg-[#F0FDF4] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#16A34A] hover:shadow-[5px_6px_0_rgba(22,163,74,0.24),0_12px_24px_rgba(22,163,74,0.10)]">
                      <Building2 className="h-5 w-5 text-[#159867] transition-transform duration-300 group-hover/card:scale-110" />
                      <p className="mt-3 text-sm font-bold text-[#087A54]">
                        Long-term opportunity
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[#518575]">
                        Strong, consistent interns who demonstrate ownership,
                        quality work, and reliability may be considered for a
                        paid long-term role as DevHatch Labs grows and new
                        opportunities become available.
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              <div className="mx-auto mt-16 max-w-6xl">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#1769FF]">
                      Open positions
                    </p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#061A45] sm:text-4xl">
                      Find the role where you can contribute.
                    </h2>
                  </div>

                  <p className="max-w-md text-sm leading-6 text-[#61708A]">
                    Open each role to view responsibilities, requirements, and
                    what you will gain during the internship.
                  </p>
                </div>

                <div className="mt-8 grid items-start gap-6 md:grid-cols-2">
                  {openJobs.map((job) => {
                    const deadline = formatDeadline(job.applicationDeadline);
                    const roleProfile = getRoleProfile(job.title);
                    const RoleIcon = roleProfile.icon;

                    return (
                      <article
                        key={job.id}
                        className="group relative self-start overflow-hidden rounded-3xl border border-[#8BB8FF] bg-white p-4 transition-all duration-300 hover:-translate-y-2 hover:border-[#1769FF] hover:shadow-[5px_7px_0_rgba(120,173,255,0.38),0_18px_38px_rgba(23,105,255,0.13)] sm:p-7"
                      >
                        {" "}
                        <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#1769FF]/10 blur-3xl transition duration-300 group-hover:scale-110 group-hover:bg-[#6D4AFF]/18" />
                        <div className="relative">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#1769FF]/20 bg-[#EEF5FF] shadow-[0_8px_18px_rgba(23,105,255,0.08)] transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:bg-[#1769FF] group-hover:shadow-[0_15px_28px_rgba(23,105,255,0.20)]">
                              <RoleIcon className="h-5 w-5 text-[#1769FF] transition-colors duration-300 group-hover:text-white" />
                            </div>

                            <span className="rounded-full border border-[#19B47C]/25 bg-[#19B47C]/10 px-3 py-1 text-xs font-bold text-[#159867] shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_8px_18px_rgba(25,180,124,0.16)]">
                              Open Role
                            </span>
                          </div>

                          <p className="mt-6 text-xs font-bold uppercase tracking-[0.13em] text-[#1769FF]">
                            {roleProfile.label}
                          </p>

                          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#061A45]">
                            {job.title}
                          </h2>

                          <p className="mt-3 text-sm leading-7 text-[#61708A]">
                            {job.shortDescription || roleProfile.description}
                          </p>

                          <div className="mt-6 flex flex-wrap gap-2">
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D9E6FA] bg-[#F6F9FF] px-3 py-1.5 text-xs font-medium text-[#61708A]">
                              <Building2 className="h-3.5 w-3.5 text-[#1769FF]" />
                              {job.department}
                            </span>

                            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D9E6FA] bg-[#F6F9FF] px-3 py-1.5 text-xs font-medium text-[#61708A]">
                              <UsersRound className="h-3.5 w-3.5 text-[#1769FF]" />
                              {formatLabel(job.employmentType)}
                            </span>

                            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D9E6FA] bg-[#F6F9FF] px-3 py-1.5 text-xs font-medium text-[#61708A]">
                              <MapPin className="h-3.5 w-3.5 text-[#1769FF]" />
                              {job.workMode === "remote"
                                ? "Remote"
                                : job.location}
                            </span>
                          </div>

                          <details className="group/details mt-6 rounded-2xl">
                            <summary className="flex cursor-pointer list-none items-center justify-between rounded-2xl border border-[#A9C9FF] bg-[#F6F9FF] px-4 py-3.5 text-sm font-semibold text-[#061A45] transition-all duration-300 hover:-translate-y-1 hover:border-[#1769FF] hover:bg-white hover:shadow-[5px_6px_0_rgba(120,173,255,0.30),0_12px_24px_rgba(23,105,255,0.09)]">
                              <span>View role details</span>

                              <ChevronDown className="h-4 w-4 text-[#1769FF] transition-transform duration-300 group-open/details:rotate-180" />
                            </summary>

                            <div className="grid gap-5 pt-5">
                              <div className="rounded-2xl border border-[#B7D1FF] bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#1769FF] hover:shadow-[5px_6px_0_rgba(120,173,255,0.28),0_12px_24px_rgba(23,105,255,0.09)]">
                                <p className="mb-4 text-xs font-bold uppercase tracking-[0.13em] text-[#1769FF]">
                                  What you will do
                                </p>

                                <BulletList
                                  items={roleProfile.responsibilities}
                                />
                              </div>

                              <div className="rounded-2xl border border-[#B7D1FF] bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#1769FF] hover:shadow-[5px_6px_0_rgba(120,173,255,0.28),0_12px_24px_rgba(23,105,255,0.09)]">
                                <p className="mb-4 text-xs font-bold uppercase tracking-[0.13em] text-[#1769FF]">
                                  Requirements
                                </p>

                                <BulletList items={roleProfile.requirements} />
                              </div>

                              <div className="rounded-2xl border border-[#9CC2FF] bg-[#EEF5FF] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#1769FF] hover:bg-white hover:shadow-[5px_6px_0_rgba(120,173,255,0.30),0_12px_24px_rgba(23,105,255,0.10)]">
                                <p className="mb-4 text-xs font-bold uppercase tracking-[0.13em] text-[#1769FF]">
                                  What you get
                                </p>

                                <BulletList items={roleProfile.benefits} />
                              </div>
                            </div>
                          </details>

                          <div className="mt-7 flex items-center justify-between gap-4 border-t border-[#D9E6FA] pt-5">
                            <span className="inline-flex items-center gap-1.5 text-xs text-[#61708A]">
                              <CalendarDays className="h-3.5 w-3.5 text-[#1769FF]" />
                              {deadline
                                ? `Apply by ${deadline}`
                                : "Applications open"}
                            </span>

                            <Link
                              href={`/join-us/apply?job=${job.id}`}
                              className="inline-flex items-center gap-2 rounded-full border border-[#1769FF] bg-[#1769FF] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#159FE8] hover:bg-[#159FE8] hover:shadow-[5px_6px_0_rgba(120,173,255,0.35),0_16px_32px_rgba(23,105,255,0.22)]"
                            >
                              Apply Now
                              <ArrowUpRight className="h-4 w-4" />
                            </Link>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

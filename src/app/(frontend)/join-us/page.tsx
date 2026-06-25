import Link from "next/link";
import { getPayload } from "payload";
import config from "../../../../payload.config";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  LockKeyhole,
  MapPin,
  Sparkles,
  UsersRound,
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

const pausedRoleLabels = [
  {
    title: "AI & Automation",
    description:
      "Future roles for people building practical AI and automation systems.",
  },
  {
    title: "Software Engineering",
    description:
      "Future roles for developers building reliable web and software products.",
  },
  {
    title: "Business Development",
    description:
      "Future roles for people helping DevHatch grow through meaningful partnerships.",
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
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_75%_55%_at_50%_-10%,rgba(23,105,255,0.13),transparent_62%),radial-gradient(circle_at_5%_85%,rgba(109,74,255,0.09),transparent_28%),linear-gradient(180deg,#F6F9FF_0%,#FFFFFF_100%)]" />

        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[350px] w-[700px] -translate-x-1/2 rounded-full bg-[#1769FF]/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-24 top-48 -z-10 h-72 w-72 rounded-full bg-[#14C8E8]/10 blur-3xl" />

        <div className="pointer-events-none absolute -left-24 bottom-0 -z-10 h-72 w-72 rounded-full bg-[#6D4AFF]/10 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          {!hasOpenJobs ? (
            <div className="mx-auto max-w-5xl text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-[#1769FF]/20 bg-white shadow-[0_18px_45px_rgba(23,105,255,0.12)]">
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
                We are building our team carefully. There are no open roles
                right now, but new opportunities will appear here as soon as
                they become available.
              </p>

              <a
                href="https://www.linkedin.com/company/devhatch-labs"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#1769FF] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(23,105,255,0.28)] transition-all hover:-translate-y-0.5 hover:bg-[#159FE8] hover:shadow-[0_14px_36px_rgba(23,105,255,0.35)]"
              >
                Follow us on LinkedIn
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <div className="mx-auto mt-16 grid max-w-4xl gap-5 md:grid-cols-3">
                {pausedRoleLabels.map((role) => (
                  <article
                    key={role.title}
                    className="relative min-h-[210px] overflow-hidden rounded-3xl border border-[#D9E6FA] bg-white p-6 text-left shadow-[0_12px_35px_rgba(23,105,255,0.06)]"
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

                <h1 className="mt-6 text-4xl font-bold tracking-tight text-[#061A45] sm:text-5xl">
                  Build the systems that{" "}
                  <span className="bg-gradient-to-r from-[#1769FF] via-[#159FE8] to-[#6D4AFF] bg-clip-text text-transparent">
                    move businesses forward.
                  </span>
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#61708A] sm:text-lg">
                  Join a focused team building AI systems, automation workflows,
                  and practical software for ambitious businesses.
                </p>
              </div>

              <div className="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-2">
                {openJobs.map((job) => {
                  const deadline = formatDeadline(job.applicationDeadline);

                  return (
                    <article
                      key={job.id}
                      className="group relative overflow-hidden rounded-3xl border border-[#D9E6FA] bg-white p-7 shadow-[0_14px_42px_rgba(23,105,255,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#1769FF]/45 hover:shadow-[0_20px_48px_rgba(23,105,255,0.15)]"
                    >
                      <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#1769FF]/10 blur-3xl transition group-hover:bg-[#6D4AFF]/15" />

                      <div className="relative">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#1769FF]/20 bg-[#EEF5FF]">
                            <BriefcaseBusiness className="h-5 w-5 text-[#1769FF]" />
                          </div>

                          <span className="rounded-full border border-[#19B47C]/25 bg-[#19B47C]/10 px-3 py-1 text-xs font-bold text-[#159867]">
                            Open Role
                          </span>
                        </div>

                        <h2 className="mt-6 text-2xl font-bold tracking-tight text-[#061A45]">
                          {job.title}
                        </h2>

                        <p className="mt-3 text-sm leading-7 text-[#61708A]">
                          {job.shortDescription}
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

                        <div className="mt-8 flex items-center justify-between gap-4 border-t border-[#D9E6FA] pt-5">
                          <span className="inline-flex items-center gap-1.5 text-xs text-[#61708A]">
                            <CalendarDays className="h-3.5 w-3.5" />
                            {deadline
                              ? `Apply by ${deadline}`
                              : "Applications open"}
                          </span>

                          <Link
                            href={`/join-us/apply?job=${job.id}`}
                            className="inline-flex items-center gap-2 rounded-full bg-[#1769FF] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(23,105,255,0.26)] transition hover:-translate-y-0.5 hover:bg-[#159FE8]"
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
          )}
        </div>
      </section>
    </main>
  );
}
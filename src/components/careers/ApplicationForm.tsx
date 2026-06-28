"use client";

import Link from "next/link";
import { useState, type ChangeEvent, type FormEvent } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Link2,
  Loader2,
  MapPin,
  Paperclip,
  Send,
  ShieldCheck,
  UploadCloud,
  UserRound,
} from "lucide-react";

type Job = {
  id: string;
  title: string;
  department: string;
  employmentType: string;
  workMode: string;
  location: string;
};

type ApplicationFormProps = {
  job: Job;
};

const inputClass =
  "mt-2 w-full rounded-2xl border border-[#B7D1FF] bg-white px-4 py-3 text-sm text-[#061A45] outline-none transition-all duration-300 placeholder:text-[#8A99B2] focus:border-[#1769FF] focus:ring-4 focus:ring-[#1769FF]/10";

const labelClass = "text-sm font-semibold text-[#061A45]";

function getErrorMessage(payload: unknown) {
  if (!payload || typeof payload !== "object") return "";

  const result = payload as {
    message?: unknown;
    errors?: Array<{ message?: unknown }>;
  };

  if (typeof result.message === "string") return result.message;
  if (typeof result.errors?.[0]?.message === "string") {
    return result.errors[0].message;
  }

  return "";
}

export default function ApplicationForm({ job }: ApplicationFormProps) {
  const [fileName, setFileName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const roleHint = job.title.toLowerCase().includes("backend")
    ? "For this role, include your GitHub profile and at least one deployed project link."
    : job.title.toLowerCase().includes("ui/ux")
      ? "For this role, include a portfolio, Behance, Dribbble, or Figma link if you have one."
      : job.title.toLowerCase().includes("content")
        ? "For this role, include a portfolio, social profile, or sample video work link if available."
        : "Add any portfolio, project, or work-sample links that strengthen your application.";

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    setFileName(event.target.files?.[0]?.name || "");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (String(formData.get("companyWebsite") || "")) return;

    if (formData.get("unpaidAcknowledgement") !== "on") {
      setError("Please confirm that you understand the internship terms.");
      return;
    }

    const fullName = String(formData.get("fullName") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const resume = formData.get("resume");

    if (resume instanceof File && resume.size > 0) {
      if (!/\.(pdf|doc|docx)$/i.test(resume.name)) {
        setError("Please upload your CV as a PDF, DOC, or DOCX file.");
        return;
      }

      if (resume.size > 5 * 1024 * 1024) {
        setError("Your CV must be 5 MB or smaller.");
        return;
      }
    }

    setError("");
    setIsSubmitting(true);

    try {
      let resumeID: string | undefined;

      // Upload the optional CV first.
      if (resume instanceof File && resume.size > 0) {
        const uploadData = new FormData();
        uploadData.append("file", resume);
        uploadData.append(
          "_payload",
          JSON.stringify({ label: `CV / Resume — ${fullName}` }),
        );

        const uploadResponse = await fetch("/api/applicant-documents", {
          method: "POST",
          body: uploadData,
        });

        const uploadResult = await uploadResponse.json().catch(() => null);

        if (!uploadResponse.ok) {
          throw new Error(
            getErrorMessage(uploadResult) ||
              "Your CV could not be uploaded. Please try again.",
          );
        }

        const document = uploadResult?.doc ?? uploadResult;
        if (!document?.id) {
          throw new Error("The CV upload did not return a valid document.");
        }

        resumeID = String(document.id);
      }

      // Create the Job Applications record.
      const applicationResponse = await fetch("/api/job-applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          job: job.id,
          fullName,
          email,
          whatsapp: String(formData.get("whatsapp") || "").trim(),
          location: String(formData.get("location") || "").trim(),
          linkedin: String(formData.get("linkedin") || "").trim(),
          github: String(formData.get("github") || "").trim(),
          portfolio: String(formData.get("portfolio") || "").trim(),
          availability: String(formData.get("availability") || ""),
          whyJoin: String(formData.get("whyJoin") || "").trim(),
          resume: resumeID,
          unpaidAcknowledgement: true,
          source: "website",
        }),
      });

      const applicationResult = await applicationResponse.json().catch(() => null);

      if (!applicationResponse.ok) {
        throw new Error(
          getErrorMessage(applicationResult) ||
            "Your application could not be submitted. Please try again.",
        );
      }

      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (caughtError) {
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#F6F9FF] px-4 py-20 text-[#061A45] sm:px-6 sm:py-24">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-3xl border border-[#8BB8FF] bg-white p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#1769FF] hover:shadow-[5px_7px_0_rgba(120,173,255,0.34),0_18px_38px_rgba(23,105,255,0.13)] sm:p-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl border border-[#86EFAC] bg-[#F0FDF4]">
              <CheckCircle2 className="h-8 w-8 text-[#16A34A]" />
            </div>
            <p className="mt-7 text-xs font-bold uppercase tracking-[0.14em] text-[#1769FF]">Application received</p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Thank you for applying.</h1>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#61708A] sm:text-base">
              Your application for <strong className="text-[#061A45]">{job.title}</strong> has been submitted. A confirmation has also been sent to your email address.
            </p>
            <Link href="/join-us" className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#1769FF] bg-[#1769FF] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#159FE8] hover:shadow-[5px_6px_0_rgba(120,173,255,0.35),0_16px_32px_rgba(23,105,255,0.22)]">
              Back to Careers
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#F6F9FF] px-4 py-12 text-[#061A45] sm:px-6 sm:py-16">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_70%_55%_at_50%_-10%,rgba(23,105,255,0.13),transparent_62%),radial-gradient(circle_at_4%_90%,rgba(109,74,255,0.10),transparent_30%),linear-gradient(180deg,#F6F9FF_0%,#FFFFFF_100%)]" />

      <div className="mx-auto max-w-6xl">
        <Link href="/join-us" className="inline-flex items-center gap-2 text-sm font-semibold text-[#61708A] transition-colors duration-300 hover:text-[#1769FF]">
          <ArrowLeft className="h-4 w-4" />
          Back to Careers
        </Link>

        <div className="mt-7 grid gap-7 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <aside className="rounded-3xl border border-[#8BB8FF] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1769FF] hover:shadow-[5px_7px_0_rgba(120,173,255,0.34),0_18px_38px_rgba(23,105,255,0.13)] sm:p-7 lg:sticky lg:top-28">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#1769FF]/20 bg-[#EEF5FF]">
              <BriefcaseBusiness className="h-5 w-5 text-[#1769FF]" />
            </div>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-[#1769FF]">You are applying for</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight">{job.title}</h1>
            <div className="mt-6 space-y-3 border-t border-[#D9E6FA] pt-5 text-sm text-[#61708A]">
              <p className="flex items-center gap-2"><BriefcaseBusiness className="h-4 w-4 text-[#1769FF]" />{job.department}</p>
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#1769FF]" />{job.workMode === "remote" ? "Remote" : job.location}</p>
            </div>
            <div className="mt-7 rounded-2xl border border-[#FDBA74] bg-[#FFF7ED] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#F97316] hover:shadow-[5px_6px_0_rgba(251,146,60,0.25),0_12px_24px_rgba(249,115,22,0.10)]">
              <ShieldCheck className="h-5 w-5 text-[#F97316]" />
              <p className="mt-3 text-sm font-bold text-[#9A4E00]">Internship terms</p>
              <p className="mt-2 text-sm leading-6 text-[#9A5B12]">This role begins as an unpaid internship for an initial two-month period. Strong contributors may be considered for project-based earnings after successful delivery and future paid opportunities.</p>
            </div>
            <p className="mt-6 text-xs leading-5 text-[#61708A]">{roleHint}</p>
          </aside>

          <section className="rounded-3xl border border-[#8BB8FF] bg-white p-6 transition-all duration-300 hover:border-[#1769FF] sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#1769FF]/20 bg-[#EEF5FF]"><UserRound className="h-5 w-5 text-[#1769FF]" /></div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#1769FF]">DevHatch Labs Careers</p>
                <h2 className="mt-1 text-2xl font-bold tracking-tight">Submit your application</h2>
                <p className="mt-2 text-sm leading-6 text-[#61708A]">Complete the details below. Fields marked with <span className="font-bold text-[#E03A3A]">*</span> are required.</p>
              </div>
            </div>

            {error && <div className="mt-6 rounded-2xl border border-[#FF8B8B] bg-[#FFF5F5] p-4 text-sm leading-6 text-[#B42318]">{error}</div>}

            <form onSubmit={handleSubmit} className="mt-8 space-y-7">
              <input type="text" name="companyWebsite" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

              <div className="grid gap-5 sm:grid-cols-2">
                <label className={labelClass}>Full name <span className="text-[#E03A3A]">*</span><input name="fullName" required autoComplete="name" placeholder="Your full name" className={inputClass} /></label>
                <label className={labelClass}>Email address <span className="text-[#E03A3A]">*</span><input type="email" name="email" required autoComplete="email" placeholder="you@example.com" className={inputClass} /></label>
                <label className={labelClass}>WhatsApp number <span className="text-[#E03A3A]">*</span><input type="tel" name="whatsapp" required autoComplete="tel" placeholder="+92 3XX XXXXXXX" className={inputClass} /></label>
                <label className={labelClass}>Current city / country <span className="text-[#E03A3A]">*</span><input name="location" required placeholder="Lahore, Pakistan" className={inputClass} /></label>
              </div>

              <div className="rounded-2xl border border-[#B7D1FF] bg-[#F6F9FF] p-5">
                <div className="flex items-center gap-2"><Link2 className="h-4 w-4 text-[#1769FF]" /><p className="text-sm font-bold">Profile and work links</p></div>
                <div className="mt-5 grid gap-5">
                  <label className={labelClass}>LinkedIn profile link <span className="text-[#E03A3A]">*</span><input type="url" name="linkedin" required placeholder="https://linkedin.com/in/your-profile" className={inputClass} /></label>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className={labelClass}>GitHub / code portfolio <span className="font-normal text-[#8A99B2]">(optional)</span><input type="url" name="github" placeholder="https://github.com/your-username" className={inputClass} /></label>
                    <label className={labelClass}>Portfolio / work sample <span className="font-normal text-[#8A99B2]">(optional)</span><input type="url" name="portfolio" placeholder="Behance, Figma, Drive, TikTok, YouTube..." className={inputClass} /></label>
                  </div>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className={labelClass}>Availability each week <span className="text-[#E03A3A]">*</span><select name="availability" required defaultValue="" className={inputClass}><option value="" disabled>Select availability</option><option value="5-10-hours">5–10 hours per week</option><option value="10-15-hours">10–15 hours per week</option><option value="15-20-hours">15–20 hours per week</option><option value="20-plus-hours">20+ hours per week</option></select></label>
                <div><p className={labelClass}>CV / resume <span className="font-normal text-[#8A99B2]">(optional)</span></p><label className="mt-2 flex min-h-[50px] cursor-pointer items-center gap-3 rounded-2xl border border-dashed border-[#8BB8FF] bg-white px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#1769FF] hover:shadow-[5px_6px_0_rgba(120,173,255,0.26),0_12px_24px_rgba(23,105,255,0.08)]"><UploadCloud className="h-5 w-5 shrink-0 text-[#1769FF]" /><span className="min-w-0"><span className="block truncate text-sm font-semibold">{fileName || "Upload PDF, DOC, or DOCX"}</span><span className="block text-xs text-[#61708A]">Maximum size: 5 MB</span></span><input type="file" name="resume" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" onChange={handleFileChange} className="sr-only" /></label></div>
              </div>

              <label className={labelClass}>Why do you want to join DevHatch Labs? <span className="text-[#E03A3A]">*</span><textarea name="whyJoin" required rows={6} placeholder="Tell us what interests you about this role, your relevant experience, and what you would like to contribute." className={`${inputClass} resize-y`} /></label>

              <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-[#FFB5B5] bg-[#FFF7F7] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#EF4444] hover:shadow-[4px_5px_0_rgba(255,140,140,0.20)]"><input type="checkbox" name="unpaidAcknowledgement" required className="mt-1 h-4 w-4 accent-[#1769FF]" /><span className="text-sm leading-6 text-[#8F2424]">I understand that this is an unpaid internship for an initial two-month period. Project contribution earnings, when applicable, are reviewed after successful client delivery and payment. Long-term paid opportunities depend on performance and company needs.</span></label>

              <div className="flex flex-col gap-4 border-t border-[#D9E6FA] pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="flex items-center gap-2 text-xs leading-5 text-[#61708A]"><Paperclip className="h-3.5 w-3.5 text-[#1769FF]" />Your application and any uploaded CV are stored privately for the DevHatch hiring team.</p>
                <button type="submit" disabled={isSubmitting} className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1769FF] bg-[#1769FF] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#159FE8] hover:shadow-[5px_6px_0_rgba(120,173,255,0.35),0_16px_32px_rgba(23,105,255,0.22)] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-none">{isSubmitting ? <><Loader2 className="h-4 w-4 animate-spin" />Submitting application...</> : <><Send className="h-4 w-4" />Submit Application</>}</button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}

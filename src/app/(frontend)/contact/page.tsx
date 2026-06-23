"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  ArrowRight,
  Building2,
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  Sparkles,
  User,
} from "lucide-react";
import Link from "next/link";
import {
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from "react";
import type { LucideIcon } from "lucide-react";

type LeadFormData = {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

const initialForm: LeadFormData = {
  name: "",
  email: "",
  company: "",
  service: "",
  budget: "",
  message: "",
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const inputBase =
  "w-full rounded-xl border border-[#D9E6FA] bg-white py-3 pl-10 pr-4 text-sm font-medium text-[#061A45] outline-none transition placeholder:text-[#9AA9BE] focus:border-[#1769FF] focus:ring-4 focus:ring-[#1769FF]/10";

function Field({
  label,
  icon: Icon,
  children,
}: {
  label: string;
  icon: LucideIcon;
  children: ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.14em] text-[#61708A]">
        {label}
      </label>

      <div className="relative">
        <Icon className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-[#1769FF]" />
        {children}
      </div>
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState<LeadFormData>(initialForm);
  const [status, setStatus] = useState<Status>("idle");

  const updateField =
    (field: keyof LeadFormData) =>
    (
      event: ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setForm((currentForm) => ({
        ...currentForm,
        [field]: event.target.value,
      }));
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.message.trim()
    ) {
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          company: form.company.trim(),
          service: form.service || undefined,
          budget: form.budget || undefined,
          message: form.message.trim(),
          source: "website",
        }),
      });

      if (!response.ok) {
        throw new Error("Could not save lead");
      }

      setForm(initialForm);
      setStatus("success");
    } catch (error) {
      console.error("Lead submission failed:", error);
      setStatus("error");
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-white pb-24 pt-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-10%,rgba(23,105,255,0.12),transparent_64%)]" />
      <div className="pointer-events-none absolute -right-24 top-24 h-80 w-80 rounded-full bg-[#14C8E8]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 top-[55%] h-80 w-80 rounded-full bg-[#6D4AFF]/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <section className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
              className="inline-flex items-center gap-2 rounded-full border border-[#D9E6FA] bg-[#EEF5FF] px-4 py-2 text-xs font-bold text-[#1769FF]"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Start a Conversation
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.1}
              className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-[#061A45] sm:text-5xl lg:text-6xl"
            >
              Let&apos;s build something
              <br />
              <span className="bg-gradient-to-r from-[#1769FF] via-[#159FE8] to-[#6D4AFF] bg-clip-text text-transparent">
                useful together.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.2}
              className="mt-6 max-w-xl text-base leading-relaxed text-[#61708A] sm:text-lg"
            >
              Tell us what you are trying to improve. Whether it is an AI
              chatbot, automation workflow, web application, or custom
              software system, we will help you identify the right direction.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.3}
              className="mt-8 space-y-4 border-t border-[#D9E6FA] pt-7"
            >
              <a
                href="mailto:hello@devhatchlabs.com"
                className="group flex items-center gap-3 text-sm font-semibold text-[#61708A] transition hover:text-[#1769FF]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF5FF] text-[#1769FF] transition group-hover:scale-110 group-hover:bg-[#1769FF] group-hover:text-white">
                  <Mail className="h-4 w-4" />
                </span>

                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.12em] text-[#9AA9BE]">
                    Email us
                  </span>
                  hello@devhatchlabs.com
                </span>
              </a>

              <div className="flex items-center gap-3 text-sm font-semibold text-[#61708A]">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF5FF] text-[#1769FF]">
                  <MapPin className="h-4 w-4" />
                </span>

                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.12em] text-[#9AA9BE]">
                    Working model
                  </span>
                  Remote-first, serving global clients
                </span>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.4}
              className="mt-8 rounded-2xl border border-[#D9E6FA] bg-[#F8FBFF] p-5"
            >
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#1769FF]">
                What happens next
              </p>

              <div className="mt-4 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1769FF] text-[10px] font-bold text-white">
                    01
                  </span>
                  <p className="pt-0.5 text-xs leading-relaxed text-[#61708A]">
                    Share your idea, challenge, or process you want to improve.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1769FF] text-[10px] font-bold text-white">
                    02
                  </span>
                  <p className="pt-0.5 text-xs leading-relaxed text-[#61708A]">
                    We review the requirements and suggest a practical solution.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1769FF] text-[10px] font-bold text-white">
                    03
                  </span>
                  <p className="pt-0.5 text-xs leading-relaxed text-[#61708A]">
                    Together, we scope the next step toward a useful MVP.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.2}
            className="relative"
          >
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-[#1769FF]/10 via-[#14C8E8]/10 to-[#6D4AFF]/10 blur-2xl" />

            <div className="overflow-hidden rounded-3xl border border-[#D9E6FA] bg-white p-6 shadow-[0_20px_50px_rgba(23,105,255,0.12)] sm:p-8">
              <div className="flex items-center justify-between border-b border-[#D9E6FA] pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#1769FF]">
                    Project Inquiry
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-[#061A45]">
                    Tell us about your idea.
                  </h2>
                </div>

                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>
              </div>

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    className="flex min-h-[440px] flex-col items-center justify-center px-4 text-center"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1769FF]/10 text-[#1769FF]">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>

                    <h3 className="mt-6 text-2xl font-bold text-[#061A45]">
                      Message received.
                    </h3>

                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#61708A]">
                      Your inquiry has been saved successfully. DevHatch Labs
                      will review it and get back to you soon.
                    </p>

                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#D9E6FA] px-5 py-3 text-sm font-bold text-[#1769FF] transition hover:border-[#1769FF] hover:bg-[#EEF5FF]"
                    >
                      Send another message
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="mt-7 space-y-5"
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Your name" icon={User}>
                        <input
                          type="text"
                          required
                          placeholder="Your full name"
                          value={form.name}
                          onChange={updateField("name")}
                          className={inputBase}
                        />
                      </Field>

                      <Field label="Email address" icon={Mail}>
                        <input
                          type="email"
                          required
                          placeholder="you@company.com"
                          value={form.email}
                          onChange={updateField("email")}
                          className={inputBase}
                        />
                      </Field>
                    </div>

                    <Field label="Company or organization" icon={Building2}>
                      <input
                        type="text"
                        placeholder="Company name (optional)"
                        value={form.company}
                        onChange={updateField("company")}
                        className={inputBase}
                      />
                    </Field>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="What do you need?" icon={Sparkles}>
                        <select
                          value={form.service}
                          onChange={updateField("service")}
                          className={`${inputBase} cursor-pointer appearance-none`}
                        >
                          <option value="">Select a service</option>
                          <option value="ai-chatbot">AI Chatbot</option>
                          <option value="agentic-ai">
                            Agentic AI System
                          </option>
                          <option value="rag-application">
                            RAG Application
                          </option>
                          <option value="ai-automation">
                            AI Automation
                          </option>
                          <option value="custom-software">
                            Custom Software
                          </option>
                          <option value="web-application">
                            Web Application
                          </option>
                          <option value="other">Other / Not sure yet</option>
                        </select>
                      </Field>

                      <Field label="Estimated budget" icon={Sparkles}>
                        <select
                          value={form.budget}
                          onChange={updateField("budget")}
                          className={`${inputBase} cursor-pointer appearance-none`}
                        >
                          <option value="">Select a range</option>
                          <option value="under-500">Under $500</option>
                          <option value="500-1500">$500 – $1,500</option>
                          <option value="1500-5000">$1,500 – $5,000</option>
                          <option value="5000-plus">$5,000+</option>
                          <option value="discuss">Let&apos;s discuss</option>
                        </select>
                      </Field>
                    </div>

                    <Field label="Project details" icon={MessageSquare}>
                      <textarea
                        required
                        rows={5}
                        placeholder="Briefly describe what you want to build, improve, or automate..."
                        value={form.message}
                        onChange={updateField("message")}
                        className={`${inputBase} resize-none pt-3`}
                      />
                    </Field>

                    {status === "error" && (
                      <div className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                        <AlertCircle className="h-4 w-4 shrink-0" />
                        Something went wrong. Please try again or email us
                        directly at hello@devhatchlabs.com.
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1769FF] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#0A55D6] hover:shadow-[0_12px_26px_rgba(23,105,255,0.3)] disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Saving your inquiry...
                        </>
                      ) : (
                        <>
                          Send Project Inquiry
                          <Send className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-[10px] font-medium text-[#9AA9BE]">
                      Your project details are securely saved in our lead
                      system. We do not share your information.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </section>

        <section className="mt-20 overflow-hidden rounded-3xl bg-gradient-to-br from-[#061A45] via-[#0A2D70] to-[#1769FF] px-6 py-10 sm:px-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#14C8E8]">
                Prefer email?
              </p>

              <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                Start with a simple conversation.
              </h2>
            </div>

            <Link
              href="mailto:hello@devhatchlabs.com"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#1769FF] transition hover:-translate-y-0.5 hover:bg-[#EEF5FF]"
            >
              Email DevHatch Labs
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
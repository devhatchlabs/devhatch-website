"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Building2,
  Calculator,
  Heart,
  Home,
  Rocket,
  Scale,
  ShoppingBag,
  Sparkles,
  Stethoscope,
  Users,
  Users2,
} from "lucide-react";

const industries = [
  { name: "Marketing Agencies", icon: Building2 },
  { name: "Real Estate", icon: Home },
  { name: "Dental Clinics", icon: Stethoscope },
  { name: "Law Firms", icon: Scale },
  { name: "Coaches & Consultants", icon: Briefcase },
  { name: "SaaS Startups", icon: Rocket },
  { name: "E-commerce Brands", icon: ShoppingBag },
  { name: "Recruitment Agencies", icon: Users },
  { name: "Accounting Firms", icon: Calculator },
  { name: "Healthcare Practices", icon: Heart },
];

const partners = [
  {
    name: "Flozen AI",
    logo: "/images/partners/flozen-ai.png",
    isFlozen: true,
  },
  {
    name: "Tech & Code",
    logo: "/images/partners/tech-code.png",
    isFlozen: false,
  },
];

type OrbitPartnerProps = {
  partner: (typeof partners)[number];
  startRotation: number;
  floatDirection: number;
};

function OrbitPartner({
  partner,
  startRotation,
  floatDirection,
}: OrbitPartnerProps) {
  return (
    <motion.div
      initial={{ rotate: startRotation }}
      animate={{ rotate: startRotation + 360 }}
      transition={{
        duration: 26,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute inset-[14%] sm:inset-[13%]"
    >
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          initial={{
            rotate: -startRotation,
            y: 0,
          }}
          animate={{
            rotate: -startRotation - 360,
            y: [0, floatDirection * 5, 0],
          }}
          transition={{
            rotate: {
              duration: 26,
              repeat: Infinity,
              ease: "linear",
            },
            y: {
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          whileHover={{ scale: 1.06 }}
        >
          <div className="relative flex h-[76px] w-[108px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.82),rgba(238,245,255,0.42))] px-3 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_16px_34px_rgba(23,105,255,0.18)] backdrop-blur-[22px] transition hover:border-[#1769FF]/70 sm:h-[82px] sm:w-[122px]">
            {/* Glass reflection */}
            <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_10%,rgba(255,255,255,0.95),transparent_38%)]" />
            <span className="pointer-events-none absolute inset-x-4 top-0 h-px bg-white/95" />

            <div
              className={`relative z-10 ${
                partner.isFlozen
                  ? "h-7 w-11 sm:h-8 sm:w-12"
                  : "h-9 w-[58px] sm:h-10 sm:w-[66px]"
              }`}
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                fill
                sizes={partner.isFlozen ? "48px" : "66px"}
                className={`object-contain ${
                  partner.isFlozen ? "mix-blend-multiply" : ""
                }`}
              />
            </div>

            <span className="relative z-10 mt-1.5 text-center text-[9px] font-bold text-[#061A45]">
              {partner.name}
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function IndustriesSection() {
  return (
<section className="relative overflow-hidden bg-white pt-20 pb-6 sm:pt-24 sm:pb-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-10%,rgba(23,105,255,0.08),transparent_62%)]" />
      <div className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-[#14C8E8]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-[#6D4AFF]/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#D9E6FA] bg-[#EEF5FF] px-4 py-1.5 text-xs font-bold text-[#1769FF]">
            <Sparkles className="h-3.5 w-3.5" />
            Who We Work With
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#061A45] sm:text-4xl">
            Built for teams that move{" "}
            <span className="bg-gradient-to-r from-[#1769FF] via-[#159FE8] to-[#6D4AFF] bg-clip-text text-transparent">
              fast and decide fast.
            </span>
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-[#61708A] sm:text-base">
            DevHatch Labs builds practical AI, automation, software, and web
            systems for teams that want to work smarter and scale confidently.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <motion.div
                key={industry.name}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="group flex min-h-32 flex-col items-center justify-center gap-3 rounded-2xl border border-[#D9E6FA] bg-white px-4 py-5 text-center shadow-[0_8px_24px_rgba(23,105,255,0.04)] transition hover:border-[#1769FF]/40 hover:shadow-[0_16px_32px_rgba(23,105,255,0.12)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF5FF] text-[#1769FF] transition duration-300 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#1769FF] group-hover:to-[#6D4AFF] group-hover:text-white">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </div>

                <p className="text-xs font-semibold leading-relaxed text-[#061A45]">
                  {industry.name}
                </p>
              </motion.div>
            );
          })}
        </div>

        <section className="mt-16 overflow-hidden rounded-3xl border border-[#D9E6FA] bg-gradient-to-br from-white via-[#F8FBFF] to-[#EEF5FF] p-6 shadow-[0_16px_40px_rgba(23,105,255,0.08)] sm:p-10">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#D9E6FA] bg-white px-3.5 py-1.5 text-xs font-bold text-[#1769FF] shadow-sm">
                <Users2 className="h-3.5 w-3.5" />
                Partner Ecosystem
              </span>

              <h3 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#061A45]">
                Building stronger ideas through{" "}
                <span className="bg-gradient-to-r from-[#1769FF] to-[#6D4AFF] bg-clip-text text-transparent">
                  meaningful collaboration.
                </span>
              </h3>

              <p className="mt-5 max-w-lg text-sm leading-relaxed text-[#61708A] sm:text-base">
                DevHatch Labs collaborates with communities and technology
                partners that support innovation, AI, learning, and practical
                business impact.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#1769FF] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#0A55D6] hover:shadow-[0_12px_24px_rgba(23,105,255,0.26)]"
                >
                  Partner With Us
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-[#D9E6FA] bg-white px-5 py-3 text-sm font-bold text-[#061A45] transition hover:border-[#1769FF]/40 hover:bg-[#EEF5FF] hover:text-[#1769FF]"
                >
                  Contact DevHatch
                </Link>
              </div>

              <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>

                <span className="text-xs font-semibold text-emerald-700">
                  2 Active Partners
                </span>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative flex h-[310px] w-[310px] items-center justify-center sm:h-[370px] sm:w-[370px]">
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(23,105,255,0.16),transparent_64%)]" />
                <div className="absolute inset-[18%] rounded-full bg-[#1769FF]/10 blur-3xl" />

                {/* Orbit rings */}
                <div className="absolute inset-5 rounded-full border border-[#1769FF]/18" />
                <div className="absolute inset-14 rounded-full border border-[#159FE8]/25" />
                <div className="absolute inset-24 rounded-full border border-[#6D4AFF]/20" />

                {/* Rotating dotted orbit */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 28,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-8 rounded-full border-2 border-dashed border-[#1769FF]/35"
                />

                {/* Orbit dots */}
                <motion.span
                  animate={{ y: [0, -7, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-1/2 top-5 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#1769FF]"
                />

                <motion.span
                  animate={{ x: [0, 7, 0] }}
                  transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute right-[13%] top-[29%] h-2.5 w-2.5 rounded-full bg-[#6D4AFF]"
                />

                <motion.span
                  animate={{ y: [0, 7, 0] }}
                  transition={{
                    duration: 3.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-[12%] left-[18%] h-2.5 w-2.5 rounded-full bg-[#14C8E8]"
                />

                {/* Flozen starts upper-right. Tech & Code starts lower-left. */}
                <OrbitPartner
                  partner={partners[0]}
                  startRotation={45}
                  floatDirection={-1}
                />

                <OrbitPartner
                  partner={partners[1]}
                  startRotation={225}
                  floatDirection={1}
                />

                {/* Visible glass DevHatch center globe */}
                <motion.div
                  animate={{
                    scale: [1, 1.06, 1],
                    y: [0, -4, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10 flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border border-white/90 bg-white/50 p-2 shadow-[inset_0_2px_0_rgba(255,255,255,0.95),0_20px_45px_rgba(23,105,255,0.28)] backdrop-blur-[20px]"
                >
                  <span className="pointer-events-none absolute inset-1 rounded-full border border-white/80" />

                  <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-full border border-white/35 bg-gradient-to-br from-[#1769FF] via-[#159FE8] to-[#6D4AFF] text-center text-white">
                    {/* Strong glass shine */}
                    <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_28%_16%,rgba(255,255,255,0.72),transparent_32%)]" />

                    <motion.span
                      animate={{ x: ["-150%", "220%"] }}
                      transition={{
                        duration: 3.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="pointer-events-none absolute inset-y-0 w-[48%] -skew-x-12 bg-gradient-to-r from-transparent via-white/55 to-transparent blur-md"
                    />

                    <Users2 className="relative h-7 w-7 drop-shadow-sm" />

                    <span className="relative mt-1 text-[10px] font-bold tracking-wide">
                      DEVHATCH
                    </span>
                  </div>
                </motion.div>

                <div className="absolute z-0 h-36 w-36 rounded-full border border-[#1769FF]/25 animate-ping [animation-duration:3s]" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
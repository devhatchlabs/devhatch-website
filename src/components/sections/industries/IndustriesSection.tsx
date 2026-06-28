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
          whileHover={{ scale: 1.07, y: -5 }}
        >
          <div className="group/partner relative flex h-[76px] w-[108px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.82),rgba(238,245,255,0.42))] px-3 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_10px_0_rgba(145,181,255,0.16),0_16px_34px_rgba(23,105,255,0.14)] backdrop-blur-[22px] transition-all duration-300 hover:border-[#1769FF]/70 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_12px_0_rgba(128,171,255,0.26),0_24px_42px_rgba(23,105,255,0.20)] sm:h-[82px] sm:w-[122px]">
            <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_10%,rgba(255,255,255,0.95),transparent_38%)]" />

            <span className="pointer-events-none absolute inset-x-4 top-0 h-px bg-white/95" />

            <div
              className={`relative z-10 transition-transform duration-300 group-hover/partner:scale-105 ${
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

            <span className="relative z-10 mt-1.5 text-center text-[9px] font-bold text-[#061A45] transition-colors duration-300 group-hover/partner:text-[#1769FF]">
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
              <article
                key={industry.name}
                className="group flex min-h-32 flex-col items-center justify-center gap-3 rounded-2xl border border-[#D9E6FA] bg-white px-4 py-5 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#1769FF]/70 hover:shadow-[0_9px_0_rgba(130,170,255,0.24),0_22px_40px_rgba(23,105,255,0.16)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF5FF] text-[#1769FF] transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#1769FF] group-hover:to-[#6D4AFF] group-hover:text-white group-hover:shadow-[0_5px_0_rgba(117,164,255,0.26),0_12px_22px_rgba(23,105,255,0.18)]">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </div>

                <p className="text-xs font-semibold leading-relaxed text-[#061A45] transition-colors duration-300 group-hover:text-[#1769FF]">
                  {industry.name}
                </p>

                <span className="h-px w-0 bg-gradient-to-r from-[#1769FF] via-[#159FE8] to-[#6D4AFF] transition-all duration-300 group-hover:w-14" />
              </article>
            );
          })}
        </div>

        <section className="group mt-16 overflow-hidden rounded-3xl border border-[#D9E6FA] bg-gradient-to-br from-white via-[#F8FBFF] to-[#EEF5FF] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1769FF]/70 hover:shadow-[0_11px_0_rgba(128,171,255,0.22),0_28px_52px_rgba(23,105,255,0.17)] sm:p-10">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#D9E6FA] bg-white px-3.5 py-1.5 text-xs font-bold text-[#1769FF] transition-all duration-300 group-hover:border-[#1769FF]/45 group-hover:shadow-[0_6px_0_rgba(156,188,255,0.16),0_14px_24px_rgba(23,105,255,0.09)]">
                <Users2 className="h-3.5 w-3.5 transition-transform duration-300 group-hover:scale-110" />
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
                  className="group/button inline-flex items-center gap-2 rounded-full border border-[#1769FF] bg-[#1769FF] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#159FE8] hover:bg-[#159FE8] hover:shadow-[0_8px_0_rgba(108,176,255,0.30),0_18px_34px_rgba(23,105,255,0.28)]"
                >
                  Partner With Us
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                </Link>

                <Link
                  href="/contact"
                  className="group/button inline-flex items-center gap-2 rounded-full border border-[#D9E6FA] bg-white px-5 py-3 text-sm font-bold text-[#061A45] transition-all duration-300 hover:-translate-y-1 hover:border-[#1769FF]/70 hover:bg-[#EEF5FF] hover:text-[#1769FF] hover:shadow-[0_7px_0_rgba(137,177,255,0.20),0_18px_30px_rgba(23,105,255,0.12)]"
                >
                  Contact DevHatch
                  <ArrowRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover/button:translate-x-1 group-hover/button:opacity-100" />
                </Link>
              </div>

              <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_8px_18px_rgba(16,185,129,0.12)]">
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

                <div className="absolute inset-5 rounded-full border border-[#1769FF]/18" />

                <div className="absolute inset-14 rounded-full border border-[#159FE8]/25" />

                <div className="absolute inset-24 rounded-full border border-[#6D4AFF]/20" />

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 28,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-8 rounded-full border-2 border-dashed border-[#1769FF]/35"
                />

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
                  className="relative z-10 flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border border-white/90 bg-white/50 p-2 shadow-[inset_0_2px_0_rgba(255,255,255,0.95),0_10px_0_rgba(134,174,255,0.20),0_20px_45px_rgba(23,105,255,0.28)] backdrop-blur-[20px] transition-all duration-300 group-hover:shadow-[inset_0_2px_0_rgba(255,255,255,0.95),0_13px_0_rgba(134,174,255,0.30),0_26px_52px_rgba(23,105,255,0.34)]"
                >
                  <span className="pointer-events-none absolute inset-1 rounded-full border border-white/80" />

                  <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-full border border-white/35 bg-gradient-to-br from-[#1769FF] via-[#159FE8] to-[#6D4AFF] text-center text-white">
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
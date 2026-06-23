import {
  ArrowUpRight,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";

const CALENDLY_URL = "https://calendly.com/saimiftikhar-work/30min";

const services = [
  "AI Chatbots",
  "Agentic AI Systems",
  "RAG Applications",
  "AI Automation",
  "Custom Software",
  "Web Applications",
  "SaaS Product Development",
  "Mobile App Development",
];

const solutions = [
  "Marketing Agencies",
  "Real Estate",
  "SaaS Startups",
  "E-commerce Brands",
  "Healthcare Practices",
  "Recruitment Agencies",
  "Founders & Personal Brands",
];

function LinkedInIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M5.26 3C4.01 3 3 4.01 3 5.26s1.01 2.26 2.26 2.26 2.26-1.01 2.26-2.26S6.51 3 5.26 3ZM3.3 8.82v11.88h3.92V8.82H3.3Zm6.38 0v11.88h3.92v-5.88c0-1.55.29-3.05 2.21-3.05 1.89 0 1.91 1.77 1.91 3.15v5.78h3.92v-6.56c0-3.22-.69-5.7-4.45-5.7-1.81 0-3.02.99-3.52 1.93h-.06V8.82H9.68Z" />
    </svg>
  );
}

function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M13.5 21v-8h2.75l.41-3.12H13.5V7.89c0-.9.25-1.52 1.55-1.52h1.66V3.58A22.2 22.2 0 0 0 14.29 3C11.89 3 10.25 4.46 10.25 7.15v2.73H7.5V13h2.75v8h3.25Z" />
    </svg>
  );
}

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect
        x="3.2"
        y="3.2"
        width="17.6"
        height="17.6"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="17.3" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M16.62 4c.33 2.14 1.53 3.42 3.38 3.7v3.1c-1.34.13-2.51-.3-3.37-.93v5.9c0 4.39-4.79 5.76-7.39 3.02-1.67-1.77-1.32-5.49 1.43-6.64.73-.31 1.53-.44 2.25-.29v3.14c-.26-.08-.54-.11-.82-.07-1.13.17-1.85 1.36-1.42 2.43.64 1.58 3.31 1.38 3.31-.7V4h2.63Z" />
    </svg>
  );
}

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/devhatch-labs",
    icon: LinkedInIcon,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61590566882773",
    icon: FacebookIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/devhatch.labs/",
    icon: InstagramIcon,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@devhatchlabs",
    icon: TikTokIcon,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[#D9E6FA] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.9fr_0.9fr_1fr]">
          <div>
            <Logo />

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-[#61708A]">
              DevHatch Labs builds practical AI systems, automation workflows,
              custom software, websites, and digital products that help
              businesses move smarter and scale faster.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit DevHatch Labs on ${social.label}`}
                    title={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D9E6FA] bg-white text-[#61708A] shadow-sm transition hover:-translate-y-0.5 hover:border-[#1769FF] hover:bg-[#EEF5FF] hover:text-[#1769FF]"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-[#061A45]">
              Services
            </h3>

            <ul className="mt-6 space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-[#61708A] transition hover:text-[#1769FF]"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-[#061A45]">
              Solutions For
            </h3>

            <ul className="mt-6 space-y-3">
              {solutions.map((solution) => (
                <li key={solution}>
                  <Link
                    href="/services"
                    className="text-sm text-[#61708A] transition hover:text-[#1769FF]"
                  >
                    {solution}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-[#061A45]">
              Contact
            </h3>

            <div className="mt-6 space-y-5">
              <a
                href="mailto:hello@devhatchlabs.com"
                className="flex items-start gap-3 text-sm leading-relaxed text-[#61708A] transition hover:text-[#1769FF]"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#1769FF]" />
                <span className="break-all">hello@devhatchlabs.com</span>
              </a>

              <div className="flex items-start gap-3 text-sm leading-relaxed text-[#61708A]">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#1769FF]" />
                <span>Remote-first, serving clients worldwide</span>
              </div>

              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-[#1769FF] px-5 py-3 text-sm font-bold text-white shadow-[0_10px_24px_rgba(23,105,255,0.26)] transition hover:-translate-y-0.5 hover:bg-[#159FE8] hover:shadow-[0_14px_30px_rgba(23,105,255,0.35)]"
              >
                <Sparkles className="h-4 w-4" />
                Book a Call
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[#D9E6FA] pt-6 text-xs text-[#61708A] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} DevHatch Labs. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <Link
              href="/privacy-policy"
              className="transition hover:text-[#1769FF]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-of-service"
              className="transition hover:text-[#1769FF]"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
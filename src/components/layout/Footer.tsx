import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Sparkles } from "lucide-react";

const footerServices = [
  { title: "AI Chatbots", href: "/services" },
  { title: "Agentic AI Systems", href: "/services" },
  { title: "RAG Applications", href: "/services" },
  { title: "AI Automation", href: "/services" },
  { title: "Custom Software", href: "/services" },
  { title: "Web Applications", href: "/services" },
];

const footerIndustries = [
  { name: "Marketing Agencies", href: "/contact" },
  { name: "Real Estate", href: "/contact" },
  { name: "SaaS Startups", href: "/contact" },
  { name: "E-commerce Brands", href: "/contact" },
  { name: "Healthcare Practices", href: "/contact" },
  { name: "Recruitment Agencies", href: "/contact" },
];

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.77.12 3.06.74.8 1.18 1.83 1.18 3.09 0 4.42-2.7 5.4-5.27 5.68.42.36.78 1.08.78 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.38-1.85 3.61 0 4.27 2.38 4.27 5.47v6.27ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

const socialLinks = [
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    href: "https://linkedin.com/company/devhatchlabs",
  },
  {
    icon: GitHubIcon,
    label: "GitHub",
    href: "https://github.com/DevHatchLabs",
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#D9E6FA] bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_65%_50%_at_50%_100%,rgba(23,105,255,0.06),transparent_62%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-0 -z-10 h-72 w-72 rounded-full bg-[#1769FF]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 -z-10 h-80 w-80 rounded-full bg-[#6D4AFF]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col justify-between lg:col-span-4">
            <div>
              <Link
                href="/"
                aria-label="DevHatch Labs home"
                className="group flex w-fit items-center gap-2.5"
              >
                <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-[#D9E6FA] bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-[#1769FF]/45 group-hover:shadow-[0_8px_18px_rgba(23,105,255,0.14)]">
                  <Image
                    src="/brand/Logo1.jpeg"
                    alt="DevHatch Labs"
                    fill
                    sizes="40px"
                    className="object-contain p-1.5"
                  />
                </div>

                <span className="text-lg font-bold tracking-tight text-[#061A45]">
                  DevHatch{" "}
                  <span className="bg-gradient-to-r from-[#1769FF] to-[#6D4AFF] bg-clip-text text-transparent">
                    Labs
                  </span>
                </span>
              </Link>

              <p className="mt-5 max-w-xs text-sm leading-relaxed text-[#61708A]">
                Build practical AI solutions that create measurable business
                impact through AI chatbots, automation, and custom software.
              </p>
            </div>

            <div className="mt-7 flex items-center gap-2.5">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`DevHatch Labs on ${label}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D9E6FA] bg-white text-[#61708A] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1769FF]/45 hover:text-[#1769FF] hover:shadow-[0_8px_18px_rgba(23,105,255,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1769FF] focus-visible:ring-offset-2"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-[#061A45]">
              Services
            </h3>

            <ul className="mt-5 space-y-3.5">
              {footerServices.map((service) => (
                <li key={service.title}>
                  <Link
                    href={service.href}
                    className="text-sm text-[#61708A] transition-colors hover:text-[#1769FF]"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-[#061A45]">
              Solutions For
            </h3>

            <ul className="mt-5 space-y-3.5">
              {footerIndustries.map((industry) => (
                <li key={industry.name}>
                  <Link
                    href={industry.href}
                    className="text-sm text-[#61708A] transition-colors hover:text-[#1769FF]"
                  >
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-[#061A45]">
              Contact
            </h3>

            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href="mailto:hello@devhatchlabs.com"
                  className="flex items-start gap-2.5 text-sm text-[#61708A] transition-colors hover:text-[#1769FF]"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                  <span className="break-all">hello@devhatchlabs.com</span>
                </a>
              </li>

              <li className="flex items-start gap-2.5 text-sm text-[#61708A]">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Remote-first, serving clients worldwide</span>
              </li>

              <li className="pt-2">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#1769FF] px-5 py-2.5 text-xs font-semibold text-white shadow-[0_8px_22px_rgba(23,105,255,0.24)] transition-all hover:-translate-y-0.5 hover:bg-[#159FE8]"
                >
                  <Sparkles className="h-3.5 w-3.5 transition-transform group-hover:scale-110" />
                  Book a Call
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[#D9E6FA] pt-8 text-xs font-medium text-[#61708A] sm:flex-row">
          <p>© {new Date().getFullYear()} DevHatch Labs. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="transition-colors hover:text-[#1769FF]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-[#1769FF]"
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
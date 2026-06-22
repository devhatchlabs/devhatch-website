import Link from "next/link";
import { Mail } from "lucide-react";
import { Logo } from "@/components/layout/Logo";

const servicesLinks = [
  { label: "AI Chatbots", href: "/services" },
  { label: "Agentic AI Systems", href: "/services" },
  { label: "RAG Applications", href: "/services" },
  { label: "AI Automation", href: "/services" },
  { label: "Custom Software", href: "/services" },
  { label: "Web Applications", href: "/services" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

const linkClass =
  "rounded-sm text-sm text-muted-foreground transition-colors hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.77.12 3.06.74.8 1.18 1.83 1.18 3.09 0 4.42-2.7 5.4-5.27 5.68.42.36.78 1.08.78 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.38-1.85 3.61 0 4.27 2.38 4.27 5.47v6.27ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-background">
      {/* Soft blue-violet glow — one corner only, very subtle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-6rem] h-80 w-80 rounded-full bg-gradient-to-br from-brand-blue/10 via-violet/10 to-transparent blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              AI systems, automation, and custom software built for ambitious
              teams.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://linkedin.com/company/devhatchlabs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DevHatch Labs on LinkedIn"
                className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-brand-blue/40 hover:bg-soft-blue hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <LinkedinIcon className="size-4" />
              </a>

              <a
                href="https://github.com/DevHatchLabs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DevHatch Labs on GitHub"
                className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-brand-blue/40 hover:bg-soft-blue hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <GithubIcon className="size-4" />
              </a>
            </div>
          </div>

          {/* Services column */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-navy">Services</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {servicesLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-navy">Company</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-navy">Contact</h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href="mailto:hello@devhatchlabs.com"
                  className={`${linkClass} inline-flex items-center gap-1.5`}
                >
                  <Mail className="size-3.5" />
                  hello@devhatchlabs.com
                </a>
              </li>
              <li className="text-sm text-muted-foreground">
                Remote-first, serving clients worldwide
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © 2026 DevHatch Labs. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className={`${linkClass} text-xs`}>
              Privacy Policy
            </Link>
            <Link href="/terms" className={`${linkClass} text-xs`}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
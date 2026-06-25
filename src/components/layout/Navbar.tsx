"use client";

import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  BarChart3,
  Bot,
  Brain,
  ChevronDown,
  Code2,
  Database,
  Layers,
  Menu,
  MessageSquare,
  Search,
  Sparkles,
  Workflow,
  X,
  Zap,
} from "lucide-react";

const CALENDLY_URL = "https://calendly.com/saimiftikhar-work/30min";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/join-us" },
  { label: "Contact", href: "/contact" },
];

const serviceGroups = [
  {
    icon: Bot,
    title: "AI & Automation",
    description: "Intelligent systems that work for you",
    items: [
      { label: "AI Chatbots", icon: MessageSquare },
      { label: "Agentic AI Systems", icon: Brain },
      { label: "RAG Applications", icon: Database },
      { label: "AI Automation", icon: Workflow },
      { label: "AI Calling Agents", icon: Bot },
      { label: "WhatsApp Automation", icon: MessageSquare },
    ],
  },
  {
    icon: Workflow,
    title: "Business Systems",
    description: "Connected operations and lead workflows",
    items: [
      { label: "CRM Automation", icon: Workflow },
      { label: "Lead Generation Systems", icon: Zap },
      { label: "Custom Software", icon: Layers },
      { label: "Business Dashboards", icon: BarChart3 },
      { label: "API & Integrations", icon: Database },
    ],
  },
  {
    icon: Code2,
    title: "Digital Products & Growth",
    description: "Products, platforms, and visibility",
    items: [
      { label: "Web Applications", icon: Code2 },
      { label: "Full-Stack Applications", icon: Layers },
      { label: "SaaS Product Development", icon: Layers },
      { label: "Business Websites", icon: Code2 },
      { label: "SEO & Search Visibility", icon: Search },
      { label: "Personal Branding", icon: Sparkles },
    ],
  },
];

const transition = {
  duration: 0.22,
  ease: [0.16, 1, 0.3, 1] as const,
};

function isRouteActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const servicesMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesMenuRef.current &&
        !servicesMenuRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsServicesOpen(false);
        setIsMobileMenuOpen(false);
        setIsMobileServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-[#D9E6FA] bg-white/90 py-3 shadow-[0_8px_28px_rgba(6,26,69,0.06)] backdrop-blur-xl"
          : "bg-white/75 py-4 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between gap-4">
          {/* Brand: Logo.tsx already includes the icon and DEVHATCH LABS text */}
          <div className="flex shrink-0 items-center">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary navigation"
            className="hidden items-center rounded-full border border-[#D9E6FA] bg-[#F8FBFF]/90 p-1.5 lg:flex"
          >
            <Link
              href="/"
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                isRouteActive(pathname, "/")
                  ? "bg-white text-[#1769FF] shadow-sm"
                  : "text-[#61708A] hover:text-[#1769FF]"
              }`}
            >
              Home
            </Link>

            <div ref={servicesMenuRef} className="relative">
              <button
                type="button"
                onClick={() => setIsServicesOpen((current) => !current)}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                  isServicesOpen || isRouteActive(pathname, "/services")
                    ? "bg-white text-[#1769FF] shadow-sm"
                    : "text-[#61708A] hover:text-[#1769FF]"
                }`}
              >
                Services

                <motion.span
                  animate={{ rotate: isServicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.18 }}
                  className="inline-flex"
                >
                  <ChevronDown className="h-4 w-4" />
                </motion.span>
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={transition}
                    className="absolute left-1/2 top-full mt-4 w-[840px] -translate-x-[32%] overflow-hidden rounded-2xl border border-[#D9E6FA] bg-white shadow-[0_22px_60px_rgba(6,26,69,0.13)]"
                  >
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_50%_0%,rgba(23,105,255,0.07),transparent_65%)]"
                    />

                    <div className="relative grid grid-cols-3 gap-6 p-6">
                      {serviceGroups.map((group) => {
                        const GroupIcon = group.icon;

                        return (
                          <div key={group.title}>
                            <div className="flex items-center gap-2.5 border-b border-[#D9E6FA] pb-3">
                              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EEF5FF] text-[#1769FF]">
                                <GroupIcon className="h-4 w-4" />
                              </div>

                              <div>
                                <h3 className="text-xs font-bold uppercase tracking-[0.1em] text-[#061A45]">
                                  {group.title}
                                </h3>

                                <p className="mt-0.5 text-[10px] text-[#61708A]">
                                  {group.description}
                                </p>
                              </div>
                            </div>

                            <div className="mt-3 space-y-1">
                              {group.items.map((item) => {
                                const ItemIcon = item.icon;

                                return (
                                  <Link
                                    key={item.label}
                                    href="/services"
                                    onClick={() => setIsServicesOpen(false)}
                                    className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-[#61708A] transition-all hover:bg-[#EEF5FF] hover:text-[#1769FF]"
                                  >
                                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[#D9E6FA] bg-white text-[#61708A] transition-colors group-hover:border-[#1769FF]/25 group-hover:text-[#1769FF]">
                                      <ItemIcon className="h-3.5 w-3.5" />
                                    </div>

                                    {item.label}
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="relative flex items-center justify-between border-t border-[#D9E6FA] bg-[#F8FBFF] px-6 py-4">
                      <p className="text-xs text-[#61708A]">
                        Explore practical AI, automation, software, and growth
                        systems.
                      </p>

                      <Link
                        href="/services"
                        onClick={() => setIsServicesOpen(false)}
                        className="group inline-flex items-center gap-1.5 text-xs font-bold text-[#1769FF] transition-all hover:gap-2.5"
                      >
                        View all services
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

           {navLinks
  .filter((item) => item.label !== "Services")
  .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    isRouteActive(pathname, item.href)
                      ? "bg-white text-[#1769FF] shadow-sm"
                      : "text-[#61708A] hover:text-[#1769FF]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
          </nav>

          {/* Desktop Calendly CTA */}
          <div className="hidden sm:block">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-1.5 rounded-full bg-[#1769FF] px-5 py-2.5 text-xs font-bold text-white shadow-[0_8px_22px_rgba(23,105,255,0.24)] transition-all hover:-translate-y-0.5 hover:bg-[#159FE8] hover:shadow-[0_12px_30px_rgba(23,105,255,0.34)]"
            >
              Book a Call
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((current) => !current)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#D9E6FA] bg-white text-[#061A45] shadow-sm transition-all hover:border-[#1769FF]/40 hover:text-[#1769FF] lg:hidden"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={transition}
            className="absolute left-0 right-0 top-full max-h-[calc(100vh-5rem)] overflow-y-auto border-b border-[#D9E6FA] bg-white shadow-[0_16px_34px_rgba(6,26,69,0.10)] lg:hidden"
          >
            <nav aria-label="Mobile navigation" className="space-y-2 p-5">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className={`block rounded-xl px-4 py-3 text-sm font-bold transition-colors ${
                  isRouteActive(pathname, "/")
                    ? "bg-[#EEF5FF] text-[#1769FF]"
                    : "text-[#061A45] hover:bg-[#F8FBFF]"
                }`}
              >
                Home
              </Link>

              <div className="overflow-hidden rounded-2xl border border-[#D9E6FA] bg-[#F8FBFF] p-2">
                <button
                  type="button"
                  onClick={() =>
                    setIsMobileServicesOpen((current) => !current)
                  }
                  aria-expanded={isMobileServicesOpen}
                  className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm font-bold text-[#061A45]"
                >
                  Services

                  <motion.span
                    animate={{ rotate: isMobileServicesOpen ? 180 : 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <ChevronDown className="h-4 w-4 text-[#61708A]" />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={transition}
                      className="overflow-hidden"
                    >
                      <div className="space-y-5 border-l-2 border-[#1769FF]/20 px-3 pb-3 pl-4 pt-2">
                        {serviceGroups.map((group) => {
                          const GroupIcon = group.icon;

                          return (
                            <div key={group.title}>
                              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#61708A]">
                                <GroupIcon className="h-3.5 w-3.5 text-[#1769FF]" />
                                {group.title}
                              </div>

                              <div className="mt-2 space-y-1">
                                {group.items.map((item) => {
                                  const ItemIcon = item.icon;

                                  return (
                                    <Link
                                      key={item.label}
                                      href="/services"
                                      onClick={closeMobileMenu}
                                      className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-[#61708A] transition-colors hover:bg-white hover:text-[#1769FF]"
                                    >
                                      <ItemIcon className="h-3.5 w-3.5" />
                                      {item.label}
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

             {navLinks
  .filter((item) => item.label !== "Services")
  .map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`block rounded-xl px-4 py-3 text-sm font-bold transition-colors ${
                      isRouteActive(pathname, item.href)
                        ? "bg-[#EEF5FF] text-[#1769FF]"
                        : "text-[#061A45] hover:bg-[#F8FBFF]"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}

              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer"
                onClick={closeMobileMenu}
                className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#1769FF] px-5 py-3 text-sm font-bold text-white shadow-[0_8px_22px_rgba(23,105,255,0.23)] transition-colors hover:bg-[#159FE8]"
              >
                Book a Call
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
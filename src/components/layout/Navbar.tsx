"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/layout/Logo";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md transition-shadow duration-300",
        scrolled ? "border-border shadow-soft" : "border-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium text-navy transition-colors hover:text-electric-blue"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-electric-blue transition-all duration-200 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild>
            <Link href="/contact">Book a Discovery Call</Link>
          </Button>
        </div>

        <button
          type="button"
          className="text-navy md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile menu — always mounted, transitions smoothly via
          max-height/opacity (no extra animation library needed). */}
      <div
        id="mobile-nav"
        className={cn(
          "overflow-hidden border-t border-border bg-white transition-all duration-300 ease-out md:hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 border-t-0 opacity-0"
        )}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-1 px-6 pb-4 pt-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-navy transition-colors hover:bg-soft-blue hover:text-electric-blue"
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="mt-2">
            <Link href="/contact" onClick={closeMenu}>
              Book a Discovery Call
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems } from "@/config/site";

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-bold tracking-tight" onClick={() => setOpen(false)}>
          Dev<span className="text-primary">Hatch</span>
          <span className="ml-1 hidden text-xs font-normal text-muted-foreground sm:inline">Labs</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-foreground/80 transition-colors hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild>
            <Link href="/contact">Book a Call</Link>
          </Button>
        </div>

        <button className="md:hidden" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((v) => !v)}>
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border px-6 pb-4 pt-2 md:hidden">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-md px-2 py-2 text-sm text-foreground/80 hover:bg-secondary hover:text-foreground" onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Button asChild className="mt-2">
            <Link href="/contact" onClick={() => setOpen(false)}>Book a Call</Link>
          </Button>
        </nav>
      )}
    </header>
  );
}
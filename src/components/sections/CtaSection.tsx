import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-primary/5 px-8 py-16 text-center">
          <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          </div>
          <div className="relative">
            <p className="mb-4 font-mono text-xs font-medium uppercase tracking-widest text-primary">Ready to Build?</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Have something to build?</h2>
            <p className="mx-auto mt-4 max-w-md text-muted-foreground">Book a free 30-minute call. We&apos;ll look at your workflow, identify where AI creates real leverage, and tell you honestly whether we&apos;re the right fit.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Book a Call <ArrowRight className="size-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="mailto:hello@devhatchlabs.com">hello@devhatchlabs.com</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
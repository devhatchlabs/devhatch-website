"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Swap this single constant when a transparent SVG/PNG logo is ready.
// Nothing else about this component or the layout needs to change.
const LOGO_SRC = "/brand/Logo_02.png";

type LogoProps = {
  className?: string;
  /** Hide the "Labs" sub-label on very tight layouts (e.g. mobile menu header) */
  compact?: boolean;
};

export function Logo({ className, compact = false }: LogoProps) {
  const [imageFailed, setImageFailed] = React.useState(false);

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )}
      aria-label="DevHatch Labs — Home"
    >
      {!imageFailed ? (
        // The source JPEG has a white canvas — on a white navbar/footer
        // this blends in cleanly, so no extra border or background is
        // added here. If the asset ever shows a visible edge or low
        // contrast in practice, the fix is cropping the source image
        // tighter, not changing this component.
        <span className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg">
          <Image
            src={LOGO_SRC}
            alt="DevHatch Labs"
            fill
            sizes="36px"
            className="object-contain"
            priority
            onError={() => setImageFailed(true)}
          />
        </span>
      ) : (
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-blue to-electric-blue font-mono text-sm font-bold text-white">
          DH
        </span>
      )}

      <span className="flex items-baseline gap-1 text-lg font-bold leading-none tracking-tight">
        <span className="text-navy">Dev</span>
        <span className="text-brand-blue">Hatch</span>
        {!compact && (
          <span className="hidden text-xs font-normal text-muted-foreground sm:inline">
            Labs
          </span>
        )}
      </span>
    </Link>
  );
}
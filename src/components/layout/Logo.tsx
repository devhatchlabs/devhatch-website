import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  href?: string;
};

export function Logo({
  className = "",
  href = "/",
}: LogoProps) {
  return (
    <Link
      href={href}
      aria-label="DevHatch Labs home"
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#D9E6FA] bg-[#061A45] shadow-[0_5px_14px_rgba(23,105,255,0.14)] transition duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_10px_22px_rgba(23,105,255,0.22)]">
        <Image
          src="/brand/devhatch-mark.png"
          alt="DevHatch Labs logo"
          fill
          priority
          sizes="48px"
          className="scale-110 object-contain"
        />
      </span>

      <span className="flex min-w-0 flex-col leading-none">
        <span className="text-[19px] font-extrabold tracking-[0.07em] sm:text-[21px]">
          <span className="text-[#061A45]">DEV</span>
          <span className="text-[#1769FF]">HATCH</span>
        </span>

        <span className="mt-1.5 flex items-center gap-2 text-[8px] font-bold tracking-[0.42em] text-[#61708A] sm:text-[9px]">
          <span className="h-px w-5 bg-[#1769FF]" />
          LABS
          <span className="h-px w-5 bg-[#1769FF]" />
        </span>
      </span>
    </Link>
  );
}

export default Logo;
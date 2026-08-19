import Link from "next/link";
import { company } from "@/data/company";
import { ROUTES } from "@/lib/site";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href={ROUTES.home}
      className={`flex flex-col leading-none ${className}`.trim()}
      aria-label={`${company.legalName} — página inicial`}
    >
      <span className="font-[family-name:var(--font-space-grotesk)] text-[28px] font-bold tracking-[-0.06em]">
        <span className="text-neon">X</span>
        <span className="text-white">1</span>
      </span>
      <span className="mt-0.5 text-[8px] font-medium uppercase tracking-[0.18em]">
        <span className="text-zinc-300">Games e </span>
        <span className="text-primary">Eletrônicos</span>
      </span>
    </Link>
  );
}

import Image from "next/image";
import Link from "next/link";
import { company } from "@/data/company";
import { ROUTES } from "@/lib/site";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href={ROUTES.home}
      className={`inline-flex shrink-0 items-center ${className}`.trim()}
      aria-label={`${company.legalName} — página inicial`}
    >
      <Image
        src="/images/logo-x1.webp"
        alt={company.legalName}
        width={768}
        height={255}
        priority
        className="h-8 w-auto sm:h-9"
      />
    </Link>
  );
}

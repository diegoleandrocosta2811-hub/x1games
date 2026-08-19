import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { partners } from "@/data/company";
import { ROUTES } from "@/lib/site";

export function PartnersSection() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-[28px] font-bold leading-[1.05] sm:text-[40px]">
                Quem conhece,
                <br />
                <span className="text-neon">escolhe X1.</span>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                A X1 já esteve ao lado de grandes nomes.
              </p>
            </div>
            <Link
              href={ROUTES.sobre}
              className="inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-white hover:text-primary"
            >
              Ver mais
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
        <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {partners.map((partner) => (
            <article
              key={partner.id}
              className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-[16px] border border-white/10 bg-[#101012]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={partner.image}
                alt={partner.imageAlt}
                width={900}
                height={1120}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"
                aria-hidden="true"
              />
              <h3 className="relative z-10 p-4 text-[13px] font-semibold leading-tight sm:text-sm">
                {partner.name}
              </h3>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

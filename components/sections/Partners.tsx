import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { partners } from "@/data/company";

export function Partners() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="parcerias-titulo">
      <Container>
        <Reveal>
          <SectionHeading
            id="parcerias-titulo"
            eyebrow="Parcerias"
            title="Quem conhece, escolhe X1."
            description="A X1 já realizou ações e parcerias com grandes nomes."
            align="center"
          />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner) => (
            <article
              key={partner.id}
              className="relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-[16px] border border-white/10 bg-[#101012]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={partner.image}
                alt={partner.imageAlt}
                width={900}
                height={1120}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
              <p className="relative z-10 p-4 font-medium">{partner.name}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

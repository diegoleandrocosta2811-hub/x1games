import { DeliveryCta } from "@/components/shared/SectionCtas";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Delivery() {
  return (
    <section
      id="entrega"
      className="py-16 sm:py-20"
      aria-labelledby="entrega-titulo"
    >
      <Container>
        <Reveal>
          <div className="rounded-xl border border-border bg-card p-8 sm:p-12">
            <SectionHeading
              id="entrega-titulo"
              eyebrow="Entrega"
              title="A X1 vai até você."
              description="Escolha seu aparelho, fale com nossa equipe e consulte as opções de entrega disponíveis para Sorocaba, Tatuí e região."
            />
            <div className="mt-8">
              <DeliveryCta />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

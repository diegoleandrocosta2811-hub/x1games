import { TradeInCta } from "@/components/shared/TrackedCtas";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  "Envie as informações do aparelho.",
  "A equipe da X1 realiza uma avaliação.",
  "Utilize o valor aprovado como parte do pagamento do novo aparelho.",
];

export function TradeIn() {
  return (
    <section
      id="troca"
      className="py-16 sm:py-20"
      aria-labelledby="troca-titulo"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              id="troca-titulo"
              eyebrow="Troca"
              title="Seu usado vale dinheiro."
              description="A X1 aceita aparelho usado como parte do pagamento. O processo é direto e feito com a equipe da loja."
            />
            <div className="mt-8">
              <TradeInCta />
            </div>
          </Reveal>
          <ol className="space-y-4">
            {steps.map((step, index) => (
              <Reveal key={step} delayMs={index * 90} as="li">
                <div className="flex gap-4 rounded-xl border border-border bg-card p-5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-foreground sm:text-base">
                    {step}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

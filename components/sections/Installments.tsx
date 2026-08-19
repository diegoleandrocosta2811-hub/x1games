import { InstallmentsCta } from "@/components/shared/SectionCtas";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Installments() {
  return (
    <section
      id="parcelamento"
      className="py-16 sm:py-20"
      aria-labelledby="parcelamento-titulo"
    >
      <Container>
        <Reveal>
          <div className="overflow-hidden rounded-xl border border-border bg-gradient-to-br from-card via-background to-muted">
            <div className="grid items-center gap-8 px-6 py-12 sm:px-10 lg:grid-cols-[auto_1fr] lg:gap-16 lg:px-16 lg:py-16">
              <p className="font-[family-name:var(--font-space-grotesk)] text-7xl font-semibold tracking-tight text-primary sm:text-8xl lg:text-9xl">
                21X
              </p>
              <div>
                <h2
                  id="parcelamento-titulo"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Seu novo aparelho em até 21x.
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Mais facilidade para você trocar de aparelho.
                </p>
                <div className="mt-8">
                  <InstallmentsCta />
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Consulte condições, valores, taxas e disponibilidade com nossa
                  equipe.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

import type { Metadata } from "next";
import { TradeInCta } from "@/components/shared/TrackedCtas";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { createPageMetadata } from "@/lib/seo";
import { ROUTES } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Troca de aparelho",
  description:
    "Troque seu aparelho usado na X1 Games e Eletrônicos. Avaliação do usado como parte do pagamento em Sorocaba e Tatuí.",
  path: ROUTES.troca,
});

const steps = [
  {
    title: "Envie as informações",
    text: "Conte para a equipe qual é o aparelho e o estado geral.",
  },
  {
    title: "Avaliação da X1",
    text: "A equipe analisa o usado e informa o valor aprovado.",
  },
  {
    title: "Use na nova compra",
    text: "O valor entra como parte do pagamento do novo aparelho.",
  },
];

export default function TrocaPage() {
  return (
    <>
      <PageIntro
        title="Troque seu aparelho usado por um novo"
        description="A X1 aceita aparelho usado como parte do pagamento. O processo começa com o envio das informações, passa pela avaliação da equipe e termina com o valor aprovado abatido na compra do novo iPhone, smartphone ou eletrônico."
        breadcrumbs={[
          { name: "Início", path: ROUTES.home },
          { name: "Troca", path: ROUTES.troca },
        ]}
      >
        <TradeInCta />
      </PageIntro>
      <Container className="grid gap-4 py-12 md:grid-cols-3">
        {steps.map((step, index) => (
          <Card key={step.title} className="p-6">
            <p className="text-sm font-medium text-primary">
              Passo {index + 1}
            </p>
            <h2 className="mt-2 text-xl font-semibold">{step.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {step.text}
            </p>
          </Card>
        ))}
      </Container>
    </>
  );
}

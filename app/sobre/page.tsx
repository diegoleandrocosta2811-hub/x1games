import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { company, commercialHighlights, partners } from "@/data/company";
import { createPageMetadata } from "@/lib/seo";
import { ROUTES } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Sobre a X1",
  description:
    "Conheça a X1 Games e Eletrônicos: iPhones, smartphones, games, informática e eletrônicos em Sorocaba e Tatuí.",
  path: ROUTES.sobre,
});

export default function SobrePage() {
  return (
    <>
      <PageIntro
        title="Sobre a X1 Games e Eletrônicos"
        description={`${company.legalName} é uma loja de iPhones, smartphones, games, informática e eletrônicos. A matriz fica em Sorocaba/SP, com duas filiais em Tatuí/SP, e o atendimento cobre ${company.serviceArea}.`}
        breadcrumbs={[
          { name: "Início", path: ROUTES.home },
          { name: "Sobre", path: ROUTES.sobre },
        ]}
      />
      <Container className="max-w-3xl space-y-6 py-12 text-base leading-relaxed text-muted-foreground">
        <p>
          O posicionamento comercial da X1 é oferecer condições competitivas
          para quem busca iPhone em Sorocaba, além de smartphones, games,
          informática e TVs. Trabalhamos com novos e seminovos, parcelamento em
          até {company.installmentsMax}x no cartão, avaliação do aparelho usado
          na troca e opções de entrega. O estoque gira ao longo do dia, então a
          disponibilidade se confirma no WhatsApp ou no Instagram.
        </p>
        <ul className="space-y-2">
          {commercialHighlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          A X1 já realizou ações e parcerias com {partners.map((p) => p.name).join(", ")}.
          Esta página descreve essas ações como parcerias realizadas, sem
          atribuir depoimentos.
        </p>
      </Container>
    </>
  );
}

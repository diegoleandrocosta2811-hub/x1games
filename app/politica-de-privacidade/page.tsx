import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";
import { createPageMetadata } from "@/lib/seo";
import { ROUTES } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Política de Privacidade",
  description: `Política de Privacidade da ${company.legalName}. Texto inicial, a ser complementado com as práticas oficiais da empresa.`,
  path: ROUTES.privacy,
});

export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        title="Política de Privacidade"
        description="Esta é uma versão inicial da política, sem dados cadastrais inventados. O texto será atualizado quando a empresa definir os canais oficiais de contato e as bases legais do tratamento."
        breadcrumbs={[
          { name: "Início", path: ROUTES.home },
          { name: "Política de Privacidade", path: ROUTES.privacy },
        ]}
      />
      <Container className="max-w-3xl space-y-5 py-12 text-base leading-relaxed text-muted-foreground">
        <p>
          A {company.legalName} trata dados pessoais para atendimento comercial,
          como conversas iniciadas pelo visitante no WhatsApp e navegação neste
          site.
        </p>
        <p>
          Quando analytics (GTM, GA4, Meta Pixel ou Google Ads) for ativado,
          esta política será atualizada para descrever cookies e identificadores
          utilizados. Nenhum identificador de rastreamento está ativo nesta
          versão.
        </p>
        <p>
          Para exercer direitos previstos na LGPD, utilize os canais oficiais da
          X1 assim que telefone, e-mail e WhatsApp forem cadastrados em
          data/company.ts.
        </p>
      </Container>
    </>
  );
}

import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";
import { createPageMetadata } from "@/lib/seo";
import { ROUTES } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Termos de Uso",
  description: `Termos de Uso do site da ${company.legalName}. Versão inicial, a ser complementada com as regras oficiais da empresa.`,
  path: ROUTES.terms,
});

export default function TermsPage() {
  return (
    <>
      <PageIntro
        title="Termos de Uso"
        description="Esta é uma versão inicial dos termos, sem cláusulas inventadas. O texto será atualizado quando a empresa definir as regras oficiais de uso do site e das compras."
        breadcrumbs={[
          { name: "Início", path: ROUTES.home },
          { name: "Termos de Uso", path: ROUTES.terms },
        ]}
      />
      <Container className="max-w-3xl space-y-5 py-12 text-base leading-relaxed text-muted-foreground">
        <p>
          Este site apresenta a {company.legalName} e os canais oficiais de
          atendimento. As informações de estoque, valores e condições devem ser
          confirmadas com a equipe, porque o mix da loja muda ao longo do dia.
        </p>
        <p>
          Ao iniciar uma conversa pelos canais da X1, o visitante concorda em
          utilizar o atendimento de forma lícita e respeitosa.
        </p>
        <p>
          Estes termos serão ampliados com as políticas comerciais oficiais
          assim que forem definidas pela empresa.
        </p>
      </Container>
    </>
  );
}

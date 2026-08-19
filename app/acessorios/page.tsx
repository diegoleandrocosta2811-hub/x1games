import type { Metadata } from "next";
import { WhatsAppCta } from "@/components/shared/WhatsAppCta";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { createPageMetadata } from "@/lib/seo";
import { ROUTES } from "@/lib/site";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export const metadata: Metadata = createPageMetadata({
  title: "Acessórios",
  description:
    "Consulte acessórios disponíveis na X1 Games e Eletrônicos em Sorocaba e Tatuí. O mix muda ao longo do dia.",
  path: ROUTES.acessorios,
});

export default function AcessoriosPage() {
  return (
    <>
      <PageIntro
        title="Acessórios"
        description="Capas, carregadores e outros acessórios entram e saem conforme o giro da loja. Fale com a equipe para conferir o que está disponível agora."
        breadcrumbs={[
          { name: "Início", path: ROUTES.home },
          { name: "Acessórios", path: ROUTES.acessorios },
        ]}
      >
        <WhatsAppCta
          label="Consultar acessórios"
          message={WHATSAPP_MESSAGES.acessorios}
          source="acessorios"
        />
      </PageIntro>
      <Container className="max-w-3xl pb-16 text-sm leading-relaxed text-zinc-400">
        <p>
          Não publicamos um catálogo fixo de acessórios porque o estoque da X1
          gira ao longo do dia. O WhatsApp é o caminho mais rápido para
          confirmar o item que você procura.
        </p>
      </Container>
    </>
  );
}

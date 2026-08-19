import type { Metadata } from "next";
import { WhatsAppCta } from "@/components/shared/WhatsAppCta";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";
import { createPageMetadata } from "@/lib/seo";
import { ROUTES } from "@/lib/site";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export const metadata: Metadata = createPageMetadata({
  title: "X1 em Sorocaba",
  description:
    "X1 Games e Eletrônicos em Sorocaba: iPhones, smartphones, games, informática, TVs, troca, parcelamento e entrega.",
  path: ROUTES.sorocaba,
});

export default function SorocabaPage() {
  return (
    <>
      <PageIntro
        title="X1 Games e Eletrônicos em Sorocaba"
        description={`A matriz da ${company.legalName} fica em Sorocaba/SP. A loja atende quem busca iPhones, smartphones, games, informática e eletrônicos na cidade e na região.`}
        breadcrumbs={[
          { name: "Início", path: ROUTES.home },
          { name: "Sorocaba", path: ROUTES.sorocaba },
        ]}
      >
        <WhatsAppCta
          label="Falar com a loja"
          message={WHATSAPP_MESSAGES.contact}
          source="sorocaba"
        />
      </PageIntro>
      <Container className="max-w-3xl space-y-5 py-12 text-base leading-relaxed text-muted-foreground">
        <p>
          Em Sorocaba, a X1 trabalha com a linha de iPhones, smartphones
          Samsung, Xiaomi e Motorola, videogames, MacBooks, notebooks, iPads,
          tablets e televisões. Novos e seminovos entram e saem ao longo do
          dia. Quem deseja trocar de aparelho pode apresentar o usado para
          avaliação e usar o valor como parte do pagamento.
        </p>
        <p>
          O parcelamento vai até {company.installmentsMax}x no cartão de
          crédito, sempre sujeito a condições consultadas com a equipe. Também
          há opções de entrega na casa do cliente para Sorocaba, Tatuí e
          região.
        </p>
        <p>
          Endereço, telefone da unidade e mapa serão publicados quando os dados
          oficiais forem cadastrados em data/stores.ts.
        </p>
      </Container>
    </>
  );
}

import type { Metadata } from "next";
import { WhatsAppCta } from "@/components/shared/WhatsAppCta";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { getStoresByCity } from "@/data/stores";
import { createPageMetadata } from "@/lib/seo";
import { ROUTES } from "@/lib/site";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import { isPlaceholder } from "@/lib/placeholders";

export const metadata: Metadata = createPageMetadata({
  title: "X1 em Tatuí",
  description:
    "X1 Games e Eletrônicos em Tatuí: duas unidades na cidade, iPhones, smartphones, games, informática, troca e entrega.",
  path: ROUTES.tatui,
});

export default function TatuiPage() {
  const units = getStoresByCity("Tatuí");

  return (
    <>
      <PageIntro
        title="X1 Games e Eletrônicos em Tatuí"
        description="A X1 possui duas unidades em Tatuí/SP, além da matriz em Sorocaba. Quem está na cidade encontra iPhones, smartphones, games, informática e eletrônicos, com troca do usado e parcelamento em até 21x."
        breadcrumbs={[
          { name: "Início", path: ROUTES.home },
          { name: "Tatuí", path: ROUTES.tatui },
        ]}
      >
        <WhatsAppCta
          label="Falar com a X1 em Tatuí"
          message={WHATSAPP_MESSAGES.contact}
          source="tatui"
        />
      </PageIntro>
      <Container className="grid gap-4 py-12 md:grid-cols-2">
        {units.map((store) => (
          <Card key={store.id} className="p-6">
            <h2 className="text-xl font-semibold">{store.name}</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {store.city}/{store.state}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {isPlaceholder(store.address)
                ? "O endereço desta unidade será publicado neste site assim que for cadastrado. Não utilizamos dados inventados."
                : store.address}
            </p>
          </Card>
        ))}
      </Container>
      <Container className="max-w-3xl pb-16 text-base leading-relaxed text-muted-foreground">
        <p>
          As duas lojas em Tatuí fazem parte da mesma operação da X1, com
          atendimento também para quem busca entrega na região. Consulte a
          equipe para estoque, troca e condições de pagamento.
        </p>
      </Container>
    </>
  );
}

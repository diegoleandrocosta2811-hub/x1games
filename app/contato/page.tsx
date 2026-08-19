import type { Metadata } from "next";
import { WhatsAppCta } from "@/components/shared/WhatsAppCta";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { company } from "@/data/company";
import { stores } from "@/data/stores";
import { isPlaceholder } from "@/lib/placeholders";
import { createPageMetadata } from "@/lib/seo";
import { ROUTES } from "@/lib/site";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export const metadata: Metadata = createPageMetadata({
  title: "Contato",
  description:
    "Fale com a X1 Games e Eletrônicos em Sorocaba e Tatuí. WhatsApp, lojas e atendimento na região.",
  path: ROUTES.contato,
});

export default function ContatoPage() {
  return (
    <>
      <PageIntro
        title="Fale com a X1"
        description="Escolha o WhatsApp para falar com a equipe ou visite uma das unidades em Sorocaba e Tatuí."
        breadcrumbs={[
          { name: "Início", path: ROUTES.home },
          { name: "Contato", path: ROUTES.contato },
        ]}
      >
        <WhatsAppCta
          label="Falar no WhatsApp"
          message={WHATSAPP_MESSAGES.contact}
          source="contato"
        />
      </PageIntro>
      <Container className="grid gap-4 py-12 md:grid-cols-3">
        {stores.map((store) => (
          <Card key={store.id} className="p-6">
            <h2 className="text-lg font-semibold">{store.name}</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {store.city}/{store.state}
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              {isPlaceholder(store.address)
                ? "Endereço em atualização neste site."
                : store.address}
            </p>
          </Card>
        ))}
        <Card className="p-6 md:col-span-3">
          <h2 className="text-lg font-semibold">Canais</h2>
          <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
            <li>
              WhatsApp:{" "}
              {isPlaceholder(company.whatsapp)
                ? "informe em NEXT_PUBLIC_WHATSAPP ou data/company.ts"
                : company.phone}
            </li>
            <li>
              Telefone:{" "}
              {isPlaceholder(company.phone)
                ? "PREENCHER_TELEFONE"
                : company.phone}
            </li>
            <li>
              E-mail:{" "}
              {isPlaceholder(company.email) ? "PREENCHER_EMAIL" : company.email}
            </li>
          </ul>
        </Card>
      </Container>
    </>
  );
}

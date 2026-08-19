import type { Metadata } from "next";
import { Stores } from "@/components/sections/Stores";
import { PageIntro } from "@/components/ui/PageIntro";
import { createPageMetadata } from "@/lib/seo";
import { ROUTES } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Lojas",
  description:
    "Encontre as lojas da X1 Games e Eletrônicos em Sorocaba e Tatuí. Matriz e duas unidades na região.",
  path: ROUTES.lojas,
});

export default function LojasPage() {
  return (
    <>
      <PageIntro
        title="Lojas da X1"
        description="A X1 Games e Eletrônicos possui matriz em Sorocaba/SP e duas filiais em Tatuí/SP. Os endereços completos serão publicados nesta página assim que forem confirmados no cadastro do site."
        breadcrumbs={[
          { name: "Início", path: ROUTES.home },
          { name: "Lojas", path: ROUTES.lojas },
        ]}
      />
      <Stores />
    </>
  );
}

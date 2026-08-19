import { ShowcaseLinks } from "@/components/ui/ShowcaseLinks";
import { company } from "@/data/company";
import { ROUTES } from "@/lib/site";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export function AppleStrip() {
  return (
    <section className="bg-black px-6 py-24 text-center">
      <p className="text-sm font-medium tracking-[0.18em] text-primary uppercase">
        X1
      </p>
      <h2
        className="mt-4 text-[40px] font-semibold tracking-tight text-white sm:text-[56px]"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        Até 21x.
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-[19px] text-zinc-300 sm:text-[24px]">
        Seu próximo aparelho, com troca do usado e entrega na sua casa.
      </p>
      <ShowcaseLinks
        moreHref={ROUTES.lojas}
        moreLabel="Encontrar loja"
        consultMessage={WHATSAPP_MESSAGES.installments}
        consultLabel="Consultar"
        source="strip-21x"
      />
      <p className="mx-auto mt-10 max-w-lg text-sm text-zinc-500">
        {company.serviceArea}. Consulte condições, taxas e o estoque do momento.
      </p>
    </section>
  );
}

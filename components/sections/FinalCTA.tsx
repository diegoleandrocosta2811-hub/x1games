import { WhatsAppCta } from "@/components/shared/WhatsAppCta";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export function FinalCTA() {
  return (
    <Reveal className="h-full" delayMs={80}>
      <div className="relative h-full overflow-hidden rounded-[16px] border border-primary/15 bg-[#0d1408] px-6 py-10 sm:px-10">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse at 80% 120%, rgba(0,255,65,0.16), transparent 55%)",
          }}
        />
        <span
          className="pointer-events-none absolute -right-2 -bottom-6 font-[family-name:var(--font-space-grotesk)] text-[160px] font-bold leading-none text-primary/10"
          aria-hidden="true"
        >
          X1
        </span>
        <h2 className="relative max-w-lg text-2xl font-bold leading-tight sm:text-[32px]">
          Seu próximo aparelho pode estar a uma mensagem de distância.
        </h2>
        <p className="relative mt-4 max-w-md text-sm leading-relaxed text-zinc-400">
          Fale com a equipe X1, consulte os modelos disponíveis e encontre a
          melhor opção para você.
        </p>
        <div className="relative mt-8 flex flex-col gap-3 sm:flex-row">
          <WhatsAppCta
            label="Falar no WhatsApp"
            message={WHATSAPP_MESSAGES.general}
            source="final-cta"
          />
          <Button href="#desejados" variant="outline">
            Ver produtos
          </Button>
        </div>
      </div>
    </Reveal>
  );
}

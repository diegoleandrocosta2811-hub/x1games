import { Truck } from "lucide-react";
import { WhatsAppCta } from "@/components/shared/WhatsAppCta";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export function DeliveryCard() {
  return (
    <article className="relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-[16px] border border-white/10 bg-[#111113] p-6 sm:min-h-[380px]">
      <h3 className="text-[26px] font-bold leading-[1.05]">
        A <span className="text-primary">X1</span> vai
        <br />
        <span className="text-primary">até você.</span>
      </h3>
      <p className="mt-4 text-[13px] leading-relaxed text-zinc-400">
        Escolha seu aparelho, fale com nossa equipe e consulte as opções de
        entrega disponíveis para Sorocaba, Tatuí e região.
      </p>
      <div className="relative z-10 mt-auto pt-8">
        <WhatsAppCta
          label="Consultar entrega"
          message={WHATSAPP_MESSAGES.delivery}
          variant="outline"
          size="sm"
          source="delivery-card"
        />
      </div>
      <Truck
        className="pointer-events-none absolute -bottom-2 -right-2 h-24 w-24 text-primary"
        strokeWidth={1.4}
        aria-hidden="true"
      />
    </article>
  );
}

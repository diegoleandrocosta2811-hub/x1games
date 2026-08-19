import { WhatsAppCta } from "@/components/shared/WhatsAppCta";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export function TradeInCard() {
  return (
    <article className="relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-[16px] border border-white/10 bg-[#111113] p-6 sm:min-h-[380px]">
      <h3 className="text-[26px] font-bold leading-[1.05]">
        Seu usado
        <br />
        <span className="text-primary">vale dinheiro.</span>
      </h3>
      <ol className="mt-6 space-y-4 text-[13px] leading-relaxed text-zinc-400">
        <li className="flex gap-3">
          <span className="font-semibold text-primary">01</span>
          <span>Envie as informações do seu aparelho.</span>
        </li>
        <li className="flex gap-3">
          <span className="font-semibold text-primary">02</span>
          <span>Nossa equipe realiza uma avaliação.</span>
        </li>
        <li className="flex gap-3">
          <span className="font-semibold text-primary">03</span>
          <span>Use o valor como parte do pagamento do seu novo aparelho.</span>
        </li>
      </ol>
      <div className="mt-auto pt-8">
        <WhatsAppCta
          label="Avaliar meu aparelho"
          message={WHATSAPP_MESSAGES.tradeIn}
          size="sm"
          source="trade-card"
        />
      </div>
      <svg
        viewBox="0 0 120 120"
        className="pointer-events-none absolute -bottom-4 -right-3 h-28 w-28 text-primary"
        aria-hidden="true"
      >
        <rect x="42" y="28" width="36" height="64" rx="8" fill="none" stroke="currentColor" strokeWidth="3" />
        <path
          d="M28 58a32 32 0 0 1 54-18M92 62a32 32 0 0 1-54 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path d="M78 32l8 8-10 2M42 88l-8-8 10-2" fill="currentColor" />
      </svg>
    </article>
  );
}

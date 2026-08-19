import { WhatsAppCta } from "@/components/shared/WhatsAppCta";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export function InstallmentsCard() {
  return (
    <article className="relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-[16px] border border-white/10 bg-[#111113] p-6 sm:min-h-[380px]">
      <h3 className="relative z-10 text-[26px] font-bold leading-[1.05]">
        Seu novo
        <br />
        aparelho em até
      </h3>
      <p className="text-neon relative z-10 mt-3 font-[family-name:var(--font-space-grotesk)] text-[56px] font-bold leading-none tracking-[-0.06em] sm:text-[72px]">
        21X.
      </p>
      <p className="relative z-10 mt-4 text-[13px] leading-relaxed text-zinc-400">
        Mais facilidade para você levar a tecnologia que deseja sem complicação.
      </p>
      <div className="relative z-10 mt-auto pt-8">
        <WhatsAppCta
          label="Consultar condições"
          message={WHATSAPP_MESSAGES.installments}
          variant="outline"
          size="sm"
          source="installments-card"
        />
      </div>
      <span
        className="pointer-events-none absolute -bottom-8 -right-3 font-[family-name:var(--font-space-grotesk)] text-[140px] font-bold text-primary/10"
        aria-hidden="true"
      >
        21X
      </span>
    </article>
  );
}

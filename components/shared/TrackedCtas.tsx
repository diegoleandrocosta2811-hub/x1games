"use client";

import { WhatsAppCta } from "@/components/shared/WhatsAppCta";
import { ANALYTICS_EVENTS, trackEvent } from "@/lib/analytics";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export function TradeInCta() {
  return (
    <span
      onClick={() => trackEvent(ANALYTICS_EVENTS.trade_in_start, { source: "home" })}
    >
      <WhatsAppCta
        label="Avaliar meu aparelho"
        message={WHATSAPP_MESSAGES.tradeIn}
        source="trade-in"
      />
    </span>
  );
}

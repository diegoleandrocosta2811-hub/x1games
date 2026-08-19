"use client";

import { WhatsAppCta } from "@/components/shared/WhatsAppCta";
import { ANALYTICS_EVENTS, trackEvent } from "@/lib/analytics";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export function InstallmentsCta() {
  return (
    <span
      onClick={() =>
        trackEvent(ANALYTICS_EVENTS.installment_click, { source: "home" })
      }
    >
      <WhatsAppCta
        label="Consultar condições"
        message={WHATSAPP_MESSAGES.installments}
        variant="secondary"
        source="installments"
      />
    </span>
  );
}

export function DeliveryCta() {
  return (
    <span
      onClick={() =>
        trackEvent(ANALYTICS_EVENTS.delivery_click, { source: "home" })
      }
    >
      <WhatsAppCta
        label="Consultar entrega"
        message={WHATSAPP_MESSAGES.delivery}
        source="delivery"
      />
    </span>
  );
}

"use client";

import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { ANALYTICS_EVENTS, trackEvent } from "@/lib/analytics";
import { getCompanyWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  return (
    <a
      href={getCompanyWhatsAppUrl(WHATSAPP_MESSAGES.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground glow-primary transition-transform duration-200 hover:scale-105 hover:bg-primary-hover"
      onClick={() =>
        trackEvent(ANALYTICS_EVENTS.whatsapp_click, { source: "float" })
      }
    >
      <WhatsAppIcon className="h-6 w-6" />
    </a>
  );
}

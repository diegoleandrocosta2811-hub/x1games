"use client";

import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { Button } from "@/components/ui/Button";
import { ANALYTICS_EVENTS, trackEvent } from "@/lib/analytics";
import { getCompanyWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

type WhatsAppCtaProps = {
  label?: string;
  message?: string;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  source?: string;
};

export function WhatsAppCta({
  label = "Falar no WhatsApp",
  message = WHATSAPP_MESSAGES.general,
  variant = "primary",
  size = "md",
  className,
  source = "cta",
}: WhatsAppCtaProps) {
  return (
    <Button
      href={getCompanyWhatsAppUrl(message)}
      variant={variant}
      size={size}
      className={className}
      onClick={() =>
        trackEvent(ANALYTICS_EVENTS.whatsapp_click, { source })
      }
    >
      <WhatsAppIcon className="h-4 w-4" />
      {label}
    </Button>
  );
}

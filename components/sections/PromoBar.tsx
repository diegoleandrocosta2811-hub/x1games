"use client";

import Link from "next/link";
import { ANALYTICS_EVENTS, trackEvent } from "@/lib/analytics";
import { getCompanyWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export function PromoBar() {
  return (
    <div className="border-b border-white/5 bg-[#050505] px-4 py-2.5 text-center text-[12px] leading-relaxed text-zinc-300 sm:text-[14px]">
      Parcelamento em até 21x. Troca do usado. Entrega na região.{" "}
      <Link href="/troca" className="text-primary hover:underline">
        Saiba mais ›
      </Link>{" "}
      <a
        href={getCompanyWhatsAppUrl(WHATSAPP_MESSAGES.offers)}
        className="text-primary hover:underline"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          trackEvent(ANALYTICS_EVENTS.whatsapp_click, { source: "promo-bar" })
        }
      >
        Consultar ›
      </a>
    </div>
  );
}

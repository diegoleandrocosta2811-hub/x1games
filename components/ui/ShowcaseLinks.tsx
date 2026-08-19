"use client";

import Link from "next/link";
import { ANALYTICS_EVENTS, trackEvent } from "@/lib/analytics";
import { getCompanyWhatsAppUrl } from "@/lib/whatsapp";

type ShowcaseLinksProps = {
  moreHref: string;
  moreLabel?: string;
  consultMessage: string;
  consultLabel?: string;
  source: string;
};

export function ShowcaseLinks({
  moreHref,
  moreLabel = "Saiba mais",
  consultMessage,
  consultLabel = "Consultar",
  source,
}: ShowcaseLinksProps) {
  return (
    <p className="mt-3 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[17px] sm:text-[19px]">
      <Link
        href={moreHref}
        className="text-primary transition-opacity hover:opacity-80"
      >
        {moreLabel}{" "}
        <span aria-hidden="true" className="font-normal">
          ›
        </span>
      </Link>
      <a
        href={getCompanyWhatsAppUrl(consultMessage)}
        className="text-primary transition-opacity hover:opacity-80"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          trackEvent(ANALYTICS_EVENTS.whatsapp_click, { source })
        }
      >
        {consultLabel}{" "}
        <span aria-hidden="true" className="font-normal">
          ›
        </span>
      </a>
    </p>
  );
}

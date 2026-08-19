"use client";

import { Button } from "@/components/ui/Button";
import { company } from "@/data/company";
import { ANALYTICS_EVENTS, trackEvent } from "@/lib/analytics";

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function InstagramCta({
  label,
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <Button
      href={company.social.instagram.url}
      variant="secondary"
      className={className}
      onClick={() =>
        trackEvent(ANALYTICS_EVENTS.instagram_click, {
          source: "instagram-section",
        })
      }
    >
      <InstagramIcon />
      {label ?? `Seguir ${company.social.instagram.handle}`}
    </Button>
  );
}

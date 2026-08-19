"use client";

import Link from "next/link";
import { ANALYTICS_EVENTS, trackEvent } from "@/lib/analytics";
import { isPlaceholder } from "@/lib/placeholders";
import { ROUTES } from "@/lib/site";
import type { Store } from "@/types";

export function StoreActions({ store }: { store: Store }) {
  const mapsReady = !isPlaceholder(store.googleMapsUrl);

  if (mapsReady) {
    return (
      <a
        href={store.googleMapsUrl}
        className="text-[17px] text-primary hover:opacity-80"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          trackEvent(ANALYTICS_EVENTS.store_location_click, {
            store: store.id,
          })
        }
      >
        Ver no mapa ›
      </a>
    );
  }

  return (
    <Link href={ROUTES.contato} className="text-[17px] text-primary hover:opacity-80">
      Falar com a loja ›
    </Link>
  );
}

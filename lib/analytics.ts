/**
 * Camada de eventos independente de plataforma.
 *
 * Quando GTM / GA4 / Meta Pixel / Google Ads forem configurados,
 * o dataLayer (ou um wrapper equivalente) receberá estes eventos.
 *
 * Não carregue scripts de analytics até que os IDs reais existam em
 * variáveis de ambiente. Pontos de integração futuros:
 * - Google Tag Manager: NEXT_PUBLIC_GTM_ID
 * - GA4: NEXT_PUBLIC_GA4_ID
 * - Meta Pixel: NEXT_PUBLIC_META_PIXEL_ID
 * - Google Ads: NEXT_PUBLIC_GOOGLE_ADS_ID
 */

export const ANALYTICS_EVENTS = {
  whatsapp_click: "whatsapp_click",
  product_view: "product_view",
  trade_in_start: "trade_in_start",
  installment_click: "installment_click",
  delivery_click: "delivery_click",
  store_location_click: "store_location_click",
  instagram_click: "instagram_click",
  contact_submit: "contact_submit",
} as const;

export type AnalyticsEventName =
  (typeof ANALYTICS_EVENTS)[keyof typeof ANALYTICS_EVENTS];

export type AnalyticsPayload = Record<string, string | number | boolean | null>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackEvent(
  event: AnalyticsEventName,
  payload: AnalyticsPayload = {},
): void {
  if (typeof window === "undefined") return;

  const entry = { event, ...payload };

  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(entry);
  } catch {
    // Sem dataLayer ou ambiente bloqueado: o site continua funcionando.
  }
}

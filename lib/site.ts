import { company } from "@/data/company";

export const SITE_NAME = company.legalName;

export const SITE_TAGLINE = "iPhones, games e eletrônicos em Sorocaba";

export const DEFAULT_TITLE = `${SITE_NAME} | ${SITE_TAGLINE}`;

export const TITLE_TEMPLATE = `%s | ${SITE_NAME}`;

export const DEFAULT_DESCRIPTION =
  "X1 Games e Eletrônicos em Sorocaba e Tatuí: iPhones, Samsung, Xiaomi, Motorola, games, MacBooks, iPads, tablets e TVs. Novos e seminovos, parcelamento em até 21x, troca do usado e entrega.";

export const LOCAL_DEV_URL = "http://localhost:3000";

export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) {
    return fromEnv.replace(/\/$/, "");
  }

  const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercelProduction) {
    const host = vercelProduction.replace(/^https?:\/\//, "").replace(/\/$/, "");
    return `https://${host}`;
  }

  const vercelUrl = process.env.VERCEL_URL?.trim();
  if (vercelUrl) {
    const host = vercelUrl.replace(/^https?:\/\//, "").replace(/\/$/, "");
    return `https://${host}`;
  }

  return LOCAL_DEV_URL;
}

export const ROUTES = {
  home: "/",
  games: "/games",
  informatica: "/informatica",
  seminovos: "/seminovos",
  acessorios: "/acessorios",
  troca: "/troca",
  lojas: "/lojas",
  sobre: "/sobre",
  contato: "/contato",
  sorocaba: "/sorocaba",
  tatui: "/tatui",
  privacy: "/politica-de-privacidade",
  terms: "/termos-de-uso",
} as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];

export const PUBLIC_ROUTES: { path: RoutePath; changeFrequency: "weekly" | "monthly"; priority: number }[] =
  [
    { path: ROUTES.home, changeFrequency: "weekly", priority: 1 },
    { path: ROUTES.games, changeFrequency: "weekly", priority: 0.8 },
    { path: ROUTES.informatica, changeFrequency: "weekly", priority: 0.8 },
    { path: ROUTES.acessorios, changeFrequency: "weekly", priority: 0.6 },
    { path: ROUTES.seminovos, changeFrequency: "weekly", priority: 0.8 },
    { path: ROUTES.troca, changeFrequency: "monthly", priority: 0.8 },
    { path: ROUTES.lojas, changeFrequency: "monthly", priority: 0.8 },
    { path: ROUTES.sobre, changeFrequency: "monthly", priority: 0.6 },
    { path: ROUTES.contato, changeFrequency: "monthly", priority: 0.7 },
    { path: ROUTES.sorocaba, changeFrequency: "monthly", priority: 0.9 },
    { path: ROUTES.tatui, changeFrequency: "monthly", priority: 0.9 },
    { path: ROUTES.privacy, changeFrequency: "monthly", priority: 0.3 },
    { path: ROUTES.terms, changeFrequency: "monthly", priority: 0.3 },
  ];

export const OG_LOCALE = "pt_BR";

export const OG_IMAGE_PATH = "/og-image.png";

export const OG_IMAGE_ALT = `${SITE_NAME} — iPhones, games e eletrônicos em Sorocaba e Tatuí`;

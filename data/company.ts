import type { Company } from "@/types";

export const company: Company = {
  legalName: "X1 Games e Eletrônicos",
  shortName: "X1",
  tagline: "X1, a maior loja de eletrônicos da região.",
  description:
    "Loja de iPhones, smartphones, games, informática e eletrônicos com matriz em Sorocaba/SP e duas filiais em Tatuí/SP. Atendimento em Sorocaba, Tatuí e região, com aparelhos novos e seminovos.",
  hqCity: "Sorocaba",
  hqState: "SP",
  serviceArea: "Sorocaba, Tatuí e região",
  unitCount: 3,
  cities: ["Sorocaba", "Tatuí"],
  installmentsMax: 21,
  phone: "(15) 99732-6538",
  whatsapp: "5515997326538",
  email: "PREENCHER_EMAIL",
  hours: "PREENCHER_HORARIO",
  social: {
    instagram: {
      name: "Instagram",
      handle: "@x1gameseletronicos",
      url: "https://www.instagram.com/x1gameseletronicos/",
    },
  },
};

export const commercialHighlights = [
  "Parcelamento em até 21x no cartão de crédito",
  "Avaliação de aparelho usado como parte do pagamento",
  "Opções de entrega diretamente na casa do cliente",
  "Lojas físicas em Sorocaba e Tatuí",
] as const;

export const partners = [
  {
    id: "tcar",
    name: "TCar",
    image: "/images/famosos/tcar.webp",
    imageAlt: "Parceria da X1 com TCar",
  },
  {
    id: "ronaldinho",
    name: "Ronaldinho Gaúcho",
    image: "/images/famosos/ronaldinho.webp",
    imageAlt: "Parceria da X1 com Ronaldinho Gaúcho",
  },
  {
    id: "yudi",
    name: "Yudi Tamashiro",
    image: "/images/famosos/yudi.webp",
    imageAlt: "Parceria da X1 com Yudi Tamashiro",
  },
  {
    id: "viih-tube",
    name: "Viih Tube",
    image: "/images/famosos/viih-tube.webp",
    imageAlt: "Parceria da X1 com Viih Tube",
  },
] as const;

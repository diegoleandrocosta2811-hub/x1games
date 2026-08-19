import { ROUTES } from "@/lib/site";
import type { Category, CategoryId, HomeLine } from "@/types/category";

export const STOCK_DISCLAIMER =
  "O estoque da X1 gira ao longo do dia, com aparelhos novos e seminovos. Por isso não publicamos um catálogo fixo: fale no WhatsApp ou no Instagram para conferir o que está disponível agora.";

export const categories: Category[] = [
  {
    id: "iphones",
    slug: "iphones",
    href: ROUTES.contato,
    name: "iPhones",
    eyebrow: "Apple",
    title: "iPhone 17 Pro Max na X1",
    description:
      "A X1 trabalha com a linha completa de iPhones, incluindo o iPhone 17 Pro Max, novos e seminovos, em Sorocaba e Tatuí. Consulte o estoque do momento.",
    intro:
      "Do iPhone 17 Pro Max à linha inteira, a X1 recebe iPhones o tempo todo. Como a rotatividade é alta, o modelo que você quer pode entrar e sair no mesmo dia. Fale com a equipe para confirmar cor, capacidade e condição.",
    brands: ["Apple"],
    highlights: [
      "Linha completa de iPhones",
      "Novos e seminovos",
      "Troca do seu usado",
      "Parcelamento em até 21x",
    ],
    headline: "iPhone 17 Pro Max",
    subhead: "E toda a linha iPhone. Novos e seminovos.",
    image: "/images/iphone-17-pro-max.png",
    imageAlt: "iPhone 17 Pro Max",
    featured: true,
    span: "large",
  },
  {
    id: "smartphones",
    slug: "smartphones",
    href: ROUTES.contato,
    name: "Smartphones",
    eyebrow: "Android",
    title: "Galaxy S26 Ultra, Xiaomi, Motorola e mais",
    description:
      "Smartphones das principais marcas, com o Galaxy S26 Ultra e estoque girando o dia todo em Sorocaba e Tatuí.",
    intro:
      "A X1 trabalha com o Galaxy S26 Ultra e com os modelos de Samsung, Xiaomi, Motorola e outras linhas Android. Novos e seminovos entram e saem rápido. Consulte a disponibilidade no atendimento.",
    brands: ["Samsung", "Xiaomi", "Motorola"],
    highlights: [
      "Samsung",
      "Xiaomi",
      "Motorola",
      "Outras linhas Android",
    ],
    headline: "Galaxy S26 Ultra",
    subhead: "O último Samsung. Xiaomi e Motorola também.",
    image: "/images/smartphones.jpg",
    imageAlt: "Samsung Galaxy S26 Ultra",
    featured: true,
    span: "regular",
  },
  {
    id: "games",
    slug: "games",
    href: ROUTES.games,
    name: "Games",
    eyebrow: "Consoles",
    title: "PlayStation, Xbox e Nintendo",
    description:
      "Videogames e consoles na X1: PS5, PS4, PS3, Xbox Series S, Xbox Series X, Xbox One e Nintendo.",
    intro:
      "A X1 também é loja de games. Trabalhamos com PlayStation 5, 4 e 3, Xbox Series S, Series X e Xbox One, além de Nintendo. Consulte o que está na loja no momento.",
    brands: ["PlayStation", "Xbox", "Nintendo"],
    highlights: [
      "PS5, PS4 e PS3",
      "Xbox Series S e Series X",
      "Xbox One",
      "Nintendo",
    ],
    headline: "Games",
    subhead: "PS5, Xbox Series e Nintendo.",
    image: "/images/ps5.png",
    imageAlt: "PlayStation 5 e controle DualSense",
    featured: true,
    span: "regular",
  },
  {
    id: "informatica",
    slug: "informatica",
    href: ROUTES.informatica,
    name: "Informática",
    eyebrow: "Portáteis",
    title: "MacBooks, notebooks, iPads e tablets",
    description:
      "Informática na X1: MacBooks, notebooks, iPads e tablets, com consulta de estoque em tempo real.",
    intro:
      "Além dos celulares, a X1 trabalha com MacBooks, notebooks, iPads e tablets. O mix muda conforme a entrada de aparelhos novos e seminovos. Confirme o modelo com a equipe.",
    brands: ["Apple", "Notebooks", "iPad", "Tablets"],
    highlights: ["MacBooks", "Notebooks", "iPads", "Tablets"],
    headline: "Mac e iPad",
    subhead: "MacBooks, notebooks e tablets.",
    image: "/images/macbook.png",
    imageAlt: "MacBook Pro",
    featured: true,
    span: "regular",
  },
  {
    id: "eletronicos",
    slug: "eletronicos",
    href: ROUTES.contato,
    name: "TVs e eletrônicos",
    eyebrow: "Casa",
    title: "Televisões e eletrônicos",
    description:
      "Televisões e outros eletrônicos na X1 Games e Eletrônicos, em Sorocaba e Tatuí.",
    intro:
      "A X1 também trabalha com televisões e eletrônicos para o dia a dia. Como o estoque varia, o caminho mais rápido é falar com a loja e confirmar o que chegou.",
    brands: ["Smart TVs", "Eletrônicos"],
    highlights: ["Televisões", "Eletrônicos", "Novos e seminovos"],
    headline: "TV",
    subhead: "Televisões e eletrônicos para casa.",
    image: "/images/tv_png.webp",
    imageAlt: "Smart TV em ambiente escuro",
    featured: true,
    span: "regular",
  },
  {
    id: "seminovos",
    slug: "seminovos",
    href: ROUTES.seminovos,
    name: "Seminovos",
    eyebrow: "Oportunidade",
    title: "Novos e seminovos, o dia todo",
    description:
      "A X1 trabalha com aparelhos novos e seminovos. O estoque muda durante o dia — consulte antes de sair de casa.",
    intro:
      "Seminovos fazem parte da operação da X1, lado a lado com aparelhos novos. iPhones, smartphones, games, informática e eletrônicos podem estar nas duas condições. A avaliação do seu usado também entra na troca.",
    brands: ["iPhone", "Samsung", "Xiaomi", "Games", "Informática"],
    highlights: [
      "Estoque que gira o dia todo",
      "Novos e seminovos",
      "Seu usado vale na troca",
    ],
    headline: "Seminovos",
    subhead: "O estoque gira o dia todo.",
    image: "/images/iphone-15-pro.png",
    imageAlt: "iPhone seminovo",
    featured: true,
    span: "large",
  },
];

export const homeLines: HomeLine[] = [
  {
    id: "iphones",
    brand: "Apple",
    name: "iPhones",
    spec: "Linha completa • novos e seminovos",
    image: "/images/iphone-17-pro-max.webp",
    imageAlt: "iPhones na X1",
    href: ROUTES.contato,
    cta: "Consultar iPhones",
    messageKey: "iphones",
  },
  {
    id: "smartphones",
    brand: "Android",
    name: "Smartphones",
    spec: "Samsung, Xiaomi e Motorola",
    image: "/images/smartphones.webp",
    imageAlt: "Smartphones na X1",
    href: ROUTES.contato,
    cta: "Consultar smartphones",
    messageKey: "smartphones",
  },
  {
    id: "games",
    brand: "X1 Games",
    name: "Videogames",
    spec: "PlayStation, Xbox e Nintendo",
    image: "/images/ps5.webp",
    imageAlt: "Videogames na X1",
    href: ROUTES.games,
    cta: "Consultar games",
    messageKey: "games",
  },
  {
    id: "tvs",
    brand: "Casa",
    name: "TVs",
    spec: "Televisões e eletrônicos",
    image: "/images/tv_png.webp",
    imageAlt: "TVs na X1",
    href: ROUTES.contato,
    cta: "Consultar TVs",
    messageKey: "eletronicos",
  },
  {
    id: "macbooks",
    brand: "Apple",
    name: "MacBooks",
    spec: "Mac e notebooks",
    image: "/images/macbook.webp",
    imageAlt: "MacBooks na X1",
    href: ROUTES.informatica,
    cta: "Consultar MacBooks",
    messageKey: "macbooks",
  },
  {
    id: "ipads",
    brand: "Apple",
    name: "iPads",
    spec: "iPads e tablets",
    image: "/images/ipad.webp",
    imageAlt: "iPads na X1",
    href: ROUTES.informatica,
    cta: "Consultar iPads",
    messageKey: "ipads",
  },
];

export function getCategory(id: CategoryId): Category {
  const found = categories.find((category) => category.id === id);
  if (!found) {
    throw new Error(`Categoria não encontrada: ${id}`);
  }
  return found;
}

export const brandTicker = [
  "iPhone",
  "Samsung",
  "Xiaomi",
  "Motorola",
  "PlayStation",
  "Xbox",
  "Nintendo",
  "MacBook",
  "iPad",
  "Notebook",
  "Smart TV",
];

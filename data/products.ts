import type { Product } from "@/types";

export const products: Product[] = [
  {
    slug: "iphone-17-pro-max",
    name: "iPhone 17 Pro Max",
    brand: "Apple",
    category: "iphone",
    model: "iPhone 17 Pro Max",
    storage: "256 GB",
    color: "Titânio",
    condition: "novo",
    price: null,
    oldPrice: null,
    installments: 21,
    installmentValue: null,
    image: "/images/iphone-17-pro-max.png",
    images: ["/images/iphone-17-pro-max.png"],
    featured: true,
    badge: "Novo",
    description: "Consulte disponibilidade e condições com a equipe da X1.",
    specifications: [
      { label: "Capacidade", value: "256 GB" },
      { label: "Acabamento", value: "Titânio" },
    ],
    available: true,
  },
  {
    slug: "iphone-17",
    name: "iPhone 17",
    brand: "Apple",
    category: "iphone",
    model: "iPhone 17",
    storage: "256 GB",
    color: null,
    condition: "novo",
    price: null,
    oldPrice: null,
    installments: 21,
    installmentValue: null,
    image: "/images/iphone-17-pro-max.png",
    images: ["/images/iphone-17-pro-max.png"],
    featured: true,
    badge: "Novo",
    description: "Consulte disponibilidade e condições com a equipe da X1.",
    specifications: [],
    available: true,
  },
  {
    slug: "iphone-16-pro-max",
    name: "iPhone 16 Pro Max",
    brand: "Apple",
    category: "iphone",
    model: "iPhone 16 Pro Max",
    storage: "256 GB",
    color: "Titânio",
    condition: "novo",
    price: null,
    oldPrice: null,
    installments: 21,
    installmentValue: null,
    image: "/images/iphone-17-pro-max.png",
    images: ["/images/iphone-17-pro-max.png"],
    featured: true,
    badge: "Novo",
    description: "Consulte disponibilidade e condições com a equipe da X1.",
    specifications: [],
    available: true,
  },
  {
    slug: "iphone-16-pro-max-seminovo",
    name: "iPhone 16 Pro Max",
    brand: "Apple",
    category: "seminovo",
    model: "iPhone 16 Pro Max",
    storage: "256 GB",
    color: "Titânio",
    condition: "seminovo",
    price: null,
    oldPrice: null,
    installments: 21,
    installmentValue: null,
    image: "/images/iphone-15-pro.png",
    images: ["/images/iphone-15-pro.png"],
    featured: true,
    badge: "Seminovo",
    description: "Consulte disponibilidade e condições com a equipe da X1.",
    specifications: [],
    available: true,
  },
  {
    slug: "galaxy-s26-ultra",
    name: "Galaxy S26 Ultra",
    brand: "Samsung",
    category: "smartphone",
    model: "Galaxy S26 Ultra",
    storage: "256 GB",
    color: null,
    condition: "novo",
    price: null,
    oldPrice: null,
    installments: 21,
    installmentValue: null,
    image: "/images/smartphones.jpg",
    images: ["/images/smartphones.jpg"],
    featured: true,
    badge: "Novo",
    description: "Consulte disponibilidade e condições com a equipe da X1.",
    specifications: [],
    available: true,
  },
  {
    slug: "iphone-15-pro-seminovo",
    name: "iPhone 15 Pro",
    brand: "Apple",
    category: "seminovo",
    model: "iPhone 15 Pro",
    storage: "128 GB",
    color: null,
    condition: "seminovo",
    price: null,
    oldPrice: null,
    installments: 21,
    installmentValue: null,
    image: "/images/troca.jpg",
    images: ["/images/troca.jpg"],
    featured: true,
    badge: "Seminovo",
    description: "Consulte disponibilidade e condições com a equipe da X1.",
    specifications: [],
    available: true,
  },
  {
    slug: "playstation-5",
    name: "PlayStation 5",
    brand: "Sony",
    category: "games",
    model: "PS5",
    storage: null,
    color: null,
    condition: "novo",
    price: null,
    oldPrice: null,
    installments: 21,
    installmentValue: null,
    image: "/images/ps5.png",
    images: ["/images/ps5.png"],
    featured: true,
    badge: "Novo",
    description: "Consulte disponibilidade e condições com a equipe da X1.",
    specifications: [],
    available: true,
  },
];

export const productFilters = [
  { id: "iphone", label: "iPhone" },
  { id: "samsung", label: "Samsung" },
  { id: "smartphone", label: "Smartphones" },
  { id: "seminovo", label: "Seminovos" },
  { id: "acessorio", label: "Acessórios" },
  { id: "games", label: "Games" },
] as const;

export type ProductFilterId = (typeof productFilters)[number]["id"];

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured && product.available);
}

export function getProductsByCategory(
  category: Product["category"],
): Product[] {
  return products.filter((product) => product.category === category);
}

export function filterProducts(
  filter: ProductFilterId,
  list: Product[] = getFeaturedProducts(),
): Product[] {
  if (filter === "iphone") {
    return list.filter((item) => item.brand === "Apple");
  }
  if (filter === "samsung") {
    return list.filter((item) => item.brand === "Samsung");
  }
  if (filter === "seminovo") {
    return list.filter((item) => item.condition === "seminovo");
  }
  return list.filter((item) => item.category === filter);
}

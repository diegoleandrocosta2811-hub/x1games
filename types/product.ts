export type ProductCategory =
  | "iphone"
  | "smartphone"
  | "eletronico"
  | "seminovo"
  | "games"
  | "acessorio";

export type ProductCondition = "novo" | "seminovo";

export type ProductSpecification = {
  label: string;
  value: string;
};

export type Product = {
  slug: string;
  name: string;
  brand: string;
  category: ProductCategory;
  model: string;
  storage: string | null;
  color: string | null;
  condition: ProductCondition;
  price: number | null;
  oldPrice: number | null;
  installments: number | null;
  installmentValue: number | null;
  image: string | null;
  images: string[];
  featured: boolean;
  badge: string | null;
  description: string;
  specifications: ProductSpecification[];
  available: boolean;
};

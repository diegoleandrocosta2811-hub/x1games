export type CategoryId =
  | "iphones"
  | "smartphones"
  | "games"
  | "informatica"
  | "eletronicos"
  | "seminovos";

export type HomeLine = {
  id: string;
  brand: string;
  name: string;
  spec: string;
  image: string;
  imageAlt: string;
  href: string;
  cta: string;
  messageKey:
    | "iphones"
    | "smartphones"
    | "games"
    | "informatica"
    | "eletronicos"
    | "macbooks"
    | "ipads";
};

export type Category = {
  id: CategoryId;
  slug: string;
  href: string;
  name: string;
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  brands: string[];
  highlights: string[];
  headline: string;
  subhead: string;
  image: string;
  imageAlt: string;
  featured: boolean;
  span: "large" | "regular";
};

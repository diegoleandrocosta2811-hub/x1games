import type { Metadata } from "next";
import { CategoryPage } from "@/components/shared/CategoryPage";
import { getCategory } from "@/data/categories";
import { createPageMetadata } from "@/lib/seo";
import { ROUTES } from "@/lib/site";

const category = getCategory("seminovos");

export const metadata: Metadata = createPageMetadata({
  title: category.title,
  description: category.description,
  path: ROUTES.seminovos,
});

export default function SeminovosPage() {
  return <CategoryPage category={category} />;
}

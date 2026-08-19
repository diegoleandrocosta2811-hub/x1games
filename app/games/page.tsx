import type { Metadata } from "next";
import { CategoryPage } from "@/components/shared/CategoryPage";
import { getCategory } from "@/data/categories";
import { createPageMetadata } from "@/lib/seo";
import { ROUTES } from "@/lib/site";

const category = getCategory("games");

export const metadata: Metadata = createPageMetadata({
  title: category.title,
  description: category.description,
  path: ROUTES.games,
});

export default function GamesPage() {
  return <CategoryPage category={category} />;
}

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MediaFrame } from "@/components/ui/MediaFrame";
import type { Category } from "@/types/category";

export function CategoryCard({
  category,
  className = "",
}: {
  category: Category;
  className?: string;
}) {
  return (
    <Link
      href={category.href}
      className={`group relative flex min-h-72 flex-col justify-end overflow-hidden rounded-xl border border-border bg-card ${className}`.trim()}
    >
      <MediaFrame
        src={category.image}
        alt={category.imageAlt}
        className="absolute inset-0"
      />
      <div className="relative z-10 p-6">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
          {category.eyebrow}
        </p>
        <h3 className="mt-2 flex items-center gap-2 text-2xl font-semibold">
          {category.name}
          <ArrowUpRight className="h-5 w-5 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
        </h3>
        <p className="mt-2 max-w-md text-sm text-zinc-300">
          {category.highlights.slice(0, 3).join(" · ")}
        </p>
      </div>
    </Link>
  );
}

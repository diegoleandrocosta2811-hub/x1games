import { brandTicker } from "@/data/categories";

export function BrandMarquee() {
  const items = [...brandTicker, ...brandTicker];

  return (
    <section
      aria-label="Marcas e linhas"
      className="overflow-hidden border-y border-border bg-muted/30 py-5"
    >
      <div className="marquee-track flex w-max gap-10 pr-10">
        {items.map((brand, index) => (
          <span
            key={`${brand}-${index}`}
            className="whitespace-nowrap font-[family-name:var(--font-space-grotesk)] text-sm uppercase tracking-[0.22em] text-muted-foreground"
          >
            {brand}
            <span className="ml-10 text-primary">/</span>
          </span>
        ))}
      </div>
    </section>
  );
}

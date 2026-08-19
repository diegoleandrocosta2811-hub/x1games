import { CategoryCard } from "@/components/ui/CategoryCard";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { categories, STOCK_DISCLAIMER } from "@/data/categories";

export function Categories() {
  const featured = categories.filter((category) => category.featured);

  return (
    <section id="linhas" className="py-16 sm:py-24" aria-labelledby="linhas-titulo">
      <Container>
        <Reveal>
          <SectionHeading
            id="linhas-titulo"
            eyebrow="Linhas"
            title="Do iPhone ao console. Do MacBook à TV."
            description={STOCK_DISCLAIMER}
          />
        </Reveal>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {featured.map((category, index) => (
            <Reveal
              key={category.id}
              delayMs={index * 80}
              className={category.span === "large" ? "lg:col-span-2" : ""}
            >
              <CategoryCard
                category={category}
                className={
                  category.span === "large" ? "min-h-80 lg:min-h-[28rem]" : "min-h-80"
                }
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

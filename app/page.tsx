import { CommercialGrid } from "@/components/sections/CommercialGrid";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { HomeJsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";

export default function HomePage() {
  return (
    <>
      <HomeJsonLd />
      <Hero />
      <CommercialGrid />
      <PartnersSection />
      <ProductsSection />
      <section className="pb-20 pt-6">
        <Container className="grid gap-4 lg:grid-cols-[0.42fr_0.58fr]">
          <TrustBar />
          <FinalCTA />
        </Container>
      </section>
    </>
  );
}

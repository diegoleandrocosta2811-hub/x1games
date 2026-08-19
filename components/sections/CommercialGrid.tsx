import { DeliveryCard } from "@/components/sections/DeliveryCard";
import { InstallmentsCard } from "@/components/sections/InstallmentsCard";
import { OffersCard } from "@/components/sections/OffersCard";
import { TradeInCard } from "@/components/sections/TradeInCard";
import { Reveal } from "@/components/ui/Reveal";

export function CommercialGrid() {
  return (
    <section className="py-10 sm:py-14">
      <div className="container-page grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Reveal className="h-full" delayMs={0}>
          <TradeInCard />
        </Reveal>
        <Reveal className="h-full" delayMs={80}>
          <InstallmentsCard />
        </Reveal>
        <Reveal className="h-full" delayMs={160}>
          <DeliveryCard />
        </Reveal>
        <Reveal className="h-full" delayMs={240}>
          <OffersCard />
        </Reveal>
      </div>
    </section>
  );
}

import { CreditCard, RefreshCcw, Store, Truck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const items = [
  {
    icon: CreditCard,
    title: "Até 21x no cartão",
    text: "Condições facilitadas para você trocar de aparelho.",
  },
  {
    icon: RefreshCcw,
    title: "Seu usado vale na troca",
    text: "Use seu aparelho atual como parte do pagamento.",
  },
  {
    icon: Truck,
    title: "Entrega na sua casa",
    text: "Comodidade para comprar sem sair de casa.",
  },
  {
    icon: Store,
    title: "Lojas físicas",
    text: "Unidades em Sorocaba e Tatuí.",
  },
];

export function BenefitsBar() {
  return (
    <section className="pb-6 pt-1 sm:pb-8">
      <Container>
        <Reveal>
          <div className="grid grid-cols-2 overflow-hidden rounded-[16px] border border-white/10 bg-[#111113] lg:grid-cols-4">
            {items.map((item, index) => (
              <article
                key={item.title}
                className={[
                  "px-4 py-5 sm:px-6 sm:py-7",
                  index === 1 || index === 3
                    ? "border-l border-white/[0.06]"
                    : "",
                  index === 2 || index === 3
                    ? "border-t border-white/[0.06]"
                    : "",
                  index > 0 ? "lg:border-t-0 lg:border-l lg:border-white/[0.06]" : "",
                ].join(" ")}
              >
                <item.icon
                  className="h-8 w-8 text-primary"
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
                <h2 className="mt-4 text-[16px] font-semibold leading-snug">
                  {item.title}
                </h2>
                <p className="mt-2 text-[13px] leading-relaxed text-zinc-400">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

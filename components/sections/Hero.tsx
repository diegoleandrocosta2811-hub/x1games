import { ArrowRight, CreditCard, MapPin, RefreshCcw, Truck } from "lucide-react";
import { HeroVisual } from "@/components/sections/HeroVisual";
import { WhatsAppCta } from "@/components/shared/WhatsAppCta";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";

const highlights = [
  { icon: CreditCard, title: "Até 21x", text: "no cartão" },
  { icon: RefreshCcw, title: "Seu aparelho", text: "usado vale na troca" },
  { icon: Truck, title: "Entrega direto", text: "na sua casa" },
];

export function Hero() {
  return (
    <section className="relative overflow-x-clip">
      <div
        className="pointer-events-none absolute inset-y-[8%] left-0 hidden w-px bg-primary/50 shadow-[0_0_18px_rgba(0,255,65,0.7)] lg:block"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-[8%] right-0 hidden w-px bg-primary/50 shadow-[0_0_18px_rgba(0,255,65,0.7)] lg:block"
        aria-hidden="true"
      />
      <Container className="grid items-center gap-6 py-8 lg:min-h-[calc(100svh-var(--header-height))] lg:grid-cols-[0.45fr_0.55fr] lg:gap-4 lg:py-4">
        <div className="relative z-10 max-w-[540px]">
          <h1 className="hero-anim font-[family-name:var(--font-space-grotesk)] text-[36px] font-bold leading-[0.92] tracking-[-0.055em] min-[375px]:text-[40px] sm:text-[56px] lg:text-[68px]">
            X1, a maior
            <br />
            loja de eletrônicos
            <br />
            <span className="text-neon">da região.</span>
          </h1>
          <p
            className="hero-anim mt-5 max-w-md text-[15px] leading-relaxed text-zinc-400"
            style={{ animationDelay: "120ms" }}
          >
            iPhones, smartphones e eletrônicos
            <br className="hidden sm:block" /> com condições que fazem a diferença.
          </p>
          <ul
            className="hero-anim mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5"
            style={{ animationDelay: "220ms" }}
          >
            {highlights.map((item) => (
              <li key={item.title} className="flex items-start gap-2.5">
                <item.icon
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <span className="text-[13px] font-medium leading-tight text-white">
                  {item.title}
                  <br />
                  <span className="font-normal text-zinc-300">{item.text}</span>
                </span>
              </li>
            ))}
          </ul>
          <div
            className="hero-anim mt-8 flex w-full flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "320ms" }}
          >
            <Button href="#desejados" size="lg" className="w-full sm:w-auto">
              Ver ofertas
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Button>
            <WhatsAppCta
              label="Falar com um especialista"
              message={WHATSAPP_MESSAGES.specialist}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
              source="hero"
            />
          </div>
          <p
            className="hero-anim mt-6 flex items-center gap-2 text-[13px] text-zinc-400"
            style={{ animationDelay: "420ms" }}
          >
            <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
            Sorocaba <span className="text-zinc-600">•</span> Tatuí{" "}
            <span className="text-zinc-600">•</span> Região
          </p>
        </div>
        <HeroVisual />
      </Container>
    </section>
  );
}

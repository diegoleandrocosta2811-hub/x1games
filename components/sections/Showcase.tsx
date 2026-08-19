import { ShowcaseUnit } from "@/components/ui/ShowcaseUnit";
import { getCategory } from "@/data/categories";
import { ROUTES } from "@/lib/site";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export function Showcase() {
  const iphones = getCategory("iphones");
  const smartphones = getCategory("smartphones");
  const games = getCategory("games");
  const informatica = getCategory("informatica");
  const eletronicos = getCategory("eletronicos");
  const seminovos = getCategory("seminovos");

  return (
    <div className="flex flex-col gap-3 bg-black">
      <ShowcaseUnit
        as="h1"
        headline={iphones.headline}
        subhead={iphones.subhead}
        image={iphones.image}
        imageAlt={iphones.imageAlt}
        moreHref={iphones.href}
        consultMessage={WHATSAPP_MESSAGES.iphones}
        source="showcase-iphones"
        size="full"
        priority
      />
      <ShowcaseUnit
        headline={smartphones.headline}
        subhead={smartphones.subhead}
        image={smartphones.image}
        imageAlt={smartphones.imageAlt}
        moreHref={smartphones.href}
        consultMessage={WHATSAPP_MESSAGES.smartphones}
        source="showcase-smartphones"
        size="full"
      />
      <ShowcaseUnit
        headline={games.headline}
        subhead={games.subhead}
        image={games.image}
        imageAlt={games.imageAlt}
        moreHref={games.href}
        consultMessage={WHATSAPP_MESSAGES.games}
        source="showcase-games"
        size="full"
      />
      <div className="grid gap-3 md:grid-cols-2">
        <ShowcaseUnit
          headline={informatica.headline}
          subhead={informatica.subhead}
          image={informatica.image}
          imageAlt={informatica.imageAlt}
          moreHref={informatica.href}
          consultMessage={WHATSAPP_MESSAGES.informatica}
          source="showcase-informatica"
          size="split"
        />
        <ShowcaseUnit
          headline={eletronicos.headline}
          subhead={eletronicos.subhead}
          image={eletronicos.image}
          imageAlt={eletronicos.imageAlt}
          moreHref={eletronicos.href}
          consultMessage={WHATSAPP_MESSAGES.eletronicos}
          source="showcase-eletronicos"
          size="split"
        />
        <ShowcaseUnit
          headline={seminovos.headline}
          subhead={seminovos.subhead}
          image={seminovos.image}
          imageAlt={seminovos.imageAlt}
          moreHref={seminovos.href}
          consultMessage={WHATSAPP_MESSAGES.seminovos}
          source="showcase-seminovos"
          size="split"
        />
        <ShowcaseUnit
          headline="Troca"
          subhead="Seu usado vale na próxima compra."
          image="/images/troca.jpg"
          imageAlt="iPhones para troca"
          moreHref={ROUTES.troca}
          consultMessage={WHATSAPP_MESSAGES.tradeIn}
          source="showcase-troca"
          size="split"
        />
      </div>
    </div>
  );
}

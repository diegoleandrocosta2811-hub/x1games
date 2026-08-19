import { ShowcaseLinks } from "@/components/ui/ShowcaseLinks";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { STOCK_DISCLAIMER } from "@/data/categories";
import { ROUTES } from "@/lib/site";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import type { Category } from "@/types/category";

const messageMap: Record<Category["id"], string> = {
  iphones: WHATSAPP_MESSAGES.iphones,
  smartphones: WHATSAPP_MESSAGES.smartphones,
  games: WHATSAPP_MESSAGES.games,
  informatica: WHATSAPP_MESSAGES.informatica,
  eletronicos: WHATSAPP_MESSAGES.eletronicos,
  seminovos: WHATSAPP_MESSAGES.seminovos,
};

export function CategoryPage({ category }: { category: Category }) {
  return (
    <article className="bg-black">
      <section className="flex min-h-[92vh] flex-col">
        <div className="px-6 pt-10 text-center sm:pt-14">
          <div className="mx-auto max-w-3xl [&_nav]:mb-6 [&_ol]:justify-center">
            <Breadcrumbs
              items={[
                { name: "Início", path: ROUTES.home },
                { name: category.name, path: category.href },
              ]}
            />
          </div>
          <h1
            className="text-[40px] font-semibold tracking-tight text-white sm:text-[56px] lg:text-[64px]"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            {category.headline}
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-[19px] text-zinc-300 sm:text-[24px]">
            {category.subhead}
          </p>
          <ShowcaseLinks
            moreHref="#detalhes"
            moreLabel="Ver detalhes"
            consultMessage={messageMap[category.id]}
            source={`page-${category.id}`}
          />
        </div>
        <div className="h-[48vh] min-h-[280px] w-full sm:h-[58vh] lg:h-[64vh]">
          <MediaFrame
            src={category.image}
            alt={category.imageAlt}
            className="h-full w-full bg-black"
            overlay="none"
            fit={category.image.endsWith(".png") ? "contain" : "cover"}
          />
        </div>
      </section>
      <section
        id="detalhes"
        className="mx-auto max-w-[680px] px-6 py-24 text-center"
      >
        <h2
          className="text-[28px] font-semibold tracking-tight text-white sm:text-[40px]"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          {category.title}
        </h2>
        <p className="mt-5 text-[17px] leading-relaxed text-zinc-400 sm:text-[19px]">
          {category.intro}
        </p>
        <ul className="mt-10 space-y-3 text-[17px] text-zinc-300">
          {category.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-12 text-sm leading-relaxed text-zinc-500">
          {STOCK_DISCLAIMER}
        </p>
      </section>
    </article>
  );
}

import { ShowcaseLinks } from "@/components/ui/ShowcaseLinks";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { company } from "@/data/company";
import { productGallery } from "@/data/gallery";

export function InstagramFeed() {
  const shots = productGallery;

  return (
    <section
      className="border-t border-white/5 bg-black py-24"
      aria-labelledby="instagram-titulo"
    >
      <div className="px-6 text-center">
        <h2
          id="instagram-titulo"
          className="text-[32px] font-semibold tracking-tight text-white sm:text-[40px]"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          O estoque do dia.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-[17px] text-zinc-400 sm:text-[21px]">
          Acompanhe {company.social.instagram.handle}. O mix muda o tempo todo.
        </p>
        <ShowcaseLinks
          moreHref={company.social.instagram.url}
          moreLabel="Ver Instagram"
          consultMessage="Olá! Vi o Instagram da X1 e quero consultar o estoque."
          consultLabel="Consultar"
          source="instagram-home"
        />
      </div>
      <div className="mx-auto mt-12 grid max-w-[1260px] grid-cols-2 gap-3 px-3 md:grid-cols-3">
        {shots.map((item) => (
          <a
            key={item.src}
            href={company.social.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block aspect-[4/5] w-full overflow-hidden bg-[#0b0b0d]"
          >
            <MediaFrame
              src={item.src}
              alt={item.alt}
              className="h-full w-full"
              imgClassName="h-full min-h-full object-cover"
              overlay="none"
            />
          </a>
        ))}
      </div>
    </section>
  );
}

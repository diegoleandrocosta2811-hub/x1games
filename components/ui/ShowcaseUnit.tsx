import { MediaFrame } from "@/components/ui/MediaFrame";
import { ShowcaseLinks } from "@/components/ui/ShowcaseLinks";
import { Reveal } from "@/components/ui/Reveal";

type ShowcaseUnitProps = {
  headline: string;
  subhead: string;
  image: string;
  imageAlt: string;
  moreHref: string;
  consultMessage: string;
  source: string;
  size?: "full" | "split";
  priority?: boolean;
  as?: "h1" | "h2";
};

export function ShowcaseUnit({
  headline,
  subhead,
  image,
  imageAlt,
  moreHref,
  consultMessage,
  source,
  size = "full",
  as: TitleTag = "h2",
}: ShowcaseUnitProps) {
  const full = size === "full";

  return (
    <section
      className={[
        "flex flex-col overflow-hidden bg-black",
        full ? "min-h-[92vh]" : "min-h-[640px]",
      ].join(" ")}
    >
      <Reveal className="relative z-10 px-6 pt-14 text-center sm:pt-16">
        <TitleTag
          className={[
            "font-semibold tracking-tight text-white",
            full
              ? "text-[40px] sm:text-[56px] lg:text-[64px]"
              : "text-[32px] sm:text-[40px] lg:text-[48px]",
          ].join(" ")}
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          {headline}
        </TitleTag>
        <p
          className={[
            "mx-auto mt-3 max-w-xl font-normal text-zinc-300",
            full ? "text-[19px] sm:text-[24px]" : "text-[17px] sm:text-[21px]",
          ].join(" ")}
        >
          {subhead}
        </p>
        <ShowcaseLinks
          moreHref={moreHref}
          consultMessage={consultMessage}
          source={source}
        />
      </Reveal>
      <div className="h-[48vh] min-h-[280px] w-full sm:h-[58vh] lg:h-[64vh]">
        <MediaFrame
          src={image}
          alt={imageAlt}
          className="h-full w-full"
          imgClassName="h-full object-cover"
          overlay="none"
        />
      </div>
    </section>
  );
}

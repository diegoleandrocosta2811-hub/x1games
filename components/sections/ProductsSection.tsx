"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { LineCard } from "@/components/ui/LineCard";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { homeLines } from "@/data/categories";
import { ROUTES } from "@/lib/site";

export function ProductsSection() {
  const [active, setActive] = useState(homeLines[0]?.id ?? "iphones");
  const scroller = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = scroller.current;
    if (!root) return;

    const cards = homeLines
      .map((line) => document.getElementById(`linha-${line.id}`))
      .filter((node): node is HTMLElement => Boolean(node));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const id = visible?.target.id.replace("linha-", "");
        if (id) setActive(id);
      },
      { root, threshold: 0.55 },
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  function focusLine(id: string) {
    setActive(id);
    const parent = scroller.current;
    const card = document.getElementById(`linha-${id}`);
    if (!parent || !card) return;
    const left =
      card.getBoundingClientRect().left -
      parent.getBoundingClientRect().left +
      parent.scrollLeft -
      16;
    parent.scrollTo({ left, behavior: "smooth" });
  }

  return (
    <section id="desejados" className="relative py-12 sm:py-16">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-4 sm:gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-[28px] font-bold leading-[1.05] tracking-tight sm:text-[44px]">
                Os mais desejados
                <br />
                da <span className="text-neon">X1</span>
              </h2>
              <Link
                href={ROUTES.contato}
                className="mt-3 inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-zinc-300 transition-colors hover:text-primary"
              >
                Ver todos os produtos
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div
              className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 hide-scrollbar"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              {homeLines.map((item) => {
                const selected = item.id === active;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => focusLine(item.id)}
                    className={[
                      "min-h-10 shrink-0 rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors",
                      selected
                        ? "bg-primary text-primary-foreground"
                        : "border border-white/10 bg-transparent text-zinc-300 hover:border-primary/40",
                    ].join(" ")}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>
      </Container>

      <div className="relative mt-6 sm:mt-8">
        <div
          ref={scroller}
          className="flex gap-3 overflow-x-auto scroll-pl-5 scroll-pr-5 pb-3 snap-x snap-mandatory hide-scrollbar sm:gap-4 sm:scroll-pl-7 lg:mx-auto lg:grid lg:w-full lg:max-w-[1360px] lg:grid-cols-3 lg:gap-4 lg:overflow-visible lg:scroll-pl-0 lg:px-8 lg:pb-0 xl:grid-cols-6"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <div className="w-2 shrink-0 sm:w-3 lg:hidden" aria-hidden="true" />
          {homeLines.map((line) => (
            <LineCard key={line.id} line={line} />
          ))}
          <div className="w-2 shrink-0 sm:w-3 lg:hidden" aria-hidden="true" />
        </div>
        <div className="mt-3 flex justify-center gap-1.5 lg:hidden">
          {homeLines.map((line) => (
            <button
              key={line.id}
              type="button"
              aria-label={`Ver ${line.name}`}
              onClick={() => focusLine(line.id)}
              className={[
                "h-1.5 rounded-full transition-all",
                active === line.id ? "w-5 bg-primary" : "w-1.5 bg-white/25",
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

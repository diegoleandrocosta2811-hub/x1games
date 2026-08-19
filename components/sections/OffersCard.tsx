"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function OffersCard() {
  const [failed, setFailed] = useState(false);

  return (
    <article className="relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-[16px] border border-white/10 bg-[#111113] p-6 sm:min-h-[380px]">
          <h3 className="relative z-10 max-w-[16ch] text-[22px] font-bold leading-[1.05] sm:text-[26px]">
        Os melhores
        <span className="text-primary">
          {" "}
          preços de iPhone de Sorocaba estão na X1.
        </span>
      </h3>
      <p className="relative z-10 mt-4 max-w-[26ch] text-[13px] leading-relaxed text-zinc-400">
        Variedade, condições especiais, aparelho novo, seminovo, avaliação do
        usado e atendimento especializado.
      </p>
      <div className="relative z-10 mt-auto pt-8">
        <Button href="#desejados" size="sm">
          Ver ofertas
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </Button>
      </div>
      {failed ? (
        <div
          className="pointer-events-none absolute -bottom-10 -right-8 h-40 w-40 rounded-full bg-primary/10 blur-2xl"
          aria-hidden="true"
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/images/iphone-17-pro-max.webp"
          alt=""
          className="pointer-events-none absolute -bottom-10 -right-12 h-52 w-auto opacity-50"
          onError={() => setFailed(true)}
        />
      )}
    </article>
  );
}

"use client";

import { useState } from "react";
import { WhatsAppCta } from "@/components/shared/WhatsAppCta";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import type { HomeLine } from "@/types";

export function LineCard({ line }: { line: HomeLine }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article
      id={`linha-${line.id}`}
      className="group flex h-full w-[min(78vw,240px)] shrink-0 snap-start flex-col overflow-hidden rounded-[16px] border border-white/10 bg-[#0b0b0d] transition-all duration-300 hover:-translate-y-[3px] hover:border-primary/50 hover:shadow-[0_0_24px_rgba(0,255,65,0.12)] lg:w-auto lg:min-w-0 lg:max-w-none"
    >
      <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-black">
        {line.image && !imageFailed ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={line.image}
            alt={line.imageAlt}
            width={480}
            height={600}
            loading="lazy"
            decoding="async"
            className="h-[86%] w-[86%] object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center px-4 text-center text-sm text-zinc-500">
            Imagem em breve
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-3.5 sm:p-4">
        <p className="text-[11px] uppercase tracking-[0.14em] text-zinc-500">
          {line.brand}
        </p>
        <h3 className="text-[15px] font-semibold leading-tight">{line.name}</h3>
        <p className="text-[12px] text-zinc-500">{line.spec}</p>
        <div className="mt-auto pt-2">
          <p className="text-[11px] text-zinc-500">A partir de</p>
          <p className="text-sm font-semibold">Consulte o valor</p>
          <p className="mt-0.5 text-[11px] text-zinc-500">
            ou 21x. Consulte as condições
          </p>
        </div>
        <div className="mt-3 flex flex-col gap-1">
          <WhatsAppCta
            label={line.cta}
            message={WHATSAPP_MESSAGES[line.messageKey]}
            size="sm"
            className="h-auto min-h-9 w-full px-2 py-2 text-center text-[12px] leading-tight"
            source={`linha-${line.id}`}
          />
          <Button href={line.href} variant="ghost" size="sm" className="w-full">
            Ver detalhes
          </Button>
        </div>
      </div>
    </article>
  );
}

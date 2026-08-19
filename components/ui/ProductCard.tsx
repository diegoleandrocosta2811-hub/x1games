"use client";

import { useState } from "react";
import { WhatsAppCta } from "@/components/shared/WhatsAppCta";
import { Button } from "@/components/ui/Button";
import { ROUTES } from "@/lib/site";
import type { Product } from "@/types";

export function ProductCard({ product }: { product: Product }) {
  const [imageFailed, setImageFailed] = useState(false);
  const meta = [product.storage, product.color].filter(Boolean).join(" • ");
  const cta =
    product.brand === "Apple" ? "Quero esse iPhone" : "Quero esse aparelho";

  return (
    <article className="group flex h-full w-[232px] shrink-0 snap-start flex-col overflow-hidden rounded-[16px] border border-white/10 bg-[#0b0b0d] transition-all duration-300 hover:-translate-y-[3px] hover:border-primary/35">
      <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-[#080808]">
        {product.badge ? (
          <span className="absolute right-3 top-3 z-10 rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold text-primary-foreground">
            {product.badge}
          </span>
        ) : null}
        {product.image && !imageFailed ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.image}
            alt={product.name}
            className="h-[86%] w-[86%] object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center px-4 text-center text-sm text-zinc-500">
            Imagem em breve
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <p className="text-[11px] uppercase tracking-[0.14em] text-zinc-500">
          {product.brand}
        </p>
        <h3 className="text-[15px] font-semibold leading-tight">{product.name}</h3>
        {meta ? <p className="text-[12px] text-zinc-500">{meta}</p> : null}
        <div className="mt-auto pt-2">
          <p className="text-[11px] text-zinc-500">A partir de</p>
          <p className="text-sm font-semibold">Consulte o valor</p>
          {product.installments ? (
            <p className="mt-0.5 text-[11px] text-zinc-500">
              ou 21x. Consulte as condições
            </p>
          ) : null}
        </div>
        <div className="mt-3 flex flex-col gap-1">
          <WhatsAppCta
            label={cta}
            message={`Olá! Quero consultar o ${product.name} na X1.`}
            size="sm"
            source={`product-${product.slug}`}
          />
          <Button href={ROUTES.contato} variant="ghost" size="sm">
            Ver detalhes
          </Button>
        </div>
      </div>
    </article>
  );
}

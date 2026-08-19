"use client";

import { useState } from "react";

const sparks = [
  { left: "4%", top: "18%", delay: "0s" },
  { left: "93%", top: "12%", delay: "0.4s" },
  { left: "6%", top: "78%", delay: "0.9s" },
  { left: "94%", top: "70%", delay: "1.3s" },
  { left: "80%", top: "22%", delay: "1.8s" },
  { left: "16%", top: "42%", delay: "2.2s" },
  { left: "72%", top: "86%", delay: "2.7s" },
];

export function HeroVisual() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="hero-phone relative mx-auto h-[250px] w-full max-w-[720px] overflow-visible min-[375px]:h-[300px] sm:h-[440px] lg:h-[560px]">
      <div
        className="hero-glow pointer-events-none absolute left-1/2 top-[58%] z-0 h-[62%] w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/35"
        aria-hidden="true"
        style={{
          boxShadow:
            "0 0 36px rgba(0,255,65,0.24), inset 0 0 40px rgba(0,255,65,0.08)",
        }}
      />

      {sparks.map((spark) => (
        <span
          key={`${spark.left}-${spark.top}`}
          className="hero-spark pointer-events-none absolute z-[1] h-1.5 w-1.5 rounded-full bg-primary"
          style={{
            left: spark.left,
            top: spark.top,
            animationDelay: spark.delay,
            boxShadow: "0 0 10px rgba(0,255,65,1)",
          }}
          aria-hidden="true"
        />
      ))}

      <div className="relative z-10 flex h-full items-center justify-center">
        {failed ? (
          <div className="flex h-[78%] w-[70%] flex-col items-center justify-center rounded-[32px] border border-white/10 bg-[#0c0c0e] px-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-300">
              X1 Games e Eletrônicos
            </p>
          </div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="/images/hero-x1-iphones.webp"
            alt="X1 Games e Eletrônicos — iPhone 17 Pro Max"
            width={1024}
            height={682}
            fetchPriority="high"
            decoding="async"
            className="h-full w-auto max-w-full object-contain"
            onError={() => setFailed(true)}
          />
        )}
      </div>
    </div>
  );
}

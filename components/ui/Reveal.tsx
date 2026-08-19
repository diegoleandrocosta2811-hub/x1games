"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  as?: "div" | "section" | "article" | "li";
};

export function Reveal({
  children,
  className = "",
  delayMs = 0,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={[
        "reveal-on-view transition-[opacity,transform,filter] ease-out",
        visible
          ? "translate-y-0 opacity-100 blur-0"
          : "translate-y-5 opacity-0 blur-[6px]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        transitionDuration: "700ms",
        transitionDelay: visible ? `${delayMs}ms` : "0ms",
      }}
    >
      {children}
    </Tag>
  );
}

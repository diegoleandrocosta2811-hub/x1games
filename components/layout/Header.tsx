"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/shared/Logo";
import { WhatsAppCta } from "@/components/shared/WhatsAppCta";
import { Container } from "@/components/ui/Container";
import { headerNav } from "@/data/navigation";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    const frame = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled || open
          ? "border-white/10 bg-black/80 backdrop-blur-xl"
          : "border-white/[0.06] bg-black/30 backdrop-blur-md",
      ].join(" ")}
    >
      <Container className="grid h-[var(--header-height)] grid-cols-[1fr_auto] items-center gap-4 xl:grid-cols-[1fr_auto_1fr]">
        <Logo />
        <nav
          className="hidden items-center justify-center gap-6 xl:flex"
          aria-label="Principal"
        >
          {headerNav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "relative pb-1 text-[13px] font-medium transition-colors duration-200",
                  active ? "text-primary" : "text-zinc-300 hover:text-primary",
                ].join(" ")}
              >
                {item.label}
                {active ? (
                  <span className="absolute inset-x-1 -bottom-px h-px bg-primary" />
                ) : null}
              </Link>
            );
          })}
        </nav>
        <div className="flex justify-end justify-self-end">
          <div className="hidden xl:block">
            <WhatsAppCta
              size="sm"
              source="header"
              className="rounded-full px-4"
            />
          </div>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] border border-white/10 xl:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>
      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-white/10 bg-black xl:hidden"
      >
        <Container className="flex flex-col py-3">
          {headerNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-3 text-base text-zinc-200"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="py-3">
            <WhatsAppCta className="w-full rounded-full" source="header-mobile" />
          </div>
        </Container>
      </div>
    </header>
  );
}

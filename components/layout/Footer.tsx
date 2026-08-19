"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { Logo } from "@/components/shared/Logo";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";
import { footerNav } from "@/data/navigation";
import { ANALYTICS_EVENTS, trackEvent } from "@/lib/analytics";
import { isPlaceholder } from "@/lib/placeholders";
import { getCompanyWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

function FooterLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: string;
  onClick?: () => void;
}) {
  const external = href.startsWith("http");
  return (
    <Link
      href={href}
      className="text-[13px] text-zinc-400 transition-colors hover:text-primary"
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

function FooterGroup({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <p className="hidden text-sm font-semibold md:block">{title}</p>
      <details className="group border-b border-white/8 py-3 md:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold [&::-webkit-details-marker]:hidden">
          {title}
        </summary>
        <div className="mt-3">{children}</div>
      </details>
      <div className="mt-3 hidden md:block">{children}</div>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  const instagramReady = !isPlaceholder(company.social.instagram.url);
  const hoursLabel = isPlaceholder(company.hours)
    ? "Consulte os horários de atendimento com a equipe"
    : company.hours;

  return (
    <footer className="border-t border-white/8 bg-black pb-20 md:pb-0">
      <Container className="grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-zinc-400">
            iPhones, smartphones e eletrônicos em {company.serviceArea}, com
            condições que fazem a diferença.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {instagramReady ? (
              <a
                href={company.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da X1"
                className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] border border-white/10 text-zinc-300 hover:border-primary/40 hover:text-primary"
                onClick={() =>
                  trackEvent(ANALYTICS_EVENTS.instagram_click, {
                    source: "footer",
                  })
                }
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
                </svg>
              </a>
            ) : null}
            <a
              href={getCompanyWhatsAppUrl(WHATSAPP_MESSAGES.contact)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp da X1"
              className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] border border-white/10 text-zinc-300 hover:border-primary/40 hover:text-primary"
              onClick={() =>
                trackEvent(ANALYTICS_EVENTS.whatsapp_click, {
                  source: "footer-icon",
                })
              }
            >
              <WhatsAppIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
        <FooterGroup title="Produtos">
          <ul className="space-y-2">
            {footerNav.produtos.map((item) => (
              <li key={item.href}>
                <FooterLink href={item.href}>{item.label}</FooterLink>
              </li>
            ))}
          </ul>
        </FooterGroup>
        <FooterGroup title="X1">
          <ul className="space-y-2">
            {footerNav.x1.map((item) => (
              <li key={item.href}>
                <FooterLink href={item.href}>{item.label}</FooterLink>
              </li>
            ))}
          </ul>
        </FooterGroup>
        <FooterGroup title="Atendimento">
          <ul className="space-y-2">
            <li>
              <FooterLink
                href={getCompanyWhatsAppUrl(WHATSAPP_MESSAGES.contact)}
                onClick={() =>
                  trackEvent(ANALYTICS_EVENTS.whatsapp_click, {
                    source: "footer",
                  })
                }
              >
                WhatsApp
              </FooterLink>
            </li>
            <li>
              {instagramReady ? (
                <FooterLink
                  href={company.social.instagram.url}
                  onClick={() =>
                    trackEvent(ANALYTICS_EVENTS.instagram_click, {
                      source: "footer",
                    })
                  }
                >
                  Instagram
                </FooterLink>
              ) : (
                <span className="text-[13px] text-zinc-400">Instagram</span>
              )}
            </li>
            <li className="text-[13px] text-zinc-500">{hoursLabel}</li>
          </ul>
        </FooterGroup>
      </Container>
      <div className="border-t border-white/8">
        <Container className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] text-zinc-500">
            {company.legalName} © {year}. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap gap-4">
            {footerNav.legal.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}

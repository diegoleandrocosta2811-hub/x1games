import { company } from "@/data/company";
import { isPlaceholder } from "@/lib/placeholders";

export function getWhatsAppNumber(): string {
  const fromEnv = process.env.NEXT_PUBLIC_WHATSAPP?.trim();
  if (fromEnv) return fromEnv;
  return company.whatsapp;
}

export function getWhatsAppUrl(number: string, message?: string): string {
  const digits = number.replace(/\D/g, "");
  const target = digits || number;
  const base = `https://wa.me/${target}`;

  if (!message) return base;

  return `${base}?text=${encodeURIComponent(message)}`;
}

export function getCompanyWhatsAppUrl(message?: string): string {
  return getWhatsAppUrl(getWhatsAppNumber(), message);
}

export function hasConfiguredWhatsApp(): boolean {
  const number = getWhatsAppNumber();
  return !isPlaceholder(number) && /\d/.test(number);
}

export const WHATSAPP_MESSAGES = {
  general: "Olá! Gostaria de falar com a X1 Games e Eletrônicos.",
  specialist: "Olá! Quero falar com um especialista da X1.",
  offers: "Olá! Quero consultar o estoque da X1. Novos e seminovos.",
  iphones: "Olá! Quero consultar iPhones disponíveis na X1.",
  smartphones: "Olá! Quero consultar Samsung, Xiaomi ou Motorola na X1.",
  games: "Olá! Quero consultar PlayStation, Xbox ou Nintendo na X1.",
  informatica: "Olá! Quero consultar MacBook, notebook, iPad ou tablet na X1.",
  eletronicos: "Olá! Quero consultar TVs e eletrônicos na X1.",
  macbooks: "Olá! Quero consultar MacBooks disponíveis na X1.",
  ipads: "Olá! Quero consultar iPads disponíveis na X1.",
  seminovos: "Olá! Quero consultar seminovos disponíveis na X1.",
  acessorios: "Olá! Quero consultar acessórios disponíveis na X1.",
  tradeIn: "Olá! Quero avaliar meu aparelho usado na troca.",
  installments: "Olá! Quero consultar as condições de parcelamento.",
  delivery: "Olá! Quero consultar as opções de entrega.",
  contact: "Olá! Quero mais informações sobre a X1.",
} as const;

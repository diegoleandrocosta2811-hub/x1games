import { ROUTES } from "@/lib/site";

export type NavItem = {
  label: string;
  href: string;
};

export const headerNav: NavItem[] = [
  { label: "Início", href: ROUTES.home },
  { label: "Seminovos", href: ROUTES.seminovos },
  { label: "Troca", href: ROUTES.troca },
  { label: "Lojas", href: ROUTES.lojas },
  { label: "Sobre", href: ROUTES.sobre },
  { label: "Contato", href: ROUTES.contato },
];

export const footerNav = {
  produtos: [
    { label: "Seminovos", href: ROUTES.seminovos },
    { label: "Acessórios", href: ROUTES.acessorios },
    { label: "Games", href: ROUTES.games },
    { label: "Informática", href: ROUTES.informatica },
  ],
  x1: [
    { label: "Sobre", href: ROUTES.sobre },
    { label: "Lojas", href: ROUTES.lojas },
    { label: "Troca", href: ROUTES.troca },
    { label: "Contato", href: ROUTES.contato },
  ],
  legal: [
    { label: "Política de Privacidade", href: ROUTES.privacy },
    { label: "Termos de Uso", href: ROUTES.terms },
  ],
} as const;

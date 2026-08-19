# X1 Games e Eletrônicos

Site oficial da **X1 Games e Eletrônicos**, loja de iPhones, smartphones, games e eletrônicos com matriz em Sorocaba/SP e duas filiais em Tatuí/SP.

Este repositório é a fundação técnica do projeto: App Router, SEO, GEO, design system e dados centralizados. Informações comerciais ainda não confirmadas ficam como placeholders `PREENCHER_*` — não invente telefone, endereço, preço, CNPJ ou avaliação.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- ESLint
- React Server Components
- Lucide React
- Deploy previsto na Vercel

## Como instalar

```bash
npm install
```

Copie o exemplo de ambiente:

```bash
cp .env.example .env.local
```

No Windows (PowerShell):

```powershell
Copy-Item .env.example .env.local
```

## Como rodar

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

Lint:

```bash
npm run lint
```

## Variáveis de ambiente

| Variável | Uso |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL canônica (`metadataBase`, sitemap, robots, Open Graph). Sem valor, o fallback é `http://localhost:3000`. |
| `NEXT_PUBLIC_WHATSAPP` | Número do WhatsApp (DDI + DDD + número). Sem valor, usa `company.whatsapp` em `data/company.ts`. |

IDs de GTM, GA4, Meta Pixel e Google Ads estão apenas comentados. Não carregue scripts até existir ID real.

## Onde editar os dados da X1

- Empresa, WhatsApp, Instagram, e-mail, horários: `data/company.ts`
- Unidades: `data/stores.ts`
- Produtos: `data/products.ts`
- FAQ: `data/faq.ts`
- Menu: `data/navigation.ts`
- Constantes do site e rotas: `lib/site.ts`

## Como alterar o WhatsApp

1. Preencha `NEXT_PUBLIC_WHATSAPP` no `.env.local`, **ou**
2. Troque `whatsapp: "PREENCHER_WHATSAPP"` em `data/company.ts`.

URLs do WhatsApp devem ser geradas só por `lib/whatsapp.ts` (`getWhatsAppUrl` / `getCompanyWhatsAppUrl`). Não espalhe `wa.me` nos componentes.

## Como cadastrar linhas de produto

A X1 **não publica páginas de produto individual**. O estoque de novos e seminovos gira ao longo do dia.

Edite `data/categories.ts` para ajustar:

- iPhones
- Smartphones (Samsung, Xiaomi, Motorola)
- Games (PS5, PS4, PS3, Xbox, Nintendo)
- Informática (MacBook, notebook, iPad, tablet)
- TVs e eletrônicos
- Seminovos

O visitante consulta disponibilidade no WhatsApp ou no Instagram `@x1gameseletronicos`.

## Como cadastrar unidades

Edite `data/stores.ts`. Cada unidade precisa de:

- `id`, `nome`, `cidade`, `estado`
- `endereço`, `telefone`, `whatsapp`, `horário`
- `googleMapsUrl`, `latitude`, `longitude`

Enquanto o endereço real não existir, mantenha `PREENCHER_ENDERECO` e `latitude`/`longitude` como `null`.

## Estrutura de pastas

```text
app/                  Rotas, layout, metadata, robots, sitemap
components/layout/    Header e Footer
components/ui/        Botão, card, accordion, Reveal, CategoryCard
components/sections/  Seções da Home
components/shared/    Logo, CTAs, ações de loja
components/seo/       JSON-LD
data/                 Dados da empresa
lib/                  Site, WhatsApp, SEO, schema, analytics
types/                Contratos TypeScript
public/               Assets estáticos
```

Rotas públicas:

`/`, `/games`, `/informatica`, `/seminovos`, `/acessorios`, `/troca`, `/lojas`, `/sobre`, `/contato`, `/sorocaba`, `/tatui`, `/politica-de-privacidade`, `/termos-de-uso`

## SEO e GEO

- Metadata API com title template e `metadataBase`
- Open Graph, Twitter Card e imagem gerada em `app/opengraph-image.tsx`
- `app/robots.ts` e `app/sitemap.ts`
- JSON-LD em `lib/schema.ts` (Organization, WebSite, ElectronicsStore, BreadcrumbList, FAQPage, Product). Schemas só usam dados reais; sem rating, review, CNPJ, telefone ou preço inventados.

## Analytics

Helper em `lib/analytics.ts`. Eventos: `whatsapp_click`, `product_view`, `trade_in_start`, `installment_click`, `delivery_click`, `store_location_click`, `instagram_click`, `contact_submit`.

A função envia para `window.dataLayer` se existir e não quebra se o dataLayer ainda não estiver presente.

## Identidade visual

Tokens em `app/globals.css`: background, foreground, muted, card, border, primary (verde X1), primary-hover, secondary e accent. Headings usam Space Grotesk; o corpo usa Inter, via `next/font`.

## Fotos de produto

As imagens atuais ficam em `public/images/` (iPhone, Samsung, PS5, Xbox, Nintendo Switch, MacBook, iPad, TV). São fotos de banco livre (Unsplash), não do estoque da X1. Troque esses arquivos pelas fotos oficiais da loja quando estiverem disponíveis.

import { company } from "@/data/company";
import { faqItems } from "@/data/faq";
import { stores } from "@/data/stores";
import { isPlaceholder } from "@/lib/placeholders";
import { getSiteUrl, SITE_NAME } from "@/lib/site";
import type { FaqItem, Product } from "@/types";

type JsonLdValue = string | number | boolean | JsonLdObject | JsonLdValue[];

type JsonLdObject = {
  [key: string]: JsonLdValue | undefined;
};

function omitUndefined(input: JsonLdObject): JsonLdObject {
  return Object.fromEntries(
    Object.entries(input).filter(([, value]) => value !== undefined),
  );
}

function realString(value: string): string | undefined {
  return isPlaceholder(value) ? undefined : value;
}

export function organizationSchema(): JsonLdObject {
  return omitUndefined({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    legalName: company.legalName,
    description: company.description,
    url: getSiteUrl(),
    areaServed: company.serviceArea,
    knowsAbout: [
      "iPhone",
      "Samsung",
      "Xiaomi",
      "Motorola",
      "PlayStation",
      "Xbox",
      "Nintendo",
      "MacBook",
      "iPad",
      "notebook",
      "televisão",
      "seminovos",
    ],
  });
}

export function websiteSchema(): JsonLdObject {
  return omitUndefined({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: getSiteUrl(),
    inLanguage: "pt-BR",
    description: company.description,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
    },
  });
}

export function electronicsStoreSchema(): JsonLdObject {
  const departments = stores.map((store) =>
    omitUndefined({
      "@type": "ElectronicsStore",
      name: store.name,
      address: realString(store.address)
        ? {
            "@type": "PostalAddress",
            streetAddress: store.address,
            addressLocality: store.city,
            addressRegion: store.state,
            addressCountry: "BR",
          }
        : {
            "@type": "PostalAddress",
            addressLocality: store.city,
            addressRegion: store.state,
            addressCountry: "BR",
          },
      telephone: realString(store.phone),
    }),
  );

  return omitUndefined({
    "@context": "https://schema.org",
    "@type": "ElectronicsStore",
    name: SITE_NAME,
    description: company.description,
    url: getSiteUrl(),
    areaServed: company.serviceArea,
    paymentAccepted: "Cartão de crédito",
    department: departments,
  });
}

export function breadcrumbSchema(
  items: { name: string; path: string }[],
): JsonLdObject {
  const base = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${base}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function faqPageSchema(items: FaqItem[] = faqItems): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function productSchema(product: Product): JsonLdObject | null {
  if (product.price !== null) {
    return omitUndefined({
      "@context": "https://schema.org",
      "@type": "Product",
      name: product.name,
      brand: product.brand.startsWith("PREENCHER_")
        ? undefined
        : {
            "@type": "Brand",
            name: product.brand,
          },
      description: product.description,
      category: product.category,
      offers: {
        "@type": "Offer",
        priceCurrency: "BRL",
        price: product.price,
        availability: product.available
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
        url: getSiteUrl(),
      },
    });
  }

  return omitUndefined({
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    category: product.category,
    brand: product.brand.startsWith("PREENCHER_")
      ? undefined
      : { "@type": "Brand", name: product.brand },
  });
}

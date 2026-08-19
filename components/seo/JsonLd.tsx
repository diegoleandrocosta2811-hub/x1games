import {
  electronicsStoreSchema,
  faqPageSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/schema";

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function HomeJsonLd() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={websiteSchema()} />
      <JsonLd data={electronicsStoreSchema()} />
      <JsonLd data={faqPageSchema()} />
    </>
  );
}

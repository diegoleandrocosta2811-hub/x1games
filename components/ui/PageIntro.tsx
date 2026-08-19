import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import {
  Breadcrumbs,
  type BreadcrumbItem,
} from "@/components/ui/Breadcrumbs";

type PageIntroProps = {
  title: string;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
  children?: ReactNode;
};

export function PageIntro({
  title,
  description,
  breadcrumbs,
  children,
}: PageIntroProps) {
  return (
    <section className="bg-black py-20 sm:py-28">
      <Container className="text-center">
        {breadcrumbs ? (
          <div className="[&_ol]:justify-center">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        ) : null}
        <h1
          className="mx-auto max-w-3xl text-[40px] font-semibold tracking-tight text-white sm:text-[56px]"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-zinc-400 sm:text-[21px]">
          {description}
        </p>
        {children ? (
          <div className="mt-8 flex justify-center">{children}</div>
        ) : null}
      </Container>
    </section>
  );
}

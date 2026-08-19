import { Accordion } from "@/components/ui/Accordion";
import { Container } from "@/components/ui/Container";
import { faqItems } from "@/data/faq";

export function FAQ() {
  return (
    <section id="faq" className="bg-black py-24" aria-labelledby="faq-titulo">
      <Container>
        <h2
          id="faq-titulo"
          className="text-center text-[32px] font-semibold tracking-tight text-white sm:text-[40px]"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          Dúvidas frequentes
        </h2>
        <div className="mx-auto mt-12 max-w-2xl">
          <Accordion items={faqItems} />
        </div>
      </Container>
    </section>
  );
}

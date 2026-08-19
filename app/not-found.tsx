import { WhatsAppCta } from "@/components/shared/WhatsAppCta";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ROUTES } from "@/lib/site";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export default function NotFound() {
  return (
    <section className="py-24">
      <Container className="max-w-2xl text-center">
        <p className="text-sm font-medium text-primary">404</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
          Ops. Esse aparelho saiu do estoque.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          A página que você procura não está mais por aqui, mas temos várias
          outras opções esperando por você.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={ROUTES.home} size="lg">
            Voltar para o início
          </Button>
          <WhatsAppCta
            label="Falar com a X1"
            message={WHATSAPP_MESSAGES.contact}
            variant="secondary"
            size="lg"
            source="not-found"
          />
        </div>
      </Container>
    </section>
  );
}

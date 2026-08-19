import { CreditCard, MapPin, RefreshCcw, Truck } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const benefits = [
  {
    title: "Até 21x no cartão",
    text: "Parcele seu novo aparelho e consulte as condições com a equipe.",
    icon: CreditCard,
  },
  {
    title: "Seu usado vale na troca",
    text: "Avalie o aparelho atual e use o valor como parte do pagamento.",
    icon: RefreshCcw,
  },
  {
    title: "Entrega na sua casa",
    text: "Consulte as opções de entrega para Sorocaba, Tatuí e região.",
    icon: Truck,
  },
  {
    title: "Lojas em Sorocaba e Tatuí",
    text: "Matriz em Sorocaba e duas unidades em Tatuí para atendimento próximo.",
    icon: MapPin,
  },
];

export function Benefits() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="beneficios-titulo">
      <Container>
        <h2 id="beneficios-titulo" className="sr-only">
          Benefícios da X1
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit.title} delayMs={index * 70}>
              <Card className="h-full p-5">
                <benefit.icon
                  className="h-6 w-6 text-primary"
                  aria-hidden="true"
                />
                <h3 className="mt-4 text-lg font-semibold">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {benefit.text}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

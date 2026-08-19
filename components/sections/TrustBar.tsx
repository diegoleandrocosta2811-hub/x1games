import { ShieldCheck, Sparkles, Users } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const trust = [
  { icon: Users, label: "Atendimento especializado" },
  { icon: ShieldCheck, label: "Compra segura e garantida" },
  { icon: Sparkles, label: "Produtos originais e com garantia" },
];

export function TrustBar() {
  return (
    <Reveal className="h-full">
      <div className="flex h-full flex-col justify-center gap-8 px-2 py-6 lg:px-4">
        {trust.map((item) => (
          <p key={item.label} className="flex items-center gap-3 text-[15px] font-medium">
            <item.icon className="h-6 w-6 text-primary" strokeWidth={1.7} aria-hidden="true" />
            {item.label}
          </p>
        ))}
      </div>
    </Reveal>
  );
}

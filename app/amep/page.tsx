import { Metadata } from 'next';
import NavbarLp from "@/components/lp/navbar";
import AmepHero from "@/components/amep/amep-hero";
import AmepPromo from "@/components/amep/amep-promo";
import AmepHospitals from "@/components/amep/amep-hospitals";
import AmepPricing from "@/components/amep/amep-pricing";
import AmepRules from "@/components/amep/amep-rules";
import AmepSimulator from "@/components/amep/amep-simulator";
import AmepFooter from "@/components/amep/amep-footer";
import FloatingChat from "@/components/lp/floating-chat";

export const metadata: Metadata = {
    title: "Amep Saúde - Planos sem Coparticipação na Baixada Fluminense | Âncora Corretora",
    description: "Tabela promocional Amep Saúde a partir de R$ 82,94 (MEI/PME) e R$ 138,74 (Individual). Carência ZERO para consultas na Rede Própria e suporte no Hospital Prontonil em Nova Iguaçu.",
    openGraph: {
        title: "Amep Saúde - Tabela Comercial Atualizada",
        description: "Planos de saúde ambulatoriais sem franquia e sem coparticipação. Atendimento no Hospital Prontonil.",
    }
};

export default function AmepPage() {
    return (
        <main className="w-full min-h-[100dvh] flex flex-col bg-background font-sans overflow-x-hidden">
            <NavbarLp />
            <AmepHero />
            <AmepPromo />
            <AmepHospitals />
            <AmepPricing />
            <AmepRules />
            <AmepSimulator />
            <AmepFooter />
            <FloatingChat />
        </main>
    );
}

import { Metadata } from 'next';
import NavbarLp from "@/components/lp/navbar";
import AmepHero from "@/components/amep/amep-hero";
import AmepTabs from "@/components/amep/amep-tabs";
import AmepSimulator from "@/components/amep/amep-simulator";
import AmepPricing from "@/components/amep/amep-pricing";
import AmepCta from "@/components/amep/amep-cta";
import AmepFooter from "@/components/amep/amep-footer";
import FloatingChat from "@/components/lp/floating-chat";

export const metadata: Metadata = {
    title: "Amep Saúde - Tabela de Preços e Cotação Online | Âncora Corretora",
    description: "Consulte a tabela oficial do plano Amep Saúde. Planos a partir de R$ 82,94 (CNPJ/MEI) e R$ 138,74 (Individual). Atendimento garantido no Hospital Prontonil em Nova Iguaçu.",
    openGraph: {
        title: "Amep Saúde - Tabela Promocional Atualizada",
        description: "Planos de saúde acessíveis na Baixada Fluminense com carência zero para consultas na rede própria.",
    }
};

export default function AmepPage() {
    return (
        <main className="w-full min-h-[100dvh] flex flex-col bg-background font-sans overflow-x-hidden">
            <NavbarLp />
            <AmepHero />
            <AmepTabs />
            <AmepSimulator />
            <AmepPricing />
            <AmepCta />
            <AmepFooter />
            <FloatingChat />
        </main>
    );
}

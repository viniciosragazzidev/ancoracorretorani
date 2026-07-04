'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Building2, ShieldCheck, CheckCircle2, HelpCircle } from 'lucide-react';

const rules = [
    {
        icon: UserCheck,
        title: "Sem Limite de Idade para Jovens",
        subtitle: "A partir de 12 Anos Completos",
        description: "Contratação liberada a partir de 12 anos completos. Jovens de 12 a 14 anos podem aderir individualmente sem necessidade de estar atrelado a um responsável no contrato.",
        badge: "Vendas Individuais"
    },
    {
        icon: Building2,
        title: "Flexibilidade MEI & CNPJ",
        subtitle: "Qualquer Vínculo Liberado",
        description: "Tem MEI ou CNPJ? Garanta o menor preço da tabela. O titular entra no plano e pode incluir qualquer outra pessoa (parentes, colaboradores ou amigos) sem exigência de vínculo empregatício.",
        badge: "Economia PME"
    },
    {
        icon: ShieldCheck,
        title: "Sem Surpresas no Fim do Mês",
        subtitle: "100% Sem Franquia e Sem Coparticipação",
        description: "Plano inteiramente Ambulatorial cobrindo todo o rol de exigências da ANS para consultas, exames, urgências e emergências (com repouso de até 12h), totalmente sem franquia e sem coparticipação.",
        badge: "Segurança Total"
    }
];

export default function AmepRules() {
    return (
        <section className="w-full py-16 sm:py-24 bg-background border-b border-border/40 font-sans select-none">
            <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6">
                
                {/* Header */}
                <div className="flex flex-col items-center text-center space-y-3 mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
                        <HelpCircle className="size-3.5" />
                        <span>Transparência & Regras Claras</span>
                    </div>

                    <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight max-w-3xl">
                        Regras Descomplicadas para Você Adquirir Sem Dúvidas
                    </h2>

                    <p className="text-sm sm:text-base text-muted-foreground max-w-2xl">
                        Tiramos a burocracia do caminho para garantir a contratação mais rápida da Baixada Fluminense.
                    </p>
                </div>

                {/* 3 Columns Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {rules.map((rule, idx) => {
                        const IconComp = rule.icon;
                        return (
                            <motion.div
                                key={rule.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="rounded-3xl p-8 bg-muted/30 border border-border/60 hover:border-emerald-500/40 hover:bg-muted/50 transition-all flex flex-col justify-between text-left space-y-6 shadow-xs group"
                            >
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="size-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                                            <IconComp className="size-6" />
                                        </div>
                                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full">
                                            {rule.badge}
                                        </span>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-foreground leading-tight">
                                            {rule.title}
                                        </h3>
                                        <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 block mt-1">
                                            {rule.subtitle}
                                        </span>
                                    </div>

                                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                        {rule.description}
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-border/40 flex items-center gap-2 text-xs font-medium text-foreground">
                                    <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                                    <span>Garantia oficial de contrato AMEP</span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}

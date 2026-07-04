'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Zap, Users, User, ArrowRight, CheckCircle2, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const tabelaIndividual = [
    { faixa: "00 a 18 anos", valor: "138,74" },
    { faixa: "19 a 23 anos", valor: "145,67" },
    { faixa: "24 a 28 anos", valor: "160,24" },
    { faixa: "29 a 33 anos", valor: "176,26" },
    { faixa: "34 a 38 anos", valor: "197,42" },
    { faixa: "39 a 43 anos", valor: "221,11" },
];

const tabelaPme = [
    { faixa: "00 a 18 anos", valor: "82,94" },
    { faixa: "19 a 23 anos", valor: "87,09" },
    { faixa: "24 a 28 anos", valor: "95,80" },
    { faixa: "29 a 33 anos", valor: "105,37" },
    { faixa: "34 a 38 anos", valor: "118,02" },
    { faixa: "39 a 43 anos", valor: "132,18" },
];

export default function AmepPricing() {
    const [activeTab, setActiveTab] = useState<'pme' | 'individual'>('pme');

    const handleQuoteClick = (faixa: string, valor: string) => {
        const modalidade = activeTab === 'pme' ? 'Smart PME / MEI (2+ Vidas)' : 'Ideal Adesão (Individual)';
        const msg = `Olá! Vi a tabela da AMEP Saúde e gostaria de contratar a faixa etária (${faixa}) no valor de R$ ${valor}/mês na modalidade ${modalidade}.`;
        window.open(`https://wa.me/5521974450263?text=${encodeURIComponent(msg)}`, '_blank');
    };

    return (
        <section className="w-full py-16 sm:py-24 bg-muted/20 border-b border-border/40 font-sans select-none">
            <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-6">
                
                {/* Header */}
                <div className="flex flex-col items-center text-center space-y-3 mb-10">
                    <div className="flex items-center gap-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
                            <FileText className="size-3.5" />
                            <span>Tabela Comercial Sem Pegadinhas</span>
                        </div>
                        <Image src="/amep_saude_logo.png" alt="Amep Saúde Logo" width={75} height={22} className="h-5 w-auto object-contain" />
                    </div>

                    <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight max-w-3xl">
                        Valores Claros. Escolha o Modelo Ideal para o Seu Bolso.
                    </h2>

                    <p className="text-sm sm:text-base text-muted-foreground max-w-xl">
                        Valores mensais sem franquia e sem coparticipação. Alterne abaixo entre a modalidade Empresarial/MEI e Individual.
                    </p>
                </div>

                {/* Tab Switcher */}
                <div className="flex justify-center mb-8">
                    <div className="inline-flex p-1.5 rounded-2xl bg-muted border border-border/60 shadow-inner">
                        <button
                            onClick={() => setActiveTab('pme')}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                                activeTab === 'pme'
                                    ? 'bg-emerald-600 text-white shadow-md'
                                    : 'text-muted-foreground hover:text-foreground'
                            }`}
                        >
                            <Users className="size-4" />
                            <span>Smart PME / MEI (a partir de 2 vidas)</span>
                            <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded-md uppercase font-black">
                                -35%
                            </span>
                        </button>

                        <button
                            onClick={() => setActiveTab('individual')}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                                activeTab === 'individual'
                                    ? 'bg-emerald-600 text-white shadow-md'
                                    : 'text-muted-foreground hover:text-foreground'
                            }`}
                        >
                            <User className="size-4" />
                            <span>Ideal Adesão (Individual)</span>
                        </button>
                    </div>
                </div>

                {/* Table Container */}
                <div className="relative rounded-3xl bg-background border border-border/70 shadow-xl overflow-hidden text-left">
                    <div className="p-4 sm:p-6 bg-muted/40 border-b border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                            <Image src="/amep_saude_logo.png" alt="Amep Saúde Logo" width={80} height={24} className="h-6 w-auto object-contain shrink-0" />
                            <div>
                                <h3 className="text-lg font-bold text-foreground">
                                    {activeTab === 'pme' ? 'Linha Smart PME / MEI (Empresarial)' : 'Linha Ideal Adesão (Individual / CPF)'}
                                </h3>
                                <p className="text-xs text-muted-foreground mt-0.5">
                                    {activeTab === 'pme' 
                                        ? 'Para quem possui MEI ou CNPJ. Inclua sócios, colaboradores ou familiares sem exigência de vínculo.' 
                                        : 'Para contratação individual a partir de 12 anos completos.'}
                                </p>
                            </div>
                        </div>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold shrink-0">
                            <ShieldCheck className="size-3.5" />
                            <span>Sem Coparticipação</span>
                        </div>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.25 }}
                            className="divide-y divide-border/40"
                        >
                            {(activeTab === 'pme' ? tabelaPme : tabelaIndividual).map((row) => (
                                <div 
                                    key={row.faixa} 
                                    className="p-4 sm:px-6 flex items-center justify-between hover:bg-muted/30 transition-colors"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="size-2 rounded-full bg-emerald-500" />
                                        <span className="text-sm font-semibold text-foreground">
                                            {row.faixa}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-4 sm:gap-6">
                                        <div className="text-right">
                                            <span className="text-xs text-muted-foreground mr-1">R$</span>
                                            <span className="text-lg sm:text-xl font-extrabold text-foreground tracking-tight">
                                                {row.valor}
                                            </span>
                                            <span className="text-[11px] text-muted-foreground">/mês</span>
                                        </div>

                                        <Button
                                            onClick={() => handleQuoteClick(row.faixa, row.valor)}
                                            size="sm"
                                            className="h-9 px-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-xs cursor-pointer flex items-center gap-1"
                                        >
                                            <span>Contratar</span>
                                            <ArrowRight className="size-3" />
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {/* Table Footer Note */}
                    <div className="p-4 bg-muted/20 border-t border-border/40 text-center text-xs text-muted-foreground">
                        <p>Consulte prazos e condições para demais faixas etárias acima de 43 anos diretamente no nosso atendimento.</p>
                    </div>
                </div>

            </div>
        </section>
    );
}

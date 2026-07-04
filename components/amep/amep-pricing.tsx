'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FileText, ShieldCheck, ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const tabelaPrecos = [
    { faixa: "00 a 18 anos", individual: "138,74", pme: "82,94" },
    { faixa: "19 a 23 anos", individual: "145,67", pme: "87,09" },
    { faixa: "24 a 28 anos", individual: "160,24", pme: "95,80" },
    { faixa: "29 a 33 anos", individual: "176,26", pme: "105,37" },
    { faixa: "34 a 38 anos", individual: "197,42", pme: "118,02" },
    { faixa: "39 a 43 anos", individual: "221,11", pme: "132,18" },
];

export default function AmepPricing() {
    const handleTableQuote = (faixa: string, tipo: 'individual' | 'pme', valor: string) => {
        const modalidade = tipo === 'pme' ? 'Empresa (MEI/PME)' : 'Individual (Adesão)';
        const msg = `Olá! Vi a tabela de preços do plano Amep Saúde para a faixa etária (${faixa}) no valor de R$ ${valor}/mês na modalidade ${modalidade} e gostaria de contratar!`;
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
                            <span>Tabela de Referência Amep</span>
                        </div>
                        <Image src="/amep_saude_logo.png" alt="Amep Saúde Logo" width={75} height={22} className="h-5 w-auto object-contain" />
                    </div>

                    <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight max-w-2xl">
                        Quanto custa o plano?
                    </h2>

                    <p className="text-sm sm:text-base text-muted-foreground max-w-xl">
                        Valores divididos por faixa etária. Sem taxas escondidas.
                    </p>
                </div>

                {/* Scannable Table Container */}
                <div className="relative rounded-3xl bg-background border border-border/80 shadow-xl overflow-hidden text-left">
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600" />

                    {/* Table Header Row */}
                    <div className="grid grid-cols-12 p-4 sm:p-6 bg-muted/40 border-b border-border/60 text-xs font-bold uppercase tracking-wider text-muted-foreground items-center">
                        <div className="col-span-4 sm:col-span-4 flex items-center gap-2">
                            <span>Faixa Etária</span>
                        </div>
                        <div className="col-span-4 sm:col-span-4 text-center">
                            <span>Linha Individual (Adesão)</span>
                        </div>
                        <div className="col-span-4 sm:col-span-4 text-right flex items-center justify-end gap-1.5 text-emerald-600 dark:text-emerald-400 font-extrabold">
                            <Zap className="size-3.5 fill-emerald-600" />
                            <span>Linha Empresa (MEI/PME)</span>
                        </div>
                    </div>

                    {/* Table Body Rows */}
                    <div className="divide-y divide-border/40">
                        {tabelaPrecos.map((row) => (
                            <div 
                                key={row.faixa} 
                                className="grid grid-cols-12 p-4 sm:px-6 items-center hover:bg-muted/30 transition-colors"
                            >
                                {/* Faixa Etária */}
                                <div className="col-span-4 sm:col-span-4 flex items-center gap-2.5">
                                    <div className="size-2 rounded-full bg-emerald-500 shrink-0" />
                                    <span className="text-xs sm:text-sm font-semibold text-foreground">
                                        {row.faixa}
                                    </span>
                                </div>

                                {/* Individual Price */}
                                <div className="col-span-4 sm:col-span-4 text-center">
                                    <button 
                                        onClick={() => handleTableQuote(row.faixa, 'individual', row.individual)}
                                        className="inline-flex items-baseline gap-1 hover:text-emerald-600 transition-colors cursor-pointer group"
                                    >
                                        <span className="text-xs text-muted-foreground">R$</span>
                                        <span className="text-base sm:text-lg font-extrabold text-foreground group-hover:text-emerald-600 transition-colors">
                                            {row.individual}
                                        </span>
                                        <span className="text-[10px] text-muted-foreground">/mês</span>
                                    </button>
                                </div>

                                {/* PME / MEI Price */}
                                <div className="col-span-4 sm:col-span-4 text-right flex items-center justify-end gap-2">
                                    <button 
                                        onClick={() => handleTableQuote(row.faixa, 'pme', row.pme)}
                                        className="inline-flex items-baseline gap-1 bg-emerald-500/10 hover:bg-emerald-500/20 px-3 py-1.5 rounded-xl border border-emerald-500/30 transition-all cursor-pointer group"
                                    >
                                        <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">R$</span>
                                        <span className="text-base sm:text-lg font-extrabold text-emerald-600 dark:text-emerald-300">
                                            {row.pme}
                                        </span>
                                        <span className="text-[10px] text-emerald-600 dark:text-emerald-400">/mês</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer Bar */}
                    <div className="p-4 bg-muted/30 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="size-4 text-emerald-500" />
                            <span>Sem franquia e sem taxa de adesão oculta.</span>
                        </div>
                        <Button
                            onClick={() => {
                                const el = document.getElementById('simulador');
                                if (el) el.scrollIntoView({ behavior: 'smooth' });
                            }}
                            variant="ghost"
                            size="sm"
                            className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 cursor-pointer flex items-center gap-1"
                        >
                            <span>Simular Outras Idades</span>
                            <ArrowRight className="size-3.5" />
                        </Button>
                    </div>

                </div>

            </div>
        </section>
    );
}

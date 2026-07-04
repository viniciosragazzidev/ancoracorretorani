'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Zap, Clock, ShieldCheck, CheckCircle2, ArrowRight, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AmepPromo() {
    const handleActionClick = () => {
        const input = document.querySelector('input[type="tel"]') as HTMLInputElement;
        if (input) {
            input.focus();
            input.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            window.open('https://wa.me/5521974450263?text=Olá!%20Quero%20aproveitar%20a%20promoção%20Carência%20Zero%20para%20consultas%20na%20AMEP%20Saúde.', '_blank');
        }
    };

    return (
        <section className="w-full py-16 sm:py-24 bg-gradient-to-b from-background via-emerald-950/20 to-background border-b border-border/40 font-sans select-none relative overflow-hidden">
            
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />

            <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="relative rounded-3xl bg-gradient-to-br from-emerald-950/80 via-background/95 to-slate-900/90 border border-emerald-500/30 p-8 sm:p-12 shadow-[0_25px_60px_-15px_rgba(16,185,129,0.15)] backdrop-blur-xl overflow-hidden"
                >
                    {/* Top Accent Strip */}
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
                        
                        {/* Text Content (8 Cols) */}
                        <div className="lg:col-span-8 space-y-5">
                            <div className="flex flex-wrap items-center gap-3">
                                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                                    <Zap className="size-4 fill-emerald-400" />
                                    <span>Campanha Comercial Exclusiva</span>
                                </div>
                                <div className="bg-background/90 px-3 py-1 rounded-full border border-border/40 flex items-center gap-2 shadow-2xs">
                                    <Image src="/amep_saude_logo.png" alt="Amep Saúde Logo" width={70} height={22} className="h-5 w-auto object-contain" />
                                    <span className="text-[11px] font-semibold text-muted-foreground">Rede Própria</span>
                                </div>
                            </div>

                            <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                                Contrate Agora e Tenha <span className="text-emerald-400 underline decoration-emerald-500/30 underline-offset-8">Carência ZERO para Consultas</span>.
                            </h2>

                            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-normal max-w-3xl">
                                Durante a vigência desta campanha comercial, os novos beneficiários contam com liberação imediata (Carência Zero) para consultas nas especialidades médicas da Rede Própria AMEP Saúde. Sem burocracia, sem espera.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3">
                                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-background/70 border border-border/60 shadow-2xs">
                                    <Stethoscope className="size-5 text-emerald-500 shrink-0" />
                                    <span className="text-xs font-semibold text-foreground">Consultas Sem Espera</span>
                                </div>
                                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-background/70 border border-border/60 shadow-2xs">
                                    <Clock className="size-5 text-emerald-500 shrink-0" />
                                    <span className="text-xs font-semibold text-foreground">Liberação Imediata</span>
                                </div>
                                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-background/70 border border-border/60 shadow-2xs">
                                    <ShieldCheck className="size-5 text-emerald-500 shrink-0" />
                                    <span className="text-xs font-semibold text-foreground">Rede Própria AMEP</span>
                                </div>
                            </div>
                        </div>

                        {/* CTA Box with Image Preview (4 Cols) */}
                        <div className="lg:col-span-4 flex flex-col items-stretch justify-center p-6 rounded-2xl bg-background/90 border border-border/70 shadow-xl space-y-4 text-left relative overflow-hidden">
                            <div className="relative w-full h-32 rounded-xl overflow-hidden mb-1 border border-border/40 shadow-inner">
                                <Image src="/image5.png" alt="Família atendida pela Amep Saúde" fill className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                                <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between">
                                    <span className="text-[10px] font-bold text-white uppercase tracking-wider bg-emerald-600/90 px-2 py-0.5 rounded-md">
                                        Atendimento Prontonil
                                    </span>
                                </div>
                            </div>

                            <div className="text-center space-y-1">
                                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Vagas Promocionais</span>
                                <p className="text-xl font-extrabold text-foreground">Aproveite Tabela Atualizada</p>
                            </div>

                            <Button 
                                onClick={handleActionClick}
                                size="lg"
                                className="w-full h-13 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
                            >
                                <span>Garantir Carência Zero</span>
                                <ArrowRight className="size-4" />
                            </Button>

                            <div className="flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground text-center">
                                <CheckCircle2 className="size-3.5 text-emerald-500" />
                                <span>Promoção por tempo limitado na contratação.</span>
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}

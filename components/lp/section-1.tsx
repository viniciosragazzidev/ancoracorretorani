'use client';

import React from 'react';
import Image from 'next/image';
import { Building2, Zap, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import LogoLoop from '@/components/ui/logo-loop';

const partnerLogos = [
    { src: '/amil_logo.webp', alt: 'Amil' },
    { src: '/sulamerica_logo.png', alt: 'SulAmérica' },
    { src: '/PortoSaude_logo.webp', alt: 'Porto Saúde' },
    { src: '/unimed_logo.webp', alt: 'Unimed' },
    { src: '/NotreDame_logo.webp', alt: 'NotreDame Intermédica' },
    { src: '/assim-saude_logo.png', alt: 'Assim Saúde' },
    { src: '/cemeru_logo.png', alt: 'Cemeru' },
    { src: '/LEVESaude__logo.webp', alt: 'Leve Saúde' },
];

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay },
    }),
};

const SectionOne: React.FC = () => {
    return (
        <>
        <section className="w-full bg-background py-16 md:py-24 font-sans overflow-hidden">
            <div className="w-full max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                {/* COLUNA DA ESQUERDA (Foto Humanizada com Duas Microtags) */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0.2}
                    className="relative w-full max-w-[500px] mx-auto md:max-w-none"
                >
                    <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl border border-border/40 group">
                        <Image
                            src="/image1.png"
                            alt="Atendimento médico acolhedor na Baixada Fluminense"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-102"
                            priority
                        />
                        {/* Gradient overlay for better contrast */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/20 pointer-events-none" />

                        {/* Tag Superior (Nacionais Premium) */}
                        <div
                            className="absolute bottom-[68px] left-4 right-4 sm:right-auto sm:left-5 flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl border border-border/30 bg-background/95 backdrop-blur-md shadow-lg transition-transform duration-300 hover:scale-[1.02] select-none"
                        >
                            <span className="p-1 rounded-md bg-primary/10 text-primary shrink-0">
                                <Building2 className="size-3.5 sm:size-4" />
                            </span>
                            <span className="text-[10px] sm:text-xs font-semibold text-foreground leading-tight">
                                Nacionais Premium: Amil, Bradesco, SulAmérica
                            </span>
                        </div>

                        {/* Tag Inferior (Custo-Beneficio Regional) */}
                        <div
                            className="absolute bottom-4 left-4 right-4 sm:right-auto sm:left-5 flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl border border-border/30 bg-background/95 backdrop-blur-md shadow-lg transition-transform duration-300 hover:scale-[1.02] select-none"
                        >
                            <span className="p-1 rounded-md bg-amber-500/10 text-amber-500 shrink-0">
                                <Zap className="size-3.5 sm:size-4" />
                            </span>
                            <span className="text-[10px] sm:text-xs font-semibold text-foreground leading-tight">
                                Custo-Benefício Regional: Unimed, Cemeru, Hapvida
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* COLUNA DA DIREITA (Informações e Simulador Menor) */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0.5}
                    className="flex flex-col justify-center"
                >
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border/60 bg-muted/40 text-[10px] sm:text-xs font-semibold text-muted-foreground mb-4 w-fit select-none">
                        <span>Acompanhamento Inteligente</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-[1.2] mb-5">
                        A Escolha Inteligente para a Sua Saúde.
                    </h2>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 font-light">
                        Trabalhamos com as maiores operadoras do Brasil para garantir a cobertura exata que você precisa, com o melhor custo-benefício.
                    </p>

                    {/* Card menor e animado na parte de baixo */}
                    <div className="w-full bg-gradient-to-tr from-blue-50/50 to-indigo-50/20 dark:from-slate-900/50 dark:to-blue-950/10 rounded-[2rem] p-6 border border-border/40 flex justify-center items-center overflow-hidden relative group">
                        {/* Subtle background glow */}
                        <div className="absolute top-0 right-0 w-[150px] h-[150px] rounded-full bg-primary/5 blur-[40px] pointer-events-none" />

                        <div className="bg-background border border-border/60 rounded-2xl p-5 shadow-[0_12px_24px_rgba(0,0,0,0.03)] w-full max-w-sm relative z-10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                            {/* Element 1: Cabeçalho do Card */}
                            <div className="flex items-center justify-between mb-3.5">
                                <div>
                                    <span className="text-[9px] font-bold text-primary tracking-wider uppercase bg-primary/10 px-2 py-0.5 rounded-md">
                                        Multimarcas
                                    </span>
                                    <h3 className="text-sm sm:text-base font-semibold text-foreground tracking-tight mt-1">
                                        Comparador de Coberturas
                                    </h3>
                                </div>
                            </div>

                            {/* Element 2: Status Visual (Timeline/Progress) */}
                            <div className="bg-muted/40 border border-border/30 rounded-xl p-3 mb-4">
                                <div className="flex justify-between items-center text-[9px] font-bold text-muted-foreground uppercase tracking-wider mb-1.5">
                                    <span className="text-primary font-bold">Regional</span>
                                    <span>Estadual</span>
                                    <span>Nacional</span>
                                </div>
                                {/* Segment Progress Line */}
                                <div className="grid grid-cols-3 gap-1 h-1 w-full bg-muted rounded-full overflow-hidden">
                                    <div className="bg-primary rounded-full animate-pulse" />
                                    <div className="bg-primary rounded-full animate-pulse" />
                                    <div className="bg-muted rounded-full" />
                                </div>
                                <p className="text-[10px] sm:text-xs font-semibold text-foreground mt-2 text-center">
                                    [ Opções Sob Medida para Você ]
                                </p>
                            </div>

                            {/* Element 3: Bloco de Destaque 1 (Rede Credenciada) */}
                            <div className="space-y-1 mb-4">
                                <h4 className="text-[10px] font-bold text-foreground uppercase tracking-wide">
                                    Rede Credenciada Flexível
                                </h4>
                                <p className="text-xs text-muted-foreground leading-relaxed font-light">
                                    Acesso aos melhores hospitais do Brasil ou rede focada na sua região. Você escolhe.
                                </p>
                            </div>

                            {/* Element 4: Bloco de Destaque 2 (Valor Estimado & Badge CNPJ) */}
                            <div className="flex items-center justify-between py-3 border-t border-b border-border/40 my-4">
                                <div>
                                    <span className="text-[10px] font-medium text-muted-foreground block">
                                        Valor Estimado
                                    </span>
                                    <span className="text-base font-bold text-foreground tracking-tight">
                                        Sob Consulta
                                    </span>
                                </div>
                                {/* Badge CNPJ Ativo */}
                                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-500/90 text-[10px] sm:text-xs font-semibold select-none">
                                    <span className="relative flex size-1.5 shrink-0">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500"></span>
                                    </span>
                                    <span>CNPJ Ativo</span>
                                </div>
                            </div>

                            {/* Element 5: Alerta no Rodapé do Card */}
                            <div className="flex items-start gap-2.5 text-[9px] text-amber-600 dark:text-amber-500/90 bg-amber-500/5 border border-amber-500/10 rounded-xl p-2.5">
                                <AlertTriangle className="size-3.5 text-amber-500 shrink-0 mt-0.5" />
                                <p className="leading-normal font-light">
                                    Atenção: Tabela de preços sujeita a alteração por faixa etária.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>

        {/* Logo Loop - Partners */}
        <div className="w-full bg-background py-8 md:py-12 font-sans flex items-center justify-center">
            <div className="w-full max-w-5xl mx-auto px-6 opacity-70">
                <p className="text-xs text-muted-foreground/60 mb-6 uppercase tracking-widest font-semibold text-center">Trabalhamos com as melhores do mercado</p>
                <LogoLoop
                    logos={partnerLogos}
                    speed={40}
                    gap={64}
                    logoHeight={40}
                    fadeOut={true}
                    fadeOutColor="#ffffff"
                    pauseOnHover={true}
                />
            </div>
        </div>
        </>
    );
};

export default SectionOne;

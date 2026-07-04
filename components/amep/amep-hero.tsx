'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck, User, Phone, Building2, Send, Sparkles, Zap, CheckCircle2, Hospital } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AmepHero() {
    const [nome, setNome] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [tipo, setTipo] = useState('pme');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value.replace(/\D/g, '');
        let formatted = '';
        if (input.length > 0) {
            formatted = `(${input.slice(0, 2)}`;
            if (input.length > 2) {
                formatted += `) ${input.slice(2, 7)}`;
            }
            if (input.length > 7) {
                formatted += `-${input.slice(7, 11)}`;
            }
        }
        setWhatsapp(formatted);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const cleaned = whatsapp.replace(/\D/g, '');
        if (cleaned.length >= 10 && nome) {
            setIsSubmitting(true);
            setTimeout(() => {
                setIsSubmitting(false);
                const modalidadeText = tipo === 'pme' ? 'AMEP Smart PME / MEI (a partir de R$ 82,94)' : 'AMEP Ideal Adesão (a partir de R$ 138,74)';
                const msg = `Olá! Me chamo ${nome} e gostaria de garantir a tabela oficial do plano AMEP SAÚDE (${modalidadeText}). Meu WhatsApp é ${whatsapp}.`;
                window.open(`https://wa.me/5521974450263?text=${encodeURIComponent(msg)}`, '_blank');
            }, 600);
        }
    };

    return (
        <section className="relative w-full min-h-[100dvh] pt-24 pb-16 md:pt-32 md:pb-24 flex items-center justify-center bg-background overflow-hidden border-b border-border/40 font-sans select-none">
            {/* Ambient Background Gradient Wash */}
            <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-emerald-500/10 via-emerald-500/5 to-transparent pointer-events-none -z-10" />
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />

            <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    
                    {/* Left Column: Value Proposition & Brand Focus (7 Cols) */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
                    >
                        {/* Co-Branding Header Badge */}
                        <div className="flex flex-wrap items-center gap-3 p-2 pr-4 rounded-full bg-muted/60 border border-border/60 backdrop-blur-md shadow-xs">
                            <div className="flex items-center gap-2 bg-background px-3 py-1 rounded-full border border-border/40 shadow-2xs">
                                <Image src="/logo.webp" alt="Âncora Corretora" width={75} height={22} className="h-4 sm:h-5 w-auto object-contain dark:brightness-0 dark:invert" priority />
                                <span className="text-xs font-bold text-muted-foreground">×</span>
                                <Image src="/amep_saude_logo.png" alt="Amep Saúde" width={85} height={26} className="h-5 sm:h-6 w-auto object-contain" priority />
                            </div>
                            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                                <span className="relative flex size-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex size-2 rounded-full bg-emerald-500"></span>
                                </span>
                                <span>Tabela Oficial AMEP Atualizada</span>
                            </div>
                        </div>

                        {/* Headline */}
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] max-w-3xl">
                            O Plano de Saúde <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-400">AMEP SAÚDE</span> Sem Coparticipação na Baixada.
                        </h1>

                        {/* Subheadline */}
                        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl font-normal">
                            Consultas, exames, urgência e emergência com atendimento garantido no <strong className="text-foreground font-semibold">Hospital Prontonil em Nova Iguaçu</strong>. Contrate com carência zero para consultas.
                        </p>

                        {/* Price Anchor Cards Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-2">
                            {/* Card 1: Individual / Adesão */}
                            <motion.div 
                                whileHover={{ y: -2 }}
                                className="p-5 rounded-2xl bg-muted/40 border border-border/60 hover:border-emerald-500/40 transition-all shadow-xs flex flex-col justify-between"
                            >
                                <div>
                                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">AMEP Ideal Adesão (CPF)</span>
                                    <div className="mt-1 flex items-baseline gap-1">
                                        <span className="text-xs font-medium text-muted-foreground">a partir de</span>
                                        <span className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">R$ 138<span className="text-lg font-bold">,74</span></span>
                                        <span className="text-xs text-muted-foreground">/mês</span>
                                    </div>
                                </div>
                                <div className="mt-3 pt-3 border-t border-border/40 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                                    <CheckCircle2 className="size-3.5 shrink-0" />
                                    <span>Vendas a partir de 12 anos</span>
                                </div>
                            </motion.div>

                            {/* Card 2: Empresarial / MEI */}
                            <motion.div 
                                whileHover={{ y: -2 }}
                                className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 hover:border-emerald-500/60 transition-all shadow-xs flex flex-col justify-between relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] font-extrabold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                                    Desconto -35%
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-300 uppercase tracking-wider">AMEP Smart PME / MEI (2+ Vidas)</span>
                                    <div className="mt-1 flex items-baseline gap-1">
                                        <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">a partir de</span>
                                        <span className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-300 tracking-tight">R$ 82<span className="text-lg font-bold">,94</span></span>
                                        <span className="text-xs text-emerald-600 dark:text-emerald-400">/mês</span>
                                    </div>
                                </div>
                                <div className="mt-3 pt-3 border-t border-emerald-500/20 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                                    <Zap className="size-3.5 shrink-0 fill-emerald-600" />
                                    <span>Inclua qualquer pessoa sem vínculo</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Customer Visual Feature Strip */}
                        <div className="w-full p-4 rounded-2xl bg-muted/30 border border-border/50 flex flex-col sm:flex-row items-center gap-4">
                            <div className="flex -space-x-3 shrink-0">
                                <div className="relative size-11 rounded-full border-2 border-background overflow-hidden shadow-xs">
                                    <Image src="/image1.png" alt="Cliente AMEP Saúde" fill className="object-cover object-center" />
                                </div>
                                <div className="relative size-11 rounded-full border-2 border-background overflow-hidden shadow-xs">
                                    <Image src="/image3.png" alt="Equipe AMEP PME" fill className="object-cover object-center" />
                                </div>
                                <div className="relative size-11 rounded-full border-2 border-background overflow-hidden shadow-xs">
                                    <Image src="/image4.png" alt="Atendimento AMEP" fill className="object-cover object-center" />
                                </div>
                            </div>
                            <div className="text-left">
                                <p className="text-xs font-bold text-foreground">
                                    Mais de 15.000 vidas protegidas pelo AMEP SAÚDE
                                </p>
                                <p className="text-[11px] text-muted-foreground mt-0.5">
                                    Suporte direto do Hospital Prontonil e consultoria Âncora no Centro de Nova Iguaçu.
                                </p>
                            </div>
                        </div>

                    </motion.div>

                    {/* Right Column: Lead Form (5 Cols) */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-5 w-full max-w-md mx-auto"
                    >
                        <div className="relative rounded-3xl bg-background/95 dark:bg-background/95 backdrop-blur-2xl border border-border/80 p-6 sm:p-8 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] overflow-hidden">
                            
                            {/* Top Decorative Border Accent */}
                            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-500" />

                            <div className="flex items-center justify-between gap-2 mb-4">
                                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                                    <Sparkles className="size-4" />
                                    <span>Cotação AMEP SAÚDE</span>
                                </div>
                                <Image src="/amep_saude_logo.png" alt="Amep Saúde Logo" width={80} height={26} className="h-6.5 w-auto object-contain" />
                            </div>

                            <div className="flex flex-col items-start text-left space-y-1 mb-6">
                                <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                                    Receba a Tabela Oficial AMEP
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                    Preencha em 15 segundos para receber a cotação no seu WhatsApp.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4 text-left">
                                {/* Nome */}
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Seu Nome Completo</label>
                                    <div className="relative">
                                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                                        <input
                                            type="text"
                                            required
                                            value={nome}
                                            onChange={(e) => setNome(e.target.value)}
                                            placeholder="Ex: Carlos Oliveira"
                                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-border/80 bg-background text-foreground placeholder:text-muted-foreground text-sm font-medium focus:border-emerald-500 outline-none transition-all shadow-2xs"
                                        />
                                    </div>
                                </div>

                                {/* WhatsApp */}
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Seu WhatsApp com DDD</label>
                                    <div className="relative">
                                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                                        <input
                                            type="tel"
                                            required
                                            value={whatsapp}
                                            onChange={handlePhoneChange}
                                            placeholder="(21) 99999-9999"
                                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-border/80 bg-background text-foreground placeholder:text-muted-foreground text-sm font-medium focus:border-emerald-500 outline-none transition-all shadow-2xs"
                                        />
                                    </div>
                                </div>

                                {/* Tipo de Plano */}
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Modalidade AMEP Desejada</label>
                                    <div className="relative">
                                        <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                                        <select
                                            value={tipo}
                                            onChange={(e) => setTipo(e.target.value)}
                                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-border/80 bg-background text-foreground text-sm font-medium focus:border-emerald-500 outline-none transition-all appearance-none cursor-pointer shadow-2xs"
                                        >
                                            <option value="pme" className="bg-background text-foreground dark:bg-slate-900 dark:text-slate-100">
                                                AMEP Smart PME / MEI (a partir de R$ 82,94)
                                            </option>
                                            <option value="individual" className="bg-background text-foreground dark:bg-slate-900 dark:text-slate-100">
                                                AMEP Ideal Adesão (a partir de R$ 138,74)
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                {/* Submit CTA */}
                                <Button
                                    type="submit"
                                    disabled={!nome || whatsapp.length < 14 || isSubmitting}
                                    className="w-full h-12 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-600/20 transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 mt-4"
                                >
                                    {isSubmitting ? (
                                        <span>Gerando Tabela AMEP...</span>
                                    ) : (
                                        <>
                                            <span>Garantir Minha Tabela com Desconto</span>
                                            <Send className="size-4" />
                                        </>
                                    )}
                                </Button>
                            </form>

                            <div className="mt-4 pt-4 border-t border-border/40 flex items-center justify-center gap-2 text-[11px] text-muted-foreground">
                                <ShieldCheck className="size-3.5 text-emerald-500 shrink-0" />
                                <span>Atendimento humano direto da sede em Nova Iguaçu.</span>
                            </div>

                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

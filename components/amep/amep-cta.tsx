'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MessageSquare, ShieldCheck, CheckCircle2, PhoneCall } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AmepCta() {
    const handleCtaClick = () => {
        window.open('https://wa.me/5521974450263?text=Olá!%20Gostaria%20de%20falar%20com%20um%20consultor%20para%20garantir%20as%20condições%20especiais%20do%20plano%20Amep%20Saúde.', '_blank');
    };

    return (
        <section className="w-full py-16 sm:py-24 bg-slate-950 text-white font-sans select-none relative overflow-hidden">
            {/* Subtle Accent Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

            <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-12 md:p-14 shadow-2xl text-center flex flex-col items-center space-y-6 relative overflow-hidden"
                >
                    {/* Top Green Accent Bar */}
                    <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500" />

                    {/* Co-Branding Micro Badge */}
                    <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-semibold text-emerald-400">
                        <Image src="/logo.webp" alt="Âncora Corretora" width={70} height={20} className="h-4 w-auto object-contain brightness-0 invert" />
                        <span className="text-slate-500 font-bold">×</span>
                        <Image src="/amep_saude_logo.png" alt="Amep Saúde" width={75} height={22} className="h-5 w-auto object-contain" />
                    </div>

                    {/* Headline */}
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl leading-tight">
                        Garanta as condições especiais de carência zero antes que a campanha termine.
                    </h2>

                    {/* Subheadline */}
                    <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-normal leading-relaxed">
                        Clique no botão abaixo para falar direto com um consultor da Âncora no WhatsApp e receber sua proposta digital.
                    </p>

                    {/* Action CTA Button */}
                    <div className="pt-2 w-full max-w-sm">
                        <Button
                            onClick={handleCtaClick}
                            size="lg"
                            className="w-full h-14 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base shadow-xl shadow-emerald-600/30 transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-3"
                        >
                            <MessageSquare className="size-5 fill-white/20" />
                            <span>Falar com Consultor no WhatsApp</span>
                        </Button>
                    </div>

                    {/* Guarantee Footer */}
                    <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="size-4 text-emerald-400" />
                            <span>Atendimento imediato e sem compromisso</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <PhoneCall className="size-4 text-emerald-400" />
                            <span>(21) 97445-0263</span>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}

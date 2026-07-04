'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, MapPin, Stethoscope, HeartPulse, ShieldAlert, CheckCircle2 } from 'lucide-react';

const hospitals = [
    {
        name: "Hospital Prontonil",
        city: "Nova Iguaçu - Centro",
        region: "Baixada Fluminense (Destaque)",
        description: "Referência em atendimento Adulto e Pediátrico no coração da Baixada Fluminense. Estrutura completa de urgência e emergência.",
        badges: ["Adulto & Pediátrico", "Urgência 24h", "Baixada Fluminense"],
        featured: true
    },
    {
        name: "Hospital Santa Branca",
        city: "Duque de Caxias",
        region: "Baixada Fluminense",
        description: "Suporte completo e atendimento Adulto ágil na região, com corpo médico especializado em urgências.",
        badges: ["Atendimento Adulto", "Urgência & Emergência"],
        featured: false
    },
    {
        name: "Hospital São Matheus",
        city: "Bangu",
        region: "Zona Oeste RJ",
        description: "Estrutura moderna para suporte Adulto e Pediátrico com pronto-socorro estruturado de fácil acesso.",
        badges: ["Adulto & Pediátrico", "Pronto-Socorro 24h"],
        featured: false
    },
    {
        name: "Hospital Énio Serra & São Victor",
        city: "Laranjeiras & Tijuca",
        region: "Zona Sul & Zona Norte RJ",
        description: "Cobertura de urgência estrategicamente localizada para garantir socorro rápido na Zona Sul e Zona Norte da capital.",
        badges: ["Zona Sul & Zona Norte", "Urgência Adulto"],
        featured: false
    }
];

export default function AmepHospitals() {
    return (
        <section className="w-full py-16 sm:py-24 bg-background border-b border-border/40 font-sans select-none">
            <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6">
                
                {/* Section Header */}
                <div className="flex flex-col items-center text-center space-y-3 mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                        <Building2 className="size-3.5" />
                        <span>Rede Credenciada & Própria</span>
                    </div>

                    <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight max-w-3xl">
                        Principais Hospitais de Urgência e Emergência Próximos de Você
                    </h2>

                    <p className="text-sm sm:text-base text-muted-foreground max-w-2xl">
                        Cobertura estratégica na Baixada Fluminense e nas principais zonas do Rio de Janeiro para atendimento médico quando você mais precisa.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {hospitals.map((hospital, index) => (
                        <motion.div
                            key={hospital.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`rounded-2xl p-6 flex flex-col justify-between text-left transition-all duration-300 ${
                                hospital.featured
                                    ? 'bg-gradient-to-b from-emerald-500/10 via-background to-background border-2 border-emerald-500/40 shadow-lg shadow-emerald-500/5 relative'
                                    : 'bg-muted/30 border border-border/60 hover:border-border hover:bg-muted/50'
                            }`}
                        >
                            {hospital.featured && (
                                <div className="absolute -top-3 left-6 bg-emerald-600 text-white text-[10px] font-extrabold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                                    Hospital Principal
                                </div>
                            )}

                            <div className="space-y-4">
                                <div className="flex items-start justify-between gap-2">
                                    <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <HeartPulse className="size-5" />
                                    </div>
                                    <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md">
                                        {hospital.region}
                                    </span>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-foreground leading-snug">
                                        {hospital.name}
                                    </h3>
                                    <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground font-medium">
                                        <MapPin className="size-3.5 text-primary shrink-0" />
                                        <span>{hospital.city}</span>
                                    </div>
                                </div>

                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    {hospital.description}
                                </p>
                            </div>

                            <div className="mt-6 pt-4 border-t border-border/40 flex flex-wrap gap-1.5">
                                {hospital.badges.map((b) => (
                                    <span key={b} className="text-[10px] font-medium text-foreground bg-muted px-2 py-1 rounded-md border border-border/40">
                                        {b}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}

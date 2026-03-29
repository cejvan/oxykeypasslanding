'use client';

import { useState } from 'react';
import type React from 'react';
import { useTranslations } from 'next-intl';
import { getLocalizedPath } from '@/utils/routes';
import { PANELS } from '@/oxyConfig';
import {
    Building2, Heart, Dumbbell, Users, GraduationCap, Factory,
    CheckCircle, ArrowRight, Shield, Zap, BarChart3, Smartphone, ChevronRight,
    ExternalLink, Sparkles
} from 'lucide-react';

interface SolutionsPageProps {
    locale: string;
}

type LocaleFn = (locale: string) => string;

const SECTORS: { id: string; icon: React.ElementType; tag: LocaleFn }[] = [
    { id: 'banking',       icon: Building2,     tag: l => l === 'tr' ? 'FİNANS'    : 'FINANCE' },
    { id: 'healthcare',    icon: Heart,          tag: l => l === 'tr' ? 'SAĞLIK'     : 'HEALTH' },
    { id: 'fitness',       icon: Dumbbell,       tag: l => l === 'tr' ? 'SPOR'       : 'SPORT' },
    { id: 'corporate',     icon: Users,          tag: l => l === 'tr' ? 'KURUMSAL'   : 'CORPORATE' },
    { id: 'education',     icon: GraduationCap,  tag: l => l === 'tr' ? 'EĞİTİM'     : 'EDUCATION' },
    { id: 'manufacturing', icon: Factory,        tag: l => l === 'tr' ? 'ENDÜSTRİ'   : 'INDUSTRY' },
];

const WHY_ITEMS = [
    { icon: Shield,      valueKey: 'security',  value: '256-bit' },
    { icon: Zap,         valueKey: 'speed',     value: '<2s' },
    { icon: BarChart3,   valueKey: 'reporting', value: '99.9%' },
    { icon: Smartphone,  valueKey: 'mobile',    value: 'iOS/Android' },
];

const SolutionsPage = ({ locale }: SolutionsPageProps) => {
    const t = useTranslations('solutions');
    const [activeSector, setActiveSector] = useState<string | null>(null);

    return (
        <div style={{ backgroundColor: '#07090F' }}>

            {/* ═══════════════════════════════════════════
                HERO
            ═══════════════════════════════════════════ */}
            <section className="relative py-24 overflow-hidden blueprint-grid">
                <div className="scan-line" />

                {/* Gold bloom */}
                <div className="absolute inset-0 pointer-events-none" style={{
                    background: 'radial-gradient(ellipse 60% 70% at 50% 0%, rgba(200,145,58,0.12) 0%, transparent 70%)'
                }} />

                {/* Rings */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    {[0, 1].map(i => (
                        <div key={i} className="absolute rounded-full border border-[#C8913A]/15"
                            style={{
                                width: `${400 + i * 200}px`, height: `${400 + i * 200}px`,
                                top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                                animation: `ring-expand ${6 + i * 2}s ease-out infinite`,
                                animationDelay: `${i * 2}s`,
                            }}
                        />
                    ))}
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="section-label mb-5 animate-fade-in">
                        <span className="status-dot mr-2" />
                        {locale === 'tr' ? 'Sektörel Çözümler' : 'Industry Solutions'}
                    </div>
                    <h1 className="font-heading font-extrabold text-[clamp(2.2rem,6vw,4rem)] text-[#F0EDE8] leading-tight mb-5 animate-fade-up">
                        {locale === 'tr' ? 'Her Sektöre Özel,' : 'Tailored for Every'}
                        <br />
                        <span className="text-shimmer">
                            {locale === 'tr' ? 'Tek Platform.' : 'Single Platform.'}
                        </span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-[#6B7A90] text-lg leading-relaxed mb-10 animate-fade-up font-body" style={{ animationDelay: '0.1s' }}>
                        {t('subtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
                        <a href={getLocalizedPath('contact', locale)}
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-semibold font-body rounded-xl glow-gold-sm transition-all duration-200"
                            style={{ backgroundColor: '#C8913A', color: '#07090F' }}
                            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#A8751F')}
                            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#C8913A')}
                        >
                            {t('cta.requestDemo')}
                            <ArrowRight className="w-4 h-4" />
                        </a>
                        <a href={getLocalizedPath('product', locale)}
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-semibold font-body rounded-xl border border-[rgba(200,145,58,0.3)] text-[#F0EDE8] hover:bg-[rgba(200,145,58,0.06)] transition-all duration-200"
                        >
                            {locale === 'tr' ? 'Ürünü İncele' : 'Explore Product'}
                            <ChevronRight className="w-4 h-4 text-[#C8913A]" />
                        </a>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{ background: 'linear-gradient(to top, #07090F, transparent)' }} />
            </section>

            {/* ═══════════════════════════════════════════
                HAZIR ÇÖZÜM — SİTE YÖNETİMİ
            ═══════════════════════════════════════════ */}
            <section className="py-16 relative" style={{ backgroundColor: '#0D1117' }}>
                <div className="absolute top-0 left-0 right-0 h-px divider-gold" />
                <div className="absolute bottom-0 left-0 right-0 h-px divider-gold" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="section-label mb-6 flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-[#C8913A]" />
                        {locale === 'tr' ? '// HAZIR ÇÖZÜM' : '// READY-MADE SOLUTION'}
                    </div>

                    {PANELS.map(panel => (
                        <div key={panel.key}
                            className="relative rounded-2xl p-8 overflow-hidden"
                            style={{
                                backgroundColor: '#07090F',
                                border: '1px solid rgba(200,145,58,0.3)',
                                boxShadow: '0 0 60px rgba(200,145,58,0.07)',
                            }}
                        >
                            {/* Background bloom */}
                            <div className="absolute inset-0 pointer-events-none" style={{
                                background: 'radial-gradient(ellipse 50% 80% at 100% 50%, rgba(200,145,58,0.07), transparent)'
                            }} />
                            <div className="scan-line" style={{ opacity: 0.3 }} />

                            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-8">
                                {/* Left */}
                                <div className="flex-1">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 text-xs font-mono"
                                        style={{ backgroundColor: 'rgba(200,145,58,0.12)', border: '1px solid rgba(200,145,58,0.25)', color: '#C8913A' }}>
                                        <span className="status-dot" style={{ width: 6, height: 6 }} />
                                        {locale === 'tr' ? 'Aktif & Kullanıma Hazır' : 'Active & Ready to Use'}
                                    </div>

                                    <h3 className="text-[#F0EDE8] font-heading font-bold text-2xl mb-3 leading-snug">
                                        {locale === 'tr' ? panel.labelTr : panel.labelEn}
                                    </h3>
                                    <p className="text-[#6B7A90] text-base font-body leading-relaxed mb-6 max-w-xl">
                                        {locale === 'tr' ? panel.descTr : panel.descEn}
                                    </p>

                                    {/* Feature chips */}
                                    <div className="flex flex-wrap gap-2">
                                        {(locale === 'tr'
                                            ? ['Site & Bina Yönetimi', 'Kira & Fatura Takibi', 'Servis Talepleri', 'Erişim Kontrolü', 'Randevu Sistemi']
                                            : ['Site & Building Mgmt', 'Rent & Invoice Tracking', 'Service Requests', 'Access Control', 'Booking System']
                                        ).map(chip => (
                                            <span key={chip}
                                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-body"
                                                style={{ backgroundColor: 'rgba(200,145,58,0.07)', border: '1px solid rgba(200,145,58,0.15)', color: '#A8913A' }}
                                            >
                                                <CheckCircle className="w-3 h-3 text-[#C8913A]" />
                                                {chip}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Right — CTA */}
                                <div className="flex flex-col gap-3 lg:items-end shrink-0">
                                    <a href={panel.href}
                                        target="_blank" rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-semibold font-body rounded-xl glow-gold-sm transition-all duration-200"
                                        style={{ backgroundColor: '#C8913A', color: '#07090F' }}
                                        onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#A8751F')}
                                        onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#C8913A')}
                                    >
                                        {locale === 'tr' ? 'Panele Git' : 'Go to Panel'}
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                    <a href={getLocalizedPath('contact', locale)}
                                        className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-semibold font-body rounded-xl text-[#F0EDE8] hover:bg-[rgba(200,145,58,0.06)] transition-all duration-200"
                                        style={{ border: '1px solid rgba(200,145,58,0.25)' }}
                                    >
                                        {locale === 'tr' ? 'Demo Talep Et' : 'Request Demo'}
                                        <ChevronRight className="w-4 h-4 text-[#C8913A]" />
                                    </a>
                                    <span className="text-[#3A4555] text-xs font-mono">
                                        {panel.href.replace('https://', '')}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                SECTORS GRID
            ═══════════════════════════════════════════ */}
            <section className="py-24 relative" style={{ backgroundColor: '#07090F' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="mb-14">
                        <div className="section-label mb-4">
                            {locale === 'tr' ? '// SEKTÖRLER' : '// SECTORS'}
                        </div>
                        <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold font-heading text-[#F0EDE8] max-w-xl leading-tight">
                            {t('sectorsTitle')}
                        </h2>
                        <p className="text-[#6B7A90] text-base font-body mt-3 max-w-2xl">
                            {t('sectorsSubtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {SECTORS.map((sector, index) => {
                            const Icon = sector.icon;
                            const isActive = activeSector === sector.id;
                            return (
                                <div
                                    key={sector.id}
                                    className="group relative rounded-2xl p-6 border cursor-pointer transition-all duration-300"
                                    style={{
                                        backgroundColor: isActive ? '#111820' : '#0D1117',
                                        borderColor: isActive ? 'rgba(200,145,58,0.45)' : 'rgba(200,145,58,0.1)',
                                        boxShadow: isActive ? '0 0 40px rgba(200,145,58,0.12)' : 'none',
                                    }}
                                    onMouseEnter={() => setActiveSector(sector.id)}
                                    onMouseLeave={() => setActiveSector(null)}
                                >
                                    {/* Number badge */}
                                    <span className="absolute top-4 right-4 font-mono text-[0.6rem] font-bold px-1.5 py-0.5 rounded"
                                        style={{ backgroundColor: 'rgba(200,145,58,0.12)', color: '#C8913A' }}>
                                        {String(index + 1).padStart(2, '0')}
                                    </span>

                                    {/* Tag + Icon */}
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                                            style={{
                                                backgroundColor: isActive ? 'rgba(200,145,58,0.2)' : 'rgba(200,145,58,0.1)',
                                                border: '1px solid rgba(200,145,58,0.2)'
                                            }}>
                                            <Icon className="w-5 h-5 text-[#C8913A]" />
                                        </div>
                                        <span className="section-label text-[0.55rem]">{sector.tag(locale as string)}</span>
                                    </div>

                                    {/* Title & desc */}
                                    <h3 className="text-[#F0EDE8] font-semibold font-heading text-base mb-2 leading-snug">
                                        {t(`sectors.${sector.id}.title`)}
                                    </h3>
                                    <p className="text-[#6B7A90] text-sm font-body leading-relaxed mb-5">
                                        {t(`sectors.${sector.id}.description`)}
                                    </p>

                                    {/* Features */}
                                    <ul className="space-y-1.5">
                                        {[0, 1, 2].map(i => (
                                            <li key={i} className="flex items-start gap-2 text-xs font-body text-[#5A7090]">
                                                <CheckCircle className="w-3.5 h-3.5 text-[#C8913A] flex-shrink-0 mt-0.5" />
                                                {t(`sectors.${sector.id}.features.${i}`)}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Bottom scan accent */}
                                    <div className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        style={{ background: 'linear-gradient(90deg, transparent, rgba(200,145,58,0.5), transparent)' }}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                WHY OXYKEYPASS
            ═══════════════════════════════════════════ */}
            <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#0D1117' }}>
                <div className="absolute top-0 left-0 right-0 h-px divider-gold" />
                <div className="absolute bottom-0 left-0 right-0 h-px divider-gold" />
                <div className="absolute inset-0 pointer-events-none blueprint-grid opacity-30" />
                <div className="absolute inset-0 pointer-events-none" style={{
                    background: 'radial-gradient(ellipse 50% 60% at 50% 50%, rgba(200,145,58,0.05), transparent)'
                }} />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <div className="section-label mb-4">
                            {locale === 'tr' ? '// NEDEN OXYKEYPASS' : '// WHY OXYKEYPASS'}
                        </div>
                        <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold font-heading text-[#F0EDE8] leading-tight">
                            {t('whyOxyKeyPass.title')}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {WHY_ITEMS.map(({ icon: Icon, valueKey, value }) => (
                            <div key={valueKey}
                                className="group rounded-2xl p-6 border transition-all duration-300 hover:border-[rgba(200,145,58,0.35)] hover:glow-gold"
                                style={{ backgroundColor: '#07090F', borderColor: 'rgba(200,145,58,0.1)' }}>
                                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[rgba(200,145,58,0.2)]"
                                    style={{ backgroundColor: 'rgba(200,145,58,0.1)' }}>
                                    <Icon className="w-5 h-5 text-[#C8913A]" />
                                </div>
                                <div className="font-mono font-bold text-2xl text-[#C8913A] mb-2">{value}</div>
                                <h3 className="text-[#F0EDE8] font-semibold font-heading text-sm mb-1.5">
                                    {t(`whyOxyKeyPass.${valueKey}.title`)}
                                </h3>
                                <p className="text-[#6B7A90] text-xs font-body leading-relaxed">
                                    {t(`whyOxyKeyPass.${valueKey}.description`)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                CTA BANNER
            ═══════════════════════════════════════════ */}
            <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#07090F' }}>
                <div className="absolute inset-0 pointer-events-none" style={{
                    background: 'radial-gradient(ellipse 60% 70% at 50% 100%, rgba(200,145,58,0.1), transparent)'
                }} />
                <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="section-label mb-6">
                        <span className="status-dot mr-2" />
                        {locale === 'tr' ? 'Hemen Başlayın' : 'Get Started Now'}
                    </div>
                    <h2 className="text-[clamp(2rem,5vw,3.2rem)] font-extrabold font-heading text-[#F0EDE8] mb-5 leading-tight text-glow-gold">
                        {t('cta.title')}
                    </h2>
                    <p className="text-[#6B7A90] text-lg font-body leading-relaxed mb-10 max-w-2xl mx-auto">
                        {t('cta.subtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href={getLocalizedPath('contact', locale)}
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold font-body rounded-xl glow-gold-sm transition-all duration-200"
                            style={{ backgroundColor: '#C8913A', color: '#07090F' }}
                            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#A8751F')}
                            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#C8913A')}
                        >
                            {locale === 'tr' ? 'Teklif Al' : 'Get a Quote'}
                            <ArrowRight className="w-4 h-4" />
                        </a>
                        <a href={getLocalizedPath('product', locale)}
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold font-body rounded-xl text-[#F0EDE8] hover:bg-[rgba(200,145,58,0.07)] transition-all duration-200"
                            style={{ border: '1px solid rgba(200,145,58,0.25)' }}
                        >
                            {t('cta.productDetails')}
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SolutionsPage;

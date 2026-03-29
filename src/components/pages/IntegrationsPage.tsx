'use client';

import { useTranslations } from 'next-intl';
import { getLocalizedPath } from '@/utils/routes';
import {
    Lock, Shield, Database, Cpu,
    Plug, Server, Zap,
    ArrowRight, CheckCircle, ChevronRight,
    Radio, Wifi, GitMerge
} from 'lucide-react';

interface IntegrationsPageProps {
    locale: string;
}

const DEVICES = [
    {
        key: 'turnstiles',
        icon: GitMerge,
        tag: 'TURNSTILE',
        protocol: 'RS485 / GPIO',
    },
    {
        key: 'doorLocks',
        icon: Lock,
        tag: 'DOOR LOCK',
        protocol: 'Wiegand / GPIO',
    },
    {
        key: 'lockers',
        icon: Database,
        tag: 'LOCKER',
        protocol: 'GPIO / I2C',
    },
    {
        key: 'raspberryPi',
        icon: Cpu,
        tag: 'CONTROLLER',
        protocol: 'WebSocket / HTTP',
    },
];

const STEPS = [
    { icon: Plug,   num: '01', key: 'step1' },
    { icon: Server, num: '02', key: 'step2' },
    { icon: Zap,    num: '03', key: 'step3' },
];

const ARCH_NODES = [
    { icon: Radio,   labelTr: 'RFID / QR',      labelEn: 'RFID / QR' },
    { icon: Cpu,     labelTr: 'Raspberry Pi',    labelEn: 'Raspberry Pi' },
    { icon: Shield,  labelTr: 'Merkezi API',     labelEn: 'Central API' },
    { icon: Wifi,    labelTr: 'Mobil & Panel',   labelEn: 'Mobile & Panel' },
];

const IntegrationsPage = ({ locale }: IntegrationsPageProps) => {
    const t = useTranslations('integrations');

    return (
        <div style={{ backgroundColor: '#07090F' }}>

            {/* ═══════════════════════════════════════════
                HERO
            ═══════════════════════════════════════════ */}
            <section className="relative py-24 overflow-hidden blueprint-grid">
                <div className="scan-line" />
                <div className="absolute inset-0 pointer-events-none" style={{
                    background: 'radial-gradient(ellipse 60% 70% at 50% 0%, rgba(200,145,58,0.12) 0%, transparent 70%)'
                }} />
                {[0, 1].map(i => (
                    <div key={i} className="absolute left-1/2 top-1/2 rounded-full border border-[#C8913A]/15 pointer-events-none"
                        style={{
                            width: `${400 + i * 200}px`, height: `${400 + i * 200}px`,
                            transform: 'translate(-50%, -50%)',
                            animation: `ring-expand ${6 + i * 2}s ease-out infinite`,
                            animationDelay: `${i * 2}s`,
                        }}
                    />
                ))}

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="section-label mb-5 animate-fade-in">
                        <span className="status-dot mr-2" />
                        {locale === 'tr' ? 'Donanım Entegrasyonu' : 'Hardware Integration'}
                    </div>
                    <h1 className="font-heading font-extrabold text-[clamp(2.2rem,6vw,4rem)] text-[#F0EDE8] leading-tight mb-5 animate-fade-up">
                        {locale === 'tr' ? 'Her Cihazla,' : 'Works With'}
                        <br />
                        <span className="text-shimmer">
                            {locale === 'tr' ? 'Tek Sistem.' : 'Any Device.'}
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
                            {locale === 'tr' ? 'Teklif Al' : 'Get a Quote'}
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
                DEVICE CARDS
            ═══════════════════════════════════════════ */}
            <section className="py-24" style={{ backgroundColor: '#07090F' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-14">
                        <div className="section-label mb-4">
                            {locale === 'tr' ? '// DESTEKLENEN CİHAZLAR' : '// SUPPORTED DEVICES'}
                        </div>
                        <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold font-heading text-[#F0EDE8] leading-tight">
                            {t('overview.title')}
                        </h2>
                        <p className="text-[#6B7A90] text-base font-body mt-3 max-w-2xl">
                            {t('overview.subtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {DEVICES.map((device, index) => {
                            const Icon = device.icon;
                            return (
                                <div key={device.key}
                                    className="group relative rounded-2xl p-7 border transition-all duration-300 hover:border-[rgba(200,145,58,0.35)] hover:glow-gold"
                                    style={{ backgroundColor: '#0D1117', borderColor: 'rgba(200,145,58,0.1)' }}
                                >
                                    {/* Top row */}
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-[rgba(200,145,58,0.2)]"
                                                style={{ backgroundColor: 'rgba(200,145,58,0.1)', border: '1px solid rgba(200,145,58,0.2)' }}>
                                                <Icon className="w-6 h-6 text-[#C8913A]" />
                                            </div>
                                            <div>
                                                <span className="section-label text-[0.55rem] block mb-0.5">{device.tag}</span>
                                                <span className="font-mono text-[0.6rem] text-[#3A4555]">{device.protocol}</span>
                                            </div>
                                        </div>
                                        <span className="font-mono text-[0.6rem] font-bold px-1.5 py-0.5 rounded"
                                            style={{ backgroundColor: 'rgba(200,145,58,0.1)', color: '#C8913A' }}>
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                    </div>

                                    {/* Title & desc */}
                                    <h3 className="text-[#F0EDE8] font-semibold font-heading text-lg mb-2 leading-snug">
                                        {t(`${device.key}.title`)}
                                    </h3>
                                    <p className="text-[#6B7A90] text-sm font-body leading-relaxed mb-5">
                                        {t(`${device.key}.description`)}
                                    </p>

                                    {/* Feature tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {[0, 1, 2].map(i => (
                                            <span key={i}
                                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-body"
                                                style={{ backgroundColor: 'rgba(200,145,58,0.07)', border: '1px solid rgba(200,145,58,0.15)', color: '#A8913A' }}
                                            >
                                                <CheckCircle className="w-3 h-3 text-[#C8913A]" />
                                                {t(`${device.key}.features.${i}`)}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Scan accent */}
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
                ARCH FLOW
            ═══════════════════════════════════════════ */}
            <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#0D1117' }}>
                <div className="absolute top-0 left-0 right-0 h-px divider-gold" />
                <div className="absolute bottom-0 left-0 right-0 h-px divider-gold" />
                <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />

                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="section-label mb-4">
                            {locale === 'tr' ? '// MİMARİ AKIŞ' : '// ARCHITECTURE FLOW'}
                        </div>
                        <h2 className="text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold font-heading text-[#F0EDE8] leading-tight">
                            {locale === 'tr' ? 'Uçtan Uca Bağlantı' : 'End-to-End Connection'}
                        </h2>
                    </div>

                    {/* Flow */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-0">
                        {ARCH_NODES.map((node, i) => {
                            const Icon = node.icon;
                            return (
                                <div key={i} className="flex flex-col md:flex-row items-center">
                                    {/* Node */}
                                    <div className="flex flex-col items-center">
                                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-3 relative"
                                            style={{
                                                backgroundColor: '#07090F',
                                                border: '1px solid rgba(200,145,58,0.3)',
                                                boxShadow: '0 0 24px rgba(200,145,58,0.08)',
                                            }}>
                                            <Icon className="w-7 h-7 text-[#C8913A]" />
                                            {/* pulse dot */}
                                            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#4ade80]"
                                                style={{ animation: 'status-blink 2.5s ease-in-out infinite', animationDelay: `${i * 0.4}s` }}
                                            />
                                        </div>
                                        <span className="section-label text-[0.55rem] text-center whitespace-nowrap">
                                            {locale === 'tr' ? node.labelTr : node.labelEn}
                                        </span>
                                    </div>

                                    {/* Connector */}
                                    {i < ARCH_NODES.length - 1 && (
                                        <div className="md:w-16 md:h-px h-8 w-px flex-shrink-0 mx-2 my-2 md:my-0"
                                            style={{
                                                background: 'linear-gradient(90deg, rgba(200,145,58,0.4), rgba(200,145,58,0.15))',
                                                borderTop: '1px dashed rgba(200,145,58,0.25)',
                                            }}
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Legend */}
                    <p className="text-center text-[#3A4555] text-xs font-mono mt-8 tracking-wider">
                        {locale === 'tr'
                            ? 'GPIO → Flask/WebSocket → Express API → Socket.IO → Client'
                            : 'GPIO → Flask/WebSocket → Express API → Socket.IO → Client'}
                    </p>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                INSTALLATION STEPS
            ═══════════════════════════════════════════ */}
            <section className="py-24 relative" style={{ backgroundColor: '#07090F' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="section-label mb-4">
                            {locale === 'tr' ? '// KURULUM' : '// INSTALLATION'}
                        </div>
                        <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold font-heading text-[#F0EDE8] leading-tight">
                            {t('installation.title')}
                        </h2>
                        <p className="text-[#6B7A90] text-base font-body mt-3 max-w-xl mx-auto">
                            {t('installation.subtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                        {/* Connector line */}
                        <div className="hidden md:block absolute top-12 left-[calc(16.66%+2.5rem)] right-[calc(16.66%+2.5rem)] pointer-events-none"
                            style={{
                                height: '1px',
                                background: 'linear-gradient(90deg, transparent 0%, rgba(200,145,58,0.3) 20%, rgba(200,145,58,0.3) 80%, transparent 100%)',
                                borderTop: '1px dashed rgba(200,145,58,0.2)',
                            }}
                        />

                        {STEPS.map(({ icon: Icon, num, key }) => (
                            <div key={key} className="relative flex flex-col items-center text-center px-4">
                                <div className="relative w-24 h-24 rounded-2xl flex items-center justify-center mb-6 z-10"
                                    style={{
                                        backgroundColor: '#07090F',
                                        border: '1px solid rgba(200,145,58,0.25)',
                                        boxShadow: '0 0 30px rgba(200,145,58,0.08)',
                                    }}>
                                    <Icon className="w-8 h-8 text-[#C8913A]" />
                                    <span className="absolute -top-2.5 -right-2.5 font-mono text-[0.65rem] font-bold px-1.5 py-0.5 rounded"
                                        style={{ backgroundColor: '#C8913A', color: '#07090F' }}>
                                        {num}
                                    </span>
                                </div>
                                <h3 className="text-[#F0EDE8] font-semibold font-heading text-lg mb-3">
                                    {t(`installation.${key}.title`)}
                                </h3>
                                <p className="text-[#6B7A90] text-sm leading-relaxed font-body max-w-xs">
                                    {t(`installation.${key}.description`)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                CTA BANNER
            ═══════════════════════════════════════════ */}
            <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#0D1117' }}>
                <div className="absolute top-0 left-0 right-0 h-px divider-gold" />
                <div className="absolute inset-0 pointer-events-none" style={{
                    background: 'radial-gradient(ellipse 60% 70% at 50% 100%, rgba(200,145,58,0.1), transparent)'
                }} />
                <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="section-label mb-6">
                        <span className="status-dot mr-2" />
                        {locale === 'tr' ? 'Entegrasyon Desteği' : 'Integration Support'}
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

export default IntegrationsPage;

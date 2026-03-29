'use client';

import { Key, QrCode, Shield, BarChart3, CheckCircle, ArrowRight, Zap, Users, Clock, Lock, Fingerprint, Radio } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { getLocalizedPath } from '@/utils/routes';

/* ─── Ticker data ─── */
const TICKER_ITEMS = [
    'Dijital Geçiş Yönetimi',
    'QR Kod Entegrasyonu',
    'Gerçek Zamanlı İzleme',
    'Rol Tabanlı Yetkilendirme',
    'KVKK Uyumlu',
    'Digital Access Control',
    'Real-time Analytics',
    'Cloud & On-premise',
    'API Entegrasyonu',
    '7/24 Destek',
];

const Welcoming = () => {
    const t = useTranslations('welcoming');
    const locale = useLocale();

    const features = [
        {
            icon: Key,
            tag: locale === 'tr' ? 'ERIŞIM' : 'ACCESS',
            title: t('features.digitalAccess'),
            description: t('features.digitalAccessDesc'),
        },
        {
            icon: QrCode,
            tag: 'QR / NFC',
            title: t('features.qrIntegration'),
            description: t('features.qrIntegrationDesc'),
        },
        {
            icon: Shield,
            tag: locale === 'tr' ? 'GÜVENLİK' : 'SECURITY',
            title: t('features.securityControl'),
            description: t('features.securityControlDesc'),
        },
        {
            icon: BarChart3,
            tag: locale === 'tr' ? 'ANALİTİK' : 'ANALYTICS',
            title: t('features.dataAnalytics'),
            description: t('features.dataAnalyticsDesc'),
        },
    ];

    const benefits = [
        t('benefits.cloudHybrid'),
        t('benefits.easyIntegration'),
        t('benefits.realTimeData'),
        t('benefits.roleBasedAccess'),
        t('benefits.costSavings'),
        t('benefits.gdprCompliant'),
    ];

    const steps = [
        {
            number: '01',
            icon: Lock,
            title: locale === 'tr' ? 'Sistemi Kurun' : 'Set Up the System',
            description: locale === 'tr'
                ? 'Mevcut altyapınıza entegre olun veya sıfırdan başlayın. Kurulum dakikalar içinde tamamlanır.'
                : 'Integrate with your existing infrastructure or start from scratch. Setup completes in minutes.',
        },
        {
            number: '02',
            icon: Fingerprint,
            title: locale === 'tr' ? 'Geçişleri Tanımlayın' : 'Define Access Points',
            description: locale === 'tr'
                ? 'Kapı, turnike veya bariyer sistemlerinizi platforma bağlayın ve yetki kurallarını belirleyin.'
                : 'Connect your door, turnstile or barrier systems to the platform and define authorization rules.',
        },
        {
            number: '03',
            icon: Radio,
            title: locale === 'tr' ? 'Yönetin ve İzleyin' : 'Manage & Monitor',
            description: locale === 'tr'
                ? 'Gerçek zamanlı geçiş loglarını takip edin, raporlar alın ve güvenliği merkezi panelden yönetin.'
                : 'Track real-time access logs, get reports and manage security from the central panel.',
        },
    ];

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#07090F' }}>

            {/* ═══════════════════════════════════════════
                HERO + TICKER — tam ekran (header hariç)
            ═══════════════════════════════════════════ */}
            <div className="flex flex-col" style={{ minHeight: 'calc(100svh - 4rem)' }}>

            {/* HERO */}
            <section className="relative flex-1 flex flex-col justify-center overflow-hidden blueprint-grid">

                {/* Scan line */}
                <div className="scan-line" />

                {/* Radial gold bloom */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: 'radial-gradient(ellipse 70% 55% at 50% 0%, rgba(200,145,58,0.13) 0%, transparent 70%)',
                    }}
                />

                {/* Ring expand animations */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    {[0, 1, 2].map((i) => (
                        <div
                            key={i}
                            className="absolute rounded-full border border-[#C8913A]/20"
                            style={{
                                width: `${320 + i * 180}px`,
                                height: `${320 + i * 180}px`,
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                animation: `ring-expand ${5 + i * 1.5}s ease-out infinite`,
                                animationDelay: `${i * 1.5}s`,
                            }}
                        />
                    ))}
                </div>

                {/* Corner markers */}
                {['top-8 left-8', 'top-8 right-8', 'bottom-8 left-8', 'bottom-8 right-8'].map((pos, i) => (
                    <div key={i} className={`absolute ${pos} pointer-events-none`}>
                        <div
                            className="w-5 h-5 border-[#C8913A]/40"
                            style={{
                                borderTopWidth: i < 2 ? '1px' : '0',
                                borderBottomWidth: i >= 2 ? '1px' : '0',
                                borderLeftWidth: i % 2 === 0 ? '1px' : '0',
                                borderRightWidth: i % 2 === 1 ? '1px' : '0',
                            }}
                        />
                    </div>
                ))}

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8 sm:pt-14 sm:pb-10 flex flex-col items-center text-center">

                    {/* Section label */}
                    <div className="section-label mb-6 animate-fade-in">
                        <span className="status-dot mr-2" />
                        {locale === 'tr' ? 'Dijital Geçiş Yönetim Sistemi' : 'Digital Access Management System'}
                    </div>

                    {/* Headline */}
                    <h1
                        className="font-heading font-extrabold leading-[1.08] mb-6 animate-fade-up"
                        style={{ animationDelay: '0.1s' }}
                    >
                        <span className="block text-[clamp(2.5rem,8vw,5.5rem)] text-[#F0EDE8]">
                            {locale === 'tr' ? 'Akıllı Geçiş,' : 'Smart Access,'}
                        </span>
                        <span
                            className="block text-[clamp(2.5rem,8vw,5.5rem)] text-shimmer"
                        >
                            {locale === 'tr' ? 'Güvenli Yönetim.' : 'Secure Management.'}
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p
                        className="max-w-2xl text-[clamp(1rem,2vw,1.2rem)] text-[#6B7A90] leading-relaxed mb-10 animate-fade-up"
                        style={{ animationDelay: '0.2s' }}
                    >
                        {t('description')}
                    </p>

                    {/* CTAs */}
                    <div
                        className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-up"
                        style={{ animationDelay: '0.3s' }}
                    >
                        <a
                            href={getLocalizedPath('start', locale)}
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-semibold font-body rounded-xl transition-all duration-200 glow-gold-sm"
                            style={{ backgroundColor: '#C8913A', color: '#07090F' }}
                            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#A8751F')}
                            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#C8913A')}
                        >
                            {locale === 'tr' ? 'Hemen Başla' : 'Get Started'}
                            <ArrowRight className="w-4 h-4" />
                        </a>
                        <a
                            href={getLocalizedPath('product', locale)}
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-semibold font-body rounded-xl border border-[rgba(200,145,58,0.3)] text-[#F0EDE8] hover:bg-[rgba(200,145,58,0.06)] transition-all duration-200"
                        >
                            {locale === 'tr' ? 'Ürünü İncele' : 'Explore Product'}
                        </a>
                    </div>

                    {/* Stats row */}
                    <div
                        className="w-full max-w-3xl glass-gold rounded-2xl border-breathe animate-fade-up"
                        style={{ animationDelay: '0.45s' }}
                    >
                        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[rgba(200,145,58,0.12)]">
                            {[
                                { value: '500+', label: locale === 'tr' ? 'Aktif Site' : 'Active Sites' },
                                { value: '50K+', label: locale === 'tr' ? 'Günlük Geçiş' : 'Daily Events' },
                                { value: '7/24', label: locale === 'tr' ? 'Destek' : 'Support' },
                                { value: '99.9%', label: 'Uptime' },
                            ].map((stat, i) => (
                                <div key={i} className="py-5 px-4 text-center">
                                    <div className="text-2xl font-extrabold font-heading text-[#C8913A] mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="section-label text-[0.6rem]">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: 'linear-gradient(to top, #07090F, transparent)' }} />
            </section>

            {/* ═══════════════════════════════════════════
                TICKER
            ═══════════════════════════════════════════ */}
            <div className="relative py-3 overflow-hidden border-y" style={{ borderColor: 'rgba(200,145,58,0.12)', backgroundColor: '#0D1117' }}>
                <div className="ticker-wrap">
                    <div className="ticker-inner">
                        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
                            <span key={i} className="inline-flex items-center gap-4 px-8">
                                <span className="section-label text-[0.6rem] whitespace-nowrap">{item}</span>
                                <span className="text-[#C8913A]/40 text-xs">◆</span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            </div>{/* end hero+ticker wrapper */}

            {/* ═══════════════════════════════════════════
                FEATURES
            ═══════════════════════════════════════════ */}
            <section className="py-28 relative overflow-hidden" style={{ backgroundColor: '#07090F' }}>
                {/* Blueprint grid subtle */}
                <div className="absolute inset-0 opacity-40 blueprint-grid pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16">
                        <div className="section-label mb-4">{locale === 'tr' ? '// ÖZELLİKLER' : '// FEATURES'}</div>
                        <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold font-heading text-[#F0EDE8] max-w-xl leading-tight">
                            {t('whyOxyKeyPass.title')}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group relative rounded-2xl p-6 border transition-all duration-300 hover:border-[rgba(200,145,58,0.35)] hover:glow-gold"
                                style={{
                                    backgroundColor: '#0D1117',
                                    borderColor: 'rgba(200,145,58,0.1)',
                                }}
                            >
                                {/* Top label */}
                                <div className="flex items-center justify-between mb-5">
                                    <span className="section-label text-[0.55rem]">{feature.tag}</span>
                                    <div
                                        className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 group-hover:bg-[rgba(200,145,58,0.2)]"
                                        style={{ backgroundColor: 'rgba(200,145,58,0.1)' }}
                                    >
                                        <feature.icon className="w-5 h-5 text-[#C8913A]" />
                                    </div>
                                </div>
                                <h3 className="text-[#F0EDE8] font-semibold font-heading text-base mb-2 leading-snug">
                                    {feature.title}
                                </h3>
                                <p className="text-[#6B7A90] text-sm leading-relaxed font-body">
                                    {feature.description}
                                </p>

                                {/* Bottom scan accent */}
                                <div className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{ background: 'linear-gradient(90deg, transparent, rgba(200,145,58,0.5), transparent)' }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                HOW IT WORKS
            ═══════════════════════════════════════════ */}
            <section className="py-28 relative overflow-hidden" style={{ backgroundColor: '#0D1117' }}>
                <div className="absolute top-0 left-0 right-0 h-px divider-gold" />
                <div className="absolute bottom-0 left-0 right-0 h-px divider-gold" />

                {/* Glow center */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse 50% 60% at 50% 50%, rgba(200,145,58,0.05), transparent)' }}
                />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="section-label mb-4">{locale === 'tr' ? '// NASIL ÇALIŞIR' : '// HOW IT WORKS'}</div>
                        <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold font-heading text-[#F0EDE8] leading-tight">
                            {locale === 'tr' ? 'Üç Adımda Başlayın' : 'Start in Three Steps'}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                        {/* Connector line */}
                        <div
                            className="hidden md:block absolute top-12 left-[calc(16.66%+2.5rem)] right-[calc(16.66%+2.5rem)] h-px pointer-events-none"
                            style={{
                                background: 'linear-gradient(90deg, transparent 0%, rgba(200,145,58,0.3) 20%, rgba(200,145,58,0.3) 80%, transparent 100%)',
                                borderTop: '1px dashed rgba(200,145,58,0.2)',
                            }}
                        />

                        {steps.map((step, index) => (
                            <div key={index} className="relative flex flex-col items-center text-center px-4">
                                {/* Number badge */}
                                <div
                                    className="relative w-24 h-24 rounded-2xl flex items-center justify-center mb-6 z-10"
                                    style={{
                                        backgroundColor: '#07090F',
                                        border: '1px solid rgba(200,145,58,0.25)',
                                        boxShadow: '0 0 30px rgba(200,145,58,0.08)',
                                    }}
                                >
                                    <step.icon className="w-8 h-8 text-[#C8913A]" />
                                    <span
                                        className="absolute -top-2.5 -right-2.5 font-mono text-[0.65rem] font-bold px-1.5 py-0.5 rounded"
                                        style={{ backgroundColor: '#C8913A', color: '#07090F' }}
                                    >
                                        {step.number}
                                    </span>
                                </div>
                                <h3 className="text-[#F0EDE8] font-semibold font-heading text-lg mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-[#6B7A90] text-sm leading-relaxed font-body max-w-xs">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                BENEFITS / ADVANTAGES
            ═══════════════════════════════════════════ */}
            <section className="py-28 relative" style={{ backgroundColor: '#07090F' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Left */}
                        <div>
                            <div className="section-label mb-4">{locale === 'tr' ? '// NEDEN OXYKEYPASS' : '// WHY OXYKEYPASS'}</div>
                            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold font-heading text-[#F0EDE8] mb-5 leading-tight">
                                {t('advantages.title')}
                            </h2>
                            <p className="text-[#6B7A90] text-lg leading-relaxed font-body mb-8">
                                {t('advantages.desc')}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-3 group">
                                        <CheckCircle className="w-4 h-4 text-[#C8913A] flex-shrink-0 mt-0.5" />
                                        <span className="text-[#F0EDE8] text-sm font-body">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: metrics */}
                        <div
                            className="rounded-2xl p-7 relative overflow-hidden"
                            style={{
                                backgroundColor: '#0D1117',
                                border: '1px solid rgba(200,145,58,0.15)',
                                boxShadow: '0 0 60px rgba(200,145,58,0.07)',
                            }}
                        >
                            {/* Inner scan */}
                            <div className="scan-line" style={{ opacity: 0.4 }} />

                            <div className="section-label mb-5">{locale === 'tr' ? '// PLATFORM METRİKLERİ' : '// PLATFORM METRICS'}</div>

                            <div className="space-y-4">
                                {[
                                    {
                                        icon: Users,
                                        value: '95%',
                                        metric: locale === 'tr' ? 'Müşteri Memnuniyeti' : 'Customer Satisfaction',
                                        desc: locale === 'tr' ? 'İlk ay içinde olumlu sonuçlar' : 'Positive results within first month',
                                    },
                                    {
                                        icon: Zap,
                                        value: '<2s',
                                        metric: locale === 'tr' ? 'Geçiş Süresi' : 'Access Time',
                                        desc: locale === 'tr' ? 'Ultra hızlı doğrulama sistemi' : 'Ultra-fast verification system',
                                    },
                                    {
                                        icon: Clock,
                                        value: '100+',
                                        metric: locale === 'tr' ? 'Entegrasyon' : 'Integrations',
                                        desc: locale === 'tr' ? 'Popüler sistemlerle uyumlu' : 'Compatible with popular systems',
                                    },
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-4 p-4 rounded-xl"
                                        style={{
                                            backgroundColor: 'rgba(200,145,58,0.04)',
                                            border: '1px solid rgba(200,145,58,0.1)',
                                        }}
                                    >
                                        <div
                                            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                                            style={{ backgroundColor: 'rgba(200,145,58,0.12)' }}
                                        >
                                            <item.icon className="w-5 h-5 text-[#C8913A]" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="text-[#F0EDE8] font-semibold font-heading text-sm">
                                                {item.metric}
                                            </div>
                                            <div className="text-[#6B7A90] text-xs font-body">{item.desc}</div>
                                        </div>
                                        <div className="font-mono font-bold text-[#C8913A] text-lg flex-shrink-0">
                                            {item.value}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                CTA BANNER
            ═══════════════════════════════════════════ */}
            <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#0D1117' }}>
                <div className="absolute top-0 left-0 right-0 h-px divider-gold" />

                {/* Bloom */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse 60% 70% at 50% 100%, rgba(200,145,58,0.1), transparent)' }}
                />

                {/* Blueprint grid */}
                <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="section-label mb-6">
                        <span className="status-dot mr-2" />
                        {locale === 'tr' ? 'Hemen Başlayın' : 'Get Started Now'}
                    </div>

                    <h2
                        className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold font-heading text-[#F0EDE8] mb-5 leading-tight text-glow-gold"
                    >
                        {locale === 'tr'
                            ? 'Başlamaya Hazır mısınız?'
                            : 'Ready to Get Started?'}
                    </h2>
                    <p className="text-lg text-[#6B7A90] mb-10 max-w-2xl mx-auto font-body leading-relaxed">
                        {t('cta.getStartedDesc')}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={getLocalizedPath('start', locale)}
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold font-body rounded-xl transition-all duration-200 glow-gold-sm"
                            style={{ backgroundColor: '#C8913A', color: '#07090F' }}
                            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#A8751F')}
                            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#C8913A')}
                        >
                            {locale === 'tr' ? 'Hemen Başla' : 'Get Started'}
                            <ArrowRight className="w-4 h-4" />
                        </a>
                        <a
                            href={getLocalizedPath('product', locale)}
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold font-body rounded-xl transition-all duration-200 text-[#F0EDE8] hover:bg-[rgba(200,145,58,0.07)]"
                            style={{ border: '1px solid rgba(200,145,58,0.25)' }}
                        >
                            {locale === 'tr' ? 'Ürünü İncele' : 'Explore Product'}
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Welcoming;

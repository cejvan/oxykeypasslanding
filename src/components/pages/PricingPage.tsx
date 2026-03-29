'use client';

import { useLocale } from 'next-intl';
import { getLocalizedPath } from '@/utils/routes';
import {
    CheckCircle, ArrowRight, Zap, Building2, Network,
    Users, Cpu, LayoutDashboard, PhoneCall
} from 'lucide-react';

const PLANS = [
    {
        key: 'starter',
        labelTr: 'Küçük Ölçekli',
        labelEn: 'Small Scale',
        tagTr: 'BAŞLANGIÇ',
        tagEn: 'STARTER',
        descTr: 'Tek bina veya küçük ölçekli tesisler için temel erişim kontrol çözümü.',
        descEn: 'Basic access control solution for single buildings or small-scale facilities.',
        icon: Zap,
        highlight: false,
        featuresTr: [
            '1 site / bina',
            '50\'ye kadar kullanıcı',
            'Mobil uygulama erişimi',
            'QR kod geçiş',
            'Temel raporlama',
            'E-posta desteği',
        ],
        featuresEn: [
            '1 site / building',
            'Up to 50 users',
            'Mobile app access',
            'QR code entry',
            'Basic reporting',
            'Email support',
        ],
    },
    {
        key: 'professional',
        labelTr: 'Kurumsal',
        labelEn: 'Professional',
        tagTr: 'POPÜLER',
        tagEn: 'POPULAR',
        descTr: 'Çok katlı yapılar ve orta ölçekli kurumlar için gelişmiş erişim yönetimi.',
        descEn: 'Advanced access management for multi-floor buildings and mid-size organizations.',
        icon: Building2,
        highlight: true,
        featuresTr: [
            'Birden fazla site desteği',
            'Sınırsız kullanıcı',
            'Mobil + admin panel',
            'RFID ve QR geçiş',
            'Detaylı log ve raporlama',
            'Firma API entegrasyonu',
            'Öncelikli destek',
        ],
        featuresEn: [
            'Multi-site support',
            'Unlimited users',
            'Mobile + admin panel',
            'RFID & QR entry',
            'Detailed logs & reporting',
            'Company API integration',
            'Priority support',
        ],
    },
    {
        key: 'enterprise',
        labelTr: 'Çok Noktalı',
        labelEn: 'Multi-Site',
        tagTr: 'KURUMSAL',
        tagEn: 'ENTERPRISE',
        descTr: 'Coğrafi olarak dağıtık, çok noktalı kurumsal yapılar için tam kapsamlı çözüm.',
        descEn: 'Full-scope solution for geographically distributed, multi-location enterprises.',
        icon: Network,
        highlight: false,
        featuresTr: [
            'Sınırsız site ve konum',
            'Sınırsız kullanıcı',
            'Özel iş koordinasyonu',
            'Tüm donanım desteği',
            'Webhook ve özel entegrasyon',
            'SLA güvenceli uptime',
            'Yerinde kurulum desteği',
            'Dedike hesap yöneticisi',
        ],
        featuresEn: [
            'Unlimited sites & locations',
            'Unlimited users',
            'Custom workflow engine',
            'All hardware support',
            'Webhook & custom integrations',
            'SLA-backed uptime',
            'On-site installation support',
            'Dedicated account manager',
        ],
    },
];

const WHY_ITEMS = [
    {
        icon: Users,
        labelTr: 'Kolay Kullanım',
        labelEn: 'Easy to Use',
        descTr: 'Teknik bilgi gerekmeden kurulum ve yönetim.',
        descEn: 'Setup and management without technical expertise.',
    },
    {
        icon: Cpu,
        labelTr: 'Donanım Uyumlu',
        labelEn: 'Hardware Compatible',
        descTr: 'Raspberry Pi tabanlı cihazlarla entegre çalışır.',
        descEn: 'Works integrated with Raspberry Pi-based devices.',
    },
    {
        icon: LayoutDashboard,
        labelTr: 'Merkezi Yönetim',
        labelEn: 'Central Management',
        descTr: 'Tüm noktaları tek panelden kontrol edin.',
        descEn: 'Control all points from a single dashboard.',
    },
    {
        icon: PhoneCall,
        labelTr: 'Hızlı Destek',
        labelEn: 'Fast Support',
        descTr: 'Kurulum ve sonrasında yanınızdayız.',
        descEn: 'We\'re with you during and after installation.',
    },
];

const PricingPage = () => {
    const locale = useLocale();
    const tr = locale === 'tr';

    return (
        <div style={{ backgroundColor: '#07090F' }} className="min-h-screen">

            {/* ── Hero ── */}
            <section className="relative overflow-hidden pt-20 pb-16">
                <div className="blueprint-grid absolute inset-0 opacity-30" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="section-label text-[0.6rem] mb-4">
                        {tr ? 'FİYATLANDIRMA' : 'PRICING'}
                    </p>
                    <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#F0EDE8] mb-5 leading-tight">
                        {tr ? 'İhtiyacınıza Uygun' : 'The Right Plan'}{' '}
                        <span className="text-shimmer">{tr ? 'Plan' : 'For Your Needs'}</span>
                    </h1>
                    <p className="text-[#6B7A90] text-lg max-w-2xl mx-auto font-body">
                        {tr
                            ? 'Tesisinizin ölçeğine göre en uygun paketi seçin. Fiyat teklifi için bizimle iletişime geçin.'
                            : 'Choose the package that fits your facility\'s scale. Contact us for a price quote.'}
                    </p>
                </div>
            </section>

            {/* ── Plans Grid ── */}
            <section className="pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {PLANS.map((plan) => {
                            const Icon = plan.icon;
                            return (
                                <div
                                    key={plan.key}
                                    className="relative rounded-2xl overflow-hidden flex flex-col"
                                    style={{
                                        backgroundColor: plan.highlight ? 'rgba(200,145,58,0.06)' : '#0D1117',
                                        border: plan.highlight
                                            ? '1.5px solid rgba(200,145,58,0.5)'
                                            : '1px solid rgba(200,145,58,0.12)',
                                        boxShadow: plan.highlight ? '0 0 40px rgba(200,145,58,0.08)' : 'none',
                                    }}
                                >
                                    {plan.highlight && (
                                        <div className="absolute top-0 left-0 right-0 h-0.5"
                                            style={{ background: 'linear-gradient(90deg, transparent, #C8913A, transparent)' }} />
                                    )}

                                    <div className="p-8 flex-1">
                                        {/* Tag */}
                                        <div className="flex items-center justify-between mb-6">
                                            <span className="section-label text-[0.55rem]">
                                                {tr ? plan.tagTr : plan.tagEn}
                                            </span>
                                            <div
                                                className="w-10 h-10 rounded-xl flex items-center justify-center"
                                                style={{ backgroundColor: 'rgba(200,145,58,0.1)', border: '1px solid rgba(200,145,58,0.2)' }}
                                            >
                                                <Icon className="w-5 h-5 text-[#C8913A]" />
                                            </div>
                                        </div>

                                        {/* Name */}
                                        <h3 className="font-heading text-2xl font-bold text-[#F0EDE8] mb-2">
                                            {tr ? plan.labelTr : plan.labelEn}
                                        </h3>
                                        <p className="text-[#6B7A90] text-sm font-body mb-6 leading-relaxed">
                                            {tr ? plan.descTr : plan.descEn}
                                        </p>

                                        {/* Price placeholder */}
                                        <div className="mb-6 py-4 rounded-xl text-center"
                                            style={{ border: '1px dashed rgba(200,145,58,0.2)', backgroundColor: 'rgba(200,145,58,0.03)' }}>
                                            <p className="text-[#C8913A] text-xs font-mono tracking-widest uppercase">
                                                {tr ? 'Teklif için iletişime geçin' : 'Contact us for pricing'}
                                            </p>
                                        </div>

                                        {/* Features */}
                                        <ul className="space-y-2.5">
                                            {(tr ? plan.featuresTr : plan.featuresEn).map((f, i) => (
                                                <li key={i} className="flex items-center gap-2.5">
                                                    <CheckCircle className="w-4 h-4 text-[#C8913A] flex-shrink-0" />
                                                    <span className="text-[#8A9AB0] text-sm font-body">{f}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* CTA */}
                                    <div className="px-8 pb-8">
                                        <a
                                            href={getLocalizedPath('contact', locale)}
                                            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-medium font-body transition-all duration-200"
                                            style={plan.highlight
                                                ? { backgroundColor: '#C8913A', color: '#07090F' }
                                                : { border: '1px solid rgba(200,145,58,0.3)', color: '#C8913A', backgroundColor: 'transparent' }
                                            }
                                        >
                                            {tr ? 'Teklif Al' : 'Get a Quote'}
                                            <ArrowRight className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── Why OxyKeyPass ── */}
            <section className="py-16" style={{ borderTop: '1px solid rgba(200,145,58,0.08)' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <p className="section-label text-[0.6rem] mb-3">
                            {tr ? 'NEDEN OXYKEYPASS' : 'WHY OXYKEYPASS'}
                        </p>
                        <h2 className="font-heading text-3xl font-bold text-[#F0EDE8]">
                            {tr ? 'Her Pakette Dahil Olanlar' : 'Included in Every Plan'}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {WHY_ITEMS.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div key={i} className="p-6 rounded-xl text-center"
                                    style={{ backgroundColor: '#0D1117', border: '1px solid rgba(200,145,58,0.1)' }}>
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                                        style={{ backgroundColor: 'rgba(200,145,58,0.1)' }}>
                                        <Icon className="w-6 h-6 text-[#C8913A]" />
                                    </div>
                                    <h4 className="font-heading font-semibold text-[#F0EDE8] mb-2">
                                        {tr ? item.labelTr : item.labelEn}
                                    </h4>
                                    <p className="text-[#6B7A90] text-sm font-body">
                                        {tr ? item.descTr : item.descEn}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── CTA Banner ── */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative rounded-2xl overflow-hidden p-10 text-center"
                        style={{ backgroundColor: '#0D1117', border: '1px solid rgba(200,145,58,0.2)' }}>
                        <div className="scan-line absolute inset-0 pointer-events-none" />
                        <div className="relative">
                            <p className="section-label text-[0.6rem] mb-4">
                                {tr ? 'ÖZEL TEKLİF' : 'CUSTOM QUOTE'}
                            </p>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#F0EDE8] mb-4">
                                {tr ? 'Projenizi Konuşalım' : 'Let\'s Talk About Your Project'}
                            </h2>
                            <p className="text-[#6B7A90] font-body mb-8 max-w-lg mx-auto">
                                {tr
                                    ? 'Tesisinizin ihtiyaçlarına özel bir çözüm ve fiyat teklifi için uzman ekibimizle iletişime geçin.'
                                    : 'Contact our expert team for a custom solution and pricing tailored to your facility\'s needs.'}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href={getLocalizedPath('contact', locale)}
                                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold font-body transition-all duration-200"
                                    style={{ backgroundColor: '#C8913A', color: '#07090F' }}
                                >
                                    {tr ? 'Teklif Al' : 'Get a Quote'}
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                                <a
                                    href={getLocalizedPath('product', locale)}
                                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold font-body transition-all duration-200"
                                    style={{ border: '1px solid rgba(200,145,58,0.35)', color: '#C8913A' }}
                                >
                                    {tr ? 'Ürünü İncele' : 'Explore Product'}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PricingPage;

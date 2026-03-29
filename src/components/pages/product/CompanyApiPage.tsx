'use client';

import { useLocale } from 'next-intl';
import { getLocalizedPath } from '@/utils/routes';
import { Building2, Webhook, Database, Key, ArrowRight, ChevronRight } from 'lucide-react';

const FEATURES = [
    {
        icon: Building2,
        labelTr: 'Firma Bazlı İzolasyon',
        labelEn: 'Company-Level Isolation',
        descTr: 'Her firmanın verileri ve API ortamı birbirinden tamamen izole tutulur.',
        descEn: 'Data and API environments of each company are kept completely isolated from each other.',
    },
    {
        icon: Webhook,
        labelTr: 'Webhook Desteği',
        labelEn: 'Webhook Support',
        descTr: 'Geçiş olaylarını gerçek zamanlı olarak harici sisteminize push edin.',
        descEn: 'Push access events to your external system in real time.',
    },
    {
        icon: Database,
        labelTr: 'Erişim Log API',
        labelEn: 'Access Log API',
        descTr: 'Geçmiş geçiş verilerine REST API üzerinden programatik erişim.',
        descEn: 'Programmatic access to historical access data via REST API.',
    },
    {
        icon: Key,
        labelTr: 'API Key Yönetimi',
        labelEn: 'API Key Management',
        descTr: 'Birden fazla API anahtarı oluşturun, kısıtlayın ve devre dışı bırakın.',
        descEn: 'Create, restrict and deactivate multiple API keys.',
    },
];

const STEPS = [
    {
        n: '01',
        labelTr: 'API Key Al',
        labelEn: 'Get API Key',
        descTr: 'Yönetim panelinden API anahtarınızı oluşturun.',
        descEn: 'Generate your API key from the admin panel.',
    },
    {
        n: '02',
        labelTr: 'Entegre Et',
        labelEn: 'Integrate',
        descTr: 'Mevcut ERP, BMS veya yazılımınıza OxyKeyPass Firma API\'sini entegre edin.',
        descEn: 'Integrate the OxyKeyPass Company API into your existing ERP, BMS or software.',
    },
    {
        n: '03',
        labelTr: 'Webhook Kur',
        labelEn: 'Set Up Webhook',
        descTr: 'Olay bazlı webhook\'lar ile geçiş verilerini anlık alın.',
        descEn: 'Receive access data instantly with event-based webhooks.',
    },
];

const CompanyApiPage = () => {
    const locale = useLocale();
    const tr = locale === 'tr';

    return (
        <div style={{ backgroundColor: '#07090F' }} className="min-h-screen">

            <section className="relative overflow-hidden pt-20 pb-16">
                <div className="blueprint-grid absolute inset-0 opacity-30" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <p className="section-label text-[0.6rem] mb-4">
                            {tr ? 'ÜRÜN · FİRMA API' : 'PRODUCT · COMPANY API'}
                        </p>
                        <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#F0EDE8] mb-5 leading-tight">
                            <span className="text-shimmer">{tr ? 'Firma API' : 'Company API'}</span>
                        </h1>
                        <p className="text-[#6B7A90] text-lg font-body leading-relaxed mb-8">
                            {tr
                                ? 'Mevcut ERP veya BMS sisteminizle entegrasyon için firma bazlı izole API ortamı, webhook ve erişim log API.'
                                : 'Company-isolated API environment, webhook and access log API for integration with your existing ERP or BMS system.'}
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <a href={getLocalizedPath('contact', locale)}
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold font-body transition-all duration-200"
                                style={{ backgroundColor: '#C8913A', color: '#07090F' }}>
                                {tr ? 'Teklif Al' : 'Get a Quote'}
                                <ArrowRight className="w-4 h-4" />
                            </a>
                            <span className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-mono text-[#5A7090]"
                                style={{ border: '1px solid rgba(200,145,58,0.15)' }}>
                                <Building2 className="w-4 h-4 text-[#C8913A]" />
                                Webhook · ERP · SDK
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="section-label text-[0.6rem] mb-10 text-center">
                        {tr ? 'ÖZELLİKLER' : 'FEATURES'}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {FEATURES.map((f, i) => {
                            const Icon = f.icon;
                            return (
                                <div key={i} className="rounded-xl p-6"
                                    style={{ backgroundColor: '#0D1117', border: '1px solid rgba(200,145,58,0.12)' }}>
                                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                                        style={{ backgroundColor: 'rgba(200,145,58,0.1)' }}>
                                        <Icon className="w-5 h-5 text-[#C8913A]" />
                                    </div>
                                    <h3 className="font-heading font-semibold text-[#F0EDE8] mb-2">
                                        {tr ? f.labelTr : f.labelEn}
                                    </h3>
                                    <p className="text-[#6B7A90] text-sm font-body leading-relaxed">
                                        {tr ? f.descTr : f.descEn}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-16" style={{ borderTop: '1px solid rgba(200,145,58,0.08)' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="section-label text-[0.6rem] mb-10 text-center">
                        {tr ? 'ENTEGRASYON ADIMLARI' : 'INTEGRATION STEPS'}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {STEPS.map((step, i) => (
                            <div key={i} className="relative rounded-xl p-6"
                                style={{ backgroundColor: '#0D1117', border: '1px solid rgba(200,145,58,0.12)' }}>
                                <span className="font-mono text-4xl font-bold text-[#C8913A] opacity-20 absolute top-4 right-5">
                                    {step.n}
                                </span>
                                <h3 className="font-heading font-semibold text-[#F0EDE8] mb-2 mt-1">
                                    {tr ? step.labelTr : step.labelEn}
                                </h3>
                                <p className="text-[#6B7A90] text-sm font-body leading-relaxed">
                                    {tr ? step.descTr : step.descEn}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16" style={{ borderTop: '1px solid rgba(200,145,58,0.08)' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="section-label text-[0.6rem] mb-6 text-center">
                        {tr ? 'İLGİLİ MODÜLLER' : 'RELATED MODULES'}
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { key: 'product/general-api', labelTr: 'Genel API', labelEn: 'General API' },
                            { key: 'product/admin-panels', labelTr: 'Yönetim Panelleri', labelEn: 'Admin Panels' },
                            { key: 'product/workflow', labelTr: 'İş Koordinasyonu', labelEn: 'Workflow' },
                        ].map(link => (
                            <a key={link.key} href={getLocalizedPath(link.key, locale)}
                                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-body text-[#C8913A] transition-colors hover:text-[#F0D090]"
                                style={{ border: '1px solid rgba(200,145,58,0.2)' }}>
                                {tr ? link.labelTr : link.labelEn}
                                <ChevronRight className="w-3.5 h-3.5" />
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CompanyApiPage;

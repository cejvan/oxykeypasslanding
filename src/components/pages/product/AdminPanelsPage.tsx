'use client';

import { useLocale } from 'next-intl';
import { getLocalizedPath } from '@/utils/routes';
import { MonitorDot, Users, FileText, Settings, ArrowRight, ExternalLink } from 'lucide-react';
import { PANELS } from '@/oxyConfig';

const FEATURES = [
    {
        icon: Users,
        labelTr: 'Kullanıcı & Kiracı Yönetimi',
        labelEn: 'User & Tenant Management',
        descTr: 'Kiracıları, daireleri ve erişim yetkilerini tek panelden yönetin.',
        descEn: 'Manage tenants, units and access permissions from a single panel.',
    },
    {
        icon: FileText,
        labelTr: 'Erişim Logları',
        labelEn: 'Access Logs',
        descTr: 'Tüm geçiş olaylarını gerçek zamanlı izleyin. Filtrelenebilir ve dışa aktarılabilir.',
        descEn: 'Monitor all access events in real time. Filterable and exportable.',
    },
    {
        icon: Settings,
        labelTr: 'Erişim Kuralları',
        labelEn: 'Access Rules',
        descTr: 'Saate ve güne göre erişim kısıtlamaları. Zaman dilimli yetkilendirme.',
        descEn: 'Access restrictions by time and day. Time-zone based authorization.',
    },
    {
        icon: MonitorDot,
        labelTr: 'Çok Lokasyon Desteği',
        labelEn: 'Multi-Location Support',
        descTr: 'Birden fazla site ve binanın aynı panel üzerinden yönetimi.',
        descEn: 'Management of multiple sites and buildings from the same panel.',
    },
];

const STEPS = [
    {
        n: '01',
        labelTr: 'Siteyi Tanımla',
        labelEn: 'Define the Site',
        descTr: 'Site, bina ve daireleri oluşturun. Yapıyı hiyerarşik olarak kurun.',
        descEn: 'Create the site, building and units. Set up the structure hierarchically.',
    },
    {
        n: '02',
        labelTr: 'Kullanıcıları Ekle',
        labelEn: 'Add Users',
        descTr: 'Kiracı veya çalışanları sisteme ekleyin, erişim yetkilerini atayın.',
        descEn: 'Add tenants or employees to the system and assign access permissions.',
    },
    {
        n: '03',
        labelTr: 'Canlıya Geç',
        labelEn: 'Go Live',
        descTr: 'Cihazları aktive edin. Geçişler panelde anlık olarak görünür.',
        descEn: 'Activate devices. Accesses appear instantly in the panel.',
    },
];

const AdminPanelsPage = () => {
    const locale = useLocale();
    const tr = locale === 'tr';

    return (
        <div style={{ backgroundColor: '#07090F' }} className="min-h-screen">

            <section className="relative overflow-hidden pt-20 pb-16">
                <div className="blueprint-grid absolute inset-0 opacity-30" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <p className="section-label text-[0.6rem] mb-4">
                            {tr ? 'ÜRÜN · YÖNETİM PANELLERİ' : 'PRODUCT · ADMIN PANELS'}
                        </p>
                        <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#F0EDE8] mb-5 leading-tight">
                            <span className="text-shimmer">{tr ? 'Yönetim Panelleri' : 'Admin Panels'}</span>
                        </h1>
                        <p className="text-[#6B7A90] text-lg font-body leading-relaxed mb-8">
                            {tr
                                ? 'Site, daire, kiracı ve erişim kurallarını web tabanlı panelden yönetin. Gerçek zamanlı log ve raporlama.'
                                : 'Manage sites, units, tenants and access rules from a web-based panel. Real-time logs and reporting.'}
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
                                <MonitorDot className="w-4 h-4 text-[#C8913A]" />
                                Web · Dashboard
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

            {/* Live Panels */}
            <section className="py-16" style={{ borderTop: '1px solid rgba(200,145,58,0.08)' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="section-label text-[0.6rem] mb-6 text-center">
                        {tr ? 'CANLI PANELLERİMİZ' : 'OUR LIVE PANELS'}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {PANELS.map(panel => (
                            <a key={panel.key} href={panel.href} target="_blank" rel="noopener noreferrer"
                                className="flex items-start gap-4 rounded-xl p-5 group transition-all duration-200 hover:border-[rgba(200,145,58,0.4)]"
                                style={{ backgroundColor: '#0D1117', border: '1px solid rgba(200,145,58,0.12)' }}>
                                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                                    style={{ backgroundColor: 'rgba(200,145,58,0.1)' }}>
                                    <MonitorDot className="w-5 h-5 text-[#C8913A]" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-[#F0EDE8] text-sm font-semibold font-body mb-0.5">
                                        {tr ? panel.labelTr : panel.labelEn}
                                    </p>
                                    <p className="text-[#5A7090] text-xs font-mono truncate">
                                        {panel.href.replace('https://', '')}
                                    </p>
                                </div>
                                <ExternalLink className="w-4 h-4 text-[#5A7090] flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity mt-0.5" />
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16" style={{ borderTop: '1px solid rgba(200,145,58,0.08)' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="section-label text-[0.6rem] mb-10 text-center">
                        {tr ? 'NASIL KURULUR' : 'HOW TO SET UP'}
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
        </div>
    );
};

export default AdminPanelsPage;

'use client';

import { useLocale } from 'next-intl';
import { getLocalizedPath } from '@/utils/routes';
import {
    Smartphone, Code2, Cpu, MonitorDot, Building2, GitBranch,
    ArrowRight, ChevronRight, Shield, Zap, Globe
} from 'lucide-react';

const MODULES = [
    {
        key: 'product/mobile-app',
        icon: Smartphone,
        labelTr: 'Mobil Uygulama',
        labelEn: 'Mobile App',
        descTr: 'iOS ve Android üzerinde QR/RFID tabanlı geçiş, geçmiş görüntüleme ve anlık bildirimler.',
        descEn: 'QR/RFID-based entry, history viewing and instant notifications on iOS and Android.',
        tagTr: 'iOS · ANDROID',
        tagEn: 'iOS · ANDROID',
    },
    {
        key: 'product/general-api',
        icon: Code2,
        labelTr: 'Genel API',
        labelEn: 'General API',
        descTr: 'Merkezi kimlik doğrulama, firma yönlendirme ve tüm istemcilere servis eden RESTful katman.',
        descEn: 'Central authentication, company routing and RESTful layer serving all clients.',
        tagTr: 'REST · JWT',
        tagEn: 'REST · JWT',
    },
    {
        key: 'product/device-integration',
        icon: Cpu,
        labelTr: 'Cihaz Entegrasyonu',
        labelEn: 'Device Integration',
        descTr: 'Raspberry Pi tabanlı okuyucu cihazlarının bağlantısı, GPIO kontrolü ve offline çalışma desteği.',
        descEn: 'Connection of Raspberry Pi-based reader devices, GPIO control and offline operation support.',
        tagTr: 'RASPBERRY PI · GPIO',
        tagEn: 'RASPBERRY PI · GPIO',
    },
    {
        key: 'product/admin-panels',
        icon: MonitorDot,
        labelTr: 'Yönetim Panelleri',
        labelEn: 'Admin Panels',
        descTr: 'Site, daire, kiracı ve erişim kurallarını yöneten web tabanlı yönetim arayüzü.',
        descEn: 'Web-based management interface for sites, units, tenants and access rules.',
        tagTr: 'WEB · DASHBOARD',
        tagEn: 'WEB · DASHBOARD',
    },
    {
        key: 'product/company-api',
        icon: Building2,
        labelTr: 'Firma API',
        labelEn: 'Company API',
        descTr: 'Firma bazlı izole ortamlar, webhook desteği ve mevcut ERP/BMS sistemlerine entegrasyon.',
        descEn: 'Company-isolated environments, webhook support and integration with existing ERP/BMS systems.',
        tagTr: 'WEBHOOK · ERP',
        tagEn: 'WEBHOOK · ERP',
    },
    {
        key: 'product/workflow',
        icon: GitBranch,
        labelTr: 'İş Koordinasyonu',
        labelEn: 'Workflow',
        descTr: 'Kural tabanlı otomasyon, onay akışları ve erişim olaylarına bağlı tetikleyiciler.',
        descEn: 'Rule-based automation, approval flows and triggers tied to access events.',
        tagTr: 'OTOMASYON · RULES',
        tagEn: 'AUTOMATION · RULES',
    },
];

const SPECS = [
    { icon: Shield, labelTr: 'AES-256 Şifreleme', labelEn: 'AES-256 Encryption', valTr: 'Uçtan Uca', valEn: 'End-to-End' },
    { icon: Zap, labelTr: 'Yanıt Süresi', labelEn: 'Response Time', valTr: '< 2 saniye', valEn: '< 2 seconds' },
    { icon: Globe, labelTr: 'Uptime', labelEn: 'Uptime', valTr: '%99.9 SLA', valEn: '99.9% SLA' },
    { icon: Smartphone, labelTr: 'Platform', labelEn: 'Platform', valTr: 'iOS & Android', valEn: 'iOS & Android' },
];

const ProductPage = () => {
    const locale = useLocale();
    const tr = locale === 'tr';

    return (
        <div style={{ backgroundColor: '#07090F' }} className="min-h-screen">

            {/* ── Hero ── */}
            <section className="relative overflow-hidden pt-20 pb-16">
                <div className="blueprint-grid absolute inset-0 opacity-30" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="section-label text-[0.6rem] mb-4">
                        {tr ? 'ÜRÜN' : 'PRODUCT'}
                    </p>
                    <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#F0EDE8] mb-5 leading-tight">
                        {tr ? 'Tam Entegre' : 'Fully Integrated'}{' '}
                        <span className="text-shimmer">{tr ? 'Erişim Kontrol Platformu' : 'Access Control Platform'}</span>
                    </h1>
                    <p className="text-[#6B7A90] text-lg max-w-2xl mx-auto font-body">
                        {tr
                            ? 'Mobil uygulamadan donanım katmanına, yönetim panelinden API\'ye kadar birbiriyle konuşan altı bileşen.'
                            : 'Six interconnected components from mobile app to hardware layer, from admin panel to API.'}
                    </p>
                </div>
            </section>

            {/* ── Module Cards ── */}
            <section className="pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {MODULES.map((mod) => {
                            const Icon = mod.icon;
                            return (
                                <a
                                    key={mod.key}
                                    href={getLocalizedPath(mod.key, locale)}
                                    className="group relative rounded-2xl p-7 flex flex-col transition-all duration-300 hover:border-[rgba(200,145,58,0.4)]"
                                    style={{
                                        backgroundColor: '#0D1117',
                                        border: '1px solid rgba(200,145,58,0.12)',
                                    }}
                                >
                                    {/* Icon + tag row */}
                                    <div className="flex items-start justify-between mb-5">
                                        <div
                                            className="w-12 h-12 rounded-xl flex items-center justify-center"
                                            style={{ backgroundColor: 'rgba(200,145,58,0.1)', border: '1px solid rgba(200,145,58,0.2)' }}
                                        >
                                            <Icon className="w-6 h-6 text-[#C8913A]" />
                                        </div>
                                        <span className="text-[0.55rem] font-mono text-[#5A7090] tracking-widest">
                                            {tr ? mod.tagTr : mod.tagEn}
                                        </span>
                                    </div>

                                    <h3 className="font-heading text-xl font-bold text-[#F0EDE8] mb-2">
                                        {tr ? mod.labelTr : mod.labelEn}
                                    </h3>
                                    <p className="text-[#6B7A90] text-sm font-body leading-relaxed flex-1">
                                        {tr ? mod.descTr : mod.descEn}
                                    </p>

                                    <div className="mt-5 flex items-center gap-1.5 text-[#C8913A] text-sm font-medium font-body
                                        opacity-70 group-hover:opacity-100 transition-opacity">
                                        {tr ? 'Detayları Gör' : 'View Details'}
                                        <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── Architecture Flow ── */}
            <section className="py-16" style={{ borderTop: '1px solid rgba(200,145,58,0.08)' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <p className="section-label text-[0.6rem] mb-3">
                            {tr ? 'MİMARİ' : 'ARCHITECTURE'}
                        </p>
                        <h2 className="font-heading text-3xl font-bold text-[#F0EDE8]">
                            {tr ? 'Bileşenler Nasıl Bağlanır?' : 'How Do the Components Connect?'}
                        </h2>
                    </div>

                    <div className="relative rounded-2xl p-8 overflow-hidden"
                        style={{ backgroundColor: '#0D1117', border: '1px solid rgba(200,145,58,0.12)' }}>
                        <div className="scan-line absolute inset-0 pointer-events-none opacity-50" />
                        <div className="relative flex flex-col md:flex-row items-center justify-center gap-3">
                            {[
                                { labelTr: 'Mobil Uygulama', labelEn: 'Mobile App', sub: 'iOS / Android' },
                                { labelTr: 'Genel API', labelEn: 'General API', sub: 'REST / JWT' },
                                { labelTr: 'Firma API', labelEn: 'Company API', sub: 'Webhook / SDK' },
                                { labelTr: 'Cihaz Katmanı', labelEn: 'Device Layer', sub: 'Raspberry Pi' },
                            ].map((node, i, arr) => (
                                <div key={i} className="flex flex-col md:flex-row items-center gap-3">
                                    <div className="rounded-xl px-5 py-3 text-center"
                                        style={{
                                            backgroundColor: i === 1 ? 'rgba(200,145,58,0.12)' : 'rgba(255,255,255,0.03)',
                                            border: i === 1 ? '1px solid rgba(200,145,58,0.4)' : '1px solid rgba(200,145,58,0.1)',
                                        }}>
                                        <p className={`text-sm font-semibold font-body ${i === 1 ? 'text-[#C8913A]' : 'text-[#E8EDF5]'}`}>
                                            {tr ? node.labelTr : node.labelEn}
                                        </p>
                                        <p className="text-[#5A7090] text-[0.65rem] font-mono mt-0.5">{node.sub}</p>
                                    </div>
                                    {i < arr.length - 1 && (
                                        <ArrowRight className="w-4 h-4 text-[#3A4555] rotate-0 md:rotate-0 hidden md:block" />
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 text-center">
                            <p className="text-[#3A4555] text-xs font-mono">
                                {tr
                                    ? 'Yönetim Panelleri ve İş Koordinasyonu tüm katmanlara bağlanır'
                                    : 'Admin Panels & Workflow connect to all layers'}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Specs ── */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {SPECS.map((spec, i) => {
                            const Icon = spec.icon;
                            return (
                                <div key={i} className="rounded-xl p-6 text-center"
                                    style={{ backgroundColor: '#0D1117', border: '1px solid rgba(200,145,58,0.1)' }}>
                                    <Icon className="w-6 h-6 text-[#C8913A] mx-auto mb-3" />
                                    <p className="text-[#F0EDE8] text-lg font-bold font-mono mb-1">
                                        {tr ? spec.valTr : spec.valEn}
                                    </p>
                                    <p className="text-[#5A7090] text-xs font-body">
                                        {tr ? spec.labelTr : spec.labelEn}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative rounded-2xl overflow-hidden p-10 text-center"
                        style={{ backgroundColor: '#0D1117', border: '1px solid rgba(200,145,58,0.2)' }}>
                        <div className="scan-line absolute inset-0 pointer-events-none" />
                        <div className="relative">
                            <p className="section-label text-[0.6rem] mb-4">
                                {tr ? 'BAŞLAYIN' : 'GET STARTED'}
                            </p>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#F0EDE8] mb-4">
                                {tr ? 'Sistemi Tesisinize Kuralım' : 'Let\'s Deploy the System at Your Facility'}
                            </h2>
                            <p className="text-[#6B7A90] font-body mb-8 max-w-lg mx-auto">
                                {tr
                                    ? 'Kurulum danışmanlığı ve fiyat teklifi için ekibimizle iletişime geçin.'
                                    : 'Contact our team for installation consulting and a price quote.'}
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
                                    href={getLocalizedPath('solutions', locale)}
                                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold font-body transition-all duration-200"
                                    style={{ border: '1px solid rgba(200,145,58,0.35)', color: '#C8913A' }}
                                >
                                    {tr ? 'Çözümleri İncele' : 'Browse Solutions'}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductPage;

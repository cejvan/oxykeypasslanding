'use client';

import { useLocale } from 'next-intl';
import { getLocalizedPath } from '@/utils/routes';
import { Cpu, Wifi, Lock, ShieldCheck, ArrowRight, ChevronRight } from 'lucide-react';

const FEATURES = [
    {
        icon: Cpu,
        labelTr: 'Raspberry Pi Tabanlı',
        labelEn: 'Raspberry Pi-Based',
        descTr: 'Raspberry Pi üzerinde çalışan hafif istemci yazılımı. Kolay kurulum, düşük maliyet.',
        descEn: 'Lightweight client software running on Raspberry Pi. Easy setup, low cost.',
    },
    {
        icon: Lock,
        labelTr: 'GPIO Kapı Kontrolü',
        labelEn: 'GPIO Door Control',
        descTr: 'GPIO pinleri aracılığıyla elektrikli kilit, turnikeler ve bariyerler kontrolü.',
        descEn: 'Control of electric locks, turnstiles and barriers via GPIO pins.',
    },
    {
        icon: Wifi,
        labelTr: 'Offline Mod',
        labelEn: 'Offline Mode',
        descTr: 'İnternet kesintisinde yerel cache ile geçişler devam eder. Bağlantı gelince senkronize olur.',
        descEn: 'Passes continue with local cache on internet outage. Syncs when connection is restored.',
    },
    {
        icon: ShieldCheck,
        labelTr: 'RFID & QR Okuyucu',
        labelEn: 'RFID & QR Reader',
        descTr: 'RS485, Wiegand ve USB protokollü okuyucularla tam uyumluluk.',
        descEn: 'Full compatibility with RS485, Wiegand and USB protocol readers.',
    },
];

const STEPS = [
    {
        n: '01',
        labelTr: 'Donanımı Bağla',
        labelEn: 'Connect Hardware',
        descTr: 'RFID/QR okuyucuyu ve elektrikli kilidi Raspberry Pi\'ye bağlayın.',
        descEn: 'Connect the RFID/QR reader and electric lock to the Raspberry Pi.',
    },
    {
        n: '02',
        labelTr: 'İstemciyi Kur',
        labelEn: 'Install Client',
        descTr: 'OxyKeyPass istemci yazılımını kurun ve panel üzerinden cihazı kaydedin.',
        descEn: 'Install the OxyKeyPass client software and register the device via the panel.',
    },
    {
        n: '03',
        labelTr: 'Aktif Et',
        labelEn: 'Activate',
        descTr: 'Cihaz merkezi API\'ye bağlanır ve geçişleri işlemeye başlar.',
        descEn: 'Device connects to the central API and starts processing entries.',
    },
];

const DeviceIntegrationPage = () => {
    const locale = useLocale();
    const tr = locale === 'tr';

    return (
        <div style={{ backgroundColor: '#07090F' }} className="min-h-screen">

            <section className="relative overflow-hidden pt-20 pb-16">
                <div className="blueprint-grid absolute inset-0 opacity-30" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <p className="section-label text-[0.6rem] mb-4">
                            {tr ? 'ÜRÜN · CİHAZ ENTEGRASYONU' : 'PRODUCT · DEVICE INTEGRATION'}
                        </p>
                        <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#F0EDE8] mb-5 leading-tight">
                            <span className="text-shimmer">{tr ? 'Cihaz Entegrasyonu' : 'Device Integration'}</span>
                        </h1>
                        <p className="text-[#6B7A90] text-lg font-body leading-relaxed mb-8">
                            {tr
                                ? 'Raspberry Pi tabanlı okuyucu cihazlarını sisteme bağlayın. RFID, QR ve GPIO ile tam donanım kontrolü.'
                                : 'Connect Raspberry Pi-based reader devices to the system. Full hardware control with RFID, QR and GPIO.'}
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
                                <Cpu className="w-4 h-4 text-[#C8913A]" />
                                Raspberry Pi · GPIO
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
                        {tr ? 'KURULUM ADIMLARI' : 'INSTALLATION STEPS'}
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
                            { key: 'integrations', labelTr: 'Entegrasyonlar', labelEn: 'Integrations' },
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

export default DeviceIntegrationPage;

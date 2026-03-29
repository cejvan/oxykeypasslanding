'use client';

import { useLocale } from 'next-intl';
import { getLocalizedPath } from '@/utils/routes';
import { Code2, Users, Building2, Lock, Server, ArrowRight, ChevronRight } from 'lucide-react';

const FEATURES = [
    {
        icon: Users,
        labelTr: 'Kimlik Doğrulama',
        labelEn: 'Authentication',
        descTr: 'JWT tabanlı merkezi kimlik doğrulama. Tüm istemciler tek güvenli kapıdan geçer.',
        descEn: 'JWT-based central authentication. All clients pass through a single secure gateway.',
    },
    {
        icon: Building2,
        labelTr: 'Firma Yönlendirme',
        labelEn: 'Company Routing',
        descTr: 'Her isteği ilgili firmanın izole API ortamına yönlendirir.',
        descEn: 'Routes each request to the isolated API environment of the relevant company.',
    },
    {
        icon: Lock,
        labelTr: 'Güvenli İletişim',
        labelEn: 'Secure Communication',
        descTr: 'AES-256 şifreli TLS bağlantısı. Veri asla açık iletilmez.',
        descEn: 'AES-256 encrypted TLS connection. Data is never transmitted in plaintext.',
    },
    {
        icon: Server,
        labelTr: 'Merkezi Yönetim',
        labelEn: 'Central Management',
        descTr: 'Tüm firma ve kullanıcıların tek bir API katmanından yönetilmesi.',
        descEn: 'Management of all companies and users through a single API layer.',
    },
];

const STEPS = [
    {
        n: '01',
        labelTr: 'İstek Alınır',
        labelEn: 'Request Received',
        descTr: 'Mobil uygulama veya harici sistem API\'ye istek gönderir.',
        descEn: 'Mobile app or external system sends a request to the API.',
    },
    {
        n: '02',
        labelTr: 'Kimlik Doğrulanır',
        labelEn: 'Identity Verified',
        descTr: 'JWT token kontrol edilir; kullanıcı ve firma doğrulanır.',
        descEn: 'JWT token is checked; user and company are verified.',
    },
    {
        n: '03',
        labelTr: 'Yönlendirilir',
        labelEn: 'Routed',
        descTr: 'İstek ilgili firma API\'sine yönlendirilerek yanıt döner.',
        descEn: 'Request is routed to the relevant company API and a response is returned.',
    },
];

const GeneralApiPage = () => {
    const locale = useLocale();
    const tr = locale === 'tr';

    return (
        <div style={{ backgroundColor: '#07090F' }} className="min-h-screen">

            <section className="relative overflow-hidden pt-20 pb-16">
                <div className="blueprint-grid absolute inset-0 opacity-30" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <p className="section-label text-[0.6rem] mb-4">
                            {tr ? 'ÜRÜN · GENEL API' : 'PRODUCT · GENERAL API'}
                        </p>
                        <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#F0EDE8] mb-5 leading-tight">
                            <span className="text-shimmer">{tr ? 'Genel API' : 'General API'}</span>
                        </h1>
                        <p className="text-[#6B7A90] text-lg font-body leading-relaxed mb-8">
                            {tr
                                ? 'Tüm mobil istemcileri, firma API\'lerini ve donanım katmanını tek merkezden yöneten RESTful erişim noktası.'
                                : 'The RESTful entry point that routes all mobile clients, company APIs and the hardware layer from a single center.'}
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
                                <Code2 className="w-4 h-4 text-[#C8913A]" />
                                REST · JWT · TLS
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
                        {tr ? 'İSTEK AKIŞI' : 'REQUEST FLOW'}
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
                            { key: 'product/mobile-app', labelTr: 'Mobil Uygulama', labelEn: 'Mobile App' },
                            { key: 'product/company-api', labelTr: 'Firma API', labelEn: 'Company API' },
                            { key: 'product/device-integration', labelTr: 'Cihaz Entegrasyonu', labelEn: 'Device Integration' },
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

export default GeneralApiPage;

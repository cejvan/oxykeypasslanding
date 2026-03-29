'use client';

import { useLocale } from 'next-intl';
import { getLocalizedPath } from '@/utils/routes';
import { GitBranch, Bell, CheckSquare, Zap, ArrowRight, ChevronRight } from 'lucide-react';

const FEATURES = [
    {
        icon: GitBranch,
        labelTr: 'Kural Motoru',
        labelEn: 'Rule Engine',
        descTr: 'Erişim olaylarına bağlı koşullu kurallar tanımlayın. Esneklik tam kontrolünüzde.',
        descEn: 'Define conditional rules tied to access events. Flexibility is fully in your control.',
    },
    {
        icon: CheckSquare,
        labelTr: 'Onay Akışları',
        labelEn: 'Approval Flows',
        descTr: 'Geçici erişim talepleri için çok adımlı onay süreci. Loglama dahil.',
        descEn: 'Multi-step approval process for temporary access requests. Includes logging.',
    },
    {
        icon: Bell,
        labelTr: 'Otomatik Bildirim',
        labelEn: 'Auto Notifications',
        descTr: 'Kural tetiklendiğinde ilgili kişilere otomatik e-posta veya push bildirimi.',
        descEn: 'Automatic email or push notification to relevant people when a rule is triggered.',
    },
    {
        icon: Zap,
        labelTr: 'Olay Tetikleyiciler',
        labelEn: 'Event Triggers',
        descTr: 'Belirli bir kapıda, saatte veya kullanıcı grubunda gerçekleşen olaylara bağlı aksiyonlar.',
        descEn: 'Actions triggered by events at a specific door, time or user group.',
    },
];

const STEPS = [
    {
        n: '01',
        labelTr: 'Kuralı Tanımla',
        labelEn: 'Define the Rule',
        descTr: 'Tetikleyici olay, koşul ve aksiyonu belirleyin.',
        descEn: 'Specify the trigger event, condition and action.',
    },
    {
        n: '02',
        labelTr: 'Tetikleyiciyi Kur',
        labelEn: 'Set the Trigger',
        descTr: 'Kural aktifleştirilir ve olaylar gerçek zamanlı izlenir.',
        descEn: 'The rule is activated and events are monitored in real time.',
    },
    {
        n: '03',
        labelTr: 'Otomatik Çalış',
        labelEn: 'Run Automatically',
        descTr: 'Koşul karşılandığında sistem otomatik aksiyon alır, log tutar.',
        descEn: 'When the condition is met, the system takes automatic action and keeps a log.',
    },
];

const WorkflowPage = () => {
    const locale = useLocale();
    const tr = locale === 'tr';

    return (
        <div style={{ backgroundColor: '#07090F' }} className="min-h-screen">

            <section className="relative overflow-hidden pt-20 pb-16">
                <div className="blueprint-grid absolute inset-0 opacity-30" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <p className="section-label text-[0.6rem] mb-4">
                            {tr ? 'ÜRÜN · İŞ KOORDİNASYONU' : 'PRODUCT · WORKFLOW'}
                        </p>
                        <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#F0EDE8] mb-5 leading-tight">
                            <span className="text-shimmer">{tr ? 'İş Koordinasyonu' : 'Workflow'}</span>
                        </h1>
                        <p className="text-[#6B7A90] text-lg font-body leading-relaxed mb-8">
                            {tr
                                ? 'Erişim olaylarına bağlı otomasyon kuralları, onay akışları ve tetikleyicilerle operasyonu otomatikleştirin.'
                                : 'Automate operations with automation rules, approval flows and triggers tied to access events.'}
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
                                <GitBranch className="w-4 h-4 text-[#C8913A]" />
                                {tr ? 'Otomasyon · Kurallar' : 'Automation · Rules'}
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
                        {tr ? 'OTOMASYON KURULUM ADIMLARI' : 'AUTOMATION SETUP STEPS'}
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
                            { key: 'product/company-api', labelTr: 'Firma API', labelEn: 'Company API' },
                            { key: 'product/admin-panels', labelTr: 'Yönetim Panelleri', labelEn: 'Admin Panels' },
                            { key: 'solutions', labelTr: 'Çözümler', labelEn: 'Solutions' },
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

export default WorkflowPage;

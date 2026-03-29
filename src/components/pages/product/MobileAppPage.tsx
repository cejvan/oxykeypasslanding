'use client';

import { useLocale } from 'next-intl';
import { getLocalizedPath } from '@/utils/routes';
import { Smartphone, QrCode, History, Bell, User, ArrowRight, Download } from 'lucide-react';

const FEATURES = [
    {
        icon: QrCode,
        labelTr: 'QR Kod Okuma',
        labelEn: 'QR Code Scanning',
        descTr: 'Kamera ile anlık QR kod taraması. Cihaza temassız, hızlı geçiş.',
        descEn: 'Instant QR code scanning via camera. Contactless, fast entry to the device.',
    },
    {
        icon: History,
        labelTr: 'Geçiş Geçmişi',
        labelEn: 'Access History',
        descTr: 'Hangi kapıdan, ne zaman geçildiğinin tam kaydı. Filtrelenebilir log.',
        descEn: 'Full record of which door was accessed and when. Filterable log.',
    },
    {
        icon: Bell,
        labelTr: 'Anlık Bildirimler',
        labelEn: 'Push Notifications',
        descTr: 'Erişim olaylarında anlık push bildirimi. Yetkisiz giriş uyarıları.',
        descEn: 'Instant push notifications on access events. Unauthorized entry alerts.',
    },
    {
        icon: User,
        labelTr: 'Kullanıcı Profili',
        labelEn: 'User Profile',
        descTr: 'Kişisel erişim yetkilerini ve aktif abonelikleri tek ekranda görüntüle.',
        descEn: 'View personal access permissions and active subscriptions in one screen.',
    },
];

const STEPS = [
    {
        nTr: '01', nEn: '01',
        labelTr: 'Uygulamayı İndir',
        labelEn: 'Download the App',
        descTr: 'App Store veya Google Play\'den OxyKeyPass uygulamasını indirin.',
        descEn: 'Download the OxyKeyPass app from the App Store or Google Play.',
    },
    {
        nTr: '02', nEn: '02',
        labelTr: 'Hesaba Giriş Yap',
        labelEn: 'Sign In',
        descTr: 'Yöneticinizin sağladığı hesap bilgileriyle giriş yapın.',
        descEn: 'Sign in with the account credentials provided by your administrator.',
    },
    {
        nTr: '03', nEn: '03',
        labelTr: 'QR ile Geç',
        labelEn: 'Enter with QR',
        descTr: 'Kapı okuyucusuna QR kodunuzu gösterin, geçiş onaylanır.',
        descEn: 'Show your QR code to the door reader and entry is confirmed.',
    },
];

const MobileAppPage = () => {
    const locale = useLocale();
    const tr = locale === 'tr';

    return (
        <div style={{ backgroundColor: '#07090F' }} className="min-h-screen">

            {/* ── Hero ── */}
            <section className="relative overflow-hidden pt-20 pb-16">
                <div className="blueprint-grid absolute inset-0 opacity-30" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <p className="section-label text-[0.6rem] mb-4">
                            {tr ? 'ÜRÜN · MOBİL UYGULAMA' : 'PRODUCT · MOBILE APP'}
                        </p>
                        <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#F0EDE8] mb-5 leading-tight">
                            <span className="text-shimmer">{tr ? 'Mobil Uygulama' : 'Mobile App'}</span>
                        </h1>
                        <p className="text-[#6B7A90] text-lg font-body leading-relaxed mb-8">
                            {tr
                                ? 'iOS ve Android üzerinde QR kod taraması, geçiş geçmişi ve anlık bildirimlerle erişim kontrolünü cebinize taşıyın.'
                                : 'Bring access control to your pocket with QR scanning, access history and push notifications on iOS and Android.'}
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
                                <Smartphone className="w-4 h-4 text-[#C8913A]" />
                                iOS · Android
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Features ── */}
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

            {/* ── How It Works ── */}
            <section className="py-16" style={{ borderTop: '1px solid rgba(200,145,58,0.08)' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="section-label text-[0.6rem] mb-10 text-center">
                        {tr ? 'NASIL ÇALIŞIR' : 'HOW IT WORKS'}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {STEPS.map((step, i) => (
                            <div key={i} className="relative rounded-xl p-6"
                                style={{ backgroundColor: '#0D1117', border: '1px solid rgba(200,145,58,0.12)' }}>
                                <span className="font-mono text-4xl font-bold text-[#C8913A] opacity-20 absolute top-4 right-5">
                                    {tr ? step.nTr : step.nEn}
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

            {/* ── CTA ── */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative rounded-2xl overflow-hidden p-10 text-center"
                        style={{ backgroundColor: '#0D1117', border: '1px solid rgba(200,145,58,0.2)' }}>
                        <div className="scan-line absolute inset-0 pointer-events-none" />
                        <div className="relative">
                            <Download className="w-8 h-8 text-[#C8913A] mx-auto mb-4" />
                            <h2 className="font-heading text-3xl font-bold text-[#F0EDE8] mb-3">
                                {tr ? 'Uygulamayı Tesisinize Ekleyin' : 'Add the App to Your Facility'}
                            </h2>
                            <p className="text-[#6B7A90] font-body mb-7 max-w-md mx-auto">
                                {tr
                                    ? 'Uygulama yalnızca OxyKeyPass altyapısına sahip tesislerde çalışır. Kurulum için iletişime geçin.'
                                    : 'The app only works at facilities with OxyKeyPass infrastructure. Contact us for setup.'}
                            </p>
                            <a href={getLocalizedPath('contact', locale)}
                                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold font-body transition-all duration-200"
                                style={{ backgroundColor: '#C8913A', color: '#07090F' }}>
                                {tr ? 'Teklif Al' : 'Get a Quote'}
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MobileAppPage;

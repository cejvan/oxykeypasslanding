'use client';

import { useState } from 'react';
import { getLocalizedPath } from '@/utils/routes';
import {
    Building2, Users, FileText, Key, MapPin, Cpu,
    ScrollText, Wrench, CheckCircle, ArrowRight, ChevronRight,
    ChevronLeft, Shield, BarChart3, Smartphone, Link2,
    Home, UserCheck, ClipboardList, Wifi, ArrowUpRight,
} from 'lucide-react';

interface SiteManagementPageProps {
    locale: string;
}

const tr = (a: string, b: string, locale: string) => locale === 'tr' ? a : b;

const FEATURES = [
    {
        icon: Building2,
        tag: (l: string) => l === 'tr' ? 'VARLIK' : 'ASSET',
        titleTr: 'Taşınmaz Yönetimi',
        titleEn: 'Unit Management',
        descTr: 'Daire, dükkan, ofis, depo gibi her türlü taşınmazı kategorilere ayırın. Kat, tip ve özel alan bilgilerini kayıt altına alın.',
        descEn: 'Categorize every unit: apartments, shops, offices, storage rooms. Record floor, type, and custom field data.',
        bullets: {
            tr: ['Özelleştirilebilir alan tanımları', 'Bölge & kat düzenlemesi', 'Kategori bazlı filtreleme', 'Aktif/pasif durum takibi'],
            en: ['Customizable field definitions', 'Zone & floor organization', 'Category-based filtering', 'Active/inactive status tracking'],
        },
    },
    {
        icon: UserCheck,
        tag: (l: string) => l === 'tr' ? 'MÜLKİYET' : 'OWNERSHIP',
        titleTr: 'Mülk Sahibi Takibi',
        titleEn: 'Owner Tracking',
        descTr: 'Bireysel ve kurumsal mülk sahiplerini kayıt altına alın. Davet kodu ile mevcut firmalarla hızlı eşleştirme yapın.',
        descEn: 'Register individual and corporate property owners. Link existing firms instantly with an invite code.',
        bullets: {
            tr: ['Şahıs & tüzel kişi desteği', 'UUID davet kodu ile bağlantı', 'Mülk sahibi portal erişimi', 'Çoklu taşınmaz atama'],
            en: ['Individual & corporate support', 'UUID invite code linking', 'Owner portal access', 'Multi-unit assignment'],
        },
    },
    {
        icon: Users,
        tag: (l: string) => l === 'tr' ? 'KİRACILAR' : 'TENANTS',
        titleTr: 'Kiracı Yönetimi',
        titleEn: 'Tenant Management',
        descTr: 'Kiracı bilgilerini sözleşmelerle ilişkilendirin. Kim nerede oturuyor, ne zamana kadar? Anlık görünürlük sağlayın.',
        descEn: 'Link tenant data to contracts. Know who lives where and until when — instant visibility.',
        bullets: {
            tr: ['Sözleşme bazlı kiracı kaydı', 'Taşınmaz — kiracı ilişkisi', 'Geçmiş kiracı arşivi', 'İletişim bilgileri merkezi'],
            en: ['Contract-based tenant registry', 'Unit–tenant relationship', 'Historical tenant archive', 'Centralized contact info'],
        },
    },
    {
        icon: FileText,
        tag: (l: string) => l === 'tr' ? 'SÖZLEŞME' : 'CONTRACT',
        titleTr: 'Sözleşme Takibi',
        titleEn: 'Contract Tracking',
        descTr: 'Kira sözleşmelerini başlangıç/bitiş tarihleri ve koşullarıyla yönetin. Süresi dolmak üzere olan sözleşmeleri önceden görün.',
        descEn: 'Manage lease contracts with start/end dates and terms. See expiring contracts before they lapse.',
        bullets: {
            tr: ['Başlangıç & bitiş tarihleri', 'Kiracı — taşınmaz bağlantısı', 'Sözleşme arşivi', 'Tarih bazlı filtreleme'],
            en: ['Start & end dates', 'Tenant–unit linkage', 'Contract archive', 'Date-based filtering'],
        },
    },
    {
        icon: Key,
        tag: (l: string) => l === 'tr' ? 'ERİŞİM' : 'ACCESS',
        titleTr: 'Akıllı Erişim Kontrolü',
        titleEn: 'Smart Access Control',
        descTr: 'NFC, QR, PIN ve biyometrik yöntemlerle kapı ve bölge erişimlerini dijital olarak yönetin. Yetkisiz girişleri önleyin.',
        descEn: 'Digitally manage door and zone access via NFC, QR, PIN, and biometrics. Block unauthorized entries.',
        bullets: {
            tr: ['NFC / QR / PIN / Biyometrik', 'Bölge bazlı yetkilendirme', 'Geçici erişim tanımlama', 'Gerçek zamanlı engelleme'],
            en: ['NFC / QR / PIN / Biometric', 'Zone-based authorization', 'Temporary access grants', 'Real-time blocking'],
        },
    },
    {
        icon: ScrollText,
        tag: (l: string) => l === 'tr' ? 'RAPORLAMA' : 'REPORTING',
        titleTr: 'Erişim Logları & Raporlar',
        titleEn: 'Access Logs & Reports',
        descTr: 'Tüm giriş-çıkış hareketlerini kayıt altına alın. Kim, ne zaman, hangi kapıdan? Tam denetim izi.',
        descEn: 'Record every entry and exit. Who, when, which door? Full audit trail always available.',
        bullets: {
            tr: ['Kişi bazlı hareket geçmişi', 'Cihaz & bölge logları', 'Tarih aralığı filtreleme', 'Dışa aktarılabilir raporlar'],
            en: ['Per-person movement history', 'Device & zone logs', 'Date range filtering', 'Exportable reports'],
        },
    },
];

const HOW_IT_WORKS = [
    {
        step: '01',
        iconTr: 'Site oluştur',
        iconEn: 'Create the site',
        descTr: 'Adres, şehir ve lokasyon bilgileriyle sitenizi kayıt edin. Birden fazla siteyi tek panelden yönetin.',
        descEn: 'Register your site with address, city and location. Manage multiple sites from one panel.',
    },
    {
        step: '02',
        iconTr: 'Taşınmazları tanımla',
        iconEn: 'Define the units',
        descTr: 'Bölgeler ve katlar oluşturun. Daireler, dükkanlar ve depoları sisteme girin. Özel alanlar ekleyin.',
        descEn: 'Create zones and floors. Add apartments, shops, and storage rooms. Attach custom fields.',
    },
    {
        step: '03',
        iconTr: 'Kişileri & sözleşmeleri bağla',
        iconEn: 'Link people & contracts',
        descTr: 'Mülk sahiplerini ve kiracıları taşınmazlarla ilişkilendirin. Sözleşme tarihlerini kayıt edin.',
        descEn: 'Link owners and tenants to units. Record contract dates and terms.',
    },
    {
        step: '04',
        iconTr: 'Cihazları & erişimi yapılandır',
        iconEn: 'Configure devices & access',
        descTr: 'Akıllı kilit ve okuyucu cihazları ekleyin. Her kişi için bölge erişim yetkilerini tanımlayın.',
        descEn: 'Add smart lock and reader devices. Define zone access permissions per person.',
    },
];

const ROLES = [
    {
        icon: Building2,
        labelTr: 'Site Yönetim Firması',
        labelEn: 'Site Management Firm',
        typeTr: 'SITE',
        colorClass: '#C8913A',
        descTr: 'Tüm yönetim paneline tam erişim: taşınmazlar, mülk sahipleri, kiracılar, sözleşmeler, cihazlar ve erişim logları.',
        descEn: 'Full panel access: units, owners, tenants, contracts, devices and access logs.',
        featuresTr: ['Tam panel kontrolü', 'Servis & mülk firmalarını davet et', 'Erişim yetkilerini belirle', 'Abonelik & faturalandırma'],
        featuresEn: ['Full panel control', 'Invite service & property firms', 'Define access permissions', 'Subscription & billing'],
    },
    {
        icon: Home,
        labelTr: 'Mülk Sahibi Firması',
        labelEn: 'Property Owner Firm',
        typeTr: 'PROPERTY',
        colorClass: '#7A9FC8',
        descTr: 'Kendi taşınmazlarını görüntüler. Site yöneticisinin davet koduyla bağlanır; düzenleme yapamaz, sadece okur.',
        descEn: 'Views only their own units. Connects via the manager\'s invite code; read-only access.',
        featuresTr: ['Kendi taşınmazlarını görme', 'Hizmet aldığı siteyi görme', 'Sözleşme bilgileri', 'Ücretsiz erişim'],
        featuresEn: ['View own units', 'See managing site company', 'Contract information', 'Free access'],
    },
    {
        icon: Wrench,
        labelTr: 'Servis Firması',
        labelEn: 'Service Firm',
        typeTr: 'SERVICE',
        colorClass: '#9AC87A',
        descTr: 'Hizmet verdiği sitelerin taşınmazlarını görür. Bakım, temizlik veya güvenlik gibi operasyonları takip eder.',
        descEn: 'Views units of sites it services. Tracks operations like maintenance, cleaning, or security.',
        featuresTr: ['Atandığı taşınmazları görme', 'Operasyon takibi', 'Hizmet geçmişi', 'Ücretsiz erişim'],
        featuresEn: ['View assigned units', 'Operation tracking', 'Service history', 'Free access'],
    },
];

const STATS = [
    { value: '3', labelTr: 'Firma tipi', labelEn: 'Company types' },
    { value: '6+', labelTr: 'Erişim yöntemi', labelEn: 'Access methods' },
    { value: '100%', labelTr: 'Web tabanlı', labelEn: 'Web-based' },
    { value: '7/24', labelTr: 'Erişim logları', labelEn: 'Access logs' },
];

const SiteManagementPage = ({ locale }: SiteManagementPageProps) => {
    const [activeFeature, setActiveFeature] = useState<number>(0);
    const [activeRole, setActiveRole] = useState<number>(0);
    const l = locale;

    const f = FEATURES[activeFeature];

    return (
        <div style={{ backgroundColor: '#07090F' }}>

            {/* ══════════════════════════════════════
                HERO
            ══════════════════════════════════════ */}
            <section className="relative py-28 overflow-hidden blueprint-grid">
                <div className="scan-line" />

                {/* Bloom */}
                <div className="absolute inset-0 pointer-events-none" style={{
                    background: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(200,145,58,0.14) 0%, transparent 70%)'
                }} />

                {/* Rings */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    {[0, 1, 2].map(i => (
                        <div key={i} className="absolute rounded-full border border-[#C8913A]/10"
                            style={{
                                width: `${320 + i * 180}px`, height: `${320 + i * 180}px`,
                                top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                                animation: `ring-expand ${7 + i * 2}s ease-out infinite`,
                                animationDelay: `${i * 1.5}s`,
                            }}
                        />
                    ))}
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 mb-8 animate-fade-in">
                        <a href={getLocalizedPath('solutions', l)}
                            className="flex items-center gap-1.5 text-[#6B7A90] hover:text-[#C8913A] transition-colors text-sm font-body">
                            <ChevronLeft className="w-3.5 h-3.5" />
                            {tr('Çözümler', 'Solutions', l)}
                        </a>
                        <span className="text-[#3A4555] text-sm">/</span>
                        <span className="text-[#C8913A] text-sm font-mono">
                            {tr('site-yonetimi', 'site-management', l)}
                        </span>
                    </div>

                    <div className="max-w-3xl">
                        <div className="section-label mb-5 animate-fade-in">
                            <span className="status-dot mr-2" />
                            {tr('Site & Bina Yönetimi', 'Site & Building Management', l)}
                        </div>

                        <h1 className="font-heading font-extrabold text-[clamp(2.4rem,6vw,4.2rem)] text-[#F0EDE8] leading-[1.05] mb-6 animate-fade-up">
                            {tr('Sitenizi Akıllıca', 'Manage Your Site', l)}
                            <br />
                            <span className="text-shimmer">
                                {tr('Yönetin.', 'The Smart Way.', l)}
                            </span>
                        </h1>

                        <p className="text-[#6B7A90] text-lg font-body leading-relaxed mb-10 max-w-2xl animate-fade-up" style={{ animationDelay: '0.1s' }}>
                            {tr(
                                'Taşınmazlardan erişim kontrolüne, mülk sahiplerinden kiracılara — tüm site yönetimini tek platformda dijitalleştirin. Site yöneticileri, mülk sahipleri ve servis firmaları tek ekosistemde buluşur.',
                                'From units to access control, from owners to tenants — digitize all site management in one platform. Site managers, property owners and service firms unite in one ecosystem.',
                                l
                            )}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                            <a href={getLocalizedPath('contact', l)}
                                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-semibold font-body rounded-xl glow-gold-sm transition-all duration-200"
                                style={{ backgroundColor: '#C8913A', color: '#07090F' }}
                                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#A8751F')}
                                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#C8913A')}
                            >
                                {tr('Demo Talep Et', 'Request Demo', l)}
                                <ArrowRight className="w-4 h-4" />
                            </a>
                            <a href="https://sitepanel.oxykeypass.com" target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-semibold font-body rounded-xl border border-[rgba(200,145,58,0.3)] text-[#F0EDE8] hover:bg-[rgba(200,145,58,0.06)] transition-all duration-200"
                            >
                                {tr('Paneli Dene', 'Try the Panel', l)}
                                <ArrowUpRight className="w-4 h-4 text-[#C8913A]" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Stats bar */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {STATS.map(s => (
                            <div key={s.value}
                                className="rounded-2xl p-5 border"
                                style={{ backgroundColor: '#0D1117', borderColor: 'rgba(200,145,58,0.12)' }}>
                                <div className="font-mono font-bold text-2xl text-[#C8913A] mb-1">{s.value}</div>
                                <div className="text-[#6B7A90] text-xs font-body">{tr(s.labelTr, s.labelEn, l)}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{
                    background: 'linear-gradient(to top, #07090F, transparent)'
                }} />
            </section>

            {/* ══════════════════════════════════════
                FEATURES — INTERACTIVE SPLIT PANEL
            ══════════════════════════════════════ */}
            <section className="py-24 relative" style={{ backgroundColor: '#07090F' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-14">
                        <div className="section-label mb-4">
                            {tr('// ÖZELLİKLER', '// FEATURES', l)}
                        </div>
                        <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold font-heading text-[#F0EDE8] leading-tight">
                            {tr('Yönetimin Her Boyutu', 'Every Dimension of Management', l)}
                            <br />
                            <span style={{ color: '#C8913A' }}>
                                {tr('Tek Çatı Altında.', 'Under One Roof.', l)}
                            </span>
                        </h2>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Left: nav pills */}
                        <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 flex-shrink-0 lg:w-64">
                            {FEATURES.map((feat, i) => {
                                const Icon = feat.icon;
                                const isActive = activeFeature === i;
                                return (
                                    <button
                                        key={i}
                                        onClick={() => setActiveFeature(i)}
                                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 whitespace-nowrap lg:whitespace-normal flex-shrink-0 lg:flex-shrink"
                                        style={{
                                            backgroundColor: isActive ? 'rgba(200,145,58,0.12)' : 'transparent',
                                            border: `1px solid ${isActive ? 'rgba(200,145,58,0.35)' : 'rgba(200,145,58,0.08)'}`,
                                            color: isActive ? '#F0EDE8' : '#6B7A90',
                                        }}
                                    >
                                        <Icon className="w-4 h-4 flex-shrink-0" style={{ color: isActive ? '#C8913A' : '#4A5A6A' }} />
                                        <span className="text-sm font-body font-medium">
                                            {tr(feat.titleTr, feat.titleEn, l)}
                                        </span>
                                        {isActive && <ChevronRight className="w-3 h-3 text-[#C8913A] ml-auto flex-shrink-0 hidden lg:block" />}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Right: detail panel */}
                        <div className="flex-1 rounded-2xl p-8 relative overflow-hidden"
                            style={{
                                backgroundColor: '#0D1117',
                                border: '1px solid rgba(200,145,58,0.2)',
                                boxShadow: '0 0 60px rgba(200,145,58,0.05)',
                            }}>
                            <div className="absolute inset-0 pointer-events-none" style={{
                                background: 'radial-gradient(ellipse 60% 80% at 0% 50%, rgba(200,145,58,0.06), transparent)'
                            }} />
                            <div className="scan-line" style={{ opacity: 0.2 }} />

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                        style={{ backgroundColor: 'rgba(200,145,58,0.15)', border: '1px solid rgba(200,145,58,0.25)' }}>
                                        {(() => { const Icon = f.icon; return <Icon className="w-6 h-6 text-[#C8913A]" />; })()}
                                    </div>
                                    <div>
                                        <span className="section-label text-[0.55rem]">{f.tag(l)}</span>
                                        <h3 className="text-[#F0EDE8] font-heading font-bold text-xl leading-tight">
                                            {tr(f.titleTr, f.titleEn, l)}
                                        </h3>
                                    </div>
                                </div>

                                <p className="text-[#6B7A90] font-body text-base leading-relaxed mb-7">
                                    {tr(f.descTr, f.descEn, l)}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {(l === 'tr' ? f.bullets.tr : f.bullets.en).map((b, i) => (
                                        <div key={i} className="flex items-start gap-3 p-3 rounded-xl"
                                            style={{ backgroundColor: 'rgba(200,145,58,0.06)', border: '1px solid rgba(200,145,58,0.1)' }}>
                                            <CheckCircle className="w-4 h-4 text-[#C8913A] flex-shrink-0 mt-0.5" />
                                            <span className="text-sm font-body text-[#B0B8C4]">{b}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Feature nav arrows */}
                                <div className="flex items-center justify-between mt-8 pt-6"
                                    style={{ borderTop: '1px solid rgba(200,145,58,0.1)' }}>
                                    <span className="font-mono text-[#3A4555] text-xs">
                                        {String(activeFeature + 1).padStart(2, '0')} / {String(FEATURES.length).padStart(2, '0')}
                                    </span>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => setActiveFeature(p => (p - 1 + FEATURES.length) % FEATURES.length)}
                                            className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                                            style={{ border: '1px solid rgba(200,145,58,0.2)', color: '#6B7A90' }}
                                            onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(200,145,58,0.5)')}
                                            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(200,145,58,0.2)')}
                                        >
                                            <ChevronLeft className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => setActiveFeature(p => (p + 1) % FEATURES.length)}
                                            className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                                            style={{ border: '1px solid rgba(200,145,58,0.2)', color: '#6B7A90' }}
                                            onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(200,145,58,0.5)')}
                                            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(200,145,58,0.2)')}
                                        >
                                            <ChevronRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                HOW IT WORKS
            ══════════════════════════════════════ */}
            <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#0D1117' }}>
                <div className="absolute top-0 left-0 right-0 h-px divider-gold" />
                <div className="absolute bottom-0 left-0 right-0 h-px divider-gold" />
                <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <div className="section-label mb-4">
                            {tr('// NASIL ÇALIŞIR', '// HOW IT WORKS', l)}
                        </div>
                        <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold font-heading text-[#F0EDE8] leading-tight">
                            {tr('Dakikalar İçinde', 'Up and Running', l)}
                            <br />
                            <span style={{ color: '#C8913A' }}>
                                {tr('Hayata Geçirin.', 'In Minutes.', l)}
                            </span>
                        </h2>
                        <p className="text-[#6B7A90] font-body mt-4 max-w-xl mx-auto text-base">
                            {tr(
                                'Dört adımda site yönetiminizi tamamen dijitalleştirin.',
                                'Fully digitize your site management in four steps.',
                                l
                            )}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
                        {/* Connector line */}
                        <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px pointer-events-none"
                            style={{ background: 'linear-gradient(90deg, transparent, rgba(200,145,58,0.3) 20%, rgba(200,145,58,0.3) 80%, transparent)' }}
                        />

                        {HOW_IT_WORKS.map((step, i) => (
                            <div key={i} className="relative rounded-2xl p-6 flex flex-col gap-4 group"
                                style={{
                                    backgroundColor: '#07090F',
                                    border: '1px solid rgba(200,145,58,0.12)',
                                }}>
                                {/* Step number */}
                                <div className="w-10 h-10 rounded-full flex items-center justify-center font-mono font-bold text-sm flex-shrink-0 z-10 relative"
                                    style={{
                                        backgroundColor: 'rgba(200,145,58,0.12)',
                                        border: '1px solid rgba(200,145,58,0.3)',
                                        color: '#C8913A',
                                    }}>
                                    {step.step}
                                </div>

                                <div>
                                    <h3 className="text-[#F0EDE8] font-heading font-semibold text-base mb-2">
                                        {tr(step.iconTr, step.iconEn, l)}
                                    </h3>
                                    <p className="text-[#6B7A90] text-sm font-body leading-relaxed">
                                        {tr(step.descTr, step.descEn, l)}
                                    </p>
                                </div>

                                {/* Bottom accent */}
                                <div className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{ background: 'linear-gradient(90deg, transparent, rgba(200,145,58,0.5), transparent)' }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                ROLES / COMPANY TYPES
            ══════════════════════════════════════ */}
            <section className="py-24 relative" style={{ backgroundColor: '#07090F' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-14">
                        <div className="section-label mb-4">
                            {tr('// ROLLER', '// ROLES', l)}
                        </div>
                        <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold font-heading text-[#F0EDE8] leading-tight">
                            {tr('Herkes Kendi Rolünde,', 'Everyone in Their Role,', l)}
                            <br />
                            <span style={{ color: '#C8913A' }}>
                                {tr('Tek Ekosistemde.', 'One Ecosystem.', l)}
                            </span>
                        </h2>
                        <p className="text-[#6B7A90] font-body mt-3 max-w-2xl text-base">
                            {tr(
                                'Site yönetim firmaları, mülk sahibi firmalar ve servis firmaları aynı platformda buluşur. Her rol kendi görünürlüğüne ve yetkisine sahiptir.',
                                'Site management firms, property owner firms, and service firms meet on the same platform. Each role has its own visibility and permissions.',
                                l
                            )}
                        </p>
                    </div>

                    {/* Role tabs */}
                    <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
                        {ROLES.map((role, i) => {
                            const Icon = role.icon;
                            const isActive = activeRole === i;
                            return (
                                <button key={i} onClick={() => setActiveRole(i)}
                                    className="flex items-center gap-2.5 px-5 py-3 rounded-xl font-body font-medium text-sm transition-all duration-200 flex-shrink-0"
                                    style={{
                                        backgroundColor: isActive ? 'rgba(200,145,58,0.12)' : '#0D1117',
                                        border: `1px solid ${isActive ? 'rgba(200,145,58,0.4)' : 'rgba(200,145,58,0.1)'}`,
                                        color: isActive ? '#F0EDE8' : '#6B7A90',
                                    }}>
                                    <Icon className="w-4 h-4" style={{ color: isActive ? role.colorClass : '#4A5A6A' }} />
                                    {tr(role.labelTr, role.labelEn, l)}
                                    <span className="font-mono text-[0.6rem] px-1.5 py-0.5 rounded"
                                        style={{
                                            backgroundColor: isActive ? `${role.colorClass}20` : 'rgba(200,145,58,0.08)',
                                            color: isActive ? role.colorClass : '#4A5A6A',
                                        }}>
                                        {role.typeTr}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Role detail */}
                    {(() => {
                        const role = ROLES[activeRole];
                        const Icon = role.icon;
                        return (
                            <div className="rounded-2xl p-8 relative overflow-hidden"
                                style={{
                                    backgroundColor: '#0D1117',
                                    border: '1px solid rgba(200,145,58,0.18)',
                                    boxShadow: '0 0 60px rgba(200,145,58,0.04)',
                                }}>
                                <div className="absolute inset-0 pointer-events-none" style={{
                                    background: `radial-gradient(ellipse 50% 80% at 100% 0%, ${role.colorClass}08, transparent)`
                                }} />

                                <div className="relative z-10 flex flex-col md:flex-row gap-8">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                                                style={{ backgroundColor: `${role.colorClass}15`, border: `1px solid ${role.colorClass}30` }}>
                                                <Icon className="w-6 h-6" style={{ color: role.colorClass }} />
                                            </div>
                                            <div>
                                                <div className="font-mono text-xs mb-0.5" style={{ color: role.colorClass }}>
                                                    TYPE: {role.typeTr}
                                                </div>
                                                <h3 className="text-[#F0EDE8] font-heading font-bold text-lg">
                                                    {tr(role.labelTr, role.labelEn, l)}
                                                </h3>
                                            </div>
                                        </div>
                                        <p className="text-[#6B7A90] font-body text-base leading-relaxed">
                                            {tr(role.descTr, role.descEn, l)}
                                        </p>
                                    </div>

                                    <div className="md:w-80 flex-shrink-0">
                                        <div className="text-xs font-mono text-[#4A5A6A] mb-3 uppercase tracking-wider">
                                            {tr('Yetenekler', 'Capabilities', l)}
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            {(l === 'tr' ? role.featuresTr : role.featuresEn).map((feat, i) => (
                                                <div key={i} className="flex items-center gap-3 p-3 rounded-xl"
                                                    style={{ backgroundColor: `${role.colorClass}08`, border: `1px solid ${role.colorClass}15` }}>
                                                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: role.colorClass }} />
                                                    <span className="text-sm font-body text-[#B0B8C4]">{feat}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })()}
                </div>
            </section>

            {/* ══════════════════════════════════════
                CONNECTIVITY DIAGRAM
            ══════════════════════════════════════ */}
            <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#0D1117' }}>
                <div className="absolute top-0 left-0 right-0 h-px divider-gold" />
                <div className="absolute bottom-0 left-0 right-0 h-px divider-gold" />
                <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />

                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="section-label mb-4">
                            {tr('// BAĞLANTI', '// CONNECTIVITY', l)}
                        </div>
                        <h2 className="text-[clamp(1.5rem,3.5vw,2.2rem)] font-bold font-heading text-[#F0EDE8]">
                            {tr('Tüm Paydaşlar Bağlı,', 'All Stakeholders Connected,', l)}
                            <span style={{ color: '#C8913A' }}> {tr('Hepsi Kontrollü.', 'All Controlled.', l)}</span>
                        </h2>
                    </div>

                    {/* Simple connection diagram */}
                    <div className="flex flex-col items-center gap-4">
                        {/* Center: Platform */}
                        <div className="rounded-2xl px-8 py-5 text-center"
                            style={{
                                backgroundColor: '#07090F',
                                border: '1px solid rgba(200,145,58,0.4)',
                                boxShadow: '0 0 40px rgba(200,145,58,0.1)',
                            }}>
                            <div className="font-mono text-[#C8913A] text-xs mb-1">OxyKeyPass</div>
                            <div className="text-[#F0EDE8] font-heading font-bold text-lg">
                                {tr('Site Yönetim Platformu', 'Site Management Platform', l)}
                            </div>
                        </div>

                        {/* Connectors */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                            {[
                                { icon: Building2, color: '#C8913A', labelTr: 'Site Yönetim Firması', labelEn: 'Site Management Firm', typeTr: 'Tam kontrol', typeEn: 'Full control' },
                                { icon: Home, color: '#7A9FC8', labelTr: 'Mülk Sahibi Firması', labelEn: 'Property Owner Firm', typeTr: 'Sadece görüntüleme', typeEn: 'Read-only access' },
                                { icon: Wrench, color: '#9AC87A', labelTr: 'Servis Firması', labelEn: 'Service Firm', typeTr: 'Atanan taşınmazlar', typeEn: 'Assigned units' },
                            ].map((node, i) => {
                                const Icon = node.icon;
                                return (
                                    <div key={i} className="flex flex-col items-center gap-2">
                                        <div className="w-px h-8 hidden sm:block" style={{ background: `linear-gradient(to bottom, rgba(200,145,58,0.4), ${node.color}40)` }} />
                                        <div className="rounded-2xl p-5 w-full text-center"
                                            style={{
                                                backgroundColor: '#07090F',
                                                border: `1px solid ${node.color}25`,
                                            }}>
                                            <Icon className="w-6 h-6 mx-auto mb-2" style={{ color: node.color }} />
                                            <div className="text-[#F0EDE8] font-body font-semibold text-sm mb-1">
                                                {tr(node.labelTr, node.labelEn, l)}
                                            </div>
                                            <div className="font-mono text-xs" style={{ color: node.color }}>
                                                {tr(node.typeTr, node.typeEn, l)}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                TECH HIGHLIGHTS
            ══════════════════════════════════════ */}
            <section className="py-24 relative" style={{ backgroundColor: '#07090F' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {[
                            { icon: Shield, value: 'JWT + RBAC', labelTr: 'Kimlik Doğrulama', labelEn: 'Authentication', descTr: 'Rol bazlı erişim kontrolü, güvenli token yönetimi', descEn: 'Role-based access control, secure token management' },
                            { icon: Wifi, value: 'REST API', labelTr: 'Entegrasyon', labelEn: 'Integration', descTr: 'Akıllı kilit cihazlarıyla tam entegrasyon desteği', descEn: 'Full integration support with smart lock devices' },
                            { icon: BarChart3, value: '∞ Log', labelTr: 'Erişim Geçmişi', labelEn: 'Access History', descTr: 'Sınırsız erişim logu saklama ve raporlama', descEn: 'Unlimited access log storage and reporting' },
                            { icon: Smartphone, value: 'PWA', labelTr: 'Mobil Uyumlu', labelEn: 'Mobile Ready', descTr: 'Tüm cihazlarda sorunsuz çalışan web arayüzü', descEn: 'Smooth web interface across all devices' },
                        ].map(({ icon: Icon, value, labelTr, labelEn, descTr, descEn }) => (
                            <div key={value}
                                className="group rounded-2xl p-6 border transition-all duration-300 hover:border-[rgba(200,145,58,0.35)]"
                                style={{ backgroundColor: '#0D1117', borderColor: 'rgba(200,145,58,0.1)' }}>
                                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-colors group-hover:bg-[rgba(200,145,58,0.2)]"
                                    style={{ backgroundColor: 'rgba(200,145,58,0.1)' }}>
                                    <Icon className="w-5 h-5 text-[#C8913A]" />
                                </div>
                                <div className="font-mono font-bold text-xl text-[#C8913A] mb-2">{value}</div>
                                <h3 className="text-[#F0EDE8] font-semibold font-heading text-sm mb-1.5">
                                    {tr(labelTr, labelEn, l)}
                                </h3>
                                <p className="text-[#6B7A90] text-xs font-body leading-relaxed">
                                    {tr(descTr, descEn, l)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                CTA
            ══════════════════════════════════════ */}
            <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#0D1117' }}>
                <div className="absolute top-0 left-0 right-0 h-px divider-gold" />
                <div className="absolute inset-0 pointer-events-none" style={{
                    background: 'radial-gradient(ellipse 60% 70% at 50% 100%, rgba(200,145,58,0.1), transparent)'
                }} />
                <div className="absolute inset-0 blueprint-grid opacity-25 pointer-events-none" />

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="section-label mb-6">
                        <span className="status-dot mr-2" />
                        {tr('Hemen Başlayın', 'Get Started Now', l)}
                    </div>
                    <h2 className="text-[clamp(2rem,5vw,3.2rem)] font-extrabold font-heading text-[#F0EDE8] mb-5 leading-tight text-glow-gold">
                        {tr('Sitenizi Dijitalleştirmeye', 'Ready to Digitize', l)}
                        <br />
                        {tr('Hazır mısınız?', 'Your Site?', l)}
                    </h2>
                    <p className="text-[#6B7A90] text-lg font-body leading-relaxed mb-10 max-w-2xl mx-auto">
                        {tr(
                            'Site yönetimini, erişim kontrolünü ve tüm paydaş ilişkilerini tek platformda yönetin. Demo için bize ulaşın.',
                            'Manage site operations, access control, and all stakeholder relationships in one platform. Contact us for a demo.',
                            l
                        )}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href={getLocalizedPath('contact', l)}
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold font-body rounded-xl glow-gold-sm transition-all duration-200"
                            style={{ backgroundColor: '#C8913A', color: '#07090F' }}
                            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#A8751F')}
                            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#C8913A')}
                        >
                            {tr('Demo Talep Et', 'Request a Demo', l)}
                            <ArrowRight className="w-4 h-4" />
                        </a>
                        <a href={getLocalizedPath('solutions', l)}
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold font-body rounded-xl text-[#F0EDE8] hover:bg-[rgba(200,145,58,0.07)] transition-all duration-200"
                            style={{ border: '1px solid rgba(200,145,58,0.25)' }}
                        >
                            <ChevronLeft className="w-4 h-4 text-[#C8913A]" />
                            {tr('Diğer Çözümler', 'All Solutions', l)}
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SiteManagementPage;

'use client';

import { useLocale } from 'next-intl';
import { getLocalizedPath } from '@/utils/routes';
import { Mail, Phone, MapPin, Linkedin, Instagram, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { PANELS } from '@/oxyConfig';

const PRODUCT_LINKS = [
    { key: 'product/mobile-app',         labelTr: 'Mobil Uygulama',    labelEn: 'Mobile App' },
    { key: 'product/general-api',        labelTr: 'Genel API',         labelEn: 'General API' },
    { key: 'product/device-integration', labelTr: 'Cihaz Entegrasyonu',labelEn: 'Device Integration' },
    { key: 'product/admin-panels',       labelTr: 'Yönetim Panelleri', labelEn: 'Admin Panels' },
    { key: 'product/company-api',        labelTr: 'Firma API',         labelEn: 'Company API' },
    { key: 'product/workflow',           labelTr: 'İş Koordinasyonu',  labelEn: 'Workflow' },
];

const PLATFORM_LINKS = [
    { key: 'solutions',    labelTr: 'Çözümler',       labelEn: 'Solutions' },
    { key: 'integrations', labelTr: 'Entegrasyonlar', labelEn: 'Integrations' },
    { key: 'pricing',      labelTr: 'Fiyatlandırma',  labelEn: 'Pricing' },
    { key: 'contact',      labelTr: 'İletişim',       labelEn: 'Contact' },
];

const Footer = () => {
    const locale = useLocale();
    const currentYear = new Date().getFullYear();
    const tr = locale === 'tr';

    return (
        <footer style={{ backgroundColor: '#07090F' }}>
            {/* Top divider */}
            <div className="divider-gold" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* ── Col 1: Logo + desc + social ── */}
                    <div className="lg:col-span-1">
                        <a href={getLocalizedPath('home', locale)} className="inline-flex items-center gap-2.5 mb-5">
                            <Image src="/logo.svg" alt="OxyKeyPass" width={0} height={0} className="h-6 w-auto" />
                            <div className="flex flex-col leading-none">
                                <span className="font-display font-bold text-[0.9rem] text-[#E8EDF5] tracking-tight">OxyKeyPass</span>
                                <span className="text-[0.55rem] text-[#5A7090] font-mono tracking-widest uppercase">
                                    {tr ? 'Geçiş Sistemleri' : 'Access Systems'}
                                </span>
                            </div>
                        </a>

                        <p className="text-[#5A7090] text-sm leading-relaxed mb-6 font-body">
                            {tr
                                ? 'Fiziksel erişim noktalarında dijital yetkilendirme sağlayan kurumsal SaaS platformu.'
                                : 'Enterprise SaaS platform providing digital authorization at physical access points.'}
                        </p>

                        <div className="flex items-center gap-2">
                            <a href="https://linkedin.com/company/oxykeypass"
                                target="_blank" rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg flex items-center justify-center text-[#5A7090] hover:text-[#C8913A] transition-all duration-200"
                                style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(200,145,58,0.12)' }}
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a href="https://instagram.com/oxykeypass"
                                target="_blank" rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg flex items-center justify-center text-[#5A7090] hover:text-[#C8913A] transition-all duration-200"
                                style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(200,145,58,0.12)' }}
                                aria-label="Instagram"
                            >
                                <Instagram className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* ── Col 2: Ürün ── */}
                    <div>
                        <h3 className="section-label text-[0.6rem] mb-5">
                            {tr ? 'ÜRÜN' : 'PRODUCT'}
                        </h3>
                        <ul className="space-y-2.5">
                            {PRODUCT_LINKS.map(link => (
                                <li key={link.key}>
                                    <a href={getLocalizedPath(link.key, locale)}
                                        className="text-[#5A7090] hover:text-[#E8EDF5] text-sm font-body transition-colors duration-200"
                                    >
                                        {tr ? link.labelTr : link.labelEn}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ── Col 3: Platform ── */}
                    <div>
                        <h3 className="section-label text-[0.6rem] mb-5">
                            {tr ? 'PLATFORM' : 'PLATFORM'}
                        </h3>
                        <ul className="space-y-2.5">
                            {PLATFORM_LINKS.map(link => (
                                <li key={link.key}>
                                    <a href={getLocalizedPath(link.key, locale)}
                                        className="text-[#5A7090] hover:text-[#E8EDF5] text-sm font-body transition-colors duration-200"
                                    >
                                        {tr ? link.labelTr : link.labelEn}
                                    </a>
                                </li>
                            ))}
                            {PANELS.map(panel => (
                                <li key={panel.key} className="pt-1">
                                    <a href={panel.href}
                                        target="_blank" rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-[#C8913A] hover:text-[#F0D090] text-sm font-body transition-colors duration-200"
                                    >
                                        {tr ? panel.labelTr : panel.labelEn}
                                        <ExternalLink className="w-3 h-3" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ── Col 4: İletişim ── */}
                    <div>
                        <h3 className="section-label text-[0.6rem] mb-5">
                            {tr ? 'İLETİŞİM' : 'CONTACT'}
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <Mail className="w-4 h-4 text-[#C8913A] mt-0.5 flex-shrink-0" />
                                <a href="mailto:info@oxykeypass.com"
                                    className="text-[#5A7090] hover:text-[#E8EDF5] text-sm font-body transition-colors duration-200"
                                >
                                    info@oxykeypass.com
                                </a>
                            </div>
                            <div className="flex items-start gap-3">
                                <Phone className="w-4 h-4 text-[#C8913A] mt-0.5 flex-shrink-0" />
                                <a href="tel:+902129090060"
                                    className="text-[#5A7090] hover:text-[#E8EDF5] text-sm font-body transition-colors duration-200"
                                >
                                    +90 212 909 00 60
                                </a>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-[#C8913A] mt-0.5 flex-shrink-0" />
                                <span className="text-[#5A7090] text-sm font-body">
                                    Bahçelievler Mah. İzzettin Çalışlar Cad. No:35/12, İstanbul
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Bottom bar ── */}
                <div className="mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4"
                    style={{ borderTop: '1px solid rgba(200,145,58,0.1)' }}>
                    <p className="text-[#3A4555] text-xs font-mono">
                        © {currentYear} OxyKeyPass.{' '}
                        {tr ? 'Tüm hakları saklıdır.' : 'All rights reserved.'}
                    </p>
                    <div className="flex items-center gap-5">
                        <a href={getLocalizedPath('contact', locale)}
                            className="text-[#3A4555] hover:text-[#5A7090] text-xs font-body transition-colors duration-200"
                        >
                            {tr ? 'Gizlilik Politikası' : 'Privacy Policy'}
                        </a>
                        <a href={getLocalizedPath('contact', locale)}
                            className="text-[#3A4555] hover:text-[#5A7090] text-xs font-body transition-colors duration-200"
                        >
                            {tr ? 'Kullanım Şartları' : 'Terms of Service'}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

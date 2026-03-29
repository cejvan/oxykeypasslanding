'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { getLocalizedPath } from '@/utils/routes';
import { Menu, X, ChevronDown, LayoutDashboard, ExternalLink, Smartphone, Code2, Cpu, MonitorDot, Building2, GitBranch } from 'lucide-react';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';
import { PANELS } from '@/oxyConfig';

const PRODUCT_ITEMS = [
    { key: 'product/mobile-app',        icon: Smartphone,  labelTr: 'Mobil Uygulama',      labelEn: 'Mobile App' },
    { key: 'product/general-api',       icon: Code2,       labelTr: 'Genel API',            labelEn: 'General API' },
    { key: 'product/device-integration',icon: Cpu,         labelTr: 'Cihaz Entegrasyonu',   labelEn: 'Device Integration' },
    { key: 'product/admin-panels',      icon: MonitorDot,  labelTr: 'Yönetim Panelleri',    labelEn: 'Admin Panels' },
    { key: 'product/company-api',       icon: Building2,   labelTr: 'Firma API',            labelEn: 'Company API' },
    { key: 'product/workflow',          icon: GitBranch,   labelTr: 'İş Koordinasyonu',     labelEn: 'Workflow' },
];

const Header = () => {
    const t = useTranslations('navigation');
    const locale = useLocale();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPanelOpen, setIsPanelOpen] = useState(false);
    const [isProductOpen, setIsProductOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const panelRef = useRef<HTMLDivElement>(null);
    const productRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (panelRef.current && !panelRef.current.contains(e.target as Node)) setIsPanelOpen(false);
            if (productRef.current && !productRef.current.contains(e.target as Node)) setIsProductOpen(false);
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const navItems = [
        { key: 'solutions',    href: getLocalizedPath('solutions', locale) },
        { key: 'integrations', href: getLocalizedPath('integrations', locale) },
        { key: 'pricing',      href: getLocalizedPath('pricing', locale) },
        { key: 'contact',      href: getLocalizedPath('contact', locale) },
    ];

    return (
        <header
            className="sticky top-0 z-50 h-16 backdrop-blur-xl border-b border-okp transition-all duration-300"
            style={{ backgroundColor: scrolled ? 'rgba(7,9,15,0.97)' : 'rgba(7,9,15,0.85)' }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex justify-between items-center h-full">

                    {/* ── Logo ── */}
                    <a href={getLocalizedPath('home', locale)} className="flex items-center gap-2.5 shrink-0">
                        <Image src="/logo.svg" alt="OxyKeyPass" width={0} height={0} priority className="h-6 w-auto shrink-0" />
                        <div className="flex flex-col leading-none">
                            <span className="font-display font-bold text-[0.9rem] text-[#E8EDF5] tracking-tight">OxyKeyPass</span>
                            <span className="text-[0.55rem] text-[#5A7090] font-mono tracking-widest uppercase">Geçiş Sistemleri</span>
                        </div>
                    </a>

                    {/* ── Desktop Nav ── */}
                    <nav className="hidden lg:flex items-center space-x-1">

                        {/* Ürün dropdown */}
                        <div className="relative" ref={productRef}>
                            <button
                                onClick={() => setIsProductOpen(!isProductOpen)}
                                className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium font-body text-[#5A7090] hover:text-[#F0EDE8] transition-colors duration-200"
                            >
                                {t('product')}
                                <ChevronDown
                                    className="w-3.5 h-3.5 transition-transform duration-200"
                                    style={{ transform: isProductOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                />
                            </button>

                            {isProductOpen && (
                                <div
                                    className="absolute left-0 top-full mt-2 w-72 rounded-xl overflow-hidden z-50"
                                    style={{
                                        backgroundColor: '#0D1117',
                                        border: '1px solid rgba(200,145,58,0.18)',
                                        boxShadow: '0 16px 40px rgba(0,0,0,0.5)',
                                    }}
                                >
                                    <div className="px-4 py-2.5 border-b" style={{ borderColor: 'rgba(200,145,58,0.1)' }}>
                                        <span className="section-label text-[0.55rem]">
                                            {locale === 'tr' ? 'Ürün Bileşenleri' : 'Product Components'}
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-px p-1" style={{ backgroundColor: 'rgba(200,145,58,0.06)' }}>
                                        {PRODUCT_ITEMS.map((item) => (
                                            <a
                                                key={item.key}
                                                href={getLocalizedPath(item.key, locale)}
                                                className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg hover:bg-[rgba(200,145,58,0.08)] transition-colors duration-150 m-0.5"
                                                style={{ backgroundColor: '#0D1117' }}
                                                onClick={() => setIsProductOpen(false)}
                                            >
                                                <item.icon className="w-4 h-4 text-[#C8913A] flex-shrink-0" />
                                                <span className="text-[#F0EDE8] text-xs font-medium font-body leading-tight">
                                                    {locale === 'tr' ? item.labelTr : item.labelEn}
                                                </span>
                                            </a>
                                        ))}
                                    </div>
                                    <a
                                        href={getLocalizedPath('product', locale)}
                                        className="flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-medium font-body text-[#C8913A] hover:bg-[rgba(200,145,58,0.06)] transition-colors border-t"
                                        style={{ borderColor: 'rgba(200,145,58,0.1)' }}
                                        onClick={() => setIsProductOpen(false)}
                                    >
                                        {locale === 'tr' ? 'Tüm Ürünü Gör' : 'View Full Product'}
                                        <ChevronDown className="w-3 h-3 -rotate-90" />
                                    </a>
                                </div>
                            )}
                        </div>

                        {/* Diğer nav öğeleri */}
                        {navItems.map((item) => (
                            <a
                                key={item.key}
                                href={item.href}
                                className="px-3 py-2 text-sm font-medium font-body text-[#5A7090] hover:text-[#F0EDE8] transition-colors duration-200"
                            >
                                {t(item.key)}
                            </a>
                        ))}
                    </nav>

                    {/* ── Right side ── */}
                    <div className="hidden lg:flex items-center space-x-3">
                        <LanguageSwitcher mobile={false} />

                        {/* Panel Dropdown */}
                        <div className="relative" ref={panelRef}>
                            <button
                                onClick={() => setIsPanelOpen(!isPanelOpen)}
                                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium font-body text-[#C8913A] border border-[rgba(200,145,58,0.4)] rounded-lg hover:bg-[rgba(200,145,58,0.08)] transition-all duration-200"
                            >
                                {locale === 'tr' ? 'Paneller' : 'Panels'}
                                <ChevronDown
                                    className="w-3.5 h-3.5 transition-transform duration-200"
                                    style={{ transform: isPanelOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                />
                            </button>

                            {isPanelOpen && (
                                <div
                                    className="absolute right-0 top-full mt-2 w-64 rounded-xl overflow-hidden z-50"
                                    style={{
                                        backgroundColor: '#0D1117',
                                        border: '1px solid rgba(200,145,58,0.18)',
                                        boxShadow: '0 16px 40px rgba(0,0,0,0.5)',
                                    }}
                                >
                                    <div className="px-4 py-2.5 border-b" style={{ borderColor: 'rgba(200,145,58,0.1)' }}>
                                        <span className="section-label text-[0.55rem]">
                                            {locale === 'tr' ? 'Yönetim Panelleri' : 'Management Panels'}
                                        </span>
                                    </div>
                                    {PANELS.map((panel) => (
                                        <a
                                            key={panel.key}
                                            href={panel.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 px-4 py-3 hover:bg-[rgba(200,145,58,0.06)] transition-colors duration-150 group"
                                            onClick={() => setIsPanelOpen(false)}
                                        >
                                            <div
                                                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                                                style={{ backgroundColor: 'rgba(200,145,58,0.1)', border: '1px solid rgba(200,145,58,0.2)' }}
                                            >
                                                <LayoutDashboard className="w-4 h-4 text-[#C8913A]" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="text-[#F0EDE8] text-sm font-medium font-body leading-none mb-0.5">
                                                    {locale === 'tr' ? panel.labelTr : panel.labelEn}
                                                </div>
                                                <div className="text-[#6B7A90] text-[0.65rem] font-mono truncate">
                                                    {panel.href.replace('https://', '')}
                                                </div>
                                            </div>
                                            <ExternalLink className="w-3.5 h-3.5 text-[#6B7A90] flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Hemen Başla */}
                        <a
                            href={locale === 'tr' ? '/basla' : `/${locale}/start`}
                            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold font-body rounded-lg transition-all duration-200"
                            style={{ backgroundColor: '#C8913A', color: '#07090F' }}
                            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#A8751F')}
                            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#C8913A')}
                        >
                            {locale === 'tr' ? 'Hemen Başla' : 'Get Started'}
                        </a>
                    </div>

                    {/* ── Mobile right ── */}
                    <div className="lg:hidden flex items-center space-x-3">
                        <LanguageSwitcher mobile={true} />
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-lg text-[#5A7090] hover:text-[#F0EDE8] hover:bg-white/5 transition-all duration-200"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* ── Mobile Drawer ── */}
            {isMenuOpen && (
                <div
                    className="lg:hidden absolute top-16 left-0 right-0 border-b border-okp"
                    style={{ backgroundColor: 'rgba(7,9,15,0.98)', backdropFilter: 'blur(20px)' }}
                >
                    <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">

                        {/* Ürün - mobile açılır liste */}
                        <div>
                            <button
                                onClick={() => setIsProductOpen(!isProductOpen)}
                                className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-[#5A7090] hover:text-[#F0EDE8] hover:bg-white/5 text-sm font-medium font-body transition-all duration-200"
                            >
                                {t('product')}
                                <ChevronDown
                                    className="w-4 h-4 transition-transform duration-200"
                                    style={{ transform: isProductOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                />
                            </button>
                            {isProductOpen && (
                                <div className="ml-4 mt-1 space-y-0.5">
                                    {PRODUCT_ITEMS.map((item) => (
                                        <a
                                            key={item.key}
                                            href={getLocalizedPath(item.key, locale)}
                                            className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-[#6B7A90] hover:text-[#F0EDE8] hover:bg-white/5 text-sm font-body transition-all duration-200"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <item.icon className="w-4 h-4 text-[#C8913A] flex-shrink-0" />
                                            {locale === 'tr' ? item.labelTr : item.labelEn}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>

                        {navItems.map((item) => (
                            <a
                                key={item.key}
                                href={item.href}
                                className="block px-4 py-3 rounded-lg text-[#5A7090] hover:text-[#F0EDE8] hover:bg-white/5 text-sm font-medium font-body transition-all duration-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {t(item.key)}
                            </a>
                        ))}

                        {/* Panels - mobile */}
                        <div className="pt-2 pb-1">
                            <div className="px-4 py-2">
                                <span className="section-label text-[0.55rem]">
                                    {locale === 'tr' ? 'Yönetim Panelleri' : 'Management Panels'}
                                </span>
                            </div>
                            {PANELS.map((panel) => (
                                <a
                                    key={panel.key}
                                    href={panel.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#F0EDE8] hover:bg-[rgba(200,145,58,0.07)] transition-all duration-200"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <LayoutDashboard className="w-4 h-4 text-[#C8913A] flex-shrink-0" />
                                    <span className="text-sm font-medium font-body">
                                        {locale === 'tr' ? panel.labelTr : panel.labelEn}
                                    </span>
                                    <ExternalLink className="w-3 h-3 text-[#6B7A90] ml-auto" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;

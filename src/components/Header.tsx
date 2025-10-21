'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { getLocalizedPath } from '@/utils/routes';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
    const t = useTranslations('navigation');
    const locale = useLocale();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigationItems = [
        { key: 'product', href: getLocalizedPath('product', locale) },
        { key: 'solutions', href: getLocalizedPath('solutions', locale) },
        { key: 'models', href: getLocalizedPath('models', locale) },
        { key: 'integrations', href: getLocalizedPath('integrations', locale) },
        { key: 'security', href: getLocalizedPath('security', locale) },
        { key: 'pricing', href: getLocalizedPath('pricing', locale) },
        { key: 'contact', href: getLocalizedPath('contact', locale) },
    ];

    return (
        <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a href={getLocalizedPath('home', locale)} className="flex items-center space-x-4">
                            <Image
                                src="/logo.svg"
                                alt="OxyKeyPass Logo"
                                width={130}
                                height={28}
                                className="text-white"
                            />
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-2">
                        {navigationItems.map((item) => (
                            <a
                                key={item.key}
                                href={item.href}
                                className="relative text-corporate-gray-dark hover:text-navy px-4 py-2 text-sm font-semibold font-body transition-all duration-300 group"
                            >
                                {t(item.key)}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-navy transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </nav>

                    {/* Language Switcher & Mobile Menu Button */}
                    <div className="flex items-center space-x-4">
                        <LanguageSwitcher mobile={false} />

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 rounded-md text-corporate-gray-dark hover:text-navy hover:bg-corporate-gray"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-4 pt-4 pb-6 space-y-2 bg-white border-t border-gray-200 shadow-lg">
                            {navigationItems.map((item) => (
                                <a
                                    key={item.key}
                                    href={item.href}
                                    className="text-corporate-gray-dark hover:text-navy block px-4 py-3 rounded-lg text-base font-semibold font-body transition-all duration-300 hover:bg-corporate-gray"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {t(item.key)}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;

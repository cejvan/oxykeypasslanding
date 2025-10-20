'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { getLocalizedPath } from '@/utils/routes';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
    const t = useTranslations('navigation');
    const locale = useLocale();

    const navigationItems = [
        { key: 'product', href: getLocalizedPath('product', locale) },
        { key: 'solutions', href: getLocalizedPath('solutions', locale) },
        { key: 'models', href: getLocalizedPath('models', locale) },
        { key: 'integrations', href: getLocalizedPath('integrations', locale) },
        { key: 'security', href: getLocalizedPath('security', locale) },
        { key: 'pricing', href: getLocalizedPath('pricing', locale) },
        { key: 'resources', href: getLocalizedPath('resources', locale) },
        { key: 'contact', href: getLocalizedPath('contact', locale) },
    ];

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-navy text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center space-x-3 mb-4">
                            <Image
                                src="/logo-light.svg"
                                alt="OxyKeyPass Logo"
                                width={130}
                                height={28}
                                className="text-white"
                            />
                            <span className="text-xl font-bold font-heading">OxyKeyPass</span>
                        </div>
                        <p className="text-gray-300 mb-6 max-w-md">
                            {locale === 'tr'
                                ? 'Şirketlerin kendi dijital platformlarını oluşturabileceği, müşteri yönetimi yapabileceği ve ürün/hizmet satışı gerçekleştirebileceği kapsamlı kurumsal SaaS çözümü.'
                                : 'Comprehensive corporate SaaS solution that enables companies to create their own digital platforms, manage customers, and sell products/services.'
                            }
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Globe className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            {locale === 'tr' ? 'Hızlı Linkler' : 'Quick Links'}
                        </h3>
                        <ul className="space-y-2">
                            {navigationItems.map((item) => (
                                <li key={item.key}>
                                    <a
                                        href={item.href}
                                        className="text-gray-300 hover:text-white transition-colors duration-200"
                                    >
                                        {t(item.key)}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            {locale === 'tr' ? 'İletişim' : 'Contact'}
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <Mail className="w-4 h-4 text-blue-400" />
                                <span className="text-gray-300">info@oxykeypass.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="w-4 h-4 text-blue-400" />
                                <span className="text-gray-300">0534 481 89 32</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <MapPin className="w-4 h-4 text-blue-400" />
                                <span className="text-gray-300">Izzettin Çalışlar Cad. No:35/12 Bahçelievler Istanbul</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            © {currentYear} OxyKeyPass. {locale === 'tr' ? 'Tüm hakları saklıdır.' : 'All rights reserved.'}
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                                {locale === 'tr' ? 'Gizlilik Politikası' : 'Privacy Policy'}
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                                {locale === 'tr' ? 'Kullanım Şartları' : 'Terms of Service'}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

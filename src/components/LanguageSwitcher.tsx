'use client';

import { useParams, usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { ROUTES, getRouteKeyFromPath } from '@/utils/routes';

const languages = [
    { code: 'tr', name: 'Türkçe',  flag: '/flags/tr.svg' },
    { code: 'en', name: 'English', flag: '/flags/us.svg' },
    { code: 'es', name: 'Español', flag: '/flags/es.svg' },
    { code: 'fr', name: 'Français',flag: '/flags/fr.svg' },
    { code: 'de', name: 'Deutsch', flag: '/flags/de.svg' },
];

const LangButton = ({ mobile }: { mobile: boolean }) => {
    const params = useParams();
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const currentLocale = (params.locale as string) || 'tr';

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const getCurrentRouteKey = () => {
        if (pathname === '/' || pathname === `/${currentLocale}`) return 'home';
        const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}(\/|$)/, '/');
        const pathSegment = pathWithoutLocale.replace(/^\//, '');
        return getRouteKeyFromPath(pathSegment, currentLocale) || 'home';
    };

    const currentRouteKey = getCurrentRouteKey();
    const selectedLang = languages.find(l => l.code === currentLocale) || languages[0];

    const getLocalizedUrl = (locale: string) => {
        if (currentRouteKey === 'home') return locale === 'tr' ? '/' : `/${locale}`;
        const path = ROUTES[currentRouteKey as keyof typeof ROUTES]?.[locale as keyof typeof ROUTES[keyof typeof ROUTES]];
        return path ? `/${locale}/${path}` : `/${locale}`;
    };

    return (
        <div className="relative inline-block" ref={ref}>
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-all duration-200"
                style={{
                    backgroundColor: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(200,145,58,0.2)',
                }}
            >
                <Image
                    src={selectedLang.flag}
                    alt={selectedLang.name}
                    width={18}
                    height={18}
                    className="rounded-sm flex-shrink-0"
                    style={{ width: '18px', height: '18px' }}
                />
                {!mobile && (
                    <span className="text-[#8A9AB0] text-xs font-mono uppercase tracking-wider">
                        {selectedLang.code}
                    </span>
                )}
                <ChevronDown
                    className="w-3 h-3 text-[#5A7090] transition-transform duration-200"
                    style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
            </button>

            {open && (
                <div
                    className={`absolute top-full mt-2 w-44 rounded-xl overflow-hidden z-50 ${mobile ? 'right-0' : 'right-0'}`}
                    style={{
                        backgroundColor: '#0D1117',
                        border: '1px solid rgba(200,145,58,0.18)',
                        boxShadow: '0 16px 40px rgba(0,0,0,0.5)',
                    }}
                >
                    {languages.map(lang => {
                        const isActive = lang.code === currentLocale;
                        return (
                            <a
                                key={lang.code}
                                href={getLocalizedUrl(lang.code)}
                                onClick={() => setOpen(false)}
                                className="flex items-center gap-3 px-4 py-2.5 transition-colors duration-150"
                                style={{
                                    backgroundColor: isActive ? 'rgba(200,145,58,0.08)' : 'transparent',
                                    borderLeft: isActive ? '2px solid rgba(200,145,58,0.6)' : '2px solid transparent',
                                }}
                            >
                                <Image
                                    src={lang.flag}
                                    alt={lang.name}
                                    width={18}
                                    height={18}
                                    className="rounded-sm flex-shrink-0"
                                    style={{ width: '18px', height: '18px' }}
                                />
                                <span className={`text-sm font-body ${isActive ? 'text-[#C8913A]' : 'text-[#8A9AB0] hover:text-[#E8EDF5]'}`}>
                                    {lang.name}
                                </span>
                                {isActive && (
                                    <span className="ml-auto text-[#C8913A] text-xs font-mono">✓</span>
                                )}
                            </a>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default LangButton;

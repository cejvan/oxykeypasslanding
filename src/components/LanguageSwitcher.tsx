'use client';

import { useParams, usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { ROUTES, getRouteKeyFromPath } from "@/utils/routes";


const languages = [
  { code: "tr", name: "Türkçe", flag: "/flags/tr.svg" },
  { code: "en", name: "English", flag: "/flags/us.svg" },
  { code: "es", name: "Español", flag: "/flags/es.svg" },
  { code: "fr", name: "Français", flag: "/flags/fr.svg" },
  { code: "de", name: "Deutsch", flag: "/flags/de.svg" },
];

const LangButton = ({ mobile }: { mobile: boolean }) => {
  const params = useParams();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Şu anki dil segmenti
  const currentLocale = params.locale || "tr";

  // Mevcut sayfanın route key'ini bul
  const getCurrentRouteKey = () => {
    // Ana sayfa kontrolü
    if (pathname === "/" || pathname === `/${currentLocale}`) {
      return "home";
    }
    
    // Path'den dil segmentini çıkar
    const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}(\/|$)/, "/");
    const pathSegment = pathWithoutLocale.replace(/^\//, "");
    
    // Route key'i bul
    return getRouteKeyFromPath(pathSegment, currentLocale) || "home";
  };

  const currentRouteKey = getCurrentRouteKey();

  // Şu anki dilin flag'i:
  const selectedLang = languages.find(l => l.code === currentLocale)?.flag || "/flags/tr.svg";

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center p-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
      >
        <Image className="h-5 w-5 rounded-sm" src={selectedLang} alt="flag" width={20} height={20} />
      </button>

      {open && (
        <div className={`absolute top-full right-0 mt-2 w-40 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-50 ${mobile ? "translate-x-[80%]" : "translate-x-[0%]"}`}>
          {languages.map((lang) => {
            // Her dil için doğru URL'yi oluştur
            const getLocalizedUrl = (locale: string) => {
              if (currentRouteKey === "home") {
                return locale === "tr" ? "/" : `/${locale}`;
              }
              const path = ROUTES[currentRouteKey as keyof typeof ROUTES]?.[locale as keyof typeof ROUTES[keyof typeof ROUTES]];
              if (path) {
                return `/${locale}/${path}`;
              }
              return `/${locale}`;
            };

            const isActive = lang.code === currentLocale;

            return (
              <a
                href={getLocalizedUrl(lang.code)}
                key={lang.code}
                className={`flex items-center w-full px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 text-sm transition-all duration-200 ${
                  isActive ? 'bg-blue-50 text-blue-700 font-semibold border-l-4 border-blue-500' : 'hover:border-l-4 hover:border-blue-200'
                }`}
                onClick={() => setOpen(false)}
              >
                <Image src={lang.flag} alt={lang.name} width={20} height={20} className="rounded-sm" />
                <span className="ml-3 font-medium">{lang.name}</span>
                {isActive && <span className="ml-auto text-blue-600 text-xs">✓</span>}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LangButton;

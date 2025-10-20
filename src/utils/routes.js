// src/utils/routes.js
export const ROUTES = {
    home: {
        tr: "",
        en: "",
        es: "",
        fr: "",
        de: "",
    },
    product: {
        tr: "urun",
        en: "product",
        es: "producto",
        fr: "produit",
        de: "produkt",
    },
    solutions: {
        tr: "cozumler",
        en: "solutions",
        es: "soluciones",
        fr: "solutions",
        de: "loesungen",
    },
    models: {
        tr: "modeller",
        en: "models",
        es: "modelos",
        fr: "modeles",
        de: "modelle",
    },
    integrations: {
        tr: "entegrasyonlar",
        en: "integrations",
        es: "integraciones",
        fr: "integrations",
        de: "integrationen",
    },
    security: {
        tr: "guvenlik-uyumluluk",
        en: "security-compliance",
        es: "seguridad-cumplimiento",
        fr: "securite-conformite",
        de: "sicherheit-compliance",
    },
    pricing: {
        tr: "fiyatlandirma",
        en: "pricing",
        es: "precios",
        fr: "tarifs",
        de: "preise",
    },
    resources: {
        tr: "kaynaklar",
        en: "resources",
        es: "recursos",
        fr: "ressources",
        de: "ressourcen",
    },
    contact: {
        tr: "iletisim",
        en: "contact",
        es: "contacto",
        fr: "contact",
        de: "kontakt"
    }
    // ...diğer rotalar buraya
};

export function getLocalizedPath(routeKey, locale) {
    if (ROUTES[routeKey] && ROUTES[routeKey][locale] !== undefined) {
        const path = ROUTES[routeKey][locale];
        // Home route için özel durum
        if (path === "") {
            return locale === "tr" ? "/" : `/${locale}`;
        }
        return `/${locale}/${path}`;
    }
    // fallback
    return `/${locale}/${routeKey}`;
}

export function getRouteKeyFromPath(pathSegment, locale) {
    // Önce belirtilen locale'de ara
    for (const key in ROUTES) {
        if (ROUTES[key][locale] === pathSegment) return key;
    }
    
    // Eğer bulunamazsa, diğer locale'lerde de ara
    for (const key in ROUTES) {
        for (const otherLocale in ROUTES[key]) {
            if (ROUTES[key][otherLocale] === pathSegment) return key;
        }
    }
    
    return null;
}
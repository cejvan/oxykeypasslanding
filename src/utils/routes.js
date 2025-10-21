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
    contact: {
        tr: "iletisim",
        en: "contact",
        es: "contacto",
        fr: "contact",
        de: "kontakt"
    },
    // Product subpages
    "product/mobile-app": {
        tr: "urun/mobil-uygulama",
        en: "product/mobile-app",
        es: "producto/aplicacion-movil",
        fr: "produit/application-mobile",
        de: "produkt/mobile-app"
    },
    "product/general-api": {
        tr: "urun/genel-api",
        en: "product/general-api",
        es: "producto/api-general",
        fr: "produit/api-generale",
        de: "produkt/general-api"
    },
    "product/device-integration": {
        tr: "urun/cihaz-entegrasyonu",
        en: "product/device-integration",
        es: "producto/integracion-dispositivos",
        fr: "produit/integration-appareils",
        de: "produkt/geraete-integration"
    },
    "product/admin-panels": {
        tr: "urun/yonetim-paneli",
        en: "product/admin-panels",
        es: "producto/paneles-administracion",
        fr: "produit/panneaux-administration",
        de: "produkt/admin-panels"
    },
    "product/company-api": {
        tr: "urun/firma-api",
        en: "product/company-api",
        es: "producto/api-empresa",
        fr: "produit/api-entreprise",
        de: "produkt/unternehmen-api"
    },
    "product/workflow": {
        tr: "urun/koordinasyon",
        en: "product/workflow",
        es: "producto/flujo-trabajo",
        fr: "produit/flux-travail",
        de: "produkt/arbeitsablauf"
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
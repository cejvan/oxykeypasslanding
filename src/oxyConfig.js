export const Company = {
    _id: "680de94952d0fbf76fa00fdc",
    domain: "oxykeypass.com",
    colors: {
        primary: "#C8913A",
        secondary: "#6B7280",
        background: "#07090F"
    }
}

/**
 * Tüm yönetim panellerinin merkezi listesi.
 * Header dropdown, Footer ve SolutionsPage buradan çeker.
 */
export const PANELS = [
    {
        key: 'sitepanel',
        labelTr: 'Site Yönetim Paneli',
        labelEn: 'Site Management Panel',
        descTr: 'Siteler, daireler, kiracılar, faturalar ve erişim kontrolü',
        descEn: 'Sites, units, tenants, invoices and access control',
        href: 'https://oxykeypass.com/sitepanel',
        tag: 'SITE',
    },
]
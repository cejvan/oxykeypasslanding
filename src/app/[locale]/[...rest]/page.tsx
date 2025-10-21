import { notFound } from "next/navigation";
import { getRouteKeyFromPath } from "@/utils/routes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactPage from "@/components/pages/ContactPage";
import ProductPage from "@/components/pages/ProductPage";
import SolutionsPage from "@/components/pages/SolutionsPage";
import MobileAppPage from "@/components/pages/product/MobileAppPage";
import GeneralApiPage from "@/components/pages/product/GeneralApiPage";
import DeviceIntegrationPage from "@/components/pages/product/DeviceIntegrationPage";
import AdminPanelsPage from "@/components/pages/product/AdminPanelsPage";
import CompanyApiPage from "@/components/pages/product/CompanyApiPage";
import WorkflowPage from "@/components/pages/product/WorkflowPage";
import ModelsPage from "@/components/pages/ModelsPage";
import IntegrationsPage from "@/components/pages/IntegrationsPage";
import SecurityPage from "@/components/pages/SecurityPage";
import PricingPage from "@/components/pages/PricingPage";

const DEFAULT_LOCALE = "tr";

type Params = {
  locale: string;
  rest?: string[];
};

type DynamicPageProps = {
  params: Promise<Params>;
};

export default async function DynamicPage({ params }: DynamicPageProps) {
  const { locale, rest } = await params;
  const pageSegment = Array.isArray(rest) && rest.length > 0 ? rest[0] : "";
  const routeKey = getRouteKeyFromPath(pageSegment, locale || DEFAULT_LOCALE);

  // Layout wrapper component
  const PageWrapper = ({ children }: { children: React.ReactNode }) => (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );


  // /[locale]/product
  if (routeKey === "product" && Array.isArray(rest) && rest.length === 1) {
    return (
      <PageWrapper>
        <ProductPage />
      </PageWrapper>
    );
  }

  // /[locale]/product/mobile-app or /[locale]/urun/mobil-uygulama
  if (routeKey === "product" && Array.isArray(rest) && rest.length === 2 && (rest[1] === "mobile-app" || rest[1] === "mobil-uygulama")) {
    return (
      <PageWrapper>
        <MobileAppPage locale={locale} />
      </PageWrapper>
    );
  }

  // /[locale]/product/general-api or /[locale]/urun/genel-api
  if (routeKey === "product" && Array.isArray(rest) && rest.length === 2 && (rest[1] === "general-api" || rest[1] === "genel-api")) {
    return (
      <PageWrapper>
        <GeneralApiPage locale={locale} />
      </PageWrapper>
    );
  }

  // /[locale]/product/device-integration or /[locale]/urun/cihaz-entegrasyonu
  if (routeKey === "product" && Array.isArray(rest) && rest.length === 2 && (rest[1] === "device-integration" || rest[1] === "cihaz-entegrasyonu")) {
    return (
      <PageWrapper>
        <DeviceIntegrationPage locale={locale} />
      </PageWrapper>
    );
  }

  // /[locale]/product/admin-panels or /[locale]/urun/yonetim-paneli
  if (routeKey === "product" && Array.isArray(rest) && rest.length === 2 && (rest[1] === "admin-panels" || rest[1] === "yonetim-paneli")) {
    return (
      <PageWrapper>
        <AdminPanelsPage locale={locale} />
      </PageWrapper>
    );
  }

  // /[locale]/product/company-api or /[locale]/urun/firma-api
  if (routeKey === "product" && Array.isArray(rest) && rest.length === 2 && (rest[1] === "company-api" || rest[1] === "firma-api")) {
    return (
      <PageWrapper>
        <CompanyApiPage locale={locale} />
      </PageWrapper>
    );
  }

  // /[locale]/product/workflow or /[locale]/urun/koordinasyon
  if (routeKey === "product" && Array.isArray(rest) && rest.length === 2 && (rest[1] === "workflow" || rest[1] === "koordinasyon")) {
    return (
      <PageWrapper>
        <WorkflowPage locale={locale} />
      </PageWrapper>
    );
  }

  // /[locale]/solutions
  if (routeKey === "solutions" && Array.isArray(rest) && rest.length === 1) {
    return (
      <PageWrapper>
        <SolutionsPage locale={locale} />
      </PageWrapper>
    );
  }

  // /[locale]/models
  if (routeKey === "models" && Array.isArray(rest) && rest.length === 1) {
    return (
      <PageWrapper>
        <ModelsPage locale={locale} />
      </PageWrapper>
    );
  }

  // /[locale]/integrations
  if (routeKey === "integrations" && Array.isArray(rest) && rest.length === 1) {
    return (
      <PageWrapper>
        <IntegrationsPage locale={locale} />
      </PageWrapper>
    );
  }

  // /[locale]/security
  if (routeKey === "security" && Array.isArray(rest) && rest.length === 1) {
    return (
      <PageWrapper>
        <SecurityPage locale={locale} />
      </PageWrapper>
    );
  }

  // /[locale]/pricing
  if (routeKey === "pricing" && Array.isArray(rest) && rest.length === 1) {
    return (
      <PageWrapper>
        <PricingPage locale={locale} />
      </PageWrapper>
    );
  }

  // /[locale]/contact
  if (routeKey === "contact" && Array.isArray(rest) && rest.length === 1) {
    return (
      <PageWrapper>
        <ContactPage />
      </PageWrapper>
    );
  }

  // Other navigation routes (coming soon pages)
  // No coming soon pages currently

  return notFound();
}

// removed legacy About content

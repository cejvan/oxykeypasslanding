import { notFound } from "next/navigation";
import { getRouteKeyFromPath } from "@/utils/routes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactPage from "@/components/pages/ContactPage";
import ProductPage from "@/components/pages/ProductPage";
import { getTranslations } from "next-intl/server";
import { Clock } from "lucide-react";
import Hero from '@/components/Hero';
import { getLocalizedPath } from '@/utils/routes';

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

  // Generic simple page renderer for new tabs
  const renderSimplePage = async (key: string) => {
    const tNav = await getTranslations({ locale, namespace: "navigation" });
    const title = tNav(key as any);
    const breadcrumbs = [
      { label: tNav('home'), href: getLocalizedPath('home', locale) },
      { label: title }
    ];
    return (
      <PageWrapper>
        <Hero
          title={title}
          subtitle={'Coming soon.'}
          icon={<Clock className="w-8 h-8 text-blue-600" />}
          align="left"
          breadcrumbs={breadcrumbs}
          backgroundImageUrl="https://images.unsplash.com/photo-1521540216272-a50305cd4421?auto=format&fit=crop&w=1920&q=80"
        />
      </PageWrapper>
    );
  };

  // /[locale]/product
  if (routeKey === "product" && Array.isArray(rest) && rest.length === 1) {
    return (
      <PageWrapper>
        <ProductPage />
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
  if (
    [
      "solutions",
      "models",
      "integrations",
      "security",
      "pricing",
      "resources",
    ].includes(routeKey || "") && Array.isArray(rest) && rest.length === 1
  ) {
    return await renderSimplePage(routeKey!);
  }

  return notFound();
}

// removed legacy About content

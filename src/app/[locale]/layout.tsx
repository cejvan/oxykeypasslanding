import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { jsonLdScriptProps } from "react-schemaorg";
import { WebSite } from "schema-dts";
import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "Metadata" });
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <meta name="theme-color" content="#000000" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="canonical"
          href={`https://next-app-i18n-starter.vercel.app`}
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://next-app-i18n-starter.vercel.app"
        />
        <link
          rel="alternate"
          hrefLang="tr"
          href="https://oxykeypass.com"
        />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://oxykeypass.com/en"
        />
        <meta name="keywords" content={t("keywords")} />
        <meta name="author" content="OxyKeyPass" />
        <meta name="robots" content="index, follow" />
        <script
          {...jsonLdScriptProps<WebSite>({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: t("title"),
            description: t("description"),
            url: "https://next-app-i18n-starter.vercel.app",
            inLanguage: locale,
          })}
        />
      </head>
          <body
            className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable} antialiased`}
            suppressHydrationWarning
          >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

const locales = ["tr", "en"] as const;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    other: {
      "google-site-verification": "sVYBYfSJfXdBca3QoqsZtD6lsWVH6sk02RCH4YAbcm8",
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `https://next-app-i18n-starter.vercel.app`,
      siteName: "Next.js i18n Template",
      images: [
        {
          url: "https://next-app-i18n-starter.vercel.app/og-image.png",
          width: 1200,
          height: 630,
          alt: t("title"),
        },
      ],
      locale: locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["https://next-app-i18n-starter.vercel.app/og-image.png"],
      creator: "@s0ver5",
    },
    alternates: {
      canonical: `https://next-app-i18n-starter.vercel.app`,
      languages: {
        tr: "https://oxykeypass.com",
        en: "https://oxykeypass.com/en",
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

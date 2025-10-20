import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import Welcoming from "@/components/pages/Welcoming";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Welcoming />
      </main>
      <Footer />
    </div>
  );
}

'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { getLocalizedPath } from '@/utils/routes';
import Hero from '@/components/Hero';
import { 
  Shield, 
  Smartphone, 
  QrCode, 
  Clock, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Award,
  Zap
} from 'lucide-react';

const ProductPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const t = useTranslations("product");
  const locale = useLocale();

  const features = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: t("features.mobileApp.title"),
      description: t("features.mobileApp.description")
    },
    {
      icon: <QrCode className="w-8 h-8" />,
      title: t("features.qrCode.title"),
      description: t("features.qrCode.description")
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: t("features.security.title"),
      description: t("features.security.description")
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: t("features.timeTracking.title"),
      description: t("features.timeTracking.description")
    }
  ];

  const benefits = [
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: t("benefits.userFriendly.title"),
      description: t("benefits.userFriendly.description")
    },
    {
      icon: <Zap className="w-6 h-6 text-green-600" />,
      title: t("benefits.quickSetup.title"),
      description: t("benefits.quickSetup.description")
    },
    {
      icon: <Award className="w-6 h-6 text-purple-600" />,
      title: t("benefits.certified.title"),
      description: t("benefits.certified.description")
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-orange-600" />,
      title: t("benefits.compliant.title"),
      description: t("benefits.compliant.description")
    }
  ];


  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero
        title={t("title")}
        subtitle={t("subtitle")}
        breadcrumbs={[
          { label: t("navigation.home"), href: getLocalizedPath("home", locale) },
          { label: t("navigation.product") }
        ]}
        ctas={[
          {
            label: t("freeTrial"),
            href: getLocalizedPath("contact", locale),
            variant: "primary"
          },
          {
            label: t("downloadDemo"),
            href: getLocalizedPath("contact", locale),
            variant: "outline"
          }
        ]}
        backgroundImageUrl="https://images.unsplash.com/photo-1521540216272-a50305cd4421?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("whyOxyKeyPass")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t("whyOxyKeyPassDesc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                  activeFeature === index 
                    ? 'border-blue-500 bg-blue-50 shadow-lg' 
                    : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("benefits.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t("benefits.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t("cta.title")}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t("cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={getLocalizedPath("contact", locale)}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              {t("cta.startFreeTrial")}
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href={getLocalizedPath("contact", locale)}
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              {t("cta.requestDemo")}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;

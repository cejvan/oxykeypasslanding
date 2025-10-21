'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { getLocalizedPath } from '@/utils/routes';
import Hero from '@/components/Hero';
import {
  Shield,
  Smartphone,
  Users,
  CheckCircle,
  ArrowRight,
  Award,
  Zap,
  Settings,
  Building,
  Factory,
  Hospital,
  GraduationCap,
  Warehouse,
  ShoppingBag,
  Star,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const ProductPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const t = useTranslations("product");
  const locale = useLocale();

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
        backgroundImageUrl=""
      />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("modules.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t("modules.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mobile App Module */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-blue-600 mb-6">
                <Smartphone className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t("modules.mobileApp.title")}
              </h3>
              <p className="text-gray-700 mb-6">
                {t("modules.mobileApp.description")}
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  t("modules.mobileApp.features.0"),
                  t("modules.mobileApp.features.1"),
                  t("modules.mobileApp.features.2"),
                  t("modules.mobileApp.features.3")
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={getLocalizedPath("product/mobile-app", locale)}
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                {t("viewDetails")}
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>

            {/* General API Module */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-orange-600 mb-6">
                <Zap className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t("modules.generalApi.title")}
              </h3>
              <p className="text-gray-700 mb-6">
                {t("modules.generalApi.description")}
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  t("modules.generalApi.features.0"),
                  t("modules.generalApi.features.1"),
                  t("modules.generalApi.features.2"),
                  t("modules.generalApi.features.3")
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={getLocalizedPath("product/general-api", locale)}
                className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors"
              >
                {t("viewDetails")}
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>

            {/* Device Integration Module */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-purple-600 mb-6">
                <Shield className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t("modules.deviceIntegration.title")}
              </h3>
              <p className="text-gray-700 mb-6">
                {t("modules.deviceIntegration.description")}
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  t("modules.deviceIntegration.features.0"),
                  t("modules.deviceIntegration.features.1"),
                  t("modules.deviceIntegration.features.2"),
                  t("modules.deviceIntegration.features.3")
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={getLocalizedPath("product/device-integration", locale)}
                className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors"
              >
                {t("viewDetails")}
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>

            {/* Admin Panels Module */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow md:col-start-1 md:col-end-2">
              <div className="text-green-600 mb-6">
                <Settings className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t("modules.adminPanels.title")}
              </h3>
              <p className="text-gray-700 mb-6">
                {t("modules.adminPanels.description")}
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  t("modules.adminPanels.features.0"),
                  t("modules.adminPanels.features.1"),
                  t("modules.adminPanels.features.2"),
                  t("modules.adminPanels.features.3")
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={getLocalizedPath("product/admin-panels", locale)}
                className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                {t("viewDetails")}
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>

            {/* Company API Module */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow md:col-start-2 md:col-end-3">
              <div className="text-red-600 mb-6">
                <Building className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t("modules.companyApi.title")}
              </h3>
              <p className="text-gray-700 mb-6">
                {t("modules.companyApi.description")}
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  t("modules.companyApi.features.0"),
                  t("modules.companyApi.features.1"),
                  t("modules.companyApi.features.2"),
                  t("modules.companyApi.features.3")
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={getLocalizedPath("product/company-api", locale)}
                className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors"
              >
                {t("viewDetails")}
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>

            {/* Workflow Module */}
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow md:col-start-3 md:col-end-4">
              <div className="text-indigo-600 mb-6">
                <ArrowRight className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t("modules.workflow.title")}
              </h3>
              <p className="text-gray-700 mb-6">
                {t("modules.workflow.description")}
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  t("modules.workflow.features.0"),
                  t("modules.workflow.features.1"),
                  t("modules.workflow.features.2"),
                  t("modules.workflow.features.3")
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={getLocalizedPath("product/workflow", locale)}
                className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
              >
                {t("viewDetails")}
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
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


      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("howItWorks.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t("howItWorks.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Settings className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t("howItWorks.steps.step1.title")}
              </h3>
              <p className="text-gray-600">
                {t("howItWorks.steps.step1.description")}
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t("howItWorks.steps.step2.title")}
              </h3>
              <p className="text-gray-600">
                {t("howItWorks.steps.step2.description")}
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t("howItWorks.steps.step3.title")}
              </h3>
              <p className="text-gray-600">
                {t("howItWorks.steps.step3.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("useCases.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t("useCases.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <Building className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t("useCases.cases.office.title")}
              </h3>
              <p className="text-gray-600">
                {t("useCases.cases.office.description")}
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <Factory className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t("useCases.cases.factory.title")}
              </h3>
              <p className="text-gray-600">
                {t("useCases.cases.factory.description")}
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <Hospital className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t("useCases.cases.hospital.title")}
              </h3>
              <p className="text-gray-600">
                {t("useCases.cases.hospital.description")}
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <GraduationCap className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t("useCases.cases.school.title")}
              </h3>
              <p className="text-gray-600">
                {t("useCases.cases.school.description")}
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <Warehouse className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t("useCases.cases.warehouse.title")}
              </h3>
              <p className="text-gray-600">
                {t("useCases.cases.warehouse.description")}
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <ShoppingBag className="w-12 h-12 text-pink-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t("useCases.cases.retail.title")}
              </h3>
              <p className="text-gray-600">
                {t("useCases.cases.retail.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("technicalSpecs.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t("technicalSpecs.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t("technicalSpecs.specs.security.title")}
              </h3>
              <ul className="space-y-2">
                {[
                  t("technicalSpecs.specs.security.items.0"),
                  t("technicalSpecs.specs.security.items.1"),
                  t("technicalSpecs.specs.security.items.2"),
                  t("technicalSpecs.specs.security.items.3")
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
              <Zap className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t("technicalSpecs.specs.performance.title")}
              </h3>
              <ul className="space-y-2">
                {[
                  t("technicalSpecs.specs.performance.items.0"),
                  t("technicalSpecs.specs.performance.items.1"),
                  t("technicalSpecs.specs.performance.items.2"),
                  t("technicalSpecs.specs.performance.items.3")
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6">
              <Settings className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t("technicalSpecs.specs.integration.title")}
              </h3>
              <ul className="space-y-2">
                {[
                  t("technicalSpecs.specs.integration.items.0"),
                  t("technicalSpecs.specs.integration.items.1"),
                  t("technicalSpecs.specs.integration.items.2"),
                  t("technicalSpecs.specs.integration.items.3")
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6">
              <Award className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t("technicalSpecs.specs.support.title")}
              </h3>
              <ul className="space-y-2">
                {[
                  t("technicalSpecs.specs.support.items.0"),
                  t("technicalSpecs.specs.support.items.1"),
                  t("technicalSpecs.specs.support.items.2"),
                  t("technicalSpecs.specs.support.items.3")
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("testimonials.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t("testimonials.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                &ldquo;{t("testimonials.reviews.review1.content")}&rdquo;
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{t("testimonials.reviews.review1.name")}</p>
                <p className="text-sm text-gray-600">{t("testimonials.reviews.review1.position")}</p>
                <p className="text-sm text-blue-600">{t("testimonials.reviews.review1.company")}</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                &ldquo;{t("testimonials.reviews.review2.content")}&rdquo;
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{t("testimonials.reviews.review2.name")}</p>
                <p className="text-sm text-gray-600">{t("testimonials.reviews.review2.position")}</p>
                <p className="text-sm text-blue-600">{t("testimonials.reviews.review2.company")}</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                &ldquo;{t("testimonials.reviews.review3.content")}&rdquo;
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{t("testimonials.reviews.review3.name")}</p>
                <p className="text-sm text-gray-600">{t("testimonials.reviews.review3.position")}</p>
                <p className="text-sm text-blue-600">{t("testimonials.reviews.review3.company")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("faq.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t("faq.subtitle")}
            </p>
          </div>

          <div className="space-y-4">
            {[
              { q: "q1", question: t("faq.questions.q1.question"), answer: t("faq.questions.q1.answer") },
              { q: "q2", question: t("faq.questions.q2.question"), answer: t("faq.questions.q2.answer") },
              { q: "q3", question: t("faq.questions.q3.question"), answer: t("faq.questions.q3.answer") },
              { q: "q4", question: t("faq.questions.q4.question"), answer: t("faq.questions.q4.answer") },
              { q: "q5", question: t("faq.questions.q5.question"), answer: t("faq.questions.q5.answer") }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
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

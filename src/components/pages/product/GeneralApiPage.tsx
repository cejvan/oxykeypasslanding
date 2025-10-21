import React from 'react';
import { useTranslations } from 'next-intl';
import { getLocalizedPath } from '@/utils/routes';
import Hero from '@/components/Hero';
import { 
  Zap, 
  Shield, 
  Users, 
  Building, 
  CheckCircle, 
  ArrowRight,
  Server,
  Lock,
  Globe,
  Database
} from 'lucide-react';

interface GeneralApiPageProps {
  locale: string;
}

const GeneralApiPage: React.FC<GeneralApiPageProps> = ({ locale }) => {
  const t = useTranslations('product');


  return (
    <>
      <Hero
        title={t('modules.generalApi.title')}
        subtitle={t('modules.generalApi.description')}
        ctas={[
          {
            label: t('freeTrial'),
            href: getLocalizedPath('contact', locale),
            variant: 'primary'
          }
        ]}
        align="left"
      />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('generalApiPage.features.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('generalApiPage.features.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Kullanıcı Kimlik Doğrulama */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
              <div className="text-blue-600 mb-6 flex justify-center">
                <Users className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('generalApiPage.features.authentication.title')}</h3>
              <p className="text-gray-700">
                {t('generalApiPage.features.authentication.description')}
              </p>
            </div>

            {/* Şirket Yönlendirme */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center">
              <div className="text-green-600 mb-6 flex justify-center">
                <Building className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('generalApiPage.features.routing.title')}</h3>
              <p className="text-gray-700">
                {t('generalApiPage.features.routing.description')}
              </p>
            </div>

            {/* Güvenli İletişim */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center">
              <div className="text-orange-600 mb-6 flex justify-center">
                <Lock className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('generalApiPage.features.security.title')}</h3>
              <p className="text-gray-700">
                {t('generalApiPage.features.security.description')}
              </p>
            </div>

            {/* Merkezi Yönetim */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center">
              <div className="text-purple-600 mb-6 flex justify-center">
                <Server className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('generalApiPage.features.management.title')}</h3>
              <p className="text-gray-700">
                {t('generalApiPage.features.management.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('generalApiPage.architecture.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('generalApiPage.architecture.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('generalApiPage.architecture.centralHub.title')}</h3>
              <p className="text-gray-700">
                {t('generalApiPage.architecture.centralHub.description')}
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('generalApiPage.architecture.userManagement.title')}</h3>
              <p className="text-gray-700">
                {t('generalApiPage.architecture.userManagement.description')}
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('generalApiPage.architecture.companyRouting.title')}</h3>
              <p className="text-gray-700">
                {t('generalApiPage.architecture.companyRouting.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('generalApiPage.architecture.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('generalApiPage.architecture.subtitle')}
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Mobile App */}
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="text-blue-600 mb-4 flex justify-center">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{t('modules.mobileApp.title')}</h3>
                <p className="text-sm text-gray-600">{t('modules.mobileApp.description')}</p>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <ArrowRight className="w-8 h-8 text-gray-400" />
              </div>

              {/* General API */}
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl p-6 shadow-lg text-center">
                <div className="text-white mb-4 flex justify-center">
                  <Server className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold mb-2">{t('modules.generalApi.title')}</h3>
                <p className="text-sm text-orange-100">{t('modules.generalApi.description')}</p>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <ArrowRight className="w-8 h-8 text-gray-400" />
              </div>

              {/* Company API */}
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="text-red-600 mb-4 flex justify-center">
                  <Database className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{t('modules.companyApi.title')}</h3>
                <p className="text-sm text-gray-600">{t('modules.companyApi.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('generalApiPage.benefits.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('generalApiPage.benefits.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Güvenlik */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <div className="text-green-600 mb-6">
                <Shield className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('generalApiPage.benefits.centralized.title')}</h3>
              <p className="text-gray-700 mb-6">
                {t('generalApiPage.benefits.centralized.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('generalApiPage.benefits.centralized.features.0')}
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('generalApiPage.benefits.centralized.features.1')}
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('generalApiPage.benefits.centralized.features.2')}
                </li>
              </ul>
            </div>

            {/* Ölçeklenebilirlik */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <div className="text-blue-600 mb-6">
                <Globe className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('generalApiPage.benefits.scalability.title')}</h3>
              <p className="text-gray-700 mb-6">
                {t('generalApiPage.benefits.scalability.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('generalApiPage.benefits.scalability.features.0')}
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('generalApiPage.benefits.scalability.features.1')}
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('generalApiPage.benefits.scalability.features.2')}
                </li>
              </ul>
            </div>

            {/* Yönetim Kolaylığı */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <div className="text-purple-600 mb-6">
                <Server className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('generalApiPage.benefits.security.title')}</h3>
              <p className="text-gray-700 mb-6">
                {t('generalApiPage.benefits.security.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('generalApiPage.benefits.security.features.0')}
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('generalApiPage.benefits.security.features.1')}
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('generalApiPage.benefits.security.features.2')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GeneralApiPage;

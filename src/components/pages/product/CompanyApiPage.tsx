import React from 'react';
import { useTranslations } from 'next-intl';
import { getLocalizedPath } from '@/utils/routes';
import Hero from '@/components/Hero';
import { 
  Building, 
  Database, 
  Shield, 
  Zap, 
  CheckCircle, 
  Lock,
  Server,
  Globe,
  Settings
} from 'lucide-react';

interface CompanyApiPageProps {
  locale: string;
}

const CompanyApiPage: React.FC<CompanyApiPageProps> = ({ locale }) => {
  const t = useTranslations('product');


  return (
    <>
      <Hero
        title={t('modules.companyApi.title')}
        subtitle={t('modules.companyApi.description')}
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
              {t('companyApiPage.features.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('companyApiPage.features.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Lokal Veri Saklama */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 text-center">
              <div className="text-red-600 mb-6 flex justify-center">
                <Database className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('companyApiPage.features.localData.title')}</h3>
              <p className="text-gray-700">
                {t('companyApiPage.features.localData.description')}
              </p>
            </div>

            {/* Yetkilendirme Kontrolü */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center">
              <div className="text-green-600 mb-6 flex justify-center">
                <Shield className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('companyApiPage.features.authorization.title')}</h3>
              <p className="text-gray-700">
                {t('companyApiPage.features.authorization.description')}
              </p>
            </div>

            {/* WebSocket Tetikleme */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
              <div className="text-blue-600 mb-6 flex justify-center">
                <Zap className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('companyApiPage.features.websocket.title')}</h3>
              <p className="text-gray-700">
                {t('companyApiPage.features.websocket.description')}
              </p>
            </div>

            {/* Güvenli Erişim */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center">
              <div className="text-purple-600 mb-6 flex justify-center">
                <Lock className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('companyApiPage.features.security.title')}</h3>
              <p className="text-gray-700">
                {t('companyApiPage.features.security.description')}
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
              {t('companyApiPage.onPremise.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('companyApiPage.onPremise.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('companyApiPage.onPremise.dataControl.title')}</h3>
              <p className="text-gray-700">
                {t('companyApiPage.onPremise.dataControl.description')}
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('companyApiPage.onPremise.performance.title')}</h3>
              <p className="text-gray-700">
                {t('companyApiPage.onPremise.performance.description')}
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('companyApiPage.onPremise.compliance.title')}</h3>
              <p className="text-gray-700">
                {t('companyApiPage.onPremise.compliance.description')}
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
              {t('companyApiPage.onPremise.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('companyApiPage.onPremise.subtitle')}
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Sol Taraf - Genel API */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-orange-600 mb-4 flex justify-center">
                    <Server className="w-12 h-12" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{t('modules.generalApi.title')}</h3>
                  <p className="text-sm text-gray-600">{t('modules.generalApi.description')}</p>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {t('companyApiPage.onPremise.dataControl.features.0')}
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {t('companyApiPage.onPremise.dataControl.features.1')}
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {t('companyApiPage.onPremise.dataControl.features.2')}
                  </div>
                </div>
              </div>

              {/* Sağ Taraf - Firma API */}
              <div className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-2xl p-6 shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-white mb-4 flex justify-center">
                    <Building className="w-12 h-12" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{t('modules.companyApi.title')}</h3>
                  <p className="text-sm text-red-100">{t('modules.companyApi.description')}</p>
                </div>
                <div className="space-y-2 text-sm text-red-100">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-white mr-2 flex-shrink-0" />
                    {t('companyApiPage.onPremise.performance.features.0')}
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-white mr-2 flex-shrink-0" />
                    {t('companyApiPage.onPremise.performance.features.1')}
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-white mr-2 flex-shrink-0" />
                    {t('companyApiPage.onPremise.performance.features.2')}
                  </div>
                </div>
              </div>
            </div>

            {/* Alt Kısım - Cihazlar */}
            <div className="mt-8 text-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg inline-block">
                <div className="text-gray-600 mb-4 flex justify-center">
                  <Settings className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{t('modules.deviceIntegration.title')}</h3>
                <p className="text-sm text-gray-600">{t('modules.deviceIntegration.description')}</p>
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
              {t('companyApiPage.onPremise.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('companyApiPage.onPremise.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Veri Güvenliği */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <div className="text-red-600 mb-6">
                <Lock className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('companyApiPage.onPremise.dataControl.title')}</h3>
              <p className="text-gray-700 mb-6">
                {t('companyApiPage.onPremise.dataControl.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('companyApiPage.onPremise.dataControl.features.0')}
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('companyApiPage.onPremise.dataControl.features.1')}
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('companyApiPage.onPremise.dataControl.features.2')}
                </li>
              </ul>
            </div>

            {/* Hızlı Performans */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <div className="text-blue-600 mb-6">
                <Zap className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('companyApiPage.onPremise.performance.title')}</h3>
              <p className="text-gray-700 mb-6">
                {t('companyApiPage.onPremise.performance.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('companyApiPage.onPremise.performance.features.0')}
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('companyApiPage.onPremise.performance.features.1')}
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('companyApiPage.onPremise.performance.features.2')}
                </li>
              </ul>
            </div>

            {/* Bağımsızlık */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <div className="text-purple-600 mb-6">
                <Globe className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('companyApiPage.onPremise.compliance.title')}</h3>
              <p className="text-gray-700 mb-6">
                {t('companyApiPage.onPremise.compliance.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('companyApiPage.onPremise.compliance.features.0')}
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('companyApiPage.onPremise.compliance.features.1')}
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('companyApiPage.onPremise.compliance.features.2')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyApiPage;

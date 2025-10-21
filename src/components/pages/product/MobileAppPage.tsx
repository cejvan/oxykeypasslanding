import React from 'react';
import { useTranslations } from 'next-intl';
import { getLocalizedPath } from '@/utils/routes';
import Hero from '@/components/Hero';
import { 
  Smartphone, 
  QrCode, 
  History, 
  Bell, 
  User, 
  CheckCircle, 
  Download,
  Shield,
  Zap
} from 'lucide-react';

interface MobileAppPageProps {
  locale: string;
}

const MobileAppPage: React.FC<MobileAppPageProps> = ({ locale }) => {
  const t = useTranslations('product');


  return (
    <>
      <Hero
        title={t('modules.mobileApp.title')}
        subtitle={t('modules.mobileApp.description')}
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
              {t('mobileAppPage.features.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('mobileAppPage.features.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* QR Kod Okuma */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
              <div className="text-blue-600 mb-6 flex justify-center">
                <QrCode className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('mobileAppPage.features.qrCodeReading.title')}</h3>
              <p className="text-gray-700">
                {t('mobileAppPage.features.qrCodeReading.description')}
              </p>
            </div>

            {/* Geçiş Geçmişi */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center">
              <div className="text-green-600 mb-6 flex justify-center">
                <History className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('mobileAppPage.features.accessHistory.title')}</h3>
              <p className="text-gray-700">
                {t('mobileAppPage.features.accessHistory.description')}
              </p>
            </div>

            {/* Bildirimler */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center">
              <div className="text-orange-600 mb-6 flex justify-center">
                <Bell className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('mobileAppPage.features.notifications.title')}</h3>
              <p className="text-gray-700">
                {t('mobileAppPage.features.notifications.description')}
              </p>
            </div>

            {/* Kullanıcı Profili */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center">
              <div className="text-purple-600 mb-6 flex justify-center">
                <User className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('mobileAppPage.features.userProfile.title')}</h3>
              <p className="text-gray-700">
                {t('mobileAppPage.features.userProfile.description')}
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
              {t('mobileAppPage.howItWorks.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('mobileAppPage.howItWorks.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('mobileAppPage.howItWorks.step1.title')}</h3>
              <p className="text-gray-700">
                {t('mobileAppPage.howItWorks.step1.description')}
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('mobileAppPage.howItWorks.step2.title')}</h3>
              <p className="text-gray-700">
                {t('mobileAppPage.howItWorks.step2.description')}
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('mobileAppPage.howItWorks.step3.title')}</h3>
              <p className="text-gray-700">
                {t('mobileAppPage.howItWorks.step3.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('mobileAppPage.benefits.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('mobileAppPage.benefits.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Güvenlik */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <div className="text-green-600 mb-6">
                <Shield className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('mobileAppPage.benefits.security.title')}</h3>
              <p className="text-gray-700 mb-6">
                {t('mobileAppPage.benefits.security.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('mobileAppPage.benefits.security.features.0')}
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('mobileAppPage.benefits.security.features.1')}
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('mobileAppPage.benefits.security.features.2')}
                </li>
              </ul>
            </div>

            {/* Hız */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <div className="text-blue-600 mb-6">
                <Zap className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('mobileAppPage.benefits.speed.title')}</h3>
              <p className="text-gray-700 mb-6">
                {t('mobileAppPage.benefits.speed.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('mobileAppPage.benefits.speed.features.0')}
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('mobileAppPage.benefits.speed.features.1')}
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('mobileAppPage.benefits.speed.features.2')}
                </li>
              </ul>
            </div>

            {/* Kolaylık */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <div className="text-purple-600 mb-6">
                <Smartphone className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('mobileAppPage.benefits.easeOfUse.title')}</h3>
              <p className="text-gray-700 mb-6">
                {t('mobileAppPage.benefits.easeOfUse.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('mobileAppPage.benefits.easeOfUse.features.0')}
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('mobileAppPage.benefits.easeOfUse.features.1')}
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('mobileAppPage.benefits.easeOfUse.features.2')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('mobileAppPage.download.title')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('mobileAppPage.download.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors flex items-center"
            >
              <Download className="w-5 h-5 mr-2" />
              {t('mobileAppPage.download.appStore')}
            </a>
            <a
              href="#"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors flex items-center"
            >
              <Download className="w-5 h-5 mr-2" />
              {t('mobileAppPage.download.googlePlay')}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default MobileAppPage;

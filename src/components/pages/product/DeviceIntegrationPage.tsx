import React from 'react';
import { useTranslations } from 'next-intl';
import { getLocalizedPath } from '@/utils/routes';
import Hero from '@/components/Hero';
import {
  Shield,
  Cpu,
  Wifi,
  Lock,
  CheckCircle,
  Settings,
  Zap,
  Database,
  Monitor
} from 'lucide-react';

interface DeviceIntegrationPageProps {
  locale: string;
}

const DeviceIntegrationPage: React.FC<DeviceIntegrationPageProps> = ({ locale }) => {
  const t = useTranslations('product');


  return (
    <>
      <Hero
        title={t('modules.deviceIntegration.title')}
        subtitle={t('modules.deviceIntegration.description')}
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
              {t('deviceIntegrationPage.features.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('deviceIntegrationPage.features.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Raspberry Pi Desteği */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center">
              <div className="text-green-600 mb-6 flex justify-center">
                <Cpu className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('deviceIntegrationPage.features.raspberryPi.title')}</h3>
              <p className="text-gray-700">
                {t('deviceIntegrationPage.features.raspberryPi.description')}
              </p>
            </div>

            {/* WebSocket İletişim */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
              <div className="text-blue-600 mb-6 flex justify-center">
                <Wifi className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('deviceIntegrationPage.features.websocket.title')}</h3>
              <p className="text-gray-700">
                {t('deviceIntegrationPage.features.websocket.description')}
              </p>
            </div>

            {/* Fiziksel Kontrol */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center">
              <div className="text-orange-600 mb-6 flex justify-center">
                <Lock className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('deviceIntegrationPage.features.physicalControl.title')}</h3>
              <p className="text-gray-700">
                {t('deviceIntegrationPage.features.physicalControl.description')}
              </p>
            </div>

            {/* Güvenlik Protokolleri */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center">
              <div className="text-purple-600 mb-6 flex justify-center">
                <Shield className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('deviceIntegrationPage.features.security.title')}</h3>
              <p className="text-gray-700">
                {t('deviceIntegrationPage.features.security.description')}
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
              {t('deviceIntegrationPage.installation.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('deviceIntegrationPage.installation.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('deviceIntegrationPage.installation.step1.title')}</h3>
              <p className="text-gray-700">
                {t('deviceIntegrationPage.installation.step1.description')}
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('deviceIntegrationPage.installation.step2.title')}</h3>
              <p className="text-gray-700">
                {t('deviceIntegrationPage.installation.step2.description')}
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('deviceIntegrationPage.installation.step3.title')}</h3>
              <p className="text-gray-700">
                {t('deviceIntegrationPage.installation.step3.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Device Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('deviceIntegrationPage.devices.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('deviceIntegrationPage.devices.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Turnike */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <div className="text-blue-600 mb-6">
                <Settings className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('deviceIntegrationPage.devices.turnstiles.title')}</h3>
              <p className="text-gray-700 mb-6">
                {t('deviceIntegrationPage.devices.turnstiles.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('deviceIntegrationPage.devices.turnstiles.features.0')}
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('deviceIntegrationPage.devices.turnstiles.features.1')}
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('deviceIntegrationPage.devices.turnstiles.features.2')}
                </li>
              </ul>
            </div>

            {/* Kapı Kilitleri */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <div className="text-green-600 mb-6">
                <Lock className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('deviceIntegrationPage.devices.doorLocks.title')}</h3>
              <p className="text-gray-700 mb-6">
                {t('deviceIntegrationPage.devices.doorLocks.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('deviceIntegrationPage.devices.doorLocks.features.0')}
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('deviceIntegrationPage.devices.doorLocks.features.1')}
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('deviceIntegrationPage.devices.doorLocks.features.2')}
                </li>
              </ul>
            </div>

            {/* Dolap Kilitleri */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <div className="text-purple-600 mb-6">
                <Database className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('deviceIntegrationPage.devices.lockers.title')}</h3>
              <p className="text-gray-700 mb-6">
                {t('deviceIntegrationPage.devices.lockers.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('deviceIntegrationPage.devices.lockers.features.0')}
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('deviceIntegrationPage.devices.lockers.features.1')}
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('deviceIntegrationPage.devices.lockers.features.2')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('deviceIntegrationPage.installation.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('deviceIntegrationPage.installation.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Donanım */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <div className="text-blue-600 mb-6">
                <Cpu className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('deviceIntegrationPage.installation.step1.title')}</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('deviceIntegrationPage.installation.step1.features.0')}
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('deviceIntegrationPage.installation.step1.features.1')}
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('deviceIntegrationPage.installation.step1.features.2')}
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('deviceIntegrationPage.installation.step1.features.3')}
                </li>
              </ul>
            </div>

            {/* Yazılım */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <div className="text-green-600 mb-6">
                <Monitor className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('deviceIntegrationPage.installation.step2.title')}</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('deviceIntegrationPage.installation.step2.features.0')}
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('deviceIntegrationPage.installation.step2.features.1')}
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('deviceIntegrationPage.installation.step2.features.2')}
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('deviceIntegrationPage.installation.step2.features.3')}
                </li>
              </ul>
            </div>

            {/* Kurulum */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <div className="text-purple-600 mb-6">
                <Zap className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('deviceIntegrationPage.installation.step3.title')}</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('deviceIntegrationPage.installation.step3.features.0')}
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('deviceIntegrationPage.installation.step3.features.1')}
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('deviceIntegrationPage.installation.step3.features.2')}
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('deviceIntegrationPage.installation.step3.features.3')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DeviceIntegrationPage;

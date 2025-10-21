import React from 'react';
import { useTranslations } from 'next-intl';
import { getLocalizedPath } from '@/utils/routes';
import Hero from '@/components/Hero';
import { 
  Settings, 
  Users, 
  Shield, 
  Database, 
  CheckCircle, 
  Lock,
  BarChart3,
  UserCheck
} from 'lucide-react';

interface AdminPanelsPageProps {
  locale: string;
}

const AdminPanelsPage: React.FC<AdminPanelsPageProps> = ({ locale }) => {
  const t = useTranslations('product');


  return (
    <>
      <Hero
        title={t('modules.adminPanels.title')}
        subtitle={t('modules.adminPanels.description')}
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
              {t('adminPanelsPage.features.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('adminPanelsPage.features.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Lokal Kullanıcı Yönetimi */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
              <div className="text-blue-600 mb-6 flex justify-center">
                <Users className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('adminPanelsPage.features.localUserManagement.title')}</h3>
              <p className="text-gray-700">
                {t('adminPanelsPage.features.localUserManagement.description')}
              </p>
            </div>

            {/* Cihaz Kontrolü */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center">
              <div className="text-green-600 mb-6 flex justify-center">
                <Shield className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('adminPanelsPage.features.deviceControl.title')}</h3>
              <p className="text-gray-700">
                {t('adminPanelsPage.features.deviceControl.description')}
              </p>
            </div>

            {/* Raporlar */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center">
              <div className="text-orange-600 mb-6 flex justify-center">
                <BarChart3 className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('adminPanelsPage.features.reports.title')}</h3>
              <p className="text-gray-700">
                {t('adminPanelsPage.features.reports.description')}
              </p>
            </div>

            {/* Yetki Tanımlama */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center">
              <div className="text-purple-600 mb-6 flex justify-center">
                <UserCheck className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('adminPanelsPage.features.permissionDefinition.title')}</h3>
              <p className="text-gray-700">
                {t('adminPanelsPage.features.permissionDefinition.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* On-Premise Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('adminPanelsPage.onPremise.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('adminPanelsPage.onPremise.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Veri Güvenliği */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <div className="text-green-600 mb-6">
                <Lock className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('adminPanelsPage.onPremise.dataSecurity.title')}</h3>
              <p className="text-gray-700 mb-6">
                {t('adminPanelsPage.onPremise.dataSecurity.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('adminPanelsPage.onPremise.dataSecurity.features.0')}
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('adminPanelsPage.onPremise.dataSecurity.features.1')}
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('adminPanelsPage.onPremise.dataSecurity.features.2')}
                </li>
              </ul>
            </div>

            {/* Hızlı Erişim */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <div className="text-blue-600 mb-6">
                <Database className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('adminPanelsPage.onPremise.fastAccess.title')}</h3>
              <p className="text-gray-700 mb-6">
                {t('adminPanelsPage.onPremise.fastAccess.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('adminPanelsPage.onPremise.fastAccess.features.0')}
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('adminPanelsPage.onPremise.fastAccess.features.1')}
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('adminPanelsPage.onPremise.fastAccess.features.2')}
                </li>
              </ul>
            </div>

            {/* Tam Kontrol */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <div className="text-purple-600 mb-6">
                <Settings className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('adminPanelsPage.onPremise.fullControl.title')}</h3>
              <p className="text-gray-700 mb-6">
                {t('adminPanelsPage.onPremise.fullControl.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('adminPanelsPage.onPremise.fullControl.features.0')}
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('adminPanelsPage.onPremise.fullControl.features.1')}
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('adminPanelsPage.onPremise.fullControl.features.2')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Management Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('adminPanelsPage.managementFeatures.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('adminPanelsPage.managementFeatures.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sol Kolon */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-lg font-bold text-gray-900">{t('adminPanelsPage.managementFeatures.employeeManagement.title')}</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {t('adminPanelsPage.managementFeatures.employeeManagement.features.0')}
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {t('adminPanelsPage.managementFeatures.employeeManagement.features.1')}
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {t('adminPanelsPage.managementFeatures.employeeManagement.features.2')}
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-lg font-bold text-gray-900">{t('adminPanelsPage.managementFeatures.deviceManagement.title')}</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {t('adminPanelsPage.managementFeatures.deviceManagement.features.0')}
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {t('adminPanelsPage.managementFeatures.deviceManagement.features.1')}
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {t('adminPanelsPage.managementFeatures.deviceManagement.features.2')}
                  </li>
                </ul>
              </div>
            </div>

            {/* Sağ Kolon */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <BarChart3 className="w-8 h-8 text-orange-600 mr-3" />
                  <h3 className="text-lg font-bold text-gray-900">{t('adminPanelsPage.managementFeatures.reporting.title')}</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {t('adminPanelsPage.managementFeatures.reporting.features.0')}
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {t('adminPanelsPage.managementFeatures.reporting.features.1')}
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {t('adminPanelsPage.managementFeatures.reporting.features.2')}
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <UserCheck className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-lg font-bold text-gray-900">{t('adminPanelsPage.managementFeatures.permissionManagement.title')}</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {t('adminPanelsPage.managementFeatures.permissionManagement.features.0')}
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {t('adminPanelsPage.managementFeatures.permissionManagement.features.1')}
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {t('adminPanelsPage.managementFeatures.permissionManagement.features.2')}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminPanelsPage;

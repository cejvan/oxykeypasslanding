import React from 'react';
import { useTranslations } from 'next-intl';
import { getLocalizedPath } from '@/utils/routes';
import Hero from '@/components/Hero';
import { 
  ArrowRight, 
  Smartphone, 
  Server, 
  Building, 
  Settings, 
  CheckCircle, 
  Zap,
  Shield,
  Database,
  Cpu
} from 'lucide-react';

interface WorkflowPageProps {
  locale: string;
}

const WorkflowPage: React.FC<WorkflowPageProps> = ({ locale }) => {
  const t = useTranslations('product');


  return (
    <>
      <Hero
        title={t('modules.workflow.title')}
        subtitle={t('modules.workflow.description')}
        ctas={[
          {
            label: t('freeTrial'),
            href: getLocalizedPath('contact', locale),
            variant: 'primary'
          }
        ]}
        align="left"
      />

      {/* Workflow Steps Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
{t('workflowPage.features.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('workflowPage.features.subtitle')}
            </p>
          </div>

          {/* Workflow Diagram */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
              {/* Step 1 - Mobile App */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-6 text-center shadow-lg">
                <div className="text-white mb-4 flex justify-center">
                  <Smartphone className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold mb-2">1. Mobil Uygulama</h3>
                <p className="text-sm text-blue-100">QR kod okur</p>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <ArrowRight className="w-8 h-8 text-gray-400" />
              </div>

              {/* Step 2 - General API */}
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl p-6 text-center shadow-lg">
                <div className="text-white mb-4 flex justify-center">
                  <Server className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold mb-2">2. Genel API</h3>
                <p className="text-sm text-orange-100">Kimlik doğrular</p>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <ArrowRight className="w-8 h-8 text-gray-400" />
              </div>

              {/* Step 3 - Company API */}
              <div className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-2xl p-6 text-center shadow-lg">
                <div className="text-white mb-4 flex justify-center">
                  <Building className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold mb-2">3. Firma API</h3>
                <p className="text-sm text-red-100">Yetki kontrolü</p>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <ArrowRight className="w-8 h-8 text-gray-400" />
              </div>

              {/* Step 4 - Device Integration */}
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl p-6 text-center shadow-lg">
                <div className="text-white mb-4 flex justify-center">
                  <Cpu className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold mb-2">4. {t('modules.deviceIntegration.title')}</h3>
                <p className="text-sm text-purple-100">{t('modules.deviceIntegration.description')}</p>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <ArrowRight className="w-8 h-8 text-gray-400" />
              </div>

              {/* Step 5 - Physical Device */}
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl p-6 text-center shadow-lg">
                <div className="text-white mb-4 flex justify-center">
                  <Settings className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold mb-2">5. {t('modules.deviceIntegration.title')}</h3>
                <p className="text-sm text-green-100">{t('modules.deviceIntegration.description')}</p>
              </div>
            </div>
          </div>

          {/* Detailed Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Step 1 Detail */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <div className="text-blue-600 mb-6">
                <Smartphone className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">1. {t('workflowPage.process.step1.title')}</h3>
              <p className="text-gray-700 mb-6">
                {t('workflowPage.process.step1.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('workflowPage.process.step1.features.0')}
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('workflowPage.process.step1.features.1')}
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('workflowPage.process.step1.features.2')}
                </li>
              </ul>
            </div>

            {/* Step 2 Detail */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <div className="text-orange-600 mb-6">
                <Server className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">2. {t('workflowPage.process.step2.title')}</h3>
              <p className="text-gray-700 mb-6">
                {t('workflowPage.process.step2.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('workflowPage.process.step2.features.0')}
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('workflowPage.process.step2.features.1')}
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('workflowPage.process.step2.features.2')}
                </li>
              </ul>
            </div>

            {/* Step 3 Detail */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <div className="text-red-600 mb-6">
                <Building className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">3. {t('workflowPage.process.step4.title')}</h3>
              <p className="text-gray-700 mb-6">
                {t('workflowPage.process.step4.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('workflowPage.process.step4.features.0')}
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('workflowPage.process.step4.features.1')}
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('workflowPage.process.step4.features.2')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
{t('workflowPage.benefits.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('workflowPage.benefits.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Güvenlik */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <div className="text-green-600 mb-6">
                <Shield className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('workflowPage.benefits.security.title')}</h3>
              <p className="text-gray-700 mb-6">
                {t('workflowPage.benefits.security.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('workflowPage.benefits.security.features.0')}
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('workflowPage.benefits.security.features.1')}
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('workflowPage.benefits.security.features.2')}
                </li>
              </ul>
            </div>

            {/* Hız */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <div className="text-blue-600 mb-6">
                <Zap className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('workflowPage.benefits.efficiency.title')}</h3>
              <p className="text-gray-700 mb-6">
                {t('workflowPage.benefits.efficiency.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('workflowPage.benefits.efficiency.features.0')}
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('workflowPage.benefits.efficiency.features.1')}
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('workflowPage.benefits.efficiency.features.2')}
                </li>
              </ul>
            </div>

            {/* Ölçeklenebilirlik */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <div className="text-purple-600 mb-6">
                <Database className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('workflowPage.benefits.reliability.title')}</h3>
              <p className="text-gray-700 mb-6">
                {t('workflowPage.benefits.reliability.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('workflowPage.benefits.reliability.features.0')}
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('workflowPage.benefits.reliability.features.1')}
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {t('workflowPage.benefits.reliability.features.2')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* System Components Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('workflowPage.features.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
{t('workflowPage.features.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mobile App */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
              <div className="text-blue-600 mb-4 flex justify-center">
                <Smartphone className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{t('modules.mobileApp.title')}</h3>
              <p className="text-sm text-gray-700 text-center">{t('modules.mobileApp.description')}</p>
            </div>

            {/* General API */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6">
              <div className="text-orange-600 mb-4 flex justify-center">
                <Server className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{t('modules.generalApi.title')}</h3>
              <p className="text-sm text-gray-700 text-center">{t('modules.generalApi.description')}</p>
            </div>

            {/* Company API */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6">
              <div className="text-red-600 mb-4 flex justify-center">
                <Building className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{t('modules.companyApi.title')}</h3>
              <p className="text-sm text-gray-700 text-center">{t('modules.companyApi.description')}</p>
            </div>

            {/* Device Integration */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6">
              <div className="text-purple-600 mb-4 flex justify-center">
                <Cpu className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{t('modules.deviceIntegration.title')}</h3>
              <p className="text-sm text-gray-700 text-center">{t('modules.deviceIntegration.description')}</p>
            </div>

            {/* Admin Panels */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
              <div className="text-green-600 mb-4 flex justify-center">
                <Settings className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{t('modules.adminPanels.title')}</h3>
              <p className="text-sm text-gray-700 text-center">{t('modules.adminPanels.description')}</p>
            </div>

            {/* Physical Devices */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6">
              <div className="text-gray-600 mb-4 flex justify-center">
                <Settings className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{t('modules.deviceIntegration.title')}</h3>
              <p className="text-sm text-gray-700 text-center">{t('modules.deviceIntegration.description')}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkflowPage;

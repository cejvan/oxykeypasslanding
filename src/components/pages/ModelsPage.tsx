import React from 'react';
import { useTranslations } from 'next-intl';
import { getLocalizedPath } from '@/utils/routes';
import Hero from '@/components/Hero';
import { 
  Smartphone, 
  Server, 
  Database, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Cpu,
  Lock
} from 'lucide-react';

interface ModelsPageProps {
  locale: string;
}

const ModelsPage: React.FC<ModelsPageProps> = ({ locale }) => {
  const tModels = useTranslations('models');


  const models = [
    {
      id: 'mobile-app',
      title: tModels('mobileApp.title'),
      description: tModels('mobileApp.description'),
      icon: Smartphone,
      color: 'blue',
      features: [
        tModels('mobileApp.features.0'),
        tModels('mobileApp.features.1'),
        tModels('mobileApp.features.2'),
        tModels('mobileApp.features.3')
      ]
    },
    {
      id: 'general-api',
      title: tModels('generalApi.title'),
      description: tModels('generalApi.description'),
      icon: Server,
      color: 'green',
      features: [
        tModels('generalApi.features.0'),
        tModels('generalApi.features.1'),
        tModels('generalApi.features.2'),
        tModels('generalApi.features.3')
      ]
    },
    {
      id: 'company-api',
      title: tModels('companyApi.title'),
      description: tModels('companyApi.description'),
      icon: Database,
      color: 'purple',
      features: [
        tModels('companyApi.features.0'),
        tModels('companyApi.features.1'),
        tModels('companyApi.features.2'),
        tModels('companyApi.features.3')
      ]
    },
    {
      id: 'device-integration',
      title: tModels('deviceIntegration.title'),
      description: tModels('deviceIntegration.description'),
      icon: Cpu,
      color: 'orange',
      features: [
        tModels('deviceIntegration.features.0'),
        tModels('deviceIntegration.features.1'),
        tModels('deviceIntegration.features.2'),
        tModels('deviceIntegration.features.3')
      ]
    },
    {
      id: 'admin-panels',
      title: tModels('adminPanels.title'),
      description: tModels('adminPanels.description'),
      icon: Shield,
      color: 'red',
      features: [
        tModels('adminPanels.features.0'),
        tModels('adminPanels.features.1'),
        tModels('adminPanels.features.2'),
        tModels('adminPanels.features.3')
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'from-blue-50 to-blue-100',
        icon: 'text-blue-600',
        border: 'border-blue-200',
        button: 'bg-blue-600 hover:bg-blue-700 text-white'
      },
      green: {
        bg: 'from-green-50 to-green-100',
        icon: 'text-green-600',
        border: 'border-green-200',
        button: 'bg-green-600 hover:bg-green-700 text-white'
      },
      purple: {
        bg: 'from-purple-50 to-purple-100',
        icon: 'text-purple-600',
        border: 'border-purple-200',
        button: 'bg-purple-600 hover:bg-purple-700 text-white'
      },
      orange: {
        bg: 'from-orange-50 to-orange-100',
        icon: 'text-orange-600',
        border: 'border-orange-200',
        button: 'bg-orange-600 hover:bg-orange-700 text-white'
      },
      red: {
        bg: 'from-red-50 to-red-100',
        icon: 'text-red-600',
        border: 'border-red-200',
        button: 'bg-red-600 hover:bg-red-700 text-white'
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <>
      <Hero
        title={tModels('title')}
        subtitle={tModels('subtitle')}
        ctas={[
          {
            label: tModels('cta.requestDemo'),
            href: getLocalizedPath('contact', locale),
            variant: 'primary'
          }
        ]}
        align="left"
      />

      {/* Models Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {tModels('overview.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {tModels('overview.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {models.map((model) => {
              const IconComponent = model.icon;
              const colors = getColorClasses(model.color);
              
              return (
                <div
                  key={model.id}
                  className={`bg-gradient-to-br ${colors.bg} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border ${colors.border}`}
                >
                  <div className={`${colors.icon} mb-6 flex justify-center`}>
                    <IconComponent className="w-12 h-12" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    {model.title}
                  </h3>
                  
                  <p className="text-gray-700 mb-6 text-center">
                    {model.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">{tModels('features')}:</h4>
                    <ul className="space-y-1">
                      {model.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <a
                      href={getLocalizedPath('product', locale)}
                      className={`inline-flex items-center justify-center w-full px-4 py-3 rounded-lg font-semibold transition-colors ${colors.button}`}
                    >
                      {tModels('learnMore')}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {tModels('architecture.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {tModels('architecture.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Mobile App */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-blue-600 mb-6 flex justify-center">
                <Smartphone className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{tModels('architecture.mobile.title')}</h3>
              <p className="text-gray-700">
                {tModels('architecture.mobile.description')}
              </p>
            </div>

            {/* General API */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-green-600 mb-6 flex justify-center">
                <Server className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{tModels('architecture.api.title')}</h3>
              <p className="text-gray-700">
                {tModels('architecture.api.description')}
              </p>
            </div>

            {/* Company API */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-purple-600 mb-6 flex justify-center">
                <Database className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{tModels('architecture.company.title')}</h3>
              <p className="text-gray-700">
                {tModels('architecture.company.description')}
              </p>
            </div>

            {/* Device */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-orange-600 mb-6 flex justify-center">
                <Lock className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{tModels('architecture.device.title')}</h3>
              <p className="text-gray-700">
                {tModels('architecture.device.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {tModels('cta.title')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {tModels('cta.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={getLocalizedPath('contact', locale)}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors flex items-center"
            >
              {tModels('cta.freeConsultation')}
              <ArrowRight className="w-5 h-5 mr-2" />
            </a>
            <a
              href={getLocalizedPath('product', locale)}
              className="bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-400 transition-colors flex items-center"
            >
              {tModels('cta.productDetails')}
              <ArrowRight className="w-5 h-5 mr-2" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ModelsPage;

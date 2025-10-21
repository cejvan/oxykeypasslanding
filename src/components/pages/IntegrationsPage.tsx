import React from 'react';
import { useTranslations } from 'next-intl';
import { getLocalizedPath } from '@/utils/routes';
import Hero from '@/components/Hero';
import { 
  Plug, 
  Database, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Lock,
  Server,
  Cpu,
  Zap
} from 'lucide-react';

interface IntegrationsPageProps {
  locale: string;
}

const IntegrationsPage: React.FC<IntegrationsPageProps> = ({ locale }) => {
  const tIntegrations = useTranslations('integrations');


  const integrations = [
    {
      id: 'turnstiles',
      title: tIntegrations('turnstiles.title'),
      description: tIntegrations('turnstiles.description'),
      icon: Lock,
      color: 'blue',
      features: [
        tIntegrations('turnstiles.features.0'),
        tIntegrations('turnstiles.features.1'),
        tIntegrations('turnstiles.features.2')
      ]
    },
    {
      id: 'door-locks',
      title: tIntegrations('doorLocks.title'),
      description: tIntegrations('doorLocks.description'),
      icon: Shield,
      color: 'green',
      features: [
        tIntegrations('doorLocks.features.0'),
        tIntegrations('doorLocks.features.1'),
        tIntegrations('doorLocks.features.2')
      ]
    },
    {
      id: 'lockers',
      title: tIntegrations('lockers.title'),
      description: tIntegrations('lockers.description'),
      icon: Database,
      color: 'purple',
      features: [
        tIntegrations('lockers.features.0'),
        tIntegrations('lockers.features.1'),
        tIntegrations('lockers.features.2')
      ]
    },
    {
      id: 'raspberry-pi',
      title: tIntegrations('raspberryPi.title'),
      description: tIntegrations('raspberryPi.description'),
      icon: Cpu,
      color: 'orange',
      features: [
        tIntegrations('raspberryPi.features.0'),
        tIntegrations('raspberryPi.features.1'),
        tIntegrations('raspberryPi.features.2')
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
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <>
      <Hero
        title={tIntegrations('title')}
        subtitle={tIntegrations('subtitle')}
        ctas={[
          {
            label: tIntegrations('cta.requestDemo'),
            href: getLocalizedPath('contact', locale),
            variant: 'primary'
          }
        ]}
        align="left"
      />

      {/* Integrations Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {tIntegrations('overview.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {tIntegrations('overview.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration) => {
              const IconComponent = integration.icon;
              const colors = getColorClasses(integration.color);
              
              return (
                <div
                  key={integration.id}
                  className={`bg-gradient-to-br ${colors.bg} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border ${colors.border}`}
                >
                  <div className={`${colors.icon} mb-6 flex justify-center`}>
                    <IconComponent className="w-12 h-12" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    {integration.title}
                  </h3>
                  
                  <p className="text-gray-700 mb-6 text-center">
                    {integration.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">{tIntegrations('features')}:</h4>
                    <ul className="space-y-1">
                      {integration.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <a
                      href={getLocalizedPath('contact', locale)}
                      className={`inline-flex items-center justify-center w-full px-4 py-3 rounded-lg font-semibold transition-colors ${colors.button}`}
                    >
                      {tIntegrations('learnMore')}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Installation Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {tIntegrations('installation.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {tIntegrations('installation.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-blue-600 mb-6 flex justify-center">
                <Plug className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{tIntegrations('installation.step1.title')}</h3>
              <p className="text-gray-700">
                {tIntegrations('installation.step1.description')}
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-green-600 mb-6 flex justify-center">
                <Server className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{tIntegrations('installation.step2.title')}</h3>
              <p className="text-gray-700">
                {tIntegrations('installation.step2.description')}
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-purple-600 mb-6 flex justify-center">
                <Zap className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{tIntegrations('installation.step3.title')}</h3>
              <p className="text-gray-700">
                {tIntegrations('installation.step3.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {tIntegrations('cta.title')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {tIntegrations('cta.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={getLocalizedPath('contact', locale)}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors flex items-center"
            >
              {tIntegrations('cta.freeConsultation')}
              <ArrowRight className="w-5 h-5 mr-2" />
            </a>
            <a
              href={getLocalizedPath('product', locale)}
              className="bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-400 transition-colors flex items-center"
            >
              {tIntegrations('cta.productDetails')}
              <ArrowRight className="w-5 h-5 mr-2" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntegrationsPage;

import React from 'react';
import { useTranslations } from 'next-intl';
import { getLocalizedPath } from '@/utils/routes';
import Hero from '@/components/Hero';
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  ArrowRight,
  FileCheck,
  Globe,
  UserCheck,
  Key
} from 'lucide-react';

interface SecurityPageProps {
  locale: string;
}

const SecurityPage: React.FC<SecurityPageProps> = ({ locale }) => {
  const tSecurity = useTranslations('security');


  const securityFeatures = [
    {
      id: 'encryption',
      title: tSecurity('encryption.title'),
      description: tSecurity('encryption.description'),
      icon: Lock,
      color: 'blue'
    },
    {
      id: 'authentication',
      title: tSecurity('authentication.title'),
      description: tSecurity('authentication.description'),
      icon: UserCheck,
      color: 'green'
    },
    {
      id: 'data-protection',
      title: tSecurity('dataProtection.title'),
      description: tSecurity('dataProtection.description'),
      icon: Database,
      color: 'purple'
    },
    {
      id: 'audit-logs',
      title: tSecurity('auditLogs.title'),
      description: tSecurity('auditLogs.description'),
      icon: FileCheck,
      color: 'orange'
    }
  ];

  const compliance = [
    {
      id: 'gdpr',
      title: tSecurity('compliance.gdpr.title'),
      description: tSecurity('compliance.gdpr.description'),
      icon: Globe,
      color: 'blue'
    },
    {
      id: 'iso27001',
      title: tSecurity('compliance.iso27001.title'),
      description: tSecurity('compliance.iso27001.description'),
      icon: Shield,
      color: 'green'
    },
    {
      id: 'sox',
      title: tSecurity('compliance.sox.title'),
      description: tSecurity('compliance.sox.description'),
      icon: FileCheck,
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'from-blue-50 to-blue-100',
        icon: 'text-blue-600',
        border: 'border-blue-200'
      },
      green: {
        bg: 'from-green-50 to-green-100',
        icon: 'text-green-600',
        border: 'border-green-200'
      },
      purple: {
        bg: 'from-purple-50 to-purple-100',
        icon: 'text-purple-600',
        border: 'border-purple-200'
      },
      orange: {
        bg: 'from-orange-50 to-orange-100',
        icon: 'text-orange-600',
        border: 'border-orange-200'
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <>
      <Hero
        title={tSecurity('title')}
        subtitle={tSecurity('subtitle')}
        ctas={[
          {
            label: tSecurity('cta.requestDemo'),
            href: getLocalizedPath('contact', locale),
            variant: 'primary'
          }
        ]}
        align="left"
      />

      {/* Security Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {tSecurity('features.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {tSecurity('features.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature) => {
              const IconComponent = feature.icon;
              const colors = getColorClasses(feature.color);
              
              return (
                <div
                  key={feature.id}
                  className={`bg-gradient-to-br ${colors.bg} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border ${colors.border}`}
                >
                  <div className={`${colors.icon} mb-6 flex justify-center`}>
                    <IconComponent className="w-12 h-12" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-700 text-center">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {tSecurity('compliance.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {tSecurity('compliance.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {compliance.map((item) => {
              const IconComponent = item.icon;
              const colors = getColorClasses(item.color);
              
              return (
                <div
                  key={item.id}
                  className={`bg-gradient-to-br ${colors.bg} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border ${colors.border}`}
                >
                  <div className={`${colors.icon} mb-6 flex justify-center`}>
                    <IconComponent className="w-12 h-12" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-700 text-center">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security Standards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {tSecurity('standards.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {tSecurity('standards.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Data Encryption */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center border border-gray-200">
              <div className="text-blue-600 mb-6 flex justify-center">
                <Key className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{tSecurity('standards.encryption.title')}</h3>
              <p className="text-gray-700">
                {tSecurity('standards.encryption.description')}
              </p>
            </div>

            {/* Access Control */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center border border-gray-200">
              <div className="text-green-600 mb-6 flex justify-center">
                <Shield className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{tSecurity('standards.accessControl.title')}</h3>
              <p className="text-gray-700">
                {tSecurity('standards.accessControl.description')}
              </p>
            </div>

            {/* Monitoring */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center border border-gray-200">
              <div className="text-purple-600 mb-6 flex justify-center">
                <Eye className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{tSecurity('standards.monitoring.title')}</h3>
              <p className="text-gray-700">
                {tSecurity('standards.monitoring.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {tSecurity('cta.title')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {tSecurity('cta.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={getLocalizedPath('contact', locale)}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors flex items-center"
            >
              {tSecurity('cta.freeConsultation')}
              <ArrowRight className="w-5 h-5 mr-2" />
            </a>
            <a
              href={getLocalizedPath('product', locale)}
              className="bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-400 transition-colors flex items-center"
            >
              {tSecurity('cta.productDetails')}
              <ArrowRight className="w-5 h-5 mr-2" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default SecurityPage;

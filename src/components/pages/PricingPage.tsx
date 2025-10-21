import React from 'react';
import { useTranslations } from 'next-intl';
import { getLocalizedPath } from '@/utils/routes';
import Hero from '@/components/Hero';
import { 
  CheckCircle, 
  ArrowRight,
  Star,
  Zap,
  Shield,
  Users,
  Building,
  Crown
} from 'lucide-react';

interface PricingPageProps {
  locale: string;
}

const PricingPage: React.FC<PricingPageProps> = ({ locale }) => {
  const tPricing = useTranslations('pricing');


  const plans = [
    {
      id: 'starter',
      name: tPricing('plans.starter.name'),
      price: tPricing('plans.starter.price'),
      period: tPricing('plans.starter.period'),
      description: tPricing('plans.starter.description'),
      icon: Zap,
      color: 'blue',
      popular: false,
      features: [
        tPricing('plans.starter.features.0'),
        tPricing('plans.starter.features.1'),
        tPricing('plans.starter.features.2'),
        tPricing('plans.starter.features.3'),
        tPricing('plans.starter.features.4')
      ]
    },
    {
      id: 'professional',
      name: tPricing('plans.professional.name'),
      price: tPricing('plans.professional.price'),
      period: tPricing('plans.professional.period'),
      description: tPricing('plans.professional.description'),
      icon: Shield,
      color: 'green',
      popular: true,
      features: [
        tPricing('plans.professional.features.0'),
        tPricing('plans.professional.features.1'),
        tPricing('plans.professional.features.2'),
        tPricing('plans.professional.features.3'),
        tPricing('plans.professional.features.4'),
        tPricing('plans.professional.features.5')
      ]
    },
    {
      id: 'enterprise',
      name: tPricing('plans.enterprise.name'),
      price: tPricing('plans.enterprise.price'),
      period: tPricing('plans.enterprise.period'),
      description: tPricing('plans.enterprise.description'),
      icon: Crown,
      color: 'purple',
      popular: false,
      features: [
        tPricing('plans.enterprise.features.0'),
        tPricing('plans.enterprise.features.1'),
        tPricing('plans.enterprise.features.2'),
        tPricing('plans.enterprise.features.3'),
        tPricing('plans.enterprise.features.4'),
        tPricing('plans.enterprise.features.5'),
        tPricing('plans.enterprise.features.6')
      ]
    }
  ];

  const getColorClasses = (color: string, popular: boolean = false) => {
    const colors = {
      blue: {
        bg: popular ? 'from-blue-500 to-blue-600' : 'from-blue-50 to-blue-100',
        text: popular ? 'text-white' : 'text-blue-600',
        border: popular ? 'border-blue-500' : 'border-blue-200',
        button: popular ? 'bg-white text-blue-600 hover:bg-blue-50' : 'bg-blue-600 hover:bg-blue-700 text-white'
      },
      green: {
        bg: popular ? 'from-green-500 to-green-600' : 'from-green-50 to-green-100',
        text: popular ? 'text-white' : 'text-green-600',
        border: popular ? 'border-green-500' : 'border-green-200',
        button: popular ? 'bg-white text-green-600 hover:bg-green-50' : 'bg-green-600 hover:bg-green-700 text-white'
      },
      purple: {
        bg: popular ? 'from-purple-500 to-purple-600' : 'from-purple-50 to-purple-100',
        text: popular ? 'text-white' : 'text-purple-600',
        border: popular ? 'border-purple-500' : 'border-purple-200',
        button: popular ? 'bg-white text-purple-600 hover:bg-purple-50' : 'bg-purple-600 hover:bg-purple-700 text-white'
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <>
      <Hero
        title={tPricing('title')}
        subtitle={tPricing('subtitle')}
        ctas={[
          {
            label: tPricing('cta.requestDemo'),
            href: getLocalizedPath('contact', locale),
            variant: 'primary'
          }
        ]}
        align="left"
      />

      {/* Pricing Plans Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {tPricing('plansTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {tPricing('plansSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => {
              const IconComponent = plan.icon;
              const colors = getColorClasses(plan.color, plan.popular);
              
              return (
                <div
                  key={plan.id}
                  className={`relative bg-gradient-to-br ${colors.bg} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border ${colors.border}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        {tPricing('popular')}
                      </span>
                    </div>
                  )}
                  
                  <div className={`${colors.text} mb-6 flex justify-center`}>
                    <IconComponent className="w-12 h-12" />
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-2 text-center ${colors.text}`}>
                    {plan.name}
                  </h3>
                  
                  <div className={`text-center mb-4 ${colors.text}`}>
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-lg ml-2">{plan.period}</span>
                  </div>
                  
                  <p className={`text-center mb-6 ${colors.text === 'text-white' ? 'text-blue-100' : 'text-gray-700'}`}>
                    {plan.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className={`w-5 h-5 mr-3 flex-shrink-0 ${colors.text === 'text-white' ? 'text-green-300' : 'text-green-500'}`} />
                        <span className={colors.text === 'text-white' ? 'text-blue-100' : 'text-gray-700'}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <a
                      href={getLocalizedPath('contact', locale)}
                      className={`inline-flex items-center justify-center w-full px-4 py-3 rounded-lg font-semibold transition-colors ${colors.button}`}
                    >
                      {tPricing('getStarted')}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Comparison Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {tPricing('comparison.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {tPricing('comparison.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-blue-600 mb-6 flex justify-center">
                <Users className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{tPricing('comparison.users.title')}</h3>
              <p className="text-gray-700">
                {tPricing('comparison.users.description')}
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-green-600 mb-6 flex justify-center">
                <Building className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{tPricing('comparison.devices.title')}</h3>
              <p className="text-gray-700">
                {tPricing('comparison.devices.description')}
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-purple-600 mb-6 flex justify-center">
                <Shield className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{tPricing('comparison.support.title')}</h3>
              <p className="text-gray-700">
                {tPricing('comparison.support.description')}
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-orange-600 mb-6 flex justify-center">
                <Zap className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{tPricing('comparison.setup.title')}</h3>
              <p className="text-gray-700">
                {tPricing('comparison.setup.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {tPricing('cta.title')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {tPricing('cta.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={getLocalizedPath('contact', locale)}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors flex items-center"
            >
              {tPricing('cta.freeConsultation')}
              <ArrowRight className="w-5 h-5 mr-2" />
            </a>
            <a
              href={getLocalizedPath('product', locale)}
              className="bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-400 transition-colors flex items-center"
            >
              {tPricing('cta.productDetails')}
              <ArrowRight className="w-5 h-5 mr-2" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingPage;

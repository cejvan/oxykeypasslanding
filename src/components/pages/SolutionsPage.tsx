import React from 'react';
import { useTranslations } from 'next-intl';
import { getLocalizedPath } from '@/utils/routes';
import Hero from '@/components/Hero';
import { 
  Building, 
  Heart, 
  Dumbbell, 
  Users, 
  GraduationCap, 
  Factory, 
  CheckCircle, 
  ArrowRight,
  Shield,
  Clock,
  BarChart3,
  Smartphone
} from 'lucide-react';

interface SolutionsPageProps {
  locale: string;
}

const SolutionsPage: React.FC<SolutionsPageProps> = ({ locale }) => {
  const tSolutions = useTranslations('solutions');

  const sectors = [
    {
      id: 'banking',
      title: tSolutions('sectors.banking.title'),
      description: tSolutions('sectors.banking.description'),
      icon: Building,
      color: 'blue',
      features: [
        tSolutions('sectors.banking.features.0'),
        tSolutions('sectors.banking.features.1'),
        tSolutions('sectors.banking.features.2'),
        tSolutions('sectors.banking.features.3'),
        tSolutions('sectors.banking.features.4')
      ],
      benefits: [
        tSolutions('sectors.banking.benefits.0'),
        tSolutions('sectors.banking.benefits.1'),
        tSolutions('sectors.banking.benefits.2'),
        tSolutions('sectors.banking.benefits.3')
      ]
    },
    {
      id: 'healthcare',
      title: tSolutions('sectors.healthcare.title'),
      description: tSolutions('sectors.healthcare.description'),
      icon: Heart,
      color: 'red',
      features: [
        tSolutions('sectors.healthcare.features.0'),
        tSolutions('sectors.healthcare.features.1'),
        tSolutions('sectors.healthcare.features.2'),
        tSolutions('sectors.healthcare.features.3'),
        tSolutions('sectors.healthcare.features.4')
      ],
      benefits: [
        tSolutions('sectors.healthcare.benefits.0'),
        tSolutions('sectors.healthcare.benefits.1'),
        tSolutions('sectors.healthcare.benefits.2'),
        tSolutions('sectors.healthcare.benefits.3')
      ]
    },
    {
      id: 'fitness',
      title: tSolutions('sectors.fitness.title'),
      description: tSolutions('sectors.fitness.description'),
      icon: Dumbbell,
      color: 'green',
      features: [
        tSolutions('sectors.fitness.features.0'),
        tSolutions('sectors.fitness.features.1'),
        tSolutions('sectors.fitness.features.2'),
        tSolutions('sectors.fitness.features.3'),
        tSolutions('sectors.fitness.features.4')
      ],
      benefits: [
        tSolutions('sectors.fitness.benefits.0'),
        tSolutions('sectors.fitness.benefits.1'),
        tSolutions('sectors.fitness.benefits.2'),
        tSolutions('sectors.fitness.benefits.3')
      ]
    },
    {
      id: 'corporate',
      title: tSolutions('sectors.corporate.title'),
      description: tSolutions('sectors.corporate.description'),
      icon: Users,
      color: 'purple',
      features: [
        tSolutions('sectors.corporate.features.0'),
        tSolutions('sectors.corporate.features.1'),
        tSolutions('sectors.corporate.features.2'),
        tSolutions('sectors.corporate.features.3'),
        tSolutions('sectors.corporate.features.4')
      ],
      benefits: [
        tSolutions('sectors.corporate.benefits.0'),
        tSolutions('sectors.corporate.benefits.1'),
        tSolutions('sectors.corporate.benefits.2'),
        tSolutions('sectors.corporate.benefits.3')
      ]
    },
    {
      id: 'education',
      title: tSolutions('sectors.education.title'),
      description: tSolutions('sectors.education.description'),
      icon: GraduationCap,
      color: 'orange',
      features: [
        tSolutions('sectors.education.features.0'),
        tSolutions('sectors.education.features.1'),
        tSolutions('sectors.education.features.2'),
        tSolutions('sectors.education.features.3'),
        tSolutions('sectors.education.features.4')
      ],
      benefits: [
        tSolutions('sectors.education.benefits.0'),
        tSolutions('sectors.education.benefits.1'),
        tSolutions('sectors.education.benefits.2'),
        tSolutions('sectors.education.benefits.3')
      ]
    },
    {
      id: 'manufacturing',
      title: tSolutions('sectors.manufacturing.title'),
      description: tSolutions('sectors.manufacturing.description'),
      icon: Factory,
      color: 'gray',
      features: [
        tSolutions('sectors.manufacturing.features.0'),
        tSolutions('sectors.manufacturing.features.1'),
        tSolutions('sectors.manufacturing.features.2'),
        tSolutions('sectors.manufacturing.features.3'),
        tSolutions('sectors.manufacturing.features.4')
      ],
      benefits: [
        tSolutions('sectors.manufacturing.benefits.0'),
        tSolutions('sectors.manufacturing.benefits.1'),
        tSolutions('sectors.manufacturing.benefits.2'),
        tSolutions('sectors.manufacturing.benefits.3')
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
      red: {
        bg: 'from-red-50 to-red-100',
        icon: 'text-red-600',
        border: 'border-red-200',
        button: 'bg-red-600 hover:bg-red-700 text-white'
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
      gray: {
        bg: 'from-gray-50 to-gray-100',
        icon: 'text-gray-600',
        border: 'border-gray-200',
        button: 'bg-gray-600 hover:bg-gray-700 text-white'
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <>
      <Hero
        title={tSolutions('title')}
        subtitle={tSolutions('subtitle')}
        ctas={[
          {
            label: tSolutions('cta.requestDemo'),
            href: getLocalizedPath('contact', locale),
            variant: 'primary'
          }
        ]}
        align="left"
      />

      {/* Sectors Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {tSolutions('sectorsTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {tSolutions('sectorsSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector) => {
              const IconComponent = sector.icon;
              const colors = getColorClasses(sector.color);
              
              return (
                <div
                  key={sector.id}
                  className={`bg-gradient-to-br ${colors.bg} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border ${colors.border}`}
                >
                  <div className={`${colors.icon} mb-6 flex justify-center`}>
                    <IconComponent className="w-12 h-12" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    {sector.title}
                  </h3>
                  
                  <p className="text-gray-700 mb-6 text-center">
                    {sector.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{tSolutions('features')}:</h4>
                      <ul className="space-y-1">
                        {sector.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{tSolutions('benefits')}:</h4>
                      <ul className="space-y-1">
                        {sector.benefits.slice(0, 2).map((benefit, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6">
                    <a
                      href={getLocalizedPath('contact', locale)}
                      className={`inline-flex items-center justify-center w-full px-4 py-3 rounded-lg font-semibold transition-colors ${colors.button}`}
                    >
                      {tSolutions('getDetails')}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why OxyKeyPass Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {tSolutions('whyOxyKeyPass.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {tSolutions('whyOxyKeyPass.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Güvenlik */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-blue-600 mb-6 flex justify-center">
                <Shield className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{tSolutions('whyOxyKeyPass.security.title')}</h3>
              <p className="text-gray-700">
                {tSolutions('whyOxyKeyPass.security.description')}
              </p>
            </div>

            {/* Hız */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-green-600 mb-6 flex justify-center">
                <Clock className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{tSolutions('whyOxyKeyPass.speed.title')}</h3>
              <p className="text-gray-700">
                {tSolutions('whyOxyKeyPass.speed.description')}
              </p>
            </div>

            {/* Raporlama */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-purple-600 mb-6 flex justify-center">
                <BarChart3 className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{tSolutions('whyOxyKeyPass.reporting.title')}</h3>
              <p className="text-gray-700">
                {tSolutions('whyOxyKeyPass.reporting.description')}
              </p>
            </div>

            {/* Mobil */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-orange-600 mb-6 flex justify-center">
                <Smartphone className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{tSolutions('whyOxyKeyPass.mobile.title')}</h3>
              <p className="text-gray-700">
                {tSolutions('whyOxyKeyPass.mobile.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {tSolutions('cta.title')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {tSolutions('cta.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={getLocalizedPath('contact', locale)}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors flex items-center"
            >
              {tSolutions('cta.freeConsultation')}
              <ArrowRight className="w-5 h-5 mr-2" />
            </a>
            <a
              href={getLocalizedPath('product', locale)}
              className="bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-400 transition-colors flex items-center"
            >
              {tSolutions('cta.productDetails')}
              <ArrowRight className="w-5 h-5 mr-2" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default SolutionsPage;

'use client';

import Link from 'next/link';
import Image from 'next/image';
// simple classnames combiner
function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(' ');
}

type HeroProps = {
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'center' | 'left';
  ctas?: Array<{ label: string; href: string; variant?: 'primary' | 'outline' }>;
  backgroundImageUrl?: string;
};

const Hero = ({ title, subtitle, className, align = 'center', ctas = [], backgroundImageUrl }: HeroProps) => {
  return (
    <section className={cx('relative bg-gradient-to-br from-blue-50 to-indigo-100 mt-[0px]', className)} style={{ height: '400px' }}>
      {backgroundImageUrl && (
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        />
      )}
      <div className="absolute inset-0 z-10 bg-white/50" />
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className={cx('p-0')}>
          {/* Always show brand logo (centered, larger) */}
          <div className="mb-6 flex justify-center">
            <Image src="/logo.svg" alt="OxyKeyPass" width={260} height={56} />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-3 font-heading text-center">{title}</h1>
          {subtitle && (
            <p className="text-gray-600 text-lg font-body max-w-2xl mx-auto text-center">{subtitle}</p>
          )}

          {!!ctas.length && (
            <div className={cx('mt-6 flex flex-col sm:flex-row gap-3', align === 'center' ? 'justify-center' : '')}>
              {ctas.map((btn, i) => (
                <Link
                  key={`${btn.label}-${i}`}
                  href={btn.href}
                  className={cx(
                    'px-6 py-3 rounded-xl font-semibold transition-all duration-200',
                    btn.variant === 'outline'
                      ? 'bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  )}
                >
                  {btn.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;



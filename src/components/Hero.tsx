import React from 'react';
import { Heart, Calendar, MapPin, ChevronRight, Sparkles } from 'lucide-react';
import { Language, translations } from '../translations';
import { siteConfig } from '../site-config';
import { ChhathHeroBannerGraphic, HolyDiyaIcon } from './FestiveVisuals';

interface HeroProps {
  currentLang: Language;
}

export const Hero: React.FC<HeroProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const { meta } = siteConfig;

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 md:py-20 lg:py-24">
      {/* Decorative festive top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-gradient-to-b from-[#FFF3E0] to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
            {/* Location & Year kicker (Clean typography, no garish pill sandwiches) */}
            <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-[#75665D] mb-4">
              <span className="flex items-center gap-1.5 text-[#B71C1C]">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>{meta.villageHi} ({meta.villageEn})</span>
              </span>
              <span aria-hidden="true" className="text-amber-400">·</span>
              <span>{meta.blockHi}, {meta.districtHi}</span>
            </div>

            {/* Sacred Primary Invocation */}
            <div className="flex items-center gap-2 mb-2">
              <HolyDiyaIcon className="w-5 h-5 text-[#E65100]" />
              <span className="text-sm md:text-base font-semibold text-[#B71C1C] tracking-wide uppercase">
                {t.heroGreeting}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#33251D] tracking-tight leading-[1.18] text-balance">
              {t.heroHeading}
            </h1>

            {/* Village Description */}
            <p className="mt-4 text-base md:text-lg text-[#75665D] leading-relaxed max-w-xl">
              {t.heroDescription}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                type="button"
                onClick={() => scrollTo('#donation')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-[#E65100] hover:bg-[#BF360C] rounded-xl transition-all shadow-md hover:shadow-lg focus-visible:outline-2 focus-visible:outline-[#BF360C] whitespace-nowrap cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-white/20" />
                <span>{t.heroCtaDonate}</span>
              </button>

              <button
                type="button"
                onClick={() => scrollTo('#schedule')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-[#33251D] bg-[#FFF8E7] hover:bg-[#FFE082]/60 border border-[#FFC107] rounded-xl transition-colors focus-visible:outline-2 focus-visible:outline-[#E65100] whitespace-nowrap cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#E65100]" />
                <span>{t.heroCtaSchedule}</span>
              </button>
            </div>

            {/* Trust note */}
            <div className="mt-6 pt-5 border-t border-amber-200/60 flex items-center gap-2 text-xs text-[#75665D]">
              <span className="w-2 h-2 rounded-full bg-[#E65100]" />
              <span>
                {currentLang === 'hi'
                  ? 'सोनवे गोनरहा ग्रामवासियों द्वारा प्रबंधित सामुदायिक पहल'
                  : 'A village community initiative organized by the residents of Sonwe Gonraha'}
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual Graphic */}
          <div className="lg:col-span-6 xl:col-span-6">
            <ChhathHeroBannerGraphic />
          </div>
        </div>
      </div>
    </section>
  );
};

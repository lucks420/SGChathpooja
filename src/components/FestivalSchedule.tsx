import React from 'react';
import { Calendar, Sunset, Sunrise, Sparkles } from 'lucide-react';
import { Language, translations } from '../translations';
import { siteConfig } from '../site-config';
import { HolyDiyaIcon } from './FestiveVisuals';

interface FestivalScheduleProps {
  currentLang: Language;
}

export const FestivalSchedule: React.FC<FestivalScheduleProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const { festivalSchedule } = siteConfig;

  return (
    <section id="schedule" className="py-16 md:py-24 bg-[#FFFDF9] border-t border-[#E65100]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-[#E65100] uppercase tracking-wider mb-2">
            <span>{currentLang === 'hi' ? 'मुख्य पूजन कार्यक्रम' : 'Sacred Schedule'}</span>
            <span aria-hidden="true">·</span>
            <span>{currentLang === 'hi' ? 'सोनवे गोनरहा' : 'Sonwe Gonraha'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#33251D] tracking-tight text-balance">
            {t.scheduleSectionTitle}
          </h2>
          <p className="mt-2 text-base text-[#75665D]">
            {t.scheduleSectionSubtitle}
          </p>
        </div>

        {/* 2 Days Schedule Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          {festivalSchedule.map((stage) => {
            const isSunset = stage.type === 'sunset';

            return (
              <div
                key={stage.id}
                className={`relative rounded-3xl p-6 sm:p-8 border shadow-sm flex flex-col justify-between overflow-hidden transition-all ${
                  isSunset
                    ? 'bg-gradient-to-b from-[#FFF3E0] to-[#FFE0B2]/50 border-[#F57C00]/40 hover:border-[#E65100]'
                    : 'bg-gradient-to-b from-[#FFF8E7] to-[#FFECB3]/50 border-[#FFC107]/50 hover:border-[#F57C00]'
                }`}
              >
                {/* Subtle festive background glow */}
                <div
                  className={`absolute -top-12 -right-12 w-44 h-44 rounded-full blur-2xl pointer-events-none opacity-40 ${
                    isSunset ? 'bg-[#E65100]' : 'bg-[#FFC107]'
                  }`}
                />

                <div className="relative z-10">
                  {/* Top Bar: Day & Date Badge */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-xl bg-white border border-stone-200 text-[#E65100] font-bold text-sm flex items-center justify-center font-mono shadow-2xs">
                        0{stage.dayNumber}
                      </span>
                      <span className="text-xs font-bold text-[#B71C1C] uppercase tracking-wide">
                        {t.dayLabel} {stage.dayNumber}
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-amber-300 text-xs sm:text-sm font-bold text-[#E65100] shadow-2xs">
                      <Calendar className="w-3.5 h-3.5 text-[#E65100]" />
                      <span>{currentLang === 'hi' ? stage.dateHi : stage.dateEn}</span>
                    </div>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3.5 my-3">
                    <div
                      className={`p-3 rounded-2xl shadow-xs border ${
                        isSunset
                          ? 'bg-[#E65100] text-white border-[#BF360C]'
                          : 'bg-[#FFC107] text-[#5D4037] border-amber-400'
                      }`}
                    >
                      {isSunset ? (
                        <Sunset className="w-6 h-6 stroke-[2.2]" />
                      ) : (
                        <Sunrise className="w-6 h-6 stroke-[2.2]" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#33251D]">
                        {currentLang === 'hi' ? stage.nameHi : stage.nameEn}
                      </h3>
                      <span className="text-xs text-[#75665D] font-medium block mt-0.5">
                        {isSunset
                          ? (currentLang === 'hi' ? 'अस्ताचलगामी सूर्य उपासना' : 'Setting Sun Worship')
                          : (currentLang === 'hi' ? 'उदयगामी सूर्य उपासना' : 'Rising Sun Worship')}
                      </span>
                    </div>
                  </div>

                  {/* Description (Exact text mandated by brief) */}
                  <p className="mt-4 text-sm sm:text-base text-[#33251D] leading-relaxed">
                    {currentLang === 'hi' ? stage.descriptionHi : stage.descriptionEn}
                  </p>
                </div>

                {/* Bottom Trust Tag */}
                <div className="relative z-10 mt-6 pt-4 border-t border-amber-300/40 flex items-center justify-between text-xs text-[#75665D]">
                  <div className="flex items-center gap-1.5">
                    <HolyDiyaIcon className="w-4 h-4 text-[#E65100]" />
                    <span>
                      {isSunset
                        ? (currentLang === 'hi' ? 'संध्या अर्घ्य अनुष्ठान' : 'Evening Oblations')
                        : (currentLang === 'hi' ? 'उषा अर्घ्य व पारण' : 'Morning Oblations & Paran')}
                    </span>
                  </div>
                  <span className="font-semibold text-[#B71C1C]">
                    सोनवे गोनरहा घाट
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

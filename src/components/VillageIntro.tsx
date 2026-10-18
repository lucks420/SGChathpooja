import React, { useState, useEffect } from 'react';
import { Navigation, Info, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Language, translations } from '../translations';
import { siteConfig } from '../site-config';
import {
  ChhathMaiyaSlideGraphic,
  SunsetArghyaSlideGraphic,
  SunriseArghyaSlideGraphic,
  HolyDiyaIcon,
} from './FestiveVisuals';

interface VillageIntroProps {
  currentLang: Language;
}

// Robust asset URL resolver for local dev and GitHub Pages deployment
const resolveAssetUrl = (path: string): string => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const cleanPath = path.replace(/^\/+/, '');
  const base = import.meta.env.BASE_URL || './';
  return base.endsWith('/') ? `${base}${cleanPath}` : `${base}/${cleanPath}`;
};

// Auto-discovers uploaded image candidates across gallery folder and root images folder
const getSlideCandidates = (slideIndex: number, originalUrl?: string): string[] => {
  const num = slideIndex + 1;
  const candidates: string[] = [];
  if (originalUrl) candidates.push(originalUrl);

  const folders = ['assets/images/chhath-gallery', 'assets/images'];
  const exts = ['jpg', 'jpg.jpg', 'jpeg', 'png', 'webp', 'JPG', 'JPEG', 'PNG'];

  for (const folder of folders) {
    for (const ext of exts) {
      const p = `${folder}/chhath-maiya-${num}.${ext}`;
      if (!candidates.includes(p)) {
        candidates.push(p);
      }
    }
  }
  return candidates;
};

export const VillageIntro: React.FC<VillageIntroProps> = ({ currentLang }) => {
  const [showMapModal, setShowMapModal] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [candidateIndices, setCandidateIndices] = useState<Record<number, number>>({});
  const [slideImageFailed, setSlideImageFailed] = useState<Record<number, boolean>>({});

  const handleSlideImageError = (slideIdx: number, totalCandidates: number) => {
    const currentIdx = candidateIndices[slideIdx] ?? 0;
    if (currentIdx < totalCandidates - 1) {
      setCandidateIndices((prev) => ({ ...prev, [slideIdx]: currentIdx + 1 }));
    } else {
      setSlideImageFailed((prev) => ({ ...prev, [slideIdx]: true }));
    }
  };

  const t = translations[currentLang];
  const { meta, slideshow } = siteConfig;

  const isMapUrlConfigured = Boolean(
    meta.googleMapsUrl && meta.googleMapsUrl.trim() !== '' && !meta.googleMapsUrl.includes('REPLACE')
  );

  const handleMapClick = (e: React.MouseEvent) => {
    if (!isMapUrlConfigured) {
      e.preventDefault();
      setShowMapModal(true);
    }
  };

  // Slideshow Auto-advance logic (loops 0 -> 1 -> 2 -> 0)
  useEffect(() => {
    if (isPaused) return;

    // Check for prefers-reduced-motion
    const prefersReducedMotion =
      typeof window !== 'undefined' && typeof window.matchMedia === 'function'
        ? window.matchMedia('(prefers-reduced-motion: reduce)')?.matches ?? false
        : false;
    if (prefersReducedMotion) return;

    const timer = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slideshow.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused, slideshow.length]);

  const goToSlide = (index: number) => {
    setCurrentSlideIndex(index);
  };

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % slideshow.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + slideshow.length) % slideshow.length);
  };

  const currentSlide = slideshow[currentSlideIndex];

  return (
    <section id="village" className="py-16 md:py-20 bg-[#FFFDF9] border-t border-[#E65100]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-[#E65100] uppercase tracking-wider mb-2">
            <span>{currentLang === 'hi' ? 'गाँव की पहचान' : 'Village Identity'}</span>
            <span aria-hidden="true">·</span>
            <span>{meta.districtHi}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#33251D] tracking-tight text-balance">
            {t.villageSectionTitle}
          </h2>
          <p className="mt-2 text-base text-[#75665D]">
            {t.villageSectionSubtitle}
          </p>
        </div>

        {/* Content Layout */}
        <div className="max-w-4xl flex flex-col space-y-6">
          <div className="bg-[#FFF8E7]/60 border border-[#FFC107]/40 rounded-2xl p-6 sm:p-8">
            <p className="text-base sm:text-lg text-[#33251D] leading-relaxed">
              {t.villageDescription}
            </p>
          </div>

          {/* Geographic Administrative Details */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-white border border-stone-200/80 rounded-xl p-4 shadow-xs">
              <span className="text-xs text-[#75665D] font-medium block">{t.villageNameLabel}</span>
              <span className="text-sm sm:text-base font-bold text-[#33251D] mt-1 block">
                {currentLang === 'hi' ? meta.villageHi : meta.villageEn}
              </span>
            </div>
            <div className="bg-white border border-stone-200/80 rounded-xl p-4 shadow-xs">
              <span className="text-xs text-[#75665D] font-medium block">{t.blockLabel}</span>
              <span className="text-sm sm:text-base font-bold text-[#33251D] mt-1 block">
                {currentLang === 'hi' ? meta.blockHi : meta.blockEn}
              </span>
            </div>
            <div className="bg-white border border-stone-200/80 rounded-xl p-4 shadow-xs">
              <span className="text-xs text-[#75665D] font-medium block">{t.districtLabel}</span>
              <span className="text-sm sm:text-base font-bold text-[#33251D] mt-1 block">
                {currentLang === 'hi' ? meta.districtHi : meta.districtEn}
              </span>
            </div>
            <div className="bg-white border border-stone-200/80 rounded-xl p-4 shadow-xs">
              <span className="text-xs text-[#75665D] font-medium block">{t.stateLabel}</span>
              <span className="text-sm sm:text-base font-bold text-[#33251D] mt-1 block">
                {currentLang === 'hi' ? meta.stateHi : meta.stateEn}
              </span>
            </div>
          </div>

          {/* Google Maps CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-2">
            <a
              href={isMapUrlConfigured ? meta.googleMapsUrl : '#'}
              onClick={handleMapClick}
              target={isMapUrlConfigured ? '_blank' : undefined}
              rel={isMapUrlConfigured ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#E65100] bg-[#FFF8E7] hover:bg-[#FFE082]/60 border border-[#FFC107] rounded-xl transition-colors focus-visible:outline-2 focus-visible:outline-[#E65100] cursor-pointer"
            >
              <Navigation className="w-4 h-4 text-[#E65100]" />
              <span>{t.viewOnMap}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>

            <span className="text-xs text-[#75665D]">
              {meta.villageHi}, {meta.blockHi}, {meta.districtHi}
            </span>
          </div>

          {/* Notice if map URL clicked while placeholder */}
          {showMapModal && (
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5 animate-in fade-in duration-200">
              <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-semibold">{t.mapPlaceholderNotice}</p>
                <p className="mt-1 text-amber-800">
                  {currentLang === 'hi'
                    ? 'गाँव के सटीक घाट या मंदिर की लोकेशन लिंक site-config.ts में Google Maps URL के रूप में जोड़ी जा सकती है।'
                    : 'The exact Ghat or Temple Google Maps location pin can be configured in site-config.ts by the committee.'}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowMapModal(false)}
                className="text-amber-800 hover:text-amber-950 font-bold px-1"
              >
                ✕
              </button>
            </div>
          )}

          {/* THREE-IMAGE CHHATH MAIYA DEVOTIONAL SLIDESHOW (Directly below Google Maps CTA) */}
          <div
            className="mt-6 pt-4 border-t border-amber-200/60"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            aria-roledescription="carousel"
            aria-label={t.slideshowTitle}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <HolyDiyaIcon className="w-4 h-4 text-[#E65100]" />
                <h3 className="text-sm font-bold text-[#33251D]">
                  {t.slideshowTitle}
                </h3>
              </div>
              <span className="text-xs text-[#75665D] font-mono">
                {currentSlideIndex + 1} / {slideshow.length}
              </span>
            </div>

            {/* Slideshow Display Stage */}
            <div className="relative rounded-2xl overflow-hidden shadow-sm border border-[#FFC107]/40 bg-stone-900">
              <div className="relative w-full aspect-16/10 sm:aspect-16/9 overflow-hidden">
                {slideshow.map((slide, idx) => {
                  const isActive = idx === currentSlideIndex;
                  const candidates = getSlideCandidates(idx, slide.imageUrl);
                  const candidateIdx = candidateIndices[idx] ?? 0;
                  const currentPath = candidates[candidateIdx] || '';
                  const resolvedSrc = resolveAssetUrl(currentPath);
                  const isFailed = slideImageFailed[idx];

                  return (
                    <div
                      key={slide.id}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                      }`}
                      aria-hidden={!isActive}
                    >
                      {!isFailed && resolvedSrc ? (
                        <div className="relative w-full h-full flex items-center justify-center bg-[#1F0801]">
                          <img
                            src={resolvedSrc}
                            alt={currentLang === 'hi' ? slide.altHi : slide.altEn}
                            onError={() => handleSlideImageError(idx, candidates.length)}
                            className="w-full h-full object-contain object-center"
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'contain',
                              objectPosition: 'center',
                            }}
                            loading={idx === 0 ? 'eager' : 'lazy'}
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      ) : slide.type === 'deity' ? (
                        <ChhathMaiyaSlideGraphic />
                      ) : slide.type === 'sunset' ? (
                        <SunsetArghyaSlideGraphic />
                      ) : (
                        <SunriseArghyaSlideGraphic />
                      )}
                    </div>
                  );
                })}

                {/* Manual Arrow Controls */}
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous slide"
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-xs transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-xs transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Slideshow Controls Bar & Indicator Dots */}
              <div className="p-3 bg-white border-t border-stone-200/80 flex items-center justify-between">
                <div className="text-xs text-[#33251D] font-medium truncate max-w-[70%]">
                  {currentLang === 'hi' ? currentSlide.titleHi : currentSlide.titleEn}
                </div>

                {/* Three Slide Indicator Buttons */}
                <div className="flex items-center gap-1.5" role="tablist" aria-label="Slides">
                  {slideshow.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      type="button"
                      role="tab"
                      aria-selected={dotIdx === currentSlideIndex}
                      aria-label={`Go to slide ${dotIdx + 1}`}
                      onClick={() => goToSlide(dotIdx)}
                      className={`transition-all rounded-full cursor-pointer ${
                        dotIdx === currentSlideIndex
                          ? 'w-6 h-2 bg-[#E65100]'
                          : 'w-2 h-2 bg-stone-300 hover:bg-stone-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

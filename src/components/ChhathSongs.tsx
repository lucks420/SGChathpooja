import React from 'react';
import { Music, ExternalLink } from 'lucide-react';
import { Language, translations } from '../translations';
import { siteConfig } from '../site-config';

interface ChhathSongsProps {
  currentLang: Language;
}

export const ChhathSongs: React.FC<ChhathSongsProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const { chhathSongs } = siteConfig;

  return (
    <section id="songs" className="py-16 md:py-24 bg-[#FFF8E7]/30 border-t border-[#E65100]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-[#E65100] uppercase tracking-wider mb-2">
            <span>{currentLang === 'hi' ? 'भक्ति रस' : 'Devotional Melodies'}</span>
            <span aria-hidden="true">·</span>
            <span>{currentLang === 'hi' ? '८ पावन पारंपरिक लोकगीत' : '8 Sacred Folk Hymns'}</span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#33251D] tracking-tight text-balance">
              {t.songsSectionTitle}
            </h2>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#E65100]/10 text-[#E65100] border border-[#E65100]/20">
              <Music className="w-3.5 h-3.5" />
              <span>{t.songsCountBadge}</span>
            </span>
          </div>
          <p className="mt-2 text-base text-[#75665D]">
            {t.songsSectionSubtitle}
          </p>
        </div>

        {/* Songs Grid with 16:9 YouTube Embed Players */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {chhathSongs.map((song) => {
            const embedUrl = `https://www.youtube.com/embed/${encodeURIComponent(song.youtubeVideoId)}`;
            const currentTitle = currentLang === 'hi' ? song.titleHi : song.titleEn;
            const currentLabel = currentLang === 'hi' ? song.labelHi : song.labelEn;
            const currentArtist = currentLang === 'hi' ? song.artistHi : song.artistEn;
            const currentDescription = currentLang === 'hi' ? song.descriptionHi : song.descriptionEn;

            return (
              <div
                key={song.id}
                className="group bg-white border border-stone-200/90 hover:border-[#FFC107] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                {/* Card Header with Neutral Label and External Fallback */}
                <div className="px-4 py-3 bg-[#FFFDF9] border-b border-stone-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold bg-amber-100/80 text-[#E65100] border border-amber-200">
                      <Music className="w-3.5 h-3.5" />
                      <span>{currentLabel}</span>
                    </span>
                    <span className="text-xs font-medium text-stone-500">
                      #{song.songNumber}
                    </span>
                  </div>

                  {/* Fallback button: Open directly on YouTube if embed is restricted */}
                  <a
                    href={song.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold text-[#E65100] hover:text-[#B71C1C] hover:bg-amber-100/70 transition-colors cursor-pointer"
                    title={t.watchOnYouTube}
                  >
                    <span>{t.openInYouTubeFallback}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* 16:9 Responsive Video Stage with embedded YouTube player */}
                <div className="relative aspect-video w-full bg-stone-950 flex items-center justify-center overflow-hidden">
                  <iframe
                    title={`${currentLabel} — ${currentTitle}`}
                    src={embedUrl}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>

                {/* Song Details Body */}
                <div className="p-5 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    {/* Primary Verified Song Title */}
                    <h3 className="text-base sm:text-lg font-bold text-[#33251D] group-hover:text-[#E65100] transition-colors">
                      {currentTitle}
                    </h3>

                    {/* Artist & Channel */}
                    <p className="text-xs sm:text-sm font-semibold text-[#E65100] mt-1">
                      {currentArtist}
                    </p>

                    {/* Devotional Description */}
                    <p className="mt-2 text-xs sm:text-sm text-[#75665D] leading-relaxed">
                      {currentDescription}
                    </p>

                    {/* Verified Official Video Title Subtext */}
                    <div className="mt-3 pt-2.5 border-t border-stone-100 flex items-start gap-1.5 text-[11px] text-stone-500">
                      <span className="font-semibold text-stone-600 shrink-0">
                        {t.verifiedTitleLabel}:
                      </span>
                      <span className="truncate italic font-mono text-stone-500" title={song.verifiedTitle}>
                        {song.verifiedTitle}
                      </span>
                    </div>
                  </div>

                  {/* Card Bottom Action */}
                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-end text-xs">
                    <a
                      href={song.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#E65100] hover:text-white hover:bg-[#E65100] bg-amber-50/80 border border-amber-200/80 transition-all cursor-pointer"
                    >
                      <span>{t.watchOnYouTube}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

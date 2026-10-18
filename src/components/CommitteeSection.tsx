import React, { useState } from 'react';
import { User, Instagram, ExternalLink } from 'lucide-react';
import { Language, translations } from '../translations';
import { siteConfig } from '../site-config';

interface CommitteeSectionProps {
  currentLang: Language;
}

// Supported candidate image file extensions
const EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp', 'JPG', 'JPEG', 'PNG', 'WEBP'];

/**
 * Builds candidate paths checking both assets/images/ and assets/images/committee/
 */
const getCandidatePaths = (memberId: string, photoUrl?: string): string[] => {
  const shortName = memberId.replace('member-', '');
  const candidates: string[] = [];

  if (photoUrl) {
    candidates.push(photoUrl);
  }

  // Check both direct images folder and committee subfolder
  const folders = ['assets/images', 'assets/images/committee'];
  for (const folder of folders) {
    for (const ext of EXTENSIONS) {
      const p = `${folder}/${shortName}.${ext}`;
      if (!candidates.includes(p)) {
        candidates.push(p);
      }
    }
  }
  return candidates;
};

import { resolveAssetUrl } from '../utils/assets';

export const CommitteeSection: React.FC<CommitteeSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const { committeeMembers } = siteConfig;

  // Track candidate index per member for automatic multi-path/extension resolution
  const [candidateIndex, setCandidateIndex] = useState<Record<string, number>>({});
  // Track failed members where no valid image exists across all candidates
  const [imageFailed, setImageFailed] = useState<Record<string, boolean>>({});

  const handleImageError = (memberId: string, totalCandidates: number) => {
    const currentIndex = candidateIndex[memberId] ?? 0;
    if (currentIndex < totalCandidates - 1) {
      // Try next candidate path
      setCandidateIndex((prev) => ({ ...prev, [memberId]: currentIndex + 1 }));
    } else {
      // All candidate paths exhausted, gracefully show neutral user silhouette
      setImageFailed((prev) => ({ ...prev, [memberId]: true }));
    }
  };

  return (
    <section id="committee" className="py-16 md:py-24 bg-[#FFF8E7]/25 border-t border-[#E65100]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-[#E65100] uppercase tracking-wider mb-2">
            <span>{currentLang === 'hi' ? 'गाँव की सेवा में' : 'Village Service'}</span>
            <span aria-hidden="true">·</span>
            <span>{currentLang === 'hi' ? 'सोनवे गोनरहा' : 'Sonwe Gonraha'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#33251D] tracking-tight text-balance">
            {t.committeeSectionTitle}
          </h2>
          <p className="mt-2 text-base text-[#75665D]">
            {t.committeeSectionSubtitle}
          </p>
        </div>

        {/* Equal Committee Members Grid — STRICTLY NO ROLES OR HIERARCHY */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {committeeMembers.map((member) => {
            const hasInstagram = Boolean(member.instagramUsername && member.instagramUsername.trim() !== '');
            const cleanUsername = member.instagramUsername ? member.instagramUsername.replace(/^@/, '') : '';
            const profileUrl = member.instagramUrl || (cleanUsername ? `https://www.instagram.com/${cleanUsername}/` : '');
            const memberName = currentLang === 'hi' ? member.nameHi : member.nameEn;

            // Candidate paths automatically check custom path, images/ and images/committee/
            const candidates = getCandidatePaths(member.id, member.photoUrl);
            const currentIdx = candidateIndex[member.id] ?? 0;
            const currentCandidatePath = candidates[currentIdx] || '';
            const resolvedSrc = resolveAssetUrl(currentCandidatePath);

            const hasFailed = imageFailed[member.id];

            return (
              <div
                key={member.id}
                className="bg-white border border-stone-200/90 rounded-2xl p-6 shadow-xs hover:border-[#FFC107] hover:shadow-md transition-all flex flex-col items-center text-center group"
              >
                {/* 1. Member Photograph / Silhouette Slot — NEVER INITIALS OR FAKE AVATARS */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-gradient-to-br from-[#FFF8E7] to-[#FFE082] border-2 border-[#FFC107] flex items-center justify-center text-[#E65100] mb-4 shadow-2xs group-hover:scale-105 transition-transform shrink-0">
                  {!hasFailed && resolvedSrc ? (
                    <img
                      src={resolvedSrc}
                      alt={memberName}
                      onError={() => handleImageError(member.id, candidates.length)}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  ) : (
                    /* Dignified neutral user silhouette icon when real photo file is not yet on disk */
                    <div className="flex flex-col items-center justify-center w-full h-full bg-[#FFF8E7] text-[#E65100]">
                      <User className="w-12 h-12 opacity-80" />
                    </div>
                  )}
                </div>

                {/* 2. Member Name */}
                <h3 className="text-lg font-bold text-[#33251D]">
                  {memberName}
                </h3>

                {/* 3. Instagram ID or "No Instagram ID" */}
                {hasInstagram ? (
                  <span className="text-xs font-mono text-stone-600 mt-1 block">
                    @{cleanUsername}
                  </span>
                ) : (
                  <span className="text-xs text-stone-400 italic mt-1 block">
                    {t.noInstagramId}
                  </span>
                )}

                {/* 4. Instagram Button — Rendered ONLY when an ID is available */}
                {hasInstagram && profileUrl ? (
                  <div className="mt-5 pt-3 border-t border-stone-100 w-full flex justify-center">
                    <a
                      href={profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200/70 transition-colors shadow-2xs cursor-pointer"
                      title={`${t.viewOnInstagram} - @${cleanUsername}`}
                    >
                      <Instagram className="w-3.5 h-3.5 text-rose-600" />
                      <span>{t.viewOnInstagram}</span>
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                  </div>
                ) : (
                  <div className="mt-5 pt-3 border-t border-stone-100 w-full min-h-[34px]" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

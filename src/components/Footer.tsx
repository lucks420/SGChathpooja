import React, { useState } from 'react';
import { ArrowUp, MapPin, Instagram, ExternalLink, Code2, User } from 'lucide-react';
import { Language, translations } from '../translations';
import { siteConfig } from '../site-config';
import { SacredSunIcon, HolyDiyaIcon } from './FestiveVisuals';

interface FooterProps {
  currentLang: Language;
}

// Helper to resolve asset paths for both local dev and GitHub Pages subpaths
const resolveAssetUrl = (path: string): string => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const cleanPath = path.replace(/^\/+/, '');
  const base = import.meta.env.BASE_URL || './';
  return base.endsWith('/') ? `${base}${cleanPath}` : `${base}/${cleanPath}`;
};

const DEVELOPER_PHOTO_CANDIDATES = [
  'assets/images/committee/lucky.jpg',
  'assets/images/lucky.jpg',
  'assets/images/committee/lucky.jpeg',
  'assets/images/committee/lucky.png',
];

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const { meta, developer } = siteConfig;
  const currentYear = new Date().getFullYear();

  // Photo candidate fallback for Lucky's real photo
  const [candidateIdx, setCandidateIdx] = useState(0);
  const [photoFailed, setPhotoFailed] = useState(false);

  const handlePhotoError = () => {
    if (candidateIdx < DEVELOPER_PHOTO_CANDIDATES.length - 1) {
      setCandidateIdx((prev) => prev + 1);
    } else {
      setPhotoFailed(true);
    }
  };

  const currentPhotoCandidate = developer.photoUrl || DEVELOPER_PHOTO_CANDIDATES[candidateIdx];
  const photoSrc = resolveAssetUrl(currentPhotoCandidate);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { href: '#home', label: t.navHome },
    { href: '#village', label: t.navVillage },
    { href: '#schedule', label: t.navSchedule },
    { href: '#donation', label: t.navDonation },
    { href: '#committee', label: t.navCommittee },
    { href: '#songs', label: t.navSongs },
    { href: '#contact', label: t.navContact },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1F0801] text-amber-100/80 pt-16 pb-12 border-t-2 border-[#E65100]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-amber-900/40">
          {/* Brand & Dedication */}
          <div className="md:col-span-5 flex flex-col space-y-4">
            <div className="flex items-center gap-2.5">
              <SacredSunIcon className="w-8 h-8 text-[#FFC107]" />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white">
                  SGChhathpooja
                </span>
                <span className="text-xs text-amber-300 font-medium">
                  {currentLang === 'hi' ? meta.committeeTitleHi : meta.committeeTitleEn}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-amber-200/80 leading-relaxed max-w-sm">
              {t.footerTagline}
            </p>

            <div className="flex items-center gap-2 text-xs text-amber-300/90 pt-1">
              <MapPin className="w-4 h-4 text-[#F57C00] shrink-0" />
              <span>
                {meta.villageHi}, ब्लॉक {meta.blockHi}, {meta.districtHi} ({meta.stateHi})
              </span>
            </div>
          </div>

          {/* Quick Navigation Links (Orphaned links removed) */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#FFC107] mb-3.5">
              {t.quickLinks}
            </h3>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="hover:text-white transition-colors py-1 truncate"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Cultural Essence & Back to Top */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
            <div className="text-left md:text-right space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs text-[#FFC107]">
                <HolyDiyaIcon className="w-4 h-4" />
                <span>जय छठी मैया</span>
              </div>
              <p className="text-xs text-amber-200/70 max-w-xs">
                {currentLang === 'hi'
                  ? 'स्वच्छता, सात्विकता और सूर्योपासना का पावन पर्व।'
                  : 'A holy celebration of purity, nature worship, and unity.'}
              </p>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="mt-6 md:mt-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-950/80 hover:bg-amber-900 border border-amber-800 text-amber-200 text-xs font-semibold transition-colors cursor-pointer"
              aria-label={t.backToTop}
            >
              <span>{t.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* EYE-CATCHING DEVELOPER CREDIT SECTION (Prominent, Elegant & Chhath Puja Themed) */}
        <div className="my-8 relative group">
          {/* Subtle warm saffron & gold halo */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#E65100]/30 via-[#FFC107]/30 to-[#E65100]/30 rounded-2xl blur-xs opacity-75 group-hover:opacity-100 transition duration-500 pointer-events-none" />

          <div className="relative p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#240A02]/95 via-[#381103]/90 to-[#240A02]/95 border border-[#FFC107]/35 group-hover:border-[#FFC107]/70 shadow-xl shadow-black/40 transition-all duration-300 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 text-center sm:text-left">
              {/* Lucky's Real Photo Frame */}
              <div className="relative shrink-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-0.5 bg-gradient-to-tr from-[#E65100] via-[#FFC107] to-[#F57C00] shadow-md shadow-amber-950/60 ring-2 ring-[#FFC107]/25">
                  <div className="w-full h-full rounded-full overflow-hidden bg-amber-950 flex items-center justify-center">
                    {!photoFailed && photoSrc ? (
                      <img
                        src={photoSrc}
                        alt="Lucky - Website Developer"
                        onError={handlePhotoError}
                        className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <User className="w-8 h-8 text-amber-300" />
                    )}
                  </div>
                </div>
                {/* Code icon indicator */}
                <span
                  className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#E65100] text-amber-200 border-2 border-[#1F0801] flex items-center justify-center shadow-xs"
                  title="Developer"
                >
                  <Code2 className="w-3.5 h-3.5" />
                </span>
              </div>

              {/* Developer Information */}
              <div className="space-y-1">
                <div className="text-[11px] uppercase tracking-wider text-amber-300/80 font-medium">
                  {t.developerCreditHeading}
                </div>

                <h4 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight flex items-center justify-center sm:justify-start gap-2">
                  <span className="bg-gradient-to-r from-white via-amber-100 to-amber-300 bg-clip-text text-transparent">
                    {developer.name}
                  </span>
                </h4>

                <p className="text-xs text-amber-200/70">
                  {currentLang === 'hi'
                    ? 'सोनवे गोनरहा छठ पूजा उत्सव के लिए समर्पित एवं निष्ठापूर्वक विकसित'
                    : 'Crafted with devotion & care for Sonwe Gonraha Chhath Puja'}
                </p>
              </div>
            </div>

            {/* Clear, Prominent Instagram Follow Button */}
            <a
              href={developer.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:from-[#f77737] hover:via-[#e1306c] hover:to-[#5851db] transition-all duration-300 shadow-lg shadow-pink-950/40 hover:shadow-pink-600/30 hover:scale-[1.03] active:scale-[0.98] cursor-pointer shrink-0 border border-white/20"
            >
              <Instagram className="w-4 h-4 shrink-0" />
              <span>{t.followDeveloperInstagram}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80 shrink-0" />
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-amber-300/60 text-center sm:text-left">
          <div>
            © {currentYear} SGChhathpooja ({meta.villageEn}). {t.allRightsReserved}
          </div>
          <div className="flex items-center gap-1 text-[11px] text-amber-200/70">
            <span>सोनवे गोनरहा ग्रामवासियों का सामूहिक प्रयास</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Globe } from 'lucide-react';
import { Language, translations } from '../translations';
import { SacredSunIcon } from './FestiveVisuals';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentLang, onLanguageChange }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = translations[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${
        isScrolled
          ? 'bg-[#FFFDF9]/95 backdrop-blur-md border-[#E65100]/15 shadow-sm'
          : 'bg-[#FFFDF9] border-[#E65100]/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18 gap-4 md:gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 text-slate-900 focus-visible:outline-2 focus-visible:outline-[#E65100] rounded-md shrink-0"
          >
            <SacredSunIcon className="w-8 h-8 text-[#E65100]" />
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold tracking-tight text-[#E65100] whitespace-nowrap">
                SGChathpooja
              </span>
              <span className="text-[10px] md:text-xs text-[#75665D] font-medium hidden sm:inline whitespace-nowrap">
                {currentLang === 'hi' ? 'सोनवे गोनरहा छठ पूजा समिति' : 'Sonwe Gonraha Chhath Puja Committee'}
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav
            aria-label="Main Navigation"
            className="hidden xl:flex items-center gap-5 text-sm font-medium text-[#33251D]"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-[#E65100] transition-colors py-1 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Language Switcher & Primary CTA */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Language Switcher */}
            <div
              role="group"
              aria-label={t.languageSelect}
              className="flex items-center bg-[#FFF8E7] border border-[#FFC107]/50 rounded-lg p-0.5"
            >
              <button
                type="button"
                onClick={() => onLanguageChange('hi')}
                aria-pressed={currentLang === 'hi'}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                  currentLang === 'hi'
                    ? 'bg-[#E65100] text-white shadow-xs'
                    : 'text-[#75665D] hover:text-[#33251D]'
                }`}
              >
                हिन्दी
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                aria-pressed={currentLang === 'en'}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                  currentLang === 'en'
                    ? 'bg-[#E65100] text-white shadow-xs'
                    : 'text-[#75665D] hover:text-[#33251D]'
                }`}
              >
                English
              </button>
            </div>

            {/* Donate CTA button */}
            <a
              href="#donation"
              onClick={(e) => handleNavClick(e, '#donation')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs md:text-sm font-semibold text-white bg-[#E65100] hover:bg-[#BF360C] rounded-lg transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-[#BF360C] whitespace-nowrap"
            >
              <Heart className="w-3.5 h-3.5 fill-white/30" />
              <span>{t.donateButton}</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? t.menuClose : t.menuOpen}
              className="xl:hidden inline-flex items-center justify-center p-2 rounded-lg text-[#33251D] hover:bg-[#FFF8E7] hover:text-[#E65100] focus-visible:outline-2 focus-visible:outline-[#E65100]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="xl:hidden border-t border-[#E65100]/15 bg-[#FFFDF9] px-4 pt-3 pb-6 shadow-lg animate-in fade-in duration-150"
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 rounded-md text-base font-medium text-[#33251D] hover:bg-[#FFF8E7] hover:text-[#E65100] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-amber-200/50">
              <a
                href="#donation"
                onClick={(e) => handleNavClick(e, '#donation')}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#E65100] hover:bg-[#BF360C] rounded-lg transition-colors shadow-sm"
              >
                <Heart className="w-4 h-4 fill-white/30" />
                <span>{t.donateButton}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language } from './translations';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { VillageIntro } from './components/VillageIntro';
import { FestivalSchedule } from './components/FestivalSchedule';
import { DonationSection } from './components/DonationSection';
import { CommitteeSection } from './components/CommitteeSection';
import { ChhathSongs } from './components/ChhathSongs';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

const STORAGE_KEY = 'sgchathpooja_lang';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'hi' || saved === 'en') {
        return saved;
      }
    } catch {
      // Fallback if localStorage is inaccessible
    }
    return 'hi'; // Hindi default as requested
  });

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Graceful fallback
    }
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  return (
    <div className={`min-h-screen flex flex-col bg-[#FFFDF9] text-[#33251D] ${currentLang === 'hi' ? 'font-hindi' : ''}`}>
      {/* Sticky Header with 3-Zone Navigation */}
      <Header currentLang={currentLang} onLanguageChange={handleLanguageChange} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero currentLang={currentLang} />

        {/* 2. Village Introduction Section (Includes 3-Image Devotional Slideshow below Google Maps button) */}
        <VillageIntro currentLang={currentLang} />

        {/* 3. Chhath Festival Schedule (Exact 2 days: 14 Nov Sunset & 15 Nov Sunrise) */}
        <FestivalSchedule currentLang={currentLang} />

        {/* 4. Donation Section (3 items only: QR, UPI ID, Mobile Number; Informational amounts & 6 steps) */}
        <DonationSection currentLang={currentLang} />

        {/* 5. Organizing Committee Section (Equal members, photo, name, Instagram follow button) */}
        <CommitteeSection currentLang={currentLang} />

        {/* 6. Popular Chhath Devotional Songs Section (Direct responsive 16:9 YouTube embeds) */}
        <ChhathSongs currentLang={currentLang} />

        {/* 7. Contact & Information Section */}
        <ContactSection currentLang={currentLang} />
      </main>

      {/* Footer with dedication, links, Lucky developer credit, dynamic year, and back-to-top */}
      <Footer currentLang={currentLang} />
    </div>
  );
}

import React, { useState } from 'react';
import { Copy, Check, AlertTriangle, MessageSquare, ShieldAlert, ExternalLink } from 'lucide-react';
import { Language, translations } from '../translations';
import { siteConfig } from '../site-config';
import { resolveAssetUrl } from '../utils/assets';

interface DonationSectionProps {
  currentLang: Language;
}

export const DonationSection: React.FC<DonationSectionProps> = ({ currentLang }) => {
  const [copiedId, setCopiedId] = useState(false);
  const [copiedMobile, setCopiedMobile] = useState(false);
  const [showWhatsAppNotice, setShowWhatsAppNotice] = useState(false);

  const t = translations[currentLang];
  const { donation } = siteConfig;

  const handleCopyUpi = () => {
    if (donation.upiId) {
      navigator.clipboard.writeText(donation.upiId);
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 2500);
    }
  };

  const handleCopyMobile = () => {
    if (donation.upiMobileNumber) {
      navigator.clipboard.writeText(donation.upiMobileNumber);
      setCopiedMobile(true);
      setTimeout(() => setCopiedMobile(false), 2500);
    }
  };

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    const isPlaceholder = !donation.whatsappGroupUrl || donation.whatsappGroupUrl.includes('REPLACE');
    if (isPlaceholder) {
      e.preventDefault();
      setShowWhatsAppNotice(true);
    }
  };

  return (
    <section id="donation" className="py-16 md:py-24 bg-[#FFF8E7]/30 border-t border-[#E65100]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Mandatory Message */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-[#E65100] uppercase tracking-wider mb-2">
            <span>{currentLang === 'hi' ? 'सामूहिक सहयोग' : 'Community Contribution'}</span>
            <span aria-hidden="true">·</span>
            <span>{currentLang === 'hi' ? 'पावन चंदा' : 'Devotional Fund'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#33251D] tracking-tight text-balance">
            {t.donationSectionTitle}
          </h2>

          {/* Exact Paragraph mandated by user */}
          <div className="mt-4 p-5 sm:p-6 bg-white border border-[#FFC107]/50 rounded-2xl shadow-xs">
            <p className="text-base sm:text-lg text-[#33251D] leading-relaxed font-medium">
              {t.donationParagraph}
            </p>
          </div>
        </div>

        {/* Demo Notice Banner */}
        <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-amber-50 border-2 border-amber-300 text-amber-950 flex items-start gap-3.5 shadow-xs max-w-4xl">
          <AlertTriangle className="w-5 h-5 text-[#E65100] shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-amber-900 leading-normal font-medium">
            {t.demoNoticeText}
          </p>
        </div>

        {/* Main 2-Column Donation & Instructions Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Donation Card with ONLY 3 Items (QR code, UPI ID, UPI mobile number) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-8 shadow-sm flex flex-col items-center text-center">
              {/* 1. QR Code */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-xl overflow-hidden bg-amber-50 border-2 border-dashed border-[#F57C00]/40 p-2 flex items-center justify-center">
                <img
                  src={resolveAssetUrl(donation.qrImagePath || 'assets/images/demo-qr.svg')}
                  alt="Demo UPI QR Code - Not for real payment"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Account / UPI Identifiers: Only UPI ID & UPI Mobile Number */}
              <div className="w-full mt-6 space-y-3.5 text-left">
                {/* 2. UPI ID */}
                <div className="bg-[#FFF8E7] border border-[#FFC107]/50 rounded-xl p-3.5 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <span className="text-[11px] font-semibold text-[#75665D] uppercase tracking-wider block">
                      {t.upiIdLabel}
                    </span>
                    <span className="text-sm sm:text-base font-mono font-bold text-[#33251D] truncate block">
                      {donation.upiId}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyUpi}
                    aria-label={copiedId ? t.copied : t.copyUpi}
                    className="shrink-0 inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-stone-200 text-[#E65100] hover:bg-stone-50 transition-colors shadow-2xs cursor-pointer"
                  >
                    {copiedId ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">{t.copied}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>{t.copyUpi}</span>
                      </>
                    )}
                  </button>
                </div>

                {/* 3. UPI Mobile Number */}
                <div className="bg-[#FFF8E7]/50 border border-[#FFC107]/40 rounded-xl p-3.5 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <span className="text-[11px] font-semibold text-[#75665D] uppercase tracking-wider block">
                      {t.upiNumberLabel}
                    </span>
                    <span className="text-sm sm:text-base font-mono font-bold text-[#33251D] block">
                      {donation.upiMobileNumber}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyMobile}
                    aria-label={copiedMobile ? t.copied : t.copyUpi}
                    className="shrink-0 inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-stone-200 text-[#E65100] hover:bg-stone-50 transition-colors shadow-2xs cursor-pointer"
                  >
                    {copiedMobile ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">{t.copied}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>{t.copyUpi}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contribution & Payment Steps (Required 6 steps) & WhatsApp CTA */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold text-[#33251D] mb-5">
                {t.paymentInstructionsTitle}
              </h3>
              
              <ol className="space-y-3.5 text-sm sm:text-base text-[#33251D] leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#FFF8E7] border border-[#FFC107] text-[#E65100] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </span>
                  <span>{t.step1.replace(/^[0-9]\.\s*/, '')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#FFF8E7] border border-[#FFC107] text-[#E65100] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <span>{t.step2.replace(/^[0-9]\.\s*/, '')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#FFF8E7] border border-[#FFC107] text-[#E65100] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </span>
                  <span>{t.step3.replace(/^[0-9]\.\s*/, '')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#FFF8E7] border border-[#FFC107] text-[#E65100] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    4
                  </span>
                  <span>{t.step4.replace(/^[0-9]\.\s*/, '')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#FFF8E7] border border-[#FFC107] text-[#E65100] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    5
                  </span>
                  <span className="font-semibold text-[#E65100]">
                    {t.step5.replace(/^[0-9]\.\s*/, '')}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#FFF8E7] border border-[#FFC107] text-[#E65100] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    6
                  </span>
                  <span>{t.step6.replace(/^[0-9]\.\s*/, '')}</span>
                </li>
              </ol>

              {/* WhatsApp Verification CTA */}
              <div className="mt-8 pt-6 border-t border-stone-100">
                <a
                  href={donation.whatsappGroupUrl}
                  onClick={handleWhatsAppClick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#25D366] hover:bg-[#20BA5A] rounded-xl transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-[#20BA5A] cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>{t.whatsappGroupBtn}</span>
                  <ExternalLink className="w-4 h-4 opacity-80" />
                </a>

                {showWhatsAppNotice && (
                  <div className="mt-3 p-3 bg-stone-100 border border-stone-200 rounded-xl text-xs text-[#75665D] flex items-start justify-between gap-2">
                    <p>{t.whatsappPlaceholderNote}</p>
                    <button
                      type="button"
                      onClick={() => setShowWhatsAppNotice(false)}
                      className="text-[#33251D] font-bold px-1"
                    >
                      ✕
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Static Website Disclaimer Notice */}
            <div className="bg-[#FFFDF9] rounded-xl border border-stone-200 p-5 text-xs text-[#75665D] flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-stone-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#33251D] block mb-1">
                  {t.staticDisclaimerTitle}
                </span>
                <p className="leading-relaxed">
                  {t.staticDisclaimerText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

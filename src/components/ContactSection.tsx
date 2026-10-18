import React from 'react';
import { Phone, PhoneCall, MapPin, ExternalLink, Mail } from 'lucide-react';
import { Language, translations } from '../translations';
import { siteConfig } from '../site-config';

interface ContactSectionProps {
  currentLang: Language;
}

// WhatsApp brand glyph
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.336 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const { contact, meta } = siteConfig;

  // Phone list with both numbers
  const phoneList = contact.phoneNumbers || [
    { number: '+91 93698 59309', tel: '+919369859309' },
    { number: '+91 91708 06280', tel: '+919170806280' },
  ];

  const hasEmail = Boolean(contact.email && contact.email.trim() !== '' && contact.email.includes('@'));

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#FFF8E7]/35 border-t border-[#E65100]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-[#E65100] uppercase tracking-wider mb-2">
            <span>{currentLang === 'hi' ? 'संवाद एवं सहायता' : 'Reach Out'}</span>
            <span aria-hidden="true">·</span>
            <span>{currentLang === 'hi' ? 'समिति संपर्क' : 'Committee Contacts'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#33251D] tracking-tight text-balance">
            {t.contactSectionTitle}
          </h2>
          <p className="mt-2 text-base text-[#75665D]">
            {t.contactSectionSubtitle}
          </p>
        </div>

        {/* Contact Cards Grid: 3 prominent columns (or 4 when email is configured) */}
        <div className={`grid grid-cols-1 md:grid-cols-2 ${hasEmail ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-6`}>
          {/* 1. Separate Clickable Mobile Numbers Card */}
          <div className="bg-white border border-stone-200/90 rounded-2xl p-6 shadow-xs hover:border-[#FFC107] hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200/80 flex items-center justify-center text-[#E65100] shadow-2xs group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#E65100] uppercase tracking-wider block">
                    {currentLang === 'hi' ? 'सीधा संपर्क' : 'Direct Contact'}
                  </span>
                  <h3 className="text-base font-bold text-[#33251D]">
                    {t.phoneLabel}
                  </h3>
                </div>
              </div>

              {/* Both numbers displayed clearly as separate, clickable contact items */}
              <div className="space-y-3">
                {phoneList.map((phoneItem, idx) => (
                  <a
                    key={phoneItem.number}
                    href={`tel:${phoneItem.tel}`}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-[#FFF8E7]/60 hover:bg-orange-50 border border-amber-200/70 hover:border-[#E65100]/50 transition-all text-left shadow-2xs group/btn cursor-pointer"
                    title={`Call ${phoneItem.number}`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="w-9 h-9 rounded-xl bg-white border border-orange-200 flex items-center justify-center text-[#E65100] group-hover/btn:bg-[#E65100] group-hover/btn:text-white transition-colors shrink-0 shadow-2xs">
                        <PhoneCall className="w-4 h-4" />
                      </span>
                      <div className="min-w-0">
                        <span className="text-[11px] text-[#75665D] font-medium block">
                          {currentLang === 'hi' ? `संपर्क सूत्र ${idx + 1}` : `Contact Line ${idx + 1}`}
                        </span>
                        <span className="text-sm sm:text-base font-bold text-[#33251D] font-mono tracking-wide block truncate">
                          {phoneItem.number}
                        </span>
                      </div>
                    </div>
                    <span className="ml-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-orange-200 text-[#E65100] group-hover/btn:bg-[#E65100] group-hover/btn:text-white group-hover/btn:border-[#E65100] text-xs font-bold transition-all shrink-0 shadow-2xs">
                      <span>{t.callButton}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
              <span>{currentLang === 'hi' ? 'पूजा व्यवस्था व सहयोग' : 'Pooja inquiries & support'}</span>
              <span className="inline-flex items-center gap-1 font-semibold text-emerald-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                {currentLang === 'hi' ? 'सक्रिय' : 'Available'}
              </span>
            </div>
          </div>

          {/* 2. Official WhatsApp Group Invitation Card */}
          <div className="bg-white border border-stone-200/90 rounded-2xl p-6 shadow-xs hover:border-[#25D366]/60 hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#25D366] shadow-2xs group-hover:scale-105 transition-transform">
                  <WhatsAppIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block">
                    {currentLang === 'hi' ? 'कम्युनिटी' : 'Community'}
                  </span>
                  <h3 className="text-base font-bold text-[#33251D]">
                    {t.whatsappCardHeading}
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#75665D] leading-relaxed mb-4">
                {currentLang === 'hi'
                  ? 'सोनवे गोनरहा छठ पूजा के सभी पावन समाचार, कार्यक्रम समय-सारणी एवं जरूरी सूचनाओं के लिए हमारे आधिकारिक WhatsApp ग्रुप से जुड़ें।'
                  : 'Join our official WhatsApp group for real-time announcements, ritual schedules, and festival updates from Sonwe Gonraha.'}
              </p>
            </div>

            <div className="mt-2 pt-4 border-t border-stone-100">
              <a
                href={contact.whatsappGroupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl text-sm font-bold text-white bg-[#25D366] hover:bg-[#20ba5a] active:bg-[#1da851] transition-all shadow-md shadow-emerald-900/10 hover:shadow-emerald-600/25 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>{t.joinGroupButton}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80 shrink-0" />
              </a>
            </div>
          </div>

          {/* 3. Village Location Card */}
          <div className="bg-white border border-stone-200/90 rounded-2xl p-6 shadow-xs hover:border-[#FFC107] hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center text-[#B71C1C] shadow-2xs group-hover:scale-105 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#B71C1C] uppercase tracking-wider block">
                    {currentLang === 'hi' ? 'पूजा स्थल' : 'Puja Venue'}
                  </span>
                  <h3 className="text-base font-bold text-[#33251D]">
                    {t.locationLabel}
                  </h3>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-amber-50/50 border border-amber-200/60 mb-2">
                <p className="text-sm font-bold text-[#33251D] leading-snug">
                  {currentLang === 'hi' ? contact.locationNoteHi : contact.locationNoteEn}
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
              <span>
                {meta.villageHi} ({meta.villageEn})
              </span>
              <span className="font-semibold text-[#E65100]">
                {meta.districtHi}, {meta.stateHi}
              </span>
            </div>
          </div>

          {/* 4. Email Card — HIDDEN completely until real address is provided */}
          {hasEmail && (
            <div className="bg-white border border-stone-200/90 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-[#E65100] mb-3">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-bold text-[#75665D] uppercase tracking-wider">
                  {t.emailLabel}
                </h3>
                <p className="mt-1 text-sm font-semibold text-[#33251D] truncate">
                  {contact.email}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-100">
                <a
                  href={`mailto:${contact.email}`}
                  className="text-xs font-semibold text-[#E65100] hover:underline"
                >
                  {currentLang === 'hi' ? 'ईमेल भेजें' : 'Send Email'}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

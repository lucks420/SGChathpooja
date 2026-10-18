import React from 'react';

/**
 * High-fidelity festive SVGs representing authentic Chhath Puja motifs:
 * Sun God (Surya Dev), Bamboo Soop with lit Diya and offerings,
 * River Ghat steps with rippling water, and Diya oil lamps.
 */

export const SacredSunIcon: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <circle cx="50" cy="50" r="22" fill="url(#sunGrad)" />
    <circle cx="50" cy="50" r="16" fill="#FFF8E7" opacity="0.3" />
    <path
      d="M50 4 L50 16 M50 84 L50 96 M4 50 L16 50 M84 50 L96 50 M17.5 17.5 L26 26 M74 74 L82.5 82.5 M17.5 82.5 L26 74 M74 26 L82.5 17.5"
      stroke="#F57C00"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M50 10 L50 14 M50 86 L50 90 M10 50 L14 50 M86 50 L90 50 M22 22 L25 25 M75 75 L78 78 M22 78 L25 75 M75 25 L78 22"
      stroke="#FFC107"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <defs>
      <radialGradient id="sunGrad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(50 50) rotate(90) scale(22)">
        <stop stopColor="#FFC107" />
        <stop offset="0.75" stopColor="#F57C00" />
        <stop offset="1" stopColor="#E65100" />
      </radialGradient>
    </defs>
  </svg>
);

export const HolyDiyaIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    {/* Flame glow */}
    <ellipse cx="32" cy="22" rx="7" ry="12" fill="#FFC107" opacity="0.3" filter="blur(2px)" />
    {/* Flame */}
    <path
      d="M32 10 C35 17 38 22 36 27 C34 31 30 31 28 27 C26 22 29 17 32 10 Z"
      fill="url(#flameGrad)"
    />
    {/* Inner core */}
    <ellipse cx="32" cy="24" rx="2" ry="4" fill="#FFFDF9" />
    {/* Diya clay lamp base */}
    <path
      d="M12 36 C12 48 22 54 32 54 C42 54 52 48 52 36 C42 41 22 41 12 36 Z"
      fill="url(#clayGrad)"
    />
    <path
      d="M12 36 C22 40 42 40 52 36 C48 34 16 34 12 36 Z"
      fill="#8D3012"
    />
    <defs>
      <linearGradient id="flameGrad" x1="32" y1="10" x2="32" y2="30" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFF8E7" />
        <stop offset="0.4" stopColor="#FFC107" />
        <stop offset="1" stopColor="#E65100" />
      </linearGradient>
      <linearGradient id="clayGrad" x1="12" y1="36" x2="52" y2="54" gradientUnits="userSpaceOnUse">
        <stop stopColor="#BF360C" />
        <stop offset="1" stopColor="#7E2405" />
      </linearGradient>
    </defs>
  </svg>
);

export const ChhathHeroBannerGraphic: React.FC = () => (
  <div className="relative w-full h-full min-h-[440px] md:min-h-[520px] rounded-2xl overflow-hidden bg-gradient-to-b from-[#2E1005] via-[#5C2308] to-[#1F0801] flex flex-col justify-between p-6 md:p-10 border border-[#F57C00]/30 shadow-2xl">
    {/* Sacred Sun Aura */}
    <div className="absolute top-10 right-10 md:right-20 w-56 h-56 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-[#E65100]/40 via-[#FFC107]/30 to-transparent blur-3xl pointer-events-none" />

    {/* Sun Vector Illustration */}
    <div className="absolute top-8 right-8 md:top-14 md:right-16 opacity-90">
      <svg width="180" height="180" viewBox="0 0 200 200" className="w-32 h-32 md:w-48 md:h-48 drop-shadow-[0_0_25px_rgba(255,193,7,0.6)]">
        <circle cx="100" cy="100" r="48" fill="url(#heroSunGrad)" />
        {/* Tilak mark */}
        <path d="M100 78 L100 112" stroke="#B71C1C" strokeWidth="4" strokeLinecap="round" />
        <circle cx="100" cy="118" r="3.5" fill="#FFC107" />
        {/* Radiating Sun Beams */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
          <line
            key={deg}
            x1="100"
            y1="24"
            x2="100"
            y2="38"
            stroke="#FFC107"
            strokeWidth="3.5"
            strokeLinecap="round"
            transform={`rotate(${deg} 100 100)`}
          />
        ))}
        {[15, 45, 75, 105, 135, 165, 195, 225, 255, 285, 315, 345].map((deg) => (
          <line
            key={deg}
            x1="100"
            y1="30"
            x2="100"
            y2="38"
            stroke="#F57C00"
            strokeWidth="2"
            strokeLinecap="round"
            transform={`rotate(${deg} 100 100)`}
          />
        ))}
        <defs>
          <radialGradient id="heroSunGrad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(100 100) rotate(90) scale(48)">
            <stop stopColor="#FFF8E7" />
            <stop offset="0.3" stopColor="#FFC107" />
            <stop offset="0.75" stopColor="#F57C00" />
            <stop offset="1" stopColor="#B71C1C" />
          </radialGradient>
        </defs>
      </svg>
    </div>

    {/* Devotional Shlok and Mantras */}
    <div className="relative z-10 max-w-xl">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFC107]/15 border border-[#FFC107]/40 text-[#FFC107] text-xs font-semibold tracking-wider uppercase mb-4">
        <span>ॐ सूर्याय नमः</span>
        <span>·</span>
        <span>छठी मैया की जय</span>
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">
        सोनवे गोनरहा में आस्था का महापर्व
      </h2>
      <p className="mt-2 text-sm md:text-base text-amber-100/90 leading-relaxed">
        पवित्र जल, सूर्योपासना, स्वच्छता और गाँव की अटूट सामूहिक एकता का साक्षी।
      </p>
    </div>

    {/* Traditional Ghat & Devotees silhouette representation */}
    <div className="relative z-10 mt-auto pt-6 border-t border-[#F57C00]/25">
      <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-amber-200">
        <div className="flex items-center gap-2">
          <HolyDiyaIcon className="w-5 h-5" />
          <span>अखंड दीप प्रज्वलन व सात्विक अर्घ्य</span>
        </div>
        <div className="flex items-center gap-3 font-mono text-[11px] bg-black/40 px-3 py-1.5 rounded-lg border border-amber-500/30">
          <span>पिपरईच ब्लॉक</span>
          <span>·</span>
          <span>गोरखपुर (उ.प्र.)</span>
        </div>
      </div>
    </div>

    {/* Water ripples SVG at the bottom */}
    <div className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none opacity-30 overflow-hidden">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-none stroke-[#FFC107]/40 stroke-[1.5]">
        <path d="M0,40 C150,90 350,-10 500,40 C650,90 850,-10 1000,40 C1100,70 1180,20 1200,40" />
        <path d="M0,70 C180,20 320,110 520,70 C720,20 880,110 1050,70 C1130,50 1170,80 1200,70" />
        <path d="M0,95 C120,60 280,120 450,95 C620,70 780,120 950,95 C1080,75 1150,110 1200,95" />
      </svg>
    </div>
  </div>
);

export const TraditionalSoopIllustration: React.FC<{ className?: string }> = ({ className = 'w-full h-48' }) => (
  <div className={`relative rounded-xl overflow-hidden bg-gradient-to-br from-[#FFF8E7] to-[#FFE082] p-4 flex flex-col justify-center items-center text-center border border-[#FFC107]/50 ${className}`}>
    <svg viewBox="0 0 100 80" className="w-24 h-20 mb-2 drop-shadow-md">
      {/* Bamboo Soop outline */}
      <path d="M15 65 L25 25 Q50 15 75 25 L85 65 Q50 72 15 65 Z" fill="#D7CCC8" stroke="#8D6E63" strokeWidth="2.5" />
      {/* Bamboo weave textures */}
      <path d="M25 35 Q50 25 75 35" stroke="#A1887F" strokeWidth="1.5" fill="none" />
      <path d="M20 48 Q50 38 80 48" stroke="#A1887F" strokeWidth="1.5" fill="none" />
      {/* Offerings: Coconut, Banana, Thekua */}
      <circle cx="50" cy="46" r="10" fill="#6D4C41" stroke="#4E342E" strokeWidth="1" />
      <ellipse cx="38" cy="52" rx="7" ry="5" fill="#FFB300" />
      <ellipse cx="62" cy="52" rx="7" ry="5" fill="#FFB300" />
      {/* Holy Diya in center */}
      <ellipse cx="50" cy="38" rx="5" ry="3" fill="#D84315" />
      <path d="M50 30 C52 34 51 36 50 38 C49 36 48 34 50 30 Z" fill="#FFD54F" />
    </svg>
    <div className="text-xs font-semibold text-[#8D3012]">पारंपरिक सूप व प्रसाद</div>
    <div className="text-[11px] text-[#75665D]">ठेकुआ, मौसमी फल व अखंड दीप</div>
  </div>
);

export const VillageGhatIllustration: React.FC<{ className?: string }> = ({ className = 'w-full h-48' }) => (
  <div className={`relative rounded-xl overflow-hidden bg-gradient-to-b from-[#FFF3E0] to-[#FFE0B2] p-4 flex flex-col justify-center items-center text-center border border-[#FFB74D]/50 ${className}`}>
    <svg viewBox="0 0 120 80" className="w-28 h-20 mb-2 drop-shadow-sm">
      {/* Sun on horizon */}
      <circle cx="60" cy="35" r="16" fill="#FFA726" />
      {/* Ghat steps */}
      <path d="M10 50 L110 50 L110 58 L10 58 Z" fill="#BCAAA4" />
      <path d="M15 58 L105 58 L105 66 L15 66 Z" fill="#A1887F" />
      <path d="M20 66 L100 66 L100 74 L20 74 Z" fill="#8D6E63" />
      {/* River water */}
      <path d="M0 62 Q30 58 60 62 T120 62 L120 80 L0 80 Z" fill="#80DEEA" opacity="0.6" />
      {/* Floating Diya */}
      <circle cx="60" cy="68" r="2.5" fill="#E65100" />
      <circle cx="60" cy="66" r="1" fill="#FFEB3B" />
    </svg>
    <div className="text-xs font-semibold text-[#8D3012]">सोनवे गोनरहा घाट व्यवस्था</div>
    <div className="text-[11px] text-[#75665D]">स्वच्छता एवं अर्घ्य स्थल</div>
  </div>
);

/**
 * Three High-Fidelity Devotional Slide Visuals for the Slideshow
 */

// Slide 1: Chhathi Maiya Devotional Iconography
export const ChhathMaiyaSlideGraphic: React.FC<{ className?: string }> = ({ className = 'w-full h-full min-h-[260px]' }) => (
  <div className={`relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#3E1103] via-[#7B2404] to-[#2E0B01] p-6 sm:p-8 flex flex-col justify-between text-white border border-[#FFC107]/40 shadow-inner ${className}`}>
    <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-[#FFC107]/20 blur-2xl pointer-events-none" />
    <div className="relative z-10 flex items-center justify-between">
      <span className="px-3 py-1 rounded-full bg-[#FFC107]/20 border border-[#FFC107]/50 text-[#FFD54F] text-xs font-bold font-mono">
        दर्शन ०१ / SLIDE 01
      </span>
      <div className="flex items-center gap-1.5 text-xs text-amber-200">
        <HolyDiyaIcon className="w-4 h-4" />
        <span>जय छठी मईया</span>
      </div>
    </div>
    
    <div className="relative z-10 my-4 flex flex-col items-center text-center">
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-[#E65100] to-[#FFC107] p-1 shadow-lg mb-3">
        <div className="w-full h-full rounded-full bg-[#4E1402] flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-14 h-14">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#FFC107" strokeWidth="2" strokeDasharray="4 2"/>
            <path d="M50 20 C65 35 65 65 50 80 C35 65 35 35 50 20 Z" fill="#E65100"/>
            <circle cx="50" cy="50" r="14" fill="#FFC107"/>
            <circle cx="50" cy="50" r="6" fill="#B71C1C"/>
          </svg>
        </div>
      </div>
      <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-amber-100">
        छठी मईया पावन स्वरूप
      </h4>
      <p className="text-xs sm:text-sm text-amber-200/90 max-w-md mt-1 leading-relaxed">
        आस्था, शुद्धि, मातृत्व और लोक संस्कृति की अधिष्ठात्री देवी माँ छठी का पावन वंदन।
      </p>
    </div>

    <div className="relative z-10 text-center text-[11px] text-amber-300/80 font-mono">
      Chhathi Maiya Sacred Devotional Representation
    </div>
  </div>
);

// Slide 2: Sunset Sandhya Arghya
export const SunsetArghyaSlideGraphic: React.FC<{ className?: string }> = ({ className = 'w-full h-full min-h-[260px]' }) => (
  <div className={`relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#4A1802] via-[#B83E08] to-[#260801] p-6 sm:p-8 flex flex-col justify-between text-white border border-[#F57C00]/40 shadow-inner ${className}`}>
    <div className="absolute top-0 right-1/4 w-40 h-40 rounded-full bg-[#FF7043]/30 blur-2xl pointer-events-none" />
    <div className="relative z-10 flex items-center justify-between">
      <span className="px-3 py-1 rounded-full bg-white/15 border border-white/30 text-amber-200 text-xs font-bold font-mono">
        दर्शन ०२ / SLIDE 02
      </span>
      <span className="text-xs font-bold text-amber-300">
        14 नवम्बर — संध्या अर्घ्य
      </span>
    </div>

    <div className="relative z-10 my-4 flex flex-col items-center text-center">
      <svg viewBox="0 0 140 70" className="w-28 h-16 drop-shadow-md mb-2">
        {/* Setting Sun */}
        <path d="M30 45 A 40 40 0 0 1 110 45 Z" fill="#FF7043" />
        <circle cx="70" cy="45" r="22" fill="#FFE082" />
        {/* River Water Line */}
        <path d="M0 45 Q35 40 70 45 T140 45 L140 70 L0 70 Z" fill="#00695C" opacity="0.6" />
        {/* Floating Diya */}
        <circle cx="70" cy="50" r="3" fill="#FFC107" />
        <circle cx="70" cy="48" r="1.5" fill="#FFFFFF" />
      </svg>
      <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
        अस्ताचलगामी सूर्य को संध्या अर्घ्य
      </h4>
      <p className="text-xs sm:text-sm text-amber-100/90 max-w-md mt-1 leading-relaxed">
        डूबते हुए सूर्य को नमन कर कृतज्ञता अर्पित करने का अद्वितीय लोक अनुष्ठान।
      </p>
    </div>

    <div className="relative z-10 text-center text-[11px] text-amber-200/80 font-mono">
      Evening Arghya — Reverence to the Setting Sun
    </div>
  </div>
);

// Slide 3: Sunrise Morning Arghya
export const SunriseArghyaSlideGraphic: React.FC<{ className?: string }> = ({ className = 'w-full h-full min-h-[260px]' }) => (
  <div className={`relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#2E1805] via-[#A85806] to-[#1C0F02] p-6 sm:p-8 flex flex-col justify-between text-white border border-[#FFC107]/50 shadow-inner ${className}`}>
    <div className="absolute top-2 left-1/3 w-48 h-48 rounded-full bg-[#FFD54F]/25 blur-3xl pointer-events-none" />
    <div className="relative z-10 flex items-center justify-between">
      <span className="px-3 py-1 rounded-full bg-[#FFC107]/20 border border-[#FFC107]/50 text-[#FFD54F] text-xs font-bold font-mono">
        दर्शन ०३ / SLIDE 03
      </span>
      <span className="text-xs font-bold text-amber-300">
        15 नवम्बर — उषा अर्घ्य
      </span>
    </div>

    <div className="relative z-10 my-4 flex flex-col items-center text-center">
      <svg viewBox="0 0 140 70" className="w-28 h-16 drop-shadow-md mb-2">
        {/* Rising Sun */}
        <circle cx="70" cy="42" r="28" fill="#FFD54F" />
        <circle cx="70" cy="42" r="16" fill="#FFF8E7" />
        {/* Beams */}
        <line x1="70" y1="6" x2="70" y2="0" stroke="#FFD54F" strokeWidth="3" strokeLinecap="round" />
        <line x1="42" y1="14" x2="38" y2="10" stroke="#FFD54F" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="98" y1="14" x2="102" y2="10" stroke="#FFD54F" strokeWidth="2.5" strokeLinecap="round" />
        {/* River Water Line */}
        <path d="M0 45 Q35 48 70 45 T140 45 L140 70 L0 70 Z" fill="#00838F" opacity="0.6" />
      </svg>
      <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
        उदयगामी सूर्य को उषा अर्घ्य व पारण
      </h4>
      <p className="text-xs sm:text-sm text-amber-100/90 max-w-md mt-1 leading-relaxed">
        उगते हुए भगवान भुवन भास्कर को दुग्ध-जल अर्घ्य देकर 36 घंटे के निर्जला व्रत का पारण।
      </p>
    </div>

    <div className="relative z-10 text-center text-[11px] text-amber-200/80 font-mono">
      Morning Arghya — Welcoming the Rising Sun with Obloations
    </div>
  </div>
);


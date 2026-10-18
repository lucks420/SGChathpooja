# SGChhathpooja — सोनवे गोनरहा छठ पूजा वेबसाइट (Sonwe Gonraha Chhath Puja Website)

A complete, production-quality, mobile-first static website for the Chhath Puja celebration organized by the community of **Sonwe Gonraha** (सोनवे गोनरहा) village, **Pipraich Block** (पिपराईच), **Gorakhpur District** (गोरखपुर), Uttar Pradesh, India.

---

## 🌟 Key Highlights & Features

1. **Bilingual Interface**: Full, seamless Hindi (हिन्दी) and English language switching with automatic persistence in `localStorage`.
2. **Mobile-First & Accessible**: Designed specifically for community members opening links via WhatsApp on Android and iPhones; sticky navigation with touch-friendly controls.
3. **Focused Two-Day Chhath Puja Schedule**:
   - **Day 1 (14 November)**: **संध्या अर्घ्य** (Evening Arghya) — Devotees offering holy Arghya to the setting sun.
   - **Day 2 (15 November)**: **प्रातःकालीन अर्घ्य** (Morning Arghya) — Devotees offering holy Arghya to the rising sun.
4. **Community Donation Section**:
   - Informational message with suggested contributions of **₹51, ₹101, ₹501, or ₹1001** (or any amount).
   - Only 3 payment items on the card: **QR Code**, **UPI ID** (`DEMO_UPI_ID`), and **UPI Mobile Number** (`DEMO_MOBILE_NUMBER`).
   - Clear 6-step payment guidance with screenshot verification instructions for WhatsApp.
   - Prominent static website disclaimer (no online payment gateway processing).
5. **Three-Image Chhath Maiya Slideshow**:
   - Embedded directly below the "Google Maps पर देखें / View on Google Maps" button in the village section.
   - Smooth auto-advancing carousel displaying 3 sacred devotional scenes: Chhathi Maiya divine presence, Sunset Arghya devotion, and Sunrise Arghya devotion.
   - Interactive slide indicator dots, pause-on-hover, and reduced-motion support.
6. **Organizing Committee Section**:
   - Equal visual status for all members (no hierarchy titles like President, Secretary, etc.).
   - Profile card displaying photo, member name, and direct "Instagram पर देखें / Follow on Instagram" button.
7. **Popular Chhath Devotional Songs**:
   - Responsive 16:9 embedded YouTube players directly inside the cards.
   - Play and pause songs right on the website without being redirected away.
   - Verified classical Chhath hymns with configuration in `src/site-config.ts`.
8. **Village Information & Safe Contact**:
   - Village geography, block, district, state, and location note.
   - Safe telephone, email, and WhatsApp links with placeholder protections.
9. **Website Developer Credit**:
   - Tasteful developer area in footer crediting **Lucks** with direct link to Instagram profile: [https://www.instagram.com/lucks_.11/](https://www.instagram.com/lucks_.11/).

---

## 📁 Project Structure

```text
├── index.html                   # Entry point with SEO tags, Devanagari fonts, and favicon
├── metadata.json                # Applet configuration
├── package.json                 # Project dependencies & build scripts
├── vite.config.ts               # Vite bundler configuration (configured with base: './')
├── public/
│   └── assets/
│       └── images/
│           └── demo-qr.svg      # Unmistakable Demo QR code SVG placeholder
├── src/
│   ├── site-config.ts           # 🌟 CENTRAL CONFIGURATION FILE (Edit this to customize)
│   ├── translations.ts          # Centralized Hindi & English dictionaries
│   ├── index.css                # Tailwind CSS styling and theme layers
│   ├── main.tsx                 # React application mounting
│   ├── App.tsx                  # Root application orchestrator
│   └── components/
│       ├── Header.tsx           # Sticky top bar with 3-zone contract & mobile drawer
│       ├── Hero.tsx             # Festive hero with Chhath greeting & direct CTAs
│       ├── VillageIntro.tsx     # Village details, Maps CTA & 3-Image Chhath Slideshow
│       ├── FestivalSchedule.tsx # 2-day ritual breakdown (14 Nov Sunset & 15 Nov Sunrise)
│       ├── DonationSection.tsx  # Donation card (QR, UPI ID, Mobile), 6 steps & WhatsApp CTA
│       ├── CommitteeSection.tsx # Equal committee member profile cards with Instagram buttons
│       ├── ChhathSongs.tsx      # Popular songs with 16:9 responsive YouTube embeds
│       ├── ContactSection.tsx   # Verified contact details with safe fallbacks
│       ├── Footer.tsx           # Cultural dedication, developer credit (Lucks), and back-to-top
│       └── FestiveVisuals.tsx   # High-fidelity SVG devotional artwork & icons
└── README.md                    # Documentation & GitHub Pages deployment guide
```

---

## 🛠️ How to Customize for Your Village (Sonwe Gonraha)

All editable content is located in **`src/site-config.ts`**. You do not need to rewrite complex components to update details!

### 1. Updating Payment & Donation Details
Open `src/site-config.ts` and locate the `donation` object:
```typescript
donation: {
  upiId: 'YOUR_ACTUAL_UPI_ID@upi',           // Replace DEMO_UPI_ID
  upiMobileNumber: '9876543210',              // Replace DEMO_MOBILE_NUMBER
  isDemoOnly: false,                          // Set to false once live
  whatsappGroupUrl: 'https://chat.whatsapp.com/REAL_GROUP_INVITE_CODE',
  qrImagePath: 'assets/images/real-qr.png',   // Place your QR image in public/assets/images
}
```

### 2. Updating Committee Members
In `src/site-config.ts`, update the `committeeMembers` array with real village residents' names and Instagram handles:
```typescript
committeeMembers: [
  {
    id: 'member-1',
    nameHi: 'राहुल सिंह',
    nameEn: 'Rahul Singh',
    photoUrl: '', // Add image path or leave empty for default avatar
    instagramUsername: 'rahul_singh',
    instagramUrl: 'https://www.instagram.com/rahul_singh',
    isPlaceholder: false,
  },
]
```

### 3. Adding or Updating Chhath Devotional Songs
In `src/site-config.ts`, under `chhathSongs`, add or modify valid YouTube video IDs (for example, the code after `v=` in YouTube URLs).

### 4. Updating Developer Credit
In `src/site-config.ts`, under `developer`, you can update the developer's photo path when ready.

---

## 🚀 How to Deploy to GitHub Pages (Free Hosting)

This static website requires **no paid server, no database, and no monthly fees**. It can be hosted completely free on **GitHub Pages**.

### Step 1: Create a GitHub Repository
1. Log in to [GitHub](https://github.com/).
2. Click **New Repository**.
3. Name your repository (e.g., `SGChhathpooja`).
4. Select **Public**, leave other checkboxes blank, and click **Create repository**.

### Step 2: Build the Static Website
On your computer, run:
```bash
# 1. Install dependencies
npm install

# 2. Build the production files
npm run build
```
This generates an optimized static distribution folder named **`dist`**. Because `vite.config.ts` includes `base: './'`, all paths will work seamlessly under your GitHub repository subpath!

### Step 3: Deploy via GitHub Pages
1. Push the contents of `dist` to a `gh-pages` branch using:
   ```bash
   npx gh-pages -d dist
   ```
2. In your repository **Settings** > **Pages**, set **Source** to `Deploy from a branch`, choose `gh-pages` and `/ (root)`.
3. Click **Save**. Your website will be live in 1–2 minutes at `https://<your-username>.github.io/SGChhathpooja/`!

---

## 🔒 Security & Payment Disclaimer
- This is a static informational website. It does **not** process, charge, or store credit card numbers, passwords, or bank credentials.
- All contributions are voluntary and carried out directly through the user's external UPI application (Google Pay, PhonePe, Paytm, etc.).

---

## 🙏 Credits & Dedication
Dedicated with deep reverence to **Chhathi Maiya** and **Bhagwan Surya Dev**, and the spirited, hardworking villagers of **Sonwe Gonraha, Pipraich, Gorakhpur**.
Website Developed by **Lucks** ([Instagram](https://www.instagram.com/lucks_.11/)).

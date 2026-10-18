/**
 * SGChathpooja — Centralized Translation Dictionary
 * Supporting seamless Hindi (हिन्दी) and English switching.
 */

export type Language = 'hi' | 'en';

export interface Translations {
  // Brand & Header
  siteTitle: string;
  siteSubtitle: string;
  navHome: string;
  navVillage: string;
  navSchedule: string;
  navDonation: string;
  navCommittee: string;
  navSongs: string;
  navContact: string;
  donateButton: string;
  languageSelect: string;
  menuOpen: string;
  menuClose: string;

  // Hero Section
  heroGreeting: string;
  heroHeading: string;
  heroDescription: string;
  heroCtaDonate: string;
  heroCtaSchedule: string;
  heroLocationBadge: string;
  heroDateNote: string;

  // Village Section
  villageSectionTitle: string;
  villageSectionSubtitle: string;
  villageNameLabel: string;
  blockLabel: string;
  districtLabel: string;
  stateLabel: string;
  countryLabel: string;
  villageDescription: string;
  viewOnMap: string;
  mapPlaceholderNotice: string;
  slideshowTitle: string;
  slideshowSubtitle: string;

  // Schedule Section (2 days: 14 Nov & 15 Nov)
  scheduleSectionTitle: string;
  scheduleSectionSubtitle: string;
  dayLabel: string;

  // Donation Section
  donationSectionTitle: string;
  donationSectionSubtitle: string;
  donationParagraph: string;
  upiIdLabel: string;
  upiNumberLabel: string;
  copyUpi: string;
  copied: string;
  paymentInstructionsTitle: string;
  step1: string;
  step2: string;
  step3: string;
  step4: string;
  step5: string;
  step6: string;
  whatsappGroupBtn: string;
  whatsappPlaceholderNote: string;
  staticDisclaimerTitle: string;
  staticDisclaimerText: string;

  // Committee Section (Equal members, Instagram links, no titles)
  committeeSectionTitle: string;
  committeeSectionSubtitle: string;
  committeeDemoNotice: string;
  viewOnInstagram: string;
  noInstagramId: string;

  // Songs Section (8 YouTube Chhath Puja Songs with direct embeds)
  songsSectionTitle: string;
  songsSectionSubtitle: string;
  songsNotice: string;
  songsCountBadge: string;
  watchOnYouTube: string;
  openInYouTubeFallback: string;
  verifiedTitleLabel: string;
  playSongDirectly: string;

  // Contact Section
  contactSectionTitle: string;
  contactSectionSubtitle: string;
  phoneLabel: string;
  emailLabel: string;
  whatsappLabel: string;
  locationLabel: string;
  notConfiguredNotice: string;
  whatsappCardHeading: string;
  joinGroupButton: string;
  callButton: string;

  // Footer & Developer Credit
  footerTagline: string;
  quickLinks: string;
  contactVillage: string;
  backToTop: string;
  allRightsReserved: string;
  developerCreditHeading: string;
  developerRoleBadge: string;
  developerCreditLabel: string;
  followDeveloperInstagram: string;
}

export const translations: Record<Language, Translations> = {
  hi: {
    siteTitle: 'SGChhathpooja',
    siteSubtitle: 'सोनवे गोनरहा छठ पूजा समिति',
    navHome: 'मुख्य पृष्ठ',
    navVillage: 'हमारा गाँव',
    navSchedule: 'कार्यक्रम',
    navDonation: 'चंदा सहयोग',
    navCommittee: 'पूजा समिति',
    navSongs: 'छठ गीत',
    navContact: 'संपर्क',
    donateButton: 'चंदा दें',
    languageSelect: 'भाषा बदलें',
    menuOpen: 'मेन्यू खोलें',
    menuClose: 'मेन्यू बंद करें',

    // Hero
    heroGreeting: 'जय छठी मैया',
    heroHeading: 'आस्था, परंपरा और एकता का पावन पर्व',
    heroDescription:
      'सोनवे गोनरहा की छठ पूजा में आपका स्वागत है। आइए, श्रद्धा और सामूहिक सहयोग से इस पावन पर्व को यादगार बनाएँ।',
    heroCtaDonate: 'चंदा दें / सहयोग करें',
    heroCtaSchedule: 'पूजा का कार्यक्रम देखें',
    heroLocationBadge: 'सोनवे गोनरहा, पिपराईच, गोरखपुर, उत्तर प्रदेश',
    heroDateNote: 'सोनवे गोनरहा छठ पूजा उत्सव — 14 व 15 नवम्बर',

    // Village
    villageSectionTitle: 'हमारा गाँव, हमारी परंपरा',
    villageSectionSubtitle: 'सामुदायिक भावना, स्वच्छता और लोक आस्था का संगम',
    villageNameLabel: 'गाँव',
    blockLabel: 'ब्लॉक / विकासखंड',
    districtLabel: 'जनपद / जिला',
    stateLabel: 'राज्य',
    countryLabel: 'देश',
    villageDescription:
      'सोनवे गोनरहा, पिपराईच, गोरखपुर, उत्तर प्रदेश का हमारा गाँव अपनी सामुदायिक भावना और पारंपरिक संस्कृति के लिए जाना जाता है। छठ पूजा के पावन अवसर पर गाँव के लोग मिलकर पूजा की तैयारियों, घाट की व्यवस्था, साफ-सफाई और अन्य आवश्यक कार्यों में सहयोग करते हैं। SGChathpooja का उद्देश्य इस सामूहिक प्रयास को एक डिजिटल मंच देना और गाँव के लोगों को एक साथ जोड़ना है।',
    viewOnMap: 'Google Maps पर देखें',
    mapPlaceholderNotice: 'मानचित्र लिंक: वास्तविक जीपीएस लोकेशन पुष्टि के बाद सक्रिय की जाएगी।',
    slideshowTitle: 'छठी मईया की पावन झांकी',
    slideshowSubtitle: 'गाँव के घाट पर सूर्योपासना एवं आस्था के तीन पावन स्वरूप',

    // Schedule (2 Days)
    scheduleSectionTitle: 'छठ पूजा कार्यक्रम',
    scheduleSectionSubtitle: 'सोनवे गोनरहा गाँव में मुख्य पूजा अनुष्ठान',
    dayLabel: 'दिवस',

    // Donation
    donationSectionTitle: 'छठ पूजा के आयोजन में सहयोग करें',
    donationSectionSubtitle: 'घाट सज्जा, प्रकाश व्यवस्था और स्वच्छता में अपना योगदान दें',
    donationParagraph:
      'छठी मईया के इस पावन पर्व के आयोजन में अपनी श्रद्धानुसार सहयोग करें। आप ₹51, ₹101, ₹501 या ₹1001 का सहयोग दे सकते हैं। जो जितना और जिस तरह से सहयोग कर सके, उसका स्वागत है। आपका छोटा-बड़ा हर सहयोग हमारे गाँव में छठ पूजा की बेहतर व्यवस्था करने में मदद करता है। जय छठी मईया!',
    upiIdLabel: 'UPI ID',
    upiNumberLabel: 'UPI मोबाइल नंबर',
    copyUpi: 'कॉपी करें',
    copied: 'कॉपी हो गया!',
    paymentInstructionsTitle: 'सहयोग एवं भुगतान चरण',
    step1: '1. समिति का QR कोड स्कैन करें या प्रदर्शित UPI विवरण का उपयोग करें।',
    step2: '2. अपने UPI ऐप में भुगतान पूरा करें।',
    step3: '3. पुष्टि करें कि लेन-देन (ट्रांजैक्शन) सफल हो गया है।',
    step4: '4. सफल भुगतान का स्क्रीनशॉट लें।',
    step5: '5. स्क्रीनशॉट को आधिकारिक छठ पूजा WhatsApp ग्रुप में साझा करें।',
    step6: '6. आवश्यकतानुसार आयोजन समिति से पुष्टि प्राप्त होने की प्रतीक्षा करें।',
    whatsappGroupBtn: 'WhatsApp ग्रुप में स्क्रीनशॉट भेजें',
    whatsappPlaceholderNote: 'व्हाट्सएप ग्रुप लिंक: समिति के आधिकारिक ग्रुप से सीधे जुड़ें।',
    staticDisclaimerTitle: 'महत्वपूर्ण सूचना',
    staticDisclaimerText:
      'यह एक स्थिर (Static) वेबसाइट है। यह वेबसाइट किसी भी प्रकार का भुगतान प्रोसेस या सत्यापित नहीं करती है। सभी भुगतान बाहरी UPI ऐप के माध्यम से सीधे समिति खाते में होते हैं।',

    // Committee
    committeeSectionTitle: 'छठ पूजा समिति के सदस्य',
    committeeSectionSubtitle: 'सोनवे गोनरहा गाँव की छठ पूजा के पावन आयोजन एवं सेवा में समर्पित सदस्य',
    committeeDemoNotice: 'सोनवे गोनरहा छठ पूजा समिति के समर्पित सदस्य।',
    viewOnInstagram: 'Instagram पर देखें',
    noInstagramId: 'Instagram ID नहीं',

    // Songs
    songsSectionTitle: 'छठ पूजा के गीत',
    songsSectionSubtitle: 'छठी मैया और भगवान भुवन भास्कर के पावन भक्तिमय लोकगीत',
    songsNotice: 'सभी 8 पावन छठ गीत नीचे दिए गए प्लेयर में सीधे सुनें। यदि किसी कारणवश वीडियो यहाँ न चले, तो YouTube पर भी सीधे देखा जा सकता है।',
    songsCountBadge: '८ भक्तिमय गीत',
    watchOnYouTube: 'YouTube पर देखें',
    openInYouTubeFallback: 'YouTube पर खोलें',
    verifiedTitleLabel: 'वीडियो शीर्षक',
    playSongDirectly: 'प्लेयर में चलाएँ',

    // Contact
    contactSectionTitle: 'संपर्क एवं जानकारी',
    contactSectionSubtitle: 'सोनवे गोनरहा छठ पूजा समिति से जुड़ें',
    phoneLabel: 'संपर्क सूत्र (फ़ोन)',
    emailLabel: 'ईमेल',
    whatsappLabel: 'व्हाट्सएप कम्युनिटी',
    locationLabel: 'स्थल / पता',
    notConfiguredNotice: 'विवरण शीघ्र उपलब्ध कराया जाएगा',
    whatsappCardHeading: 'हमारे WhatsApp ग्रुप से जुड़ें',
    joinGroupButton: 'ग्रुप से जुड़ें',
    callButton: 'कॉल करें',

    // Footer & Developer Credit
    footerTagline: 'SGChathpooja — सोनवे गोनरहा की छठ पूजा और सामुदायिक एकता को समर्पित।',
    quickLinks: 'महत्वपूर्ण अनुभाग',
    contactVillage: 'गाँव का पता',
    backToTop: 'ऊपर जाएँ',
    allRightsReserved: 'सर्वाधिकार सुरक्षित।',
    developerCreditHeading: 'Website Developed By',
    developerRoleBadge: 'वेबसाइट डेवलपर',
    developerCreditLabel: 'Website Developed By',
    followDeveloperInstagram: 'Instagram पर फॉलो करें',
  },
  en: {
    siteTitle: 'SGChhathpooja',
    siteSubtitle: 'Sonwe Gonraha Chhath Puja Committee',
    navHome: 'Home',
    navVillage: 'About Village',
    navSchedule: 'Schedule',
    navDonation: 'Donation',
    navCommittee: 'Committee',
    navSongs: 'Chhath Songs',
    navContact: 'Contact',
    donateButton: 'Donate Now',
    languageSelect: 'Change Language',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',

    // Hero
    heroGreeting: 'Jai Chhathi Maiya',
    heroHeading: 'Festival of Faith, Tradition & Community Unity',
    heroDescription:
      'Welcome to the Chhath Puja celebration of Sonwe Gonraha. Let us celebrate faith, tradition, and community together.',
    heroCtaDonate: 'Donate / Support',
    heroCtaSchedule: 'View Festival Schedule',
    heroLocationBadge: 'Sonwe Gonraha, Pipraich, Gorakhpur, Uttar Pradesh',
    heroDateNote: 'Sonwe Gonraha Celebration — 14 & 15 November',

    // Village
    villageSectionTitle: 'Our Village, Our Tradition',
    villageSectionSubtitle: 'A timeless union of community spirit, cleanliness, and reverence',
    villageNameLabel: 'Village',
    blockLabel: 'Block',
    districtLabel: 'District',
    stateLabel: 'State',
    countryLabel: 'Country',
    villageDescription:
      'Sonwe Gonraha is a village in Pipraich, Gorakhpur, Uttar Pradesh. During Chhath Puja, community members come together to help organize the celebration, prepare the ghat, maintain cleanliness, and support essential arrangements. SGChathpooja aims to provide a digital platform for sharing this community effort and celebrating the village\'s traditions.',
    viewOnMap: 'View on Google Maps',
    mapPlaceholderNotice: 'Location map: Will be activated once verified GPS pin is confirmed.',
    slideshowTitle: 'Chhathi Maiya Devotional Glimpses',
    slideshowSubtitle: 'Three sacred glimpses of reverence and sun worship at our village ghat',

    // Schedule (2 Days)
    scheduleSectionTitle: 'Chhath Puja Schedule',
    scheduleSectionSubtitle: 'Main worship activities in Sonwe Gonraha village',
    dayLabel: 'Day',

    // Donation
    donationSectionTitle: 'Support Our Chhath Puja Celebration',
    donationSectionSubtitle: 'Contribute towards ghat preparation, lighting, and cleanliness',
    donationParagraph:
      'Support our village\'s Chhath Puja celebration with a contribution of your choice. You may contribute ₹51, ₹101, ₹501, or ₹1001, or give whatever amount you can comfortably afford. Every contribution helps our community organize the celebration. Jai Chhathi Maiya!',
    upiIdLabel: 'UPI ID',
    upiNumberLabel: 'UPI Mobile Number',
    copyUpi: 'Copy',
    copied: 'Copied!',
    paymentInstructionsTitle: 'Contribution & Payment Steps',
    step1: '1. Scan the committee\'s QR code or use the displayed UPI details.',
    step2: '2. Complete the payment in the visitor\'s UPI app.',
    step3: '3. Confirm that the transaction succeeded.',
    step4: '4. Take a screenshot of the successful payment.',
    step5: '5. Share the screenshot in the official Chhath Puja WhatsApp group.',
    step6: '6. Wait for confirmation from the organizing committee if required.',
    whatsappGroupBtn: 'Share Screenshot on WhatsApp',
    whatsappPlaceholderNote: 'WhatsApp Group Link: Connect directly to the official committee group.',
    staticDisclaimerTitle: 'Important Notice',
    staticDisclaimerText:
      'This is a static informational website. It does not process or verify payments online. All transactions occur via external UPI apps directly to the committee account.',

    // Committee
    committeeSectionTitle: 'Chhath Puja Committee Members',
    committeeSectionSubtitle: 'Dedicated community members organizing the celebration in Sonwe Gonraha',
    committeeDemoNotice: 'Dedicated members of the Sonwe Gonraha Chhath Puja Committee.',
    viewOnInstagram: 'View Instagram',
    noInstagramId: 'No Instagram ID',

    // Songs
    songsSectionTitle: 'Chhath Puja Songs',
    songsSectionSubtitle: 'Sacred devotional hymns and traditional folk songs honoring Chhathi Maiya and Surya Dev',
    songsNotice: 'Listen to all 8 sacred Chhath songs directly in the player below. If playback is restricted, open directly on YouTube.',
    songsCountBadge: '8 Devotional Songs',
    watchOnYouTube: 'Watch on YouTube',
    openInYouTubeFallback: 'Open on YouTube',
    verifiedTitleLabel: 'Video Title',
    playSongDirectly: 'Play in player',

    // Contact
    contactSectionTitle: 'Contact & Information',
    contactSectionSubtitle: 'Get in touch with Sonwe Gonraha Chhath Puja Committee',
    phoneLabel: 'Phone Numbers',
    emailLabel: 'Email',
    whatsappLabel: 'WhatsApp Community',
    locationLabel: 'Location / Address',
    notConfiguredNotice: 'Details will be updated soon',
    whatsappCardHeading: 'Join Our WhatsApp Group',
    joinGroupButton: 'Join Group',
    callButton: 'Call',

    // Footer & Developer Credit
    footerTagline: 'SGChathpooja — Dedicated to Chhath Puja and community spirit in Sonwe Gonraha.',
    quickLinks: 'Quick Links',
    contactVillage: 'Village Address',
    backToTop: 'Back to Top',
    allRightsReserved: 'All rights reserved.',
    developerCreditHeading: 'Website Developed By',
    developerRoleBadge: 'Website Developer',
    developerCreditLabel: 'Website Developed By',
    followDeveloperInstagram: 'Follow on Instagram',
  },
};

/**
 * SGChathpooja — Central Site Configuration
 * 
 * Sonwe Gonraha Chhath Puja Celebration
 * Village: Sonwe Gonraha (सोनवे गोनरहा)
 * Block: Pipraich (पिपराईच)
 * District: Gorakhpur (गोरखपुर)
 * State: Uttar Pradesh (उत्तर प्रदेश)
 * 
 * INSTRUCTIONS FOR COMMITTEE:
 * To customize the website for this year's celebration:
 * 1. Replace DEMO_UPI_ID with your actual UPI VPA (e.g. committee@upi)
 * 2. Replace DEMO_MOBILE_NUMBER with authorized mobile number
 * 3. Replace whatsappGroupUrl with your actual WhatsApp community invite link
 * 4. Update committeeMembers with real member names and Instagram handles
 * 5. Update festivalSchedule details if required
 * 6. Update chhathSongs with verified YouTube video IDs
 * 7. Update slideshow images in public/assets/images
 */

export interface CommitteeMember {
  id: string;
  nameHi: string;
  nameEn: string;
  photoUrl?: string;
  instagramUsername?: string;
  instagramUrl?: string;
  isPlaceholder: boolean;
}

export interface ScheduleItem {
  id: string;
  dayNumber: number;
  nameHi: string;
  nameEn: string;
  dateHi: string;
  dateEn: string;
  descriptionHi: string;
  descriptionEn: string;
  type: 'sunset' | 'sunrise';
}

export interface ChhathSong {
  id: string;
  songNumber: number;
  labelHi: string;
  labelEn: string;
  titleHi: string;
  titleEn: string;
  verifiedTitle: string;
  artistHi: string;
  artistEn: string;
  youtubeVideoId: string;
  youtubeUrl: string;
  descriptionHi: string;
  descriptionEn: string;
}

export interface DevotionalSlide {
  id: string;
  titleHi: string;
  titleEn: string;
  captionHi: string;
  captionEn: string;
  imageUrl?: string;
  altHi: string;
  altEn: string;
  type: 'deity' | 'sunset' | 'sunrise';
}

export interface DeveloperCreditConfig {
  name: string;
  roleHi: string;
  roleEn: string;
  instagramUrl: string;
  instagramHandle: string;
  photoUrl?: string;
}

export interface SiteConfig {
  meta: {
    siteName: string;
    villageHi: string;
    villageEn: string;
    blockHi: string;
    blockEn: string;
    districtHi: string;
    districtEn: string;
    stateHi: string;
    stateEn: string;
    countryHi: string;
    countryEn: string;
    committeeTitleHi: string;
    committeeTitleEn: string;
    googleMapsUrl: string;
  };
  donation: {
    upiId: string;
    upiMobileNumber: string;
    whatsappGroupUrl: string;
    qrImagePath: string;
  };
  committeeMembers: CommitteeMember[];
  festivalSchedule: ScheduleItem[];
  chhathSongs: ChhathSong[];
  slideshow: DevotionalSlide[];
  developer: DeveloperCreditConfig;
  contact: {
    phoneNumbers: { number: string; tel: string }[];
    phone: string;
    email: string;
    whatsappGroupUrl: string;
    locationNoteHi: string;
    locationNoteEn: string;
  };
}

export const siteConfig: SiteConfig = {
  meta: {
    siteName: 'SGChathpooja',
    villageHi: 'सोनवे गोनरहा',
    villageEn: 'Sonwe Gonraha',
    blockHi: 'पिपराईच',
    blockEn: 'Pipraich',
    districtHi: 'गोरखपुर',
    districtEn: 'Gorakhpur',
    stateHi: 'उत्तर प्रदेश',
    stateEn: 'Uttar Pradesh',
    countryHi: 'भारत',
    countryEn: 'India',
    committeeTitleHi: 'सोनवे गोनरहा छठ पूजा समिति',
    committeeTitleEn: 'Sonwe Gonraha Chhath Puja Committee',
    googleMapsUrl: 'https://maps.app.goo.gl/8eV6pb4zEKgPDjuf9',
  },
  donation: {
    upiId: 'yadav329337-1@okhdfcbank',
    upiMobileNumber: '+91 93698 59309',
    whatsappGroupUrl: 'https://chat.whatsapp.com/CNM1IEd2HydH3UyCEcnbSe?s=cl&p=a&mlu=4&ilr=4',
    qrImagePath: 'assets/qrcode.jpg',
  },
  // All committee members have equal status — no titles or hierarchy
  committeeMembers: [
    {
      id: 'member-rahul',
      nameHi: 'राहुल यादव',
      nameEn: 'Rahul Yadav',
      photoUrl: 'assets/images/committee/rahul.jpg',
      instagramUsername: 'rahul__yadav__07__2000',
      instagramUrl: 'https://www.instagram.com/rahul__yadav__07__2000/',
      isPlaceholder: false,
    },
    {
      id: 'member-dhanraj',
      nameHi: 'धनराज प्रजापति',
      nameEn: 'Dhanraj Prajapati',
      photoUrl: 'assets/images/committee/dhanraj.jpg',
      instagramUsername: 'dhanrajprajapati632',
      instagramUrl: 'https://www.instagram.com/dhanrajprajapati632/',
      isPlaceholder: false,
    },
    {
      id: 'member-lucky',
      nameHi: 'लक्की यादव',
      nameEn: 'Lucky Yadav',
      photoUrl: 'assets/images/committee/lucky.jpg',
      instagramUsername: 'lucks_.11',
      instagramUrl: 'https://www.instagram.com/lucks_.11/',
      isPlaceholder: false,
    },
    {
      id: 'member-gulshan',
      nameHi: 'गुलशन शर्मा',
      nameEn: 'Gulshan Sharma',
      photoUrl: 'assets/images/committee/gulshan.jpg',
      instagramUsername: 'gulshan_sharma55',
      instagramUrl: 'https://www.instagram.com/gulshan_sharma55/',
      isPlaceholder: false,
    },
    {
      id: 'member-sonu',
      nameHi: 'सोनू शर्मा',
      nameEn: 'Sonu Sharma',
      photoUrl: 'assets/images/committee/sonu.jpg',
      instagramUsername: 'writer_sonu_sunhra',
      instagramUrl: 'https://www.instagram.com/writer_sonu_sunhra/',
      isPlaceholder: false,
    },
    {
      id: 'member-amitkumar',
      nameHi: 'अमित कुमार गौड़',
      nameEn: 'Amit Kumar Goud',
      photoUrl: 'assets/images/committee/amitkumar.png',
      instagramUsername: 'amit__goud___',
      instagramUrl: 'https://www.instagram.com/amit__goud___/',
      isPlaceholder: false,
    },
    {
      id: 'member-rajyadav',
      nameHi: 'राज यादव',
      nameEn: 'Raj Yadav',
      photoUrl: 'assets/images/committee/rajyadav.jpg',
      instagramUsername: 'official_rj_15th',
      instagramUrl: 'https://www.instagram.com/official_rj_15th/',
      isPlaceholder: false,
    },
    {
      id: 'member-sandeepyadav',
      nameHi: 'संदीप यादव',
      nameEn: 'Sandeep Yadav',
      photoUrl: 'assets/images/committee/sandeepyadav.png',
      instagramUsername: 'its_ahiran_sandeep_0333',
      instagramUrl: 'https://www.instagram.com/its_ahiran_sandeep_0333/',
      isPlaceholder: false,
    },
    {
      id: 'member-dkraj',
      nameHi: 'दसरथ प्रजापति',
      nameEn: 'Dasrath Prajapati',
      photoUrl: 'assets/images/committee/dkraj.jpg',
      instagramUsername: 'dkraj1434',
      instagramUrl: 'https://www.instagram.com/dkraj1434/',
      isPlaceholder: false,
    },
    {
      id: 'member-deepakyadav1',
      nameHi: 'दीपक यादव',
      nameEn: 'Deepak Yadav',
      photoUrl: 'assets/images/committee/deepakyadav1.jpg',
      instagramUsername: 'd.s.photography85',
      instagramUrl: 'https://www.instagram.com/d.s.photography85/',
      isPlaceholder: false,
    },
    {
      id: 'member-pankajyadav',
      nameHi: 'पंकज यादव',
      nameEn: 'Pankaj Yadav',
      photoUrl: 'assets/images/committee/pankajyadav.png',
      instagramUsername: 'yadav_ahir_555',
      instagramUrl: 'https://www.instagram.com/yadav_ahir_555/',
      isPlaceholder: false,
    },
    {
      id: 'member-lav',
      nameHi: 'लव प्रजापति',
      nameEn: 'Lav Prajapati',
      photoUrl: 'assets/images/committee/lav.jpg',
      instagramUsername: 'lav__kattar_boy_',
      instagramUrl: 'https://www.instagram.com/lav__kattar_boy_/',
      isPlaceholder: false,
    },
    {
      id: 'member-deepakyadav2',
      nameHi: 'दीपक यादव',
      nameEn: 'Deepak Yadav',
      photoUrl: 'assets/images/committee/deepakyadav2.jpg',
      instagramUsername: 'mr_deepak_0o7',
      instagramUrl: 'https://www.instagram.com/mr_deepak_0o7/',
      isPlaceholder: false,
    },
    {
      id: 'member-vipin',
      nameHi: 'विपिन यादव',
      nameEn: 'Vipin Yadav',
      photoUrl: 'assets/images/committee/vipin.jpg',
      instagramUsername: 'yadav_ahir3531',
      instagramUrl: 'https://www.instagram.com/yadav_ahir3531/',
      isPlaceholder: false,
    },
  ],
  // EXACT TWO-DAY SCHEDULE AS REQUESTED
  festivalSchedule: [
    {
      id: 'day-1',
      dayNumber: 1,
      nameHi: 'संध्या अर्घ्य',
      nameEn: 'Evening Arghya',
      dateHi: '14 नवम्बर',
      dateEn: '14 November',
      descriptionHi: 'छठ पूजा के पहले दिन श्रद्धालु डूबते हुए सूर्य को अर्घ्य अर्पित करेंगे।',
      descriptionEn: 'On the first day of our village celebration, devotees will offer Arghya to the setting sun.',
      type: 'sunset',
    },
    {
      id: 'day-2',
      dayNumber: 2,
      nameHi: 'प्रातःकालीन अर्घ्य',
      nameEn: 'Morning Arghya',
      dateHi: '15 नवम्बर',
      dateEn: '15 November',
      descriptionHi: 'दूसरे दिन श्रद्धालु उगते हुए सूर्य को अर्घ्य अर्पित करेंगे।',
      descriptionEn: 'On the second day of our village celebration, devotees will offer Arghya to the rising sun.',
      type: 'sunrise',
    },
  ],
  // ALL 8 CHHATH SONGS WITH VERIFIED YOUTUBE EMBEDS
  chhathSongs: [
    {
      id: 'song-1',
      songNumber: 1,
      labelHi: 'छठ पूजा गीत १',
      labelEn: 'Chhath Puja Song 1',
      titleHi: 'जोड़े जोड़े फलवा',
      titleEn: 'Jode Jode Falwa',
      verifiedTitle: 'पवन सिंह का सबसे ज्यादा बजने वाला छठ गीत - जोड़े जोड़े फलवा T-Series',
      artistHi: 'पवन सिंह / टी-सीरीज़ हमार भोजपुरी',
      artistEn: 'Pawan Singh / T-Series Hamaar Bhojpuri',
      youtubeVideoId: 'BKoD7bTLc2k',
      youtubeUrl: 'https://youtu.be/BKoD7bTLc2k',
      descriptionHi: 'पवन सिंह का अत्यंत लोकप्रिय और आस्था से भरपूर छठ महापर्व का पावन गीत।',
      descriptionEn: 'High-energy, beloved traditional Chhath devotional song by Pawan Singh.',
    },
    {
      id: 'song-2',
      songNumber: 2,
      labelHi: 'छठ पूजा गीत २',
      labelEn: 'Chhath Puja Song 2',
      titleHi: 'उगs हे सूरज देव',
      titleEn: 'Uga Hai Suraj Dev',
      verifiedTitle: 'छठ पूजा Special उगs हे सूरज देव Uga Hai Suraj Dev, ANURADHA PAUDWAL',
      artistHi: 'अनुराधा पौडवाल / टी-सीरीज़ भक्ति सागर',
      artistEn: 'Anuradha Paudwal / T-Series Bhakti Sagar',
      youtubeVideoId: '6e6Hp6R5SVU',
      youtubeUrl: 'https://youtu.be/6e6Hp6R5SVU',
      descriptionHi: 'उगते सूर्यदेव को पावन अर्घ्य अर्पित करते हुए अनुराधा पौडवाल जी का भक्तिमय स्वर।',
      descriptionEn: 'Soulful morning arghya prayer invoking the blessings of Lord Surya Dev.',
    },
    {
      id: 'song-3',
      songNumber: 3,
      labelHi: 'छठ पूजा गीत ३',
      labelEn: 'Chhath Puja Song 3',
      titleHi: 'शीतली बयरिया (सीतल दुजे पनिया)',
      titleEn: 'Shitali Bayariya (Sital Duje Paniya)',
      verifiedTitle: 'shitali bayariya chhath puja song | Jode jode falwa pawan singh',
      artistHi: 'सिनेप्लेक्स क्रिएशन / पवन सिंह',
      artistEn: 'Cineplex Creation / Pawan Singh',
      youtubeVideoId: 'AP3G513ok-Y',
      youtubeUrl: 'https://youtu.be/AP3G513ok-Y',
      descriptionHi: 'छठ महापर्व के पावन घाट, शीतल बयार और पवित्र जल की महिमा का सुंदर वर्णन।',
      descriptionEn: 'Atmospheric Chhath Puja track celebrating the cool morning breeze and ghat purity.',
    },
    {
      id: 'song-4',
      songNumber: 4,
      labelHi: 'छठ पूजा गीत ४',
      labelEn: 'Chhath Puja Song 4',
      titleHi: 'काँच ही बाँस के बहंगिया',
      titleEn: 'Kaanch Hi Baans Ke Bahangiya',
      verifiedTitle: 'छठ पूजा: काँच ही बाँस के बहंगिया WITH LYRICS | ANURADHA PAUDWAL',
      artistHi: 'अनुराधा पौडवाल / टी-सीरीज़ भक्ति सागर',
      artistEn: 'Anuradha Paudwal / T-Series Bhakti Sagar',
      youtubeVideoId: 'Eyq7vfxu4iA',
      youtubeUrl: 'https://youtu.be/Eyq7vfxu4iA',
      descriptionHi: 'छठ महापर्व का सबसे अमर, पवित्र और हृदयस्पर्शी पारंपरिक लोकगीत (बहंगी लचकत जाए)।',
      descriptionEn: 'The immortal traditional folk anthem honoring the sacred bamboo offerings.',
    },
    {
      id: 'song-5',
      songNumber: 5,
      labelHi: 'छठ पूजा गीत ५',
      labelEn: 'Chhath Puja Song 5',
      titleHi: 'केलवा के पात पर (न्यू वर्जन)',
      titleEn: 'Kelwa Ke Paat Par (New Version)',
      verifiedTitle: 'केलवा के पात पर New Version | SHARDA SINHA | Chhath Pooja Geet',
      artistHi: 'शारदा सिन्हा / टी-सीरीज़ भक्ति सागर',
      artistEn: 'Sharda Sinha / T-Series Bhakti Sagar',
      youtubeVideoId: 'knZ8b5YnQiY',
      youtubeUrl: 'https://youtu.be/knZ8b5YnQiY',
      descriptionHi: 'बिहार कोकिला पद्मभूषण शारदा सिन्हा जी के दिव्य और अमूल्य कंठ से पावन छठ गीत।',
      descriptionEn: 'Iconic devotional classic by the legendary Sharda Sinha for Chhath Puja.',
    },
    {
      id: 'song-6',
      songNumber: 6,
      labelHi: 'छठ पूजा गीत ६',
      labelEn: 'Chhath Puja Song 6',
      titleHi: 'अनु दुबे छठ पूजा स्पेशल गीत',
      titleEn: 'Anu Dubey Chhath Puja Special',
      verifiedTitle: 'Anu Dubey का ये छठ गीत महिलायों के बीच बहुत ही पसंद किया जा रहा है',
      artistHi: 'अनु दुबे / भक्ति वेव सीरीज',
      artistEn: 'Anu Dubey / Bhakti Wave Series',
      youtubeVideoId: 'OERYH8EC1hA',
      youtubeUrl: 'https://youtu.be/OERYH8EC1hA',
      descriptionHi: 'गाँव की माताओं और बहनों द्वारा अत्यंत श्रद्धा एवं उल्लास से गाया जाने वाला पावन गीत।',
      descriptionEn: 'Deeply emotional Chhath devotional song popular among women devotees.',
    },
    {
      id: 'song-7',
      songNumber: 7,
      labelHi: 'छठ पूजा गीत ७',
      labelEn: 'Chhath Puja Song 7',
      titleHi: 'छठी मईया (द वान)',
      titleEn: 'Chhathi Maiya (The VVAAN)',
      verifiedTitle: 'Chhathi Maiya - The VVAAN | Sidharth Malhotra & Tamannaah | Vishal Mishra',
      artistHi: 'विशाल मिश्रा / ज़ी म्यूज़िक कंपनी',
      artistEn: 'Vishal Mishra / Zee Music Company',
      youtubeVideoId: 'FCRb4kjnRx4',
      youtubeUrl: 'https://youtu.be/FCRb4kjnRx4',
      descriptionHi: 'छठी मैया की पावन महिमा और आधुनिक भक्ति संगीत का दिव्य और प्रेरणादायक संगम।',
      descriptionEn: 'Soul-stirring contemporary rendition honoring Maa Chhathi by Vishal Mishra.',
    },
    {
      id: 'song-8',
      songNumber: 8,
      labelHi: 'छठ पूजा गीत ८',
      labelEn: 'Chhath Puja Song 8',
      titleHi: 'छठ माई के बरतिया',
      titleEn: 'Chhath Mai Ke Baratiya',
      verifiedTitle: 'छठ माई के बरतिया | Khesari Lal Yadav | Nagin Movie | Wave Music',
      artistHi: 'खेसारी लाल यादव / वेव म्यूजिक',
      artistEn: 'Khesari Lal Yadav / Wave Music',
      youtubeVideoId: 'aLbXQ9VIxKI',
      youtubeUrl: 'https://youtu.be/aLbXQ9VIxKI',
      descriptionHi: 'खेसारी लाल यादव द्वारा प्रस्तुत छठ व्रत और आस्था का लोकप्रिय पारंपरिक गीत।',
      descriptionEn: 'Traditional celebration song of sacred devotion and fasting by Khesari Lal Yadav.',
    },
  ],
  // THREE-IMAGE DEVOTIONAL SLIDESHOW (Directly below Google Maps button)
  slideshow: [
    {
      id: 'slide-1',
      titleHi: 'छठी मईया की पावन झांकी — प्रथम स्वरूप',
      titleEn: 'Chhathi Maiya Sacred Glimpse — First Form',
      captionHi: 'सोनवे गोनरहा में स्थापित छठी मईया की दिव्य एवं अलौकिक पावन प्रतिमा।',
      captionEn: 'Divine and sacred idol of Maa Chhathi installed at Sonwe Gonraha.',
      imageUrl: 'assets/images/chhath-gallery/chhath-maiya-1.jpg',
      altHi: 'छठी मईया की पावन प्रतिमा - दर्शन १',
      altEn: 'Chhathi Maiya sacred idol - First Glimpse',
      type: 'deity',
    },
    {
      id: 'slide-2',
      titleHi: 'छठी मईया की पावन झांकी — द्वितीय स्वरूप',
      titleEn: 'Chhathi Maiya Sacred Glimpse — Second Form',
      captionHi: 'श्रद्धा, भक्ति और आलोक से सुशोभित माँ छठी का भव्य दिव्य शृंगार।',
      captionEn: 'Grand divine decoration and auspicious aura of Maa Chhathi.',
      imageUrl: 'assets/images/chhath-gallery/chhath-maiya-2.jpg',
      altHi: 'छठी मईया की पावन प्रतिमा - दर्शन २',
      altEn: 'Chhathi Maiya sacred idol - Second Glimpse',
      type: 'sunset',
    },
    {
      id: 'slide-3',
      titleHi: 'छठी मईया की पावन झांकी — तृतीय स्वरूप',
      titleEn: 'Chhathi Maiya Sacred Glimpse — Third Form',
      captionHi: 'सूप, प्रसाद और दीपकों से सुसज्जित माँ छठी का पावन वंदन।',
      captionEn: 'Sacred worship of Maa Chhathi adorned with traditional soop and offerings.',
      imageUrl: 'assets/images/chhath-gallery/chhath-maiya-3.jpg',
      altHi: 'छठी मईया की पावन प्रतिमा - दर्शन ३',
      altEn: 'Chhathi Maiya sacred idol - Third Glimpse',
      type: 'sunrise',
    },
  ],
  // TASTEFUL DEVELOPER CREDIT IN FOOTER
  developer: {
    name: 'Lucky',
    roleHi: 'वेबसाइट डेवलपर',
    roleEn: 'Website Developer',
    instagramUrl: 'https://www.instagram.com/lucks_.11/',
    instagramHandle: '@lucks_.11',
    photoUrl: 'assets/images/committee/lucky.jpg',
  },
  contact: {
    phoneNumbers: [
      { number: '+91 93698 59309', tel: '+919369859309' },
      { number: '+91 91708 06280', tel: '+919170806280' },
    ],
    phone: '+91 93698 59309',
    email: '', // Hidden until user provides real email address
    whatsappGroupUrl: 'https://chat.whatsapp.com/CNM1IEd2HydH3UyCEcnbSe?s=cl&p=a&mlu=4&ilr=4',
    locationNoteHi: 'सोनवे गोनरहा, ब्लॉक पिपराईच, जनपद गोरखपुर, उत्तर प्रदेश',
    locationNoteEn: 'Sonwe Gonraha, Pipraich Block, Gorakhpur District, Uttar Pradesh',
  },
};

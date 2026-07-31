import portraitJpg from "@/assets/portrait.jpg";
import portraitWebp from "@/assets/portrait.webp";
import ep1 from "@/assets/ep-1.jpg";
import ep2 from "@/assets/ep-2.jpg";
import ep3 from "@/assets/ep-3.jpg";
import ventureBooks from "@/assets/venture-books.jpg";
import ventureStudio from "@/assets/venture-studio.jpg";
import speaking from "@/assets/speaking.jpg";

export const site = {
  name: "Ramjan Ali Emon",
  shortName: "Emon",
  initials: "RE",
  role: "Content Creator & Visual Storyteller",
  tagline: "Podcaster, founder and brand storyteller from Dhaka, Bangladesh.",
  brand: "Boi Brikkho",
  email: "hello@theramjanshow.com",
  location: "Dhaka, Bangladesh",
  portraitJpg,
  portraitWebp,
  links: {
    linkedin: "https://bd.linkedin.com/in/ramjanboibrikkho",
    facebook: "https://www.facebook.com/profile.php?id=100009188653282",
    youtube: "https://www.youtube.com/@theramjanshow",
    instagram: "https://www.instagram.com/",
    tiktok: "https://www.tiktok.com/",
    show: "https://www.theramjanshow.com/",
  },
};

export const navItems = [
  { to: "/", label: "Home", bn: "হোম" },
  { to: "/about", label: "About", bn: "পরিচিতি" },
  { to: "/services", label: "Services", bn: "সেবা" },
  { to: "/portfolio", label: "Portfolio", bn: "পোর্টফোলিও" },
  { to: "/contact", label: "Contact", bn: "যোগাযোগ" },
] as const;

export const rotatingWords = [
  "editing reels",
  "designing thumbnails",
  "scripting videos",
  "growing brands",
  "shooting content",
];

export const stats = [
  { value: 120, suffix: "K+", label: "Subscribers" },
  { value: 340, suffix: "+", label: "Videos Produced" },
  { value: 45, suffix: "+", label: "Brands & Clients" },
  { value: 7, suffix: "+", label: "Years Creating" },
];

export const services = [
  {
    title: "Video Editing",
    icon: "clapperboard",
    description: "Story-first edits for long-form YouTube and short-form reels that hold attention.",
    points: ["Retention-driven cuts", "Colour grade & sound mix", "Subtitles and captions"],
  },
  {
    title: "Thumbnail Design",
    icon: "image",
    description: "Click-worthy thumbnails engineered around contrast, faces and curiosity gaps.",
    points: ["A/B ready variants", "Bangla & English typography", "CTR-focused composition"],
  },
  {
    title: "Motion Graphics",
    icon: "sparkles",
    description: "Animated titles, lower thirds and transitions that give a channel its signature.",
    points: ["Brand motion kits", "Kinetic typography", "Podcast intro packages"],
  },
  {
    title: "Social Media Management",
    icon: "share2",
    description: "Full-funnel content calendars across Facebook, YouTube, Instagram and TikTok.",
    points: ["Monthly content plan", "Community management", "Analytics reporting"],
  },
  {
    title: "Scriptwriting",
    icon: "penline",
    description: "Hooks, narratives and interview arcs written for spoken delivery, not for reading.",
    points: ["Podcast question decks", "Ad-read scripting", "Hook libraries"],
  },
  {
    title: "Brand Collaboration",
    icon: "handshake",
    description: "Sponsored integrations and campaigns that feel native to the audience.",
    points: ["Campaign concepting", "Creator partnerships", "Performance recaps"],
  },
];

export const portfolio = [
  {
    title: "The Ramjan Show — Sadman Sadik",
    category: "YouTube",
    platform: "YouTube",
    views: "1.2M views",
    image: ep1,
  },
  {
    title: "Khalid Farhan on digital business",
    category: "YouTube",
    platform: "YouTube",
    views: "640K views",
    image: ep2,
  },
  {
    title: "Reading culture reel series",
    category: "Reels",
    platform: "Instagram",
    views: "820K views",
    image: ep3,
  },
  {
    title: "Boi Brikkho campaign identity",
    category: "Branding",
    platform: "Campaign",
    views: "30+ branches",
    image: ventureBooks,
  },
  {
    title: "Lumas Creative studio launch",
    category: "Design",
    platform: "Studio",
    views: "Brand system",
    image: ventureStudio,
  },
  {
    title: "Keynote & campus speaking cuts",
    category: "Reels",
    platform: "Facebook",
    views: "410K views",
    image: speaking,
  },
];

export const portfolioFilters = ["All", "Reels", "YouTube", "Design", "Branding"];

export const timeline = [
  {
    year: "2018",
    title: "First camera, first audience",
    bnTitle: "প্রথম ক্যামেরা, প্রথম দর্শক",
    body: "Started editing and publishing videos from a single laptop in Dhaka.",
    bnBody: "ঢাকায় একটি ল্যাপটপ দিয়ে ভিডিও এডিট ও প্রকাশ করা শুরু।",
  },
  {
    year: "2020",
    title: "Founded Boi Brikkho",
    bnTitle: "বই বৃক্ষের যাত্রা শুরু",
    body: "Built a reading movement that now runs across 30+ branches and campus hubs.",
    bnBody: "একটি পাঠচক্র আন্দোলন, যা আজ ৩০+ শাখা ও ক্যাম্পাস হাবে ছড়িয়ে আছে।",
  },
  {
    year: "2022",
    title: "The Ramjan Show launched",
    bnTitle: "দ্য রমজান শো শুরু",
    body: "A long-form conversation series with founders, creators and educators.",
    bnBody: "উদ্যোক্তা, নির্মাতা ও শিক্ষকদের নিয়ে দীর্ঘ আলাপের একটি সিরিজ।",
  },
  {
    year: "2024",
    title: "Studio & brand partnerships",
    bnTitle: "স্টুডিও ও ব্র্যান্ড পার্টনারশিপ",
    body: "Producing content and campaigns for national and regional brands.",
    bnBody: "দেশীয় ও আঞ্চলিক ব্র্যান্ডের জন্য কনটেন্ট ও ক্যাম্পেইন নির্মাণ।",
  },
];

export const bio = {
  en: [
    "I am a content creator, podcaster and visual storyteller based in Dhaka. For the last seven years I have been building audiences the slow, honest way — one well-made video at a time.",
    "I host The Ramjan Show, a long-form conversation series, and I founded Boi Brikkho, a reading movement that grew into 30+ branches. Alongside that I help brands turn ideas into content people actually finish watching.",
  ],
  bn: [
    "আমি ঢাকাভিত্তিক একজন কনটেন্ট ক্রিয়েটর, পডকাস্টার এবং ভিজ্যুয়াল স্টোরিটেলার। গত সাত বছর ধরে একটি করে ভালো ভিডিও বানিয়ে দর্শক তৈরি করছি।",
    "আমি ‘দ্য রমজান শো’ উপস্থাপনা করি এবং ‘বই বৃক্ষ’ নামের পাঠচক্র আন্দোলনের প্রতিষ্ঠাতা, যা এখন ৩০+ শাখায় বিস্তৃত। পাশাপাশি ব্র্যান্ডদের গল্পকে দর্শকপ্রিয় কনটেন্টে রূপ দিই।",
  ],
};

export const personalInfo = [
  { label: "Name", bnLabel: "নাম", value: "Ramjan Ali Emon", bnValue: "রমজান আলী ইমন" },
  { label: "Based in", bnLabel: "অবস্থান", value: "Dhaka, Bangladesh", bnValue: "ঢাকা, বাংলাদেশ" },
  { label: "Focus", bnLabel: "কাজের ক্ষেত্র", value: "Podcast & Content", bnValue: "পডকাস্ট ও কনটেন্ট" },
  { label: "Languages", bnLabel: "ভাষা", value: "Bangla, English", bnValue: "বাংলা, ইংরেজি" },
];

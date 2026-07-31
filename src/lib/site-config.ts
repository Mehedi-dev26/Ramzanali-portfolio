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
  { to: "/ventures", label: "Ventures", bn: "উদ্যোগ" },
  { to: "/portfolio", label: "Portfolio", bn: "পোর্টফোলিও" },
  { to: "/contact", label: "Contact", bn: "যোগাযোগ" },
] as const;

export const rotatingWords = [
  "hosting The Ramjan Show",
  "growing Boi Brikkho",
  "leading brand stories",
  "speaking on stage",
  "reading a new book",
];

export const stats = [
  { value: 30, suffix: "+", label: "Boi Brikkho Branches" },
  { value: 15, suffix: "+", label: "University Chapters" },
  { value: 100, suffix: "+", label: "Podcast Conversations" },
  { value: 6, suffix: "+", label: "Years Building" },
];

/** Ventures, roles and platforms — this is a personal portfolio, not a service menu. */
export const ventures = [
  {
    title: "Boi Brikkho",
    role: "Founder & CEO",
    period: "2019 — Present",
    icon: "sprout",
    description:
      "A nonprofit reading movement started in 2019 that grew into 30+ branches across Bangladesh and 15+ university chapters.",
    points: [
      "Best Platform for Reading Books — BoiFerry, 2022",
      "Best Platform for Reading Books — Cholontika, 2023",
      "Book exchanges, reading circles and campus programmes",
    ],
  },
  {
    title: "The Ramjan Show",
    role: "Host & Podcaster",
    period: "2024 — Present",
    icon: "mic",
    description:
      "Long-form, unfiltered conversations about struggle, growth and media — built to bring real stories forward.",
    points: [
      "One of Bangladesh's youngest podcasters",
      "Guests from business, media and education",
      "Listeners across Bangladesh and the Middle East",
    ],
  },
  {
    title: "Passive Journal",
    role: "Podcast Producer & Host",
    period: "2024 — Present",
    icon: "headphones",
    description:
      "Producing and hosting podcast content for one of the country's fastest-growing learning platforms, alongside Khalid Farhan.",
    points: ["Episode planning & research", "Studio production", "Distribution strategy"],
  },
  {
    title: "Axaro",
    role: "Brand Lead",
    period: "2025 — Present",
    icon: "shirt",
    description:
      "Leading brand storytelling for the homegrown fashion label he had been a customer of since 2021.",
    points: ["Brand narrative", "Campaign direction", "Community building"],
  },
  {
    title: "Lumas Creative",
    role: "Communication Manager",
    period: "2026 — Present",
    icon: "megaphone",
    description:
      "Managing communication and brand development for an advertising studio working with leading Bangladeshi brands.",
    points: ["Client communication", "Brand development", "Content management"],
  },
  {
    title: "Speaking & Hosting",
    role: "Speaker · Host",
    period: "Ongoing",
    icon: "presentation",
    description:
      "Invited to campuses, youth summits and brand programmes to speak on reading culture, media and building young ventures.",
    points: ["Campus & summit keynotes", "Event hosting", "Panel moderation"],
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

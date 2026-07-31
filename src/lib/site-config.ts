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
    year: "2017",
    title: "Student of the Year",
    bnTitle: "স্টুডেন্ট অব দ্য ইয়ার",
    body: "Awarded Student of the Year by the Upazila Parishad for debate, sport, hosting and speaking.",
    bnBody: "বিতর্ক, খেলাধুলা, উপস্থাপনা ও বক্তৃতার জন্য উপজেলা পরিষদ থেকে ‘স্টুডেন্ট অব দ্য ইয়ার’ সম্মাননা।",
  },
  {
    year: "2019",
    title: "Founded Boi Brikkho",
    bnTitle: "বই বৃক্ষের যাত্রা শুরু",
    body: "Started a nonprofit reading movement in Dhaka that now runs 30+ branches nationwide.",
    bnBody: "ঢাকায় শুরু হওয়া অলাভজনক পাঠচক্র আন্দোলন, যার শাখা এখন সারাদেশে ৩০+।",
  },
  {
    year: "2022 — 2023",
    title: "Back-to-back national recognition",
    bnTitle: "পরপর দুই বছর জাতীয় স্বীকৃতি",
    body: "Boi Brikkho named Best Platform for Reading Books by BoiFerry (2022) and Cholontika (2023).",
    bnBody: "বইফেরি (২০২২) ও চলন্তিকা (২০২৩) থেকে ‘বেস্ট প্ল্যাটফর্ম ফর রিডিং বুকস’ স্বীকৃতি পায় বই বৃক্ষ।",
  },
  {
    year: "2024",
    title: "Into the podcast studio",
    bnTitle: "পডকাস্ট স্টুডিওতে",
    body: "Joined Passive Journal as podcast producer and host, then launched The Ramjan Show.",
    bnBody: "প্যাসিভ জার্নালে পডকাস্ট প্রযোজক ও হোস্ট হিসেবে যোগ, এরপর শুরু করেন ‘দ্য রমজান শো’।",
  },
  {
    year: "2025 — 2026",
    title: "Brand Lead & Communication Manager",
    bnTitle: "ব্র্যান্ড লিড ও কমিউনিকেশন ম্যানেজার",
    body: "Brand Lead at Axaro and Communication Manager at Lumas Creative, working with leading brands.",
    bnBody: "আক্সারোতে ব্র্যান্ড লিড ও লুমাস ক্রিয়েটিভে কমিউনিকেশন ম্যানেজার হিসেবে দেশের শীর্ষ ব্র্যান্ডদের সঙ্গে কাজ।",
  },
];

export const bio = {
  en: [
    "I am an entrepreneur, speaker and one of the youngest podcasters in Bangladesh. Everything I do starts from the same place: books, honest conversation, and the belief that young people build better when they read.",
    "In 2019 I founded Boi Brikkho, a nonprofit reading movement in Dhaka. It has grown into 30+ branches across the country and active chapters in 15+ universities, and has twice been named the best reading platform in Bangladesh.",
    "In 2024 I stepped behind the microphone — producing and hosting for Passive Journal, and launching The Ramjan Show, a long-form series of unfiltered conversations about struggle, growth and media. Alongside that I lead brand storytelling as Brand Lead at Axaro and Communication Manager at Lumas Creative.",
  ],
  bn: [
    "আমি একজন উদ্যোক্তা, বক্তা এবং বাংলাদেশের অন্যতম তরুণ পডকাস্টার। আমার সব কাজের শুরু একই জায়গা থেকে — বই, সৎ আলাপ, আর এই বিশ্বাস যে পড়ুয়া তরুণরাই ভালো কিছু গড়ে।",
    "২০১৯ সালে ঢাকায় শুরু করি ‘বই বৃক্ষ’ — একটি অলাভজনক পাঠচক্র আন্দোলন। আজ এর ৩০+ শাখা এবং ১৫+ বিশ্ববিদ্যালয়ে সক্রিয় চ্যাপ্টার রয়েছে, আর দুইবার দেশের সেরা পাঠ প্ল্যাটফর্মের স্বীকৃতি পেয়েছে।",
    "২০২৪ সালে মাইক্রোফোনের সামনে আসি — প্যাসিভ জার্নালের পডকাস্ট প্রযোজনা ও উপস্থাপনা, এবং শুরু করি ‘দ্য রমজান শো’। পাশাপাশি আক্সারোর ব্র্যান্ড লিড ও লুমাস ক্রিয়েটিভের কমিউনিকেশন ম্যানেজার হিসেবে ব্র্যান্ডদের গল্প বলি।",
  ],
};

export const personalInfo = [
  { label: "Name", bnLabel: "নাম", value: "Ramjan Ali Emon", bnValue: "রমজান আলী ইমন" },
  { label: "Based in", bnLabel: "অবস্থান", value: "Dhaka, Bangladesh", bnValue: "ঢাকা, বাংলাদেশ" },
  {
    label: "Roles",
    bnLabel: "ভূমিকা",
    value: "Founder · Podcaster · Speaker",
    bnValue: "প্রতিষ্ঠাতা · পডকাস্টার · বক্তা",
  },
  {
    label: "Education",
    bnLabel: "শিক্ষা",
    value: "Dhaka College, Fine Arts",
    bnValue: "ঢাকা কলেজ, চারুকলা",
  },
  { label: "Languages", bnLabel: "ভাষা", value: "Bangla, English", bnValue: "বাংলা, ইংরেজি" },
  {
    label: "Recognition",
    bnLabel: "স্বীকৃতি",
    value: "3 national awards",
    bnValue: "৩টি জাতীয় সম্মাননা",
  },
];


import { createFileRoute } from "@tanstack/react-router";

import portrait from "@/assets/portrait.jpg";
import ep1 from "@/assets/ep-1.jpg";
import ep2 from "@/assets/ep-2.jpg";
import ep3 from "@/assets/ep-3.jpg";
import ventureBooks from "@/assets/venture-books.jpg";
import ventureStudio from "@/assets/venture-studio.jpg";
import speaking from "@/assets/speaking.jpg";

const LINKEDIN = "https://bd.linkedin.com/in/ramjanboibrikkho";
const FACEBOOK = "https://www.facebook.com/profile.php?id=100009188653282";
const SHOW = "https://www.theramjanshow.com/";

const stats = [
  { value: "30+", label: "Boi Brikkho Branches" },
  { value: "15+", label: "University Hubs" },
  { value: "2.7K+", label: "LinkedIn Followers" },
  { value: "100+", label: "Podcast Episodes" },
];

const episodes = [
  {
    image: ep1,
    guest: "Sadman Sadik",
    title: "Sold-out offline episode — mindset, growth and going unfiltered",
    tag: "Featured Episode",
    featured: true,
  },
  {
    image: ep2,
    guest: "Khalid Farhan",
    title: "Digital entrepreneurship in the new Bangladeshi economy",
    tag: "Episode 98",
    featured: false,
  },
  {
    image: ep3,
    guest: "Ayman Sadiq",
    title: "Reading culture, EdTech and building for the next generation",
    tag: "Episode 97",
    featured: false,
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ramjan Ali Emon — Podcaster, Founder & Speaker" },
      {
        name: "description",
        content:
          "Official portfolio of Ramjan Ali Emon — host of The Ramjan Show, Founder & CEO of Boi Brikkho, speaker and brand developer based in Dhaka, Bangladesh.",
      },
      { property: "og:title", content: "Ramjan Ali Emon — Podcaster, Founder & Speaker" },
      {
        property: "og:description",
        content:
          "Host of The Ramjan Show and Founder of Boi Brikkho. Conversations, ventures and speaking from Dhaka, Bangladesh.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-surface font-sans text-ink-dim antialiased selection:bg-signal selection:text-signal-foreground">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-line bg-surface/85 backdrop-blur-md">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-6 md:h-16 md:py-0">
          <a href="#top" className="font-display text-2xl italic tracking-tight text-ink">
            RE.
          </a>
          <div className="flex items-center gap-5 text-sm font-medium text-ink-dim sm:gap-8">
            <a href="#show" className="hidden transition-colors hover:text-signal sm:inline">
              Show
            </a>
            <a href="#ventures" className="hidden transition-colors hover:text-signal sm:inline">
              Ventures
            </a>
            <a href="#speaking" className="hidden transition-colors hover:text-signal sm:inline">
              Speaking
            </a>
            <a
              href="#contact"
              className="flex shrink-0 items-center gap-2 rounded-sm py-2 pl-2 pr-3 text-sm text-signal ring-1 ring-signal transition-colors hover:bg-signal hover:text-signal-foreground"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4 shrink-0"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                />
              </svg>
              Booking
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header id="top" className="relative border-b border-line py-20 sm:py-24 lg:py-40">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid items-end gap-16 lg:grid-cols-[1fr_400px] lg:gap-12">
            <div className="reveal">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-px w-8 bg-signal" />
                <span className="text-xs font-semibold uppercase tracking-widest text-signal">
                  Youngest Podcaster in Bangladesh
                </span>
              </div>
              <h1 className="mb-8 max-w-[20ch] text-balance font-display text-6xl italic leading-none text-ink sm:text-7xl md:text-9xl">
                Ramjan Ali Emon
              </h1>
              <p className="max-w-[48ch] text-pretty text-lg leading-relaxed text-ink-dim sm:text-xl">
                Founder of Boi Brikkho and host of The Ramjan Show. Orchestrating a new era of
                dialogue and education across 15 universities.
              </p>
            </div>
            <div className="relative">
              <img
                src={portrait}
                alt="Portrait of Ramjan Ali Emon in a dark studio"
                width={1088}
                height={1360}
                className="aspect-[4/5] w-full rounded-[min(1vw,12px)] object-cover outline-1 -outline-offset-1 outline-white/5"
              />
              <div className="absolute -bottom-6 -left-4 bg-signal px-6 py-4 font-display text-2xl italic text-signal-foreground sm:-left-6">
                Since 2021
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats marquee */}
      <section className="overflow-hidden bg-surface-2/40 py-12">
        <div className="marquee-track flex w-max whitespace-nowrap">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center gap-16 px-8 opacity-50 sm:gap-24">
              {stats.map((s) => (
                <div key={s.label} className="flex items-baseline gap-4">
                  <span className="font-display text-4xl italic text-ink">{s.value}</span>
                  <span className="text-sm uppercase tracking-tight">{s.label}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* The Ramjan Show */}
      <section id="show" className="scroll-mt-20 border-b border-line py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="mb-4 text-balance font-display text-4xl italic text-ink sm:text-5xl">
                The Ramjan Show
              </h2>
              <p className="max-w-[48ch] text-pretty text-ink-dim">
                Unfiltered conversations with the architects of modern Bangladesh. From
                entrepreneurs to cultural icons — now on stage, with sold-out offline episodes.
              </p>
            </div>
            <a
              href={SHOW}
              target="_blank"
              rel="noreferrer"
              className="flex shrink-0 items-center gap-2 self-start rounded-sm py-2 pl-3 pr-4 text-sm text-ink-dim ring-1 ring-line transition-colors hover:text-ink hover:ring-ink-faint"
            >
              View All Episodes
            </a>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {episodes.map((ep) => (
              <article key={ep.title} className="group relative space-y-4">
                <div className="relative overflow-hidden rounded-[min(1vw,12px)] outline-1 -outline-offset-1 outline-white/5">
                  <img
                    src={ep.image}
                    alt={`${ep.tag} — guest ${ep.guest}`}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-signal/20 opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="flex size-16 items-center justify-center rounded-full bg-signal text-signal-foreground">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="size-8"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                  <span className="absolute left-4 top-4 rounded-sm bg-surface/80 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-ink-dim backdrop-blur">
                    {ep.tag}
                  </span>
                </div>
                <div>
                  <span
                    className={`text-xs font-medium uppercase ${ep.featured ? "text-signal" : "text-ink-faint"}`}
                  >
                    Guest: {ep.guest}
                  </span>
                  <h3 className="mt-2 text-balance text-xl font-medium leading-tight text-ink">
                    {ep.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Ventures */}
      <section id="ventures" className="scroll-mt-20 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <h2 className="mb-12 font-display text-5xl italic text-ink sm:text-6xl">
                The Ventures
              </h2>
              <div className="space-y-16">
                <div className="flex items-start justify-between gap-6 border-t border-line pt-8">
                  <div className="min-w-0">
                    <h3 className="mb-2 text-2xl font-medium text-ink">Boi Brikkho</h3>
                    <p className="max-w-[40ch] text-pretty text-ink-dim">
                      Founder &amp; CEO. A book-based ecosystem operating across 30 branches,
                      building reading culture with 15 universities nationwide.
                    </p>
                  </div>
                  <span className="shrink-0 font-display text-4xl text-ink-faint">01</span>
                </div>
                <div className="flex items-start justify-between gap-6 border-t border-line pt-8">
                  <div className="min-w-0">
                    <h3 className="mb-2 text-2xl font-medium text-ink">Lumas Creative</h3>
                    <p className="max-w-[40ch] text-pretty text-ink-dim">
                      Communication Manager. Shaping brand narratives and digital communication
                      strategies for high-growth Bangladeshi enterprises.
                    </p>
                  </div>
                  <span className="shrink-0 font-display text-4xl text-ink-faint">02</span>
                </div>
                <div
                  id="speaking"
                  className="flex scroll-mt-24 items-start justify-between gap-6 border-t border-line pt-8"
                >
                  <div className="min-w-0">
                    <h3 className="mb-2 text-2xl font-medium text-ink">Speaking &amp; Hosting</h3>
                    <p className="max-w-[40ch] text-pretty text-ink-dim">
                      Speaker and host at national programs, university sessions and brand events —
                      six years of stage and studio experience.
                    </p>
                  </div>
                  <span className="shrink-0 font-display text-4xl text-ink-faint">03</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={ventureBooks}
                alt="Boi Brikkho bookstore branch interior"
                loading="lazy"
                width={800}
                height={1200}
                className="h-full w-full rounded-[min(1vw,12px)] object-cover outline-1 -outline-offset-1 outline-white/5"
              />
              <div className="space-y-4">
                <img
                  src={ventureStudio}
                  alt="Lumas Creative studio workspace"
                  loading="lazy"
                  width={800}
                  height={800}
                  className="aspect-square w-full rounded-[min(1vw,12px)] object-cover outline-1 -outline-offset-1 outline-white/5"
                />
                <img
                  src={speaking}
                  alt="Ramjan Ali Emon speaking on a university stage"
                  loading="lazy"
                  width={800}
                  height={800}
                  className="aspect-square w-full rounded-[min(1vw,12px)] object-cover outline-1 -outline-offset-1 outline-white/5"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <footer
        id="contact"
        className="scroll-mt-20 border-t border-line bg-surface-2/30 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-6">
          <h2 className="mb-12 text-balance font-display text-4xl italic leading-tight text-ink sm:text-5xl md:text-8xl">
            Let&apos;s spark a new <br className="hidden sm:block" /> conversation
          </h2>
          <div className="mb-20 flex flex-wrap justify-center gap-6">
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-sm bg-signal py-3 pl-5 pr-6 text-sm font-medium text-signal-foreground ring-2 ring-signal ring-offset-4 ring-offset-surface transition-transform hover:brightness-110 active:scale-95"
            >
              Book for Speaking
            </a>
            <a
              href={FACEBOOK}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-sm py-3 pl-5 pr-6 text-sm text-ink-dim ring-1 ring-line transition-colors hover:text-ink hover:ring-ink-faint"
            >
              Partner with the Show
            </a>
          </div>
          <div className="flex flex-col items-center justify-between gap-8 border-t border-line pt-12 md:flex-row">
            <div className="flex gap-8 text-sm text-ink-faint">
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-signal"
              >
                LinkedIn
              </a>
              <a
                href={FACEBOOK}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-signal"
              >
                Facebook
              </a>
              <a
                href={SHOW}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-signal"
              >
                The Show
              </a>
            </div>
            <p className="text-xs uppercase tracking-widest text-ink-faint">
              &copy; {new Date().getFullYear()} Ramjan Ali Emon. Dhaka, Bangladesh.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

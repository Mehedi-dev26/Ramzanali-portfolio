import { createFileRoute, Link } from "@tanstack/react-router";

import { AboutContent } from "@/components/site/AboutContent";
import { ContactSection } from "@/components/site/ContactSection";
import { Hero } from "@/components/site/Hero";
import { PortfolioGrid } from "@/components/site/PortfolioGrid";
import { SectionShell } from "@/components/site/SectionShell";
import { ServiceGrid } from "@/components/site/ServiceGrid";
import { StatsRow } from "@/components/site/StatsRow";
import { site } from "@/lib/site-config";

const title = `${site.name} — Content Creator & Podcaster`;
const description =
  "Portfolio of Ramjan Ali Emon — content creator, host of The Ramjan Show and founder of Boi Brikkho. Video editing, thumbnails, motion and brand content.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: site.portraitWebp },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />

      <SectionShell
        id="about"
        eyebrow="about me"
        title={
          <>
            My <span className="font-signature text-gradient">Story</span>
          </>
        }
        description="A creator who cares more about the second minute of a video than the first thumbnail impression."
      >
        <div className="space-y-14">
          <StatsRow />
          <AboutContent withTimeline={false} />
          <Link
            to="/about"
            className="glass inline-flex min-h-11 items-center rounded-full px-6 py-3 text-sm font-semibold transition-colors hover:border-primary"
          >
            Read the full story
          </Link>
        </div>
      </SectionShell>

      <SectionShell
        id="services"
        eyebrow="what i do"
        title={
          <>
            My <span className="font-signature text-gradient">Services</span>
          </>
        }
        description="From the first hook line to the final export — everything a channel or a brand needs to publish consistently."
      >
        <div className="space-y-10">
          <ServiceGrid limit={3} />
          <Link
            to="/services"
            className="glass inline-flex min-h-11 items-center rounded-full px-6 py-3 text-sm font-semibold transition-colors hover:border-primary"
          >
            See all services
          </Link>
        </div>
      </SectionShell>

      <SectionShell
        id="portfolio"
        eyebrow="selected work"
        title={
          <>
            My <span className="font-signature text-gradient">Work</span>
          </>
        }
        description="Episodes, reels and brand campaigns produced for audiences across Bangladesh."
      >
        <PortfolioGrid limit={3} />
      </SectionShell>

      <SectionShell
        id="contact"
        eyebrow="get in touch"
        title={
          <>
            Let&apos;s <span className="font-signature text-gradient">Collaborate</span>
          </>
        }
        description="Sponsorships, podcast guesting, content production or a full channel setup — tell me what you have in mind."
      >
        <ContactSection />
      </SectionShell>
    </>
  );
}

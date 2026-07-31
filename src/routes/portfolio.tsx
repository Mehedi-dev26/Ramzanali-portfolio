import { createFileRoute } from "@tanstack/react-router";

import { PortfolioGrid } from "@/components/site/PortfolioGrid";
import { SectionShell } from "@/components/site/SectionShell";
import { site } from "@/lib/site-config";

const title = `Portfolio — ${site.name}`;
const description =
  "Selected work by Ramjan Ali Emon: podcast episodes, reels, YouTube productions, design systems and brand campaigns from Dhaka.";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/portfolio" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-12 md:pt-44 md:pb-16">
        <div
          aria-hidden
          className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
        />
        <div className="relative mx-auto max-w-7xl px-6 text-center md:text-left">
          <span className="glass mx-auto mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 md:mx-0">
            <span className="size-1.5 rounded-full bg-gradient-primary" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-primary sm:text-xs">
              selected work
            </span>
          </span>
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            My <span className="font-signature text-gradient">Work</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg lg:mx-0">
            Episodes, reels, design and campaigns — filter by the format you care about.
          </p>
        </div>
      </section>

      <SectionShell
        eyebrow="case studies"
        title={
          <>
            Recent <span className="font-signature text-gradient">Projects</span>
          </>
        }
      >
        <PortfolioGrid />
      </SectionShell>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";

import { SectionShell } from "@/components/site/SectionShell";
import { VentureGrid } from "@/components/site/VentureGrid";
import { site } from "@/lib/site-config";

const title = `Ventures & Roles — ${site.name}`;
const description =
  "Boi Brikkho, The Ramjan Show, Passive Journal, Axaro and Lumas Creative — the ventures and roles Ramjan Ali Emon builds and leads from Dhaka.";

export const Route = createFileRoute("/ventures")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/ventures" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/ventures" }],
  }),
  component: VenturesPage,
});

function VenturesPage() {
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
              what i build
            </span>
          </span>
          <h1 className="text-4xl font-extrabold leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
            My <span className="font-signature text-gradient">Ventures</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg lg:mx-0">
            One reading movement, two podcasts and two brands — the places where my work lives.
          </p>
        </div>
      </section>

      <SectionShell
        eyebrow="ventures & roles"
        title={
          <>
            Built &amp; <span className="font-signature text-gradient">Leading</span>
          </>
        }
        description="From a nonprofit reading movement founded in 2019 to brand and podcast work with some of Bangladesh's leading names."
      >
        <VentureGrid />
      </SectionShell>
    </>
  );
}

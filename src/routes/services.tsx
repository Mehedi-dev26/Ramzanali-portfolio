import { createFileRoute } from "@tanstack/react-router";

import { SectionShell } from "@/components/site/SectionShell";
import { ServiceGrid } from "@/components/site/ServiceGrid";
import { site } from "@/lib/site-config";

const title = `Services — ${site.name}`;
const description =
  "Video editing, thumbnail design, motion graphics, social media management, scriptwriting and brand collaborations by Ramjan Ali Emon.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
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
              what i do
            </span>
          </span>
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            My <span className="font-signature text-gradient">Services</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg lg:mx-0">
            Six ways I help creators and brands publish content that keeps people watching.
          </p>
        </div>
      </section>

      <SectionShell
        eyebrow="the offer"
        title={
          <>
            Full <span className="font-signature text-gradient">Production</span>
          </>
        }
        description="Pick a single service or hand over the whole pipeline — planning, shooting, editing, publishing and reporting."
      >
        <ServiceGrid />
      </SectionShell>
    </>
  );
}

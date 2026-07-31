import { createFileRoute } from "@tanstack/react-router";

import { ContactSection } from "@/components/site/ContactSection";
import { SectionShell } from "@/components/site/SectionShell";
import { site } from "@/lib/site-config";

const title = `Contact — ${site.name}`;
const description =
  "Work with Ramjan Ali Emon: sponsorships, podcast guesting, content production and brand campaigns. Send a message from Dhaka, Bangladesh.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
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
              get in touch
            </span>
          </span>
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Let&apos;s <span className="font-signature text-gradient">Talk</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg lg:mx-0">
            Tell me about the project and I will reply with ideas, timeline and pricing.
          </p>
        </div>
      </section>

      <SectionShell
        eyebrow="message me"
        title={
          <>
            Start a <span className="font-signature text-gradient">Project</span>
          </>
        }
      >
        <ContactSection />
      </SectionShell>
    </>
  );
}

import { motion, useReducedMotion } from "motion/react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Camera,
  ChevronDown,
  Facebook,
  Figma,
  Instagram,
  Mail,
  Mic,
  Music2,
  Youtube,
} from "lucide-react";
import { useEffect, useState } from "react";

import { TechOrbit, type OrbitItem } from "@/components/site/TechOrbit";
import { rotatingWords, site } from "@/lib/site-config";

const innerItems: OrbitItem[] = [
  { label: "Photoshop", node: "Ps" },
  { label: "Illustrator", node: "Ai" },
  { label: "Premiere Pro", node: "Pr" },
  { label: "After Effects", node: "Ae" },
  { label: "Lightroom", node: "Lr" },
  { label: "Canva", node: "Cv" },
];

const outerItems: OrbitItem[] = [
  { label: "YouTube", node: <Youtube className="size-4" /> },
  { label: "Facebook", node: <Facebook className="size-4" /> },
  { label: "Instagram", node: <Instagram className="size-4" /> },
  { label: "TikTok", node: <Music2 className="size-4" /> },
  { label: "CapCut", node: "Cc" },
  { label: "Figma", node: <Figma className="size-4" /> },
  { label: "Camera", node: <Camera className="size-4" /> },
  { label: "Microphone", node: <Mic className="size-4" /> },
];

const socials = [
  { href: site.links.youtube, label: "YouTube", Icon: Youtube },
  { href: site.links.facebook, label: "Facebook", Icon: Facebook },
  { href: site.links.instagram, label: "Instagram", Icon: Instagram },
  { href: site.links.tiktok, label: "TikTok", Icon: Music2 },
  { href: `mailto:${site.email}`, label: "Email", Icon: Mail },
];

function RotatingWord() {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % rotatingWords.length),
      2400,
    );
    return () => window.clearInterval(id);
  }, [reduced]);

  return (
    <span className="relative block h-6 min-w-[11.5rem] overflow-hidden text-left sm:h-7">
      <motion.span
        key={index}
        initial={{ y: 18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 flex items-center text-sm font-medium text-foreground sm:text-base"
      >
        {rotatingWords[index]}
      </motion.span>
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div
        aria-hidden
        className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-gradient-glow blur-3xl"
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        {/* Photo */}
        <div className="order-1 flex justify-center lg:order-2">
          <div className="relative flex aspect-square w-full max-w-[26rem] items-center justify-center">
            <div
              aria-hidden
              className="animate-float-slow absolute inset-8 rounded-full bg-gradient-primary opacity-20 blur-3xl"
            />
            <div
              aria-hidden
              className="absolute inset-[14%] rounded-full border border-border/60"
            />
            <div
              aria-hidden
              className="absolute inset-[2%] rounded-full border border-border/40"
            />
            <div className="relative size-56 rounded-full bg-gradient-primary p-[3px] shadow-elegant sm:size-64 md:size-72 lg:size-80">
              <picture>
                <source srcSet={site.portraitWebp} type="image/webp" />
                <img
                  src={site.portraitJpg}
                  alt={`Portrait of ${site.name}, content creator and podcaster`}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  className="size-full rounded-full object-cover ring-4 ring-background"
                />
              </picture>
            </div>
            <TechOrbit items={innerItems} radiusRatio={0.37} duration={34} chipSize={40} />
            <TechOrbit
              items={outerItems}
              radiusRatio={0.52}
              duration={58}
              reverse
              chipSize={46}
            />
          </div>
        </div>

        {/* Text */}
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <p className="font-mono text-[10px] uppercase tracking-widest text-primary sm:text-xs">
            {"// hello, my name is"}
          </p>
          <h1
            className="font-signature mt-3 whitespace-nowrap leading-[0.9] text-gradient"
            style={{ fontSize: "clamp(3rem, 11vw, 9rem)" }}
          >
            {site.name}
          </h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="mx-auto mt-5 h-px w-32 origin-left bg-gradient-primary lg:mx-0"
          />
          <h2 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            {site.role}
          </h2>
          <div className="mt-5 flex items-center justify-center gap-3 lg:justify-start">
            <span className="relative flex size-2.5 shrink-0">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex size-2.5 rounded-full bg-gradient-primary" />
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              currently:
            </span>
            <RotatingWord />
          </div>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg lg:mx-0">
            I host The Ramjan Show, founded the Boi Brikkho reading movement, and build
            video-first content for brands that want to be watched, not skipped.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Link
              to="/portfolio"
              className="inline-flex min-h-11 items-center rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform duration-300 hover:scale-105"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="glass inline-flex min-h-11 items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors hover:border-primary"
            >
              Let&apos;s Collaborate <ArrowRight className="size-4" />
            </Link>
          </div>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            {socials.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="glass flex size-10 items-center justify-center rounded-full transition-all duration-300 hover:text-primary hover:shadow-glow sm:size-11"
                >
                  <Icon className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-16 flex justify-center">
        <ChevronDown className="size-6 animate-bounce text-muted-foreground" aria-hidden />
      </div>
    </section>
  );
}

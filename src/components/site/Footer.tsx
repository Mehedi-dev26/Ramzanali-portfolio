import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, Music2, Youtube } from "lucide-react";

import { navItems, site } from "@/lib/site-config";

const socials = [
  { href: site.links.youtube, label: "YouTube", Icon: Youtube },
  { href: site.links.facebook, label: "Facebook", Icon: Facebook },
  { href: site.links.instagram, label: "Instagram", Icon: Instagram },
  { href: site.links.tiktok, label: "TikTok", Icon: Music2 },
  { href: site.links.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: `mailto:${site.email}`, label: "Email", Icon: Mail },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-12 text-center">
        <Link to="/" className="group flex flex-col items-center gap-3">
          <span className="grid size-11 place-items-center rounded-2xl bg-gradient-primary text-sm font-bold text-primary-foreground shadow-glow transition-transform duration-300 group-hover:scale-105">
            {site.initials}
          </span>
          <span className="rounded-2xl bg-gradient-primary px-5 py-2 font-signature text-3xl leading-tight font-extrabold text-primary-foreground shadow-glow sm:text-4xl">
            {site.name}
          </span>
        </Link>

        <p className="max-w-xl text-sm text-muted-foreground">{site.tagline}</p>

        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="group relative inline-flex min-h-11 items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
                <span className="absolute inset-x-0 bottom-2 h-px origin-left scale-x-0 bg-gradient-primary transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </li>
          ))}
        </ul>

        <ul className="flex flex-wrap items-center justify-center gap-3">
          {socials.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="glass flex size-11 items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:text-primary hover:shadow-glow"
              >
                <Icon className="size-4" />
              </a>
            </li>
          ))}
        </ul>

        <div aria-hidden className="h-px w-full max-w-2xl bg-gradient-primary opacity-60" />
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

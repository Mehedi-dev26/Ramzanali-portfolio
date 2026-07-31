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
      <div className="mx-auto max-w-7xl space-y-6 px-6 py-12">
        <div className="flex flex-col items-center gap-3 text-center md:flex-row md:justify-between md:text-left">
          <Link to="/" className="flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-xl bg-gradient-primary text-xs font-bold text-primary-foreground">
              {site.initials}
            </span>
            <span className="font-signature text-2xl leading-none">{site.name}</span>
          </Link>
          <p className="max-w-md text-sm text-muted-foreground">{site.tagline}</p>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:justify-start">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="inline-flex min-h-11 items-center text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
          {socials.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="glass flex size-11 items-center justify-center rounded-full transition-colors hover:text-primary"
              >
                <Icon className="size-4" />
              </a>
            </li>
          ))}
        </ul>

        <div aria-hidden className="h-px w-full bg-gradient-primary opacity-60" />
        <p className="text-center text-xs text-muted-foreground md:text-left">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

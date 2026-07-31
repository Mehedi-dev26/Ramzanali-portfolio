import {
  Clapperboard,
  Handshake,
  Image as ImageIcon,
  PenLine,
  Share2,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import { Reveal } from "@/components/site/SectionShell";
import { services } from "@/lib/site-config";

const icons: Record<string, LucideIcon> = {
  clapperboard: Clapperboard,
  image: ImageIcon,
  sparkles: Sparkles,
  share2: Share2,
  penline: PenLine,
  handshake: Handshake,
};

export function ServiceGrid({ limit }: { limit?: number }) {
  const list = limit ? services.slice(0, limit) : services;
  return (
    <div className="grid gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
      {list.map((service, i) => {
        const Icon = icons[service.icon] ?? Sparkles;
        return (
          <Reveal key={service.title} index={i} className="h-full">
            <article className="glass flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant md:p-7">
              <span className="grid size-12 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-5 text-xl font-bold tracking-tight">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <ul className="mt-5 space-y-2">
                {service.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gradient-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}

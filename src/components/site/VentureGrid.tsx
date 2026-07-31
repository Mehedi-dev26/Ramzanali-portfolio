import {
  Headphones,
  Megaphone,
  Mic,
  Presentation,
  Shirt,
  Sprout,
  type LucideIcon,
} from "lucide-react";

import { Reveal } from "@/components/site/SectionShell";
import { ventures } from "@/lib/site-config";

const icons: Record<string, LucideIcon> = {
  sprout: Sprout,
  mic: Mic,
  headphones: Headphones,
  shirt: Shirt,
  megaphone: Megaphone,
  presentation: Presentation,
};

export function VentureGrid({ limit }: { limit?: number }) {
  const list = limit ? ventures.slice(0, limit) : ventures;
  return (
    <div className="grid gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
      {list.map((venture, i) => {
        const Icon = icons[venture.icon] ?? Sprout;
        return (
          <Reveal key={venture.title} index={i} className="h-full">
            <article className="glass flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant md:p-7">
              <div className="flex items-start justify-between gap-3">
                <span className="grid size-12 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                  <Icon className="size-5" />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {venture.period}
                </span>
              </div>
              <h3 className="mt-5 text-2xl font-extrabold tracking-tight">{venture.title}</h3>
              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-primary">
                {venture.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {venture.description}
              </p>
              <ul className="mt-5 space-y-2">
                {venture.points.map((p) => (
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

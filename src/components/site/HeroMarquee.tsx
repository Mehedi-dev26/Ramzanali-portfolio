import { stats } from "@/lib/site-config";

const extras = [
  { label: "The Ramjan Show", detail: "Podcast Host" },
  { label: "Boi Brikkho", detail: "Founder & CEO" },
  { label: "Lumas Creative", detail: "Communication Manager" },
];

type Chip = { lead: string; label: string };

const chips: Chip[] = [
  ...stats.map((s) => ({ lead: `${s.value}${s.suffix}`, label: s.label })),
  ...extras.map((e) => ({ lead: e.label, label: e.detail })),
];

function Track({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <ul
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center gap-4 pr-4"
    >
      {chips.map((c, i) => (
        <li
          key={`${c.lead}-${i}`}
          className="glass flex min-h-12 shrink-0 items-center gap-3 rounded-full px-5 py-2.5 transition-colors duration-300 hover:border-primary/60"
        >
          <span className="text-gradient text-base font-bold sm:text-lg">{c.lead}</span>
          <span className="font-mono text-[10px] whitespace-nowrap uppercase tracking-widest text-muted-foreground sm:text-[11px]">
            {c.label}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function HeroMarquee() {
  return (
    <div
      className="relative mt-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]"
      aria-label="Highlights"
    >
      <div className="marquee-lane flex w-max">
        <Track />
        <Track ariaHidden />
      </div>
    </div>
  );
}

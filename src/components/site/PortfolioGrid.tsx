import { useState } from "react";

import { Reveal } from "@/components/site/SectionShell";
import { portfolio, portfolioFilters } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function PortfolioGrid({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState("All");
  const base = filter === "All" ? portfolio : portfolio.filter((p) => p.category === filter);
  const list = limit ? base.slice(0, limit) : base;

  return (
    <div>
      <div className="mb-10 flex flex-wrap justify-center gap-2 md:justify-start">
        {portfolioFilters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={cn(
              "min-h-11 rounded-full px-5 text-sm font-medium transition-all",
              filter === f
                ? "bg-gradient-primary text-primary-foreground shadow-glow"
                : "glass text-muted-foreground hover:text-foreground",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {list.map((item, i) => (
          <Reveal key={item.title} index={i} className="h-full">
            <article className="group glass relative h-full overflow-hidden rounded-2xl">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-background via-background/85 to-transparent p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="text-base font-bold">{item.title}</h3>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-primary">
                  {item.platform} · {item.views}
                </p>
              </div>
              <div className="flex items-center justify-between p-6 group-hover:opacity-0">
                <h3 className="text-base font-semibold">{item.title}</h3>
                <span className="glass ml-3 shrink-0 rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-primary">
                  {item.category}
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

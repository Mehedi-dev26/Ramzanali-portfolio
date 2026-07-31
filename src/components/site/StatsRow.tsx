import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

import { stats } from "@/lib/site-config";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1400;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="text-gradient text-4xl font-bold md:text-5xl">
      {n}
      {suffix}
    </span>
  );
}

export function StatsRow() {
  return (
    <div className="grid grid-cols-2 gap-5 md:gap-6 lg:grid-cols-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="glass rounded-2xl p-6 text-center md:p-7 md:text-left"
        >
          <Counter value={s.value} suffix={s.suffix} />
          <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs">
            {s.label}
          </p>
        </div>
      ))}
    </div>
  );
}

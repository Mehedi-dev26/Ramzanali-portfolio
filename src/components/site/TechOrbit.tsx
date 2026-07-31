import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

export type OrbitItem = { label: string; node: ReactNode };

type Props = {
  items: OrbitItem[];
  radiusRatio?: number;
  duration?: number;
  reverse?: boolean;
  chipSize?: number;
};

export function TechOrbit({
  items,
  radiusRatio = 0.4,
  duration = 40,
  reverse = false,
  chipSize = 40,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [radius, setRadius] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setRadius(el.clientWidth * radiusRatio);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [radiusRatio]);

  return (
    <div ref={ref} aria-hidden className="pointer-events-none absolute inset-0">
      <motion.div
        className="absolute inset-0"
        animate={reduced ? {} : { rotate: reverse ? -360 : 360 }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {radius > 0 &&
          items.map((item, i) => {
            const angle = (i / items.length) * Math.PI * 2;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            return (
              <motion.div
                key={item.label}
                className="absolute left-1/2 top-1/2"
                style={{
                  width: chipSize,
                  height: chipSize,
                  marginLeft: -chipSize / 2,
                  marginTop: -chipSize / 2,
                  transform: `translate(${x}px, ${y}px)`,
                }}
              >
                <motion.div
                  className="pointer-events-auto flex size-full items-center justify-center rounded-full border border-border bg-foreground/90 text-[10px] font-semibold text-background shadow-elegant transition-transform duration-300 hover:scale-110 hover:shadow-glow dark:bg-card/80 dark:text-foreground"
                  title={item.label}
                  animate={reduced ? {} : { rotate: reverse ? 360 : -360 }}
                  transition={{ duration, ease: "linear", repeat: Infinity }}
                >
                  {item.node}
                </motion.div>
              </motion.div>
            );
          })}
      </motion.div>
    </div>
  );
}

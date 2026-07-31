import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

export type OrbitItem = {
  label: string;
  node: ReactNode;
  /** Brand accent used for the glyph, tinted tile and glow */
  tint: string;
};

type Props = {
  items: OrbitItem[];
  radiusRatio?: number;
  duration?: number;
  reverse?: boolean;
  /** Chip size as a ratio of the container width — keeps mobile in proportion */
  chipRatio?: number;
  minChip?: number;
  maxChip?: number;
};

export function TechOrbit({
  items,
  radiusRatio = 0.4,
  duration = 40,
  reverse = false,
  chipRatio = 0.11,
  minChip = 30,
  maxChip = 46,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setWidth(el.clientWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const radius = width * radiusRatio;
  const chipSize = Math.min(maxChip, Math.max(minChip, width * chipRatio));

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
                  className="pointer-events-auto relative flex size-full items-center justify-center overflow-hidden rounded-[30%] text-[11px] font-bold backdrop-blur-md transition-transform duration-300 hover:scale-110"
                  style={{
                    background: `linear-gradient(150deg, color-mix(in oklab, ${item.tint} 26%, var(--card)) 0%, color-mix(in oklab, ${item.tint} 8%, var(--card)) 55%, var(--card) 100%)`,
                    color: item.tint,
                    boxShadow: `inset 0 1px 0 color-mix(in oklab, ${item.tint} 45%, transparent), 0 10px 24px -12px color-mix(in oklab, ${item.tint} 70%, transparent)`,
                    border: `1px solid color-mix(in oklab, ${item.tint} 35%, transparent)`,
                  }}
                  title={item.label}
                  animate={reduced ? {} : { rotate: reverse ? 360 : -360 }}
                  transition={{ duration, ease: "linear", repeat: Infinity }}
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 top-0 h-1/2 opacity-40"
                    style={{
                      background:
                        "linear-gradient(180deg, color-mix(in oklab, white 26%, transparent), transparent)",
                    }}
                  />
                  <span className="relative flex items-center justify-center">
                    {item.node}
                  </span>
                </motion.div>
              </motion.div>
            );
          })}
      </motion.div>
    </div>
  );
}

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

export type OrbitItem = {
  label: string;
  node: ReactNode;
  /** Official brand background (solid color or gradient) */
  bg: string;
  /** Glyph color on top of the brand background */
  fg: string;
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
                  className="pointer-events-auto relative flex size-full items-center justify-center overflow-hidden rounded-[30%] text-[11px] font-bold transition-transform duration-300 hover:scale-110"
                  style={{
                    background: item.bg,
                    color: item.fg,
                    boxShadow:
                      "inset 0 1px 0 rgb(255 255 255 / 0.28), inset 0 -1px 0 rgb(0 0 0 / 0.25), 0 12px 26px -12px rgb(0 0 0 / 0.7)",
                    border: "1px solid rgb(255 255 255 / 0.1)",
                  }}
                  title={item.label}
                  animate={reduced ? {} : { rotate: reverse ? 360 : -360 }}
                  transition={{ duration, ease: "linear", repeat: Infinity }}
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 top-0 h-1/2 opacity-20"
                    style={{
                      background:
                        "linear-gradient(180deg, rgb(255 255 255 / 0.55), transparent)",
                    }}
                  />
                  <span className="relative flex items-center justify-center drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]">
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

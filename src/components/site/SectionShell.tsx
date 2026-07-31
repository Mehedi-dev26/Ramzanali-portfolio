import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type Props = {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  className?: string;
  align?: "left" | "center";
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  align = "left",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.35, 1], [80, 0, -40]);
  const rotateX = useTransform(scrollYProgress, [0, 0.35], [18, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.85, 1], [0, 1, 1, 0.5]);
  const blobX = useTransform(scrollYProgress, [0, 1], ["-12%", "18%"]);
  const blobY = useTransform(scrollYProgress, [0, 1], ["10%", "-14%"]);

  return (
    <section
      id={id}
      ref={ref}
      className={cn("relative overflow-hidden py-20 md:py-24", className)}
    >
      <motion.div
        aria-hidden
        style={reduced ? {} : { x: blobX, y: blobY }}
        className="pointer-events-none absolute left-1/2 top-1/3 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-gradient-glow opacity-70 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.header
          style={reduced ? {} : { y, rotateX, opacity, transformPerspective: 1000 }}
          className={cn(
            "mb-14 md:mb-20",
            align === "center" ? "text-center" : "text-center md:text-left",
          )}
        >
          {eyebrow ? (
            <span
              className={cn(
                "glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2",
                align === "center" ? "mx-auto" : "mx-auto md:mx-0",
              )}
            >
              <span className="size-1.5 rounded-full bg-gradient-primary" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-primary sm:text-xs">
                {eyebrow}
              </span>
            </span>
          ) : null}
          <h2 className="pb-2 text-4xl font-bold leading-[1.2] tracking-tight md:text-6xl lg:text-7xl">
            {title}
          </h2>
          {description ? (
            <p
              className={cn(
                "mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg",
                align === "center" ? "mx-auto" : "mx-auto md:mx-0",
              )}
            >
              {description}
            </p>
          ) : null}
        </motion.header>
        {children}
      </div>
    </section>
  );
}

export function Reveal({
  children,
  index = 0,
  className,
}: {
  children: ReactNode;
  index?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: 0.05 * index, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

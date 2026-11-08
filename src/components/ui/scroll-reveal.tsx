
"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  effect?: "fade" | "rise" | "scale" | "slide";
};

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  effect = "rise",
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const offsets = {
    up: { x: 0, y: 24 },
    down: { x: 0, y: -24 },
    left: { x: 20, y: 0 },
    right: { x: -20, y: 0 },
  };
  const initialByEffect = {
    fade: { opacity: 0 },
    rise: { opacity: 0, ...offsets[direction] },
    scale: { opacity: 0, scale: 0.97 },
    slide: { opacity: 0, ...offsets[direction] },
  };

  return (
    <motion.div
      className={className}
      initial={
        shouldReduceMotion
          ? { opacity: 1 }
          : initialByEffect[effect]
      }
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: effect === "fade" ? 0.55 : 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

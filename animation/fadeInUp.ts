import type { Variants } from "framer-motion";

export const easing = [0.6, -0.05, 0.01, 0.99] as const;

export const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
  exit: {
    opacity: 0,
  },
} satisfies Variants;

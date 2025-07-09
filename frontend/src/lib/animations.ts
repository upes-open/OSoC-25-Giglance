import type { Variants } from "framer-motion";

// Animation variants for container
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Animation variants for individual cards
export const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      damping: 25,
      stiffness: 120,
      duration: 0.8,
    },
  },
};

// Hover animation variants
export const hoverVariants: Variants = {
  hover: {
    scale: 1.05,
    y: -10,
    transition: {
      type: "spring" as const,
      damping: 20,
      stiffness: 300,
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      type: "spring" as const,
      damping: 20,
      stiffness: 400,
    },
  },
};

// Word animation variants for text
export const wordAnimationVariants = {
  title: {
    whileHover: {
      scale: 1.1,
      y: -5,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 15,
      },
    },
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
  subtitle: {
    whileHover: {
      scale: 1.05,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 10,
      },
    },
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
  },
};

// Icon animation variants
export const iconAnimationVariants = {
  whileHover: {
    scale: 1.1,
    rotate: 12,
    transition: {
      type: "spring" as const,
      damping: 10,
      stiffness: 400,
    },
  },
  whileTap: {
    scale: 1.05,
    rotate: 8,
    transition: {
      type: "spring" as const,
      damping: 10,
      stiffness: 400,
    },
  },
};

// Modal animation variants
export const modalVariants = {
  overlay: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  content: {
    initial: { scale: 0.8, opacity: 0, y: 20 },
    animate: { scale: 1, opacity: 1, y: 0 },
    exit: { scale: 0.8, opacity: 0, y: 20 },
    transition: { type: "spring" as const, damping: 25, stiffness: 300 },
  },
};

// Button animation variants
export const buttonAnimationVariants = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
};

// Shimmer and particle animation variants
export const effectVariants = {
  shimmer: {
    initial: { x: "-100%" },
    whileHover: { x: "100%" },
    whileTap: { x: "100%" },
    transition: { duration: 0.8 },
  },
  particles: {
    animate: {
      y: [0, -10, 0],
      opacity: [0.3, 1, 0.3],
    },
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
  hoverIndicator: {
    initial: { scaleX: 0 },
    whileHover: { scaleX: 1 },
    whileTap: { scaleX: 1 },
    transition: { type: "spring" as const, stiffness: 400 },
  },
};

export const heroVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const backgroundVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 300,
    },
  },
  tap: { scale: 0.95 },
};

export const pageVariants = {
  initial: { opacity: 0, y: 50 },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  out: {
    opacity: 0,
    y: -50,
    transition: {
      duration: 0.6,
      ease: "easeIn",
    },
  },
};
"use client";

import { motion } from "framer-motion";

export const MotionDiv = motion.div;
export const MotionUl = motion.ul;
export const MotionLi = motion.li;

export const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

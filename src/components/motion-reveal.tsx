"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

type MotionRevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
}>;

export function MotionReveal({ children, className, delay = 0 }: MotionRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

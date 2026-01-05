import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import type { FC } from "react";

interface TypingTextProps {
  text: string;
  className?: string;
}

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const letter: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const TypingText: FC<TypingTextProps> = ({ text, className }) => (
  <motion.span
    variants={container}
    initial="hidden"
    whileInView="visible"
    className={className}
  >
    {text.split("").map((char, index) => (
      <motion.span key={index} variants={letter}>
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </motion.span>
);

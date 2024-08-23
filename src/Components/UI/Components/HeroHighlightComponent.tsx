import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../Helper/HeroHighlight";

interface HeroHighlightDemoProps {
  text: string;
  className?: string;
}

export function HeroHighlightDemo({ text, className }: HeroHighlightDemoProps) {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 1,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className=" font-bold text-neutral-700 dark:text-white   "
      >
        <Highlight
          className={`text-black dark:text-white md:text-3xl text-2xl p-1 ${className}`}
        >
          {text}
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}

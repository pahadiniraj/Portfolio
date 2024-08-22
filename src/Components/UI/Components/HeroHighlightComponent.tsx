import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../Helper/HeroHighlight";

interface HeroHighlightDemoProps {
  text: string;
}

export function HeroHighlightDemo({ text }: HeroHighlightDemoProps) {
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
        <Highlight className="text-black dark:text-white text-2xl">
          {text}
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}

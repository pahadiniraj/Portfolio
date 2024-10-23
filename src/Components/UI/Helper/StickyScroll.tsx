"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "../../../Utils/cn";
import { BsArrowUp } from "react-icons/bs";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);

    // Hide the scroll indicator after scrolling past a certain point
    if (latest > 0.1) {
      setShowScrollIndicator(false);
    } else {
      setShowScrollIndicator(true);
    }
  });

  return (
    <motion.div
      className="md:max-h-[300px] max-h-[520px] overflow-auto md:scrollbar-hide overflow-y-auto flex justify-center relative space-x-10 rounded-md border-white md:border-none"
      ref={ref}
    >
      <div className="div relative flex px-4 w-full">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div
              key={item.title + index}
              className="mb-52 mt-5 md:mb-20 md:mt-10"
            >
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-sm text-slate-300 mt-5"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-10" />
        </div>
      </div>
      <div
        className={cn(
          "md:h-60 md:w-80 md:rounded-md bg-transparent md:sticky md:top-5 md:overflow-hidden",
          "fixed w-full h-60 rounded-md bottom-5 pr-10",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
      {showScrollIndicator && (
        <motion.div
          animate={{
            y: [0, -3, 0], // Move up and down
            opacity: [1, 0.5, 1], // Fading effect
          }}
          transition={{
            repeat: Infinity, // Loop the animation
            repeatType: "loop", // Loop type
            duration: 1.5, // Duration of one loop
            ease: "easeInOut", // Smooth easing
          }}
          whileHover={{ y: 0, opacity: 1 }} // Stop jumping and fading on hover
          className="fixed top-72 right-10 rounded-full justify-center items-center flex md:hidden"
        >
          <div className="text-xxs flex justify-center flex-col items-center gap-1">
            <BsArrowUp className="text-white text-xl" />
            <p>Scroll Above Image</p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface line1Props {
  className: string;
}

const Line1: React.FC<line1Props> = ({ className }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Adjust based on when the animation should start
  });

  return (
    <motion.div
      ref={ref}
      className={`${className} h-[15px] bg-white rounded-[30px] relative top-[15px]`}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: inView ? 1 : 0 }}
      transition={{ duration: 3, ease: "easeOut" }}
      style={{ transformOrigin: "left" }}
    />
  );
};

export default Line1;

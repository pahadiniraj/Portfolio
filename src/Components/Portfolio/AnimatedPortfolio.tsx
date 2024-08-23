import React from "react";
import { motion } from "framer-motion";
import Button from "../Button/Button";
import Image, { StaticImageData } from "next/image";

interface AnimatedPortfolioProps {
  filterSkill: () => {
    image: StaticImageData;
    category: string;
    name: string;
    description: string;
  }[];
}

const AnimatedPortfolio: React.FC<AnimatedPortfolioProps> = ({
  filterSkill,
}) => {
  // Animation variants for each item
  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  // Animation variants for the container
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Delay between each item's animation
        delayChildren: 0.2, // Initial delay before starting the sequence
      },
    },
  };

  return (
    <motion.div
      className="grid md:grid-cols-3 sm:grid-cols-3 grid-cols-1 md:max-h-[250px] overflow-x-auto md:scrollbar-hide max-h-[450px] gap-5 py-2 "
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {filterSkill().map((value, index) => (
        <motion.div
          key={index}
          className="rounded-2xl flex bg-green-50 justify-center items-center "
          variants={itemVariants}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Button className="w-full rounded-2xl p-3 bg-gray-100">
            <Image
              src={value.image}
              alt="Niraj Portfolio"
              className="w-full rounded-2xl"
            />
          </Button>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AnimatedPortfolio;

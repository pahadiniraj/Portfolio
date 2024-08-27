import React from "react";
import { motion } from "framer-motion";
import Button from "../Button/Button";
import Image, { StaticImageData } from "next/image";
import { useDispatch } from "react-redux";
import { BiSolidLike } from "react-icons/bi";
import { FaCommentDots } from "react-icons/fa6";
import { IoMdShareAlt } from "react-icons/io";

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
  const dispatch = useDispatch();
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
          <div className="w-full rounded-2xl px-4 py-2 bg-gray-100">
            <div>
              <p className="text-black font-semibold text-center">
                {value.name}
              </p>
            </div>
            <Image
              src={value.image}
              alt="Niraj Portfolio"
              className="w-full rounded-2xl"
              priority
            />
            <div className="flex gap-2 mt-2 pl-2  flex-col">
              <div className="text-black flex justify-between">
                <div className="flex justify-center items-center gap-2">
                  <BiSolidLike className="text-xs text-blue-600" />
                  <p className="text-xs">1</p>
                </div>
                <div className="flex gap-5 justify-center items-center">
                  <div className="flex gap-1 justify-center items-center">
                    <p className="text-xs">1</p>
                    <p className="text-xs">Comment</p>
                  </div>
                  <div className="flex gap-1 justify-center items-center">
                    <p className="text-xs">1</p>
                    <p className="text-xs">Share</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between ">
                <Button className="text-black flex justify-center items-center gap-1">
                  <BiSolidLike />
                  <p className="text-sm">like</p>
                </Button>
                <Button className="text-black flex justify-center items-center gap-1">
                  <FaCommentDots />
                  <p className="text-sm">Comment</p>
                </Button>
                <Button className="text-black flex justify-center items-center gap-1">
                  <IoMdShareAlt />
                  <p className="text-sm">Share</p>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AnimatedPortfolio;

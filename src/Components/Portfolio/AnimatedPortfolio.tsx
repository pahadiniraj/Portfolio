import React, { useState } from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { GiAllSeeingEye } from "react-icons/gi";
import { useRouter } from "next/navigation";

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

  const router = useRouter();

  return (
    <motion.div
      className="grid md:grid-cols-3 sm:grid-cols-3 grid-cols-1 md:max-h-[250px] md:scrollbar-hide  gap-5 py-2 pr-2 overflow-x-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {filterSkill().map((value, index) => (
        <motion.div
          key={index}
          className="rounded-2xl flex justify-center items-center  "
          variants={itemVariants}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          onClick={() => router.push(`/project/${index}`)}
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden group bg-slate-800 border border-slate-700 px-3 pt-1 pb-3 hover:shadow-lg cursor-pointer">
            <h2 className=" font-bold p-1">{value.name}</h2>
            <div className="md:h-[190px] ">
              <Image
                src={value.image}
                alt="Niraj Portfolio"
                className="w-full h-full object-cover rounded-md "
                priority
              />
            </div>
            <div className="absolute inset-0 flex  justify-center items-center bg-black  text-white opacity-0 group-hover:opacity-90 transition-opacity duration-300 ">
              <div className="flex flex-col justify-center items-center gap-4 px-4 py-2 ">
                <GiAllSeeingEye className="text-4xl" />
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AnimatedPortfolio;

// <div className="flex gap-2 mt-2 pl-2  flex-col  ">
//             <div className="text-black flex justify-between">
//               <div className="flex justify-center items-center gap-2">
//                 <BiSolidLike className="text-xs text-blue-600" />
//                 <p className="text-xs">1</p>
//               </div>
//               <div className="flex gap-5 justify-center items-center">
//                 <div className="flex gap-1 justify-center items-center">
//                   <p className="text-xs">1</p>
//                   <p className="text-xs">Comment</p>
//                 </div>
//                 <div className="flex gap-1 justify-center items-center">
//                   <p className="text-xs">1</p>
//                   <p className="text-xs">Share</p>
//                 </div>
//               </div>
//             </div>
//           </div>

{
  /* <div className="flex justify-between gap-6  ">
                  <div className="flex justify-center items-center gap-2">
                    <BiSolidLike className="text-xs text-blue-600" />
                    <p className="text-xs">1</p>{" "}
                  </div>
                  <div className="flex gap-1 justify-center items-center">
                    <p className="text-xs">1</p>
                    <p className="text-xs">Comment</p>
                  </div>
                  <div className="flex gap-1 justify-center items-center">
                    <p className="text-xs">1</p>
                    <p className="text-xl ">
                      <RiShareForward2Fill />
                    </p>
                  </div>
                </div> */
}

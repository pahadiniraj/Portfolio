import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { RiSearchEyeLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
import img from "../../Assets/Logo/logo.png";

interface AnimatedPortfolioProps {
  filterSkill: () => {
    category: string;
    name: string;
    thumbnail: string;
    _id: string;
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
      className="grid md:grid-cols-3 sm:grid-cols-3 grid-cols-1 md:max-h-[250px] md:scrollbar-hide gap-5 py-2 pr-2 overflow-x-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {filterSkill().map((value, index) => (
        <motion.div
          key={index}
          className="rounded-2xl flex justify-center items-center"
          variants={itemVariants}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          onClick={() => router.push(`/project/${value._id}`)}
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden group bg-slate-800 border border-slate-700 px-3  pb-3 hover:shadow-lg cursor-pointer">
            <h2 className="font-bold p-1">{value.name}</h2>
            <div className="md:h-[190px]  ">
              <Image
                src={value.thumbnail || img.src}
                alt={`Thumbnail for ${value.name}`}
                className="w-[100%] md:h-[190px]  object-cover rounded-md"
                priority
                width={400}
                height={400}
              />
            </div>
            <div className="absolute inset-0 flex justify-center items-center bg-black text-white opacity-0 group-hover:opacity-90 transition-opacity duration-300">
              <div className="flex flex-col justify-center items-center gap-4 px-4 py-2">
                <RiSearchEyeLine className="text-4xl" />
                <p>View Details</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AnimatedPortfolio;

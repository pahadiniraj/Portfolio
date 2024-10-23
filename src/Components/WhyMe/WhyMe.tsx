"use client";
import React from "react";
import { StickyScrollRevealDemo } from "../UI/Components/StickyScrollComp";
import { motion } from "framer-motion";
import useIsMobile from "../Hooks/UseIsMobile";

const WhyMe = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: isMobile ? "-100vw" : "-2vw" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 250, damping: 30 }}
        className="md:h-[390px] md:w-[900px]  w-full h-full overflow-hidden md:rounded-[50px] z-10 "
      >
        <div className="text-center mt-5">
          <h3 className="text-2xl font-semibold px-4  ">
            <span className="py-1 px-2 rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500">
              Why Me ?
            </span>
          </h3>
        </div>
        <div className="w-full ">
          <StickyScrollRevealDemo />
        </div>
      </motion.div>
    </>
  );
};

export default WhyMe;

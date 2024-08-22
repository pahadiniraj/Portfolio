"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const RootLayoutClient = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, x: "-100vw" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "100vw" }}
        transition={{ type: "spring", stiffness: 250, damping: 40 }}
        className="bg-black md:rounded-[50px]  md:flex justify-center items-center shadow-custom md:w-[900px] md:h-[370px]  "
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default RootLayoutClient;

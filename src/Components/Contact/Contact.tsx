"use client";
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: "-100vw" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "100vw", filter: "blur(20px)" }}
        transition={{ type: "spring", stiffness: 250, damping: 40 }}
        className="h-[390px] w-[900px] bg-black overflow-hidden rounded-[50px]"
      >
        hello
      </motion.div>
    </>
  );
};

export default Contact;

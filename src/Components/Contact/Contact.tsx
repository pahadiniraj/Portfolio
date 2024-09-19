"use client";
import React from "react";
import { motion } from "framer-motion";
import Testimonial from "../Testimonial/testimonial";
import { ShootingStars } from "../UI/Components/SootingStarComp";

const Contact = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: "-100vw" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "100vw", filter: "blur(20px)" }}
        transition={{ type: "spring", stiffness: 250, damping: 40 }}
        className="h-[390px] w-[900px] bg-black overflow-hidden rounded-[50px] p-5 relative "
      >
        <ShootingStars />
        <div className=" flex ">
          <div className="w-1/3">
            <Testimonial />
          </div>

          <div className="w-2/3  ">
          
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;

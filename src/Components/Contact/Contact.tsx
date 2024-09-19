"use client";
import React from "react";
import { motion } from "framer-motion";
import Testimonial from "../Testimonial/testimonial";
import { ShootingStars } from "../UI/Components/SootingStarComp";
import ContactFormik from "./ContactFormik";

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

          <div className="w-2/3  z-20 border border-slate-800 flex flex-col justify-center items-center rounded-3xl ">
            <div className="overflow-y-auto max-h-[350px] mt-1">
              <h2 className="text-white text-2xl font-bold text-center mb-2">
                Contact Me
              </h2>
              <ContactFormik />
              <div className="flex  justify-end w-full">
                <p className="text-lg font-serif italic text-gray-600 border-l-4  border-blue-500 pl-4 mr-2">
                  "Let's talk on something great together."
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;

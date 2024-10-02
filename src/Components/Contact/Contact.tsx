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
        className="md:h-[390px] md:w-[900px] h-full  bg-black overflow-hidden md:rounded-[50px] p-5 relative z-10 md:overflow-y-hidden overflow-y-auto"
      >
        <h2 className="text-white text-2xl font-bold text-center mb-2 block md:hidden">
          Contact Me
        </h2>
        <ShootingStars />
        <div className=" flex flex-col md:flex-row md:gap-4">
          <div className="md:w-1/3">
            <Testimonial />
          </div>

          <div className="md:w-2/3  z-20 md:border border-slate-800 flex flex-col justify-center items-center rounded-3xl ">
            <div className="overflow-y-auto md:max-h-[350px] md:mt-1">
              <h2 className="text-white text-2xl font-bold text-center mb-2 hidden md:block">
                Contact Me
              </h2>
              <ContactFormik />
              <div className="flex  justify-start md:justify-end w-full mt-2">
                <p className="text-xs md:text-lg  font-serif italic text-gray-600 border-l-4  border-blue-500 pl-2 ml-2 mr-2 mt-2 md:mt-0 ">
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

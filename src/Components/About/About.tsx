"use client";
import React from "react";
import Image from "next/image";
import profile from "../../Assets/ProfileImg/profile.jpg";
import { HeroHighlightDemo } from "../UI/Components/HeroHighlightComponent";
import Skills from "./Skills/Skills";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: "-100vw" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100vw", filter: "blur(20px)" }}
      transition={{ type: "spring", stiffness: 250, damping: 40 }}
      className="flex flex-col md:flex-row md:justify-center md:items-center md:h-[390px] md:w-[900px] bg-black   overflow-hidden md:rounded-[50px] h-screen w-full overflow-y-scroll md:overflow-hidden z-10"
    >
      <div className="md:w-2/6 order-2 md:order-1 p-4  flex flex-col gap-4 justify-center items-center">
        <Image
          src={profile}
          alt="Niraj Pahadi Photo"
          className="w-full rounded-3xl md:mr-8"
          priority
        />
      </div>
      <div className=" md:hidden order-2   p-2">
        <Skills />
      </div>
      <div className="md:w-3/5 order-1 pl-4 md:pl-0 flex flex-col  md:py-5 py-4  md:max-h-[400px] md:overflow-y-hidden  pr-5 ">
        <section>
          <p className="text-sm font-semibold">About me</p>
          <h1 className="md:text-3xl font-bold text-2xl mb-1 md:mb-3">
            2 Year's Experience,
          </h1>
          <HeroHighlightDemo text="on FullStack Development" />
          <p className="text-sm mt-4">
            Hello there! I'm Niraj. I specialize in Web & App development. I'm
            deeply committed to my craft. With 2 years of experience, I'm
            profound in what I do.
          </p>
        </section>
        <div className="hidden md:block order-3 py-4 overflow-y-auto">
          <Skills />
        </div>
      </div>
    </motion.div>
  );
};

export default About;

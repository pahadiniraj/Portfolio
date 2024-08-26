"use client";
import React from "react";
import Image from "next/image";
import profile from "../../Assets/ProfileImg/profile.jpg";
import { HeroHighlightDemo } from "../UI/Components/HeroHighlightComponent";
import Skills from "./Skills/Skills";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-center md:items-center  ">
      <div className="md:w-2/6 order-2 md:order-1 p-4  flex flex-col gap-4 justify-center items-center">
        <Image
          src={profile}
          alt="Niraj Pahadi Photo"
          className="w-full rounded-3xl md:mr-8"
          priority
        />
      </div>
      <div className=" md:hidden order-2  p-2">
        <Skills />
      </div>
      <div className="md:w-3/5 order-1 pl-4 md:pl-0 flex flex-col  md:py-5 py-4  md:max-h-[400px] md:overflow-auto scrollbar-hide pr-5 ">
        <section>
          <p className="text-sm font-semibold">About me</p>
          <h1 className="md:text-3xl font-bold text-2xl">
            2 Year's Experience,
          </h1>
          <HeroHighlightDemo text="on FullStack Development" />
          <p className="text-sm mt-2">
            Hello there! I'm Niraj. I specialize in Web & App development. I'm
            deeply committed to my craft. With 2 years of experience, I'm
            profound in what I do.
          </p>
        </section>
        <div className="hidden md:block order-3 py-4">
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default About;

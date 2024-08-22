"use client";
import React from "react";
import Image from "next/image";
import profile from "../../Assets/ProfileImg/profile.jpg";
import { ReactTyped } from "react-typed";
import { HeroHighlightDemo } from "../UI/Components/HeroHighlightComponent";
import Line1 from "./SkillsData/line1";
import Line2 from "./SkillsData/line2";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-center  ">
      <div className="md:w-2/6  order-2 md:order-1 p-4    flex flex-col gap-4 justify-center items-center  ">
        <Image
          src={profile}
          alt="Niraj Pahadi Photo"
          className="w-full rounded-3xl md:mr-12"
        />
      </div>
      <div className="md:w-3/5 order-1 md:order-2 pl-4  md:pl-0 flex flex-col  md:gap-6 justify-start  mt-2">
        <section>
          <p className="text-sm font-semibold ">About me</p>
          <h1 className="md:text-4xl font-bold text-2xl ">
            2 Year's Experience,
          </h1>
          <HeroHighlightDemo text="on FullStack Development" />

          <p className="text-sm mt-2">
            Hello there! I'm Niraj . I specialize in Web & App development.I'm
            deeply committed to my craft. With 2 years of experience , I'm
            profound in what i do.
          </p>
        </section>
        <div>
          <Line1 />
          <Line2 />
        </div>
      </div>
    </div>
  );
};

export default About;

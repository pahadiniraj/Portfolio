"use client";
import React from "react";
import HomeButtons from "./HomeButtons/HomeButtons";
import SocialLinks from "./SocialLinks/SocialLinks";
import Image from "next/image";
import profile from "../../Assets/ProfileImg/profile.jpg";
import { ReactTyped } from "react-typed";

const HomeComponent = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-center md:gap-4  ">
      <div className="md:w-2/6  order-1 md:order-2 p-4    flex flex-col gap-4 justify-center items-center ">
        <h1 className="text-center text-2xl font-bold md:hidden">
          Niraj's Portfolio
        </h1>
        <Image
          src={profile}
          alt="Niraj Pahadi Photo"
          className="w-full rounded-xl  "
        />
      </div>
      <div className="md:w-3/5 order-2 md:order-1 pl-4 py-2 md:pl-0 flex flex-col gap-4 md:gap-6 justify-center">
        <section>
          <p className="text-4xl font-bold ">Hi I'm</p>
          <h1 className="text-4xl font-bold ">Niraj Pahadi,</h1>
          <h2 className="text-4xl font-bold ">
            {" "}
            <ReactTyped
              strings={["I Make Web Apps", "I Make Web APIs"]}
              typeSpeed={60}
              backSpeed={50}
              loop
            />
          </h2>
          <p className="text-sm mt-3">
            Collaborating with highly skilled professionals, Me and my team
            deliver top-notch services. With a broad spectrum of knowledge, I'm
            particularly inclined and focused on{" "}
            <span className="font-bold">Software Development</span>
          </p>
        </section>
        <div className="flex-col gap-5 flex justify-center md:justify-start md:flex-row">
          <HomeButtons />
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;

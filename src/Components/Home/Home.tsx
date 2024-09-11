"use client";
import React, { useEffect, useState } from "react";
import HomeButtons from "./HomeButtons/HomeButtons";
import SocialLinks from "./SocialLinks/SocialLinks";
import Image from "next/image";
import profile from "../../Assets/ProfileImg/profile.jpg";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import LoginButton from "../Auth/Login/LoginButton";

const HomeComponent = () => {
  const router = useRouter();

  return (
    <motion.div
      key="home"
      initial={{ opacity: 0, x: "-100vw" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100vw", filter: "blur(20px)" }}
      transition={{ type: "spring", stiffness: 250, damping: 40 }}
      className="flex flex-col md:flex-row md:justify-center md:p-2 md:h-[390px] md:w-[900px] bg-black overflow-hidden md:rounded-[50px] h-screen  overflow-y-scroll md:overflow-visible "
    >
      <h1 className="text-xl text-center mt-2 font-bold md:hidden">Niraj</h1>
      <div className="md:w-2/6 w-full h-full order-1 md:order-2 p-4    flex flex-col gap-4 justify-center items-center  ">
        <Image
          src={profile}
          alt="Niraj Pahadi Photo"
          className="w-full rounded-3xl md:ml-12 "
          priority
        />
      </div>
      <div className="md:w-3/5 order-2 md:order-1 pl-4  md:pl-0 flex flex-col gap-4 md:gap-6 justify-center ">
        <section>
          <p className="text-4xl font-bold ">Hi I'm</p>
          <h1 className="text-4xl font-bold ">Niraj Pahadi,</h1>
          <h2 className="text-4xl font-bold ">
            {" "}
            <ReactTyped
              strings={["I Make Web Apps", "I Make Web APIs", "I Make Music !"]}
              typeSpeed={60}
              backSpeed={65}
              loop
            />
          </h2>
          <p className="text-sm mt-3">
            Collaborating with highly skilled professionals, I deliver top-notch
            services alongside my team. With a broad spectrum of knowledge, I am
            particularly inclined towards
            <span className="font-bold ml-1">Software Development</span>
          </p>
        </section>
        <div className="flex-col gap-5 flex justify-center md:justify-start md:flex-row pb-5">
          <HomeButtons />
          <SocialLinks />
        </div>
      </div>
    </motion.div>
  );
};

export default HomeComponent;

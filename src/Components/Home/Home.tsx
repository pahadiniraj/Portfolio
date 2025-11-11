"use client";
import React, { useEffect, useState } from "react";
import HomeButtons from "./HomeButtons/HomeButtons";
import Image from "next/image";
import profile from "../../Assets/ProfileImg/unnamed.jpg";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import useIsMobile from "../Hooks/UseIsMobile";

const HomeComponent = () => {
  const router = useRouter();
  const isMobile = useIsMobile();
  return (
    <motion.div
      initial={{ opacity: 0, x: isMobile ? "-100vw" : "-10vw" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 250, damping: 30 }}
      className="flex flex-col md:flex-row md:justify-center md:items-center md:h-[390px] md:w-[900px]  bg-opacity-90 md:bg-opacity-100  md:rounded-[50px]  w-full overflow-y-scroll md:overflow-visible z-10  "
    >
      <div className="md:w-2/6  order-1 md:order-2 md:pl-8 pb-4 md:pb-0 px-4  flex flex-col gap-4 justify-center items-center  ">
        <div className="md:hidden">
          <h1 id="contact-request-text" className="contact-request-paragraph">
            <span
              id="contact-link"
              className="contact-link"
              onClick={() => router.push("/")}
            >
              <span className="text-xl font-semibold font-serif italic cursor-pointer">
                Niraj
              </span>

              <svg
                id="contact-link-icon"
                viewBox="0 0 70 36"
                className="contact-icon"
              >
                <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
              </svg>
            </span>
          </h1>
        </div>
        <div className="p-3 bg-white/10 rounded-3xl backdrop-blur-md shadow-lg  relative justify-center items-center w-full  ">
          <Image
            src={profile}
            alt="Niraj Pahadi Photo"
            className="w-full rounded-3xl "
            priority
          />
        </div>
      </div>
      <div className="md:w-3/5  order-2 md:order-1 pl-4  md:pl-0 flex flex-col gap-4 md:gap-6 justify-center ">
        <section>
          <p className="text-4xl font-bold mb-2 ">Hi I'm</p>
          <div className="flex gap-2 ">
            <h1 className="text-4xl font-bold mb-2 ">Niraj Pahadi,</h1>
          </div>
          <h2 className="text-4xl font-bold ">
            {" "}
            <ReactTyped
              strings={["I Make Web Apps", "I Make Web APIs", "I Make Music!"]}
              typeSpeed={60}
              backSpeed={65}
              loop
            />
          </h2>
          <p className="text-sm mt-3 pr-2">
            Collaborating with highly skilled professionals, I deliver top-notch
            services alongside my team. With a broad spectrum of knowledge, I am
            particularly inclined, towards
            <span className="font-bold ml-1">Software Development</span>
          </p>
        </section>
        <div className="flex-col gap-5 flex justify-center md:justify-start md:flex-row pb-5">
          <HomeButtons />
        </div>
      </div>
    </motion.div>
  );
};

export default HomeComponent;

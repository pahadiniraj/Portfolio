"use client";
import React, { useEffect, useState } from "react";
import HomeButtons from "./HomeButtons/HomeButtons";
import SocialLinks from "./SocialLinks/SocialLinks";
import Image from "next/image";
import profile from "../../Assets/ProfileImg/dev-1.jpg";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const HomeComponent = () => {
  const router = useRouter();
  return (
    <motion.div
      key="home"
      initial={{ opacity: 0, x: "-100vw" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100vw", filter: "blur(20px)" }}
      transition={{ type: "spring", stiffness: 250, damping: 40 }}
      className="flex flex-col md:flex-row md:justify-center md:items-center md:h-[390px] md:w-[900px] bg-black bg-opacity-90 md:bg-opacity-100 overflow-hidden md:rounded-[50px] h-screen w-full overflow-y-scroll md:overflow-visible z-10  "
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
        <div className="p-3 bg-white/10 rounded-3xl backdrop-blur-md shadow-lg  relative overflow-hidden justify-center items-center w-full  ">
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="30"
              height="30"
              viewBox="-17.582 -4.664 71.571 87.246"
              className="mt-1"
            >
              <title>Flag of Nepal</title>
              {/* Flag construction */}
              <use href="#a" stroke="#003893" strokeWidth="5.165" />
              <path
                id="a"
                d="M -15,37.5735931288 h 60 L -15,0 v 80 h 60 L -15,20 z"
                fill="#DC143C"
              />
              <g fill="#fff">
                <path d="M -11.9502769431,23.4834957055 A 12.8400974233,12.8400974233 0 0,0 11.9502769431,23.4834957055 A 11.9502769431 11.9502769431 0 0,1 -11.9502769431,23.4834957055" />
                <g transform="translate(0 29.045) scale(5.56106)">
                  <circle r="1" />
                  <g id="d">
                    <g id="c">
                      <path
                        id="b"
                        d="M 0.195090322016,-0.980785280403 L 0,-1.388784109750 L -0.195090322016,-0.980785280403"
                        transform="rotate(11.25)"
                      />
                      <use href="#b" transform="rotate(22.5)" />
                      <use href="#b" transform="rotate(45)" />
                    </g>
                    <use href="#c" transform="rotate(67.5)" />
                  </g>
                  <use href="#d" transform="scale(-1 1)" />
                </g>
                <g transform="matrix(8.1434 0 0 8.1434 0 58.787)">
                  <circle r="1" />
                  <g id="g">
                    <g id="f">
                      <path
                        id="e"
                        d="M 0.258819045103,0.965925826289 L 0,1.576749285537 L -0.258819045103,0.965925826289"
                      />
                      <use href="#e" transform="rotate(180)" />
                    </g>
                    <use href="#f" transform="rotate(90)" />
                  </g>
                  <use href="#g" transform="rotate(30)" />
                  <use href="#g" transform="rotate(60)" />
                </g>
              </g>
            </svg>
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
          <p className="text-sm mt-3">
            Collaborating with highly skilled professionals, I deliver top-notch
            services alongside my team. With a broad spectrum of knowledge, I am
            particularly inclined, towards
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

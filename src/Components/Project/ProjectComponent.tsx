"use client";
import React from "react";
import { motion } from "framer-motion";
import { IoCaretBack } from "react-icons/io5";
import { useRouter } from "next/navigation";
import Image from "next/image";
import image from "../../Assets/PortfolioImg/long.png";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";

const ProjectComponent = () => {
  const router = useRouter();

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.2, filter: "blur(20px)" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="flex flex-col md:px-12 px-5 md:h-[390px] md:w-[900px] bg-black overflow-hidden md:rounded-[50px] h-screen w-full overflow-y-auto md:overflow-visible z-10 relative "
      >
        <button
          onClick={() => router.push("/portfolio")}
          className="absolute left-7 top-4 "
        >
          <IoCaretBack className="text-2xl" />
        </button>
        <h1
          id="contact-request-text"
          className="contact-request-paragraph"
          onClick={() => router.push("/")}
        >
          <span id="contact-link" className="contact-link">
            <span className="text-xl font-semibold font-serif italic">
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

        <div className="md:overflow-hidden overflow-y-auto scrollbar-none  flex flex-col md:flex-row w-full gap-1 md:gap-4 ">
          <div className="h-[320px] md:w-2/5 py-4">
            <div className="w-full h-full mb-4 flex justify-start items-start relative">
              <div className="relative md:w-full h-[300px] md:h-full overflow-y-auto flex justify-start items-start border-2 border-slate-600 ">
                <Image
                  src={image}
                  alt="Grace International Project"
                  style={{ objectFit: "cover" }}
                  className=""
                  priority
                />
              </div>
            </div>
          </div>
          <div className="text-white md:w-3/5  py-4 flex flex-col gap-4 md:overflow-y-auto  md:h-[300px] ">
            <p className="text-2xl font-semibold mt-1  text-start">
              <span className="py-1 px-2 rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500">
                Grace International
              </span>
            </p>
            <p className="text-sm">
              Grace International is a leading educational service provider
              established with the aim of delivering quality educational
              services.
            </p>
            <div>
              <p className="font-semibold mb-1">Key Features:</p>
              <ul className="list-disc ml-5 text-sm">
                <li>Responsive website design</li>
                <li>Dynamic content management system</li>
                <li>Professional and user-friendly UI/UX design</li>
                <li>SEO-optimized structure</li>
                <li>
                  Integration with third-party services for form submissions
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold mb-2">Technologies Used:</p>
              <div className=" text-xs grid md:grid-cols-5 grid-cols-4 gap-2 pr-5">
                <p className="border-2 border-slate-600 rounded-lg text-center p-1">
                  React.js
                </p>
                <p className="border-2 border-slate-600 rounded-lg text-center p-1">
                  React.js
                </p>{" "}
                <p className="border-2 border-slate-600 rounded-lg text-center p-1">
                  React.js
                </p>{" "}
                <p className="border-2 border-slate-600 rounded-lg text-center p-1">
                  React.js
                </p>{" "}
                <p className="border-2 border-slate-600 rounded-lg text-center p-1">
                  React.js
                </p>
                <p className="border-2 border-slate-600 rounded-lg text-center p-1">
                  React.js
                </p>
              </div>
            </div>
            <div className="right-6 top-5 flex  gap-3">
              <div className="font-semibold text-base">Links:</div>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookSquare className="text-xl" />
                </a>
                <div>
                  <FaSquareGithub className="text-xl" />
                </div>
                <div>
                  <FaLinkedin className="text-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectComponent;
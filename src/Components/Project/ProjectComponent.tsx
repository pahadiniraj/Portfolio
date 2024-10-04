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
          className="absolute left-5 top-6 "
        >
          <IoCaretBack className="text-2xl" />
        </button>

        <h2 className="text-2xl font-semibold mt-5 mb-2 text-center">
          <span className="py-1 px-2 rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500">
            Grace International
          </span>
        </h2>

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
          <div className="text-white md:w-3/5 md:scrollbar-none py-4 flex flex-col gap-4 md:overflow-y-auto  md:h-[300px] ">
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
              <div className=" text-xs grid grid-cols-5 gap-2 pr-5">
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

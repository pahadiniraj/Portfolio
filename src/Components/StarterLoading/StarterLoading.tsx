"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import LoaderComponent from "../Loader/LoaderComponent";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const StarterLoading = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false); // Track if it's mobile
  const pathname = usePathname();

  useEffect(() => {
    // Detect screen width on initial load
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Set to true if less than 768px (mobile view)
    };

    handleResize(); // Check the screen size initially
    window.addEventListener("resize", handleResize); // Listen for resize events

    // Simulate a loading period of 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer); // Cleanup the timer on component unmount
      window.removeEventListener("resize", handleResize); // Cleanup the event listener
    };
  }, []);

  return (
    <>
      {loading ? (
        <div className="bg-black h-screen w-full z-40 flex justify-center items-center">
          <LoaderComponent />
        </div>
      ) : (
        <div className="h-screen w-full flex flex-col justify-center items-center md:overflow-x-hidden md:overflow-y-auto">
          <AnimatePresence mode="wait">
            {isMobile ? (
              // Render a regular div in mobile (no animation)
              <div className="md:h-[390px] md:w-[900px] h-screen w-full flex justify-center bg-black z-10 md:rounded-[50px] md:bg-opacity-95 bg-opacity-90">
                {children}
              </div>
            ) : (
              // Render with framer-motion animations on larger screens
              <motion.div
                key={pathname}
                initial={{ opacity: 0, x: "-100vw" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100vw", filter: "blur(2px)" }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
                className="md:h-[390px] md:w-[900px] h-screen w-full flex justify-center bg-black z-10 md:rounded-[50px] md:bg-opacity-95 bg-opacity-90"
              >
                {children}
              </motion.div>
            )}
          </AnimatePresence>
          <div className="z-20 fixed md:static">
            <Navbar />
          </div>
        </div>
      )}
    </>
  );
};

export default StarterLoading;

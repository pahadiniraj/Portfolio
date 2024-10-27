"use client";
import { Inter } from "next/font/google";
import "../globals.css";
import StarterLoading from "@/Components/StarterLoading/StarterLoading";
import BackgroundComponent from "@/Components/Background/background";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import LoaderComponent from "@/Components/Loader/LoaderComponent";
import Navbar from "@/Components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false); // Track if it's mobile
  const pathname = usePathname();
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const timer = setTimeout(() => {
      setLoading(false);
      console.log("Hello there!");
    }, 2000);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <BackgroundComponent />
      </div>

      {loading ? (
        <div className="bg-black h-screen w-full z-40 flex justify-center items-center">
          <LoaderComponent />
        </div>
      ) : (
        <div className="h-screen w-full flex flex-col justify-center items-center">
          <AnimatePresence mode="wait">
            {isMobile ? (
              <div className="md:h-[390px] md:w-[900px] h-screen w-full flex justify-center bg-black z-10 md:rounded-[50px] md:bg-opacity-95 bg-opacity-90">
                {children}
              </div>
            ) : (
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
    </div>
  );
}

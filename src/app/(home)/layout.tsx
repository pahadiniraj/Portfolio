"use client";
import BackgroundComponent from "@/Components/Background/background"; // Only keep this import once
import { Inter } from "next/font/google";
import "../globals.css";
import StarterLoading from "@/Components/StarterLoading/StarterLoading";
import Capcha from "@/Components/Capcha/Capcha";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import LoaderComponent from "@/Components/Loader/LoaderComponent";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/Components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <BackgroundComponent />
      {loading ? (
        <div className="bg-black h-screen w-full z-40 flex justify-center items-center">
          <LoaderComponent />
        </div>
      ) : (
        <div className=" h-screen w-full flex flex-col justify-center items-center md:overflow-x-hidden overflow-y-auto">
          <AnimatePresence mode="wait">
            {isMobile ? (
              <div className="md:h-[390px] md:w-[900px] h-full w-full flex justify-center bg-black z-10 md:rounded-[50px] md:bg-opacity-95 bg-opacity-90">
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
                className="md:h-[390px] md:w-[900px] h-full w-full flex justify-center bg-black z-10 md:rounded-[50px] md:bg-opacity-95 bg-opacity-90"
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
}

"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import useMediaQuery from "../useMediaQuery/useMedia";
import store from "@/Components/Redux/store";
import { Provider } from "react-redux";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";

const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        color: "white",
      },
    },
  },
});

const RootLayoutClient = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isMd = useMediaQuery("(min-width: 768px)"); // Adjust the query as needed

  return (
    <>
      {isMd ? (
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, x: "-100vw" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100vw", filter: "blur(20px)" }}
            transition={{ type: "spring", stiffness: 250, damping: 40 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      ) : (
        <motion.div
          key={pathname}
          initial={{ opacity: 0, x: "-100vw" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 250, damping: 40 }}
          className="flex justify-center items-center  w-full  bg-black"
        >
          {children}
        </motion.div>
      )}
    </>
  );
};

export default RootLayoutClient;

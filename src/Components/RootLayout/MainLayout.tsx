"use client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import { Provider } from "react-redux";
import store from "../Redux/store";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        color: "white",
      },
    },
  },
});

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  return (
    <Provider store={store}>
      <ChakraProvider theme={customTheme}>
        <div className="md:h-[390px] h-screen bg-black   w-full flex justify-center  md:bg-transparent">
          {children}
        </div>
        <button
          className=" font-bold  absolute top-2  text-white right-2"
          onClick={() => router.push("/login")}
        >
          <motion.div
            animate={{
              y: [0, -10, 0, 10, 0], // Bell-like up and down movement
              rotate: [0, -10, 10, -10, 10, 0], // Gentle rotation to mimic a bell's motion
              scale: [1, 1.1, 1], // Slight scale up to mimic vibration
              backgroundColor: ["#FF0000", "#f40000", "#088e2c"], // Flash red and white like an alarm
            }}
            transition={{
              duration: 0.4, // Fast shake
              repeat: Infinity, // Loop the animation
              repeatType: "loop", // Loop type
              ease: "easeInOut", // Smooth easing
              repeatDelay: 5, // Delay between shakes
            }}
            whileHover={{ scale: 1.1 }} // Slightly scale up on hover
            className="px-2 py-1 rounded-md"
          >
            Login
          </motion.div>
        </button>
      </ChakraProvider>
    </Provider>
  );
};

export default MainLayout;

"use client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import { Provider } from "react-redux";
import store from "../Redux/store";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import useMediaQuery from "../useMediaQuery/useMedia";
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

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isMd = useMediaQuery("(min-width: 768px)");

  return (
    <Provider store={store}>
      <ChakraProvider theme={customTheme}>
        <div className="md:h-[390px] h-screen bg-black   w-full flex justify-center  md:bg-transparent">
          {children}
        </div>
      </ChakraProvider>
    </Provider>
  );
};

export default MainLayout;

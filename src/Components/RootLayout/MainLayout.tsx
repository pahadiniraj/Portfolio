"use client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
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
  return (
    <ChakraProvider theme={customTheme}>
      <div className="md:h-[390px] h-screen bg-black   w-full flex justify-center  md:bg-transparent">
        {children}
      </div>
    </ChakraProvider>
  );
};

export default MainLayout;

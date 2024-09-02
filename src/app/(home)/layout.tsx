"use client";
import { Inter } from "next/font/google";
import Navbar from "@/Components/Navbar/Navbar";
import RootLayoutClient from "@/Components/RootLayout/RootLayout";
import "../globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "@/Components/Redux/store";
import { motion, AnimatePresence } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });
const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        color: "white",
      },
    },
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-full justify-center  items-center flex-col md:overflow-x-hidden  md:flex md:justify-center md:items-center gap-2 bg-white">
      <Provider store={store}>
        <ChakraProvider theme={customTheme}>
          <div className="h-[390px] w-[900px] bg-black  overflow-hidden rounded-[50px] ">
            {children}
          </div>
          <Navbar />
        </ChakraProvider>
      </Provider>
    </div>
  );
}

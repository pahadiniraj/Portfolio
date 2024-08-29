"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthLayoutClient from "@/Components/AuthRootLayout/AuthRootLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContainerWrapper from "@/Components/ContainerWrapper";
import { Provider } from "react-redux";
import store from "@/Components/Redux/store";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        color: "white",
      },
    },
  },
});

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <main className="bg-black h-screen flex justify-center items-center">
          <Provider store={store}>
            <ChakraProvider theme={customTheme}>{children}</ChakraProvider>
          </Provider>
          <ContainerWrapper />
        </main>
      </body>
    </html>
  );
}

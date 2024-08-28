"use client";
import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Provider } from "react-redux";

const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        color: "white",
      },
    },
  },
});

const AdminLayoutClient = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    
      <ChakraProvider theme={customTheme}>{children}</ChakraProvider>
    </>
  );
};

export default AdminLayoutClient;

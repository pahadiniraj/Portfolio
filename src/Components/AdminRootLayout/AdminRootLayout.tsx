"use client";
import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { api } from "@/Services/apiSlice";

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
      <ChakraProvider theme={customTheme}>
        <ApiProvider api={api}>{children}</ApiProvider>
      </ChakraProvider>
    </>
  );
};

export default AdminLayoutClient;

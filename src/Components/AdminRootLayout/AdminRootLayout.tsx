"use client";
import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "../Redux/store";

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
      <Provider store={store}>
        <ChakraProvider theme={customTheme}>{children}</ChakraProvider>
      </Provider>
    </>
  );
};

export default AdminLayoutClient;

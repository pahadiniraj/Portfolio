"use client";
import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "../Redux/store";
import RequireTokenAuth from "@/Services/RequireTokenAuth";

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
        {/* <RequireTokenAuth> */}
        <ChakraProvider theme={customTheme}>{children}</ChakraProvider>
        {/* </RequireTokenAuth> */}
      </Provider>
    </>
  );
};

export default AdminLayoutClient;

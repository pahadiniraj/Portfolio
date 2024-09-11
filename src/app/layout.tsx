"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import ContainerWrapper from "@/Components/ContainerWrapper";
import { Provider } from "react-redux";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import HigherOrderAuth from "@/Components/Auth/HigherOrderAuth";
import HigherorderComponent from "@/Components/HigherorderComp/HigherorderComp";

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
        <main className="bg-transparent  h-screen flex justify-center items-center bg-pink-200">
          <ChakraProvider theme={customTheme}>
            <GoogleOAuthProvider
              clientId={`${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}`}
            >
              <HigherorderComponent>{children}</HigherorderComponent>
            </GoogleOAuthProvider>
          </ChakraProvider>
          <ContainerWrapper />
        </main>
      </body>
    </html>
  );
}

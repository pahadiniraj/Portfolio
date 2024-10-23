"use client";
import { Inter } from "next/font/google";
import Head from "next/head"; // Import the Head component
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import ContainerWrapper from "@/Components/ContainerWrapper";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import { store } from "@/Redux/Store";
import { SkeletonTheme } from "react-loading-skeleton";
import Capcha from "@/Components/Capcha/Capcha";

const inter = Inter({ subsets: ["latin"] });
export const runtime = "edge";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body className={`${inter.className} `}>
        <Provider store={store}>
          <main className="bg-transparent h-screen flex justify-center items-center ">
            <GoogleOAuthProvider
              clientId={`${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}`}
            >
              <SkeletonTheme baseColor="#000000" highlightColor="#79737d">
                {children}
              </SkeletonTheme>
            </GoogleOAuthProvider>
            <ContainerWrapper />
            <Capcha />
          </main>
        </Provider>
      </body>
    </html>
  );
}

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

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Provider store={store}>
          <main className="bg-transparent h-screen flex justify-center items-center bg-pink-200">
            <GoogleOAuthProvider
              clientId={`${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}`}
            >
              <SkeletonTheme baseColor="#000000" highlightColor="#79737d">
                {children}
              </SkeletonTheme>
            </GoogleOAuthProvider>
            <ContainerWrapper />
          </main>
        </Provider>
      </body>
    </html>
  );
}

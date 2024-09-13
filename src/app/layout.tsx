"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import ContainerWrapper from "@/Components/ContainerWrapper";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import { store } from "@/Redux/Store";

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
          <main className="bg-transparent  h-screen flex justify-center items-center bg-pink-200">
            <GoogleOAuthProvider
              clientId={`${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}`}
            >
              {children}
            </GoogleOAuthProvider>
            <ContainerWrapper />
          </main>
        </Provider>
      </body>
    </html>
  );
}

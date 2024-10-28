import { Inter } from "next/font/google";
import "../globals.css";
import Script from "next/script";
import Capcha from "@/Components/Capcha/Capcha";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-black w-full h-screen flex justify-center items-center">
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=6LemNmAqAAAAAGo5gQmOWBoZ-WFVn5aTvOVkSjzC`}
        strategy="beforeInteractive"
      />
      {children}
      <Capcha />
    </div>
  );
}

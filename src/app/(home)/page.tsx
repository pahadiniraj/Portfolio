"use client";
import HomeComponent from "@/Components/Home/Home";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <>
      <AnimatePresence>
        <HomeComponent />
      </AnimatePresence>
    </>
  );
}

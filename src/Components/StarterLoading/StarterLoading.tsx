"use client";
import React, { useEffect, useState } from "react";
import ParticlesComponent from "../Particals/Particals";
import MainLayout from "../RootLayout/MainLayout";
import Navbar from "../Navbar/Navbar";
import LoaderComponent from "../Loader/LoaderComponent";

const StarterLoading = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="bg-black h-screen w-full z-40 flex justify-center items-center">
          <LoaderComponent />
        </div>
      ) : (
        <div className="h-screen w-full justify-center  items-center flex-col md:overflow-x-hidden  md:flex md:justify-center md:items-center gap-2  relative  ">
          <div className="absolute ">
            <ParticlesComponent />
          </div>
          <MainLayout>{children}</MainLayout>
          <Navbar />
        </div>
      )}
    </>
  );
};

export default StarterLoading;

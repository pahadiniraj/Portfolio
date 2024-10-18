"use client";

import React, { useEffect, useState } from "react";
import ParticlesComponent from "../Particals/Particals"; // Ensure the path is correct
import MainLayout from "../RootLayout/MainLayout";
import Navbar from "../Navbar/Navbar";
import LoaderComponent from "../Loader/LoaderComponent";

const StarterLoading = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading period of 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <>
      {loading ? (
        <div className="bg-black h-screen w-full z-40 flex justify-center items-center">
          <LoaderComponent />
        </div>
      ) : (
        <div className="h-screen w-full flex flex-col justify-center items-center md:overflow-x-hidden relative">
          <MainLayout>{children}</MainLayout>
          <Navbar />
        </div>
      )}
    </>
  );
};

export default StarterLoading;

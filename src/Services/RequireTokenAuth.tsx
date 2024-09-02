"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    console.log("access token", token);

    if (!token) {
      toast.error("Access not granted. Please login to get access.");
      router.push("/login");
    }
  }, [router]);

  return <>{children}</>;
};

export default PrivateRoute;

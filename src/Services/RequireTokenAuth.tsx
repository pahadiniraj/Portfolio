"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { selectAuth } from "@/Components/Redux/Slice/authSlice";
import { toast } from "react-toastify";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { accessToken } = useSelector(selectAuth);
  const router = useRouter();
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    if (initialLoad) {
      if (!accessToken) {
        toast.error("Access not granted. Please login to get access.");
        router.push("/login");
      }
      setInitialLoad(false);
    }
  }, [accessToken, router, initialLoad]);

  if (!accessToken && !initialLoad) {
    // If no token, render nothing (redirect will happen)
    return null;
  }

  return <>{children}</>;
};

export default PrivateRoute;

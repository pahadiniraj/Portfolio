"use client";

import { selectCurrentToken } from "@/Components/Redux/Slice/authSlice";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";

const RequireTokenAuth = ({ children }: { children: React.ReactNode }) => {
  const token = useSelector(selectCurrentToken);
  console.log(token);
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push("/login"); // Redirect to login page if token doesn't exist
    }
  }, [token, router]);

  // Render children only if token exists
  return <>{token && children}</>;
};

export default RequireTokenAuth;

"use client";
import { useGetUserQuery } from "@/Redux/Services/user";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const AuthRedirect = () => {
  const { data, isLoading } = useGetUserQuery();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;
    if (!data) {
      router.push("/");
      return;
    }
    return router.push("/dashboard/setting");
  }, [isLoading, data]);

  return <div></div>;
};

export default AuthRedirect;

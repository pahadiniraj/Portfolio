"use client";
import { useGetUserQuery } from "@/Redux/Services/user";
import { useRouter, usePathname } from "next/navigation";
import React, { useEffect } from "react";

const AuthRedirect = () => {
  const { data, isLoading } = useGetUserQuery();
  const router = useRouter();
  const pathname = usePathname();

  const exemptRoutes = ["/about", "/contact", "/", "/portfolio", "/why-me"];

  useEffect(() => {
    const isExempt =
      exemptRoutes.includes(pathname) ||
      pathname.startsWith("/user-profile/") ||
      pathname.startsWith("/project/") ||
      (data && pathname.startsWith("/dashboard/"));

    if (isLoading || isExempt) return;
    if (!data) {
      router.push("/");
    } else {
      router.push("/dashboard/setting");
    }
  }, [isLoading, data, pathname]);

  return <div></div>;
};

export default AuthRedirect;

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
      pathname.startsWith("/project/");

    if (isLoading || isExempt) return;
    if (!data) {
      router.push("/");
      return;
    }
    router.push("/dashboard/setting");
  }, [isLoading, data, pathname]);

  return <div></div>;
};

export default AuthRedirect;

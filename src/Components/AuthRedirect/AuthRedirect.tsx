"use client";
import { useGetUserQuery } from "@/Redux/Services/user";
import { useRouter, usePathname } from "next/navigation";
import React, { useEffect } from "react";

const AuthRedirect = () => {
  const { data, isLoading } = useGetUserQuery();
  const router = useRouter();
  const pathname = usePathname();

  const exemptRoutes = [
    "/about",
    "/contact",
    "/",
    "/portfolio",
    "/why-me",
    "/term-condition",
  ];
  const loginRoutes = ["/login", "/otp", "/register"];

  useEffect(() => {
    const isExempt =
      exemptRoutes.includes(pathname) ||
      pathname.startsWith("/user-profile/") ||
      pathname.startsWith("/project/") ||
      (data && pathname.startsWith("/dashboard/"));

    if (isLoading || isExempt) return;

    if (
      data &&
      (loginRoutes.includes(pathname) ||
        pathname.startsWith("/reset-password-confirm/") ||
        pathname.startsWith("/reset-password-link"))
    ) {
      router.push("/dashboard/setting");
    } else if (
      !data &&
      !isExempt &&
      !loginRoutes.includes(pathname) &&
      !pathname.startsWith("/reset-password-confirm/") &&
      !pathname.startsWith("/reset-password-link")
    ) {
      router.push("/");
    }
  }, [isLoading, data, pathname, router]);

  return <div></div>;
};

export default AuthRedirect;

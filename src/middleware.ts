import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtDecode } from "jwt-decode"; // Make sure jwt-decode is installed

interface TokenPayload {
  role: string;
  exp: number;
}

const authPaths = [
  "/login",
  "/register",
  "/otp",
  "/reset-password-link",
  "/verify-email",
];

export async function middleware(request: NextRequest) {
  try {
    const isVerified = request.cookies.get("isVerified")?.value;
    const accessToken = request.cookies.get("accessToken")?.value;
    const path = request.nextUrl.pathname;

    if (isVerified && accessToken) {
      if (authPaths.includes(path)) {
        return NextResponse.redirect(
          new URL("/dashboard/profile", request.url)
        );
      }
    }

    if (!isVerified && !accessToken && !authPaths.includes(path)) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    const decode: TokenPayload = jwtDecode(accessToken as string);
    const userRole = decode.role;

    if (userRole === "admin") {
      return NextResponse.next();
    }

    if (userRole === "user") {
      const pathname = request.nextUrl.pathname;
      const searchParams = request.nextUrl.search;

      const userAllowedRoutes = [
        "/dashboard/profile",
        "/dashboard/setting",
        "/dashboard/change-password",
        "/dashboard/delete-account",
        "/dashboard/blog",
      ];

      if (!userAllowedRoutes.some((route) => pathname.startsWith(route))) {
        return NextResponse.redirect(
          new URL(`/dashboard/setting${searchParams}`, request.url)
        );
      }

      return NextResponse.next();
    }

    return NextResponse.redirect(new URL("/login", request.url));
  } catch (error) {}
}
export const config = {
  matcher: [
    "/dashboard/:path*",
    "/login",
    "/register",
    "/otp",
    "/reset-password-confirm/:id/:token",
    "/reset-password-link",
    "/verify-email",
  ],
};

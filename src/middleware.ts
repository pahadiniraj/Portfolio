import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtDecode } from "jwt-decode"; // Make sure jwt-decode is installed

interface TokenPayload {
  role: string;
  exp: number;
}

export async function middleware(request: NextRequest) {
  try {
    const isVerified = request.cookies.get("isVerified")?.value;
    console.log("isVerified:", isVerified);

    const accessToken = request.cookies.get("accessToken")?.value;
    if (!isVerified && !accessToken) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    const decode: TokenPayload = jwtDecode(accessToken as string);

    const userRole = decode.role;
    console.log("user role", userRole);

    // Admin can access any route
    if (userRole === "admin") {
      return NextResponse.next();
    }

    // Check user-specific access rules
    if (userRole === "user") {
      const pathname = request.nextUrl.pathname;
      const searchParams = request.nextUrl.search; // To preserve query parameters

      // Define allowed routes for regular users
      const userAllowedRoutes = [
        "/dashboard/profile",
        "/dashboard/setting",
        "/dashboard/testimonial",
        "/dashboard/change-password",
        "/dashboard/delete-account",
        "/dashboard",
      ];

      // If the user tries to access a restricted route, redirect them
      if (!userAllowedRoutes.some((route) => pathname.startsWith(route))) {
        return NextResponse.redirect(
          new URL(`/dashboard/setting${searchParams}`, request.url)
        );
      }

      // Allow access to permitted routes
      return NextResponse.next();
    }

    // If the role is neither admin nor user, redirect to login
    return NextResponse.redirect(new URL("/login", request.url));
  } catch (error) {}
}
// Matcher config to apply the middleware to all dashboard routes
export const config = {
  matcher: ["/dashboard/:path*"],
};

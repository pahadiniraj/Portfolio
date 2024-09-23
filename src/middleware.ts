import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  try {
    // Get cookies
    const isVerified = request.cookies.get("isVerified")?.value;
    const userRole = request.cookies.get("role")?.value;

    // If the user is not verified, redirect to the login page
    if (!isVerified) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

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
  } catch (error) {
    console.error("Middleware error:", error);
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// Matcher config to apply the middleware to all dashboard routes
export const config = {
  matcher: ["/dashboard/:path*"],
};

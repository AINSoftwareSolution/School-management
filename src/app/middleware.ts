import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Define public paths
  const publicPaths = ["/admission-enquiry/login", "/admission-enquiry/register"];

  // Check if the current path is a public path
  const isPublicPath = publicPaths.includes(path);

  // Get token from local storage
  const token = window?.localStorage.getItem("token") || "";

  if (isPublicPath && token) {
    // Redirect to the path without token if trying to access a public path with a token
    return NextResponse.redirect(new URL(`${path}`, request.nextUrl));
  }

  if (!isPublicPath && !token) {
    // Redirect to login if trying to access a private path without a token
    return NextResponse.redirect(new URL("/admission-enquiry/login", request.nextUrl));
  }

  // If the path is neither public nor private, continue with the request
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/",
    "/admission-enquiry/login",
    "/admission-enquiry/register",
    "/admission-enquiry/register",
  ],
};

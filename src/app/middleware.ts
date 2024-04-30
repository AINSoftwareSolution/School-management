import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath =
    path === "/admission-enquiry/login" ||
    path === "/admission-enquiry/register";
  const token = request.cookies.get("token")?.value || "";


  if (isPublicPath && token) {
    return NextResponse.redirect(new URL(`${path}`, request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(
      new URL("/admission-enquiry/login", request.nextUrl)
    );
  }
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

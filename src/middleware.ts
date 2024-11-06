import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  console.log("🚀 ~ middleware ~ path:", path);

  const isPublicPath = config.matcher.includes(path);

  const token = request.cookies.get("winu-token")?.value || "";

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

// Configuration for matching public paths
export const config = {
  matcher: [
    "/",
    "/sign-in",
    "/sign-up",
    "/verify-email",
    "/session",
    "/logout",
  ],
};

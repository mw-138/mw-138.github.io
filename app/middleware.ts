import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export { default } from "next-auth/middleware";

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const token = await getToken({
    req: req,
    secret: process.env.NEXTAUTH_SECRET,
  });
  const publicPaths = path === "/signIn" || path === "/register";
  if (publicPaths && token) {
    return NextResponse.redirect(new URL("/register", req.nextUrl));
  }
  if (!publicPaths && !token) {
    return NextResponse.redirect(new URL("/signIn", req.nextUrl));
  }
}

export const config = {
  matcher: ["/signIn", "/register"],
};

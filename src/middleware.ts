import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
    cookieName: "next-auth.session-token-delivaryboy", // auth.ts এর session cookie name
  });

  const path = request.nextUrl.pathname;

 
  const publicPaths = ["/login", "/signin", "/api/auth"];

  
  if (!token && !publicPaths.some((p) => path.startsWith(p))) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  // ❌ deliveryboy ছাড়া কেউ access না করতে পারবে
  if (token && token.role !== "deliveryboy") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // ✅ সব ঠিক থাকলে next
  return NextResponse.next();
}

// Middleware apply হবে এই routes এ
export const config = {
  matcher: ["/dashboard-delivery/:path*"], // deliveryboy dashboard route
};

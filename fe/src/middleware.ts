import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
          const token = request.cookies.get("TOKEN:Admin");
          if (token) {
                    if (
                              request.nextUrl.pathname === "/login" ||
                              request.nextUrl.pathname === "/register"
                    ) {
                              return NextResponse.redirect(new URL("/workplace", request.url));
                    }
          } else {
                    if (request.nextUrl.pathname.startsWith("/workplace") || request.nextUrl.pathname.startsWith("/member")) {
                              return NextResponse.redirect(new URL("/login", request.url));
                    }
          }

          return NextResponse.next();
}

export const config = {
          matcher: ["/workplace/:path*", "/member/:path*", "/login", "/register"],
};

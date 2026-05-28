import { NextResponse } from "next/server";

export function middleware(request) {
  const accept = request.headers.get("accept") || "";
  if (accept.includes("text/markdown")) {
    const url = request.nextUrl.clone();
    url.pathname = "/markdown-view";
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/",
};

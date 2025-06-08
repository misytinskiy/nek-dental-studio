import { NextResponse } from "next/server";
import acceptLanguage from "accept-language";

acceptLanguage.languages(["ka", "en"]);

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};

export function middleware(req) {
  const { pathname } = req.nextUrl;

  const firstSegment = pathname.split("/")[1];
  if (["ka", "en"].includes(firstSegment)) return;

  const locale = acceptLanguage.get(req.headers.get("Accept-Language")) || "ka";

  return NextResponse.redirect(new URL(`/${locale}${pathname}`, req.url));
}

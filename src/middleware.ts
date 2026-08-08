import { NextResponse, type NextRequest } from "next/server";
import { locales, defaultLocale, isLocale, LOCALE_COOKIE } from "@/i18n/config";

function pickLocale(request: NextRequest): string {
    const fromCookie = request.cookies.get(LOCALE_COOKIE)?.value;

    if (fromCookie && isLocale(fromCookie)) {
        return fromCookie;
    }

    const header = request.headers.get("accept-language") ?? "";

    const wanted = header
        .split(",")
        .map((part) => part.split(";")[0].trim().toLowerCase())
        .filter(Boolean);

    for (const item of wanted) {
        const base = item.split("-")[0];
        const match = locales.find(
            (locale) => locale === item || locale === base
        );
        if (match) return match;
    }

    return defaultLocale;
}

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if (
        pathname.startsWith("/_next") ||
        pathname.startsWith("/api") ||
        pathname.includes(".")
    ) {
        return NextResponse.next();
    }

    const hasLocale = locales.some(
        (locale) =>
            pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
    );

    if (hasLocale) {
        return NextResponse.next();
    }

    const locale = pickLocale(request);
    const url = request.nextUrl.clone();

    url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;

    return NextResponse.rewrite(url);
}
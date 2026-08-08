export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
    en: "EN",
    ar: "AR",
};

export function isLocale(value: string): value is Locale {
    return (locales as readonly string[]).includes(value);
}

export function getDirection(locale: Locale): "rtl" | "ltr" {
    return locale === "ar" ? "rtl" : "ltr";
}

export const LOCALE_COOKIE = "NEXT_LOCALE";

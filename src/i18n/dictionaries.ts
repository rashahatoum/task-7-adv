import { lang } from "next/root-params";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "./config";

const dictionaries = {
    en: () => import("./locales/en.json").then((m) => m.default),
    ar: () => import("./locales/ar.json").then((m) => m.default),
};

export type Dictionary = Awaited<ReturnType<typeof dictionaries.en>>;

export async function getLocale(): Promise<Locale> {
    const value = await lang();

    if (!value || !isLocale(value)) {
        notFound();
    }

    return value;
}

export async function getDictionary(): Promise<Dictionary> {
    const locale = await getLocale();
    return dictionaries[locale]() as Promise<Dictionary>;
}
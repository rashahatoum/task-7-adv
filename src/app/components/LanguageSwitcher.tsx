"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { locales, localeNames, defaultLocale, isLocale, LOCALE_COOKIE } from "@/i18n/config";

export default function LanguageSwitcher({ className }: { className?: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const router = useRouter();
    const pathname = usePathname();

    const segment = pathname.split("/")[1] ?? "";
    const currentLang = isLocale(segment) ? segment : defaultLocale;

    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;

            if (!containerRef.current) return;

            if (!containerRef.current.contains(target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    const changeLanguage = (nextLang: string) => {
        setIsOpen(false);
        if (nextLang === currentLang) return;
        document.cookie = `${LOCALE_COOKIE}=${nextLang}; path=/; max-age=31536000; SameSite=Lax`;

        const segments = pathname.split("/");
        segments[1] = nextLang;

        const query = window.location.search;
        const newPath = segments.join("/") + query;

        router.push(newPath);
        router.refresh();
    };

    return (
        <div ref={containerRef} className={`relative z-50 ${className ?? ""}`}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                className="flex items-center justify-center w-59 py-10"
            >
                {localeNames[currentLang]}
                <span className="ms-2">
                    <ChevronDown />
                </span>
            </button>

            {isOpen && (
                <ul
                    role="listbox"
                    className="absolute mt-2 w-full bg-[#FFFFFF33]
                    border border-main-orange md:text-white
                    rounded-lg
                    overflow-hidden
                    z-10"
                >
                    {locales.map((locale) => (
                        <li
                            key={locale}
                            role="option"
                            aria-selected={locale === currentLang}
                            onClick={() => changeLanguage(locale)}
                            className="px-4 py-2 cursor-pointer hover:bg-main-orange hover:text-white"
                        >
                            {localeNames[locale]}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

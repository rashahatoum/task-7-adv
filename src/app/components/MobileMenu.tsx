"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries";

interface MobileMenuProps {
    logo: string;
    lang: string;
    dict: Dictionary["nav"];
}

const MobileMenu = ({ logo, lang, dict }: MobileMenuProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                aria-label={dict.openMenu}
                className="xl:hidden"
            >
                <Menu size={28} />
            </button>

            <div className={`
            fixed inset-0 z-10
            transition-opacity duration-300
            ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={() => setIsOpen(false)}
            />

            <div
                className={`
        fixed top-0 inset-e-0 h-full w-full bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('/assets/imgs/hero-bg.png')] z-10
        flex flex-col items-center justify-center gap-20
        text-white text-2xl
        transition-transform duration-300
        ${isOpen ? "translate-x-0" : "translate-x-full rtl:-translate-x-full"}`}
            >
                <button
                    onClick={() => setIsOpen(false)}
                    aria-label={dict.closeMenu}
                    className="absolute top-30 inset-e-20"
                >
                    <X size={32} />
                </button>

                <Image src={logo} alt="Logo" width={103} height={100} />

                <ul className="flex flex-col gap-20 items-center font-semibold mt-30">
                    {dict.items.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={`/${lang}${item.href === "/" ? "" : item.href}`}
                                onClick={() => setIsOpen(false)}
                                className="relative group focus:outline-none focus-visible:outline-none"
                            >
                                {item.label}
                                <span className="absolute inset-e-0 bottom-0 h-2 w-0 bg-main-orange
                                transition-all duration-300 group-hover:w-full" />
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="flex flex-col gap-20 items-center font-semibold text-white">
                    <Link href={`/${lang}/login`} className="py-10 px-12">
                        {dict.login}
                    </Link>
                    <Link
                        href={`/${lang}/sign-up`}
                        className="bg-main-orange text-color-main-text px-24 py-10 rounded-[50px]"
                    >
                        {dict.signUp}
                    </Link>
                    <LanguageSwitcher className="text-white" />
                </div>
            </div>
        </>
    );
};

export default MobileMenu;

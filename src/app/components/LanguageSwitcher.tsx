'use client';

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

export default function LanguageSwitcher({className}: {className?: string}) {
    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();
    const pathname = usePathname();

    const currentLang = pathname.split('/')[1] || "en";

    const changeLanguage = (lang: string) => {
        const segments = pathname.split('/');
        segments[1] = lang;
        const newPath = segments.join('/');
        router.push(newPath);
        setIsOpen(false);
    };

    return (
        <div className={`relative ${className}`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center w-59px py-10">
                {currentLang.toUpperCase()} <span className="ml-2"><ChevronDown /></span>
            </button>
            {isOpen && (
                <ul className=" absolute mt-2 w-full bg-[#FFFFFF33] 
                border border-main-orange md:text-white
                rounded-lg
                overflow-hidden
                z-10">
                    <li
                        onClick={() => changeLanguage("en")}
                        className="
                        px-4 py-2
                        cursor-pointer hover:bg-main-orange hover:text-white ">EN</li>
                    <li
                        onClick={() => changeLanguage("ar")}
                        className="
                        px-4 py-2
                        cursor-pointer hover:bg-main-orange hover:text-white">AR</li>
                </ul>
            )}
        </div>
    );
}
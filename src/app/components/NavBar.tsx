import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";
import { getDictionary, getLocale } from "@/i18n/dictionaries";

interface NavBarProps {
    logo: string;
}

const NavBar = async ({ logo }: NavBarProps) => {
    const dict = await getDictionary();
    const lang = await getLocale();

    return (
        <nav className="
        w-full flex
        gap-40 items-center justify-between
        py-20 px-[13vw]
        bg-[#FFFFFF33]
        fixed top-0 z-10
        text-xl
        text-white">
            <Image
                src={logo}
                alt="Logo"
                width={133}
                height={130}
                className="w-65 h-65 md:w-133 md:h-130"
            />

            <ul className="gap-40 items-center hidden xl:flex">
                {dict.nav.items.map((item) => (
                    <li key={item.href}>
                        <Link
                            href={`/${lang}${item.href === "/" ? "" : item.href}`}
                            className="relative group focus:outline-none focus-visible:outline-none"
                        >
                            {item.label}
                            <span className="absolute inset-e-0 bottom-0 h-2 w-0 bg-main-orange
                            transition-all duration-300 group-hover:w-full" />
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="hidden xl:flex gap-10">
                <LanguageSwitcher />
                <Link href={`/${lang}/login`} className="py-10 px-12">
                    {dict.nav.login}
                </Link>
                <Link
                    href={`/${lang}/sign-up`}
                    className="bg-main-orange text-color-main-text px-24 py-10 rounded-[50px]"
                >
                    {dict.nav.signUp}
                </Link>
            </div>

            <MobileMenu logo={logo} lang={lang} dict={dict.nav} />
        </nav>
    );
};

export default NavBar;

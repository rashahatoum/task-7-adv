import Link from "next/link";
import { Settings } from "lucide-react";
import { getDictionary, getLocale } from "@/i18n/dictionaries";

export default async function NotFound() {
    const dict = await getDictionary();
    const lang = await getLocale();

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center px-4 text-center">

            <div className="relative mb-8">
                <div className="absolute inset-0 bg-main-orange/20 rounded-full blur-xl animate-pulse"></div>

                <div className="relative bg-white w-200 h-200 rounded-full shadow-[0_4px_25px_rgba(0,0,0,0.06)] border border-gray-50 flex items-center justify-center">
                    <Settings className="w-200 h-200 text-main-orange animate-[spin_6s_linear_infinite]" />
                </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-main-text mb-4">
                {dict.notFound.title}
            </h1>
            <h2 className="text-lg md:text-xl font-bold text-gray-400 mb-6 uppercase tracking-[0.2em]">
                {dict.notFound.subtitle}
            </h2>
            <p className="text-base md:text-lg text-gray-500 max-w-500 mx-auto mb-10 leading-relaxed">
                {dict.notFound.description}
            </p>
            <Link
                href={`/${lang}`}
                className="px-8 py-3 md:px-10 md:py-4 bg-main-orange text-white rounded-full font-bold hover:shadow-lg hover:shadow-main-orange/30 hover:-translate-y-1 transition-all duration-300"
            >
                {dict.notFound.backHome}
            </Link>

        </div>
    );
}

import type { Metadata } from "next";
import { Open_Sans, Cairo } from "next/font/google";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { locales, isLocale, getDirection } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import "../globals.css";

const podcast = localFont({
    src: "../../../public/assets/fonts/Podcast.ttf",
    variable: "--font-podcast",
    weight: "400",
});

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"],
});

const cairo = Cairo({
    variable: "--font-cairo",
    subsets: ["arabic", "latin"],
});


export function generateStaticParams() {
    return locales.map((lang) => ({ lang }));
}

export async function generateMetadata(): Promise<Metadata> {
    const dict = await getDictionary();

    return {
        title: dict.meta.title,
        description: dict.meta.description,
    };
}

export default async function RootLayout({
    children,
    authModal,
    params,
}: Readonly<{
    children: React.ReactNode;
    authModal: React.ReactNode;
    params: Promise<{ lang: string }>;
}>) {
    const { lang } = await params;

    if (!isLocale(lang)) {
        notFound();
    }

    return (
        <html
            lang={lang}
            dir={getDirection(lang)}
            className={`${openSans.variable} ${podcast.variable} ${cairo.variable}`}
        >
            <body className="h-full antialiased font-open-sans">
                {children}
                {authModal}
            </body>
        </html>
    );
}
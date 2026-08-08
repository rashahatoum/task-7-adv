
import { Open_Sans } from "next/font/google";
import localFont from "next/font/local";
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

export default async function LangLayout({
    children,
    authModal,
    params,
}: Readonly<{
    children: React.ReactNode;
    authModal: React.ReactNode;
    params: Promise<{ lang: string }>;
}>) {
    const { lang } = await params;

    return (
        <html lang={lang} dir={lang === "ara" ? "rtl" : "ltr"}>
            <body className={`${openSans.variable} ${podcast.variable} h-full antialiased font-open-sans`}>
                {children}
                {authModal}
            </body>
        </html>
    );
}
import { ReactNode } from "react";
import Footer, { FooterList } from "@/app/components/Footer";
import Facebook from "@/app/components/icons/Facebook";
import Instagram from "@/app/components/icons/Instagram";
import Twitter from "@/app/components/icons/Twitter";
import NavBar from "@/app/components/NavBar";
import { Mail, MapPin, Phone } from "lucide-react";
import { getDictionary } from "@/i18n/dictionaries";

type RawFooterItem = { label?: string; icon?: string };
type RawFooterList = { title: string; isSocial?: boolean; items: RawFooterItem[] };

const footerIcons: Record<string, ReactNode> = {
    location: <MapPin absoluteStrokeWidth />,
    phone: <Phone absoluteStrokeWidth />,
    mail: <Mail absoluteStrokeWidth />,
    twitter: <Twitter className="w-50 h-50 text-main-orange" />,
    facebook: <Facebook className="w-45 h-45 text-main-orange" />,
    instagram: <Instagram className="w-50 h-50 text-main-orange" />,
};

export default async function WebsiteLayout({
    children,
}: Readonly<{ children: ReactNode }>) {
    const dict = await getDictionary();

    const footerLists: FooterList[] = (dict.footer.lists as RawFooterList[]).map(
        (list) => ({
            title: list.title,
            isSocial: list.isSocial ?? false,
            items: list.items.map((item) => ({
                label: item.label,
                icon: item.icon ? footerIcons[item.icon] : undefined,
            })),
        })
    );

    return (
        <>
            <NavBar logo="/assets/imgs/logo.png" />
            {children}
            <Footer
                logo="/assets/imgs/logo.png"
                lists={footerLists}
                copyright={dict.footer.copyright}
            />
        </>
    );
}

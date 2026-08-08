import Footer, { FooterList } from "@/app/components/Footer";
import Facebook from "@/app/components/icons/Facebook";
import Instagram from "@/app/components/icons/Instagram";
import Twitter from "@/app/components/icons/Twitter";
import NavBar from "@/app/components/NavBar";
import { Mail, MapPin, Phone } from "lucide-react";

const footerLists: FooterList[] = [
    {
        title: "Services",
        items: [
            { label: "Bike and Rickshaw rental" },
            { label: "Guided Tours of Lucca" },
            { label: "Guided Bike Tour of Lucca" },
            { label: "Trip In The Tuscan Hills" },
            { label: "Transportation With Luxury Cars" },
            { label: "Wine Tours By Bus With Guide" },
        ]    
    },
    {
        title: "Home",
        items: [
            { label: "Home" },
            { label: "About Us" },
            { label: "Tour Packages" },
            { label: "Services" },
        ]
    },
        {
        title: "Help",
        items: [
            { label: "Terms of Use" },
            { label: "Provicy Policy" },
        ]
    },
    {
        title: "Contacts",
        items: [
            { label: "Piazza Napoleone, Lucca, Tuscany", icon: <MapPin absoluteStrokeWidth /> },
            { label: "+39 346 368 5708", icon: <Phone absoluteStrokeWidth /> },
            { label: "italiainlimo@gmail.com", icon: <Mail absoluteStrokeWidth/> },
        ]
    },
    {
        title: "Social Media",
        isSocial: true,
        items: [
            { icon: <Twitter className="w-50 h-50 text-main-orange"/> },
            { icon: <Facebook className="w-45 h-45 text-main-orange"/> },
            { icon: <Instagram className="w-50 h-50 text-main-orange"/> },
        ]
    }
];

export default function WebsiteLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <NavBar logo="/assets/imgs/logo.png" items={["Home", "About Us", "Tour Packages", "Contact Us"]} lang="en" />
            {children}
            <Footer
                logo="/assets/imgs/logo.png"
                lists={footerLists}
                copyright="Copyright © 2022. All rights reserved."
            />
        </>
    );
}
import { ReactNode } from "react";
import Image from "next/image";

export interface ListItem {
    label?: string;       
    icon?: ReactNode;
}

export interface FooterList {
    title: string;
    items?: ListItem[];   
    isSocial?: boolean;   
}

export interface FooterProps {
    logo: string;      
    lists: FooterList[];  
    copyright: string;  
    className?: string;
}

const Footer = ({ logo, lists, copyright, className = "" }: FooterProps) => {
    return (
        <footer className={`w-full bg-main-text text-white ${className} px-[13vw] mt-120 py-40`}>
            <div className="container mx-auto">
                <div className="mb-33">
                    <Image
                        src={logo}
                        alt="Logo"
                        width={140}
                        height={60}
                        className="object-contain lg:mx-0 mx-auto"
                    />
                </div>
                
                <div className="w-full mb-10" />

                <div className="flex justify-between lg:items-start lg:flex-row flex-col items-center gap-20 mb-33 py-33 border-t border-b border-white ">
                    {lists.map((list, index) => (
                        <div key={index} className="flex flex-col gap-20 lg:items-start items-center">
                            <h3 className="text-xl font-extrabold">{list.title}</h3>

                            {list.items && (
                                <ul className={list.isSocial ? "flex items-center gap-3" : "flex flex-col lg:items-start items-center gap-10"}>
                                    {list.items.map((item, itemIdx) => {
                                        
                                        if (list.isSocial) {
                                            return (
                                                <li key={itemIdx}>
                                                        {item.icon}
                                                </li>
                                            );
                                        }

                                        return (
                                            <li key={itemIdx} className="flex items-start gap-10 text-sm font-medium">
                                                {item.icon && (
                                                    <span className="mt-0.5 shrink-0 text-main-orange">
                                                        {item.icon}
                                                    </span>
                                                )}
                                                <p>{item.label}</p>
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
                
                <div className="w-full m-auto" />
                <p className="text-center">
                    {copyright}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
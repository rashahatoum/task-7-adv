"use client";

import { Globe, Users } from "lucide-react";

interface SearchTabsProps {
    activeTab: "public" | "private";
    setActiveTab: (tab: "public" | "private") => void;
}

const SearchTabs = ({ activeTab, setActiveTab }: SearchTabsProps) => {
    return (
        <div className="flex items-start">
            <button
                type="button"
                onClick={() => setActiveTab("public")}
                className={`flex items-center gap-10 p-16 rounded-tl-xl font-semibold lg:text-lg text-base transition-all duration-200 
                    ${activeTab === "public"
                        ? "bg-white text-main-orange shadow-sm"
                        : "bg-[#FFFFFF66] text-white hover:text-main-orange"
                    }`}
            >
                <Globe className="w-24 h-24" />
                <span>Public Tours</span>
            </button>
            <button
                type="button"
                onClick={() => setActiveTab("private")}
                className={`flex items-center gap-10 p-16 rounded-tr-xl font-semibold lg:text-lg text-base transition-all duration-200 
                    ${activeTab === "private"
                        ? "bg-white text-main-orange shadow-sm"
                        : "bg-[#FFFFFF66] text-white hover:text-main-orange"
                    }`}
            >
                <Users className="w-24 h-24" />
                <span>Private Tours</span>
            </button>
        </div>
    );
}
export default SearchTabs;
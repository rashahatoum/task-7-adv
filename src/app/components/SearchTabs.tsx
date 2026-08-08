"use client";

import { Globe, Users } from "lucide-react";

interface SearchTabsProps {
    activeTab: "public" | "private";
    setActiveTab: (tab: "public" | "private") => void;
    publicLabel: string;
    privateLabel: string;
}

const SearchTabs = ({
    activeTab,
    setActiveTab,
    publicLabel,
    privateLabel,
}: SearchTabsProps) => {
    return (
        <div className="flex items-start">
            <button
                type="button"
                onClick={() => setActiveTab("public")}
                className={`flex items-center gap-10 p-16 rounded-ss-xl font-semibold lg:text-lg text-base transition-all duration-200
                    ${activeTab === "public"
                        ? "bg-white text-main-orange shadow-sm"
                        : "bg-[#FFFFFF66] text-white hover:text-main-orange"
                    }`}
            >
                <Globe className="w-24 h-24" />
                <span>{publicLabel}</span>
            </button>

            <button
                type="button"
                onClick={() => setActiveTab("private")}
                className={`flex items-center gap-10 p-16 rounded-se-xl font-semibold lg:text-lg text-base transition-all duration-200
                    ${activeTab === "private"
                        ? "bg-white text-main-orange shadow-sm"
                        : "bg-[#FFFFFF66] text-white hover:text-main-orange"
                    }`}
            >
                <Users className="w-24 h-24" />
                <span>{privateLabel}</span>
            </button>
        </div>
    );
};

export default SearchTabs;

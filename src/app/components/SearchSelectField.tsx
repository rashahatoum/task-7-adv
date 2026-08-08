"use client";

import { ChevronDown } from "lucide-react";

interface Option {
    label: string;
    value: string;
}

interface SearchSelectFieldProps {
    icon?: React.ReactNode;
    label: string;
    placeholder?: string;
    type?: "select" | "date" | "time";
    options?: Option[];
    value: string;
    onChange: (value: string) => void;
    showBorder?: boolean;
    className?: string;
    labelStyle?:string;
}

export default function SearchSelectField({
    icon,
    label,
    placeholder = "",
    type = "select",
    options = [],
    value,
    onChange,
    showBorder = true,
    className,
    labelStyle
}: SearchSelectFieldProps) {
    return (
        <div
            className={`relative flex items-start gap-7 px-16 my-16 w-full transition-colors flex-wrap
                ${showBorder ? "xl:border-r xl:border-main-text" : ""} ${className}`}
        >
            <div className="text-main-text">{icon}</div>
            <div className="flex flex-col grow text-left overflow-hidden">
                <label className={`{lg:text-lg text-base text-main-text pb-6 ${labelStyle}}`}>
                    {label}
                </label>
                {type === "date" ? (
                    <input
                        type="date"
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        className="lg:text-lg text-base text-[#333333c2] bg-transparent outline-none cursor-pointer w-full"
                    />
                ) : type === "time" ? (
                    <input
                        type="time"
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        className="lg:text-lg text-base text-[#333333c2] bg-transparent outline-none cursor-pointer w-full"
                    />
                ) : (
                    <div className="relative flex items-center w-full">
                        <select
                            value={value}
                            onChange={(e) => onChange(e.target.value)}
                            className="text-base text-[#333333c2] bg-transparent outline-none cursor-pointer w-full appearance-none pr-6"
                        >
                            {<option value="" disabled hidden>
                                {placeholder}
                            </option>}
                            {options.map((option) => (
                                <option key={option.value} value={option.value} className="text-xs">
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <ChevronDown className="w-20 h-20 text-main-text absolute right-0 pointer-events-none" />
                    </div>
                )}
            </div>
        </div>
    );
}
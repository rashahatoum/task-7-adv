"use client";

import React, { useState } from "react";
import { Clock, CarFront, CalendarDays } from "lucide-react";
import Image from "next/image";
import SearchTabs from "./SearchTabs";
import SearchSelectField from "./SearchSelectField";
import SearchButton from "./SearchButton";
import type { Dictionary } from "@/i18n/dictionaries";

interface FormDataState {
    people: string;
    date: string;
    time: string;
    tour: string;
    transportation: string;
}

interface TourSearchFormProps {
    dict: Dictionary["search"];
    searchLabel: string;
}

export default function TourSearchForm({ dict, searchLabel }: TourSearchFormProps) {
    const [activeTab, setActiveTab] = useState<"public" | "private">("public");

    const [formData, setFormData] = useState<FormDataState>({
        people: "",
        date: "",
        time: "",
        tour: "",
        transportation: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const searchPayload = { type: activeTab, ...formData };
        console.log("تم جمع بيانات البحث بنجاح:", searchPayload);
    };

    return (
        <div className="w-full max-w-[75vw] mx-auto bg-[#FFFFFF33] p-20 rounded-xl mb-30">
            <SearchTabs
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                publicLabel={dict.tabs.public}
                privateLabel={dict.tabs.private}
            />

            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl rounded-ss-none p-12 xl:p-12 flex flex-col xl:flex-row items-center justify-between gap-3 xl:gap-2"
            >
                <SearchSelectField
                    icon={<Image src="/assets/icons/people-icon.svg" alt="" width={24} height={24} />}
                    label={dict.people.label}
                    placeholder={dict.people.placeholder}
                    type="select"
                    options={dict.people.options}
                    value={formData.people}
                    onChange={(val) => setFormData({ ...formData, people: val })}
                    labelStyle=""
                />

                <SearchSelectField
                    icon={<CalendarDays className="w-24 h-24 text-main-text" />}
                    label={dict.date.label}
                    type="date"
                    value={formData.date}
                    onChange={(val) => setFormData({ ...formData, date: val })}
                    labelStyle=""
                />

                <SearchSelectField
                    icon={<Clock className="w-24 h-24 text-main-text" />}
                    label={dict.time.label}
                    type="time"
                    value={formData.time}
                    onChange={(val) => setFormData({ ...formData, time: val })}
                    labelStyle=""
                />

                <SearchSelectField
                    icon={<Image src="/assets/icons/tour-icon.svg" alt="" width={24} height={24} />}
                    label={dict.tour.label}
                    placeholder={dict.tour.placeholder}
                    type="select"
                    options={dict.tour.options}
                    value={formData.tour}
                    onChange={(val) => setFormData({ ...formData, tour: val })}
                    labelStyle=""
                />

                <SearchSelectField
                    icon={<CarFront className="w-24 h-24 text-main-text" />}
                    label={dict.transportation.label}
                    placeholder={dict.transportation.placeholder}
                    type="select"
                    options={dict.transportation.options}
                    value={formData.transportation}
                    onChange={(val) => setFormData({ ...formData, transportation: val })}
                    showBorder={false}
                    labelStyle=""
                />

                <SearchButton label={searchLabel} />
            </form>
        </div>
    );
}

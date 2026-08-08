"use client";

import React, { useState } from "react";
import {Clock, CarFront, CalendarDays} from "lucide-react";
import SearchTabs from "./SearchTabs";
import SearchSelectField from "./SearchSelectField";
import SearchButton from "./SearchButton";
import Image from "next/image";

interface FormDataState {
    people: string;
    date: string;
    time: string;
    tour: string;
    transportation: string;
}

export default function TourSearchForm() {
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
        const searchPayload = {
            type: activeTab,
            ...formData,
        };

        console.log("تم جمع بيانات البحث بنجاح:", searchPayload);
    };

    return (
        <div className="w-full max-w-[75vw] mx-auto bg-[#FFFFFF33] p-20 rounded-xl mb-30">
            <SearchTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl rounded-tl-none p-12 xl:p-12 flex flex-col xl:flex-row items-center justify-between gap-3 xl:gap-2"
            >
                <SearchSelectField
                    icon={<Image
                        src="/assets/icons/people-icon.svg"
                        alt="Tour Icon"
                        width={24}
                        height={24} />}
                    label="Number of people"
                    placeholder="Choose number"
                    type="select"
                    options={[
                        { label: "1 Person", value: "1" },
                        { label: "2 People", value: "2" },
                        { label: "3-5 People", value: "3-5" },
                        { label: "6+ People", value: "6+" },
                    ]}
                    value={formData.people}
                    onChange={(val) => setFormData({ ...formData, people: val })}
                />

                <SearchSelectField
                    icon={<CalendarDays className="w-24 h-24 text-main-text" />}
                    label="Date"
                    type="date"
                    value={formData.date}
                    onChange={(val) => setFormData({ ...formData, date: val })}
                />
                <SearchSelectField
                    icon={<Clock className="w-24 h-24 text-main-text" />}
                    label="Time"
                    type="time"
                    value={formData.time}
                    onChange={(val) => setFormData({ ...formData, time: val })}
                />
                <SearchSelectField
                    icon={<Image
                        src="/assets/icons/tour-icon.svg"
                        alt="Tour Icon"
                        width={24}
                        height={24} />}
                    label="Tour"
                    placeholder="Select Tour"
                    type="select"
                    options={[
                        { label: "Lucca Bike Tour", value: "lucca-bike" },
                        { label: "Wine Tasting Tour", value: "wine-tasting" },
                        { label: "Cinque Terre Tour", value: "cinque-terre" },
                    ]}
                    value={formData.tour}
                    onChange={(val) => setFormData({ ...formData, tour: val })}
                />

                <SearchSelectField
                    icon={<CarFront className="w-24 h-24 text-main-text" />}
                    label="Transportation"
                    placeholder="Select Transportation"
                    type="select"
                    options={[
                        { label: "Bus", value: "bus" },
                        { label: "Private Van", value: "van" },
                        { label: "car", value: "car" },
                    ]}
                    value={formData.transportation}
                    onChange={(val) => setFormData({ ...formData, transportation: val })}
                    showBorder={false}
                />

                <SearchButton />
            </form>
        </div>
    );
}
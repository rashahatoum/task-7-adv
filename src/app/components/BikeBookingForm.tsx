"use client";

import { useState } from "react";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import { ChevronDown } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";

interface BikeBookingFormProps {
    dict: Dictionary["bookingForm"];
}

export default function BikeBookingForm({ dict }: BikeBookingFormProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        date: "",
        time: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("[BOOKING FORM SUBMITTED]:", formData);
        setFormData({
            name: "",
            email: "",
            phone: "",
            serviceType: "",
            date: "",
            time: "",
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-734 bg-[#FFFFFF4D] rounded-3xl py-30 px-34 shrink-0 flex-1"
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-30 flex-1">
                <CustomInput
                    label={dict.name.label}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={dict.name.placeholder}
                    required
                />

                <CustomInput
                    label={dict.email.label}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={dict.email.placeholder}
                    required
                />

                <CustomInput
                    label={dict.phone.label}
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={dict.phone.placeholder}
                    required
                />

                <div className="flex flex-col justify-center gap-2 text-start">
                    <label className="text-lg font-semibold text-gray-800">
                        {dict.service.label}
                    </label>
                    <div className="relative">
                        <select
                            name="serviceType"
                            value={formData.serviceType}
                            onChange={handleChange}
                            className="w-full px-16 py-14 text-gray-500 text-base rounded-lg border border-[#33333333] focus:border-main-orange focus:outline-none shadow-sm appearance-none cursor-pointer pe-10"
                            required
                        >
                            <option value="" disabled hidden>
                                {dict.service.placeholder}
                            </option>
                            {dict.service.options.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <ChevronDown
                            className="absolute inset-e-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                            size={18}
                        />
                    </div>
                </div>

                <CustomInput
                    label={dict.date.label}
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                />

                <CustomInput
                    label={dict.time.label}
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="flex justify-center mt-30">
                <CustomButton
                    type="submit"
                    className="w-full max-w-212 px-40 py-12 bg-main-orange text-white rounded-full transition-colors shadow-md"
                >
                    {dict.submit}
                </CustomButton>
            </div>
        </form>
    );
}

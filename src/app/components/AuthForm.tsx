"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import type { Dictionary } from "@/i18n/dictionaries";

interface AuthFormProps {
    type: "login" | "signup";
    dict: Dictionary["auth"];
    lang: string;
    onClose?: () => void;
    onToggleMode?: () => void;
}

export default function AuthForm({
    type,
    dict,
    lang,
    onClose,
    onToggleMode,
}: AuthFormProps) {
    const isSignUp = type === "signup";

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        termsAccepted: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type: inputType, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: inputType === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(`[${isSignUp ? "SIGN UP" : "LOGIN"} SUBMITTED]:`, formData);
        setFormData({ name: "", email: "", password: "", termsAccepted: false });
    };

    return (
        <div className="bg-white lg:py-40 lg:px-60 py-20 px-15 mx-[10vw] rounded-3xl w-full max-w-md relative shadow-xl">
            <div className="flex items-center justify-between pb-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-start">
                    {isSignUp ? dict.signupTitle : dict.loginTitle}
                </h2>

                {onClose && (
                    <button
                        onClick={onClose}
                        aria-label={dict.close}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <X size={24} />
                    </button>
                )}
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-20">
                {isSignUp && (
                    <CustomInput
                        label={dict.name.label}
                        value={formData.name}
                        name="name"
                        onChange={handleChange}
                        placeholder={dict.name.placeholder}
                        required
                    />
                )}

                <CustomInput
                    label={dict.email.label}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={dict.email.placeholder}
                    required
                />

                <div>
                    <CustomInput
                        label={dict.password.label}
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder={dict.password.placeholder}
                        required
                    />

                    {!isSignUp && (
                        <div className="text-end mt-20">
                            <a href="#" className="text-xs text-gray-500 hover:underline">
                                {dict.forgotPassword}
                            </a>
                        </div>
                    )}
                </div>

                {isSignUp && (
                    <div className="flex items-center gap-2 text-xs text-gray-600 mt-1">
                        <input
                            type="checkbox"
                            id="terms"
                            name="termsAccepted"
                            checked={formData.termsAccepted}
                            onChange={handleChange}
                            required
                            className="rounded border-gray-300 accent-main-orange"
                        />
                        <label htmlFor="terms">
                            {dict.termsPrefix}{" "}
                            <a href={`/${lang}/terms`} className="text-main-orange underline">
                                {dict.terms}
                            </a>{" "}
                            {dict.and}{" "}
                            <a href={`/${lang}/privacy`} className="text-main-orange underline">
                                {dict.privacy}
                            </a>
                        </label>
                    </div>
                )}

                <CustomButton
                    type="submit"
                    className="w-full bg-main-orange text-white hover:bg-orange-600 mt-2"
                >
                    {isSignUp ? dict.signupSubmit : dict.loginSubmit}
                </CustomButton>

                <p className="w-full mx-auto text-base text-gray-400 text-center">
                    {dict.or}
                </p>

                <CustomButton
                    type="button"
                    className="flex gap-24 w-full border border-gray-400 text-gray-400 hover:bg-gray-50 text-sm font-normal"
                >
                    <Image
                        src="/assets/icons/google-icon.svg"
                        alt="Google"
                        width={20}
                        height={20}
                    />
                    {isSignUp ? dict.signupWithGoogle : dict.loginWithGoogle}
                </CustomButton>
            </form>

            <p className="text-center text-main-text mt-24">
                {isSignUp ? dict.haveAccount : dict.noAccount}{" "}
                <button
                    onClick={onToggleMode}
                    className="text-main-orange font-semibold hover:underline"
                >
                    {isSignUp ? dict.goToLogin : dict.goToSignup}
                </button>
            </p>
        </div>
    );
}

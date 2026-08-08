"use client";

import { useRouter } from "next/navigation";
import AuthForm from "./AuthForm";
import type { Dictionary } from "@/i18n/dictionaries";

interface AuthModalProps {
    type: "login" | "signup";
    dict: Dictionary["auth"];
    lang: string;
}

export default function AuthModal({ type, dict, lang }: AuthModalProps) {
    const router = useRouter();

    const handleClose = () => {
        router.back();
    };

    const handleToggleMode = () => {
        const target = type === "login" ? "sign-up" : "login";
        router.replace(`/${lang}/${target}`);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <AuthForm
                type={type}
                dict={dict}
                lang={lang}
                onClose={handleClose}
                onToggleMode={handleToggleMode}
            />
        </div>
    );
}

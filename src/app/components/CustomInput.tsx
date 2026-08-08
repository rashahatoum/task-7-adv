'use client';

import { useState, InputHTMLAttributes } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

function CustomInput({ label, type = "text", ...props }: CustomInputProps) {
    const [showPassword, setShowPassword] = useState(false);
    
    const isPassword = type === "password";
    const inputType = isPassword ? (showPassword ? "text" : "password") : type;

    return (
        <div className="flex flex-col gap-10 w-full">
            <label className="text-lg font-semibold text-main-text">
                {label}
            </label>
            
            <div className="relative">
                <input
                    type={inputType}
                    className="w-full px-24 py-14 border border-[#33333333] rounded-lg outline-none focus:border-main-orange transition-colors text-base"
                    {...props}
                />
                
                {isPassword && (
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-24 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                        {showPassword ? <EyeOff size={24} /> : <Eye size={24} />}
                    </button>
                )}
            </div>
        </div>
    );
}

export default CustomInput
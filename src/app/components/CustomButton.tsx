'use client';

import { ButtonHTMLAttributes, ReactNode } from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode; 
    className?: string; 
}

function CustomButton({ 
    children, 
    className = "", 
    ...props 
}: CustomButtonProps) {
    return (
        <button

            className={`flex justify-center items-center py-10 px-24 rounded-[50px] text-base lg:text-xl font-semibold transition-all duration-300 outline-none ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}

export default CustomButton
'use client';

import { X } from 'lucide-react';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
import Image from 'next/image';
import { useState } from 'react';

interface AuthFormProps {
    type: 'login' | 'signup';
    onClose?: () => void;
    onToggleMode?: () => void;
}

export default function AuthForm({type, onClose, onToggleMode }: AuthFormProps) {
    const isSignUp = type === 'signup';

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        termsAccepted: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type: inputType, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: inputType === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(`[${isSignUp ? 'SIGN UP' : 'LOGIN'} SUBMITTED]:`, formData);
        setFormData({
        name: '',
        email: '',
        password: '',
        termsAccepted: false,
    });
    };

    return (
        <div className="bg-white py-40 px-60 rounded-3xl w-full max-w-md relative shadow-xl">
            <div className='flex items-center justify-between pb-24'>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-left">
                    {isSignUp ? 'Create Account' : 'Login'}
                </h2>
                {onClose && (
                    <button
                        onClick={onClose}
                        className=" text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <X size={24} />
                    </button>
                )}
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-20">
                {isSignUp && (
                    <CustomInput
                        label="Name and Surname"
                        value={formData.name}
                        name="name"
                        onChange={handleChange}
                        placeholder="Enter your name and surname"
                        required
                    />
                )}
                <CustomInput
                    label="Email Address"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                />

                <div>
                    <CustomInput
                        label="Password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        required
                    />
                    {!isSignUp && (
                        <div className="text-right mt-20">
                            <a href="#" className="text-xs text-gray-500 hover:underline">
                                Forgot your password?
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
                        className="rounded border-gray-300 accent-main-orange" />
                        <label htmlFor="terms">
                            I agree with <a href="#" className="text-main-orange underline">Terms</a> and <a href="#" className="text-main-orange underline">Privacy</a>
                        </label>
                    </div>
                )}
                <CustomButton
                    type="submit"
                    className="w-full bg-main-orange text-white hover:bg-orange-600 mt-2"
                >
                    {isSignUp ? 'Sign Up' : 'Sign In'}
                </CustomButton>
                <p className="w-full mx-auto text-base text-gray-400 text-center">or</p>
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
                    {isSignUp ? 'Sign Up with Google' : 'Sign In with Google'}
                </CustomButton>
            </form>
            <p className="text-center text-main-text mt-24">
                {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
                <button
                    onClick={onToggleMode}
                    className="text-main-orange font-semibold hover:underline"
                >
                    {isSignUp ? 'Log In' : 'Sign Up'}
                </button>
            </p>
        </div>
    );
}
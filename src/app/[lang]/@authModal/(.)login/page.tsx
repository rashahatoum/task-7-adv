'use client';

import AuthForm from '@/app/components/AuthForm';
import { useRouter } from 'next/navigation';


export default function LoginModal() {
    const router = useRouter();

    const handleClose = () => {
        router.back();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <AuthForm 
                type="login" 
                onClose={handleClose} 
                onToggleMode={() => router.replace('sign-up')} 
            />
        </div>
    );
}
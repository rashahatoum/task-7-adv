import { Loader2 } from 'lucide-react';

export default function Loading() {
    return (
        <div className="min-h-[60vh] w-full flex flex-col items-center justify-center px-50">
            <div className="flex flex-col items-center gap-20">

                <Loader2 className="w-100 h-100 text-main-orange animate-spin" />
                <p className="text-xl font-bold text-main-text tracking-wide animate-pulse">
                    Loading...
                </p>
            </div>
        </div>
    );
}
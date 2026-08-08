import AuthForm from "@/app/components/AuthForm";

export function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'ar' }];
}

export default function SignupPage() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-50">
            <AuthForm type="signup" />
        </main>
    );
}
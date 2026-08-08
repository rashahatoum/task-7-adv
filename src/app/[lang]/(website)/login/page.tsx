import AuthForm from "@/app/components/AuthForm";
import { getDictionary, getLocale } from "@/i18n/dictionaries";

export default async function LoginPage() {
    const dict = await getDictionary();
    const lang = await getLocale();

    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-50">
            <AuthForm type="login" dict={dict.auth} lang={lang} />
        </main>
    );
}
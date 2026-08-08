import AuthModal from "@/app/components/AuthModal";
import { getDictionary, getLocale } from "@/i18n/dictionaries";

export default async function SignupModalPage() {
    const dict = await getDictionary();
    const lang = await getLocale();

    return <AuthModal type="signup" dict={dict.auth} lang={lang} />;
}
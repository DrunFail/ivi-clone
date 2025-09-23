import { getTranslations } from "next-intl/server";
import Login from "../../../../../components/auth/pages/Login";
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations();

    return {
        title: t("auth.page.loginTitle"),
        description:t("auth.page.loginDescription")
    }
}


export default function LoginPage() {
    return (
        <Login />
    );
}

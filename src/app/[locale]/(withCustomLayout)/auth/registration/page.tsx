import type { Metadata } from 'next'
import Registration from "../../../../../components/auth/pages/Registration";
import { getTranslations } from 'next-intl/server';
export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations();

    return {
        title: t("auth.page.registrationTitle"),
        description: t("auth.page.registrationDescription")
    }
}


export default function RegistrationPage() {
    return (
        <Registration />
    );
}
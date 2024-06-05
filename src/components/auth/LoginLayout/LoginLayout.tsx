"use client"

import { Suspense } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import FormAuthPageHeader from "../components/FormAuthPageHeader/FormAuthPageHeader";
import FormContentContainer from "../components/FormContentContainer/FormContentContainer";
import ConfirmConfidential from "../components/ConfirmConfidential/ConfirmConfidential";
import RedirectLinkContainer from "../components/RedirectLinkContainer/RedirectLinkContainer";
import { Link } from "../../../navigation";
import OAuthButton from "../components/OAuthButton/OAuthButton";
import useVKAuth from "../../../hooks/auth/useVKAuth";

const AUTH = {
    login: "/auth/login",
    register: "/auth/registration"
};


export default function LoginLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const t = useTranslations();
    return (
        <>
            <div id="notLoginModal"> </div>
            <FormAuthPageHeader>
                {pathname.endsWith(AUTH.register) && t("auth.registrationTitle")}
                {pathname.endsWith(AUTH.login) && t("auth.loginTitle")}
            </FormAuthPageHeader>
            <FormContentContainer>
                {children}
                <ConfirmConfidential />
                {pathname.endsWith(AUTH.login) &&
                    <RedirectLinkContainer>
                        <span>{t("auth.noAccount")}</span>
                        <Link href={"/auth/registration"} replace>
                            {t("auth.registrationTitle")}
                        </Link>
                    </RedirectLinkContainer>}
                {pathname.endsWith(AUTH.register) &&
                    <RedirectLinkContainer>
                        <span>{t("auth.hasAccount")}</span>
                        <Link href={"/auth/login"} replace>
                            {t("auth.loginTitle")}
                        </Link>
                    </RedirectLinkContainer>
                }
                <Suspense>
                    <OAuthButton
                        variant="vk"
                        authHandler={useVKAuth} />
                </Suspense>
            </FormContentContainer>

        </>
    );
}
"use client";

import { useTranslations } from "next-intl";
import PageWrapper from "../../../../components/PageContainers/PageWrapper/PageWrapper";
import LoginLayout from "../../../../components/auth/LoginLayout/LoginLayout";
import { useRouter } from "../../../../navigation";
import BackButtonFromModal from "../../../../components/BackButtonFromModal/BackButtonFromModal";

export default function LoginLayoutPage({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const t = useTranslations();
    return (
        <>
            <div id="notLoginModal" />
            <PageWrapper>
                <BackButtonFromModal
                    returnHandler={() => {
                        router.push("/");

                    }}
                    textLink={t("auth.backButton")}
                />
                
            </PageWrapper>

            <LoginLayout>
                {children}
            </LoginLayout>
        </>
    );
}
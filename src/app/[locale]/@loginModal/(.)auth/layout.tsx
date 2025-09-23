"use client";

import Modal from "../../../../components/UI/Modal/Modal";
import { useRouter } from "../../../../navigation";
import PageWrapper from "../../../../components/PageContainers/PageWrapper/PageWrapper";
import LoginLayout from "../../../../components/auth/LoginLayout/LoginLayout";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import BackButtonFromModal from "../../../../components/BackButtonFromModal/BackButtonFromModal";

export default function Layout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const t = useTranslations();

    const toggleBodyOverflow = () => {
        document.body.style.overflow = "auto";
    }
    useEffect(() => {
        return toggleBodyOverflow();
    },[])

    return (
        <Modal visible isShowCloseBtn={false} >
            <PageWrapper>
                <BackButtonFromModal
                    returnHandler={() => {
                    router.back();
                }}
                    textLink={t("auth.backButtonModal")} />
                
            </PageWrapper>
            <LoginLayout>
                {children}
            </LoginLayout>
        </Modal>

    );
}
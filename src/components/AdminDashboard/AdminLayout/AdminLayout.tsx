import PageSection from "../../PageContainers/PageSection/PageSection";
import PageWrapper from "../../PageContainers/PageWrapper/PageWrapper";
import styles from "./AdminLayout.module.scss";
import { ASIDE_MENU } from "../../../constants/adminAsideMenu";
import AdminAside from "../AdminAside/AdminAside";
import HeaderLogo from "../../RootLayout/HeaderContent/HeaderLogo/HeaderLogo";
import { useTranslations } from "next-intl";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const t = useTranslations();
    return (
        <PageSection>
            <PageWrapper>
                <div style={{ display: "flex", columnGap: "40px" }}>
                    <HeaderLogo />
                    <h1 className={styles.title}>
                        {t("admin.heading") }
                    </h1>
                </div>
                <div className={styles.container}>
                    <div>
                        <AdminAside menu={ASIDE_MENU} />
                    </div>
                    <div className={styles.content}>
                        {children}
                    </div>
                </div>
            </PageWrapper>
        </PageSection>
    );

}
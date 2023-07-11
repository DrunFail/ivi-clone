import { FormattedMessage } from "react-intl";
import HeaderLogo from "../../Header/components/HeaderLogo/HeaderLogo";
import PageSection from "../../PageContainers/PageSection/PageSection";
import PageWrapper from "../../PageContainers/PageWrapper/PageWrapper";
import AdminAside from "../components/AdminAside/AdminAside";
import styles from "./AdminLayout.module.scss";

const ASIDE_MENU = [
    {
        id: 1,
        name: "movies",
        link: "/admin/movies"
    },
    {
        id: 2,
        name: "genres",
        link: "/admin/genres"
    }
]


export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <PageSection>
            <PageWrapper>
                <div style={{ display: "flex", columnGap: "40px" }}>
                    <HeaderLogo />
                    <h1 className={styles.title}><FormattedMessage id="admin.heading" /></h1>
                </div>
                <div className={styles.container}>
                    <div>
                        <AdminAside menu={ASIDE_MENU} />
                    </div>
                    <div className={styles.content}>{children}</div>
                </div>
            </PageWrapper>
        </PageSection>
    );

}
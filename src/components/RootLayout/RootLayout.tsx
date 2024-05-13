import PageWrapper from "../PageContainers/PageWrapper/PageWrapper";
import HeaderContent from "./HeaderContent/HeaderContent";
import styles from "./RootLayout.module.scss";
import CheckIsMobile from "./CheckIsMobile/CheckIsMobile";
import dynamic from "next/dynamic";

const MobileNavBar = dynamic(() => import('./MobileNavBar/MobileNavBar'))
const Footer = dynamic(() => import('./Footer/Footer'))

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {

    return (
        <>
            <header>
                <PageWrapper>
                    <HeaderContent />
                </PageWrapper>
            </header>
            <main className={styles.main}>
                {children}
            </main>

            <CheckIsMobile
                mobileNav={<MobileNavBar />}
                footer={
                    <PageWrapper>
                        <Footer />
                    </PageWrapper>
                }
            />
        </>
    );
};


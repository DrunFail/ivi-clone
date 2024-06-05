import PageWrapper from "../PageContainers/PageWrapper/PageWrapper";
import HeaderContent from "./HeaderContent/HeaderContent";
import styles from "./RootLayout.module.scss";
import CheckIsMobile from "./CheckIsMobile/CheckIsMobile";
import dynamic from "next/dynamic";
import { NavbarLink } from "../../models/global";

const MobileNavBar = dynamic(() => import('./MobileNavBar/MobileNavBar'))
const Footer = dynamic(() => import('./Footer/Footer'))

interface RootLayoutProps {
    children: React.ReactNode;
    navList: NavbarLink[];
    userProfileData: any
}

export default function RootLayout({ children,navList,userProfileData }: RootLayoutProps) {

    return (
        <>
            <header>
                <PageWrapper>
                    <HeaderContent navList={navList} userProfileData={userProfileData } />
                </PageWrapper>
            </header>
            <main className={styles.main}>
                {children}
            </main>

            <CheckIsMobile
                mobileNav={<MobileNavBar navMenu={navList} />}
                footer={
                    <PageWrapper>
                        <Footer />
                    </PageWrapper>
                }
            />
        </>
    );
};


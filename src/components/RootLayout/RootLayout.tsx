import dynamic from "next/dynamic";
import { useResize } from "../../hooks/useResize";
import PageWrapper from "../PageContainers/PageWrapper/PageWrapper";
import HeaderContent from "./HeaderContent/HeaderContent";
import styles from "./RootLayout.module.scss";

const Footer = dynamic(() => 
    import("./Footer/Footer").then((mod) => mod.default))


const MobileNavBar = dynamic(() => 
    import("./MobileNavBar/MobileNavBar").then((mod) => mod.default)
)
interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    const size = useResize();
    return (
        <>
        <header>
            <PageWrapper>
                <HeaderContent />
            </PageWrapper>
            </header>
            <main className={styles.main }>
                {children}
               
                
            </main>
            {size < 1160 && <MobileNavBar /> }
            {size > 1159 && 
                <PageWrapper>
                    <Footer />
                </PageWrapper>
            }
        </>
    );
};


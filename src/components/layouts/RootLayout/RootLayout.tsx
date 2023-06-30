import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import HeaderContainer from "../../Header/components/HeaderContainer/HeaderContainer";
import FooterContainer from "../../Footer/FooterContainer/FooterContainer";
import PageWrapper from "../../PageContainers/PageWrapper/PageWrapper";
import MobileNavBar from "../../MobileNavBar/MobileNavBar";
import { useResize } from "../../../hooks/useResize";
import PageSection from "../../PageContainers/PageSection/PageSection";

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    const size = useResize();
    return (
        <>
            <HeaderContainer>
                <Header />
            </HeaderContainer>
            <main>
                {children}
            </main>
            {size < 1160 && 
                
                    <MobileNavBar />
                }
            {size > 1159 && <FooterContainer>
                <PageWrapper>
                    <Footer />
                </PageWrapper>
            </FooterContainer>}
        </>

    );
};


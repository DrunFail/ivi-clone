import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import HeaderContainer from "../../Header/components/HeaderContainer/HeaderContainer";
import FooterContainer from "../../Footer/FooterContainer/FooterContainer";
import PageWrapper from "../../PageContainers/PageWrapper/PageWrapper";
import MobileNavBar from "../../MobileNavBar/MobileNavBar";

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <>
            <HeaderContainer>
                    <Header />
               
            </HeaderContainer>
            {children}

            <MobileNavBar />


            <FooterContainer>
                <PageWrapper>
                    <Footer />
                </PageWrapper>
            </FooterContainer>
        </>

    );
};


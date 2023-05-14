import styles from "./RootLayout.module.scss";
import MediaQuery from "react-responsive";
import Header from "../../Header/Header";
import Tab from "../../Tab/Tab";
import Footer from "../../Footer/Footer";
import HeaderContainer from "../../Header/components/HeaderContainer/HeaderContainer";
import FooterContainer from "../../Footer/FooterContainer/FooterContainer";
import PageWrapper from "../../PageContainers/PageWrapper/PageWrapper";

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

            <Tab />


            <FooterContainer>
                <PageWrapper>
                    <Footer />
                </PageWrapper>
            </FooterContainer>
        </>

    );
};


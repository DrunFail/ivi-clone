import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import PageWrapper from "../../PageContainers/PageWrapper/PageWrapper";
import MobileNavBar from "../../MobileNavBar/MobileNavBar";
import { useResize } from "../../../hooks/useResize";

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    const size = useResize();
    return (
        <>
            
                <Header />
           
            <main>
                {children}
            </main>
            {size < 1160 && 
                
                    <MobileNavBar />
                }
            {size > 1159 && 
                <PageWrapper>
                    <Footer />
                </PageWrapper>
            }
        </>

    );
};


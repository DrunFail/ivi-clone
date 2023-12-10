import ButtonActivateCertificate from "../../UI/ButtonActivateCertificate/ButtonActivateCertificate";
import ButtonSocialBlock from "../../UI/ButtonSocialBlock/ButtonSocialBlock";
import ButtonSubscription from "../../UI/ButtonSubscription/ButtonSubscriptiion";
import DownloadAppLinkBlock from "../../UI/DownloadAppLinkBlock/DownloadAppLinkBlock";
import styles from "./HamburgerMenuModal.module.scss";
import AboutBlockAccordion from "./components/AboutBlockAccordion/AboutBlockAccordion";
import ButtonTopContainer from "./components/ButtonTopContainer/ButtonTopContainer";
import NavBarModalTitle from "./components/NavBarModalTitle/NavBarModalTitle";
import NavMenuWithAccordion from "./components/NavMenuWithAccordion/NavMenuWithAccordion";
import ServiceBlockAccordion from "./components/ServiceBlockAccordion/ServiceBlockAccordion";


export default function HamburgerMenuModal() {
    return (

        <div className={styles.container}>
            <ButtonTopContainer>
                <ButtonSubscription />
                <ButtonActivateCertificate />
            </ButtonTopContainer>
            <NavMenuWithAccordion />
            <div style={{ display: "grid", rowGap: "30px" }}>
                <AboutBlockAccordion />
                <NavBarModalTitle>
                    <p>enter by code</p>
                </NavBarModalTitle>
                <DownloadAppLinkBlock variant="tablet" />
            </div>
            <ServiceBlockAccordion />
            <ButtonSocialBlock />
        </div>

    );
}
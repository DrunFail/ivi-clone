import { FormattedMessage } from "react-intl";
import styles from "./HamburgerMenuModal.module.scss";
import ButtonTopContainer from "./components/ButtonTopContainer/ButtonTopContainer";
import Button from "../../../UI/core/Button/Button";
import FontIcon from "../../../UI/FontIcon/FontIcon";
import NavMenuWithAccordion from "./components/NavMenuWithAccordion/NavMenuWithAccordion";
import AboutBlockAccordion from "./components/AboutBlockAccordion/AboutBlockAccordion";
import NavBarModalTitle from "./components/NavBarModalTitle/NavBarModalTitle";
import DownloadAppLinkBlock from "../../../UI/DownloadAppLinkBlock/DownloadAppLinkBlock";
import ServiceBlockAccordion from "./components/ServiceBlockAccordion/ServiceBlockAccordion";
import ButtonSocialBlock from "../../../UI/ButtonSocialBlock/ButtonSocialBlock";


export default function HamburgerMenuModal() {
    return (

        <div className={styles.container}>
            <ButtonTopContainer>
                <Button>
                    <FontIcon variant="diamond" size={20} />
                    <span>
                        <FormattedMessage id="ConnectSubscription" />
                    </span>
                </Button>

                <Button>
                    <FontIcon variant="reward" size={20} />
                    <span>
                        <FormattedMessage id="CertificateActivation" />
                    </span>
                </Button>
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
import AvailableDevicesButtonBlock from "../../Footer/AvailableDevicesButtonBlock/AvailableDevicesButtonBlock";
import ButtonSocialBlock from "../../Footer/ButtonSocialBlock/ButtonSocialBlock";
import ButtonActivateCertificate from "../../UI/ButtonActivateCertificate/ButtonActivateCertificate";
import ButtonSubscription from "../../UI/ButtonSubscription/ButtonSubscriptiion";
import HorizontalLine from "../../UI/HorizontalLine/HorizontalLine";
import Modal from "../../UI/Modal/Modal";
import AboutBlockAccordion from "../AboutBlockAccordion/AboutBlockAccordion";
import ButtonTopContainer from "../ButtonTopContainer/ButtonTopContainer";
import NavBarModalTitle from "../NavBarModalTitle/NavBarModalTitle";
import NavMenuWithAccordion from "../NavMenuWithAccordion/NavMenuWithAccordion";
import ServiceBlockAccordion from "../ServiceBlockAccordion/ServiceBlockAccordion";
import styles from "./HamburgerMenuModal.module.scss";

interface HamburgerMenuModalProps {
    toggleVisible: () => void;
    visible: boolean;
}
export default function HamburgerMenuModal({ toggleVisible, visible }: HamburgerMenuModalProps) {
    return (
        <Modal callback={toggleVisible} visible={visible}>
            <div className={styles.container}>
                <HorizontalLine />
                <ButtonTopContainer>
                    <ButtonSubscription />
                    <ButtonActivateCertificate />
                </ButtonTopContainer>
                <HorizontalLine />
                <NavMenuWithAccordion />
                <HorizontalLine />
                <AboutBlockAccordion />
                <NavBarModalTitle>
                    <p>enter by code</p>
                </NavBarModalTitle>
                <AvailableDevicesButtonBlock variant="tablet" />
                <HorizontalLine />
                <ServiceBlockAccordion />
                <HorizontalLine />
                <ButtonSocialBlock />
            </div>
        </Modal>
    );
}
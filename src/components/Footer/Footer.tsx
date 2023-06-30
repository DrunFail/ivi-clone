import AvailableDevicesButtonBlock from "./AvailableDevicesButtonBlock/AvailableDevicesButtonBlock";
import ButtonSocialBlock from "./ButtonSocialBlock/ButtonSocialBlock";
import FooterBottomContainer from "./FooterBottomContainer/FooterBottomContainer";
import FooterTop from "./FooterTop/FooterTop";


export default function Footer() {
    return (
        <>
            <FooterTop />
            <FooterBottomContainer>
                <AvailableDevicesButtonBlock variant="desktop" />
                <ButtonSocialBlock />
            </FooterBottomContainer>
        </>
    );
};

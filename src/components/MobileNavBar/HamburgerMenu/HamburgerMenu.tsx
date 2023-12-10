import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import HamburgerMenuModal from "../HamburgerMenuModal/HamburgerMenuModal";
import Modal from "../../UI/Modal/Modal";
import MobileNavBarItemNew from "../MobileNavBarItemNew/MobileNavBarItemNew";
import open from "../../../assets/SVG/More/More.svg";
import close from "../../../assets/SVG/Close/Close.svg";

export default function HamburgerMenu() {
    const [visible, setVisible] = useState(false);
    const router = useRouter();

    const toggleVisible = () => {
        setVisible(visible => !visible)
    }

    useEffect(() => {
        setVisible(false);
    }, [router.asPath]);


    return (
        <>
            <div onClick={toggleVisible}>
                <MobileNavBarItemNew
                    imgSrc={visible ? close : open}
                    intlId={visible ? "Close" : "More"} />
            </div>
            <Modal visible={visible} callback={toggleVisible}>
                <HamburgerMenuModal />
            </Modal>

        </>
    );
};



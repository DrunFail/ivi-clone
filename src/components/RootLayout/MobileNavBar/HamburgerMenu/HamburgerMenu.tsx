import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import HamburgerMenuModal from "../HamburgerMenuModal/HamburgerMenuModal";
import MobileNavBarItemNew from "../MobileNavBarItemNew/MobileNavBarItemNew";
import Modal from "../../../UI/Modal/Modal";

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
                    variant={visible ? "close" : "dots"}
                    intlId={visible ? "Close" : "More"} />
            </div>
            <Modal visible={visible} callback={toggleVisible}>
                <HamburgerMenuModal />
            </Modal>

        </>
    );
};



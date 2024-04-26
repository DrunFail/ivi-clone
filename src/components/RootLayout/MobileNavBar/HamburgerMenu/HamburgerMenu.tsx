import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import HamburgerMenuModal from "../HamburgerMenuModal/HamburgerMenuModal";
import MobileNavBarItemNew from "../MobileNavBarItemNew/MobileNavBarItemNew";
import Modal from "../../../UI/Modal/Modal";

export default function HamburgerMenu() {
    const [visible, setVisible] = useState(false);
    const pathname = usePathname();
    
    const toggleVisible = () => {
        setVisible(visible => !visible)
    }

    useEffect(() => {
        setVisible(false);
    }, [pathname]);


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



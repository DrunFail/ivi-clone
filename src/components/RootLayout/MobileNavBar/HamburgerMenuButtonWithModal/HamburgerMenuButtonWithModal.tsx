"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import MobileNavBarItemNew from "../MobileNavBarItemNew/MobileNavBarItemNew";
import Modal from "../../../UI/Modal/Modal";
import { useTranslations } from "next-intl";

export default function HamburgerMenuButtonWithModal({ modal,closeBtn,openBtn }: {modal:React.ReactNode,closeBtn:React.ReactNode,openBtn:React.ReactNode}) {
    const [visible, setVisible] = useState(false);
    const pathname = usePathname();
    const t = useTranslations();
    
    const toggleVisible = () => {
        setVisible(visible => !visible)
    }

    useEffect(() => {
        setVisible(false);
    }, [pathname]);


    return (
        <>
            <div onClick={toggleVisible}>
                {visible ? closeBtn : openBtn}
            </div>
            <Modal visible={visible} callback={toggleVisible}>
                {modal}
            </Modal>

        </>
    );
};



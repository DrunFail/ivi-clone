"use client";

import { useEffect, useState } from "react";
import styles from "./SearchButtonWithModal.module.scss";
import Modal from "../../../UI/Modal/Modal";
import { usePathname } from "next/navigation";

interface SearchButtonWithModalProps {
    button: React.ReactNode,
    modal:React.ReactNode
}
export default function SearchButtonWithModal({ button,modal }: SearchButtonWithModalProps) {
    const [visible, setVisible] = useState(false);
    const pathname = usePathname();

    const handleVisible = () => {
        setVisible(visible => !visible)
    }

    useEffect(() => {
        setVisible(false)
    }, [pathname])

    return (
        <>
            <div className={styles.button} onClick={handleVisible} data-testid='btn-search'>
                {button}
            </div>

            <Modal callback={handleVisible} visible={visible} >
                {modal }
            </Modal>

        </>
    );
};

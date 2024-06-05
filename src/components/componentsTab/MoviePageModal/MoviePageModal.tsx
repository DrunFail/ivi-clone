"use client";

import { usePathname } from "next/navigation";
import Modal from "../../UI/Modal/Modal";

export default function MoviePageModal({ children }:{children:React.ReactNode}) {
    const path = usePathname();


    const isVisibleModal = path.includes("actors") || path.includes("review") || path.includes("trailer");

    return (
        <Modal
            visible={isVisibleModal}
            isShowCloseBtn={false}
        >
            {children}
        </Modal>
    );
}
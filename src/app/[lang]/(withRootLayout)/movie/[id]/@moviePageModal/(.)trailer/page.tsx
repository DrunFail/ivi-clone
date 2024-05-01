"use client";

import Modal from "../../../../../../../components/UI/Modal/Modal";
import { useRouter } from "next/navigation";

export default function TrailerPageModal() {
    const router = useRouter();
    return (
        <Modal visible callback={() => router.back()}>
        <h1>Trailer</h1>
        </Modal>
    
    );
}
"use client";

import Modal from "../../../../../../../components/UI/Modal/Modal";
import { useRouter } from "next/navigation";

export default function ReviewPageModal() {
    const router = useRouter();
    return (
        <Modal visible callback={() => router.back() }>
            <h1>Review</h1>
        </Modal>
    );
}
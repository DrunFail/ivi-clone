"use client";

import Modal from "../../../../../../../components/UI/Modal/Modal";
import { useRouter } from "next/navigation";

export default function ActorsPageModal() {
    const router = useRouter();
    return (
        <Modal visible callback={() => router.back()}>
            <h1 style={{"blockSize": "60px"} }>Actors</h1>
        </Modal>
    );
}
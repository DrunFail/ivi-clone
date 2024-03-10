import { useState } from "react";
import ShareButton from "../UI/ShareButton/ShareButton";
import ShareModal from "./ShareModal/ShareModal";

interface ShareButtonWithModalProps {
    posterUrl: string,
    nameRu: string,
    year: number
}
export default function ShareButtonWithModal({posterUrl, nameRu, year }:ShareButtonWithModalProps) {
    const [visible, setVisible] = useState(false);
   



    const isModalOpen = () => {
        setVisible(true)
    }

    const isModalClose = () => {
        setVisible(false)
    }

    return (
        <>

            <ShareButton clickHandler={isModalOpen} />
            <ShareModal
                visible={visible}
                isModalClose={isModalClose}
                urlMovieImage={posterUrl}
                movieName={nameRu}
                movieYear={year} />



        </>
    );
}
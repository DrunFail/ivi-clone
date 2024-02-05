import Modal from "../../UI/Modal/Modal";
import Image from "next/image";
import styles from "./ShareModal.module.scss";
import { FormattedMessage } from "react-intl";
import Button from "../../UI/Button/Button";

interface ShareModalProps {
    visible: boolean,
    isModalClose: () => void,
    urlMovieImage: string,
    movieName: string,
    movieYear: number,
    movieDuration?: string
}
export default function ShareModal({visible, isModalClose, urlMovieImage, movieName,movieYear, movieDuration }:ShareModalProps) {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(window.location.href);
        isModalClose();
    }

    return (
        <Modal visible={visible} callback={isModalClose}>
            <div className={styles.Share}>
                <div className={styles.Share__info}>
                    <Image
                        src={urlMovieImage}
                        alt=""
                        width={43}
                        height={66}
                    />
                    <div>
                        <h2>
                            {movieName}
                        </h2>
                        <p>{movieYear} {movieDuration}</p>
                    </div>
                </div>
                <div className={styles.Share__button}>
                    <Button onClick={copyToClipboard}>
                        <FormattedMessage id="CopyLink" />
                    </Button>
                </div>
            </div>
        </Modal>
    );
}
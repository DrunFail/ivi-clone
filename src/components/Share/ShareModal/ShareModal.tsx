import Modal from "../../UI/Modal/Modal";
import Image from "next/image";
import styles from "./ShareModal.module.scss";
import Button from "../../UI/core/Button/Button";
import { useTranslations } from "next-intl";

interface ShareModalProps {
    visible: boolean,
    isModalClose: () => void,
    urlMovieImage: string,
    movieName: string,
    movieYear: number,
    movieDuration?: string
}
export default function ShareModal({ visible, isModalClose, urlMovieImage, movieName, movieYear, movieDuration }: ShareModalProps) {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(window.location.href);
        isModalClose();
    }
    const t = useTranslations();
    return (
        <Modal visible={visible} callback={isModalClose}>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.info}>
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
                    <div className={styles.button}>
                        <Button onClick={copyToClipboard}>
                            {t("CopyLink") }
                        </Button>

                    </div>

                    <div className={styles.button}>
                        <Button onClick={copyToClipboard}>
                            WhatsApp
                        </Button>
                        <Button onClick={copyToClipboard}>
                            Telegram
                        </Button>
                        <Button onClick={copyToClipboard}>
                            Viber
                        </Button>
                        
                    </div>

                    <div className={styles.button}>
                        <Button onClick={copyToClipboard}>
                            ВКонтакте
                        </Button>
                        <Button onClick={copyToClipboard}>
                            Одноклассники
                        </Button>
                    </div>

                </div>
            </div>
        </Modal>
    );
}
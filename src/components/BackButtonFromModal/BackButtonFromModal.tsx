import FontIcon from "../UI/FontIcon/FontIcon";
import styles from "./BackButtonFromModal.module.scss";

interface BackButtonFromModalProps {
    textLink: string,
    returnHandler?: () => void
}

export default function BackButtonFromModal({textLink,returnHandler }:BackButtonFromModalProps) {
    return (
            <div className={styles.link} onClick={returnHandler}>
                <FontIcon variant="arrowLeft" size={20} />
                <span>{textLink}</span>
            </div>
    );
}
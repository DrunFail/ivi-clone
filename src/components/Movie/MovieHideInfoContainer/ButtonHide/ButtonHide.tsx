import Button from "../../../UI/core/Button/Button";
import styles from "./ButtonHide.module.scss";

interface ButtonHideProps {
    isHide: boolean;
    isHideToggle: () => void;
    isHideText: React.ReactNode,
    notIsHideText: React.ReactNode
}

export default function ButtonHide({isHide, isHideToggle,isHideText, notIsHideText }:ButtonHideProps) {
    return (
        <Button
            className={styles.button}
            onlyImage
            onClick={isHideToggle}
        >
            {isHide ? isHideText : notIsHideText}
        </Button>
    );
}
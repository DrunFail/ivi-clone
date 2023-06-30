import Arrow from "../Arrow/Arrow";
import styles from "./AccordionHeading.module.scss";

interface AccordionHeadingProps {
    toggleVisible: () => void;
    isOpen: boolean;
    children: React.ReactNode
}

export default function AccordionHeading({ toggleVisible, isOpen, children }: AccordionHeadingProps) {
    return (
        <div className={styles.container} onClick={toggleVisible}>
            {children}
            <Arrow visible={isOpen} />
        </div>
    );
}
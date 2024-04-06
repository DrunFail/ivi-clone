import styles from "./MegaphoneImage.module.scss";
import FontIcon from "../FontIcon/FontIcon";

export default function MegaphoneImage() {
    return (
        <div className={styles.container}>
            <FontIcon variant="megaphon" size={64 } />
        </div>
    );
}
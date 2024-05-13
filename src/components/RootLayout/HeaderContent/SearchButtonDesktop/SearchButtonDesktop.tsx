import styles from "./SearchButtonDesktop.module.scss";
import Button from "../../../UI/core/Button/Button";
import FontIcon from "../../../UI/FontIcon/FontIcon";
import { useTranslations } from "next-intl";

export default function SearchButtonContent() {
    const t = useTranslations();
    return (
        <Button className={styles.button } onlyImage>
            <FontIcon variant="search" />
            <span className={styles.content}>
                {t("Search") }
            </span>
        </Button>
    );
}
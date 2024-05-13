import styles from "./ButtonSubscription.module.scss";
import Button from "../../../UI/core/Button/Button";
import { useTranslations } from "next-intl";

export default function ButtonSubscription() {
    const t = useTranslations();
    return (
        <Button
            color="red"
            data-testid="btn-sub"
            className={styles.button}
        >
            {t("PayForASubscription") }
        </Button>
    );
}
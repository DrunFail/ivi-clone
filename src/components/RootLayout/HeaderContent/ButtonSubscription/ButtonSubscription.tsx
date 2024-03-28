import { FormattedMessage } from "react-intl";
import styles from "./ButtonSubscription.module.scss";
import Button from "../../../UI/core/Button/Button";

export default function ButtonSubscription() {
    return (
        <Button
            color="red"
            data-testid="btn-sub"
            className={styles.button}
        >
            <FormattedMessage id="PayForASubscription" />
        </Button>
    );
}
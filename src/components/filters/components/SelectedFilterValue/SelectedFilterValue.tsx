import { FormattedMessage } from "react-intl";
import styles from "./SelectedFilterValue.module.scss";

export default function SelectedFilterValue({ intlId,variant }: { intlId:string, variant: "intlId" | "value" }) {
    return (
        <p className={styles.text}>
            {variant === "intlId" && <FormattedMessage id={intlId} />}
            {variant === "value" && intlId }
        </p>
    );
}
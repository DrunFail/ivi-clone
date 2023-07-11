import { FormattedMessage } from "react-intl";
import styles from "./FilterName.module.scss";

interface FilterNameProps {
    intlId: string;
    currentValue?: string | number;
}
export default function FilterName({ intlId, currentValue }:FilterNameProps) {
    return (
        <p className={styles.text}>
            <FormattedMessage
                id={`label.${intlId}`}
                values={{value: currentValue} }
            />
        </p>
    );
}
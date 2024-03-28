import { FormattedMessage } from "react-intl";
import styles from "./FilterName.module.scss";

interface FilterNameProps {
    intlId?: string;
    currentValue?: string | number;
    children: React.ReactNode
}
export default function FilterName({ intlId, currentValue,children }:FilterNameProps) {
    return (
        <span className={styles.text}>
            {/*<FormattedMessage*/}
            {/*    id={`label.${intlId}`}*/}
            {/*    values={{value: currentValue} }*/}
            {/*/>*/}
            {children }
        </span>
    );
}
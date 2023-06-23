import { FormattedMessage } from "react-intl";
import styles from "./PropertyItem.module.scss";

interface PropertyItemProps {
    intlId: string,
    description: string | number

}


export default function PropertyItem({ intlId, description }: PropertyItemProps) {
    return (
        <p className={styles.item}>
            <span><FormattedMessage id={intlId} />:</span>
            {description}
        </p>
    );
}

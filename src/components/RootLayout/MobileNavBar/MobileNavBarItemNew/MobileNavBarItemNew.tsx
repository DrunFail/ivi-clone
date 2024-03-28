import { FormattedMessage } from "react-intl";
import styles from "./MobileNavBarItemNew.module.scss";
import FontIcon, { FontIconVariant } from "../../../UI/FontIcon/FontIcon";

interface MobileNavBarItemNewProps {
    intlId: string;
    variant: FontIconVariant;
}
export default function MobileNavBarItemNew({ intlId, variant }:MobileNavBarItemNewProps) {
    return (
        <div className={styles.container} data-testid="mobile-nav-link">
            <FontIcon variant={variant} size={20} />
            <span className={styles.text}>
                <FormattedMessage id={intlId} />
            </span>
        </div>
    
    );
}
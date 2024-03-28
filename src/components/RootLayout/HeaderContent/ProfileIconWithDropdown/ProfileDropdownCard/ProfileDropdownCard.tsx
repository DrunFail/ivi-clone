import { FormattedMessage } from "react-intl";
import styles from "./ProfileDropdownCard.module.scss";
import FontIcon, { FontIconVariant } from "../../../../UI/FontIcon/FontIcon";
interface ProfileDropdownCardProps {
    variant: FontIconVariant,
    idTranslate: string
}
export default function ProfileDropdownCard({ variant, idTranslate }:ProfileDropdownCardProps) {
    return (
        <div className={styles.card} data-testid="profile-dropdown-card">
            <FontIcon
                variant={variant}
                size={32} />
            <span className={styles.description}>
                <FormattedMessage id={idTranslate} />
            </span>
        </div>
    );
}
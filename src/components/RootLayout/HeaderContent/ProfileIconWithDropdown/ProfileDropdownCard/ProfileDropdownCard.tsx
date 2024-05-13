import styles from "./ProfileDropdownCard.module.scss";
import FontIcon, { FontIconVariant } from "../../../../UI/FontIcon/FontIcon";
interface ProfileDropdownCardProps {
    variant: FontIconVariant,
    children: React.ReactNode
   
}
export default function ProfileDropdownCard({ children, variant }: ProfileDropdownCardProps) {
    return (
        <div className={styles.card} data-testid="profile-dropdown-card">
            <FontIcon
                variant={variant}
                size={32} />
            <span className={styles.description}>
                {children }
            </span>
        </div>
    );
}
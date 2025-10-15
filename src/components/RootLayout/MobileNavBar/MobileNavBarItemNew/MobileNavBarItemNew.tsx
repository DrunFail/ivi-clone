import styles from './MobileNavBarItemNew.module.scss';
import FontIcon, { FontIconVariant } from '../../../UI/FontIcon/FontIcon';

interface MobileNavBarItemNewProps {
    children: React.ReactNode;
    variant: FontIconVariant;
}
export default function MobileNavBarItemNew({ children, variant }: MobileNavBarItemNewProps) {
    return (
        <div className={styles.container} data-testid="mobile-nav-link">
            <FontIcon variant={variant} size={20} />
            <span className={styles.text}>{children}</span>
        </div>
    );
}

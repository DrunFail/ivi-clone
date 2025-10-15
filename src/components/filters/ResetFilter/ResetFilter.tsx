import styles from './ResetFilter.module.scss';
import FontIcon from '../../UI/FontIcon/FontIcon';
import { useTranslations } from 'next-intl';

export default function ResetFilter() {
    const t = useTranslations();
    return (
        <button type="reset" className={styles.button}>
            <div className={styles.clearFilters}>
                <span>
                    <FontIcon variant="close" />
                </span>
                <span>{t('ResetFilters')}</span>
            </div>
        </button>
    );
}

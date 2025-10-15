import { useTranslations } from 'next-intl';
import styles from './NotFoundErrorPage.module.scss';

export default function NotFoundErrorPage() {
    const t = useTranslations();
    return (
        <div className={styles.Back}>
            <div>
                <h1>{t('Error')}</h1>
                <p>{t('TheRequested')}</p>
            </div>
        </div>
    );
}

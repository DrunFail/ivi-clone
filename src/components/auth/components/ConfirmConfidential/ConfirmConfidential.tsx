import Link from 'next/link';
import styles from './ConfirmConfidential.module.scss';
import { useTranslations } from 'next-intl';

export default function ConfirmConfidential() {
    const t = useTranslations();
    return (
        <div className={styles.container}>
            <span>{t('auth.template')}</span>
            <p>
                {t('auth.with')} <Link href="https://www.ivi.ru/info/confidential">{t('auth.privacy')}</Link>
            </p>
            <p>
                {t('auth.and')} <Link href="https://www.ivi.ru/info/agreement">{t('auth.agreement')}</Link>
            </p>
        </div>
    );
}

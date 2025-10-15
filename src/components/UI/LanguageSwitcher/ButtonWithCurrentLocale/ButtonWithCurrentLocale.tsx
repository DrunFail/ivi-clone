import { useLocale } from 'next-intl';
import styles from './ButtonWithCurrentLocale.module.scss';

const LOCALE = {
    ru: 'RU',
    en: 'EN',
};

export default function ButtonWithCurrentLocale() {
    const locale = useLocale();
    return <span className={styles.currentLocale}>{LOCALE[locale as keyof typeof LOCALE]}</span>;
}

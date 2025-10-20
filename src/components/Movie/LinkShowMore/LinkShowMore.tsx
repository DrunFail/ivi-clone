import { Link } from '@/i18n/navigation';
import styles from './LinkShowMore.module.scss';
import { useTranslations } from 'next-intl';

interface LinkShowMoreProps {
    href?: string;
}

export default function LinkShowMore({ href }: LinkShowMoreProps) {
    const t = useTranslations('link');
    return (
        <Link className={styles.link} href={href || ''}>
            {t('watchMore')}
        </Link>
    );
}

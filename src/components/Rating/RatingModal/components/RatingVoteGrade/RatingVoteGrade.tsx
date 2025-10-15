import { useTranslations } from 'next-intl';
import styles from './RatingVoteGrade.module.scss';

export default function RatingVoteGrade() {
    const t = useTranslations();
    return (
        <div className={styles.container}>
            <p>{t('rating.bad')}</p>
            <p>{t('rating.good')}</p>
        </div>
    );
}

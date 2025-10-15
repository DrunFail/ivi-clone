import styles from './AskIvi.module.scss';
import { useTranslations } from 'next-intl';

export default function AskIvi() {
    const t = useTranslations();
    return (
        <div className={styles.container} data-testid="ask-ivi">
            <h3>ask.ivi</h3>
            <p>{t('AnswersOnQuestions')}</p>
        </div>
    );
}

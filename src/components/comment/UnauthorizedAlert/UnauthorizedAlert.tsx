import Button from '../../UI/core/Button/Button';
import styles from './UnauthorizedAlert.module.scss';
import { useTranslations } from 'next-intl';

export default function UnauthorizedAlert() {
    const t = useTranslations();
    return (
        <div className={styles.alert}>
            <div className={styles.text}>{t('comment.unauthorized')}</div>

            <Button as="link" color="red" href="/auth/login">
                {t('EnterOrRegister')}
            </Button>
        </div>
    );
}

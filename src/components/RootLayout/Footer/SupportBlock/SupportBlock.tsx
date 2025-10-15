import AskIvi from '../AskIvi/AskIvi';
import SupportBlockButton from '../SupportBlockButton/SupportBlockButton';
import styles from './SupportBlock.module.scss';
import { useTranslations } from 'next-intl';

interface SupportBlockProps {
    children?: React.ReactNode;
}

export default function SupportBlock({ children }: SupportBlockProps) {
    const t = useTranslations();
    return (
        <div className={styles.container} data-testid="support-block">
            {children}
            <p>
                {t('WeAreAlwaysReadyToHelpYou')}

                <br />
                {t('OurOperatorsAreOnline')}
            </p>
            <SupportBlockButton variant={'desktop'} />
            <AskIvi />
        </div>
    );
}

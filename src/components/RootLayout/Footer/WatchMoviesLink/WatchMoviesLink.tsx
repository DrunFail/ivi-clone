import styles from './WatchMoviesLink.module.scss';
import MegaphoneImage from '../../../UI/MegaphoneImage/MegaphoneImage';
import { useTranslations } from 'next-intl';

export default function WatchMoviesLink() {
    const t = useTranslations();
    return (
        <div className={styles.container} data-testid="watch-movies-link">
            <MegaphoneImage />
            <p>{t('WatchMovies')}</p>
        </div>
    );
}

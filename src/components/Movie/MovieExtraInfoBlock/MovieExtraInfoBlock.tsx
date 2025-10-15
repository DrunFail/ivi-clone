import LanguageMovieInfo from '../moviePageComponents/LanguageMovieInfo/LanguageMovieInfo';
import VideoMovieInfo from '../moviePageComponents/VideoMovieInfo/VideoMovieInfo';
import styles from './MovieExtraInfoBlock.module.scss';

interface MovieExtraInfoBlockProps {
    variant: 'desktop' | 'tablet';
}
export default function MovieExtraInfoBlock({ variant }: MovieExtraInfoBlockProps) {
    const defaultClasses = `
    ${styles.container}
    ${styles[variant]}
    `;
    return (
        <div className={defaultClasses}>
            <div className={styles.content}>
                <LanguageMovieInfo variant={variant} />
                <VideoMovieInfo variant={variant} />
            </div>
        </div>
    );
}

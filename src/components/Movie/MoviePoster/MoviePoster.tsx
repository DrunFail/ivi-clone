import styles from './MoviePoster.module.scss';
import Image, { ImageProps } from 'next/image';

interface MoviePosterProps extends Omit<ImageProps, 'src'> {
    posterUrl: string;
    alt: string;
}
export default function MoviePoster({ posterUrl, alt, ...props }: MoviePosterProps) {
    return (
        <div className={styles.container}>
            <Image fill src={posterUrl} alt={alt || ''} {...props} />
        </div>
    );
}

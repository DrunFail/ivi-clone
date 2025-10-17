import styles from './MoviePoster.module.scss';
import Image from 'next/image';

interface MoviePosterProps {
    posterUrl: string;
    alt: string;
}
export default function MoviePoster({ posterUrl, alt }: MoviePosterProps) {
    return (
        <div className={styles.container}>
            <Image fill alt={alt} src={posterUrl} />
        </div>
    );
}

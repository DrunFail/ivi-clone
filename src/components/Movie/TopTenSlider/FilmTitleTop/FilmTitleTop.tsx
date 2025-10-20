import Image from 'next/image';
import styles from './FilmTitleTop.module.scss';

interface FilmTitleTopProps {
    rating: number;
}

export default function FilmTitleTop({ rating }: FilmTitleTopProps) {
    return (
        <div className={styles.title}>
            <Image
                src={`/top10/${rating}.png`}
                alt=""
                fill
                sizes="
                (max - width: 440px) calc((100vw - 12px) / 2 * 0.9),
            (max-width: 600px) calc((100vw - 24px) / 3 * 0.9),
            (max-width: 882px) calc((100vw - 36px) / 4 * 0.9),
            (max-width: 1215px) calc((100vw - 48px) / 5 * 0.9),
            (min-width: 1216px) calc((100vw - 48px) / 5 * 0.9)
"
            />
        </div>
    );
}

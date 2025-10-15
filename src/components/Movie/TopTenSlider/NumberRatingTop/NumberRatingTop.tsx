import Image from 'next/image';
import styles from './NumberRatingTop.module.scss';

interface NumberRatingTopProps {
    rating: number;
}

export default function NumberRatingTop({ rating }: NumberRatingTopProps) {
    const splittedRating = String(rating).split('');

    return (
        <div className={styles.container}>
            {splittedRating.map((number, index) => (
                <div key={index} className={styles.item}>
                    <Image src={`/top10/number${number}.svg`} fill alt="" priority={false} />
                </div>
            ))}
        </div>
    );
}

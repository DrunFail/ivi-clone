import styles from './RatingBlock.module.scss';

const calculateRatingBackground = (ratingValue: number): string => {
    if (ratingValue > 7) {
        return 'green';
    } else if (ratingValue > 4) {
        return 'orange';
    } else {
        return 'red';
    }
};
interface RatingBlockProps {
    ratingValue: number;
}
export default function RatingBlock({ ratingValue }: RatingBlockProps) {
    const activeRatingBackground = calculateRatingBackground(ratingValue);

    return <div className={styles[`${activeRatingBackground}`]}>{ratingValue}</div>;
}

import styles from "./RatingFromNumbers.module.scss";

interface RatingFromNumbersProps {
    rating: string[]
}

export default function RatingFromNumbers({rating }:RatingFromNumbersProps) {
    return (
        <div className={styles.rating}>
            <span>{rating[0]}{"," }</span>
            
            <span>{rating[1]}</span>
        </div>
    );
}
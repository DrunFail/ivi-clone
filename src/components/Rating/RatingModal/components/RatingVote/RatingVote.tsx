import styles from './RatingVote.module.scss';

let arr = new Array(10);
arr = arr.fill(1);
export default function RatingVote() {
    return (
        <div className={styles.container}>
            {arr?.map((arr, i) => (
                <div key={i} className={styles.vote}>
                    {i + 1}
                </div>
            ))}
        </div>
    );
}

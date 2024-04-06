import styles from "./RatingModalVoteContainer.module.scss";

export default function RatingModalVoteContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.container}>
            {children }
        </div>
    );
}
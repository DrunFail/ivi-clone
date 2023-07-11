import styles from "./RatingModalTextContainer.module.scss";

export default function RatingModalTextContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.container}>
            {children }
        </div>
    );
}
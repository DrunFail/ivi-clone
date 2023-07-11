import styles from "./MoviePageRatingContainer.module.scss";
export default function MoviePageRatingContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.container }>{children}</div>
    );
}
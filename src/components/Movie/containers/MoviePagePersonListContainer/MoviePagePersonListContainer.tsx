import styles from "./MoviePagePersonListContainer.module.scss";

export default function MoviePagePersonListContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.container}>{children}</div>
    );
}
import styles from "./MoviePageInfoContainer.module.scss";

export default function MoviePageInfoContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.container } >{children}</div>
    );
}
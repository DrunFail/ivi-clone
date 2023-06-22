import styles from "./MovieInfoContainer.module.scss";

export default function MovieInfoContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.container }>
            {children }
        </div>
    );
}
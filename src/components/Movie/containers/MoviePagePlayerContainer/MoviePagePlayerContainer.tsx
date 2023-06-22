import styles from "./MoviePagePlayerContainer.module.scss";

export default function MoviePagePlayerContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.container }>{children}</div>
    );
}
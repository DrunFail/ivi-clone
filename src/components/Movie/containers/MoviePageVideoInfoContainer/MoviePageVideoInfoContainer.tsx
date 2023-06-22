import styles from "./MoviePageVideoInfoContainer.module.scss";

export default function MoviePageVideoInfoContainer({ children }: {children:React.ReactNode}) {
    return (
        <div className={styles.container }>{children}</div>
    );
}
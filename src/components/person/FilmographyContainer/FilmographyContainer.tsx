import styles from "./FilmographyContainer.module.scss";

export default function FilmographyContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.container}>
            {children }
        </div>
    );
}
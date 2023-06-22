import styles from "./MoviePageButtonContainer.module.scss";
export default function MoviePageButtonContainer({ children }: {children: React.ReactNode}) {
    return (
        <div className={styles.container}>
            {children }
        </div>
    );
}
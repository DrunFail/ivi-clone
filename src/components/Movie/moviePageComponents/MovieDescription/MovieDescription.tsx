import styles from "./MovieDescription.module.scss";

export default function MovieDescription({ children }: { children: string }) {
    return (
        <p className={styles.text}>{children}</p>
    );
}
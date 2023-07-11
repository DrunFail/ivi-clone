import styles from "./Arrow.module.scss";

export default function Arrow({ visible }: {visible:boolean}) {
    return (
        <div className={styles[visible ? "open" : "arrow"]}>
            <span className={styles.left }></span>
            <span className={styles.right }></span>
        </div>
    );
}
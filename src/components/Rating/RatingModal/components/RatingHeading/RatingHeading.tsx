import styles from "./RatingHeading.module.scss";
export default function RatingHeading({ children }: { children: React.ReactNode }) {
    return (
        <h1 className={styles.text} >{children}</h1>
    );
}
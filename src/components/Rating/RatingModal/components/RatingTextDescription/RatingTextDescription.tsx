import styles from './RatingTextDescription.module.scss';

export default function RatingTextDescription({ children }: { children: React.ReactNode }) {
    return <p className={styles.text}>{children}</p>;
}

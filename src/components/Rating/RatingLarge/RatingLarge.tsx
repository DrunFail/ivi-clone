import styles from './RatingLarge.module.scss';

export default function RatingLarge({ children }: { children: React.ReactNode }) {
    return <div className={styles.container}>{children}</div>;
}

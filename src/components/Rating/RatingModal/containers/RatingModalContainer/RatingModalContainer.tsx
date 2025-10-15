import styles from './RatingModalContainer.module.scss';

export default function RatingModalContainer({ children }: { children: React.ReactNode }) {
    return <div className={styles.container}>{children}</div>;
}

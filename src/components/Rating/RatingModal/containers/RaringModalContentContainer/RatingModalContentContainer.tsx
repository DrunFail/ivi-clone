import styles from './RatingModalContentContainer.module.scss';

export default function RatingModalContentContainer({ children }: { children: React.ReactNode }) {
    return <div className={styles.container}>{children}</div>;
}

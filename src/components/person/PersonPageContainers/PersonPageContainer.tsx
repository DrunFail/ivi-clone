import styles from './PersonPageContainer.module.scss';

export default function PersonPageContainer({ children }: { children: React.ReactNode }) {
    return <div className={styles.container}>{children}</div>;
}

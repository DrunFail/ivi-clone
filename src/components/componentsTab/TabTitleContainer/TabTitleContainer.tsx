import styles from './TabTitleContainer.module.scss';

export default function TabTitleContainer({ children }: { children: React.ReactNode }) {
    return <div className={styles.container}>{children}</div>;
}

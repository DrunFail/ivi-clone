import styles from './NavigationBlockTitle.module.scss';

export default function NavigationBlockTitle({ children }: { children: React.ReactNode }) {
    return <h3 className={styles.title}>{children}</h3>;
}

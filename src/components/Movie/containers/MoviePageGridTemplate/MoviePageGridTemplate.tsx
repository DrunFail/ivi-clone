import styles from './MoviePageGridTemplate.module.scss';

export default function MoviePageTopContainer({ children }: { children: React.ReactNode }) {
    return <div className={styles.container}>{children}</div>;
}

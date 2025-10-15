import styles from './FilmographyList.module.scss';

export default function FilmographyList({ children }: { children: React.ReactNode }) {
    return <div className={styles.container}>{children}</div>;
}

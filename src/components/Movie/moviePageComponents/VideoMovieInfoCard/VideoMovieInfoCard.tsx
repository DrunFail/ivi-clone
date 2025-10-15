import styles from './VideoMovieInfoCard.module.scss';
export default function VideoMovieInfoCard({ children }: { children: React.ReactNode }) {
    return <div className={styles.container}>{children}</div>;
}

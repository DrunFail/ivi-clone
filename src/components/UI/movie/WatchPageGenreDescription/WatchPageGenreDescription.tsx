import styles from './WatchPageGenreDescription.module.scss';

interface WatchPageGenreDescriptionProps {
    children: React.ReactNode;
}

export default function WatchPageGenreDescription({ children }: WatchPageGenreDescriptionProps) {
    return <p className={styles.text}>{children}</p>;
}

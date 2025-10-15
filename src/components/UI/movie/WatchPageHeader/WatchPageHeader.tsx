import styles from './WatchPageHeader.module.scss';

interface WatchPageHeaderProps {
    children: React.ReactNode;
}

export default function WatchPageHeader({ children }: WatchPageHeaderProps) {
    return <h1 className={styles.text}>{children}</h1>;
}

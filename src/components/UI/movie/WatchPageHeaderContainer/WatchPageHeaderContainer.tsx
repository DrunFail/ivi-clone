import styles from './WatchPageHeaderContainer.module.scss';

interface WatchPageHeaderContainerProps {
    children: React.ReactNode;
}

export default function WatchPageHeaderContainer({ children }: WatchPageHeaderContainerProps) {
    return <div className={styles.container}>{children}</div>;
}

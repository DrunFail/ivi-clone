import styles from './CreatersTab.module.scss';

interface CreatersTabProps {
    children: React.ReactNode;
}

export default function CreatersTab({ children }: CreatersTabProps) {
    return <div className={styles.container}>{children}</div>;
}

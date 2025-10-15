import styles from './MedallionContent.module.scss';

export default function MedallionContent({ children }: { children: React.ReactNode }) {
    return <div className={styles.container}>{children}</div>;
}

import styles from './HeaderPortalWrapper.module.scss';

export default function HeaderPortalWrapper({ children }: { children: React.ReactNode }) {
    return <div className={styles.container}>{children}</div>;
}

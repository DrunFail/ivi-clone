import styles from './PageWrapperInner.module.scss';

interface PageWrapperInnerProps {
    children: React.ReactNode;
}

export default function PageWrapperInner({ children }: PageWrapperInnerProps) {
    return <div className={styles.container}>{children}</div>;
}

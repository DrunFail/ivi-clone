import styles from './RedirectLinkContainer.module.scss';

interface RedirectLinkContainerProps {
    children: React.ReactNode;
}

export default function RedirectLinkContainer({ children }: RedirectLinkContainerProps) {
    return <div className={styles.container}>{children}</div>;
}

import styles from "./PageWrapper.module.scss";

interface PageWrapperProps {
    children: React.ReactNode
}
export default function PageWrapper({ children }:PageWrapperProps) {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    );
}

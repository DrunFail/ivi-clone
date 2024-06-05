import styles from "./FormAuthPageHeader.module.scss";

interface FormAuthPageHeaderProps {
    children: React.ReactNode
}

export default function FormAuthPageHeader({ children }: FormAuthPageHeaderProps) {
    return (
        <div className={styles.header}>
            <div className={styles.wrapper}>
                <h1>{children}</h1>
            </div>
        </div>
    );
}

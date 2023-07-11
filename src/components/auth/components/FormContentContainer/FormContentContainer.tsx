import styles from "./FormContentContainer.module.scss";

interface FormContentContainerProps {
    children: React.ReactNode
}

export default function FormContentContainer({ children }:FormContentContainerProps) {
    return (
        <div className={styles.container}>{children}</div>
    );
}

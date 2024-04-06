import styles from "./FormErrorMessage.module.scss";

interface FormErrorMessageProps {
    error?: boolean,
    children?:React.ReactNode
}
export default function FormErrorMessage({ error,children }: FormErrorMessageProps) {
    return (
        <>
            {error && <span className={styles.error}>{children}</span>}
        </>
    );
}
import styles from "./FormErrorMessage.module.scss";

interface FormErrorMessageProps {
    error: string
}
export default function FormErrorMessage({error }:FormErrorMessageProps) {
    return (
        <p className={styles.error}>{error}</p>
    );
}
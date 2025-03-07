import styles from "./FormContainer.module.scss";
interface FormContainerProps {
    children: React.ReactNode
}
export default function FormContainer({ children }: FormContainerProps) {
    return (
        <div className={styles.container}>
            {children }
        </div>
    );
}
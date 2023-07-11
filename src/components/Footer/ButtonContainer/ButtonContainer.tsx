import styles from "./ButtonContainer.module.scss";

export default function ButtonContainer({ children }: {children: React.ReactNode}) {
    return (
        <div className={styles.container}>
            {children }
        </div>
    );
}
import styles from "./FilterWrapperContainer.module.scss";

export default function FilterWrapperContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
}
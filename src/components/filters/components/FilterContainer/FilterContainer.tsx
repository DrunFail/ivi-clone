import styles from "./FilterContainer.module.scss";

export default function FilterContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.container}>
            {children }
        </div>
    );
}
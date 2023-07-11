import styles from "./Medallion.module.scss";

export default function Medallion({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.container}>
            {children }
        </div>
    );
}
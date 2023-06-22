import styles from "./MedallionDescription.module.scss";

export default function MedallionDescription({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.container }>
            {children }
        </div>
    );
}
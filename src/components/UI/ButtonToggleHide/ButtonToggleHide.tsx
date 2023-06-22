import styles from "./ButtonToggleHide.module.scss";
export default function ButtonToggleHide({ children }: { children: React.ReactNode }) {
    return (
        <button type="button" className={styles.button }>
            {children }
        </button>
    );
}
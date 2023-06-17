import styles from "./SupportBlockButtonContainer.module.scss";

export default function SupportBlockButtonContainer({ children }: {children: React.ReactNode}) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
}
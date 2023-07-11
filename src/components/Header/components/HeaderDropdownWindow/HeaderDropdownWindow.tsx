import styles from "./HeaderDropdownWindow.module.scss";
export default function HeaderDropdownWindow({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.container}>
            {children }
        </div>
    
    );
}
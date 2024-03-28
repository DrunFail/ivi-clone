import styles from "./TabContentContainer.module.scss";

export default function TabContentContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.container} >{children}</div> 
    
    );
}
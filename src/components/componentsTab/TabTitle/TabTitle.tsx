import styles from "./TabTitle.module.scss";

interface TabTitleProps {
    tabTitle?: React.ReactNode;
    count?: number | null
    showCount?: boolean;
}
export default function TabTitle({ tabTitle, count,showCount=false }: TabTitleProps) {
    return (
        <div className={styles.container}>
            <p>{tabTitle}</p>
            {showCount && <sup>{count ?? 0}</sup>}
        </div>
    );
};



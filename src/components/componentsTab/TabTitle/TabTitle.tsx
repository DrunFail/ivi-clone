import styles from "./TabTitle.module.scss";

interface TabTitleProps {
    tabTitle?: React.ReactNode;
    active: boolean,
    count?: number | null
    showCount?: boolean;
}
export default function TabTitle({ tabTitle, active, count,showCount=false }: TabTitleProps) {
    return (
        <div data-status={active}
            className={styles.container}
        >
            <p>{tabTitle}</p>
            {showCount && <sup>{count ?? 0}</sup>}
        </div>
    );
};



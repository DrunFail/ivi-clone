import styles from "./TabTitle.module.scss";
import { useRouter } from "next/router";

interface TabTitleProps {
    tabTitle: React.ReactNode;
    tabContent: string;
    active: boolean,
    count?: string | number
    showCount?: boolean
}
export default function TabTitle({ tabTitle, tabContent, active, count,showCount=false }: TabTitleProps) {
    const router = useRouter();
    const { id } = router.query;

    const pushQuery = async (type: string) => {
        await router.push({
            pathname: "/movie/" + String(id),
            query: { type }
        });
    };

    return (
        <div data-status={active}
            className={styles.container}
            onClick={() => pushQuery(tabContent)}
        >
            <p>{tabTitle}</p>
            {showCount && <sup>{count ?? 0}</sup>}
        </div>
    );
};



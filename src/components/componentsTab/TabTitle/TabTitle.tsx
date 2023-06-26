import styles from "./TabTitle.module.scss";
import { useRouter } from "next/router";

interface TabTitleProps {
    tabTitle: React.ReactNode;
    tabContent: string;
}
export default function  TabTitle({ tabTitle, tabContent }:TabTitleProps){
    const router = useRouter();
    const { id, type } = router.query;

    const pushQuery = async (type: string) => {
        await router.push({
            pathname: "/movie/" + String(id),
            query: { type }
        });
    };

    return (
        <div
            className={
                styles.Tab + " " + (type === tabContent ? styles.Tab__active : "")
            }
            onClick={() => pushQuery(tabContent)}
        >
            <p>{tabTitle}</p>
        </div>
    );
};



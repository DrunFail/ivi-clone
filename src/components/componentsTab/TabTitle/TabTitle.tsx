import { useParams, useRouter } from "next/navigation";
import styles from "./TabTitle.module.scss";

interface TabTitleProps {
    tabTitle: React.ReactNode;
    tabContent: string;
    active: boolean,
    count?: string | number
    showCount?: boolean
}
export default function TabTitle({ tabTitle, tabContent, active, count,showCount=false }: TabTitleProps) {
    const router = useRouter();
    const id = useParams<{ id: string }>()!.id;


    const pushQuery = async (type: string) => {
        await router.push(`/movie/${id}?type=${type}`);
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



import Link from "next/link";
import { BsXLg } from "react-icons/bs";
import { FormattedMessage } from "react-intl";
import styles from "./ResetFilter.module.scss";

export default function ResetFilter({ resetHandler, variant }: { resetHandler: () => void, variant: "admin" | "genrePage" }) {
    return (
        <>
            {variant === "genrePage"
                ? <Link href={"/movies/all"}>
                    <div className={styles.clearFilters} onClick={resetHandler}>
                        <span><BsXLg /></span>
                        <span><FormattedMessage id="ResetFilters" /></span>
                    </div>
                </Link>
                : <div className={styles.clearFilters} onClick={resetHandler}>
                    <span><BsXLg /></span>
                    <span><FormattedMessage id="ResetFilters" /></span>
                </div>
            }
           
        </>
        
    );
}
import Link from "next/link";
import { FormattedMessage } from "react-intl";
import styles from "./ResetFilter.module.scss";
import FontIcon from "../../UI/FontIcon/FontIcon";

export default function ResetFilter({ resetHandler, variant }: { resetHandler: () => void, variant: "admin" | "genrePage" }) {
    return (
        <>
            {variant === "genrePage"
                ? <Link href={"/movies/all"}>
                    <div className={styles.clearFilters} onClick={resetHandler}>
                        <span>
                            <FontIcon variant="close" />
                        </span>
                        <span>
                            <FormattedMessage id="ResetFilters" />
                        </span>
                    </div>
                </Link>
                : <div className={styles.clearFilters} onClick={resetHandler}>
                    <span>
                        <FontIcon variant="close" />
                    </span>
                    <span>
                        <FormattedMessage id="ResetFilters" />
                    </span>
                </div>
            }
           
        </>
        
    );
}
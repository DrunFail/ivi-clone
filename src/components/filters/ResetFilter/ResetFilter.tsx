import styles from "./ResetFilter.module.scss";
import FontIcon from "../../UI/FontIcon/FontIcon";
import { useTranslations } from "next-intl";
import { Link } from "../../../navigation";

export default function ResetFilter({ resetHandler, variant }: { resetHandler: () => void, variant: "admin" | "genrePage" }) {
    const t = useTranslations();
    return (
        <>
            {variant === "genrePage"
                ? <Link href={"/movies/all"}>
                    <div className={styles.clearFilters} onClick={resetHandler}>
                        <span>
                            <FontIcon variant="close" />
                        </span>
                        <span>
                            {t("ResetFilters") }
                        </span>
                    </div>
                </Link>
                : <div className={styles.clearFilters} onClick={resetHandler}>
                    <span>
                        <FontIcon variant="close" />
                    </span>
                    <span>
                        {t("ResetFilters") }
                    </span>
                </div>
            }
           
        </>
        
    );
}
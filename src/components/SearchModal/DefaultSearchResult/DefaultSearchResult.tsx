import { DEFAULT_SEARCH_LINK } from "./const";
import styles from "./DefaultSearchResult.module.scss";
import { Link } from "../../../navigation";
import { useTranslations } from "next-intl";

export default function DefaultSearchResult() {
    const t = useTranslations();
    return (
        <nav className={styles.nav}>
            <ul>
                {DEFAULT_SEARCH_LINK.map((link, idx) =>
                    <li key={idx}>
                        <Link href={link.link}>
                            {t(link.name)}
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};


import Link from "next/link";
import { FormattedMessage } from "react-intl";
import { DEFAULT_SEARCH_LINK } from "./const";
import styles from "./DefaultSearchResult.module.scss";

export default function DefaultSearchResult() {
    return (
        <nav className={styles.nav}>
            <ul>
                {DEFAULT_SEARCH_LINK.map((link, idx) =>
                    <li key={idx}>
                        <Link href={link.link}><FormattedMessage id={link.name} /></Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};


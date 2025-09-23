import { Link } from "../../../../navigation";
import styles from "./LocaleVariantMenu.module.scss";

export default function LocaleVariantMenu({ pathWithoutLocale }: {pathWithoutLocale:string}) {
    return (
        <div className={styles.localeVariant}>
            <Link href={pathWithoutLocale} locale="ru">RU</Link>
            <Link href={pathWithoutLocale} locale="en">EN</Link>
        </div>
    );
}
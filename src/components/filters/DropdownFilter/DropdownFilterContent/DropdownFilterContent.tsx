import Link from "next/link";
import { FormattedMessage } from "react-intl";
import styles from "./DropdownFilterContent.module.scss";

interface DropdownFilterContentProps {
    dataArray: any;
    testId: string;
    onClickHandler: (id: string) => void;
    prop: string;
    name: "genre" | "country";
    variant: "admin" | "genrePage"
}

export default function DropdownFilterContent({ dataArray, testId, onClickHandler,prop, name,variant }: DropdownFilterContentProps) {
    return (
        <div className={styles.container}>
            {dataArray && dataArray.map((item, idx) =>
                <>
                    {
                        testId === "genreId" && variant === "genrePage"
                            ? <Link
                                className={styles.dropdownItem }
                                key={idx}
                                href={`/movies/${item[prop]}`}
                                onClick={() => onClickHandler(item.id)}
                            >
                                <FormattedMessage id={`${name}.${item[prop]}.short`} />
                            </Link>
                            : <p
                                key={idx}
                                onClick={() => onClickHandler(item.id, item[prop])}
                                className={styles.dropdownItem}>
                                <FormattedMessage id={`${name}.${item[prop]}.title`} />
                            </p>
                    }
                </>
            )}
        </div>
    );
}
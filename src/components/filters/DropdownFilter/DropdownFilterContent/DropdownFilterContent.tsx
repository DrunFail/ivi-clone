import styles from "./DropdownFilterContent.module.scss";
import { FilterParams } from "../../../../hooks/filters/useFiltersWatchPage";
import { Fragment } from "react";
import { Link } from "../../../../navigation";

interface DropdownFilterContentProps {
    dataArray: any;
    typeItemList: "link" | "clickable";
    variant: "admin" | "genrePage",
    filterKey: keyof FilterParams,
    setFilterParams: (filterKey: keyof FilterParams, filterValue: string) => void,
    toggleVisibleDropdown:() => void
}

export default function DropdownFilterContent({ dataArray, typeItemList,variant,filterKey, setFilterParams,toggleVisibleDropdown }: DropdownFilterContentProps) {
    return (
        <div className={styles.container}>

            {/* eslint-disable */
                //@ts-ignore
                dataArray && dataArray.map((item, idx) =>
                    <Fragment key={idx }>
                        {
                            typeItemList === "link" && variant === "genrePage"
                                ? <Link
                                    className={styles.dropdownItem}
                                    href={item.link}
                                    onClick={() => { setFilterParams(filterKey, item.id); toggleVisibleDropdown(); }}
                                >
                                    {item.name }
                                </Link>
                                : <p
                                    onClick={() => { setFilterParams(filterKey, item.id); toggleVisibleDropdown(); }}
                                    className={styles.dropdownItem}>
                                    {item.name}
                                </p>
                        }
                    </Fragment>
                )}
        </div>
    );

}
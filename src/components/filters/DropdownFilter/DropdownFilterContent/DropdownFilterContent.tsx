import Link from "next/link";
import styles from "./DropdownFilterContent.module.scss";
import { FilterParams } from "../../../../hooks/filters/useFiltersWatchPage";
import React from "react";

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
                    <React.Fragment key={idx }>
                        {
                            typeItemList === "link" && variant === "genrePage"
                                ? <Link
                                    className={styles.dropdownItem}
                                    href={item.link}
                                    onClick={() => {  setFilterParams(filterKey, item.id) }}
                                >
                                    {item.name }
                                </Link>
                                : <p
                                    onClick={() => {  setFilterParams(filterKey, item.id) }}
                                    className={styles.dropdownItem}>
                                    {item.name}
                                </p>
                        }
                    </React.Fragment>
                )}
        </div>
    );

}
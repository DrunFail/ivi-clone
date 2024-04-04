import styles from "./SortField.module.scss";
import { FormattedMessage } from "react-intl";
import { FilterParams } from "../../../hooks/filters/useFiltersWatchPage";
import useSortField from "../../../hooks/filters/useSortField";
import FontIcon from "../../UI/FontIcon/FontIcon";

interface SortFieldProps {
    currentSortVariant: string;
    setFilterParams: (filterKey: keyof FilterParams, filterValue: number | string) => void;
    filterKey: keyof FilterParams
}
const sortVariantArray = ["nameRu", "year", "ratingKinopoiskVoteCount","ratingKinopoisk"]
export default function SortField({ currentSortVariant,  setFilterParams, filterKey }: SortFieldProps) {
    const { isOpen, popupRef, setSortParam, isOpenToggle} = useSortField({setFilterParams, filterKey})

    return (
        <div className={styles.wrapper} ref={popupRef}>
            <div className={styles.visibleArea} onClick={isOpenToggle}>
                <span>
                    <FontIcon variant="filter" />
                </span>
                <span>
                    <FormattedMessage id={`sort.variant.${currentSortVariant}`} />
                </span>
                <span className={styles.arrowCol + (isOpen ? ` ${styles.arrowColRev}` : "")}>
                    <FontIcon variant="arrowDown" />
                </span>
            </div>
            <div  className={styles.dropdownArea + (isOpen ? ` ${styles.dropdownOpen}` : "")}>
                {sortVariantArray.map((item, idx) => (
                    <p
                        key={idx}
                        className={styles.dropdownItem + (item === currentSortVariant ? " " + styles.selectedItem : "")}
                        onClick={() => setSortParam(item)}
                    >
                        <FormattedMessage id={`sort.variant.${item}` } />
                    </p>
                ))}
            </div>
        </div>
    );
};

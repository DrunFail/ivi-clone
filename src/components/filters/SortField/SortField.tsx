import { useState, useRef } from "react";
import styles from "./SortField.module.scss";
import { BsChevronDown, BsFilterRight } from "react-icons/bs";
import { FormattedMessage } from "react-intl";
import useOutsideClick from "../../../hooks/useOutsideClick";
import { FilterParams } from "../hooks/useFiltersWatchPage";

interface SortFieldProps {
    currentSortVariant: string;
    setFilterParams: (filterKey: keyof FilterParams, filterValue: number | string) => void;
    filterKey: keyof FilterParams
}
const sortVariantArray = ["nameRu", "year", "ratingKinopoiskVoteCount","ratingKinopoisk"]
export default function SortField({ currentSortVariant,  setFilterParams, filterKey }: SortFieldProps) {
    const [isOpen, setIsOpen] = useState(false);
    const popupRef = useRef(null);

    const closePopup = () => {
        setIsOpen(false)
    }
    useOutsideClick(popupRef, closePopup);

    const setSortParam = (sortParam: string) => {
        setFilterParams(filterKey, sortParam)
        setIsOpen(false);
    }

    return (
        <div className={styles.wrapper} ref={popupRef}>
            <div className={styles.visibleArea} onClick={() => setIsOpen(prev => !prev)}>
                <span><BsFilterRight /></span>
                <span><FormattedMessage id={`sort.variant.${currentSortVariant}`} /></span>
                <span className={styles.arrowCol + (isOpen ? ` ${styles.arrowColRev}` : "")}><BsChevronDown /></span>
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

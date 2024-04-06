import { useRef, useState } from "react";
import useOutsideClick from "../useOutsideClick";
import { FilterParams } from "./useFiltersWatchPage";

interface UseSortFieldProps {
    setFilterParams: (filterKey: keyof FilterParams, filterValue: number | string) => void;
    filterKey: keyof FilterParams
}

export default function useSortField({setFilterParams, filterKey }:UseSortFieldProps) {
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

    const isOpenToggle = () => {
        setIsOpen(prev => !prev)
    }

    return {popupRef, isOpen, setSortParam, isOpenToggle};
}
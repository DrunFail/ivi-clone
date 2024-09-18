"use client";

import { useEffect, useRef, useState } from "react";
import useOutsideClick from "../../../../hooks/useOutsideClick";

interface Props {
    children: React.ReactNode,
    isSetCurrentValue?: boolean,
    filterKey: string
}

export default function DropdownFilterContainer({ children, isSetCurrentValue = false, filterKey }: Props) {
    const [isVisibleDropdown, setIsVisibleDropdown] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    useOutsideClick(dropdownRef, () => setIsVisibleDropdown(false));


    useEffect(() => {
        const variants = document.getElementById(`variants-${filterKey}`) as HTMLDivElement;
        if (!variants) {
            console.log(`dont find variants ${filterKey}`);
            return;
        }
        variants.style.display = isVisibleDropdown ? "block" : "none";
        
    }, [isVisibleDropdown, filterKey])


    const setSort = (e: any) => {
        if (e.target.type === "radio" && isSetCurrentValue) {
            const select = document.getElementById(`selected-${filterKey}`);
            if (!select) {
                console.log(`dont find elem for paste ${filterKey}`);
                return;
            }
            select.innerHTML = e.target.labels[0].innerText
        }
        setIsVisibleDropdown(false);
    };

    return (
        <div
            ref={dropdownRef}
            onChange={(e) => setSort(e)}
            onClick={() => setIsVisibleDropdown(isVisibleDropdown => !isVisibleDropdown)}
        >
            {children}
        </div>
    );
};
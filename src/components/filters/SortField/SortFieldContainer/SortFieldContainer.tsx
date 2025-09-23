"use client";

import styles from "./SortField.module.scss";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import useOutsideClick from "../../../../hooks/useOutsideClick";

interface SortFieldProps {
    children: React.ReactNode
}
export default function SortFieldContainer({ children }: SortFieldProps) {
    const [isOpenSortVariant, setIsOpenVariant] = useState(false);
    const t = useTranslations();
    const sortFieldRef = useRef<HTMLDivElement>(null);

    const setSort = (e: any) => {
        if (e.target.type === "radio") {
            const select = document.getElementById('select-orderBy') as HTMLSpanElement;
            select.innerHTML = t(`sort.variant.${e.target.value}`);
            setIsOpenVariant(false);
            return
        }
        setIsOpenVariant(isOpenSortVariant => !isOpenSortVariant)
    }

    useEffect(() => {
        const variants = document.getElementById('sortBy-variants') as HTMLDivElement;
        if (!variants) {
            console.log(`dont find sortBy variants`);
            return;
        }
        variants.style.display = isOpenSortVariant ? "block" : "none";
    }, [isOpenSortVariant])


    useOutsideClick(sortFieldRef, () => setIsOpenVariant(false));

    return (
        <div
            className={styles.wrapper}
            ref={sortFieldRef}
            onClick={(e) => setSort(e)}
        >
            {children}
        </div>
    );
};
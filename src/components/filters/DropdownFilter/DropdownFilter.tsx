import { FormattedMessage } from "react-intl";
import { FilterParams } from "../../../hooks/filters/useFiltersWatchPage";
import FilterName from "../../UI/filter/FilterName/FilterName";
import FilterWrapperContainer from "../../UI/filter/FilterWrapperContainer/FilterWrapperContainer";
import PositionContainer from "../../UI/filter/PositionContainer/PositionContainer";
import SelectedFilterValue from "../../UI/filter/SelectedFilterValue/SelectedFilterValue";
import DropdownFilterContent from "./DropdownFilterContent/DropdownFilterContent";
import { useEffect, useRef, useState } from "react";
import FontIcon from "../../UI/FontIcon/FontIcon";
import useOutsideClick from "../../../hooks/useOutsideClick";
import styles from "./DropdownFilter.module.scss";
import { useRouter } from "next/router";
import React from "react";

interface DropdownFilterProps {
    name: "genre" | "country";
    clearArray?: any,
    filterKey: keyof FilterParams,
    setFilterParams: (filterKey: keyof FilterParams, filterValue: string) => void;
    initValue: number | undefined;
    variant: "admin" | "genrePage",
    typeItemList: "link" | "clickable"
}

export default function DropdownFilter({ name, clearArray, filterKey, setFilterParams, initValue = 0, variant, typeItemList }: DropdownFilterProps) {
    const [isVisibleDropdown, setIsVisibleDropdown] = useState(false);

    const { asPath } = useRouter();

    const toggleVisibleDropdown = () => {
        setIsVisibleDropdown(isVisibleDropdown => !isVisibleDropdown)
    }
    const closeDropdown = () => {
        setIsVisibleDropdown(false)
    }

    const ref = useRef(null)
    useOutsideClick(ref, closeDropdown);

    useEffect(() => {
        closeDropdown();
    },[asPath])
    

    return (
        <div ref={ref}>
            <div className={styles.container}  onClick={toggleVisibleDropdown}>
                <div>
                    <FilterName>
                        <FormattedMessage id={`label.${filterKey}`} />
                    </FilterName>

                    <SelectedFilterValue>
                        <FormattedMessage id={`${name}.${initValue}.title`} />
                    </SelectedFilterValue>
                </div>
                <FontIcon variant="arrowDown" size={12} />
            </div>
            {isVisibleDropdown &&
                <PositionContainer variant="content">
                    <FilterWrapperContainer>
                        <DropdownFilterContent
                            typeItemList={typeItemList}
                            dataArray={clearArray}
                            variant={variant}
                            filterKey={filterKey}
                            setFilterParams={setFilterParams}
                            toggleVisibleDropdown={toggleVisibleDropdown}
                        />
                    </FilterWrapperContainer>
                </PositionContainer>
            }
        </div>

    );
};



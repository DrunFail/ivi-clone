import styles from "./RangeFilter.module.scss";
import { useCallback, useEffect, useState } from "react";
import {debounce } from "lodash"
import RangeInput from "../../UI/RangeInput/RangeInput";
import FilterName from "../components/FilterName/FilterName";
import { FilterParams } from "../hooks/useFiltersWatchPage";

interface RangeFilterProps {
    min: number;
    max: number;
    step: number;
    setFilterParams: (filterKey: keyof FilterParams, filterValue: string | number) => void;
    filterKey: keyof FilterParams;
    initValue: number;
}

export default function RangeFilter({ initValue, min, max, step, filterKey, setFilterParams }: RangeFilterProps){
    const [currentValue, setCurrentValue] = useState(initValue)

    useEffect(() => {
        setCurrentValue(initValue)
    },[initValue])
    
    const deb = useCallback(debounce(setFilterParams, 700), [setFilterParams])

    const changeRange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setCurrentValue(+e.target.value)
        deb(filterKey, +e.target.value)
        
    }

    
    return (
        <div className={styles.wrapper}>
            <FilterName
                intlId={filterKey}
                currentValue={currentValue}
            />
            <div className={styles.rangeContainer}>
                <RangeInput
                    inputId={filterKey}
                    initValue={currentValue}
                    min={min}
                    max={max}
                    step={step}
                    changeHandler={changeRange}
                />
            </div>
        </div>
    );
};

import styles from "./RangeFilter.module.scss";
import RangeInput from "../../UI/RangeInput/RangeInput";
import { FilterParams } from "../../../hooks/filters/useFiltersWatchPage";
import FilterName from "../../UI/filter/FilterName/FilterName";
import useRangeFilter from "../../../hooks/filters/useRangeFilter";
import { FormattedMessage } from "react-intl";

interface RangeFilterProps {
    min: number;
    max: number;
    step: number;
    setFilterParams: (filterKey: keyof FilterParams, filterValue: string | number) => void;
    filterKey: keyof FilterParams;
    initValue: number;
}

export default function RangeFilter({ initValue, min, max, step, filterKey, setFilterParams }: RangeFilterProps){
    const {changeRange, currentValue } = useRangeFilter({setFilterParams, initValue,filterKey});

    
    return (
        <div className={styles.wrapper}>
            <FilterName>
                <FormattedMessage
                    id={`label.${filterKey}`}
                    values={{ value: currentValue }}
                />
            </FilterName>
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

import styles from "./RangeFilter.module.scss";
import { useCallback, useEffect, useState } from "react";
import {debounce } from "lodash"
import RangeInput from "../../UI/RangeInput/RangeInput";
import FilterName from "../components/FilterName/FilterName";

interface RangeFilterProps {
    min: number;
    max: number;
    step: number;
    testHandler: (filterKey: string, filterValue: string | number) => void;
    testId: string;
    initValue: number;
}

export default function RangeFilter({ initValue, min, max, step, testId, testHandler }: RangeFilterProps){
    const [currentValue, setCurrentValue] = useState(initValue)

    useEffect(() => {
        setCurrentValue(initValue)
    },[initValue])
    
    const deb = useCallback(debounce(testHandler, 700), [testHandler])

    const changeRange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setCurrentValue(+e.target.value)
        deb(testId, +e.target.value)
        
    }

    
    return (
        <div className={styles.wrapper}>
            <FilterName
                intlId={testId}
                currentValue={currentValue}
            />
            <div className={styles.rangeContainer}>
                <RangeInput
                    testId={testId}
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

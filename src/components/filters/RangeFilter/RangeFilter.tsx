'use client';

import styles from './RangeFilter.module.scss';
import RangeInput from '../../UI/RangeInput/RangeInput';
import { FilterParams } from '../../../hooks/filters/useFiltersWatchPage';
import FilterName from '../../UI/filter/FilterName/FilterName';
import { useRef } from 'react';

interface RangeFilterProps {
    min: number;
    max: number;
    step: number;
    filterKey: keyof FilterParams;
    defaultValue: number;
    filterName: string;
}

export default function RangeFilter({ min, max, step, filterKey, defaultValue, filterName }: RangeFilterProps) {
    const filterRef = useRef<HTMLDivElement>(null);

    const changeHandler = (e: any) => {
        if (filterRef.current) {
            const value = filterRef.current.querySelector(`#selected-${filterKey}`) as HTMLDivElement;
            value.innerText = e.target.value;
        }
    };

    return (
        <div className={styles.wrapper} ref={filterRef} onChange={(e) => changeHandler(e)}>
            <FilterName>
                {filterName}
                <div id={`selected-${filterKey}`} style={{ marginInlineStart: '8px' }}>
                    0
                </div>
            </FilterName>
            <RangeInput inputId={filterKey} defaultValue={defaultValue} min={min} max={max} step={step} />
        </div>
    );
}

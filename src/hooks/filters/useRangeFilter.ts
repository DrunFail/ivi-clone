//import { useCallback, useEffect, useState } from "react"
//import { debounce } from "lodash"
//import { FilterParams } from "./useFiltersWatchPage";

//interface UseRangeFilterProps {
//    setFilterParams: (filterKey: keyof FilterParams, filterValue: string | number) => void;
//    filterKey: keyof FilterParams;
//    initValue: number
//}

//export default function useRangeFilter({setFilterParams, filterKey,initValue }: UseRangeFilterProps) {
//    const [currentValue, setCurrentValue] = useState(initValue)

//    useEffect(() => {
//        setCurrentValue(initValue)
//    }, [initValue])

//    const deb = useCallback(debounce(setFilterParams, 700), [setFilterParams])

//    const changeRange = (e: React.ChangeEvent<HTMLInputElement>) => {
//        setCurrentValue(+e.target.value)
//        deb(filterKey, +e.target.value)

//    }

//    return {currentValue, changeRange}
//}

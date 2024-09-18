import FontIcon from "../../../UI/FontIcon/FontIcon";
import FilterName from "../../../UI/filter/FilterName/FilterName";
import SelectedFilterValue from "../../../UI/filter/SelectedFilterValue/SelectedFilterValue";
import styles from "./FilterContent.module.scss";

interface Props {
    filterName: string,
    filterKey:string,
    selectedValue?: React.ReactNode
    
}
export default function FilterContent({filterName,selectedValue,filterKey}:Props) {
    return (
        <div className={styles.container}>
            <div>
                <FilterName>
                    {filterName}
                </FilterName>

                <SelectedFilterValue id={filterKey}>
                    {selectedValue}
                </SelectedFilterValue>
            </div>
            <FontIcon variant="arrowDown" size={12} />
        </div>
    );
}
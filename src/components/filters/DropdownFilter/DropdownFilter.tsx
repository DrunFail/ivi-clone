import DropdownFilterContainer from './DropdownFilterContainer/DropdownFilterContainer';
import FilterContent from './FilterContent/FilterContent';
import PositionContainer from '../../UI/filter/PositionContainer/PositionContainer';
import DropdownFilterVariants from './DropdownFilterVariants/DropdownFilterVariants';

interface DropdownFilterProps {
    isSetCurrentValue?: boolean;
    filterKey: string;
    variants: { name: string; id: number }[];
    defaultValue: number;
    selectedValue: string;
    filterName: string;
}

export default function DropdownFilter({
    filterKey,
    variants,
    defaultValue,
    selectedValue,
    isSetCurrentValue = false,
    filterName,
}: DropdownFilterProps) {
    return (
        <DropdownFilterContainer filterKey={filterKey} isSetCurrentValue={isSetCurrentValue}>
            <FilterContent filterKey={filterKey} filterName={filterName} selectedValue={selectedValue} />
            <PositionContainer id={`variants-${filterKey}`} style={{ display: 'none', inlineSize: 'max-content' }}>
                <DropdownFilterVariants defaultValue={defaultValue} dataArray={variants} filterKey={filterKey} />
            </PositionContainer>
        </DropdownFilterContainer>
    );
}

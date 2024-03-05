import AccordionItem from "../../UI/AccordionItem/AccordionItem";
import BackgroundContainer from "../components/BackgroundContainer/BackgroundContainer";
import FilterName from "../components/FilterName/FilterName";
import PositionContainer from "../components/PositionContainer/PositionContainer";
import SelectedFilterValue from "../components/SelectedFilterValue/SelectedFilterValue";
import { FilterParams } from "../hooks/useFiltersWatchPage";
import DropdownFilterContent from "./DropdownFilterContent/DropdownFilterContent";

interface DropdownFilterProps {
    name: "genre" | "country";
    clearArray?: any,
    filterKey: keyof FilterParams,
    setFilterParams: (filterKey: keyof FilterParams, filterValue: string) => void;
    initValue: number | undefined;
    variant: "admin" | "genrePage"
}

export default function DropdownFilter({ name, clearArray, filterKey, setFilterParams, initValue,variant }: DropdownFilterProps) {
    const prop = name + "NameEng";

    const handleClick = (id: string) => {
        setFilterParams(filterKey, id)
    }

    return (
        <>
            <AccordionItem
                outClick
                heading={
                    <div>
                        <FilterName intlId={filterKey} />
                        <SelectedFilterValue variant={"intlId"} intlId={`${name}.${initValue ?? 0}.title`} />
                    </div>
                }
                headingVariant={"spaceBetween"}
                content={
                    <PositionContainer variant="content">
                        <BackgroundContainer>
                            <DropdownFilterContent
                                dataArray={clearArray}
                                testId={filterKey}
                                onClickHandler={handleClick}
                                prop={prop}
                                name={name}
                                variant={variant }
                            />
                        </BackgroundContainer>
                    </PositionContainer>
                }
            />

        </>

    );
};



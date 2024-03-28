import styles from "./FiltersField.module.scss";
import RangeFilter from "../RangeFilter/RangeFilter";
import ResetFilter from "../ResetFilter/ResetFilter";
import InputFilterWithAutoSuggest from "../InputFilterWithAutoSuggest/InputFilterWithAutoSuggest";
import DropdownFilter from "../DropdownFilter/DropdownFilter";
import GridAreaContainer from "../GridAreaContainer/GridAreaContainer";
import { FilterParams } from "../../../hooks/filters/useFiltersWatchPage";
import FilterWrapperContainer from "../../UI/filter/FilterWrapperContainer/FilterWrapperContainer";
import { LinkData } from "../../../models/global";

interface FiltersFieldProps {
    genreObjects: LinkData[] | undefined;
    countryObjects: LinkData[] | undefined;
    clearFiltersWithoutSort: () => void;
    setFilterParams: (filterKey: keyof FilterParams, filterValue:string | number) => void,
    filterParams: FilterParams,
    variant: "admin" | "genrePage"
}
export default function FiltersField({
    genreObjects,
    countryObjects,
    filterParams,
    clearFiltersWithoutSort,
    setFilterParams,
    variant

}: FiltersFieldProps) {
    

    return (
        <div className={styles.filters}>
            <FilterWrapperContainer>
                <DropdownFilter
                typeItemList="link"
                    filterKey="genreId"
                    clearArray={genreObjects}
                    name="genre"
                    setFilterParams={setFilterParams}
                    initValue={filterParams.genreId}
                    variant={variant }
                />
            </FilterWrapperContainer>
            <FilterWrapperContainer>
                <DropdownFilter
                typeItemList="clickable"
                    filterKey="countryId"
                    clearArray={countryObjects}
                    name="country"
                    setFilterParams={setFilterParams}
                    initValue={filterParams.countryId}
                    variant={variant }
                />
            </FilterWrapperContainer>
            <FilterWrapperContainer>
                <RangeFilter
                    filterKey="ratingKinopoisk"
                    min={0}
                    max={10}
                    step={0.1}
                    initValue={filterParams.ratingKinopoisk}
                    setFilterParams={setFilterParams}
                />
            </FilterWrapperContainer>
            <FilterWrapperContainer>
                <RangeFilter
                    filterKey="ratingKinopoiskVoteCount"
                    min={100 * 1000}
                    max={10 * 1000 * 1000}
                    step={100 * 1000}
                    setFilterParams={setFilterParams}
                    initValue={filterParams.ratingKinopoiskVoteCount}

                />
            </FilterWrapperContainer>
            <GridAreaContainer area={"E"}>
                <FilterWrapperContainer>
                    <InputFilterWithAutoSuggest
                        setFilterParams={setFilterParams}
                        filterKey="DIRECTOR"
                        currentId={filterParams.DIRECTOR}
                    />
                </FilterWrapperContainer>
            </GridAreaContainer>
            <GridAreaContainer area="F">
                <FilterWrapperContainer>
                    <InputFilterWithAutoSuggest
                        setFilterParams={setFilterParams}
                        filterKey="ACTOR"
                        currentId={filterParams.ACTOR}
                    />
                </FilterWrapperContainer>
            </GridAreaContainer>
            <ResetFilter
                resetHandler={clearFiltersWithoutSort}
                variant={variant }            />

        </div>

    );
};

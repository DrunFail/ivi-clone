import styles from "./FiltersField.module.scss";
import RangeFilter from "../RangeFilter/RangeFilter";
import ResetFilter from "../ResetFilter/ResetFilter";
import InputFilterWithAutoSuggest from "../InputFilterWithAutoSuggest/InputFilterWithAutoSuggest";
import DropdownFilter from "../DropdownFilter/DropdownFilter";
import GridAreaContainer from "../GridAreaContainer/GridAreaContainer";
import BackgroundContainer from "../components/BackgroundContainer/BackgroundContainer";
import { Country, Genre } from "../../../models/types";
import { FilterParams } from "../hooks/useFiltersWatchPage";

interface FiltersFieldProps {
    genreObjects: Genre[];
    countryObjects: Country[];
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
            <BackgroundContainer>
                <DropdownFilter
                    filterKey="genreId"
                    clearArray={genreObjects}
                    name="genre"
                    setFilterParams={setFilterParams}
                    initValue={filterParams.genreId}
                    variant={variant }
                />
            </BackgroundContainer>
            <BackgroundContainer>
                <DropdownFilter
                    filterKey="countryId"
                    clearArray={countryObjects}
                    name="country"
                    setFilterParams={setFilterParams}
                    initValue={filterParams.countryId}
                    variant={variant }
                />
            </BackgroundContainer>
            <BackgroundContainer>
                <RangeFilter
                    filterKey="ratingKinopoisk"
                    min={0}
                    max={10}
                    step={0.1}
                    initValue={filterParams.ratingKinopoisk}
                    setFilterParams={setFilterParams}
                />
            </BackgroundContainer>
            <BackgroundContainer>
                <RangeFilter
                    filterKey="ratingKinopoiskVoteCount"
                    min={100 * 1000}
                    max={10 * 1000 * 1000}
                    step={100 * 1000}
                    setFilterParams={setFilterParams}
                    initValue={filterParams.ratingKinopoiskVoteCount}

                />
            </BackgroundContainer>
            <GridAreaContainer area={"E"}>
                <BackgroundContainer>
                    <InputFilterWithAutoSuggest
                        setFilterParams={setFilterParams}
                        filterKey="DIRECTOR"
                        currentId={filterParams.DIRECTOR}
                    />
                </BackgroundContainer>
            </GridAreaContainer>
            <GridAreaContainer area="F">
                <BackgroundContainer>
                    <InputFilterWithAutoSuggest
                        setFilterParams={setFilterParams}
                        filterKey="ACTOR"
                        currentId={filterParams.ACTOR}
                    />
                </BackgroundContainer>
            </GridAreaContainer>
            <ResetFilter
                resetHandler={clearFiltersWithoutSort}
                variant={variant }            />

        </div>

    );
};

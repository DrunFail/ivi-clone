import styles from "./FiltersField.module.scss";
import { ICountryObject, IGenreObject } from "../../../models";
import RangeFilter from "../RangeFilter/RangeFilter";
import ResetFilter from "../ResetFilter/ResetFilter";
import InputFilterWithAutoSuggest from "../InputFilterWithAutoSuggest/InputFilterWithAutoSuggest";
import DropdownFilter from "../DropdownFilter/DropdownFilter";
import { FilterParams } from "../hooks/useFiltersWatchPage";
import GridAreaContainer from "../GridAreaContainer/GridAreaContainer";
import BackgroundContainer from "../components/BackgroundContainer/BackgroundContainer";

interface FiltersFieldProps {
    genreObjects: IGenreObject[];
    countryObjects: ICountryObject[];
    clearFiltersWithoutSort: () => void;
    testHandler: (filterKey: string, filterValue: string | number) => void,
    filterParams: FilterParams,
    variant: "admin" | "genrePage"
}
export default function FiltersField({
    genreObjects,
    countryObjects,
    filterParams,
    clearFiltersWithoutSort,
    testHandler,
    variant

}: FiltersFieldProps) {


    return (
        <div className={styles.filters}>
            <BackgroundContainer>
                <DropdownFilter
                    testId="genreId"
                    clearArray={genreObjects}
                    name="genre"
                    first={true}
                    testHandler={testHandler}
                    initValue={filterParams.genreId}
                    variant={variant }
                />
            </BackgroundContainer>
            <BackgroundContainer>
                <DropdownFilter
                    testId="countryId"
                    clearArray={countryObjects}
                    name="country"
                    first={false}
                    testHandler={testHandler}
                    initValue={filterParams.countryId}
                    variant={variant }
                />
            </BackgroundContainer>
            <BackgroundContainer>
                <RangeFilter
                    testId="ratingKinopoisk"
                    min={0}
                    max={10}
                    step={0.1}
                    initValue={filterParams.ratingKinopoisk}
                    testHandler={testHandler}
                />
            </BackgroundContainer>
            <BackgroundContainer>
                <RangeFilter
                    testId="ratingKinopoiskVoteCount"
                    min={100 * 1000}
                    max={10 * 1000 * 1000}
                    step={100 * 1000}
                    testHandler={testHandler}
                    initValue={filterParams.ratingKinopoiskVoteCount}

                />
            </BackgroundContainer>
            <GridAreaContainer area={"E"}>
                <BackgroundContainer>
                    <InputFilterWithAutoSuggest
                        testHandler={testHandler}
                        testId="directorId"
                        currentId={filterParams.directorId}
                    />
                </BackgroundContainer>
            </GridAreaContainer>
            <GridAreaContainer area="F">
                <BackgroundContainer>
                    <InputFilterWithAutoSuggest
                        testHandler={testHandler}
                        testId="actorId"
                        currentId={filterParams.actorId}
                    />
                </BackgroundContainer>
            </GridAreaContainer>
            <ResetFilter
                resetHandler={clearFiltersWithoutSort}
                variant={variant }            />

        </div>

    );
};

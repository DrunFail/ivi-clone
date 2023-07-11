import FiltersField from "../../../filters/FiltersField/FiltersField";
import useFilterWatchPage from "../../../filters/hooks/useFiltersWatchPage";
import SortField from "../../../filters/SortField/SortField";
import PageSection from "../../../PageContainers/PageSection/PageSection";
import MovieListAdmin from "../../components/MovieListAdmin/MovieListAdmin";

export default function Movies() {
    const {
        currentGenre,
        genreList,
        countryList,
        handleChangeFilterParams,
        clearFiltersWithoutSort,
        filteredMovie,
        currentSortVariant,
        filterParams
    } = useFilterWatchPage({ variant: "admin" });



    return (
        <div>
            <PageSection>
                <FiltersField
                    genreObjects={genreList}
                    countryObjects={countryList}
                    testHandler={handleChangeFilterParams}
                    clearFiltersWithoutSort={clearFiltersWithoutSort}
                    filterParams={filterParams}
                    variant={"admin"}

                />

                {filteredMovie.length > 0 &&
                    <SortField
                        testHandler={handleChangeFilterParams}
                        currentSortVariant={currentSortVariant}
                        testId="orderBy"

                    />}


            </PageSection>
            <MovieListAdmin data={filteredMovie} />
        </div>
    );
}
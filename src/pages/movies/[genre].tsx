import MovieList from "../../components/Movie/MovieList/MovieList";
import PageSection from "../../components/PageContainers/PageSection/PageSection";
import PageWrapper from "../../components/PageContainers/PageWrapper/PageWrapper";
import WatchPageHeaderDescription from "../../components/Movie/WatchPageHeaderDescription/WatchPageHeaderDescription";
import EmptyMovieList from "../../components/Movie/EmptyMovieList/EmptyMovieList";
import FiltersField from "../../components/filters/FiltersField/FiltersField";
import SortField from "../../components/filters/SortField/SortField";
import useFilterWatchPage from "../../components/filters/hooks/useFiltersWatchPage";

export default function MoviesByGenre() {
    const {
        currentGenre,
        genreList,
        countryList,
        handleChangeFilterParams,
        clearFiltersWithoutSort,
        filteredMovie,
        currentSortVariant,
        filterParams,
        changeCurrentMoviePage
    } = useFilterWatchPage({variant: "genrePage"});


    return (
        <>
            <PageSection>
                <PageWrapper>
                    <WatchPageHeaderDescription
                        currentGenre={currentGenre} />
                </PageWrapper>
            </PageSection>
            <PageSection>
                <PageWrapper>
                    <FiltersField
                        genreObjects={genreList}
                        countryObjects={countryList}
                        setFilterParams={handleChangeFilterParams}
                        clearFiltersWithoutSort={clearFiltersWithoutSort}
                        filterParams={filterParams}
                        variant={"genrePage" }
                        
                    />
                    
                    {filteredMovie.length > 0 &&
                        <SortField
                        setFilterParams={handleChangeFilterParams}
                        currentSortVariant={currentSortVariant}
                        filterKey="orderBy"

                            />}
                    
                </PageWrapper>
            </PageSection>
            <PageSection>
                <PageWrapper>
                    {filteredMovie.length > 0
                        ? <MovieList
                            data={filteredMovie}
                            showMoreHandler={changeCurrentMoviePage}
                        />

                        : <EmptyMovieList />
                    }
                </PageWrapper>
            </PageSection>
        </>
    );
};


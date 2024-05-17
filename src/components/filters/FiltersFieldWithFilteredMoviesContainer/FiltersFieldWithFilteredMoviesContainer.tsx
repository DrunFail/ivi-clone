"use client";

import { MOVIE_LIST_SIZES } from "../../../constants/sliderItemSize";
import useFilterWatchPage from "../../../hooks/filters/useFiltersWatchPage";
import EmptyMovieList from "../../Movie/EmptyMovieList/EmptyMovieList";
import MovieListCardWithOverlayContainer from "../../Movie/MovieListCardContainer/MovieListCardWithOverlayContainer";
import PageSection from "../../PageContainers/PageSection/PageSection";
import PageWrapper from "../../PageContainers/PageWrapper/PageWrapper";
import Carousel from "../../UI/Carousel/Carousel";
import FiltersField from "../FiltersField/FiltersField";
import SortField from "../SortField/SortField";

export default function FiltersFieldWithFilteredMoviesContainer({ currentSelectedGenre }: {currentSelectedGenre:string}) {
    const {
        currentGenre,
        genres,
        countries,
        handleChangeFilterParams,
        clearFiltersWithoutSort,
        filteredMovie,
        currentSortVariant,
        filterParams,
        changeCurrentMoviePage,
        transformedCountries,
        transformedGenres,
        translatedCurrentCountry

    } = useFilterWatchPage({ variant: "genrePage" });


    return (
        <>
    <PageSection>
                <PageWrapper>
                    <FiltersField
                        genreObjects={transformedGenres}
                        countryObjects={transformedCountries}
                        setFilterParams={handleChangeFilterParams}
                        clearFiltersWithoutSort={clearFiltersWithoutSort}
                        filterParams={filterParams}
                        currentSelectedGenre={currentSelectedGenre}
                        translatedCurrentCountry={translatedCurrentCountry }
                        variant={"genrePage"}

                    />

                    {filteredMovie.rows &&
                        <SortField
                            setFilterParams={handleChangeFilterParams}
                            currentSortVariant={currentSortVariant}
                            filterKey="orderBy"

                        />}

                </PageWrapper>
            </PageSection>
            <PageSection>
                <PageWrapper>
                    {filteredMovie.rows
                        ? <Carousel
                            component={MovieListCardWithOverlayContainer}
                            mode={"list"}
                            data={filteredMovie.rows}
                            count={filteredMovie.count}
                            sizes={MOVIE_LIST_SIZES}
                            showMoreHandler={changeCurrentMoviePage}
                        />
                        : <EmptyMovieList />
                    }
                </PageWrapper>
            </PageSection>
    
        </>
    );
}
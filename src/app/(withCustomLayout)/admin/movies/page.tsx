"use client";

import useFilterWatchPage from "../../../../hooks/filters/useFiltersWatchPage";
import PageSection from "../../../../components/PageContainers/PageSection/PageSection";
import FiltersField from "../../../../components/filters/FiltersField/FiltersField";
import SortField from "../../../../components/filters/SortField/SortField";
import Carousel from "../../../../components/UI/Carousel/Carousel";
import { MOVIE_LIST_SIZES } from "../../../../constants/sliderItemSize";
import MovieListItemAdmin from "../../../../components/AdminDashboard/MovieListItemAdmin/MovieListItemAdmin";
import EmptyMovieList from "../../../../components/Movie/EmptyMovieList/EmptyMovieList";


export default function AdminMovies() {
    const {
        currentGenre,
        transformedCountries,
        transformedGenres,
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
                    genreObjects={transformedGenres}
                    countryObjects={transformedCountries}
                    setFilterParams={handleChangeFilterParams}
                    clearFiltersWithoutSort={clearFiltersWithoutSort}
                    filterParams={filterParams}
                    variant={"admin"}

                />

                {filteredMovie.count > 0 &&
                    <SortField
                        setFilterParams={handleChangeFilterParams}
                        currentSortVariant={currentSortVariant}
                        filterKey="orderBy"

                    />}


            </PageSection>

            {filteredMovie.rows
                ? <Carousel
                    mode={'list'}
                    data={filteredMovie.rows}
                    count={filteredMovie.count}
                    sizes={MOVIE_LIST_SIZES}
                    component={MovieListItemAdmin}
                />
                : <EmptyMovieList />
            }



            

        </div>
    );
}


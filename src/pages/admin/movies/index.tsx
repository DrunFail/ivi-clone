import { ReactElement } from "react";
import AdminLayout from "../../../components/AdminDashboard/AdminLayout/AdminLayout";
import PageSection from "../../../components/PageContainers/PageSection/PageSection";
import FiltersField from "../../../components/filters/FiltersField/FiltersField";
import SortField from "../../../components/filters/SortField/SortField";
import Carousel from "../../../components/UI/Carousel/Carousel";
import { MOVIE_LIST_SIZES } from "../../../constants/sliderItemSize";
import useFilterWatchPage from "../../../hooks/filters/useFiltersWatchPage";
import MovieListItemAdmin from "../../../components/AdminDashboard/MovieListItemAdmin/MovieListItemAdmin";

AdminMovies.getLayout = function getLayout(page: ReactElement) {
    return (
        <AdminLayout>{page}</AdminLayout>
    )
}
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

                {filteredMovie.length > 0 &&
                    <SortField
                        setFilterParams={handleChangeFilterParams}
                        currentSortVariant={currentSortVariant}
                        filterKey="orderBy"

                    />}


            </PageSection>

            <Carousel
                mode={'list'}
                carouselId={'id'}
                data={filteredMovie}
                count={50}
                sizes={MOVIE_LIST_SIZES}
                component={MovieListItemAdmin}
            />

        </div>
    );
}



"use client";

import { FormattedMessage } from "react-intl";
import Head from "next/head";
import PageWrapper from "../../../../../components/PageContainers/PageWrapper/PageWrapper";
import BreadCrumbs from "../../../../../components/UI/BreadCrumbs/BreadCrumbs";
import PageSection from "../../../../../components/PageContainers/PageSection/PageSection";
import PageWrapperInner from "../../../../../components/PageContainers/PageWrapperInner/PageWrapperInner";
import WatchPageHeader from "../../../../../components/UI/movie/WatchPageHeader/WatchPageHeader";
import WatchPageHeaderContainer from "../../../../../components/UI/movie/WatchPageHeaderContainer/WatchPageHeaderContainer";
import WatchPageGenreDescription from "../../../../../components/UI/movie/WatchPageGenreDescription/WatchPageGenreDescription";
import FiltersField from "../../../../../components/filters/FiltersField/FiltersField";
import SortField from "../../../../../components/filters/SortField/SortField";
import useFilterWatchPage from "../../../../../hooks/filters/useFiltersWatchPage";
import useBreadCrumbsStandart from "../../../../../hooks/useBreadCrumbsStandart";
import Carousel from "../../../../../components/UI/Carousel/Carousel";
import MovieListCardWithOverlayContainer from "../../../../../components/Movie/MovieListCardContainer/MovieListCardWithOverlayContainer";
import { MOVIE_LIST_SIZES } from "../../../../../constants/sliderItemSize";
import EmptyMovieList from "../../../../../components/Movie/EmptyMovieList/EmptyMovieList";

export default function MoviesByGenre() {
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
        transformedGenres
    } = useFilterWatchPage({ variant: "genrePage" });

    const breadcrumbsData = useBreadCrumbsStandart();



    return (
        <>
            <Head>
                <title>Смотреть онлайн</title>
                <meta name="description" content="Смотреть онлайн" />
            </Head>
            <PageWrapper>
                <BreadCrumbs
                    breadcrumbs={breadcrumbsData}
                    isLastCrumbActive={false}
                />
            </PageWrapper>
            <PageSection>
                <PageWrapper>
                    <PageWrapperInner>
                        <WatchPageHeader>
                            <FormattedMessage id={`genre.${currentGenre}.title`} />
                        </WatchPageHeader>
                        <WatchPageHeaderContainer>
                            <WatchPageGenreDescription>
                                <FormattedMessage id={`genre.${currentGenre}.description`} />
                            </WatchPageGenreDescription>
                        </WatchPageHeaderContainer>
                    </PageWrapperInner>
                </PageWrapper>
            </PageSection>
            <PageSection>
                <PageWrapper>
                    <FiltersField
                        genreObjects={transformedGenres}
                        countryObjects={transformedCountries}
                        setFilterParams={handleChangeFilterParams}
                        clearFiltersWithoutSort={clearFiltersWithoutSort}
                        filterParams={filterParams}
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
};
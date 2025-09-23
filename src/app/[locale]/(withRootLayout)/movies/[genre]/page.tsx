import PageWrapper from "../../../../../components/PageContainers/PageWrapper/PageWrapper";
import PageSection from "../../../../../components/PageContainers/PageSection/PageSection";
import PageWrapperInner from "../../../../../components/PageContainers/PageWrapperInner/PageWrapperInner";
import WatchPageHeader from "../../../../../components/UI/movie/WatchPageHeader/WatchPageHeader";
import WatchPageHeaderContainer from "../../../../../components/UI/movie/WatchPageHeaderContainer/WatchPageHeaderContainer";
import WatchPageGenreDescription from "../../../../../components/UI/movie/WatchPageGenreDescription/WatchPageGenreDescription";
import FiltersFieldWithFilteredMoviesContainer from "../../../../../components/filters/FiltersFieldWithFilteredMoviesContainer/FiltersFieldWithFilteredMoviesContainer";
import BreadcrumbsGenrePage from "../../../../../components/BreadcrumbsGenrePage/BreadcrumbsGenrePage";
import type { Metadata } from 'next'
import { getTranslations } from "next-intl/server";
import { MovieAPI } from "../../../../../api/MovieAPI";
import { CLIENT_GENRE_LIST } from "../../../../../constants/genreList";
import { calculateGenreName } from "../../../../../utils/calculateGenreName";
import { calculateCountryName } from "../../../../../utils/calculateCountryName";
import FilterWrapperContainer from "../../../../../components/UI/filter/FilterWrapperContainer/FilterWrapperContainer";
import DropdownFilter from "../../../../../components/filters/DropdownFilter/DropdownFilter";
import AutoSuggestFilter from "../../../../../components/filters/InputFilterWithAutoSuggest/AutoSuggestFilter";
import GridAreaContainer from "../../../../../components/filters/GridAreaContainer/GridAreaContainer";
import SortField from "../../../../../components/filters/SortField/SortField";
import ResetFilter from "../../../../../components/filters/ResetFilter/ResetFilter";
import RangeFilter from "../../../../../components/filters/RangeFilter/RangeFilter";
import { MovieFilterParams } from "../../../../../models/types";
import MovieFilterFormGridTemplate from "../../../../../components/filters/MovieFilterFormGridTemplate/MovieFilterFormGridTemplate";

type Props = {
    params: { genre: string }
}


export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const genre = params.genre;
    const t = await getTranslations()

    return {
        title: t("page.genre.title", { genre: t(`genre.${genre}.title`) }),
        description: t(`genre.${genre}.description`),
    }
}

const DEFAULT_MOVIE_SEARCH_PARAMS: Pick<MovieFilterParams, "size" | "page" | "orderBy" | "ratingKinopoisk" | "ratingKinopoiskVoteCount"> = {
    size: 21,
    page: 0,
    orderBy: "nameRu",
    ratingKinopoisk: 0,
    ratingKinopoiskVoteCount: 0
}


export default async function MoviesByGenre({ params: { genre, locale } }: { params: { genre: string, locale: "ru" | "en" } }) {
    const t = await getTranslations();
    const currentGenreId = CLIENT_GENRE_LIST[genre as keyof typeof CLIENT_GENRE_LIST];
    const firstLoadMoviesByGenre = await MovieAPI.getFilteredMovie({ ...DEFAULT_MOVIE_SEARCH_PARAMS, genreId: currentGenreId || undefined });
    const genres = await MovieAPI.getGenreList();
    const countries = await MovieAPI.getCountryList();

    const transformData = genres.map(genre => {
        const name = calculateGenreName(genre, locale);
        return { name, id: genre.id }
    })

    const transformCounties = countries.map(country => {
        const name = calculateCountryName(country, locale);
        return { name, id: country.id }
    })


    const sortedGenres = transformData.sort((a, b) => a.name.localeCompare(b.name));
    const sortedCountries = transformCounties.sort((a, b) => a.name.localeCompare(b.name));
    const sortedCountriesWithAll = [{ name: "all", id: 0 }, ...sortedCountries];


    return (
        <>
            <PageWrapper>
                <BreadcrumbsGenrePage />
            </PageWrapper>
            <PageSection>
                <PageWrapper>
                    <PageWrapperInner>
                        <WatchPageHeader>
                            {t(`genre.${genre}.title`)}
                        </WatchPageHeader>
                        <WatchPageHeaderContainer>
                            <WatchPageGenreDescription>
                                {t(`genre.${genre}.description`)}
                            </WatchPageGenreDescription>
                        </WatchPageHeaderContainer>
                    </PageWrapperInner>
                </PageWrapper>
            </PageSection>
            <PageSection>
                <PageWrapper>
                    <FiltersFieldWithFilteredMoviesContainer
                        firstLoadMoviesByGenre={firstLoadMoviesByGenre}
                    >
                        <MovieFilterFormGridTemplate>
                            <input
                                type="number"
                                name="page"
                                defaultValue={DEFAULT_MOVIE_SEARCH_PARAMS.page}
                                step={1}
                                style={{ display: "none" }}
                            />
                            <input
                                type="hidden"
                                name="size"
                                value={DEFAULT_MOVIE_SEARCH_PARAMS.size}
                            />

                            <FilterWrapperContainer>
                                <DropdownFilter
                                    filterName={t(`label.genreId`)}
                                    filterKey={"genreId"}
                                    variants={sortedGenres}
                                    defaultValue={currentGenreId}
                                    selectedValue={t(`genre.${genre}.title`)}
                                />
                            </FilterWrapperContainer>
                            <FilterWrapperContainer>
                                <DropdownFilter
                                    filterKey={"countryId"}
                                    filterName={t('label.countryId')}
                                    variants={sortedCountriesWithAll}
                                    defaultValue={0}
                                    selectedValue={"all countries"}
                                    isSetCurrentValue
                                />
                            </FilterWrapperContainer>

                            <FilterWrapperContainer>
                                <RangeFilter
                                    filterKey="ratingKinopoisk"
                                    min={0}
                                    max={10}
                                    step={0.1}
                                    defaultValue={DEFAULT_MOVIE_SEARCH_PARAMS.ratingKinopoisk}
                                    filterName={t(`label.ratingKinopoisk`, { value: "" }) }
                                />
                            </FilterWrapperContainer>
                            <FilterWrapperContainer>
                                <RangeFilter
                                    filterKey="ratingKinopoiskVoteCount"
                                    min={0}
                                    max={10 * 1000 * 1000}
                                    step={100 * 1000}
                                    defaultValue={DEFAULT_MOVIE_SEARCH_PARAMS.ratingKinopoiskVoteCount}
                                    filterName={t(`label.ratingKinopoiskVoteCount`, { value: "" }) }

                                />
                            </FilterWrapperContainer>


                            <GridAreaContainer area="E">
                                <FilterWrapperContainer>
                                    <AutoSuggestFilter
                                        filterKey={"DIRECTOR"}
                                        filterName={t(`label.DIRECTOR`)}
                                    />
                                </FilterWrapperContainer>
                            </GridAreaContainer>
                            <GridAreaContainer area="F">
                                <FilterWrapperContainer>
                                    <AutoSuggestFilter
                                        filterKey={"ACTOR"}
                                        filterName={t(`label.ACTOR`)}
                                    />
                                </FilterWrapperContainer>
                            </GridAreaContainer>

                            <SortField
                                defaultSortValue={DEFAULT_MOVIE_SEARCH_PARAMS.orderBy as string}
                                filterKey={"orderBy"}
                                variants={["nameRu", "year", "ratingKinopoiskVoteCount", "ratingKinopoisk"]}
                            />

                            <ResetFilter />
                        </MovieFilterFormGridTemplate>
                    </FiltersFieldWithFilteredMoviesContainer>
                </PageWrapper>
            </PageSection>

        </>
    );
};
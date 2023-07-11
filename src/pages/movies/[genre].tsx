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
        filterParams
    } = useFilterWatchPage();


    /** Функция вызывает запрос дополнительного набора карточек фильмов. */
    //async function getMoreFilmcards(): Promise<void> {
    //    setPaginate(prev => ++prev);
    //    const requestUrl = createRequestUrl(paginate + 1, filterParams);
    //    const response = await getFilmCards(requestUrl);
    //    if (response) {
    //        setIsLastPage(checkIsLastPage(response.count, paginate + 1));
    //        const arrayOfFilms = response.rows;
    //        setFilmCards([...filmCards, ...arrayOfFilms]);
    //    }
    //}

    //function checkIsLastPage(count: number, pag: number): boolean {
    //    const currentPageCardsLimit = (pag + 1) * +pageSize;
    //    return count <= currentPageCardsLimit;
    //}

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
                        testHandler={handleChangeFilterParams}
                        clearFiltersWithoutSort={clearFiltersWithoutSort}
                        filterParams={filterParams}
                        
                    />
                    
                    {filteredMovie.length > 0 &&
                        <SortField
                        testHandler={handleChangeFilterParams}
                        currentSortVariant={currentSortVariant}
                        testId="orderBy"

                            />}
                    
                </PageWrapper>
            </PageSection>
            <PageSection>
                <PageWrapper>
                    {filteredMovie.length > 0
                        ? <MovieList
                            data={filteredMovie} />

                        : <EmptyMovieList />
                    }
                </PageWrapper>
            </PageSection>
        </>
    );
};


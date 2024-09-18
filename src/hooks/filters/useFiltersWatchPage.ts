import { useEffect, useState } from "react"
import { Movie, MovieFilterParams } from "../../models/types";
import { MovieAPI } from "../../api/MovieAPI";
import { useResize } from "../useResize";
import { MOVIE_LIST_SIZES } from "../../constants/sliderItemSize";
import { ResponseWithCountAndRows } from "../../models/response";

type InitParamsForFilters = Pick<MovieFilterParams, "ratingKinopoisk" | "ratingKinopoiskVoteCount" | "orderBy">
type MoviePage = Pick<MovieFilterParams, "page">
export type FilterParams = Omit<Partial<MovieFilterParams>, "size" | keyof MoviePage> & InitParamsForFilters

const INIT_PARAMS_FOR_FILTERS: InitParamsForFilters = {
    ratingKinopoisk: 0,
    ratingKinopoiskVoteCount: 0,
    orderBy: "ratingKinopoisk",
}

const INIT_MOVIE_PAGE: MoviePage = {
    page: 0
};

const MOVIE_ROWS = 3;

const fetchMovies = (params: FilterParams, page: MoviePage, movieAmount: number) => {
    return MovieAPI.getFilteredMovie({ ...params, ...page, size: movieAmount })
}

interface Props {
    variant?: "admin" | "genrePage",
    firstMovieSet: ResponseWithCountAndRows<Movie>,
    currentGenreId: number
}

export default function useFilterWatchPage({ variant = "genrePage", firstMovieSet, currentGenreId }: Props) {
    const size = useResize();
    const [filterParams, setFilterParams] = useState<FilterParams>({} as FilterParams);
    const [filteredMovie, setFilteredMovie] = useState({} as ResponseWithCountAndRows<Movie>);
    const [currentMoviePage, setCurrentMoviePage] = useState(INIT_MOVIE_PAGE);
    const [amountMovieOnPage, setAmountMovieOnPage] = useState(0);

    

    if (amountMovieOnPage && !filteredMovie.count) {
        const slicedMovieSet = firstMovieSet.rows.slice(0, amountMovieOnPage);
        setFilteredMovie({ ...firstMovieSet, rows: slicedMovieSet })
    }
  


    

    const handleChangeFilterParams = (filterKey: keyof FilterParams, filterValue: string | number) => {
        setFilterParams({ ...filterParams, [filterKey]: filterValue })
    }

    const clearFiltersWithoutSort = () => {
        setFilterParams({ ...INIT_PARAMS_FOR_FILTERS });
    }

    const changeCurrentMoviePage = () => {
        setCurrentMoviePage((currentMoviePage) => ({ ...currentMoviePage, page: ++currentMoviePage.page }))
    }


    useEffect(() => {
        setFilterParams({
            ...INIT_PARAMS_FOR_FILTERS,
            genreId: currentGenreId
        })
    }, [currentGenreId])



    useEffect(() => {
        if (size) {
            const amountItemsOnPage = MOVIE_LIST_SIZES
                .sort((a, b) => b.resol - a.resol)
                .find(elem => elem.resol <= size)?.items || 5;

            const pageSize = amountItemsOnPage * MOVIE_ROWS
            setAmountMovieOnPage(pageSize);
        }

    }, [size])



    useEffect(() => {
        if (currentMoviePage.page) {
            fetchMovies(filterParams, currentMoviePage, amountMovieOnPage)
                .then((response) => setFilteredMovie({ ...filteredMovie, rows: [...filteredMovie.rows, ...response.rows] }))
                .catch(error => console.log(error))
        }
    }, [currentMoviePage])

    


    return {
        filteredMovie,
        handleChangeFilterParams,
        clearFiltersWithoutSort,
        currentSortVariant: filterParams.orderBy,
        filterParams,
        changeCurrentMoviePage,
    }
}
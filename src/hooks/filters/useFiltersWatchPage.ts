import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react"
import {  Movie, MovieFilterParams } from "../../models/types";
import { MovieAPI } from "../../api/MovieAPI";
import { useAppDispatch, useAppSelector } from "../reduxHook";
import { fetchGenres, selectAllGenres } from "../../store/slices/genresSlice";
import { useResize } from "../useResize";
import { fetchCountries, selectAllCountries } from "../../store/slices/countriesSlice";
import { MOVIE_LIST_SIZES } from "../../constants/sliderItemSize";
import useTransformCountries from "../useTransformCountries";
import useTransformGenres from "../useTransformGenres";
import { CLIENT_GENRE_LIST } from "../../constants/genreList";
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
export default function useFilterWatchPage({ variant = "genrePage" }: { variant?: "admin" | "genrePage" }) {
    const [filterParams, setFilterParams] = useState<FilterParams>({} as FilterParams);
    const [filteredMovie, setFilteredMovie] = useState({} as ResponseWithCountAndRows<Movie>);
    const [currentMoviePage, setCurrentMoviePage] = useState(INIT_MOVIE_PAGE);
    const [amountMovieOnPage, setAmountMovieOnPage] = useState(0)

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (genres.status === "idle") {
            dispatch(fetchGenres())
        }
    }, [])

    useEffect(() => {
        dispatch(fetchCountries())
    }, [])

    const genres = useAppSelector(selectAllGenres)
    const countries = useAppSelector(selectAllCountries)

    const router = useRouter();
    const size = useResize();
    const currentGenre = useParams<{ genre: string }>()!.genre;
    

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
        if (genres.status === "succeeded") {
            if (currentGenre !== "all" && variant !== "admin") {
                /* const isExistingGenre = genres.genres.find(genre => genre.genreNameEng.toLowerCase() === currentGenre.toLowerCase());*/
               const isExistingGenre = CLIENT_GENRE_LIST[currentGenre as keyof typeof CLIENT_GENRE_LIST]
                if (isExistingGenre) {
                    setFilterParams({
                        ...INIT_PARAMS_FOR_FILTERS,
                        genreId: isExistingGenre
                    })
                } else {
                    router.push('/404')
                }
            }
            if (currentGenre === "all" || variant === "admin") {
                setFilterParams(INIT_PARAMS_FOR_FILTERS)
            }
        }
    }, [genres,currentGenre])



    useEffect(() => {
        const amountItemsOnPage = MOVIE_LIST_SIZES
            .sort((a, b) => b.resol - a.resol)
            .find(elem => elem.resol <= size)?.items || 5;

        const pageSize = amountItemsOnPage * MOVIE_ROWS
        setAmountMovieOnPage(pageSize)
    }, [])

    useEffect(() => {
        if (amountMovieOnPage) {
            fetchMovies(filterParams, INIT_MOVIE_PAGE, amountMovieOnPage)
                .then(response => {
                    setFilteredMovie(response);
                    setCurrentMoviePage({ ...INIT_MOVIE_PAGE });
                })
                .catch(error => console.log(error));
        }
    }, [filterParams])

    useEffect(() => {
        if (currentMoviePage.page) {
            fetchMovies(filterParams, currentMoviePage, amountMovieOnPage)
                .then((response) => setFilteredMovie({ ...filteredMovie, rows: [...filteredMovie.rows, ...response.rows ] }))
                .catch(error => console.log(error))
        }
    }, [currentMoviePage])

    const transformedCountries = useTransformCountries(countries.countries);
    const transformedGenres = useTransformGenres("second" ,genres.genres);

    return {
        filteredMovie,
        handleChangeFilterParams,
        clearFiltersWithoutSort,
        genres,
        countries,
        currentGenre,
        currentSortVariant: filterParams.orderBy,
        filterParams,
        changeCurrentMoviePage,
        transformedCountries,
        transformedGenres
    }
}
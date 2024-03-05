import { useRouter } from "next/router";
import {  useEffect, useState } from "react"
import { MovieAPI } from "../../../api/MovieAPI";
import { Country, Genre, Movie, MovieFilterParams } from "../../../models/types";
import { MOVIE_LIST_SIZES } from "../../Movie/MovieList/constants/constants";
import { useResize } from "../../../hooks/useResize";

type InitParamsForFilters = Pick<MovieFilterParams, "ratingKinopoisk" | "ratingKinopoiskVoteCount" | "orderBy" >
type MoviePage = Pick<MovieFilterParams, "page">
export type FilterParams = Omit<Partial<MovieFilterParams>, "size" | keyof MoviePage> & InitParamsForFilters

const INIT_PARAMS_FOR_FILTERS:InitParamsForFilters = {
    ratingKinopoisk: 0,
    ratingKinopoiskVoteCount: 0,
    orderBy: "ratingKinopoisk",
}

const INIT_MOVIE_PAGE: MoviePage = {
    page: 0
};

const MOVIE_ROWS = 3;

const fetchMovies = (params: FilterParams, page: MoviePage, movieAmount: number) => {
        return  MovieAPI.getFilteredMovie({ ...params, ...page, size: movieAmount })
}
export default function useFilterWatchPage({ variant = "genrePage" }: {variant?: "admin" | "genrePage"}) {
    const [genreList, setGenreList] = useState<Genre[]>([]);
    const [countryList, setCountyList] = useState<Country[]>([]);
    const [filterParams, setFilterParams] = useState<FilterParams>({} as FilterParams);
    const [filteredMovie, setFilteredMovie] = useState<Movie[]>([]);
    const [currentMoviePage, setCurrentMoviePage] = useState(INIT_MOVIE_PAGE);
    const [amountMovieOnPage, setAmountMovieOnPage] = useState(0)
    
    const router = useRouter();
    const size = useResize();
    const currentGenre = router.query.genre as string;

    const handleChangeFilterParams = (filterKey: keyof FilterParams, filterValue: string | number) => {
            setFilterParams({ ...filterParams, [filterKey]: filterValue })
    }
    
    const clearFiltersWithoutSort = () => {
        setFilterParams({ ...INIT_PARAMS_FOR_FILTERS });
    }

    const changeCurrentMoviePage = () => {
        setCurrentMoviePage((currentMoviePage) => ({ ...currentMoviePage, page: ++currentMoviePage.page}) )
    }

    useEffect(() => {
        const fetchGenreList = async () => {
            try {
                const genres = await MovieAPI.getGenreList();
                setGenreList(genres)
            } catch (error) {
                console.log(error)
            }
        }
        fetchGenreList();
    }, [])

    useEffect(() => {
        if (!!genreList.length) {
            if (currentGenre !== "all" && variant !== "admin") {
                const isExistingGenre = genreList.find(genre => genre.genreNameEng.toLowerCase() === currentGenre.toLowerCase());
                if (isExistingGenre) {
                    setFilterParams({
                        ...INIT_PARAMS_FOR_FILTERS,
                        genreId: isExistingGenre.id
                    })
                } else {
                    router.push('/404')
                }
            }
            if (currentGenre === "all" || variant === "admin") {
                setFilterParams(INIT_PARAMS_FOR_FILTERS)
            }
        }
    }, [genreList])


    useEffect(() => {
        const fetchCountry = async () => {
            try {
                const countries = await MovieAPI.getCountryList();
                setCountyList(countries)
            } catch (error) {
                console.log(error)
            }
        }
        fetchCountry();
    }, [])

    useEffect(() => {
        const amountItemsOnPage = MOVIE_LIST_SIZES
            .sort((a, b) => b.resol - a.resol)
            .find(elem => elem.resol <= size)!
            .items

        const pageSize = amountItemsOnPage * MOVIE_ROWS
        setAmountMovieOnPage(pageSize)
    },[])

    useEffect(() => {
        if (amountMovieOnPage) {
            fetchMovies(filterParams, INIT_MOVIE_PAGE, amountMovieOnPage)
                .then(response => {
                    setFilteredMovie(response.rows);
                    setCurrentMoviePage({ ...INIT_MOVIE_PAGE } );
                })
                .catch(error => console.log(error));
        }
    }, [filterParams])

    useEffect(() => {
        if (currentMoviePage.page) {
            fetchMovies(filterParams, currentMoviePage, amountMovieOnPage)
                .then((response) => setFilteredMovie([...filteredMovie, ...response.rows]))
                .catch(error => console.log(error))
        }
    }, [currentMoviePage])

    return {
        filteredMovie,
        handleChangeFilterParams,
        clearFiltersWithoutSort,
        genreList,
        countryList,
        currentGenre,
        currentSortVariant: filterParams.orderBy,
        filterParams,
        changeCurrentMoviePage
    }
}
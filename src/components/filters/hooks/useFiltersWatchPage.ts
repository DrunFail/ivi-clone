import { useRouter } from "next/router";
import {  useEffect, useState } from "react"
import { MovieAPI } from "../../../api/MovieAPI";
import { Country, Genre, Movie } from "../../../models/types";

const initParamsForFilter:FilterParams = {
    page: 0,
    genreId: null,
    countryId: null,
    director: null,
    actor: null,
    directorId: null,
    actorId: null,
    ratingKinopoisk: 5,
    ratingKinopoiskVoteCount: 500000,
    size: 18,
    orderBy: "ratingKinopoisk",

}
export interface FilterParams {
    page: number,
    genreId: number | null,
    countryId: number | null,
    director: string | null,
    actor: string | null,
    directorId: number | null,
    actorId: number | null,
    orderBy: "nameRu" | "year" | "ratingKinopoiskVoteCount" | "ratingKinopoisk",
    ratingKinopoisk: number,
    ratingKinopoiskVoteCount: number,
    size: number
}


export default function useFilterWatchPage({ variant = "genrePage" }: {variant?: "admin" | "genrePage"}) {
    const [genreList, setGenreList] = useState<Genre[]>([]);
    const [countryList, setCountyList] = useState<Country[]>([]);
    const [filterParams, setFilterParams] = useState<FilterParams>(initParamsForFilter);
    const [filteredMovie, setFilteredMovie] = useState<Movie[]>([]);
    const router = useRouter();
    const currentGenre = router.query.genre as string;

    const handleChangeFilterParams = (filterKey: string, filterValue: number | string) => {
            setFilterParams({ ...filterParams, [filterKey]: filterValue })
    }

    const clearFiltersWithoutSort = () => {
        setFilterParams({ ...filterParams, ...initParamsForFilter })
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
        if (router.isReady && genreList) {
            const currentGenr = router.query.genre as string;
            let pageSize: number = 18;
            if (window.innerWidth <= 1280) pageSize = 18;
            if (window.innerWidth <= 992) pageSize = 15;
            if (window.innerWidth <= 768) pageSize = 9;

            let currentGenreId: number;

            if (currentGenr !== "all" && variant !== "admin") {

                const isExistingGenre = genreList.find(item => item.genreNameEng.toLowerCase() === currentGenr.toLowerCase());
                if (isExistingGenre) {
                    currentGenreId = isExistingGenre.id
                    setFilterParams({ ...initParamsForFilter, size: pageSize, genreId: currentGenreId })
                } else {
                    router.push('/404')
                }
            }
            if (currentGenr === "all" || variant === "admin") {
                setFilterParams({ ...initParamsForFilter, size: pageSize })
            }
        }
    }, [router.isReady, genreList])

    useEffect(() => {
        const fetchMovies = async (params: FilterParams) => {
            try {
                const response = await MovieAPI.getFilteredMovie(params)
                setFilteredMovie(response.rows)
            } catch (error) {
                console.log(error)
            }
        }
        fetchMovies(filterParams)
    }, [filterParams])

    return {
        filteredMovie,
        handleChangeFilterParams,
        clearFiltersWithoutSort,
        genreList,
        countryList,
        currentGenre,
        currentSortVariant: filterParams?.orderBy,
        filterParams
    }
}
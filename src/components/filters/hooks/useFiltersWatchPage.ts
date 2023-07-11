import { useRouter } from "next/router";
import {  useEffect, useState } from "react"
import { axiosAuth } from "../../../lib/axios";
import { IGenreObject, IMovieFromMoviesList } from "../../../models";

const initParamsForFilter:FilterParams = {
    page: 0,
    genreId: 0,
    countryId: 0,
    director: "",
    actor: "",
    directorId: 0,
    actorId: 0,
    ratingKinopoisk: 5,
    ratingKinopoiskVoteCount: 500000,
    size: 18,
    orderBy: "ratingKinopoisk",

}
export interface FilterParams {
    page: number,
    genreId: number,
    countryId: number,
    director: string,
    actor: string,
    directorId: number,
    actorId: number,
    orderBy: "nameRu" | "year" | "ratingKinopoiskVoteCount" | "ratingKinopoisk",
    ratingKinopoisk: number,
    ratingKinopoiskVoteCount: number,
    size: number
}


export default function useFilterWatchPage({ variant = "genrePage" }: {variant?: "admin" | "genrePage"}) {
    const [genreList, setGenreList] = useState<IGenreObject[]>([]);
    const [countryList, setCountyList] = useState([]);
    const [filterParams, setFilterParams] = useState<FilterParams>(initParamsForFilter);
    const [filteredMovie, setFilteredMovie] = useState<IMovieFromMoviesList[]>([]);
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
                const response = await axiosAuth.get('/api/movies/genres')
                setGenreList(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchGenreList();
    }, [])

    useEffect(() => {
        const fetchCountry = async () => {
            try {
                const response = await axiosAuth.get('/api/movies/countries')
                setCountyList(response.data)
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
        const fetchMovies = async (params: string) => {
            try {
                const res = await axiosAuth.get(`/api/movies/filters?${params}`)
                setFilteredMovie(res.data.rows)
            } catch (error) {
                console.log(error)
            }
        }
        if (filterParams) {
            const params = new URLSearchParams(filterParams);
            if (!filterParams.genreId) params.delete("genreId")
            if (!filterParams.countryId) params.delete("countryId")
            if (!filterParams.directorId) params.delete("directorId")
            if (!filterParams.actorId) params.delete("actorId")
            if (!filterParams.director) params.delete("director")
            if (!filterParams.actor) params.delete("actor")
            fetchMovies(params.toString())
        }
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
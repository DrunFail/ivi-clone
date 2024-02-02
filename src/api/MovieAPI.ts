import { axiosAuth } from "../lib/axios";
import { ResponseWithCountAndRows } from "../models/response";
import { Movie, MovieById } from "../models/types";


export const MovieAPI = {
    getMovieById: async (movieId: string) => {
        const response = await axiosAuth.request<MovieById>({
            url: `/api/movies/about/${movieId}`,
            method: "get"
        })
        return response.data
    },
    getMovieListByName: async (movieName: string) => {
        const response = await axiosAuth.request({
            url: `/api/movies/name`,
            method: "get",
            params: {
                nameRu: movieName
            }
        })
        return response.data
    },
    getMovieAll: async () => {
        const response = await axiosAuth.request({
            url: `/api/movies`,
            method: "get"
        })
        return response.data.rows
    },
    getFilteredMovie: async (filterParams: unknown) => {
        const response = await axiosAuth.request<ResponseWithCountAndRows<Movie>>({
            url: `/api/movies/filters`,
            method: "get",
            params: filterParams
        })
        return response.data
    },
    updateMovie: async (movieId: string) => {
        const response = await axiosAuth.request({
            url: `/api/movies/about/${movieId}`,
            method: "put"
        })
        return response
    },
    deleteMovie: async (movieId: string) => {
        const response = await axiosAuth.request({
            url: `/api/movies/about/${movieId}`,
            method: "delete"
        })
        return response
    },
    getMovieStaff: async (movieId: string) => {
        const response = await axiosAuth.request({
            url: `/api/movies/about/${movieId}/staff`,
            method: "get"
        })
        return response.data
    },
    getGenreList: async () => {
        const response = await axiosAuth.request({
            url: `/api/movies/genres`,
            method: "get"
        })
        return response.data
    },
    getGenreById: async (genreId:number) => {
        const response = await axiosAuth.request({
            url: `/api/movies/genres/${genreId}`,
            method: "get"
        })
        return response
    },
    deleteGenreById: async (genreId: number) => {
        const response = await axiosAuth.request({
            url: `/api/movies/genres/${genreId}`,
            method: "delete"
        })
        return response
    },
    updateGenreById: async (genreId: number) => {
        const response = await axiosAuth.request({
            url: `/api/movies/genres/${genreId}`,
            method: "put"
        })
        return response
    },
    getCountryList: async () => {
        const response = await axiosAuth.request({
            url: `/api/movies/countries`,
            method: "get"
        })
        return response
    },
    getCountryById: async (countryId: number) => {
        const response = await axiosAuth.request({
            url: `/api/movies/countries/${countryId}`,
            method: "get"
        })
        return response
    },
    deleteCountryById: async (countryId: number) => {
        const response = await axiosAuth.request({
            url: `/api/movies/countries/${countryId}`,
            method: "delete"
        })
        return response
    },
    updateCountryById: async (countryId: number) => {
        const response = await axiosAuth.request({
            url: `/api/movies/countries/${countryId}`,
            method: "put"
        })
        return response
    }
}
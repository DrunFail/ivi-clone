import { axiosAuth } from "../lib/axios";


export const MovieAPI = {
    getMovieById: async (movieId: string) => {
        const response = await axiosAuth.request({
            url: `/api/movies/about/${movieId}`,
            method: "GET"
        })
        return response.data
    },
    getMovieListByName: async (movieName: string) => {
        const response = await axiosAuth.request({
            url: `/api/movies/name`,
            method: "GET",
            params: {
                nameRu: movieName
            }
        })
        return response.data
    },
    getMovieAll: async () => {
        const response = await axiosAuth.request({
            url: `/api/movies`,
            method: "GET"
        })
        return response.data.rows
    },
    getFilteredMovie: async (filterParams: unknown) => {
        const response = await axiosAuth.request({
            url: `/api/movies/filters`,
            method: "GET",
            params: filterParams
        })
        return response.data
    },
    updateMovie: async (movieId: string) => {
        const response = await axiosAuth.request({
            url: `/api/movies/about/${movieId}`,
            method: "PUT"
        })
        return response
    },
    deleteMovie: async (movieId: string) => {
        const response = await axiosAuth.request({
            url: `/api/movies/about/${movieId}`,
            method: "DELETE"
        })
        return response
    },
    getMovieStaff: async (movieId: string) => {
        const response = await axiosAuth.request({
            url: `/api/movies/about/${movieId}/staff`,
            method: "GET"
        })
        return response.data
    }
}
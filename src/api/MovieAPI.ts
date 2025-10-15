import { axiosAuth } from '../lib/axios';
import { ResponseWithCountAndRows } from '../models/response';
import { Country, Genre, Movie, MovieById, MovieFilterParams, MovieSuggest } from '../models/types';

export const MovieAPI = {
    getMovieById: async (movieId: string) => {
        const response = await axiosAuth.request<MovieById>({
            url: `/api/movies/about/${movieId}`,
            method: 'get',
        });
        return response.data;
    },
    getMovieListByName: async (movieName: string) => {
        const response = await axiosAuth.request<MovieSuggest[]>({
            url: `/api/movies/name`,
            method: 'get',
            params: {
                nameRu: movieName,
            },
        });
        return response.data;
    },
    getMovieAll: async ({ size, page }: { size?: number; page?: number }) => {
        const response = await axiosAuth.request<ResponseWithCountAndRows<Movie>>({
            url: `/api/movies`,
            method: 'get',
            params: { size, page },
        });
        return response.data;
    },
    getFilteredMovie: async (filterParams: Partial<MovieFilterParams>) => {
        const response = await axiosAuth.request<ResponseWithCountAndRows<Movie>>({
            url: `/api/movies/filters`,
            method: 'get',
            params: filterParams,
        });
        return response.data;
    },
    updateMovie: async (movieId: number, newData: { nameRu: string; nameOriginal: string }) => {
        const response = await axiosAuth.request({
            url: `/api/movies/about/${movieId}`,
            method: 'put',
            data: newData,
        });
        return response;
    },
    deleteMovie: async (movieId: number) => {
        const response = await axiosAuth.request({
            url: `/api/movies/about/${movieId}`,
            method: 'delete',
        });
        return response;
    },
    getMovieStaff: async (movieId: string) => {
        const response = await axiosAuth.request({
            url: `/api/movies/about/${movieId}/staff`,
            method: 'get',
        });
        return response.data;
    },
    getGenreList: async () => {
        const response = await axiosAuth.request<Genre[]>({
            url: `/api/movies/genres`,
            method: 'get',
        });
        return response.data;
    },
    getGenreById: async (genreId: number) => {
        const response = await axiosAuth.request({
            url: `/api/movies/genres/${genreId}`,
            method: 'get',
        });
        return response;
    },
    deleteGenreById: async (genreId: number) => {
        const response = await axiosAuth.request({
            url: `/api/movies/genres/${genreId}`,
            method: 'delete',
        });
        return response;
    },
    updateGenreById: async (genreId: number, newGenreData: { genreNameRu: string; genreNameEng: string }) => {
        const response = await axiosAuth.request({
            url: `/api/movies/genres/${genreId}`,
            method: 'put',
            data: newGenreData,
        });
        return response;
    },
    getCountryList: async () => {
        const response = await axiosAuth.request<Country[]>({
            url: `/api/movies/countries`,
            method: 'get',
        });
        return response.data;
    },
    getCountryById: async (countryId: number) => {
        const response = await axiosAuth.request({
            url: `/api/movies/countries/${countryId}`,
            method: 'get',
        });
        return response;
    },
    deleteCountryById: async (countryId: number) => {
        const response = await axiosAuth.request({
            url: `/api/movies/countries/${countryId}`,
            method: 'delete',
        });
        return response;
    },
    updateCountryById: async (countryId: number) => {
        const response = await axiosAuth.request({
            url: `/api/movies/countries/${countryId}`,
            method: 'put',
        });
        return response;
    },
};

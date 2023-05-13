import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { AppDispatch, RootState } from "./createStore";
import catchError from "../utils/catchError";
import { IMovie } from "../models";
import getMovies from "../services/getMovies";

interface IMoviesState {
    entities: IMovie[];
    isLoading: boolean;
    error: string | null;
}

const initialState: IMoviesState = {
    entities: [],
    isLoading: true,
    error: null
};

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        moviesRequested: (state: IMoviesState): void => {
            state.isLoading = true;
        },
        moviesReceived: (
            state: IMoviesState,
            action: PayloadAction<IMovie[]>
        ): void => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        moviesRequestFailed: (
            state: IMoviesState,
            action: PayloadAction<string>
        ): void => {
            state.error = action.payload;
            state.isLoading = false;
        },
        loading(state: IMoviesState, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        }
    }
});

const { reducer: moviesReducer, actions } = moviesSlice;
export const { moviesRequested, moviesReceived, moviesRequestFailed, loading } =
    actions;

/** Функция выполняет загрузку базы данных фильмов и сохраняет полученный результат в Redux, либо отображает ошибку. */
export const loadMoviesList =
    () =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(moviesRequested());
        try {
            const movies = await getMovies();
            if (movies) {
                dispatch(moviesReceived(Object.values(movies)));
            } else {
                dispatch(moviesReceived([]));
            }
        } catch (e: unknown) {
            const error = e as AxiosError;
            dispatch(moviesRequestFailed(error.message));
            catchError(error);
        }
    };

/** Функция возвращает все фильмы из базы данных. */
export const getMoviesList =
    () =>
    (state: RootState): IMovie[] =>
        state.movies.entities;

/** Функция возвращает массив из всех жанров, встречающихся в базе данных фильмов. */
export const getGenresList =
    () =>
    (state: RootState): string[] => {
        const genresWithDoubles: string[] = [];
        state.movies.entities.forEach((item) => {
            genresWithDoubles.push(...item.genres);
        });

        const genres = Array.from(new Set(genresWithDoubles));

        return genres;
    };

/** Функция возвращает массив из всех жанров, встречающихся в базе данных фильмов. */
export const getCountriesList =
    () =>
    (state: RootState): string[] => {
        const countriesWithDoubles: string[] = [];
        state.movies.entities.forEach((item) => {
            countriesWithDoubles.push(item.country);
        });

        const countries = Array.from(new Set(countriesWithDoubles));

        return countries;
    };

/** Функция возвращает массив фильмов, отфильтрованный по жанру, принятому в качестве аргумента. */
export const getMoviesListByGenre =
    (genre: string) =>
    (state: RootState): IMovie[] =>
        state.movies.entities.filter((movie) => {
            const convertGenres = movie.genres.map((genre) =>
                genre.trim().toLowerCase()
            );
            return convertGenres.includes(genre.trim().toLowerCase());
        });

/** Функция возвращает статус загрузки данных. */
export const getMoviesLoadingStatus =
    () =>
    (state: RootState): boolean =>
        state.movies.isLoading;

export default moviesReducer;

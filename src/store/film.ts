import { IMovie, IMovieOne } from "../models";
import { RootState } from "./createStore";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MoviePageData } from "../models/global";
export const LOAD_FILM = "LOAD_FILM";

interface IInit {
    film: MoviePageData| null;
}

const initialState: IInit = {
    film: null
};

const filmSlice = createSlice({
    name: "film",
    initialState,
    reducers: {
        filmAction(state: IInit, action: PayloadAction<MoviePageData>) {
            state.film = action.payload;
        }
    }
});

const { reducer: filmReducer, actions } = filmSlice;
export const getFilm =
    () =>
        (state: RootState): MoviePageData | null =>
            state.film.film;

export const { filmAction } = actions;
export default filmReducer;

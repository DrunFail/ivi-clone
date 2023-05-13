import { combineReducers, configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies";
import actorsReducer from "./actors";
import filmReducer from "./film";
import { langReducer } from "./switchLang";
import personReducer from "./person";
import loaderReducer from "./loader";
import trailerReducer from "./trailer";
import genresReducer from "./genres";
import countriesReducer from "./countries";

const rootReduser = combineReducers({
    movies: moviesReducer,
    actors: actorsReducer,
    film: filmReducer,
    lang: langReducer,
    person: personReducer,
    loader: loaderReducer,
    trailer: trailerReducer,
    genres: genresReducer,
    countries: countriesReducer
});

const store = configureStore({
    reducer: rootReduser
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

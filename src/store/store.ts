import { configureStore } from "@reduxjs/toolkit";
import genresReducer from "./slices/genresSlice";
import countriesReducer from "./slices/countriesSlice";
import { langReducer } from "./slices/switchLang";

const store = configureStore({
    reducer: {
        genres: genresReducer,
        countries: countriesReducer,
        /* eslint-disable */
        //@ts-ignore
        lang: langReducer

    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
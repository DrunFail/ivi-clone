import { configureStore } from "@reduxjs/toolkit";
import genresReducer from "./slices/genresSlice";
import countriesReducer from "./slices/countriesSlice";
import { langReducer } from "./slices/switchLang";

export  const store = configureStore({
    reducer: {
        genres: genresReducer,
        countries: countriesReducer,
        lang: langReducer

    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

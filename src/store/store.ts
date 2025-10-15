import { configureStore } from '@reduxjs/toolkit';
import genresReducer from './slices/genresSlice';
import countriesReducer from './slices/countriesSlice';

const store = configureStore({
    reducer: {
        genres: genresReducer,
        countries: countriesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { Genre } from "../../models/types"
import { MovieAPI } from "../../api/MovieAPI"
import { RootState } from "../store"

type GenresInitState = {
    status: "idle" | "loading" | "succeeded" | "failed",
    error: string | null,
    genres: Genre[]
}


const initialState: GenresInitState = {
    status: "idle",
    genres: [],
    error: null
}

export const fetchGenres = createAsyncThunk('genres/fetchGenres', async () => {
    return await MovieAPI.getGenreList()
})


export const genresSlice = createSlice({
    name: "genres",
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(fetchGenres.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(fetchGenres.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.genres = action.payload
            })
            .addCase(fetchGenres.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message!
            })
    }
})
export const selectAllGenres = (state: RootState) => state.genres
export default genresSlice.reducer
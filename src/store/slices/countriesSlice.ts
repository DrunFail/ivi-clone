import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { Country } from "../../models/types"
import { MovieAPI } from "../../api/MovieAPI"
import { RootState } from "../store"

type CountriesInitState = {
    status: "idle" | "loading" | "succeeded" | "failed",
    error: string | null,
    countries: Country[]
}


const initialState: CountriesInitState = {
    status: "idle",
    countries: [],
    error: null
}

export const fetchCountries = createAsyncThunk('countries/fetchCountries', async () => {
    return await MovieAPI.getCountryList()
})


export const countriesSlice = createSlice({
    name: "countries",
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(fetchCountries.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(fetchCountries.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.countries = action.payload
            })
            .addCase(fetchCountries.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message!
            })
    }
})
export const selectAllCountries = (state: RootState) => state.countries
export default countriesSlice.reducer
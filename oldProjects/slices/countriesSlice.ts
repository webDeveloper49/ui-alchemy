import { createSlice } from "@reduxjs/toolkit";
import { getAllCountries } from "../services/services";

interface Country {
  name: { common: string; official: string };
  capital?: string[];
  region: string;
  timezones: string[];
  flags: { svg: string; png: string };
}

interface CountriesState {
  countrieslist: Country[];
}

const initialState: CountriesState = {
  countrieslist: []
};

export const countriesSlice = createSlice({
  name: 'countriesAPI',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCountries.fulfilled, (state, action) => {
      state.countrieslist = action.payload;
    });
  }
});

export default countriesSlice.reducer;

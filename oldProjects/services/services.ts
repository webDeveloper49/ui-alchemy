import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Restcountries v3.1 (v2 is deprecated)
export const getAllCountries = createAsyncThunk("/getallcountries", async () => {
  const response = await axios.get("https://restcountries.com/v3.1/all");
  return response.data;
});

// InfoAsyncActivity: use JSONPlaceholder users (public API, replaces localhost:4000)
export const getAllInfo = createAsyncThunk("/getAllInfo", async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users");
  return response.data;
});

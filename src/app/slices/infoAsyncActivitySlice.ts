import { createSlice } from "@reduxjs/toolkit";
import { getAllInfo } from "../services/services";

interface InfoItem {
  [key: string]: unknown;
}

interface InfoAsyncActivityState {
  info: InfoItem[];
}

const initialState: InfoAsyncActivityState = {
  info: []
};

export const infoAsyncActivitySlice = createSlice({
  name: "infoAsyncActivity",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllInfo.fulfilled, (state, action) => {
      state.info = action.payload;
    });
  }
});

export default infoAsyncActivitySlice.reducer;

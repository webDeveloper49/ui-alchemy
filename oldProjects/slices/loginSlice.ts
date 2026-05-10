import { createSlice } from '@reduxjs/toolkit';

interface LoginState {
  loginStatus: boolean;
}

const initialState: LoginState = {
  loginStatus: false  // Fix: was "false" (string) — must be boolean
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    changeStatus: (state) => {
      state.loginStatus = !state.loginStatus;
    }
  }
});

export const { changeStatus } = loginSlice.actions;
export default loginSlice.reducer;

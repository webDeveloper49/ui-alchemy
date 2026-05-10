import { createSlice } from "@reduxjs/toolkit";

interface StudentInfoState {
  age: number;
}

const initialState: StudentInfoState = {
  age: 18
};

export const studentInfoSlice = createSlice({
  name: "studentInfo",  // Fix: was "StudentInfo" — must match store key
  initialState,
  reducers: {
    incage: (state) => { state.age++; },
    decage: (state) => { state.age--; },  // Fix: was "deccage" (typo)
    resetage: (state) => { state.age = 18; },
  }
});

export const { incage, decage, resetage } = studentInfoSlice.actions;
export default studentInfoSlice.reducer;

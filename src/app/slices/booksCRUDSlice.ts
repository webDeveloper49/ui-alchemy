import { createSlice } from "@reduxjs/toolkit";
import { getBooks, addBook, deleteBook, updateBook } from '../services/bookservices';

interface Book {
  id: number;
  title: string;
  author: string;
}

interface BooksCRUDState {
  books: Book[];
}

const initialState: BooksCRUDState = {
  books: []
};

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.fulfilled, (state, action) => {
        state.books = action.payload;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.books.push(action.payload);
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        const index = state.books.findIndex((book) => book.id === action.payload);
        if (index !== -1) state.books.splice(index, 1);
      })
      .addCase(updateBook.fulfilled, (state, action) => {
        const index = state.books.findIndex((book) => book.id === action.payload.id);
        if (index !== -1) state.books.splice(index, 1, action.payload);
      });
  }
});

export default bookSlice.reducer;

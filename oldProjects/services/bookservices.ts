import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Using JSONPlaceholder as a public REST demo backend (mirrors localhost:4000/books behavior)
const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

interface Book {
  id?: number;
  title: string;
  author: string;
}

export const getBooks = createAsyncThunk("books/getBooks", async () => {
  const response = await axios.get<{ id: number; title: string; body: string }[]>(BASE_URL);
  // Map JSONPlaceholder's `body` field → `author` for our Book model
  return response.data.slice(0, 20).map((post) => ({
    id: post.id,
    title: post.title,
    author: `User #${post.id % 10 + 1}`,
  }));
});

export const addBook = createAsyncThunk("books/addBook", async (newBook: Book) => {
  const response = await axios.post<Book>(BASE_URL, newBook);
  // JSONPlaceholder always returns id:101, so generate a unique one
  return { ...newBook, id: Date.now() };
});

export const deleteBook = createAsyncThunk("books/deleteBook", async (id: number) => {
  await axios.delete(`${BASE_URL}/${id}`);
  return id;
});

export const updateBook = createAsyncThunk("books/updateBook", async (book: Book & { id: number }) => {
  const response = await axios.put<Book>(`${BASE_URL}/${book.id}`, book);
  return { ...book }; // Return the book we sent (JSONPlaceholder mirrors limited data)
});

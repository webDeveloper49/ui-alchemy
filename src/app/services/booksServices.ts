import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/posts' }),
  endpoints: (builder) => ({
    getBooks: builder.query({ query: () => '' }),
    getBookById: builder.query({ query: (id) => `/${id}` }),
    addBook: builder.mutation({
      query: (body) => ({ url: '/', method: 'POST', body })
    }),
    deleteBookById: builder.mutation({
      query: (id) => ({ url: `/${id}`, method: 'DELETE' })
    }),
  }),
});

export const { useGetBooksQuery, useGetBookByIdQuery, useAddBookMutation, useDeleteBookByIdMutation } = booksApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Using JSONPlaceholder as stand-in for local json-server (localhost:4000 won't work in production)
export const fooditemApi = createApi({
  reducerPath: 'fooditemApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getFoodItems: builder.query({ query: () => `posts?_limit=10` }),
    getSales: builder.query({ query: () => `albums?_limit=10` }),
    addBill: builder.mutation({
      query: (payload) => ({
        url: '/posts',
        method: 'POST',
        body: payload,
        headers: { 'Content-type': 'application/json; charset=UTF-8' }
      })
    })
  }),
});

export const { useGetFoodItemsQuery, useAddBillMutation, useGetSalesQuery } = fooditemApi;

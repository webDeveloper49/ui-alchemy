import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authApi } from '../api/authApi'
import authReducer from '../app/authSlice'
import themeReducer from '../app/themeSlice'
import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux'


export const store = configureStore({
  reducer: {
    auth:                 authReducer,
    [authApi.reducerPath]: authApi.reducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch          = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
setupListeners(store.dispatch)
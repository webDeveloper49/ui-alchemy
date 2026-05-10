import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { authApi } from '../api/authApi';
import authReducer from '../app/authSlice';
import themeReducer from '../app/themeSlice';
import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux';

// import counterReducer from "./slices/counterSlice";
// import todolistReducer from "./slices/todolistSlice";
// import loginReducer from "./slices/loginSlice";
// import countriesReducer from "./slices/countriesSlice";
// import cricketScoreReducer from "./slices/cricketscoreSlice";
// import studentInfoReducer from "./slices/studentInfoSlice";
// import infoAsyncActivityReducer from "./slices/infoAsyncActivitySlice";
// import billGenerationReducer from "./slices/billGenerationSlice";  // Fix: was commented out
// import BooksCRUDReducer from "./slices/booksCRUDSlice";

export const store = configureStore({
  reducer: {
    auth:                  authReducer,
    [authApi.reducerPath]: authApi.reducer,
    theme:                 themeReducer,

    // counter:               counterReducer,
    // todolist:              todolistReducer,
    // login:                 loginReducer,
    // countries:             countriesReducer,
    // cricketscore:          cricketScoreReducer,
    // studentInfo:           studentInfoReducer,   // key is studentInfo (lowercase s)
    // infoAsyncActivity:     infoAsyncActivityReducer,
    // billGeneration:        billGenerationReducer, // Fix: was commented out
    // booksCRUD:             BooksCRUDReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch             = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
setupListeners(store.dispatch);

// src/store/auth/authSlice.ts
//
// Manages the global auth state:
//   • user        — serialisable user object (null when signed out)
//   • initialising — true until onAuthStateChanged fires on boot
//   • error       — last auth error string (cleared on each new attempt)
//
// The slice is kept thin: it only stores state.
// Mutations (sign in, sign up …) live in authApi.ts (RTK Query).
// onAuthStateChanged is wired in main.tsx / App.tsx via the initAuth thunk.

import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import { onAuthStateChanged, type User } from "firebase/auth";
import type { AuthState, SerializableUser } from "../models/Auth.types";

import { auth } from "../firebase/firebase";
import type { RootState } from "./store";
import { authApi } from "../api/authApi";




// ── Helper ────────────────────────────────────────────────────────────────────
const toSerializable = (user: User): SerializableUser => ({
  uid:           user.uid,
  email:         user.email,
  displayName:   user.displayName,
  photoURL:      user.photoURL,
  emailVerified: user.emailVerified,
});

// ── Initial state ─────────────────────────────────────────────────────────────
const initialState: AuthState = {
  user:         null,
  initialising: true,
  error:        null,
  roles: [],
  tenantId: null,
};

// ── Thunk: subscribe to Firebase auth state on app boot ───────────────────────
// Dispatch this once in main.tsx / App.tsx:  dispatch(initAuth())
export const initAuth = createAsyncThunk<void, void, { state: RootState }>(
  "auth/init",
  (_, { dispatch }) => {
    onAuthStateChanged(auth, (firebaseUser) => {
      dispatch(
        firebaseUser
          ? authSlice.actions.setUser(toSerializable(firebaseUser))
          : authSlice.actions.clearUser()
      );
    });
  }
);

// ── Slice ─────────────────────────────────────────────────────────────────────
const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    setUser(state, action: PayloadAction<SerializableUser>) {
      state.user         = action.payload;
      state.initialising = false;
      state.error        = null;
    },
    clearUser(state) {
      state.user         = null;
      state.initialising = false;
      state.error        = null;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    clearError(state) {
      state.error = null;
    },
  },

  // ── React to RTK Query mutations via extraReducers ────────────────────────
  extraReducers: (builder) => {
    // ── signIn ──────────────────────────────────────────────────────────────
    builder
      .addMatcher(authApi.endpoints.signIn.matchPending, (state) => {
        state.error = null;
      })
      .addMatcher(authApi.endpoints.signIn.matchFulfilled, (state, { payload }) => {
        state.user  = payload;
        state.error = null;
      })
      .addMatcher(authApi.endpoints.signIn.matchRejected, (state, { error }) => {
        state.error = error.message ?? "Sign-in failed.";
      });

    // ── signUp ──────────────────────────────────────────────────────────────
    builder
      .addMatcher(authApi.endpoints.signUp.matchPending, (state) => {
        state.error = null;
      })
      .addMatcher(authApi.endpoints.signUp.matchFulfilled, (state, { payload }) => {
        state.user  = payload;
        state.error = null;
      })
      .addMatcher(authApi.endpoints.signUp.matchRejected, (state, { error }) => {
        state.error = error.message ?? "Sign-up failed.";
      });

    // ── googleSignIn ─────────────────────────────────────────────────────────
    builder
      .addMatcher(authApi.endpoints.googleSignIn.matchPending, (state) => {
        state.error = null;
      })
      .addMatcher(authApi.endpoints.googleSignIn.matchFulfilled, (state, { payload }) => {
        state.user  = payload;
        state.error = null;
      })
      .addMatcher(authApi.endpoints.googleSignIn.matchRejected, (state, { error }) => {
        state.error = error.message ?? "Google sign-in failed.";
      });

    // ── logOut ───────────────────────────────────────────────────────────────
    builder
      .addMatcher(authApi.endpoints.logOut.matchFulfilled, (state) => {
        state.user  = null;
        state.error = null;
      });
  },
});

export const { setUser, clearUser, setError, clearError } = authSlice.actions;
export default authSlice.reducer;

// ── Selectors ─────────────────────────────────────────────────────────────────
export const selectUser         = (state: RootState): SerializableUser | null => state.auth.user;
export const selectIsLoggedIn   = (state: RootState): boolean => state.auth.user !== null;
export const selectInitialising = (state: RootState): boolean => state.auth.initialising;
export const selectAuthError    = (state: RootState): string | null => state.auth.error;
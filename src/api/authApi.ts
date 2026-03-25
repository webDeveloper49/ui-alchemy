// src/store/auth/authApi.ts
//
// RTK Query service that wraps Firebase Auth SDK calls.
// Each mutation returns a SerializableUser (or void) so Redux stays serialisable.
//
// Mutations available:
//   signIn(email, password)   → SerializableUser
//   signUp(email, password)   → SerializableUser
//   googleSignIn()            → SerializableUser
//   forgotPassword(email)     → void
//   logOut()                  → void

import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
  signOut,
  type User,
} from "firebase/auth";
import type { ForgotPasswordArgs, SerializableUser, SignInArgs, SignUpArgs } from "../models/Auth.types";
import { auth, googleProvider } from "../firebase/firebase";



// ── Helper: strip non-serialisable Firebase User fields ───────────────────────
const toSerializable = (user: User): SerializableUser => ({
  uid:           user.uid,
  email:         user.email,
  displayName:   user.displayName,
  photoURL:      user.photoURL,
  emailVerified: user.emailVerified,
});

// ── API slice ─────────────────────────────────────────────────────────────────
export const authApi = createApi({
  reducerPath: "authApi",

  // Firebase SDK is not REST; fakeBaseQuery lets us use queryFn freely.
  baseQuery: fakeBaseQuery(),

  endpoints: (builder) => ({

    // ── Sign in with email + password ────────────────────────────────────────
    signIn: builder.mutation<SerializableUser, SignInArgs>({
      queryFn: async ({ email, password }) => {
        try {
          const credential = await signInWithEmailAndPassword(auth, email, password);
          return { data: toSerializable(credential.user) };
        } catch (e: unknown) {
          return { error: { status: "CUSTOM_ERROR", error: (e as Error).message, data: e } };
        }
      },
    }),

    // ── Sign up with email + password ────────────────────────────────────────
    signUp: builder.mutation<SerializableUser, SignUpArgs>({
      queryFn: async ({ email, password }) => {
        try {
          const credential = await createUserWithEmailAndPassword(auth, email, password);
          return { data: toSerializable(credential.user) };
        } catch (e: unknown) {
          return { error: { status: "CUSTOM_ERROR", error: (e as Error).message, data: e } };
        }
      },
    }),

    // ── Sign in with Google popup ────────────────────────────────────────────
    googleSignIn: builder.mutation<SerializableUser, void>({
      queryFn: async () => {
        try {
          const credential = await signInWithPopup(auth, googleProvider);
          return { data: toSerializable(credential.user) };
        } catch (e: unknown) {
          return { error: { status: "CUSTOM_ERROR", error: (e as Error).message, data: e } };
        }
      },
    }),

    // ── Send password-reset email ────────────────────────────────────────────
    forgotPassword: builder.mutation<void, ForgotPasswordArgs>({
      queryFn: async ({ email }) => {
        try {
          await sendPasswordResetEmail(auth, email);
          return { data: undefined };
        } catch (e: unknown) {
          return { error: { status: "CUSTOM_ERROR", error: (e as Error).message, data: e } };
        }
      },
    }),

    // ── Sign out ─────────────────────────────────────────────────────────────
    logOut: builder.mutation<void, void>({
      queryFn: async () => {
        try {
          await signOut(auth);
          return { data: undefined };
        } catch (e: unknown) {
          return { error: { status: "CUSTOM_ERROR", error: (e as Error).message, data: e } };
        }
      },
    }),
  }),
});

// ── Auto-generated hooks (used in components) ─────────────────────────────────
export const {
  useSignInMutation,
  useSignUpMutation,
  useGoogleSignInMutation,
  useForgotPasswordMutation,
  useLogOutMutation,
} = authApi;
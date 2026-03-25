// src/store/auth/authTypes.ts
// Shared serialisable types used by authSlice and authApi.

export interface SerializableUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  emailVerified: boolean;
}

export interface AuthState {
  user: SerializableUser | null;
  /** True while onAuthStateChanged hasn't fired yet on app boot */
  initialising: boolean;
  error: string | null;
  roles?: any;
  tenantId?: string;
}

// ── RTK Query arg / result shapes ─────────────────────────────────────────────

export interface SignInArgs {
  email: string;
  password: string;
}

export interface SignUpArgs {
  email: string;
  password: string;
}

export interface ForgotPasswordArgs {
  email: string;
}
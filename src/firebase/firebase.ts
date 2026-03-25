// firebase.ts — initialize once and export auth + providers
import { initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

// ── PASTE YOUR FIREBASE CONFIG HERE ────────────────────────────────────────
const firebaseConfig = {
  apiKey: "AIzaSyCPy560yYFfMhah1E2gq6rTq1D0KgnXDpA",
  authDomain: "ui-alchemy-53c8c.firebaseapp.com",
  projectId: "ui-alchemy-53c8c",
  storageBucket: "ui-alchemy-53c8c.firebasestorage.app",
  messagingSenderId: "840501095569",
  appId: "1:840501095569:web:cd9445e3f46edd9e56e330",
  measurementId: "G-QFJESBLP75"
};
// ───────────────────────────────────────────────────────────────────────────

const app: FirebaseApp             = initializeApp(firebaseConfig);
export const auth: Auth            = getAuth(app);
// const analytics = getAnalytics(app);
export const googleProvider        = new GoogleAuthProvider();
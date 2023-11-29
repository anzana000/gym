import { initializeApp } from "firebase/app";
import { getAuth, EmailAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBBmlE7g0ZOs03sFCa7LE7SvMuQJHXVP-8",
  authDomain: "gym-auth-34fa8.firebaseapp.com",
  projectId: "gym-auth-34fa8",
  storageBucket: "gym-auth-34fa8.appspot.com",
  messagingSenderId: "562603659789",
  appId: "1:562603659789:web:278ec976f549e2b7733b44",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_EMAIL_AUTH_PROVIDER = EmailAuthProvider;

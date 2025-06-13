
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7B53Tewu9fUUBeKTiGPagGbxgtPb7QU8",
  authDomain: "aceinterview-prepper.firebaseapp.com",
  projectId: "aceinterview-prepper",
  storageBucket: "aceinterview-prepper.firebasestorage.app",
  messagingSenderId: "759751167104",
  appId: "1:759751167104:web:bba1d5bd0e10ffeb666a65",
  measurementId: "G-9RY4758ML1"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);

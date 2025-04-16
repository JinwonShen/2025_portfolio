// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBY2GPJl4uxkOt2e_A8wCgHzYQYal1RUkg",
  authDomain: "jinwonshen-portfolio.firebaseapp.com",
  projectId: "jinwonshen-portfolio",
  storageBucket: "jinwonshen-portfolio.firebasestorage.app",
  messagingSenderId: "948370760457",
  appId: "1:948370760457:web:9fe631af0d01033ba3a9d8"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
export const db = getFirestore(app)
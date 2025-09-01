// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuLVQjh-YeFhwHJRA9NhRtxm7mbRvn6U4",
  authDomain: "book-finder-75a1e.firebaseapp.com",
  projectId: "book-finder-75a1e",
  storageBucket: "book-finder-75a1e.firebasestorage.app",
  messagingSenderId: "930779868771",
  appId: "1:930779868771:web:4c34d62e752a86792b5256",
  measurementId: "G-E6MVF2FNYR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

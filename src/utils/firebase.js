// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBzL6eoCRKLzz82wUo-it312Wo9egR_qE",
  authDomain: "netflixgpt-3020c.firebaseapp.com",
  projectId: "netflixgpt-3020c",
  storageBucket: "netflixgpt-3020c.appspot.com",
  messagingSenderId: "647242017481",
  appId: "1:647242017481:web:4c4e4c9cf8bee7090ebb18",
  measurementId: "G-1YEZDK6PFP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

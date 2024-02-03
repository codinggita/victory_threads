// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyABF4qlR7yJRTHiOdaX5DI_aWMJ0zc3ato",
  authDomain: "victorythreads-df000.firebaseapp.com",
  projectId: "victorythreads-df000",
  storageBucket: "victorythreads-df000.appspot.com",
  messagingSenderId: "749268521714",
  appId: "1:749268521714:web:a65bd24807d7345015f66b",
  measurementId: "G-JRTEPLDKTE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebasd'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHB9rGWYO7_cgMd9FaZFb0N28Y6RhfuGc",
  authDomain: "ema-john-9a919.firebaseapp.com",
  projectId: "ema-john-9a919",
  storageBucket: "ema-john-9a919.appspot.com",
  messagingSenderId: "637506345091",
  appId: "1:637506345091:web:868bf940bfa1a8901da3b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
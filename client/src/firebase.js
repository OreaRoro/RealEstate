// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-54345.firebaseapp.com",
  projectId: "mern-estate-54345",
  storageBucket: "mern-estate-54345.appspot.com",
  messagingSenderId: "669706131282",
  appId: "1:669706131282:web:4fcdc477e1b87ff369cc8b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
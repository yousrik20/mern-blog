// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-6b953.firebaseapp.com",
  projectId: "mern-blog-6b953",
  storageBucket: "mern-blog-6b953.appspot.com",
  messagingSenderId: "786643908444",
  appId: "1:786643908444:web:1576197f39ee7dd117f399"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);